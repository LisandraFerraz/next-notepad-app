"use client";

import { IEditorOptions } from "@/app/utils/mocked-data/text-editor-options";
import styles from "./custom-select.module.scss";

interface CustomSelect {
  data: IEditorOptions[];
  label: string;
}

export default function CustomSelect({ data, label }: CustomSelect) {
  function getSelecContent(type: number, option: string) {
    if (type == 1) {
      return getColor(option);
    }
    if (type == 2) {
      return getFontSize(option);
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

  function getFontSize(option: string) {
    switch (option) {
      case "small":
        return "12";

      case "regular":
        return "16";

      case "large":
        return "20";

      default:
        return "16";
    }
  }

  return (
    <>
      <label className={styles.custom_label}>{label}</label>
      <select className={styles.custom_select}>
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
