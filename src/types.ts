export interface ColorItem {
  id: number;
  color: string;
  name: string;
}

export interface ApiResponse {
  data?: ColorItem[];
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
}

export interface StateUpdate {
  isFetching: boolean;
  data: ApiResponse;
}

export interface AppContextType {
  isFetching: boolean;
  data: ApiResponse;
  pageLoader: (page: number) => void;
}
