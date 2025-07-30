import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-marketing',
  imports: [CommonModule],
  templateUrl: './marketing.component.html',
  styleUrl: './marketing.component.scss'
})
export class MarketingComponent {
features = [
  {
    icon: 'bi-lightning-charge-fill text-warning',
    text: 'פיתוח מהיר ויעיל'
  },
  {
    icon: 'bi-person-check-fill text-success',
    text: 'יחס אישי וליווי צמוד'
  },
  {
  icon: 'bi-phone-fill text-primary',
    text: 'עיצוב רספונסיבי לכל מסך'
  },
  {
    icon: 'bi-graph-up-arrow text-danger',
    text: 'השקעה שמניבה תוצאות'
  }
];

}
