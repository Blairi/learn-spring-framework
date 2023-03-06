package com.in28minutes.springboot.myfirstwebapp.todo;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

import org.springframework.stereotype.Service;

import jakarta.validation.Valid;

@Service
public class TodoService {
	
	private static List<Todo> todos = new ArrayList<>();
	
	private static int todosCount = 0;
	
	static {
		todos.add(new Todo(++todosCount, "axel", "Learn AWS", 
				LocalDate.now().plusYears(1), false));
		todos.add(new Todo(++todosCount, "axel", "Full Stack development", 
				LocalDate.now().plusYears(1), false));
		todos.add(new Todo(++todosCount, "axel", "Learn DevOps", 
				LocalDate.now().plusYears(2), false));
	}
	
	public List<Todo> findByUsername(String username) {
		return todos;
	}
	
	public void addTodo(String username, String description, LocalDate targetDay, boolean done) {
		Todo todo = new Todo(++todosCount, username, description, targetDay, done);
		todos.add( todo );
	}
	
	public void deleteById(int id) {

		Predicate<? super Todo> predicate 
			= todo -> todo.getId() == id;
		todos.removeIf(predicate);
	}

	public Todo findById(int id) {
		Predicate<? super Todo> predicate 
		= todo -> todo.getId() == id;
		Todo todo = todos.stream().filter(predicate).findFirst().get();
		return todo;
	}

	public void updateTodo(@Valid Todo todo) {
		deleteById(todo.getId());
		todos.add(todo);
	}
}