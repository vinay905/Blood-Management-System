package com.example.bloodbank.service;
import com.example.bloodbank.model.Donor;
import com.example.bloodbank.model.Hospital;
import com.example.bloodbank.repository.DonorRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DonorService {

 @Autowired
 private DonorRepository donorRepository;

 public String saveDonor(Donor donor) {
	 try {
//		 System.out.println(donor);
         donorRepository.save(donor);
         return "Donor data stored successfully!";
     } catch (Exception e) {
         return "Failed to store donor data: " + e.getMessage();
     }
 }
 
 public List<Donor> getAllDonors() {
     return donorRepository.findAll();
 }
 
}
