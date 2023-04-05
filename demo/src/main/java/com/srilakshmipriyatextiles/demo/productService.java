package com.srilakshmipriyatextiles.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
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





    public String postProduct(MultipartFile image,String product,String name,String size, String material ,double price) throws IOException {

        Products products = productRepository.save(Products.builder()
                .product(product)
                .price(price)
                .size(size)
                .material(material)
                .name(name)
                .photos(ImageUtils.compressImage(image.getBytes())).build());
        if (products!=null) {
            return "file uploaded successfully : " + image.getOriginalFilename();
        }
        return null;
    }

    public byte[] downloadImage(String fileName){
        Optional<Products> dbImageData = productRepository.findById(fileName);
        byte[] photos=ImageUtils.decompressImage(dbImageData.get().getPhotos());
        return photos;
    }
}
