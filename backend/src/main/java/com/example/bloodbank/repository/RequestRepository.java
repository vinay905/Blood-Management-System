package com.example.bloodbank.repository;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import com.example.bloodbank.model.RequestModel;
import java.util.List;

@Repository
public interface RequestRepository extends JpaRepository<RequestModel, Long> {
}
	
