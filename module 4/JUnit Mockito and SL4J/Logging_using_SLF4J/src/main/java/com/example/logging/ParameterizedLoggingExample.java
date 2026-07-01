package com.example.logging;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ParameterizedLoggingExample {

    private static final Logger logger =
            LoggerFactory.getLogger(ParameterizedLoggingExample.class);

    public static void main(String[] args) {

        String user = "Harini";
        int orderId = 101;

        logger.info("User {} placed order with ID {}", user, orderId);
        logger.warn("Order {} is taking longer than expected", orderId);
        logger.error("Order {} failed due to payment issue", orderId);
    }
}