import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})


export class SliderComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [' ', ' '],
    items: 2,
    margin: 0,
    nav: true
  }
  constructor() { }

  ngOnInit() {

  }

  itemData = [
    { id: 0, type: 'large', image: './assets/images/slider/slide1.jpg', title: 'Kingdom – Key Pillars of Wisdom the Movie Teaches the Audience', info: '4 days ago - 6 comments' },
    { image: './assets/images/slider/slide2.jpg', title: 'Why You Should Watch: Master in the House', info: '12 days ago - 30 comments' },
    { image: '/assets/images/slider/slide3.jpg', title: '[Video] Top 15 Highest Rated Korean Dramas of 2019', info: '13 days ago - 30 comments' },

    // { id: 1, type: 'small', data: [{ image: './assets/images/slider/slide2.jpg', title: 'Why You Should Watch: Master in the House', info: '12 days ago - 30 comments' }, { image: '/assets/images/slider/slide3.jpg', title: '[Video] Top 15 Highest Rated Korean Dramas of 2019', info: '13 days ago - 30 comments' }] },
    // { id: 2, type: 'large', image: './assets/images/slider/slide1.jpg', title: 'Kingdom – Key Pillars of Wisdom the Movie Teaches the Audience', info: '4 days ago - 6 comments' },
    // { id: 3, type: 'small', data: [{ image: './assets/images/slider/slide2.jpg', title: 'Why You Should Watch: Master in the House', info: '12 days ago - 30 comments' }, { image: '/assets/images/slider/slide3.jpg', title: '[Video] Top 15 Highest Rated Korean Dramas of 2019', info: '13 days ago - 30 comments' }] },
    // { id: 4, type: 'large', image: './assets/images/slider/slide1.jpg', title: 'Kingdom – Key Pillars of Wisdom the Movie Teaches the Audience', info: '4 days ago - 6 comments' },
    // { id: 5, type: 'small', data: [{ image: './assets/images/slider/slide2.jpg', title: 'Why You Should Watch: Master in the House', info: '12 days ago - 30 comments' }, { image: '/assets/images/slider/slide3.jpg', title: '[Video] Top 15 Highest Rated Korean Dramas of 2019', info: '13 days ago - 30 comments' }] },

    { image: '/assets/images/slider/slide4.jpg', title: 'Drama Spotlight: Boku dake ga Inai Machi', info: '2 hours ago - 1 comment' },
    { image: '/assets/images/slider/slide5.jpg', title: 'Me VS My Anti-Horror Friends', info: '1 day ago - 52 comments' },
    { image: '/assets/images/slider/slide1.jpg', title: '43rd Japan Academy Awards for Excellence', info: '2 days ago - 14 comments' },
    { image: '/assets/images/slider/slide3.jpg',  title: 'Why You Should Watch: Master in the House', info: '12 days ago - 30 comments' },
    { image: '/assets/images/slider/slide4.jpg', title: '[Video] Top 15 Highest Rated Korean Dramas of 2019', info: '13 days ago - 30 comments' },
    { image: '/assets/images/slider/slide5.jpg', title: 'Drama Spotlight: Boku dake ga Inai Machi', info: '2 hours ago - 1 comment' },
    { image: '/assets/images/slider/slide1.jpg', title: '43rd Japan Academy Awards for Excellence', info: '2 days ago - 14 comments' },
    { image: '/assets/images/slider/slide1.jpg', title: '[Video] Top 15 Highest Rated Korean Dramas of 2019', info: '13 days ago - 30 comments' },
    { image: '/assets/images/slider/slide3.jpg', title: 'Me VS My Anti-Horror Friends', info: '1 day ago - 52 comments' },
    { image: '/assets/images/slider/slide4.jpg', title: '43rd Japan Academy Awards for Excellence', info: '2 days ago - 14 comments' },
    { image: '/assets/images/slider/slide5.jpg', title: 'Kingdom – Key Pillars of Wisdom the Movie Teaches the Audience', info: '4 days ago - 6 comments' },
    { image: '/assets/images/slider/slide1.jpg', title: '[Video] Top 15 Highest Rated Korean Dramas of 2019', info: '13 days ago - 30 comments' }
  ];

}
