package com.in28minutes.rest.webservices.restfulwebservices.user;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class UserDaoService {
	
	private static List<User> users = new ArrayList<>();
	
	static {
		users.add(new User(1, "Axel", LocalDate.now().minusYears(20)));
		users.add(new User(2, "Steve", LocalDate.now().minusYears(10)));
		users.add(new User(3, "Alex", LocalDate.now().minusYears(40)));
	}
	
	public List<User> findAll() {
		return users;
	}
	
}
