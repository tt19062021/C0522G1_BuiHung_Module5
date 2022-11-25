package com.example.controller;

import com.example.model.Customer;
import com.example.service.ICustomerPassBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@RequestMapping("/api/customer")
@CrossOrigin()
public class RestCustomerController {

    @Autowired
    private ICustomerPassBookService iCustomerPassBookService;

    @GetMapping
    public ResponseEntity<Page<Customer>> findAllCustomer(@RequestParam(value = "customerName", defaultValue = "") String nameSearch
            ,@PageableDefault Pageable pageable) {
        Page<Customer> customerList = iCustomerPassBookService.findAll(nameSearch, pageable);
        if (customerList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(customerList, HttpStatus.OK);
        }
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Customer> deleteCustomer(@PathVariable int id) {
        Optional<Customer> customer = iCustomerPassBookService.findById(id);
        if (customer.isPresent()) {
            iCustomerPassBookService.remove(id);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PatchMapping ("/edit/{id}")
    public ResponseEntity<Customer> saveEditing(@RequestBody Customer customer,
                                                @PathVariable int id) {
        Customer customer1 = iCustomerPassBookService.findById(id).get();
        iCustomerPassBookService.update(customer1);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
