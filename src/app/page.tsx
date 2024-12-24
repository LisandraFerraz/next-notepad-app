"use client";
import { v4 as uid } from "uuid";

import styles from "./notepad.module.scss";

import { useRef, useState } from "react";
import { Note } from "@/app/utils/classes/note-class";
import Sidenav from "./components/sidenav/sidenav";
import Header from "./components/editor-header/header";
import { GetDate } from "./utils/functions/get-date";
import { TextFormatTools } from "./components/text-format-tools/text-format-tools";

export default function Notepad() {
  const editorRef = useRef<HTMLDivElement>(null);

  const [noteText, setNoteText] = useState<any>();

  const [noteTitle, setNoteTitle] = useState<string>("Sem título");

  const [noteColor, setNoteColor] = useState<string>("baby_blue");

  const [savedNotes, setSavedNotes] = useState<any>([]);

  const [activeNote, setActiveNote] = useState();

  function saveNote() {
    console.log("noteColor", noteColor);
    let data: Note = {
      id: uid(),
      date_created: GetDate(new Date()),
      text: noteText,
      title: noteTitle,
      char_count: Number(noteText.length),
      note_color: noteColor,
    };

    if (noteText) {
      const updatedNotes = [...savedNotes, data];
      setSavedNotes(updatedNotes);
      localStorage.setItem("@Notes", JSON.stringify(savedNotes));
    }
  }

  function openNote(id: string) {
    const selectedNote = savedNotes.find((selected: any) => selected.id === id);
    if (editorRef.current) {
      editorRef.current.innerHTML = selectedNote.text;
    }

    console.log("selectedNote", selectedNote);
  }

  return (
    <div className={styles.notepad_container}>
      <Sidenav dataList={savedNotes} openNote={openNote} />
      <div className={styles.notepad_group}>
        <Header
          handle_change_title={(e) => setNoteTitle(e)}
          handle_save={saveNote}
        />

        <div className={styles.editor_container}>
          <div className={`${styles.text_area} ${styles[noteColor]}`}>
            <div
              contentEditable
              ref={editorRef}
              id="text_editor"
              className={styles.textarea}
              onBlur={(e) => setNoteText(e.currentTarget.innerHTML)}
            />
          </div>

          <TextFormatTools
            setColor={(e) => setNoteColor(e)}
            editorRef={editorRef}
          />
        </div>
      </div>
    </div>
  );
}
