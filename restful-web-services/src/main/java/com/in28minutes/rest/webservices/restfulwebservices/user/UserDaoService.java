package com.in28minutes.rest.webservices.restfulwebservices.user;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

import org.springframework.stereotype.Component;

@Component
public class UserDaoService {
	
	private static List<User> users = new ArrayList<>();
	
	private static Integer usersCount = 0;
	
	static {
		users.add(new User(++usersCount, "Axel", LocalDate.now().minusYears(20)));
		users.add(new User(++usersCount, "Steve", LocalDate.now().minusYears(10)));
		users.add(new User(++usersCount, "Alex", LocalDate.now().minusYears(40)));
	}
	
	public List<User> findAll() {
		return users;
	}
	
	public User save(User user) {
		user.setId(++usersCount);
		users.add(user);
		return user;
	}
	
	public User findOne(int id) {
		Predicate<? super User> predicate = user -> user.getId().equals(id); 
		return users.stream().filter(predicate).findFirst().get();
	}

}
