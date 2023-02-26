package com.in28minutes.learnspringframework.game;

import org.springframework.stereotype.Component;

@Component
public class MarioGame implements GamingConsole{
	public void up() {
		System.out.println("Jump");
	}
	public void down() {
		System.out.println("Going to a hole");
	}
	public void left() {
		System.out.println("Go left");
	}
	public void right() {
		System.out.println("Accelerate");
	}
}
