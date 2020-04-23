package com.forum.forum.Entities;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.math.BigInteger;
import java.time.LocalDate;

@Document(collection = "questions")
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private BigInteger id;
    private Sujet sujet;
    private String auteur;
    private String libelle;
    private LocalDate date;

    public BigInteger getId() {
        return id;
    }

    public void setId(BigInteger id) {
        this.id = id;
    }

    public Sujet getSujet() {
        return sujet;
    }

    public void setSujet(Sujet sujet) {
        this.sujet = sujet;
    }

    public String getAuteur() {
        return auteur;
    }

    public void setAuteur(String auteur) {
        this.auteur = auteur;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "Question{" +
                "id=" + id +
                ", sujet=" + sujet +
                ", auteur='" + auteur + '\'' +
                ", libelle='" + libelle + '\'' +
                ", date=" + date +
                '}';
    }
}

