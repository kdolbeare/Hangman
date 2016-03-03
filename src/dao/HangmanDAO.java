package dao;


import java.util.List;
import java.util.Random;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.transaction.annotation.Transactional;

import entities.Phrase;
import entities.Score;

@Transactional
public class HangmanDAO
{

	@PersistenceContext
	private EntityManager em;

	@SuppressWarnings("unchecked")
	public List<Score> getScores()
	{
		String query = "select s from Score s";
		Query q = em.createQuery(query, Score.class);
		List<Score> scores = q.getResultList();
		return scores;
	}
	
	public void createScore(Score score)
	{
		Score newScore;
		newScore = score;
		em.persist(newScore);
	}
	
	public Phrase choosePhrase() 
	{
//		String rowNum = "SELECT COUNT p.id FROM Phrase p";
//		Query num = em.createQuery(rowNum, Phrase.class);
//		int max = (Integer)num.getSingleResult();
		int max = 3;
		int min = 1;
		Random r = new Random();
		int id = r.nextInt((max - min) +1) +min;
		String query = "select p from Phrase p where p.id = "+id;
		Query q = em.createQuery(query, Phrase.class);
		Phrase phrase = (Phrase) q.getSingleResult();
		return phrase;
	}
	
}
