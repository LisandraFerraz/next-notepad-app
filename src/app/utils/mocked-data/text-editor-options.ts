// 1 = color, 2 = font size, 3 = font family

export interface IEditorOptions {
  option: string;
  type: number;
}

export const ColorOptions: IEditorOptions[] = [
  { option: "baby_blue", type: 1 },
  { option: "baby_red", type: 1 },
  { option: "baby_purple", type: 1 },
];

export const FontSizeOptions: IEditorOptions[] = [
  { option: "14", type: 2 },
  { option: "16", type: 2 },
  { option: "18", type: 2 },
  { option: "20", type: 2 },
  { option: "22", type: 2 },
];

export const FontFamilyOptions: IEditorOptions[] = [
  { option: "Inter", type: 3 },
  { option: "Verdana", type: 3 },
  { option: "Arial", type: 3 },
];
