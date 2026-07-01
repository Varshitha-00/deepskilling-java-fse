package com.example.springtest.controller;

import com.example.springtest.exception.GlobalExceptionHandler;
import com.example.springtest.service.UserService;

import org.junit.jupiter.api.Test;

import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;

import org.springframework.boot.test.mock.mockito.MockBean;

import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.when;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(UserController.class)
public class UserControllerExceptionTest {

    @Autowired
    MockMvc mockMvc;

    @MockBean
    UserService userService;

    @Test
    void testUserNotFound() throws Exception {

        when(userService.getUserById(10L))
                .thenThrow(new NoSuchElementException());

        mockMvc.perform(get("/users/10"))

                .andExpect(status().isNotFound())
                .andExpect(content().string("User not found"));

    }
}