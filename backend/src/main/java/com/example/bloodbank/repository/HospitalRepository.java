package com.example.bloodbank.repository;

import com.example.bloodbank.model.Hospital;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface HospitalRepository extends JpaRepository<Hospital, Long> {
	@Query("SELECT DISTINCT h.location FROM Hospital h")
    List<String> findDistinctLocations();
}