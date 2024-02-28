package com.devBackend.FullstackReactbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.devBackend.FullstackReactbackend.Model.User;
import com.devBackend.FullstackReactbackend.exception.UserNotFoundException;
import com.devBackend.FullstackReactbackend.repository.UserRepository;

@RestController
@CrossOrigin("https://localhost:3000")
public class Usercontroller {

	@Autowired
	private UserRepository userRepository;
	
	@PostMapping("/user")
	User newUser(@RequestBody User newUser) {
		return userRepository.save(newUser);
	}
	
	@GetMapping("/users")
	List<User> getAllUsers(){
		return userRepository.findAll();
	}
	
	@GetMapping("/user/{id}")
	User getUserById(@PathVariable Long id) {
		return userRepository.findById(id)
				.orElseThrow(()->new UserNotFoundException(id));
	}
	
	@PutMapping("/user/{id}")
	User updateUser(@RequestBody User newUser, @PathVariable Long id) {
	    return userRepository.findById(id)
	            .map(user -> {
	                user.setUsername(newUser.getUsername());
	                user.setName(newUser.getName());
	                user.setEmail(newUser.getEmail());
	                return userRepository.save(user); // Return the updated user after saving changes
	            })
	            .orElseThrow(() -> new UserNotFoundException(id));
	}
	
	@DeleteMapping("/user/{id}")
	String deleteUser(@PathVariable Long id) {
		if(!userRepository.existsById(id)) {
			throw new UserNotFoundException(id);
		}
		userRepository.deleteById(id);
		return "user with id" + "has been deleted success";
	}
	
}
