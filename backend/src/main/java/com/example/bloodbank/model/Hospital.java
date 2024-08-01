package com.example.bloodbank.model;

import jakarta.persistence.*;

@Entity
@Table(name = "hospitals")
public class Hospital {

 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;

 @Column(name = "name", nullable = false)
 private String name;

 @Column(name = "address", nullable = false)
 private String address;

 @Column(name = "blood_types", nullable = false)
 private String bloodTypes;

 public Hospital() {}

 public Hospital(String name, String address, String bloodTypes) {
     this.name = name;
     this.address = address;
     this.bloodTypes = bloodTypes;
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

 public String getAddress() {
     return address;
 }

 public void setAddress(String address) {
     this.address = address;
 }

 public String getBloodTypes() {
     return bloodTypes;
 }

 public void setBloodTypes(String bloodTypes) {
     this.bloodTypes = bloodTypes;
 }
}
