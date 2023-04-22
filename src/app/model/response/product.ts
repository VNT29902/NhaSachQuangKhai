export interface Product {
  documentID?: string;
  name?: string;
  sortingAlias?: string;
  price?: number;
  description?: string;
  images?: string[];
  size?: string;
  publisher?: string;
  publishDate?: string;
  createdDate?: string;
  updatedDate?: string;
  deletedDate?: string;
  isDeleted?: boolean;
}
