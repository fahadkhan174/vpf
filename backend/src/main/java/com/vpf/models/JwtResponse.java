package com.vpf.models;

import java.io.Serializable;

public class JwtResponse implements Serializable {
	private static final long serialVersionUID = -8091879091924046844L;
	private String jwttoken;

	public void setJwttoken(String jwttoken) {
		this.jwttoken = jwttoken;
	}

	private String username;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getJwttoken() {
		return jwttoken;
	}

}