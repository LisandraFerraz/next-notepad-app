import { useEffect, useState } from "react";
import styles from "./header.module.scss";
import { Note } from "@/app/utils/classes/note-class";
import { removeTags } from "@/app/utils/functions/remove-tags";

interface IHeader {
  data: Note;
  handle_save: () => void;
  handle_change_title: (value: any) => void;
}

export default function Header({
  data,
  handle_change_title,
  handle_save,
}: IHeader) {
  const [noteTitle, setNoteTitle] = useState<string>(data?.title || "");

  useEffect(() => {
    setNoteTitle(data?.title || "");
  }, [data]);

  function updateTitle(e: any) {
    const title = String(e.currentTarget.value) || "";

    setNoteTitle(title);
    handle_change_title(title);
  }

  return (
    <div className={styles.header_container}>
      <div className={styles.note_title}>
        <i className="bi bi-pencil-square" />
        <input
          type="text"
          value={noteTitle}
          placeholder="Sem título"
          onChange={(e) => updateTitle(e)}
        />
      </div>

      <div className={styles.note_options}>
        <button onClick={handle_save}>
          <i className="bi bi-floppy"></i>
        </button>
      </div>
    </div>
  );
}
