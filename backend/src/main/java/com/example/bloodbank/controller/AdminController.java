package com.example.bloodbank.controller;

import com.example.bloodbank.model.Admin;
import com.example.bloodbank.model.Donor;
import com.example.bloodbank.model.Hospital;
import com.example.bloodbank.model.RequestModel;
import com.example.bloodbank.service.AdminService;
import com.example.bloodbank.service.DonorService;
import com.example.bloodbank.service.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

	private static final Logger logger = LoggerFactory.getLogger(AdminController.class);
	
    @Autowired
    private AdminService adminService;
    
    @Autowired
    private RequestService requestService;
    
    @Autowired
    private DonorService donorService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/verify")
    public String checkCredentials(@RequestBody Admin credentials) {
    	logger.info("Received credentials: {}", credentials);
	    logger.info("Username: {}, Password: {}", credentials.getUsername(), credentials.getUserpassword());
        String token = adminService.checkLogin(credentials);
        if (token != null) {
        	return "Login successful, Token: " + token;  
        } else {
            return "Invalid credentials";  
        }
    }
    
 
    @PostMapping("/validate-token")
    public boolean validateToken(@RequestBody String token) {
        return adminService.validateToken(token);
    }
    
    @GetMapping("/all-requests")
    public List<RequestModel> getAllRequests() {
        return requestService.getAllRequests();
    }
    
    @GetMapping("/all-donors")
    public List<Donor> getAllDonors() {
        return donorService.getAllDonors();
    }
    
//    @PostMapping("/add-donors")
//    public List<Donor> saveDonors(@RequestBody Donor data) {
//        return donorService.saveDonors(data);
//    }
//    
//    @PostMapping("/add-Hospitals")
//    public List<Donor> saveHospitals(@RequestBody Hospital data) {
//        return donorService.saveHospitals(data);
//    }
}
