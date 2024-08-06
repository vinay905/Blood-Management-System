package com.example.bloodbank.repository;


import com.example.bloodbank.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {
	Admin findByUsernameAndUserpassword(String username, String userpassword);
}
