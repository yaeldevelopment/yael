import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-hero-slider', 
   standalone: true,
  imports: [CommonModule,SlickCarouselModule],
  templateUrl: './hero-slider.component.html',
  styleUrl: './hero-slider.component.scss'
})
export class HeroSliderComponent implements OnInit  {
  @ViewChild('slickCarousel', { static: false }) slickCarousel!: SlickCarouselComponent;
  slideConfig: any = {};
  slides: any[] = [];
  autoplay = true;
  constructor(private cdr: ChangeDetectorRef) {} // Inject ChangeDetectorRef
  ngOnInit(): void {


this.slides = [
  {
    image: 'coding.png',
    title: 'פיתוח אתרים ומערכות מתקדמות',
    subtitle: 'בניית אפליקציות רספונסיביות וידידותיות למשתמש בטכנולוגיות מודרניות'
  },
  {
    image: 'angular.png',
    title: 'מומחיות ב-Angular ו-Frontend',
    subtitle: 'עבודה עם TypeScript, SCSS ו-Frameworks ליצירת ממשקים דינמיים ואינטראקטיביים'
  },
  {
    image: 'backend.png',
    title: 'פיתוח צד שרת עם C# ו-ASP.NET',
    subtitle: 'תכנון ויישום API, אינטגרציה עם מסדי נתונים כמו MongoDB ו-SQL Server'
  },
  {
    image: 'support.png',
    title: 'ליווי אישי ופתרון בעיות מהיר',
    subtitle: 'שירות מקצועי וזמינות גבוהה לכל שלבי הפיתוח והתמיכה'
  }
];

this.slideConfig = {
     slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  dots: false,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 500, // מעבר חלק
  cssEase: 'ease-in-out',
    rtl: true
  };

this.cdr.detectChanges(); // Force change detection after data is ready

   // When slides are loaded, the *ngIf in the template will become true and render the carousel.
    
  }


toggleAutoplay() {
  this.autoplay = !this.autoplay;

  if (this.slickCarousel) {
    if (this.autoplay) {
      this.slickCarousel.slickPlay();
    } else {
      this.slickCarousel.slickPause();
    }
  }

  // עדכון הגדרות מחדש

}

}
