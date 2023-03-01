package com.in28minutes.springboot.learnjpaandhibernate.course.jdbc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.in28minutes.springboot.learnjpaandhibernate.course.Course;

@Component
public class CourseJdbcCommandLineRunner implements CommandLineRunner{
	
	@Autowired
	private CourseJdbcRespository repository;

	@Override
	public void run(String... args) throws Exception {
		repository.insert(new Course(1l, "Learn AWS", "Folagor"));
		repository.insert(new Course(2l, "Learn Azure", "Pepe"));
		repository.insert(new Course(3l, "Learn PHP", "Hector"));
		repository.delete(1);
		System.out.println(repository.findById(2));
		System.out.println(repository.findById(3));
	}

}
