package com.mockito.advanced.exercise3;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class FileServiceTest {

    @Test
    public void testServiceWithMockFileIO() {

        // Step 1 : Create Mock Objects
        MyFileReader mockReader = mock(MyFileReader.class);
        MyFileWriter mockWriter = mock(MyFileWriter.class);

        // Step 2 : Stub Reader
        when(mockReader.read()).thenReturn("Mock File Content");

        // Step 3 : Create Service
        FileService fileService =
                new FileService(mockReader, mockWriter);

        // Step 4 : Call Method
        String result = fileService.processFile();

        // Step 5 : Verify Result
        assertEquals("Processed Mock File Content", result);

        // Step 6 : Verify Interactions
        verify(mockReader).read();
        verify(mockWriter).write("Processed Mock File Content");

        System.out.println("Output : " + result);
        System.out.println("Advanced Exercise 3 Passed Successfully");
    }
}