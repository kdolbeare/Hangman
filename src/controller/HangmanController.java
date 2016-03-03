package controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import dao.HangmanDAO;
import entities.Phrase;
import entities.Score;

@Controller
public class HangmanController
{
	@Autowired
	private HangmanDAO hangmanDAO;
	
	@ResponseBody
	@RequestMapping("ping")
	public String ping()
	{
		return "pong";
	}

	@ResponseBody
	@RequestMapping("scores")
	public List<Score> getScores()
	{
		return hangmanDAO.getScores();
	}
	
	@ResponseBody
	@RequestMapping(path = "score", method = RequestMethod.PUT)
	public void createScore(@RequestBody Score score)
	{
		System.out.println(score);
		hangmanDAO.createScore(score);
	}
	
	@ResponseBody
	@RequestMapping("phrase")
	public Phrase getPhraseById() 
	{
		Phrase p = hangmanDAO.choosePhrase();
		return p;
	}
}