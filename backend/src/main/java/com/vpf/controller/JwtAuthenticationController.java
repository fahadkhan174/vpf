package com.vpf.controller;

import java.net.URI;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.vpf.models.ApiResponse;
import com.vpf.models.JwtRequest;
import com.vpf.models.Role;
import com.vpf.models.RoleName;
import com.vpf.models.SignUpRequest;
import com.vpf.models.User;
import com.vpf.repository.RoleRepository;
import com.vpf.repository.UserRepository;
import com.vpf.service.UserDetailsServiceImpl;
import com.vpf.util.JwtUtil;

@CrossOrigin("*")
@RestController
public class JwtAuthenticationController {

	@Autowired
	private AuthenticationManager authManager;

	@Autowired
	private JwtUtil jwtUtil;

	@Autowired
	private UserDetailsServiceImpl userDetailsService;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	PasswordEncoder passwordEncoder;

	@PostMapping(value = "/api/auth/signin")
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authRequest) throws Exception {
		Authentication authentication = authenticate( authRequest.getUsernameOrEmail(), authRequest.getPassword());
		
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String token = jwtUtil.generateToken(authentication);
		
		Map<Object, Object> model = new HashMap<>();
		model.put("email", authRequest.getUsernameOrEmail());
		model.put("token", token);
		
		return ResponseEntity.ok(model);
	}

	private Authentication authenticate(String username, String password) throws Exception {
		try {
			return authManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}

	@PostMapping("/api/auth/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest) {
		if (userRepository.existsByUsername(signUpRequest.getUsername())) {
			return new ResponseEntity<Object>(new ApiResponse(false, "Username is already taken!"),
					HttpStatus.BAD_REQUEST);
		}

		if (userRepository.existsByEmail(signUpRequest.getEmail())) {
			return new ResponseEntity<Object>(new ApiResponse(false, "Email Address already in use!"),
					HttpStatus.BAD_REQUEST);
		}

		// Creating user's account
		User user = new User(signUpRequest.getFullname(), signUpRequest.getUsername(), signUpRequest.getEmail(),
				signUpRequest.getPassword());

		user.setPassword(passwordEncoder.encode(user.getPassword()));

		try {
			Role userRole = roleRepository.findByName(RoleName.ROLE_USER)
					.orElseThrow(() -> new Exception("User Role not set."));
			user.setRoles(Collections.singleton(userRole));
		} catch (Exception e) {
			System.out.println("Error Message : " + e.getMessage());
			e.printStackTrace();
		}

		User result = userRepository.save(user);
		URI location = ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/users/{username}")
				.buildAndExpand(result.getUsername()).toUri();
		return ResponseEntity.created(location).body(new ApiResponse(true, "User registered successfully"));
	}

}
