package com.example.logging;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class AppenderLoggingExample {

    private static final Logger logger =
            LoggerFactory.getLogger(AppenderLoggingExample.class);

    public static void main(String[] args) {

        logger.debug("Debugging application start");
        logger.info("Application is running");
        logger.warn("Low memory warning");
        logger.error("Unexpected error occurred");
    }
}