package com.library.exercise6;

import com.library.exercise6.service.BookService;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApplication {
    public static void main(String[] args) {
        System.out.println("=== Exercise 6: Annotation-Based Spring Beans ===");
        try (ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml")) {
            BookService bookService = context.getBean(BookService.class);
            bookService.addBook("Spring Annotation Book");
        }
    }
}
