package com.srilakshmipriyatextiles.demo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface productRepository extends MongoRepository<Products, Object> {
    Optional<List<Products>> findProductsByproduct(String product);

}
