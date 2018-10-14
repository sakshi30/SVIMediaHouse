import { Component, OnInit, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-about-team',
  templateUrl: './about-team.component.html',
  styleUrls: ['./about-team.component.css']
})
export class AboutTeamComponent implements OnInit {

  constructor() { }

  teams: any;

  ngOnInit() {
  	this.teams = [
  	{
		"id": 0,
		"name": "Dr. Kirti Srivastava",
		"designation": "Founder Director",
		"image":"../assets/images/Kirti.jpg",
		"description": "Mrs. Kirti Srivastava has been one of the strongest pillars of the company for last 20 yrs.She is an MA & Ph.D in Fine Arts.She has spearheaded many creative projects for the company in last 10 yrs.She was in the core team for incorporation of Strategic Vision India.She is an avid painter and creator of other art forms.Her doctoral thesis was based on the Research for 'Birds & Animals:Similarities between Medieval to Modern Times'.She is also deeply involved in Academics and is was a guest professor of Fine Arts in SNDT College,Mumbai and a full time professor in St. Xaviers, Mumbai."
	},
	{
		"id": 1,
		"name": "Mr. Dinesh Srivastava",
		"designation": "Adjudicator & Creative Director",
		"image":"../assets/images/Dinesh.jpg",
		"description": "Mr. Dinesh Srivastava is a National Media Strategist, Film Director & Ad Film Maker Theatre Adjudicator ,Founder  & Creative Director { SVI Media House - “Strategic Vission India”- -360 Degree Media Agency Cum Business Associates}- Media Specialized Software Production House Serving more than top  100- Brands Local To Global Since 1998.He has over 20 yrs of experience in Audio Visual Medium.He has directed over 100 workshops and 150 Plays.He has also done about 500 corporate ad films. "
	},
	{
		"id": 2,
		"name": "Mr. Sunil Unni",
		"designation": "Strategic planner",
		"image":"../assets/images/Unni.jpg",
		"description": "Mr. Sunil Unni a has diverse experience in Strategic Planing and other management related subjects.He is a renowned academician.He currently holds the post of Executive Director in Roman Group LLC, and was CEO of Kores India Ltd for 12 yrs.After that he was the CEO of Repro India Ltd ( USA). He is visiting faculty at United world School of business, Great Lakes Institute of Management, IBS Business School, Durga Devi Saraf Institute of Management Studies and Xavier Institute of Management & Research,Mumbai."
	},
	{
		"id": 3,
		"name": "Mr. K. K. Verma",
		"designation": "Writer",
		"image":"../assets/images/Varma.jpg",
		"description": " Mr. K.K.Varma is a power house in Weaving a new dimension through languages, Creating a Brand out of bits of information, Market Analytics, Business Strategist, Shrewd Planner,Corporate Communication,he has it all.He is currently the Owner of Copywritink for last 16 yrs.His clientele is a list of huge Business power houses with the likes of Crompton Greaves,Hindustan Unilever, Ernst & Young , Glaxo Smithkline to name a few, the list goes long. He is considered one of the pioneers in Branding and Copy writing.He has received LACP Vision Awards (USA) 2009,2010( League of American Communication Professionals)"
	}
  	]
  }

}
