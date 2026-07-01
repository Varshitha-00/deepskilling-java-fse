package com.mockito.exercise2;

import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.*;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {

        // Step 1 : Create Mock Object
        ExternalApi mockApi = mock(ExternalApi.class);

        // Step 2 : Create Service Object
        MyService service = new MyService(mockApi);

        // Step 3 : Call Method
        service.fetchData();

        // Step 4 : Verify Method Call
        verify(mockApi).getData();

        System.out.println("Verification Successful");
    }
}