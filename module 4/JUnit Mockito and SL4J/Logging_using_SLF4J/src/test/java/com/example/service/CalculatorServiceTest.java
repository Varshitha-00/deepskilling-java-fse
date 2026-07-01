package com.example.app.service;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class CalculatorServiceTest {

    @Test
    void testAddition() {
        CalculatorService calc = new CalculatorService();
        assertEquals(8, calc.add(5, 3));
    }
}
