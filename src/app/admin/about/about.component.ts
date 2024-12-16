import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  shopName: string = 'MMCR - Coffee Shop';
  foundingYear: number = 2024;
  founders: string[] = ['Paul Macapagal', 'Karlo Mirasol', 'Jimwell Calma', 'Jb Reyes'];
  aboutImage = '../about-image/coffee-hero.png';

  values = [
    { title: 'Quality', description: 'We source the highest quality beans from around the world.' },
    { title: 'Community', description: 'We believe in fostering a sense of community and belonging.' },
    { title: 'Sustainability', description: 'We are committed to sustainable practices in all aspects of our business.' },
    { title: 'Customer Service', description: 'Our customers are our top priority, and we strive to provide exceptional service.' },
    { title: 'Innovation', description: 'We are always looking for new ways to improve and innovate.' }
  ];
}
