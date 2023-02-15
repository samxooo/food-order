import { Component, OnInit } from '@angular/core';
import { FoodService } from '../service/food/food.service';
import { Tag } from '../shared/model/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{

  constructor(private fdService: FoodService) { }


  tags: Tag[] = [];

  ngOnInit(): void {
    this.tags = this.fdService.getAllTags();
  }

}
