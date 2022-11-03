package com.example.repository;

import com.example.model.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface ICustomerPassBookRepository extends JpaRepository<Customer, Integer> {
    @Query(value = "select * from customer where name like %:search% and is_delete = 0", nativeQuery = true)
    Page<Customer> findAllByQuery(@Param("search") String customerName, Pageable pageable);
}
