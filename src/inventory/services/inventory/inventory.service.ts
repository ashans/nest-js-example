import { Injectable } from '@nestjs/common';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';
import { InventoryItem } from '../../types/InventoryItem';

@Injectable()
export class InventoryService {
  private items: InventoryItem[] = [
    {
      id: '1',
      name: 'item1',
      description: 'desc1',
    },
    {
      id: '2',
      name: 'item2',
      description: 'desc2',
    },
    {
      id: '2',
      name: 'item2',
      description: 'desc2',
    },
    {
      id: '3',
      name: 'item3',
      description: 'desc3',
    },
  ];

  getInventoryItem(id: string): InventoryItem {
    return this.items.find((value) => value.id === id);
  }

  createItem(item: InventoryItem): string {
    const newId = randomStringGenerator();
    item.id = newId;
    this.items.push(item);

    return newId;
  }
}
