package com.library.exercise7.service;

import com.library.exercise7.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String title) {
        System.out.println("[Exercise 7] BookService: adding book '" + title + "'");
        bookRepository.save(title);
    }
}
