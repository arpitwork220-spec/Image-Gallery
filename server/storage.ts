import { menuItems, type MenuItem, type InsertMenuItem } from "@shared/schema";
import { db } from "./db";

export interface IStorage {
  getMenuItems(): Promise<MenuItem[]>;
  seedMenuItems(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getMenuItems(): Promise<MenuItem[]> {
    return await db.select().from(menuItems);
  }

  async seedMenuItems(): Promise<void> {
    const items: InsertMenuItem[] = [
      {
        name: "Morning Sunshine",
        category: "Juice",
        description: "Fresh orange and carrot blend for a morning boost.",
        imageUrl: "juice_orange" 
      },
      {
        name: "Red Vitality",
        category: "Juice",
        description: "Beetroot and pomegranate mix for blood health.",
        imageUrl: "juice_red"
      },
      {
        name: "Green Detox",
        category: "Juice",
        description: "Spinach, cucumber, and lemon cleanse.",
        imageUrl: "juice_green" // Mapping to a generic green one if specific not found
      },
      {
        name: "Kiwi Power Bowl",
        category: "Bowl",
        description: "Kiwi, orange, and pineapple chunks.",
        imageUrl: "bowl_kiwi"
      },
      {
        name: "Acai Delight",
        category: "Bowl",
        description: "Acai berry base with nuts and seeds.",
        imageUrl: "bowl_acai"
      }
    ];
    await db.insert(menuItems).values(items);
  }
}

export const storage = new DatabaseStorage();
