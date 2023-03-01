package com.in28minutes.springboot.learnjpaandhibernate.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.in28minutes.springboot.learnjpaandhibernate.course.Course;
import com.in28minutes.springboot.learnjpaandhibernate.course.jpa.CourseJpaRepository;
import com.in28minutes.springboot.learnjpaandhibernate.course.springdatajpa.CourseSpringDataJpaRepository;

@Component
public class CourseCommandLineRunner implements CommandLineRunner{
	
//	@Autowired
//	private CourseJdbcRespository repository;
	
//	@Autowired
//	private CourseJpaRepository courseJpaRepository;
	
	@Autowired
	private CourseSpringDataJpaRepository repository;

	@Override
	public void run(String... args) throws Exception {
		repository.save(new Course(1l, "Learn JPA", "Folagor"));
		repository.save(new Course(2l, "Learn Azure", "Pepe"));
		repository.save(new Course(3l, "Learn PHP", "Pepe"));
		
		repository.deleteById(1l);
		
		System.out.println(repository.findById(2l));
		System.out.println(repository.findById(3l));
		
		System.out.println(repository.findAll());
		System.out.println(repository.count());
		
		System.out.println(repository.findByAuthor("Pepe"));
		System.out.println(repository.findByAuthor(""));
		
		System.out.println(repository.findByName("Learn PHP"));
		System.out.println(repository.findByName("Learn JPA"));
	}

}
