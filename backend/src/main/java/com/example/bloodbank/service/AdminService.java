package com.example.bloodbank.service;

import com.example.bloodbank.controller.AdminController;
import com.example.bloodbank.model.Admin;
import com.example.bloodbank.repository.AdminRepository;
import com.example.bloodbank.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
@Service
public class AdminService {
	private static final Logger logger = LoggerFactory.getLogger(AdminController.class);
    @Autowired
    private AdminRepository adminRepo;

    @Autowired
    private JwtUtil jwtUtil;

    public String checkLogin(Admin credentials) {
        try {
            Admin admin = adminRepo.findByUsernameAndUserpassword(
                    credentials.getUsername(), credentials.getUserpassword());
            if (admin != null) {
                return jwtUtil.generateToken(admin.getUsername());
            } else {
                return null;
            }
        } catch (Exception e) {
        	logger.info("Errors: {}", e);
    	    
            return null;
        }
    }
    
    public boolean validateToken(String token) {
        try {
            String username = jwtUtil.extractUsername(token);
            return jwtUtil.validateToken(token, username);
        } catch (Exception e) {
            logger.error("Token validation failed", e);
            return false;
        }
    }
}
