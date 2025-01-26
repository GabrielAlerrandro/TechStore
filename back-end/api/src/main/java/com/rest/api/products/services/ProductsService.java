package com.rest.api.products.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.rest.api.products.dtos.ProductDto;
import com.rest.api.products.models.ProductModel;
import com.rest.api.products.repository.ProductRepositorie;


@Service
public class ProductsService {
    
    @Autowired
    private ProductRepositorie repository;

    @Autowired
    private ImgService imgService;

    //Get 
    public Optional<ProductModel> findProduct(Integer id) {
        return repository.findById(id);
    }

    //Delete
    public void deleteProduct(Integer id) {
        repository.deleteById(id);
    }

    //Create
    public ProductModel createProduct(ProductDto productDto) {
        // Criação do modelo de produto a partir do DTO
        ProductModel product = new ProductModel();
        product.setName(productDto.getName());
        product.setPrice(productDto.getPrice());
        product.setDescription(productDto.getDescription());
        product.setQuantity(productDto.getQuantity());
        List<String> imgsUrl = imgService.saveImgs(productDto);
        product.setImg(imgsUrl);
        return repository.save(product);
        
    }

    //Put 
    public ProductModel updateProduct(ProductModel product) {
        return product;
    }

    //All Products
    public List<ProductModel> listProduct() {
        return repository.findAll();
    }
}