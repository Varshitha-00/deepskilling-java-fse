package com.mockito.exercise7;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

public class MyServiceTest {

    @Test
    public void testVoidMethodThrowsException() {

        // Step 1 : Create Mock Object
        ExternalApi mockApi = mock(ExternalApi.class);

        // Step 2 : Stub Void Method to Throw Exception
        doThrow(new RuntimeException("API Error"))
                .when(mockApi)
                .sendData("Hello");

        // Step 3 : Create Service
        MyService service = new MyService(mockApi);

        // Step 4 : Verify Exception
        RuntimeException exception = assertThrows(
                RuntimeException.class,
                () -> service.sendMessage("Hello")
        );

        // Step 5 : Check Exception Message
        System.out.println("Exception : " + exception.getMessage());

        // Step 6 : Verify Interaction
        verify(mockApi).sendData("Hello");

        System.out.println("Exercise 7 Passed Successfully");
    }
}