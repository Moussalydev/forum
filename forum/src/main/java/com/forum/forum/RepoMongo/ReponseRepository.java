package com.forum.forum.RepoMongo;

import com.forum.forum.Entities.Reponse;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.math.BigInteger;

public interface ReponseRepository extends MongoRepository<Reponse, BigInteger> {
}
