import React, { Suspense } from "react";
import styles from "./Page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
const Meals = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
};

const MealsPage = async () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself.It is easy and fun.
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your Favourite Recipe.</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense
          fallback={<div className={styles.loading}>Feching Meals...</div>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
