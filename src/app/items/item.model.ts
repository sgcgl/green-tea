
import { ItemUnits } from '../shared/itemUnits.model';

export class Item {
  public name: string;
  public description: string;
  public imagePath: string;
  public itemUnits: ItemUnits[];

  constructor(name: string,
              desc: string,
              imagePath: string,
              itemUnits: ItemUnits[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.itemUnits = itemUnits;
  }
}
