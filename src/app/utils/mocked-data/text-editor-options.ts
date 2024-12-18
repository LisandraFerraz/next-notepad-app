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
  { option: "small", type: 2 },
  { option: "regular", type: 2 },
  { option: "large", type: 2 },
];

export const FontFamilyOptions: IEditorOptions[] = [
  { option: "Inter", type: 3 },
  { option: "Verdana", type: 3 },
  { option: "Arial", type: 3 },
];
