type Filter<T> = {
  (array: T[], f: (item: T) => boolean): T[];
};

type Filter = {
  <T>(array: T[], f: (item: T) => boolean): T[];
};

type Filter<T> = (array: T[], f: (item: T) => boolean) => T[];

type Filter = <T>(array: T[], f: (item: T) => boolean) => T[];
