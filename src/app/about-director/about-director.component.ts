import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-about-director',
  templateUrl: './about-director.component.html',
  styleUrls: ['./about-director.component.css']
})
export class AboutDirectorComponent implements OnInit {

  constructor() { }

  directors: any;

  ngOnInit() {
  	this.directors = [
  	{
		"id":0,
		"description":"National Media Strategist, Ad Film Maker/ Film Writer & Director / Theatre Adjudicator/ Brand Media Strategist."
	},
	{
		"id":1,
		"description":"A graduate in Science, Diploma in yoga education, Acting, Direction and Production Diploma from Govt. Institute B.A.D.A[1983-85]. "
	},
	{
		"id":2,
		"description": "Inspired by Mr. JERZY GROTOWSKI and PETER BROOKS.Created more than 100 workshop cum Production in 'Psycho physical Transformation' for development of urban and rural artist of Maharashtra."
	},
	{
		"id":3,
		"description":"Associate Director with Kumar Sahani,Kanak Mishra,Anil Sharma."
	},
	{
		"id":4,
		"description":"Honorary Theatre Adjudicator for Govt of Maharashtra (1990-2009)."
	},
	{
		"id":5,
		"description":"Former Director at T-Series with Late Shri Gulshan Kumar."
	},
	{
		"id":6,
		"description":"Directed 'Taaza Geet Bahar' Unitil Golden Jubilee in DD."
	},
	{
		"id":9,
		"description":"Directed and presented more than 1000 corporate film, InfoCommercial film and 300 TV Commercials films."
	},
	{
		"id":12,
		"description":"Conceived & Directed More than 150 Promotional Advertisement Films  ('Tab-Ab and others Highlighting Central Government Performance for Government of India on various policies showing and comparing the developments from ‘91 to ‘96 in different languages."
	},
	{
		"id":13,
		"description":"Conceived and Directed various films in point of view National Public awareness under Janbhoomi project for C.M. Shri Chandrababu Naidu in the year 1997.."
	},
	{
		"id":14,
		"description":"Conceived and Directed various films for  Prime Minister - Atal Ji  'Achaal Biswas' &  'HUM UNAKA SATH NIBEYGE'   BJP India Mumbai  year (1998-1999)."
	},
	{
		"id":15,
		"description":" Impaneled Producer / Director for Doordarshan & Film Division- 'Govt.of India'"
	},
	{
		"id":16,
		"description":"Life Member- The Indian Film Writers Association (FWA) Screenwriters Association (SWA]"
	}, {
		"id": 17,
		"description": " Life Member -Indian Film & Television Directors' Association"
	},
	{
		"id": 18,
		"description": "Member- Association of Motion Pictures & T.V. Programme Producers"
	},
	{
		"id": 19,
		"description": "Founder director  I.M.P.A.(Nagpur), I. P. A. A. /  E.T.F, / G. P. W. A(Mumbai)"
	},
	{
		"id": 20,
		"description": "National President - Journalist Service Council"
	},
	{
		"id": 21,
		"description": "Working President & Chief advisor - International Press Community"
	}
  	];
  }

}
