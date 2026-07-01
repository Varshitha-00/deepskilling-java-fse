package com.mockito.advanced.exercise4;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class NetworkServiceTest {

    @Test
    public void testServiceWithMockNetworkClient() {

        // Step 1 : Create Mock Network Client
        NetworkClient mockNetworkClient = mock(NetworkClient.class);

        // Step 2 : Stub Method
        when(mockNetworkClient.connect())
                .thenReturn("Mock Connection");

        // Step 3 : Create Service
        NetworkService networkService =
                new NetworkService(mockNetworkClient);

        // Step 4 : Call Method
        String result = networkService.connectToServer();

        // Step 5 : Verify Result
        assertEquals("Connected to Mock Connection", result);

        // Step 6 : Verify Interaction
        verify(mockNetworkClient).connect();

        System.out.println("Output : " + result);
        System.out.println("Advanced Exercise 4 Passed Successfully");
    }
}