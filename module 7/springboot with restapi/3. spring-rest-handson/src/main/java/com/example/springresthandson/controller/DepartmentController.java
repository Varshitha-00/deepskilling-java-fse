package com.example.springresthandson.controller;

import com.example.springresthandson.model.Department;
import com.example.springresthandson.service.DepartmentService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class DepartmentController {
    private static final Logger logger = LoggerFactory.getLogger(DepartmentController.class);
    private final DepartmentService departmentService;

    public DepartmentController(DepartmentService departmentService) {
        this.departmentService = departmentService;
    }

    @GetMapping("/departments")
    public ArrayList<Department> getAllDepartments() {
        logger.info("GET /departments called");
        return departmentService.getAllDepartments();
    }
}
