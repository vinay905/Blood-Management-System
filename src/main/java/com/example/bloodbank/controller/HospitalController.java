package com.example.bloodbank.controller;

import com.example.bloodbank.model.Hospital;
import com.example.bloodbank.service.HospitalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/api/hospitals")
public class HospitalController {

 @Autowired
 private HospitalService hospitalService;

 @CrossOrigin(origins = "http://localhost:3000")
 @GetMapping("/all")
 public List<Hospital> getAllHospitals() {
     return hospitalService.getAllHospitals();
 }

 @GetMapping("/{id}")
 public ResponseEntity<Hospital> getHospitalById(@PathVariable Long id) {
     Hospital hospital = hospitalService.getHospitalById(id);
     if (hospital != null) {
         return ResponseEntity.ok(hospital);
     } else {
         return ResponseEntity.notFound().build();
     }
 }

 @CrossOrigin(origins = "http://localhost:3000")
 @PostMapping
 public Hospital createHospital(@RequestBody Hospital hospital) {
    System.out.println(hospital);
     return hospitalService.saveHospital(hospital);
 }

 @PutMapping("/{id}")
 public ResponseEntity<Hospital> updateHospital(@PathVariable Long id, @RequestBody Hospital hospitalDetails) {
     Hospital hospital = hospitalService.getHospitalById(id);
     if (hospital != null) {
         hospital.setName(hospitalDetails.getName());
         hospital.setAddress(hospitalDetails.getAddress());
         hospital.setBloodTypes(hospitalDetails.getBloodTypes());
         return ResponseEntity.ok(hospitalService.saveHospital(hospital));
     } else {
         return ResponseEntity.notFound().build();
     }
 }

 @DeleteMapping("/{id}")
 public ResponseEntity<Void> deleteHospital(@PathVariable Long id) {
     Hospital hospital = hospitalService.getHospitalById(id);
     if (hospital != null) {
         hospitalService.deleteHospital(id);
         return ResponseEntity.noContent().build();
     } else {
         return ResponseEntity.notFound().build();
     }
 }
}
