package com.example.employeemanagementsystem.controller;

import com.example.employeemanagementsystem.entity.Employee;
import com.example.employeemanagementsystem.projection.EmployeeDTO;
import com.example.employeemanagementsystem.projection.EmployeeValueView;
import com.example.employeemanagementsystem.projection.EmployeeView;
import com.example.employeemanagementsystem.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;


    @PostMapping
    public Employee addEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Employee> getEmployeeById(@PathVariable Long id) {
        return employeeRepository.findById(id);
    }

    @PutMapping("/{id}")
    public Employee updateEmployee(@PathVariable Long id,
                                   @RequestBody Employee employee) {
        employee.setId(id);
        return employeeRepository.save(employee);
    }

    @DeleteMapping("/{id}")
    public String deleteEmployee(@PathVariable Long id) {
        employeeRepository.deleteById(id);
        return "Employee Deleted Successfully";
    }



    @GetMapping("/name/{name}")
    public List<Employee> getEmployeeByName(@PathVariable String name) {
        return employeeRepository.findByName(name);
    }

    @GetMapping("/email/{email}")
    public Employee getEmployeeByEmail(@PathVariable String email) {
        return employeeRepository.findByEmail(email);
    }

    @GetMapping("/search/{name}")
    public List<Employee> searchEmployee(@PathVariable String name) {
        return employeeRepository.findByNameContaining(name);
    }

    @GetMapping("/custom/{email}")
    public Employee customQuery(@PathVariable String email) {
        return employeeRepository.getEmployeeByEmail(email);
    }

    @GetMapping("/named/{name}")
    public List<Employee> namedQuery(@PathVariable String name) {
        return employeeRepository.findByNameContainingIgnoreCase(name);
    }



    @GetMapping("/page")
    public Page<Employee> getEmployeesWithPagination(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "2") int size,
            @RequestParam(defaultValue = "id") String sortBy) {

        Pageable pageable = PageRequest.of(
                page,
                size,
                Sort.by(sortBy).ascending());

        return employeeRepository.findAll(pageable);
    }

    @GetMapping("/page/search")
    public Page<Employee> searchEmployees(
            @RequestParam(defaultValue = "") String name,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "2") int size,
            @RequestParam(defaultValue = "id") String sortBy) {

        Pageable pageable = PageRequest.of(
                page,
                size,
                Sort.by(sortBy).ascending());

        return employeeRepository.findByNameContaining(name, pageable);
    }


    @GetMapping("/projection")
    public List<EmployeeView> getProjection() {
        return employeeRepository.findBy();
    }

    @GetMapping("/projection/query")
    public List<EmployeeView> getProjectionQuery() {
        return employeeRepository.getAllEmployeeView();
    }

    @GetMapping("/projection/dto")
    public List<EmployeeDTO> getDTOProjection() {
        return employeeRepository.getAllEmployeeDTO();
    }

    @GetMapping("/projection/value")
    public List<EmployeeValueView> getValueProjection() {
        return employeeRepository.findAllBy();
    }


    @PostMapping("/batch")
    public List<Employee> saveEmployees(@RequestBody List<Employee> employees) {
        return employeeRepository.saveAll(employees);
    }

}