package btl.nhom1.tourmanagement.booking;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class movie {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name = "movie_name")
	private String name;
	private String imgurl;
	private String movie_url;
	private String description;
	private String genre;
	private String actor;
	private String director;
	private String writer;
	private String release;
	private String duration;
	private String quality;
	private double rating;
}