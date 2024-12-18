"use client";

import Header from "./components/editor-header/header";
import Sidenav from "./components/sidenav/sidenav";
import TextEditor from "./components/text-editor/text-editor";
import styles from "./notepad.module.scss";

export default function Notepad() {
  return (
    <div className={styles.notepad_container}>
      <Sidenav />
      <div className={styles.notepad_group}>
        <Header />
        <TextEditor />
      </div>
    </div>
  );
}
