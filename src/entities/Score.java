package entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "score")
public class Score
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private int time;
	
	@Column(name = "num_guesses")
	private int numGuesses;
	
	@Column(name = "num_misses")
	private int numMisses;
	
	private String initials;
	
	public Score() 
	{
		
	}
	
	public Score(int time, int numGuesses, int numMisses, String initials)
	{
		super();
		this.time = time;
		this.numGuesses = numGuesses;
		this.numMisses = numMisses;
		this.initials = initials;
	}

	public int getId()
	{
		return id;
	}

	public int getTime()
	{
		return time;
	}

	public void setTime(int time)
	{
		this.time = time;
	}

	public int getNumGuesses()
	{
		return numGuesses;
	}

	public void setNumGuesses(int numGuesses)
	{
		this.numGuesses = numGuesses;
	}

	public int getNumMisses()
	{
		return numMisses;
	}

	public void setNumMisses(int numMisses)
	{
		this.numMisses = numMisses;
	}

	public String getInitials()
	{
		return initials;
	}

	public void setInitials(String initials)
	{
		this.initials = initials;
	}
}
