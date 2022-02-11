export interface ItemProps {
  item: {
    id: Number;
    type: Number;
    title: String;
    data: Array<Object>;
  },
  navigation: any
}

export interface ContentProps {
  width: number;
  height: string;
}