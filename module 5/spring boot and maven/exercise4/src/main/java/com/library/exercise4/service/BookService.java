package com.library.exercise4.service;

import com.library.exercise4.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String title) {
        System.out.println("[Exercise 4] BookService: adding book '" + title + "'");
        bookRepository.save(title);
    }
}
