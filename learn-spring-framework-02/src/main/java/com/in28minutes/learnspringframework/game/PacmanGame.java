package com.in28minutes.learnspringframework.game;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
@Qualifier("PacmanGameQualifer")
public class PacmanGame implements GamingConsole{

	public void up() {
		System.out.println("UP");		
	}

	public void down() {
		System.out.println("DOWN");
	}

	public void left() {
		System.out.println("LEFT");
	}

	public void right() {
		System.out.println("Right");
	}
	
}
