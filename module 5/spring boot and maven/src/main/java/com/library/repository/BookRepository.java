package com.library.repository;

import org.springframework.stereotype.Repository;

@Repository
public class BookRepository {
    public void save(String title) {
        System.out.println("BookRepository: saving book '" + title + "'");
    }

    public void findById(String id) {
        System.out.println("BookRepository: finding book with id " + id);
    }
}
