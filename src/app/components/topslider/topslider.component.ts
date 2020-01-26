import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-topslider',
  templateUrl: './topslider.component.html',
  styleUrls: ['./topslider.component.css']
})
export class TopsliderComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [' ', ' '],
    items: 4,
    margin: 20,
    nav: true
  }


  constructor() { }

  ngOnInit() {
  }

  itemSliderData = [
    { image: './assets/images/gallery/1.jpg', episodeno: 'Episode 24', filmtitle: 'The King’s Avatar' },
    { image: './assets/images/gallery/2.jpg', episodeno: 'Episode 24', filmtitle: 'Put Your Head on My Shoulder' },
    { image: '/assets/images/gallery/3.jpg', episodeno: 'Episode 7', filmtitle: 'Secret Queen Makers' },
    { image: '/assets/images/gallery/4.jpg', episodeno: 'Episode 8', filmtitle: 'Seventeen' },
    { image: '/assets/images/gallery/5.jpg', episodeno: 'Episode 10', filmtitle: 'Yellow' },
    { image: '/assets/images/gallery/6.jpg', episodeno: 'Episode 10', filmtitle: 'Flower Ever After' },
    { image: '/assets/images/gallery/7.jpg', episodeno: 'Episode 12', filmtitle: 'Love Playlist: Season 2' },
    { image: '/assets/images/gallery/8.jpg', episodeno: 'Episode 8', filmtitle: 'Love Playlist' },
    { image: '/assets/images/gallery/9.jpg', episodeno: 'Episode 12', filmtitle: 'Cinderella Chef' },
    { image: '/assets/images/gallery/10.jpg', episodeno: 'Episode 1', filmtitle: 'Fighting Time' },
    { image: '/assets/images/gallery/11.jpg', episodeno: 'Episode 3', filmtitle: 'Midnight Foodstore' },

  ];

  itemEpisodes = [
    { image: './assets/images/gallery/1.jpg', episodeno: 'Episode 24', filmtitle: 'The King’s Avatar' },
    { image: './assets/images/gallery/2.jpg', episodeno: 'Episode 24', filmtitle: 'Put Your Head on My Shoulder' },
    { image: '/assets/images/gallery/3.jpg', episodeno: 'Episode 7', filmtitle: 'Secret Queen Makers' },
    { image: '/assets/images/gallery/4.jpg', episodeno: 'Episode 8', filmtitle: 'Seventeen' },
    { image: '/assets/images/gallery/5.jpg', episodeno: 'Episode 10', filmtitle: 'Yellow' },
    { image: '/assets/images/gallery/6.jpg', episodeno: 'Episode 10', filmtitle: 'Flower Ever After' },
    { image: '/assets/images/gallery/7.jpg', episodeno: 'Episode 12', filmtitle: 'Love Playlist: Season 2' },
    { image: '/assets/images/gallery/8.jpg', episodeno: 'Episode 8', filmtitle: 'Love Playlist' },
    { image: '/assets/images/gallery/9.jpg', episodeno: 'Episode 12', filmtitle: 'Cinderella Chef' },
    { image: '/assets/images/gallery/10.jpg', episodeno: 'Episode 1', filmtitle: 'Fighting Time' },
    { image: '/assets/images/gallery/11.jpg', episodeno: 'Episode 3', filmtitle: 'Midnight Foodstore' },

  ];

  itemReviews = [
    { image: './assets/images/gallery/1.jpg', episodeno: 'Episode 24', filmtitle: 'The King’s Avatar' },
    { image: './assets/images/gallery/2.jpg', episodeno: 'Episode 24', filmtitle: 'Put Your Head on My Shoulder' },
    { image: '/assets/images/gallery/3.jpg', episodeno: 'Episode 7', filmtitle: 'Secret Queen Makers' },
    { image: '/assets/images/gallery/4.jpg', episodeno: 'Episode 8', filmtitle: 'Seventeen' },
    { image: '/assets/images/gallery/5.jpg', episodeno: 'Episode 10', filmtitle: 'Yellow' },
    { image: '/assets/images/gallery/6.jpg', episodeno: 'Episode 10', filmtitle: 'Flower Ever After' },
    { image: '/assets/images/gallery/7.jpg', episodeno: 'Episode 12', filmtitle: 'Love Playlist: Season 2' },
    { image: '/assets/images/gallery/8.jpg', episodeno: 'Episode 8', filmtitle: 'Love Playlist' },
    { image: '/assets/images/gallery/9.jpg', episodeno: 'Episode 12', filmtitle: 'Cinderella Chef' },
    { image: '/assets/images/gallery/10.jpg', episodeno: 'Episode 1', filmtitle: 'Fighting Time' },
    { image: '/assets/images/gallery/11.jpg', episodeno: 'Episode 3', filmtitle: 'Midnight Foodstore' },

  ];



}
