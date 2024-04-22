package com.appio.backend.Controllers.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.appio.backend.Services.User.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
    
    @Autowired
    private UserService userService;

    @GetMapping("/api/users/{id}")
    public UserResponse getUserById(@PathVariable Integer id) {
        return userService.showUserById(id);
    }
}
