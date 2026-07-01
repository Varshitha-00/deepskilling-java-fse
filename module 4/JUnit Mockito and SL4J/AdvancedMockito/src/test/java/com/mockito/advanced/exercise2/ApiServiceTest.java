package com.mockito.advanced.exercise2;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class ApiServiceTest {

    @Test
    public void testServiceWithMockRestClient() {

        // Step 1 : Create Mock REST Client
        RestClient mockRestClient = mock(RestClient.class);

        // Step 2 : Stub REST Client Method
        when(mockRestClient.getResponse())
                .thenReturn("Mock Response");

        // Step 3 : Create Service
        ApiService apiService = new ApiService(mockRestClient);

        // Step 4 : Call Service Method
        String result = apiService.fetchData();

        // Step 5 : Verify Result
        assertEquals("Fetched Mock Response", result);

        // Step 6 : Verify Interaction
        verify(mockRestClient).getResponse();

        System.out.println("Output : " + result);
        System.out.println("Advanced Exercise 2 Passed Successfully");
    }
}