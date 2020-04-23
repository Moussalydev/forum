package com.forum.forum.services.forumservices;

import com.forum.forum.Entities.Question;
import com.forum.forum.Exceptions.ResourceNotFoundException;
import com.forum.forum.RepoMongo.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class QuestionServices {
    @Autowired
    QuestionRepository questionRepository;

    @Autowired
    MongoTemplate mongoTemplate;
    //Poster une question
    public Question PoserQuestion(Question question) {

        return questionRepository.save(question);
    }
    //Afficher toutes les questions
    public List<Question> AfficherToutesQuestions() {

        return questionRepository.findAll();
    }





}
