package com.library.junitpractice;

import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {

        // equals
        assertEquals(5, 2 + 3);

        // true condition
        assertTrue(10 > 5);

        // false condition
        assertFalse(10 < 5);

        // null check
        assertNull(null);

        // not null check
        assertNotNull(new Object());
    }
}