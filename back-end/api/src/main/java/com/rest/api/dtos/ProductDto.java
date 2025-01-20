package com.rest.api.dtos;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class ProductDto {
    private String name;
    private Double price;
    private String description;
    private long quantity;
    private List<MultipartFile> imgs;
}