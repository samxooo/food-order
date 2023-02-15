import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FoodService } from '../service/food/food.service';
import { Food } from '../shared/model/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  foods: Food[] = [];

  constructor(private fdService: FoodService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      if (params.searchTerm)
      this.foods = this.fdService.getAllFoodsBySearchTerm(params.searchTerm)
      else if (params.tag)
      this.foods = this.fdService.getAllFoodsByTag(params.tag);
      else
      this.foods = this.fdService.getAll();
    })

  }

  // onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
  //   alert(`Old Value:${$event.oldValue},
  //     New Value: ${$event.newValue},
  //     Checked Color: ${$event.starRating.checkedcolor},
  //     Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  // }


}
