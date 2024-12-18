import styles from "./header.module.scss";

export default function Header(data?: any) {
  return (
    <div className={styles.header_container}>
      <div className={styles.note_title}>
        <i className="bi bi-pencil-square" />
        <h2>Anotação de exemplo</h2>
        <span>232/500</span>
      </div>

      <div className={styles.note_options}>
        <button>
          <i className="bi bi-arrow-90deg-left"></i>
        </button>
        <button>
          <i className="bi bi-arrow-90deg-right"></i>
        </button>
        <button>
          <i className="bi bi-floppy"></i>
        </button>
      </div>
    </div>
  );
}
