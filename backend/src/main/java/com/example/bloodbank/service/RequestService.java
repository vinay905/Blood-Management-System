package com.example.bloodbank.service;
import com.example.bloodbank.model.RequestModel;
import com.example.bloodbank.repository.RequestRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RequestService {
	
	@Autowired
    private RequestRepository requestRepo;
	
	
	public RequestModel saveRequest(RequestModel request) {
        return requestRepo.save(request);
    }
	
	public List<RequestModel> getAllRequests() {
        return requestRepo.findAll();
    }
}
