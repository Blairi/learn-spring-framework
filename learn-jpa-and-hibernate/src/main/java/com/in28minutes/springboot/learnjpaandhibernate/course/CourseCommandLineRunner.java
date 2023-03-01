package com.in28minutes.springboot.learnjpaandhibernate.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.in28minutes.springboot.learnjpaandhibernate.course.Course;
import com.in28minutes.springboot.learnjpaandhibernate.course.jpa.CourseJpaRepository;

@Component
public class CourseCommandLineRunner implements CommandLineRunner{
	
//	@Autowired
//	private CourseJdbcRespository repository;
	
	@Autowired
	private CourseJpaRepository courseJpaRepository;

	@Override
	public void run(String... args) throws Exception {
		courseJpaRepository.insert(new Course(1l, "Learn JPA", "Folagor"));
		courseJpaRepository.insert(new Course(2l, "Learn Azure", "Pepe"));
		courseJpaRepository.insert(new Course(3l, "Learn PHP", "Hector"));
		courseJpaRepository.deleteById(1);
		System.out.println(courseJpaRepository.findById(2));
		System.out.println(courseJpaRepository.findById(3));
	}

}
