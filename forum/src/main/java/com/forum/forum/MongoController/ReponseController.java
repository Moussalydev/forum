package com.forum.forum.MongoController;

import com.forum.forum.Entities.Reponse;
import com.forum.forum.services.forumservices.ReponseServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping("${app.api}")
@RestController
public class ReponseController {

    @Autowired
    ReponseServices reponseServices;

    @PostMapping("/add-reponse")
    public Reponse AjouterReponse(@Valid @RequestBody Reponse reponse) {

        return reponseServices.AjoutReponse(reponse);
    }
    @GetMapping("/list-reponses")
    public List<Reponse> Afficher_reponses() {
        return reponseServices.AfficherToutesReponses();

    }
}
