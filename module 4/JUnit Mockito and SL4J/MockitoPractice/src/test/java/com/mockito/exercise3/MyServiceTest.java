package com.mockito.exercise3;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;

public class MyServiceTest {

    @Test
    public void testArgumentMatching() {

        // Step 1 : Create Mock Object
        ExternalApi mockApi = mock(ExternalApi.class);

        // Step 2 : Stub Method
        when(mockApi.getData(anyString())).thenReturn("Mock Data");

        // Step 3 : Create Service
        MyService service = new MyService(mockApi);

        // Step 4 : Call Method
        String result = service.fetchData("101");

        // Step 5 : Check Result
        assertEquals("Mock Data", result);

        // Step 6 : Verify Exact Argument
        verify(mockApi).getData(eq("101"));

        System.out.println("Output : " + result);
        System.out.println("Argument Matching Successful");
    }
}