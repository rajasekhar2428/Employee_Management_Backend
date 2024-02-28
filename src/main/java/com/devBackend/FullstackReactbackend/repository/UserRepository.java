package com.devBackend.FullstackReactbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devBackend.FullstackReactbackend.Model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

}
