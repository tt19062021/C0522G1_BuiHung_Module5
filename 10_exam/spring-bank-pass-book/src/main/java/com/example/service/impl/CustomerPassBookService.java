package com.example.service.impl;

import com.example.model.Customer;
import com.example.repository.ICustomerPassBookRepository;
import com.example.service.ICustomerPassBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerPassBookService implements ICustomerPassBookService {

    @Autowired
    private ICustomerPassBookRepository iCustomerPassBookRepository;
    @Override
    public Page<Customer> findAll(String customerName , Pageable pageable) {
        return iCustomerPassBookRepository.findAllByQuery(customerName, pageable);
    }

    @Override
    public Optional<Customer> findById(int id) {
        return iCustomerPassBookRepository.findById(id);
    }

    @Override
    public void update(Customer customer) {
        iCustomerPassBookRepository.save(customer);
    }

    @Override
    public void remove(int id) {
        iCustomerPassBookRepository.deleteLogic(id);
    }
}
