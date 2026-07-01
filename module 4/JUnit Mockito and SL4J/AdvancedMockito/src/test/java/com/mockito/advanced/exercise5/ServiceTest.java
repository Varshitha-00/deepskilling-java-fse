package com.mockito.advanced.exercise5;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class ServiceTest {

    @Test
    public void testServiceWithMultipleReturnValues() {

        // Step 1 : Create Mock Repository
        Repository mockRepository = mock(Repository.class);

        // Step 2 : Stub Multiple Return Values
        when(mockRepository.getData())
                .thenReturn("First Mock Data")
                .thenReturn("Second Mock Data");

        // Step 3 : Create Service
        Service service = new Service(mockRepository);

        // Step 4 : Call Service Twice
        String firstResult = service.processData();
        String secondResult = service.processData();

        // Step 5 : Verify Results
        assertEquals("Processed First Mock Data", firstResult);
        assertEquals("Processed Second Mock Data", secondResult);

        // Step 6 : Verify Method Called Twice
        verify(mockRepository, times(2)).getData();

        System.out.println("First Result  : " + firstResult);
        System.out.println("Second Result : " + secondResult);
        System.out.println("Advanced Exercise 5 Passed Successfully");
    }
}