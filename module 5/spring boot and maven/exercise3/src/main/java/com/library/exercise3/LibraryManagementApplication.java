package com.library.exercise3;

import com.library.exercise3.service.BookService;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApplication {
    public static void main(String[] args) {
        System.out.println("=== Exercise 3: Logging with Spring AOP ===");
        try (ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml")) {
            BookService bookService = context.getBean("bookService", BookService.class);
            bookService.addBook("Spring AOP Book");
            bookService.getBookById("1001");
        }
    }
}
