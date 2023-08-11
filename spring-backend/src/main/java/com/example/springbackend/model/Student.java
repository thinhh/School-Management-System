package com.example.springbackend.model;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;

@Data
@Entity
@Table(name = "student")
@RequiredArgsConstructor
public class Student {
    private @Id @GeneratedValue Long id;

    @Column(nullable = false)
    private String firstName;
    private String lastName;
    private int age;
    private double GPA;

}
