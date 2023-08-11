package com.example.springbackend.controller;

import com.example.springbackend.exception.StudentNotFoundException;
import com.example.springbackend.repository.StudentRepository;
import com.example.springbackend.model.Student;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;

    @PostMapping("/addStudent")
    Student newStudent(@RequestBody Student newStudent) {
        return studentRepository.save(newStudent);
    }

    @GetMapping("/students")
    List<Student> getAllUsers() {
        return studentRepository.findAll();
    }

    @GetMapping("/student/{id}")
    Student getUserById(@PathVariable Long id) {
        return studentRepository.findById(id)
                .orElseThrow(() -> new StudentNotFoundException(id));
    }

    @PutMapping("/student/{id}")
    Student updateUser(@RequestBody Student newStudent, @PathVariable Long id) {
        return studentRepository.findById(id)
                .map(student -> {
                    student.setFirstName(newStudent.getLastName());
                    student.setLastName(newStudent.getFirstName());
                    student.setGPA(newStudent.getGPA());
                    return studentRepository.save(newStudent);
                }).orElseThrow(() -> new StudentNotFoundException(id));
    }

    @DeleteMapping("/student/{id}")
    String deleteUser(@PathVariable Long id) {
        if (!studentRepository.existsById(id)) {
            throw new StudentNotFoundException(id);
        }
        studentRepository.deleteById(id);
        return "User with id " + id + " has been deleted success.";
    }

}
