package com.forum.forum.RepoMongo;

import com.forum.forum.Entities.Question;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.math.BigInteger;
import java.time.LocalDate;

public interface QuestionRepository extends MongoRepository<Question, BigInteger> {

    Question findQuestionByUser_Username(String username);
    Question findQuestionByDate(LocalDate date);
}
