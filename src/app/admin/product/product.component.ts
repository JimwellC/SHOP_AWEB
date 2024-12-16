import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  image1='../prod_images/americano.png';
  image2='../prod_images/caramel.png';
  image3='../prod_images/mocha.png';
  image4='../prod_images/seasalt.png';
  image5='../prod_images/macchiato.png';
  image6='../prod_images/matcha.png';
  food1='../prod_images/paty.png';
  food2='../prod_images/kelp.png';
  food3='../prod_images/chum.png';
  food4='../prod_images/pretpat.png';
  food5='../prod_images/balone.png';
  food6='../prod_images/mealset.png';
  spec1='../prod_images/melon.png';
  spec2='../prod_images/dew.png';
  spec3='../prod_images/pizza.png';




  wi = 700;
  hi = 500;
  alt = 'Photo';
}
