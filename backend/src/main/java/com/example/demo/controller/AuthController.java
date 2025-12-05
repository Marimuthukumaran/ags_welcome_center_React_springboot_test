package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService service;

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello from the backend!";
    }

    @PostMapping("/signup")
    public User signup(@RequestBody User user) {
        return service.register(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        boolean ok = service.login(user.getUsername(), user.getPassword());
        return ok ? "Login successful" : "Invalid credentials";
    }
}
