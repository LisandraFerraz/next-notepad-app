"use client";

import { IEditorOptions } from "@/app/utils/mocked-data/text-editor-options";
import styles from "./custom-select.module.scss";
import { useState } from "react";

interface CustomSelect {
  data: IEditorOptions[];
  label: string;
  setValue?: (value: any) => void;
}

export default function CustomSelect({ data, label, setValue }: CustomSelect) {
  function handleOnChange(e: any) {
    if (setValue) setValue(e.currentTarget.value);
  }

  function getSelecContent(type: number, option: string) {
    if (type == 1) {
      return getColor(option);
    }
    if (type == 2) {
      return option;
    }
    if (type == 3) {
      return option;
    }
  }

  function getColor(option: string) {
    switch (option) {
      case "baby_blue":
        return "🔵";
      case "baby_red":
        return "🔴";
      case "baby_purple":
        return "🟣";
      default:
        return "🔵";
    }
  }

  return (
    <>
      <label className={styles.custom_label}>{label}</label>
      <select
        className={styles.custom_select}
        onChange={(e) => handleOnChange(e)}
      >
        {data?.map((item: any, index: any) => {
          return (
            <option key={index} value={item.option}>
              {getSelecContent(item.type, item.option)}
            </option>
          );
        })}
      </select>
    </>
  );
}
