package com.mockito.advanced.exercise1;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class ServiceTest {

    @Test
    public void testServiceWithMockRepository() {

        
        Repository mockRepository = mock(Repository.class);

      
        when(mockRepository.getData()).thenReturn("Mock Data");

       
        Service service = new Service(mockRepository);

       
        String result = service.processData();

     
        assertEquals("Processed Mock Data", result);

       
        verify(mockRepository).getData();

        System.out.println("Output : " + result);
        System.out.println("Advanced Exercise 1 Passed Successfully");
    }
}