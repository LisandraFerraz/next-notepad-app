"use client";
import { v4 as uid } from "uuid";

import styles from "./notepad.module.scss";

import { useEffect, useRef, useState } from "react";
import { Note } from "@/app/utils/classes/note-class";
import Sidenav from "./components/sidenav/sidenav";
import Header from "./components/editor-header/header";
import { GetDate } from "./utils/functions/get-date";
import { TextFormatTools } from "./components/text-format-tools/text-format-tools";

export default function Notepad() {
  const editorRef = useRef<HTMLDivElement>(null);

  const [noteText, setNoteText] = useState<any>(editorRef);

  const [noteTitle, setNoteTitle] = useState<string>("Sem título");

  const [noteColor, setNoteColor] = useState<string>("");

  const [activeNote, setActiveNote] = useState<Note>({});

  const [savedNotes, setSavedNotes] = useState<any>([]);

  useEffect(() => {
    let savedNotedlocal = localStorage.getItem("@Notes") || "";

    if (savedNotedlocal) {
      const formatedData = JSON.parse(savedNotedlocal);
      setSavedNotes(formatedData);
    }
  }, []);

  // useEffect(() => {
  //   setNoteText(activeNote?.text || "");
  // }, [activeNote]);

  useEffect(() => {
    if (editorRef.current && activeNote) {
      editorRef.current.innerHTML = activeNote.text || "";
    }
  }, [activeNote]);

  useEffect(() => {
    setNoteTitle(activeNote?.title || "");
  }, [activeNote]);

  function saveNote() {
    console.log(noteColor);
    if (activeNote && savedNotes) {
      console.log("activeNote | ", activeNote);

      const updatedNotes = savedNotes.map((item: any) => {
        if (item.id === activeNote.id) {
          return {
            ...item,
            title: noteTitle !== item.title ? noteTitle : item.title,
            text: noteText !== item.text ? noteText : item.text,
            note_color:
              noteColor !== item.note_color ? noteColor : item.note_color,
            date_created: GetDate(new Date()),
          };
        }
        return item;
      });

      setSavedNotes(updatedNotes);
      localStorage.setItem("@Notes", JSON.stringify(updatedNotes));
      console.log(
        "new note updated | ",
        updatedNotes.find((n: any) => n.id === activeNote.id)
      );
    } else {
      let data: Note = {
        id: uid(),
        date_created: GetDate(new Date()),
        text: noteText,
        title: noteTitle,
        char_count: Number(noteText?.length),
        note_color: noteColor,
      };

      if (noteText) {
        const updatedNotes = [...savedNotes, data];
        setSavedNotes(updatedNotes);
        localStorage.setItem("@Notes", JSON.stringify(savedNotes));
      }
    }
  }

  function openNote(id: string) {
    let localData = localStorage.getItem("@Notes");
    const formatedData = JSON.parse(localData || "");

    const selectedNote: Note = formatedData.find(
      (selected: any) => selected.id === id
    );

    setActiveNote(selectedNote);

    setNoteText(activeNote?.text || "");
    setNoteTitle(activeNote?.title || "");
    setNoteColor(activeNote?.note_color || "");
  }

  function createNote() {
    const data: Note = {
      id: uid(),
      date_created: GetDate(new Date()),
      text: "",
      title: "Sem título",
      note_color: "baby_blue",
    };

    const updatedNotes = [...savedNotes, data];
    setSavedNotes(updatedNotes);

    localStorage.setItem("@Notes", JSON.stringify(updatedNotes));

    openNote(data.id!);
  }

  return (
    <div className={styles.notepad_container}>
      <Sidenav
        createNote={createNote}
        dataList={savedNotes}
        openNote={openNote}
      />
      <div className={styles.notepad_group}>
        <Header
          data={activeNote}
          handle_change_title={(e) => setNoteTitle(e)}
          handle_save={saveNote}
        />

        <div className={styles.editor_container}>
          <div className={`${styles.text_area} ${styles[noteColor]}`}>
            <div
              contentEditable
              id="text_editor"
              ref={editorRef}
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
