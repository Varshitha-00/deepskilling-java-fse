package com.example.springresthandson.service;

import com.example.springresthandson.dao.DepartmentDao;
import com.example.springresthandson.model.Department;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class DepartmentService {
    private final DepartmentDao departmentDao;

    public DepartmentService(DepartmentDao departmentDao) {
        this.departmentDao = departmentDao;
    }

    public ArrayList<Department> getAllDepartments() {
        return departmentDao.getAllDepartments();
    }
}
