import { useState } from "react";
import styles from "./sidenav.module.scss";
import { INotes } from "@/app/utils/mocked-data/mocked-notes-data";
import SidenavCard from "../sidenav-card/sidenav-card";
import { Note } from "@/app/utils/classes/note-class";

interface ISidenavProps {
  dataList: INotes[];
  openNote: (id: string) => void;
  createNote: () => void;
}

export default function Sidenav({
  dataList,
  openNote,
  createNote,
}: ISidenavProps) {
  function handleOpenNote(id: string) {
    openNote(id);
  }

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.search_bar}>
          <input type="text" placeholder="Pesquisar..." />
          <button>
            <i className="bi bi-search"></i>
          </button>
        </div>
        <div onClick={createNote} className={styles.create_new_note}>
          <span>Novo bloco</span>
        </div>
      </div>

      <div className={styles.cards_group}>
        {dataList.map((item: any, index: any) => {
          return (
            <SidenavCard
              id={item?.id}
              openNote={(e) => handleOpenNote(e)}
              color={item?.color}
              text={item?.text}
              title={item?.title}
              char_count={item?.char_count}
              date_created={item?.date_created}
              note_color={item?.note_color}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
