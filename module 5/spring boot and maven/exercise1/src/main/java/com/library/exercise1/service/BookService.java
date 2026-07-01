package com.library.exercise1.service;

import com.library.exercise1.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String title) {
        System.out.println("[Exercise 1] BookService: adding book '" + title + "'");
        bookRepository.save(title);
    }
}
