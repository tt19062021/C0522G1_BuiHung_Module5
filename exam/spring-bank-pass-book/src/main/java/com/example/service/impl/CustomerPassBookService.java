package com.example.service.impl;

import com.example.model.Customer;
import com.example.repository.ICustomerPassBookRepository;
import com.example.service.ICustomerPassBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CustomerPassBookService implements ICustomerPassBookService {

    @Autowired
    private ICustomerPassBookRepository iCustomerPassBookRepository;
    @Override
    public Page<Customer> findAll(Pageable pageable) {
        return iCustomerPassBookRepository.findAll(pageable);
    }
}
