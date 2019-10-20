package com.vpf.models;

import java.io.Serializable;

public class JwtRequest implements Serializable {
	
	private static final long serialVersionUID = 5926468583005150707L;
	
	private String usernameOrEmail;
	private String password;

	//need default constructor for JSON Parsing
	public JwtRequest() {
	}

	public String getUsernameOrEmail() {
		return this.usernameOrEmail;
	}

	public void setUsernameOrEmail(String usernameOrEmail) {
		this.usernameOrEmail = usernameOrEmail;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
