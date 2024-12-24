import styles from "./text-format-tools.module.scss";

import {
  ColorOptions,
  FontFamilyOptions,
  FontSizeOptions,
} from "@/app/utils/mocked-data/text-editor-options";
import CustomSelect from "../custom-select/custom-select";
import React from "react";

type TextFormatToolsProps = {
  editorRef: React.RefObject<HTMLDivElement | null>;
  setColor: (value: any) => void;
};

export function TextFormatTools({ editorRef, setColor }: TextFormatToolsProps) {
  function formatText(style: any, options?: any) {
    console.log("sifhash", options);

    if (editorRef.current) {
      const selection = window.getSelection();
      const range = selection?.getRangeAt(0);

      if (range && range.startContainer) {
        const span = document.createElement("span");
        span.style[style] = options;
        range.surroundContents(span);
      }
    }

    if (editorRef.current && !options) {
      editorRef.current.focus();
      document.execCommand(style, false, options);
    }
  }

  function changeNoteColor(color: any) {
    console.log("color", color);
    setColor(color);
  }

  return (
    <div className={styles.text_tools}>
      <div className={styles.text_select_tools_row}>
        {/* editor color */}
        <div>
          <CustomSelect
            setValue={changeNoteColor}
            label="Cor do bloco"
            data={ColorOptions}
          />
        </div>

        {/* font size */}
        <div>
          <CustomSelect
            setValue={(e) => formatText("fontSize", e)}
            label="Texto"
            data={FontSizeOptions}
          />
        </div>
      </div>

      {/* font family */}
      <div>
        <CustomSelect
          setValue={(e) => formatText("fontFamily", e)}
          label="Fonte"
          data={FontFamilyOptions}
        />
      </div>

      {/*  text format*/}
      <div className={styles.text_btn_tools_row}>
        <button onClick={() => formatText("strikethrough")}>
          <i className="bi bi-type-strikethrough"></i>
        </button>
        <button onClick={() => formatText("underline")}>
          <i className="bi bi-type-underline"></i>
        </button>
        <button onClick={() => formatText("italic")}>
          <i className="bi bi-type-italic"></i>
        </button>
        <button onClick={() => formatText("bold")}>
          <i className="bi bi-type-bold"></i>
        </button>
      </div>

      {/*  text justiy*/}
      <div className={styles.text_btn_tools_row}>
        <button onClick={() => formatText("JustifyLeft")}>
          <i className="bi bi-justify-left"></i>
        </button>
        <button onClick={() => formatText("JustifyCenter")}>
          <i className="bi bi-text-center"></i>
        </button>
        <button onClick={() => formatText("justifyRight")}>
          <i className="bi bi-justify-right"></i>
        </button>
      </div>

      {/* list options */}
      <div className={styles.text_btn_tools_row}>
        <button onClick={() => formatText("insertUnorderedList")}>
          <i className="bi bi-list-task"></i>
        </button>
        <button onClick={() => formatText("insertOrderedList")}>
          <i className="bi bi-list-ol"></i>
        </button>
      </div>

      <div className={styles.github_link}>
        <i className="bi bi-github"></i>{" "}
        <a target="_blank" href="www.github.com/LisandraFerraz">
          github.com/LisandraFerraz
        </a>
      </div>
    </div>
  );
}
