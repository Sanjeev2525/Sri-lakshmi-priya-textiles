package com.srilakshmipriyatextiles.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/products")
public class productsController {

    @Autowired
    private productService productService;
    @GetMapping
    public ResponseEntity<List<Products>> getAllProducts(){
        return new ResponseEntity<>(productService.allProducts(), HttpStatusCode.valueOf(200));
    }
    @Autowired
    private productService service;
    @GetMapping("/{product}")
    public ResponseEntity<Optional<List<Products>>> getSingleProduct(@PathVariable String product){
        return new ResponseEntity<>(service.findProductByType(product),HttpStatusCode.valueOf(200));
    }
}


