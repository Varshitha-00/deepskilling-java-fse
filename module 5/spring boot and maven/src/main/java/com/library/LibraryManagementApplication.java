package com.library;

import com.library.service.BookService;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApplication {
    public static void main(String[] args) {
        System.out.println("=== Explicit XML bean configuration ===");
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        BookService bookService = (BookService) context.getBean("bookService");
        bookService.addBook("Spring in Action");
        bookService.getBookById("101");

        BookService setterService = (BookService) context.getBean("bookServiceSetter");
        setterService.addBook("Effective Java");

        BookService constructorService = (BookService) context.getBean("bookServiceConstructor");
        constructorService.getBookById("202");

        context.close();

        System.out.println("\n=== Annotation-based component scanning ===");
        ClassPathXmlApplicationContext annotationContext = new ClassPathXmlApplicationContext("applicationContext-annotations.xml");
        BookService annotationService = annotationContext.getBean(BookService.class);
        annotationService.addBook("Annotation Driven Development");
        annotationService.getBookById("303");
        annotationContext.close();
    }
