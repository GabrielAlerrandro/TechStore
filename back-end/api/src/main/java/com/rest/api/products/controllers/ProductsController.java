package com.rest.api.products.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rest.api.products.dtos.ProductDto;
import com.rest.api.products.models.ProductModel;
import com.rest.api.products.services.ProductsService;


@RestController
@RequestMapping("/products")
public class ProductsController {

    @Autowired
    private ProductsService productsService;

    // Pega produto por id
    @GetMapping("/get/{id}")
    public ResponseEntity<Optional<ProductModel>> getProduct(@PathVariable Integer id) {
        return ResponseEntity.status(HttpStatus.OK).body(productsService.findProduct(id));
    }

    // Adiciona produto
    @PostMapping("/add")
    public ResponseEntity<ProductModel> addProduct(@ModelAttribute ProductDto formProduct) {
        var product = productsService.createProduct(formProduct);
        return ResponseEntity.status(202).body(product);
    }


    // Atualiza produto por id
    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateProduct() {
        return ResponseEntity.status(HttpStatus.OK).body("");
    }

    // Deleta produto pelo id
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteProduct() {
        return ResponseEntity.status(HttpStatus.OK).body("");
    }

    // Pega todos os produtos
    @GetMapping("all")
    public ResponseEntity<List<ProductModel>> getAllProducts() {
        return ResponseEntity.status(HttpStatus.OK).body(productsService.listProduct());
    }
}
