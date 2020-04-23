package com.forum.forum.services.forumservices;

import com.forum.forum.Entities.Reponse;
import com.forum.forum.RepoMongo.ReponseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReponseServices {

    @Autowired
    ReponseRepository reponseRepository;

    public Reponse AjoutReponse(Reponse reponse) {
        return reponseRepository.save(reponse);
    }

    //Afficher toutes les questions
    public List<Reponse> AfficherToutesReponses() {
        return reponseRepository.findAll();
    }


}
