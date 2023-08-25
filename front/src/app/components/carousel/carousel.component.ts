import { Component } from '@angular/core';
import { NgbCarouselModule, NgbCarouselConfig, } from '@ng-bootstrap/ng-bootstrap';
import { NgIf, NgFor} from '@angular/common';

@Component({
  selector: 'ngbd-carousel-basic',
	standalone: true,
	imports: [NgbCarouselModule, NgIf, NgFor],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig],
})
export class CarouselComponent {
  images = [
    '../../../assets/image/clinic1.png',
    '../../../assets/image/clinic2.png',
    '../../../assets/image/clinic3.png',
    '../../../assets/image/clinic4.png',
    '../../../assets/image/clinic5.png',
    '../../../assets/image/clinic6.png',
    '../../../assets/image/clinic7.png'
  ];
  showNavigationArrows = true;
	showNavigationIndicators = true;

  constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
	}
}
