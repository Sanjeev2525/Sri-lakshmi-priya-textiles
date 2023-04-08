package com.srilakshmipriyatextiles.demo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "products")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Products {

    @Id
    private ObjectId id;
    private String product;
    private String name;
    private String size;
    private String material;
    private double price;
    private String photos;

}
