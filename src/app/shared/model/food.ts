export class Food {
  id!: number;
  name!: string;
  price!: number;
  tags?: string[];
  stars: number = 0;
  favorite: boolean = false;
  imageUrl!: string;
  origins!: string[];
  cookTime!: string;
}
