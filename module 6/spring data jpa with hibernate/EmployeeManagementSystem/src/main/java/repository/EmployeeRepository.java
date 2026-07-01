package com.example.employeemanagementsystem.repository;

import com.example.employeemanagementsystem.entity.Employee;
import com.example.employeemanagementsystem.projection.EmployeeDTO;
import com.example.employeemanagementsystem.projection.EmployeeValueView;
import com.example.employeemanagementsystem.projection.EmployeeView;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    List<Employee> findByName(String name);

    Employee findByEmail(String email);

    List<Employee> findByNameContaining(String name);

    Page<Employee> findByNameContaining(String name, Pageable pageable);

    @Query("SELECT e FROM Employee e WHERE e.email=?1")
    Employee getEmployeeByEmail(String email);

    List<Employee> findByNameContainingIgnoreCase(String name);


    List<EmployeeView> findBy();

    @Query("SELECT e FROM Employee e")
    List<EmployeeView> getAllEmployeeView();


    @Query("SELECT new com.example.employeemanagementsystem.projection.EmployeeDTO(e.id,e.name,e.email) FROM Employee e")
    List<EmployeeDTO> getAllEmployeeDTO();


    List<EmployeeValueView> findAllBy();


    <S extends Employee> List<S> saveAll(Iterable<S> entities);

}