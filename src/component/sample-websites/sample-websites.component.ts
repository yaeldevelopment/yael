import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sample-websites',
  imports: [CommonModule],
  templateUrl: './sample-websites.component.html',
  styleUrl: './sample-websites.component.scss'
})
export class SampleWebsitesComponent {
sampleWebsites = [{
    url: 'https://yaelajami.netlify.app/',
    image: './assets/taxadvisor..png',
    label: 'לקוח פעיל',
    labelColor: '#2c8f4a'
  },
  {
    url: 'https://job-yael.onrender.com/',
    image: './assets/website_job.png',
    label: 'האתר שודרג בהצלחה!',
    labelColor: '#68235b'
  },
  {
    url: 'https://angular-mongo.onrender.com/',
    image: 'https://res.cloudinary.com/dv3ucnxsv/image/upload/v1738519456/nuhb1snfjjbbgte1djqx.png',
    label: ''
  },
  {
    url: 'https://yael-ajami.onrender.com/',
    image: 'https://res.cloudinary.com/dv3ucnxsv/image/upload/v1738519452/r4acglymizv1ocxpwvce.png',
    label: ''
  }

];

}
