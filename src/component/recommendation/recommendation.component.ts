import { Component } from '@angular/core';

@Component({
  selector: 'app-recommendation',
  imports: [],
  templateUrl: './recommendation.component.html',
  styleUrl: './recommendation.component.scss'
})
export class RecommendationComponent {
    testimonials = [
    {
      name: 'דניאל ש.',
      quote: 'יאלה בנתה לי אתר מהמם תוך שבוע – ממליץ בחום!',
      image: 'beard-1845166_1280.jpg'
    },
    {
      name: 'עדי ל.',
      quote: 'קיבלתי שירות מקצועי, אדיב ומהיר – והתוצאה מעל למצופה.',
      image: 'man-657869_1280.jpg'
    },
    {
      name: 'רועי ב.',
      quote: 'כבר קיבלתי לקוחות דרך האתר החדש – השקעה ששווה זהב!',
      image: 'portrait-5115894_1280.jpg'
    },
    {
      name: 'מירב מ.',
      quote: 'תהליך מסודר, עיצוב נקי, תמיכה גם אחרי העלייה לאוויר.',
      image: 'man-3803551_1280.jpg'
    }
  ];
scrollToRecommendation() {
const section = document.getElementById('recommendation-section');
if (section) {
  const yOffset = -100; // שלילי = לעצור לפני
  const y = section.getBoundingClientRect().top + window.scrollY + yOffset;

  window.scrollTo({ top: y, behavior: 'smooth' });
}

}

}
