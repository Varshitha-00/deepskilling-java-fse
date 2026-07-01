package com.mockito.exercise1;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class MyServiceTest {

    @Test
    public void testExternalApi() {

        // Step 1 : Create Mock Object
        ExternalApi mockApi = mock(ExternalApi.class);

        // Step 2 : Stub Method
        when(mockApi.getData()).thenReturn("Mock Data");

        // Step 3 : Create Service
        MyService service = new MyService(mockApi);

        // Step 4 : Call Method
        String result = service.fetchData();

        // Step 5 : Verify Result
        assertEquals("Mock Data", result);

        System.out.println("Output : " + result);
        System.out.println("Exercise 1 Passed Successfully");
    }
}