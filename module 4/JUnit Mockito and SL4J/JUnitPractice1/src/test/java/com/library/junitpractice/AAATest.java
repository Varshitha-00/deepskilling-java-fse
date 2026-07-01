package com.library.junitpractice;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class AAATest {

    private Calculator calculator;

    // SETUP (Arrange part common)
    @Before
    public void setUp() {
        System.out.println("Setting up test...");
        calculator = new Calculator();
    }

    // TEARDOWN
    @After
    public void tearDown() {
        System.out.println("Cleaning up after test...");
        calculator = null;
    }

    @Test
    public void testAddition_AAA() {

        // ARRANGE
        int a = 3;
        int b = 2;

        // ACT
        int result = calculator.add(a, b);

        // ASSERT
        assertEquals(5, result);
    }

    @Test
    public void testMultiplication_AAA() {

        // ARRANGE
        int a = 4;
        int b = 5;

        // ACT
        int result = calculator.multiply(a, b);

        // ASSERT
        assertEquals(20, result);
    }
}