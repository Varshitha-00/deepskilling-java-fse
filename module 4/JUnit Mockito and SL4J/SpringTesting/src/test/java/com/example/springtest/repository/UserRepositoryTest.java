package com.example.springtest.repository;

import com.example.springtest.entity.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.FilterType;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@ComponentScan(basePackages = "com.example.springtest")
public class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    void testFindByName() {

        userRepository.save(new User(1L, "Harini"));
        userRepository.save(new User(2L, "Rahul"));

        List<User> users = userRepository.findByName("Harini");

        assertEquals(1, users.size());
    }
}