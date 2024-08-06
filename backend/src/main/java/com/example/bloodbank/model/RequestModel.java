package com.example.bloodbank.model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Bloodrequests")
public class RequestModel {
	@Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long id;
	
	@Column(name = "name", nullable = false)
	 private String name;
	
	 @Column(name = "blood_types", nullable = false)
	 private String bloodTypes;
	 
	 @Column(name = "phone", nullable = false)
	 private String phone;
	 
	 @Column(name = "location", nullable = false)
	 private String location;
	 
	// Default constructor
	    public RequestModel() {}

	    // Parameterized constructor
	    public RequestModel(String name, String bloodTypes, String phone, String location) {
	        this.name = name;
	        this.bloodTypes = bloodTypes;
	        this.phone = phone;
	        this.location = location;
	    }

	    // Getters and Setters
	    public Long getId() {
	        return id;
	    }

	    public void setId(Long id) {
	        this.id = id;
	    }

	    public String getName() {
	        return name;
	    }

	    public void setName(String name) {
	        this.name = name;
	    }

	    public String getBloodTypes() {
	        return bloodTypes;
	    }

	    public void setBloodTypes(String bloodTypes) {
	        this.bloodTypes = bloodTypes;
	    }

	    public String getPhone() {
	        return phone;
	    }

	    public void setPhone(String phone) {
	        this.phone = phone;
	    }

	    public String getLocation() {
	        return location;
	    }

	    public void setLocation(String location) {
	        this.location = location;
	    }
}
