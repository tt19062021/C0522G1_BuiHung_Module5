export interface SearchResult<T> {
  content: T[];
  pageable: {
    _page: number;
    _limit: number;
  };
  totalElements: number;

}
