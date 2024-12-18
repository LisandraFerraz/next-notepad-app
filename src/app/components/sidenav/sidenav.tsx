import { useState } from "react";
import styles from "./sidenav.module.scss";
import notesDate, { INotes } from "@/app/utils/mocked-data/mocked-notes-data";
import SidenavCard from "../sidenav-card/sidenav-card";

export default function Sidenav() {
  const [notesData, setNotesData] = useState<INotes[]>(notesDate);

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
        {notesData.map((item, index) => {
          return (
            <SidenavCard
              color={item.color}
              content={item.content}
              title={item.title}
              char_count={item.char_count}
              date_created={item.date_created}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
