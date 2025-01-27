package com.rest.api.products.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rest.api.products.models.ProductModel;;

public interface ProductRepositorie extends JpaRepository<ProductModel, Integer> {
    
}
