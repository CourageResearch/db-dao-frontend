export interface Database {
  _id: string;
  databaseId: string;
  name: string;
  deposit: number;
  rows: Row[]
  owner: string;
  user: User;
  contract: Contract;
}

export interface Row {
  _id: string;
  rowId: number;
  databaseId: number;
  data: object;
  metadata: object;
  timestampSeconds: number;
  owner: string;
  user: User;
  database: Database;
  contract: Contract;
  updatedAt:string
  createdAt:string
}

export interface Contract {
  address: string,
  chainId: number,
  chainName: string,
}

export interface User {
  bio: string,
  owner: string,
  handle: string,
  image: string,
  twitter: string,
  databases: Database[],
  rows: Row[],
}
