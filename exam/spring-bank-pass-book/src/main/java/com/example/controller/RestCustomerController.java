package com.example.controller;

import com.example.model.Customer;
import com.example.service.ICustomerPassBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin()
@RestController
@RequestMapping("/api/customer")
public class RestCustomerController {

    @Autowired
    private ICustomerPassBookService iCustomerPassBookService;

    @GetMapping
    public ResponseEntity<Page<Customer>> findAllCustomer(@PageableDefault Pageable pageable) {
        Page<Customer> customerList = iCustomerPassBookService.findAll(pageable);
        if (customerList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(customerList, HttpStatus.OK);
        }
    }
}
