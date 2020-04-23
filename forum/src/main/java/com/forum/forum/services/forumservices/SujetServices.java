package com.forum.forum.services.forumservices;

import com.forum.forum.Entities.Sujet;
import com.forum.forum.Exceptions.ResourceNotFoundException;
import com.forum.forum.RepoMysql.SujetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SujetServices {

    @Autowired
    SujetRepository sujetRepository;

    public Sujet AjoutSujet(Sujet sujet) {

        return sujetRepository.save(sujet);
    }
    public List<Sujet> AfficherTousLesSujet() {
        return sujetRepository.findAll();

    }
    /*
        Afficher sujet par Id
     */
    public ResponseEntity<Sujet> AfficherSujetParId(Long id)
            throws ResourceNotFoundException {
        Sujet sujet = sujetRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Sujet non disponible" + id));
        return ResponseEntity.ok().body(sujet);
    }


}
