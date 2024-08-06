package com.example.bloodbank.controller;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.bloodbank.model.RequestModel;
import com.example.bloodbank.service.RequestService;

import org.slf4j.Logger;

@RestController
@RequestMapping("/api/blood-request")
public class BloodRequest {
	private static final Logger logger = LoggerFactory.getLogger(BloodRequest.class);
	@Autowired
    private RequestService Request;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping
    public String registerRequest(@RequestBody RequestModel request) {
        logger.info("Received request data: {}", request);
        // Log each field if needed
        logger.info("Name: {}", request.getName());
        logger.info("Blood Type: {}", request.getBloodTypes());
        logger.info("Location: {}", request.getLocation());
        logger.info("Contact Info: {}", request.getPhone());
        
        // Save request data in the database
        Request.saveRequest(request);

        return "Request submitted successfully.";
    }
}
