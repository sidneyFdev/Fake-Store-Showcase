"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useAPI } from "@/contexts/useAPIContext";

export default function Home() {

  const {apiData} = useAPI()
  return (
    <div className={styles.page}>
      <p>This is the base for site!</p>
    </div>
  );
}
