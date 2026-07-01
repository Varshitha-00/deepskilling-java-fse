package com.example.employeemanagementsystem.projection;

import org.springframework.beans.factory.annotation.Value;

public interface EmployeeValueView {

    Long getId();

    @Value("#{target.name}")
    String getEmployeeName();

    @Value("#{target.email}")
    String getEmployeeEmail();

}