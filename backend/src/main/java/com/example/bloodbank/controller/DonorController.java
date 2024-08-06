package com.example.bloodbank.controller;
import com.example.bloodbank.model.Donor;
import com.example.bloodbank.service.DonorService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/donor")
public class DonorController {

    @Autowired
    private DonorService donorService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/donor-registration")
    public String registerDonor(@RequestBody Donor donor) {
    	System.out.println(donor);
        String response= donorService.saveDonor(donor);
        return response;
    }
    
}

