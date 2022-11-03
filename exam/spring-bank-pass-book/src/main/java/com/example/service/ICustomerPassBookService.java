package com.example.service;

import com.example.model.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ICustomerPassBookService {
    Page<Customer> findAll(String customerName ,Pageable pageable);
    
}
