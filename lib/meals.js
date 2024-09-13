import sql from "better-sqlite3";
import { resolve } from "styled-jsx/css";
const db = sql("meals.db");

export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Failed to load Meals");
  return db.prepare("SELECT * FROM meals").all();
};
