import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get(api.menu.list.path, async (req, res) => {
    const items = await storage.getMenuItems();
    res.json(items);
  });

  // Simple seed check on startup
  const existing = await storage.getMenuItems();
  if (existing.length === 0) {
    console.log("Seeding database with menu items...");
    await storage.seedMenuItems();
  }

  return httpServer;
}
