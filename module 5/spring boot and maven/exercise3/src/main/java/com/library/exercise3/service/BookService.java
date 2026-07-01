package com.library.exercise3.service;

import com.library.exercise3.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String title) {
        System.out.println("[Exercise 3] BookService: adding book '" + title + "'");
        bookRepository.save(title);
    }

    public void getBookById(String id) {
        System.out.println("[Exercise 3] BookService: fetching book with id " + id);
        bookRepository.findById(id);
    }
}
