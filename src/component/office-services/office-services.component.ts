import { Component } from '@angular/core';

@Component({
  selector: 'app-office-services',
  imports: [],
  templateUrl: './office-services.component.html',
  styleUrl: './office-services.component.scss'
})
export class OfficeServicesComponent {
services = [
  {
    title: 'פיתוח אתרים',
    icon: 'bi-code-slash text-primary'
  },
  {
    title: 'בניית ממשקי משתמש (UI)',
    icon: 'bi-easel2 text-info'
  },
  {
    title: 'פיתוח צד שרת (Backend)',
    icon: 'bi-hdd-network text-danger'
  },
  {
    title: 'אינטגרציה עם API',
    icon: 'bi-plug text-success'
  },
  {
    title: 'פיתוח מערכות ניהול תוכן',
    icon: 'bi-kanban text-warning'
  },
  {
    title: 'תחזוקת אתרים ואופטימיזציה',
    icon: 'bi-wrench-adjustable text-secondary'
  }
];



}
