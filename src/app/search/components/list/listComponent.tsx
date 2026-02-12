"use client";
import { ReactElement, useContext } from "react";

import ItemComponent from "@/app/search/components/item/item.component";
import { ItemContext } from "@/app/search/providers/items/items.provider";

import styles from "./list.module.css";

export default function ListComponent(): ReactElement {
  const { filteredItems } = useContext(ItemContext);
  return (
    <ul className={styles.list}>
      {filteredItems.map((item) => (
        <ItemComponent key={item.value} item={item} />
      ))}
    </ul>
  );
}
