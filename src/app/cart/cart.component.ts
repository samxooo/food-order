import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart/cart.service';
import { FoodService } from '../service/food/food.service';
import { Cart } from '../shared/model/Cart';
import { CartItem } from '../shared/model/CartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart!: Cart;

  constructor(private cartService: CartService, private fdService: FoodService) {
    let foods = fdService.getAll();
    cartService.addToCart(foods[1]);
    cartService.addToCart(foods[3]);
    cartService.addToCart(foods[4]);
    this.setCart()
  }

  ngOnInit(): void {

  }

  setCart(): void {
    this.cart = this.cartService.getCart()
  }

  removeCart(cartItem:CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }
}
