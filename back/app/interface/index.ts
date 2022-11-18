
export interface IPageResponse<T> {
  data:        T[];
  currentPage: number;
  totalPages:  number;
  rowsPerPage: number;
  totalRows:   number;
}

export interface IContent {
  _id?:    string;
  title:   string;
  content: string;
  type:    string;
  tags:    string[];
}
