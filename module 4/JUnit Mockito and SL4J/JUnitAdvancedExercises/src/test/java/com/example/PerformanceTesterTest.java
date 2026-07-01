package com.example;

import org.junit.jupiter.api.Test;
import java.time.Duration;
import static org.junit.jupiter.api.Assertions.assertTimeout;

public class PerformanceTesterTest {

    private final PerformanceTester tester = new PerformanceTester();

    @Test
    void testPerformTaskTimeout() {
        // Asserts that execution completes within 100 milliseconds
        assertTimeout(Duration.ofMillis(100), () -> {
            tester.performTask();
        });
    }
}
