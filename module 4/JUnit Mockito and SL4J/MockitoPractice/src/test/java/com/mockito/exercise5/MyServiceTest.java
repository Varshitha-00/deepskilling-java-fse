package com.mockito.exercise5;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class MyServiceTest {

    @Test
    public void testMultipleReturns() {

        // Step 1 : Create Mock Object
        ExternalApi mockApi = mock(ExternalApi.class);

        // Step 2 : Stub Multiple Return Values
        when(mockApi.getData())
                .thenReturn("First Call")
                .thenReturn("Second Call")
                .thenReturn("Third Call");

        // Step 3 : Create Service
        MyService service = new MyService(mockApi);

        // Step 4 : Call Method Three Times
        String result1 = service.fetchData();
        String result2 = service.fetchData();
        String result3 = service.fetchData();

        // Step 5 : Verify Results
        assertEquals("First Call", result1);
        assertEquals("Second Call", result2);
        assertEquals("Third Call", result3);

        // Step 6 : Verify Method Called 3 Times
        verify(mockApi, times(3)).getData();

        System.out.println("1st Call : " + result1);
        System.out.println("2nd Call : " + result2);
        System.out.println("3rd Call : " + result3);

        System.out.println("Exercise 5 Passed Successfully");
    }
}