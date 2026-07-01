package com.library.service;

import com.library.repository.BookRepository;
import org.springframework.stereotype.Service;

@Service
public class BookService {
    private BookRepository bookRepository;

    public BookService() {
    }

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String title) {
        System.out.println("BookService: adding book '" + title + "'");
        if (bookRepository != null) {
            bookRepository.save(title);
        } else {
            System.out.println("BookRepository is not injected.");
        }
    }

    public void getBookById(String id) {
        System.out.println("BookService: fetching book by id " + id);
        if (bookRepository != null) {
            bookRepository.findById(id);
        } else {
            System.out.println("BookRepository is not injected.");
        }
    }
}
