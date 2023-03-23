package com.srilakshmipriyatextiles.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class productService {

    @Autowired
    private productRepository productRepository;
    public List<Products> allProducts(){
        return productRepository.findAll();
    }
    public Optional<List<Products>> findProductByType(String product) {
        return productRepository.findProductsByproduct(product);
    }
}
