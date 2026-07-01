package com.library.exercise3.repository;

public class BookRepository {
    public void save(String title) {
        System.out.println("[Exercise 3] BookRepository: saving book '" + title + "'");
    }

    public void findById(String id) {
        System.out.println("[Exercise 3] BookRepository: finding book with id " + id);
    }
}
