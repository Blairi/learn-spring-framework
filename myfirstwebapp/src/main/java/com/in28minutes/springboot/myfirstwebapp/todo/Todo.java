package com.in28minutes.springboot.myfirstwebapp.todo;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Size;

@Entity
public class Todo {
	
	@Id
	@GeneratedValue
	private int id;
	
	private String name;
	
	@Size(min=10, message="Enter atleast 10 characters")
	private String description;
	private LocalDate targetDay;
	private boolean done;

	public Todo(int id, String name, String description, LocalDate targetDay, boolean done) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.targetDay = targetDay;
		this.done = done;
	}
	
	public Todo() {
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public LocalDate getTargetDay() {
		return targetDay;
	}

	public void setTargetDay(LocalDate targetDay) {
		this.targetDay = targetDay;
	}

	public boolean isDone() {
		return done;
	}

	public void setDone(boolean done) {
		this.done = done;
	}

	@Override
	public String toString() {
		return "Todo [id=" + id + ", name=" + name + ", description=" + description + ", targetDay=" + targetDay
				+ ", done=" + done + "]";
	}

}
