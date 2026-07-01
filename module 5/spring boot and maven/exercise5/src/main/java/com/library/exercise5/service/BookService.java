package com.library.exercise5.service;

import com.library.exercise5.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String title) {
        System.out.println("[Exercise 5] BookService: adding book '" + title + "'");
        bookRepository.save(title);
    }
}
