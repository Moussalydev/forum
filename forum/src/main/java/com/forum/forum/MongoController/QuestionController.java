package com.forum.forum.MongoController;

import com.forum.forum.Entities.Question;
import com.forum.forum.services.forumservices.QuestionServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping("${app.api}")
@RestController
public class QuestionController {

    @Autowired
    QuestionServices questionServices;

    @PostMapping("/add-question")
    public Question AjouterQuestion(@Valid @RequestBody Question question) {

        return questionServices.PoserQuestion(question);
    }
    @GetMapping("/list-questions")
    public List<Question> Afficher_questions() {
        return questionServices.AfficherToutesQuestions();

    }



}
