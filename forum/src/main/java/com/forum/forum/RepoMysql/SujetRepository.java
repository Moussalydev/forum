package com.forum.forum.RepoMysql;

import com.forum.forum.Entities.Sujet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SujetRepository extends JpaRepository<Sujet, Long> {
}

