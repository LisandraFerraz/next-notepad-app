export interface INotes {
  id: string;
  title: string;
  text: string;
  date_created?: string;
  char_count?: number;
  color?: string;
  note_color: string;
  openNote: (value: any) => void;
}
