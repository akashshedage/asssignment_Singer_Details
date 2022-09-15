import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  
  title: string = 'Top 3 Bollywood movies';

  movies: Movie[]=[
    {title: '3 Idiots', director: 'Rajkumar Hirani', cast : 'Amir Khan', releaseDate: '2009'},
    {title: 'Lagaan', director: 'Ashutosh', cast : 'Amir Khan', releaseDate: '2002'},
    {title: 'Tanaji : The Unsung Warrior', director: 'Om Raut', cast : 'Ajay Devegon', releaseDate: '2020'},
  ]

  songs: Song[]=[
    {name: 'Arijit Singh' , totalSongs: 100 , hitSong: 'Tera Yaar Hoon Main' , movieName: 'Sonu Ke Titu Ki Sweety'},
    {name: 'Sonu Nigam' , totalSongs: 80 , hitSong: 'Sandese Aate Hai' , movieName: 'Border'},
    {name: 'Atif Aslam' , totalSongs: 40 , hitSong: 'Piya O Re Piya' , movieName:'Tere Naal Love Ho Gaya'},
    {name:'Lata Mangeshkar' , totalSongs: 105 , hitSong: 'Tujhe Dekha To' , movieName: 'DDLJ'},
    {name:'Shreya Ghoshal' , totalSongs: 45 , hitSong: 'Teri Meri' , movieName: 'Bodyguard'},
  ]
  constructor() { }

  ngOnInit() {
  }
}

class Movie{
  title: string;
  director: string;
  cast: string;
  releaseDate: string;
}

class Song{
  name: string;
  totalSongs: number;
  hitSong: string;
  movieName: string;
}