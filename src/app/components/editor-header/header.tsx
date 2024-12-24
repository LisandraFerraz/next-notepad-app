import { useState } from "react";
import styles from "./header.module.scss";

interface IHeader {
  data?: any;
  handle_save: () => void;
  handle_change_title: (value: any) => void;
}

export default function Header({ handle_change_title, handle_save }: IHeader) {
  const [noteTitle, setNoteTitle] = useState<string>("");

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
        <span>232/500</span>
        <button>
          <i className="bi bi-arrow-90deg-left"></i>
        </button>
        <button>
          <i className="bi bi-arrow-90deg-right"></i>
        </button>
        <button onClick={handle_save}>
          <i className="bi bi-floppy"></i>
        </button>
      </div>
    </div>
  );
}
