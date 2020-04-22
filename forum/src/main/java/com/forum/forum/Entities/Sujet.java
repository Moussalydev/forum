package com.forum.forum.Entities;

import javax.persistence.*;

@Entity
@Table(name = "sujets")
public class Sujet {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String intitule;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getIntitule() {
        return intitule;
    }

    public void setIntitule(String intitule) {
        this.intitule = intitule;
    }

    @Override
    public String toString() {
        return "Sujet{" +
                "id=" + id +
                ", intitule='" + intitule + '\'' +
                '}';
    }
}
