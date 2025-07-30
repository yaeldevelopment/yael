import { Component } from '@angular/core';
import { HeroSliderComponent } from "../hero-slider/hero-slider.component";
import { RecommendationComponent } from "../recommendation/recommendation.component";
import { OfficeServicesComponent } from "../office-services/office-services.component";
import { ContactComponent } from "../contact/contact.component";
import { MarketingComponent } from "../marketing/marketing.component";

@Component({
  selector: 'app-home',
  imports: [HeroSliderComponent, RecommendationComponent, OfficeServicesComponent, ContactComponent, MarketingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
