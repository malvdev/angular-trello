export type ColorTypes =
  | 'purple'
  | 'green'
  | 'blue'
  | 'red'
  | 'orange'
  | 'yellow';

export interface LabelEntity {
  id: string;
  title: string;
  color?: ColorTypes;
}
