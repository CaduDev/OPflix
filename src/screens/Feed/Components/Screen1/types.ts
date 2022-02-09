export interface ItemProps {
  item: {
    id: Number;
    type: Number;
    title: String;
    numberForEpisode: String;
    id_epidosio: Number;
    capa: Array<Object>;
  }
}

export interface ButtonProps {
  direction?: string;
  background?: string;
}

export interface TextButtonProps {
  size?: number;
  color?: string;
}