import { useState } from "react";
import styles from "./sidenav.module.scss";
import { INotes } from "@/app/utils/mocked-data/mocked-notes-data";
import SidenavCard from "../sidenav-card/sidenav-card";
import { Note } from "@/app/utils/classes/note-class";

interface ISidenavProps {
  dataList: INotes[];
  openNote: (id: string) => void;
}

export default function Sidenav({ dataList, openNote }: ISidenavProps) {
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

        {/* filtros */}
        {/* <div className={styles.filtros}>
          <div>
            <i className="bi bi-funnel"></i>
            <span>Mais recente</span>
          </div>
          <div>
            <span />
          </div>
        </div> */}
      </div>

      <div className={styles.cards_group}>
        {dataList.map((item: any, index: any) => {
          return (
            <SidenavCard
              id={item.id}
              openNote={(e) => handleOpenNote(e)}
              color={item.color}
              text={item.text}
              title={item.title}
              char_count={item.char_count}
              date_created={item.date_created}
              note_color={item.note_color}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
