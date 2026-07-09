package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.exception.EmployeeNotFoundException;
import com.cognizant.springlearn.model.Employee;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

    private static final Logger LOGGER = LoggerFactory.getLogger(EmployeeController.class);
    private final List<Employee> employees = new ArrayList<>();

    public EmployeeController() {
        Employee employee = new Employee();
        employee.setId(1);
        employee.setName("John");
        employee.setSalary(50000.0);
        employee.setPermanent(true);
        employee.setDateOfBirth(java.time.LocalDate.of(1990, 1, 1));
        employees.add(employee);
    }

    @GetMapping
    public List<Employee> getEmployees() {
        return employees;
    }

    @PutMapping
    public Employee updateEmployee(@Valid @RequestBody Employee employee) {
        LOGGER.info("Updating employee with id: {}", employee.getId());
        for (int i = 0; i < employees.size(); i++) {
            if (employees.get(i).getId().equals(employee.getId())) {
                employees.set(i, employee);
                return employee;
            }
        }
        throw new EmployeeNotFoundException("Employee not found");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable Integer id) {
        for (Employee employee : employees) {
            if (employee.getId().equals(id)) {
                employees.remove(employee);
                return ResponseEntity.ok("Employee deleted successfully");
            }
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Employee not found");
    }
}
