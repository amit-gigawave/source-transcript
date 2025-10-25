export type Features = {
  title: string;
  description: string;
  child: {
    title: string | undefined;
    description: string | undefined;
    cards: {
      icon: string;
      title: string | undefined;
      description: string | undefined;
    }[];
  }[];
};
