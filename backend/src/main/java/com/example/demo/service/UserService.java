package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository repo;

    public User register(User user) {
        if (repo.findByUsername(user.getUsername()) != null) {
            throw new RuntimeException("User already exists");
        }
        return repo.save(user);
    }

    public boolean login(String username, String password) {
        User user = repo.findByUsername(username);
        return user != null && user.getPassword().equals(password);
    }
}
