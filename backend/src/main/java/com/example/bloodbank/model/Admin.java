package com.example.bloodbank.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "admins")
public class Admin {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "username", nullable = false)
	private String username;
	
	@Column(name = "userpassword", nullable = false)
	private String userpassword;
	
	@Column(name = "email", nullable = false)
	private String email;
	
	public Admin() {};
	
	public Admin(String username, String userpassword,String email)
	{
		this.username=username;
		this.userpassword=userpassword;
		this.email=email;
	}
	
	//getter and setter methods
	public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
    
    public String getUserpassword() {
        return userpassword;
    }

    public void setUserpassword(String userpassword) {
        this.userpassword = userpassword;
    }
    
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    
    @Override
    public String toString() {
        return "Admin{" +
                "username='" + username + '\'' +
                ", password='" + userpassword + '\'' +
                '}';
    }
}
