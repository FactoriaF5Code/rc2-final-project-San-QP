package com.appio.backend.Controllers.User;

import com.appio.backend.Persistence.User.User;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserResponse {
    private Integer id;
    private String name;
    private String password;
    private String email;

    public UserResponse(
        Integer id,
        String name,
        String password,
        String email
    ) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.email = email;
    }

    public static UserResponse from(User user) {
        return new UserResponse(
            user.getId(),
            user.getName(),
            user.getPassword(),
            user.getEmail()
        );
    }
}
