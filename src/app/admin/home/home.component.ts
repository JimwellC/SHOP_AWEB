import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = "MMRC Coffee Shop"

 description = "We believe that coffee is more than just a drink, It's an experience, a moment of peace, and a way to connect. Nestled in the heart of the community, we craft each cup of coffee with the finest, locally sourced beans, roasted to perfection. Whether you're a coffee connoisseur or someone who simply loves a good brew, our carefully curated menu is designed to satisfy every taste."

 promise = "At MMCR, we are committed to providing you with the highest quality coffee and the best possible service every single day. We carefully select our beans, perfect our brewing methods, and take pride in every cup we serve. Whether you're here for a quick espresso or a relaxing afternoon, we promise to create a welcoming space where you can enjoy your coffee at its finest. Your satisfaction is our top priority, and we will always strive to exceed your expectations with every visit. Thank you for making us a part of your day!"
imageUrl = 'images-home/bg.jpg'


}
