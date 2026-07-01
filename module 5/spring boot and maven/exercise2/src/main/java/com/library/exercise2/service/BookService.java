package com.library.exercise2.service;

import com.library.exercise2.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String title) {
        System.out.println("[Exercise 2] BookService: adding book '" + title + "'");
        bookRepository.save(title);
    }
}
