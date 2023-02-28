package com.in28minutes.springboot.learnjpaandhibernate.course.jdbc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.in28minutes.springboot.learnjpaandhibernate.course.Course;

@Repository
public class CourseJdbcRespository {
	
	@Autowired
	private JdbcTemplate springJdbcTemplate;
	
	private static String INSERT_QUERY =
			"""
				INSERT INTO course(id, name, author)
				values(?, ?, ?);
			""";
	private static String DELETE_QUERY =
			"""
				DELETE FROM course WHERE id=?
			""";
	
	public void delete(int id) {
		springJdbcTemplate.update(DELETE_QUERY, id);
	}
	
	public void insert(Course course) {
		springJdbcTemplate.update(INSERT_QUERY, 
				course.getId(), course.getName(), course.getAuthor()
		);
	}
}
