package com.mockito.exercise4;

import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.*;

public class MyServiceTest {

    @Test
    public void testVoidMethod() {

        // Step 1 : Create Mock Object
        ExternalApi mockApi = mock(ExternalApi.class);

        // Step 2 : Stub Void Method
        doNothing().when(mockApi).sendData("Hello");

        // Step 3 : Create Service
        MyService service = new MyService(mockApi);

        // Step 4 : Call Method
        service.sendMessage("Hello");

        // Step 5 : Verify Method Call
        verify(mockApi).sendData("Hello");

        System.out.println("Void Method Verified Successfully");
    }
}