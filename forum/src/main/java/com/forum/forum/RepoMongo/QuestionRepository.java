package com.forum.forum.RepoMongo;

import com.forum.forum.Entities.Question;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.math.BigInteger;

public interface QuestionRepository extends MongoRepository<Question, BigInteger> {

    Question findQuestionBySujet_Id(long id);

}
