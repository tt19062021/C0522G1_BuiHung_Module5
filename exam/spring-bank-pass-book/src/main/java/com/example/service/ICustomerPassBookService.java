package com.example.service;

import com.example.model.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface ICustomerPassBookService {
    Page<Customer> findAll(String customerName, Pageable pageable);

    Optional<Customer> findById(int id);

    void update(Customer customer);
    void remove(int id);
}
