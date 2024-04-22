package com.appio.backend.Services.User;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.appio.backend.Controllers.User.UserResponse;
import com.appio.backend.Persistence.User.User;
import com.appio.backend.Persistence.User.UserRepository;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;

    public UserResponse showUserById(Integer id) {
        Optional<User> userOptional = userRepository.findById(id);
        if (userOptional.isPresent()) {
            return UserResponse.from(userOptional.get());
        } else {
            return null;
        }
    }
}
