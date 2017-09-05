import { Component } from '@angular/core';
import * as $ from 'jquery';
import 'assets/js/bootstrap.min.js';
import 'assets/js/bootstrap-slider.min.js';

@Component({
  selector: 'app-productlisting',
  templateUrl: './productlisting.component.html',
  styleUrls: ['./productlisting.component.css']
})
  export class ProductlistingComponent{
  title = 'Gstock';
  ngOnInit() {
    (<any>$("#ex2")).slider({});
    (<any>$('.footer-category')).slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      prevArrow: $('.prev'),
      nextArrow: $('.next')
    });
  }

}
