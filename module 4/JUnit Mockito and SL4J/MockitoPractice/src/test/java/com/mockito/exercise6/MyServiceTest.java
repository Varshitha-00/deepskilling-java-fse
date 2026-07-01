package com.mockito.exercise6;

import org.junit.jupiter.api.Test;
import org.mockito.InOrder;

import static org.mockito.Mockito.*;

public class MyServiceTest {

    @Test
    public void testInteractionOrder() {

        // Step 1 : Create Mock Object
        ExternalApi mockApi = mock(ExternalApi.class);

        // Step 2 : Create Service
        MyService service = new MyService(mockApi);

        // Step 3 : Call Method
        service.processData();

        // Step 4 : Create InOrder Object
        InOrder inOrder = inOrder(mockApi);

        // Step 5 : Verify Order
        inOrder.verify(mockApi).connect();
        inOrder.verify(mockApi).getData();
        inOrder.verify(mockApi).disconnect();

        System.out.println("Interaction Order Verified Successfully");
    }
}