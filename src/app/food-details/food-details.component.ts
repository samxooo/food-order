import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../service/cart/cart.service';
import { FoodService } from '../service/food/food.service';
import { Food } from '../shared/model/food';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent {

  food!: Food;

  constructor(
    private route: ActivatedRoute,
    private fdService: FoodService,
    private cartService: CartService,
    private router: Router) {

    route.params.subscribe((params: any) => {
      if(params.id)
      this.food = fdService.getFoodById(params.id)
    })
  };

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart')
  }

}
