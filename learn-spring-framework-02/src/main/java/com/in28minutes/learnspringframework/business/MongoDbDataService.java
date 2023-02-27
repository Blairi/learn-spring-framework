package com.in28minutes.learnspringframework.business;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

//@Component
@Repository
@Primary
public class MongoDbDataService implements DataService{
	public int[] retrieveData() {
		return new int[] {11, 21, 32, 12};
	}
}
