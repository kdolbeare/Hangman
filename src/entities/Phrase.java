package entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "phrase")
public class Phrase
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "game_phrase")
	private String gamePhrase;
	
	private String category;
	private String clue;
	
	public Phrase() 
	{
		
	}
	
	public Phrase(String gamePhrase, String category, String clue)
	{
		super();
		this.gamePhrase = gamePhrase;
		this.category = category;
		this.clue = clue;
	}

	public int getId()
	{
		return id;
	}

	public String getGamePhrase()
	{
		return gamePhrase;
	}

	public void setGamePhrase(String gamePhrase)
	{
		this.gamePhrase = gamePhrase;
	}

	public String getCategory()
	{
		return category;
	}

	public void setCategory(String category)
	{
		this.category = category;
	}

	public String getClue()
	{
		return clue;
	}

	public void setClue(String clue)
	{
		this.clue = clue;
	}

}
