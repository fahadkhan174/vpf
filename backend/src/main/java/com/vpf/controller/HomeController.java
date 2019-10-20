package com.vpf.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

	class User {
		public String name = "";
	}

	@GetMapping("/user")
	@ResponseBody
	public User getUser() {
		User user = new User();
		user.name = "Fahad";
		return user;
	}

	@RequestMapping({ "/hello" })
	@PreAuthorize("hasRole('ROLE_USER')")
	public String firstPage() {
		return "Hello World";
	}
}
