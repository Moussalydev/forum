package com.forum.forum.Controllers;

import com.forum.forum.Entities.Sujet;
import com.forum.forum.Exceptions.ResourceNotFoundException;
import com.forum.forum.services.forumservices.SujetServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping("${app.api}")
@RestController
public class SujetController {

    @Autowired
    SujetServices sujetServices;

    @PostMapping("/ajout-sujet")
    public Sujet ajouterSujet(@Valid @RequestBody Sujet sujet) {

        return sujetServices.AjoutSujet(sujet);
    }
    @GetMapping("/list-sujets")
    public List<Sujet> findAllEvaluation() {
        return sujetServices.AfficherTousLesSujet();

    }
    @GetMapping("/sujet/{id}")
    public ResponseEntity<Sujet> AfficherSujetParId(@PathVariable(value = "id") Long id) throws ResourceNotFoundException {
        return sujetServices.AfficherSujetParId(id);

    }

}
