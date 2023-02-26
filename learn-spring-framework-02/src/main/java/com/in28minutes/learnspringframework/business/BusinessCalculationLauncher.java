package com.in28minutes.learnspringframework.business;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;

import java.util.Arrays;

@ComponentScan
public class BusinessCalculationLauncher {
	public static void main(String[] args) {
		
		try(var context = 
				new AnnotationConfigApplicationContext(
						BusinessCalculationLauncher.class)) {
			Arrays.stream(context.getBeanDefinitionNames())
				.forEach(System.out::println);
			
			System.out.println(context.getBean(BusinessCalculationService.class).findMax());
		}

	}
}
