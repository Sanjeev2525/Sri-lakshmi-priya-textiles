package com.srilakshmipriyatextiles.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/v1/products")
@CrossOrigin(origins = "*")
public class productsController {

    @Autowired
    private productService productService;

    @CrossOrigin(origins = "*")
    @GetMapping
    public ResponseEntity<Products> getAllProducts(){
        return new ResponseEntity(productService.allProducts(), HttpStatusCode.valueOf(200));
    }

    /*@GetMapping("/{product}")
    public ResponseEntity<?> downloadImage(@PathVariable String product){
        byte[] imageData=service.downloadImage(product);
        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf("image/png"))
                .body(imageData);
    }*/

    @Autowired
    private productService service;

    @CrossOrigin(origins = "*")
    @GetMapping("/{product}")
    public ResponseEntity<Optional<List>> getSingleProduct(@PathVariable String product){
        return new ResponseEntity(service.findProductByType(product),HttpStatusCode.valueOf(200));
    }

    @GetMapping("/{product}/{item}")
    public ResponseEntity<Optional>getOneProduct( @PathVariable String product,@PathVariable String item){
        return new ResponseEntity<>(service.findProductByName(item),HttpStatusCode.valueOf(200));
    }
    @PostMapping
    public ResponseEntity<?> uploadProducts(@RequestParam() String photos,String product,String name,String size,String material,double price) throws IOException {
        String uploadedProduct = productService.postProduct(product,name,size,material,price,photos);
        return ResponseEntity.status(HttpStatus.OK)
                .body(uploadedProduct);
    }





}


