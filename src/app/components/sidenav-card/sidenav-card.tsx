import { shortenText } from "@/app/utils/functions/shorten-text";
import styles from "./sidenav-card.module.scss";
import { INotes } from "@/app/utils/mocked-data/mocked-notes-data";
import { removeTags } from "@/app/utils/functions/remove-tags";

export default function SidenavCard(data: INotes) {
  function handleOpenNote(id: string) {
    data.openNote(id);
  }

  return (
    <div
      onClick={() => handleOpenNote(data.id)}
      className={`${styles.card} ${styles[data.note_color || "baby_blue"]}`}
    >
      <div className={styles.card_top}>
        <span className={styles.card_top_icon}>
          <i className="bi bi-stickies-fill"></i>
        </span>
        <h3>{shortenText(data.title, 25)}</h3>
      </div>

      <div className={styles.content_details}>
        <span>
          <i className="bi bi-calendar4-week"></i> {data.date_created}
        </span>
        <span>
          <i className="bi bi-pencil"></i> {data.text?.length}
        </span>
      </div>

      <div className={styles.content_text}>
        <span>{removeTags(shortenText(data.text, 80))}</span>
      </div>
    </div>
  );
}
