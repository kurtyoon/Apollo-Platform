package com.Teletubbies.Apollo.auth.repository;

import com.Teletubbies.Apollo.auth.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
