package com.library.exercise6.repository;

import org.springframework.stereotype.Repository;

@Repository
public class BookRepository {
    public void save(String title) {
        System.out.println("[Exercise 6] BookRepository: saving book '" + title + "'");
    }
}
