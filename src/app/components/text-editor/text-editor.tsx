"use client";

import {
  ColorOptions,
  FontFamilyOptions,
  FontSizeOptions,
  IEditorOptions,
} from "@/app/utils/mocked-data/text-editor-options";
import CustomSelect from "../custom-select/custom-select";
import styles from "./text-editor.module.scss";
import { useState } from "react";

export default function TextEditor() {
  return (
    <div className={styles.editor_container}>
      <div className={styles.text_area}>
        <textarea
          placeholder="Comece a anotar aqui..."
          name="text_editor"
          id="text_editor"
        />
      </div>

      <div className={styles.text_tools}>
        <div className={styles.text_select_tools_row}>
          {/* editor color */}
          <div>
            <CustomSelect label="Cor do bloco" data={ColorOptions} />
          </div>

          {/* font size */}
          <div>
            <CustomSelect label="Texto" data={FontSizeOptions} />
          </div>
        </div>

        {/* font family */}
        <div>
          <CustomSelect label="Fonte" data={FontFamilyOptions} />
        </div>

        {/*  text justiy*/}
        <div className={styles.text_btn_tools_row}>
          <button>
            <i className="bi bi-justify-left"></i>
          </button>
          <button>
            <i className="bi bi-text-center"></i>
          </button>
          <button>
            <i className="bi bi-list"></i>
          </button>
          <button>
            <i className="bi bi-justify-right"></i>
          </button>
        </div>

        {/*  text format*/}
        <div className={styles.text_btn_tools_row}>
          <button>
            <i className="bi bi-type-strikethrough"></i>
          </button>
          <button>
            <i className="bi bi-type-underline"></i>
          </button>
          <button>
            <i className="bi bi-type-italic"></i>
          </button>
          <button>
            <i className="bi bi-type-bold"></i>
          </button>
        </div>

        {/* list options */}
        <div className={styles.text_btn_tools_row}>
          <button>
            <i className="bi bi-list-task"></i>
          </button>
          <button>
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
    </div>
  );
}
