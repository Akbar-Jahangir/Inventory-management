export interface TableProps {
  tableName: string;
  tablehead: string[];
  tableData: JSX.Element[]; // Adjusted type
  itemsPerPage?: number;
  tableModal?: string;
  tableFilter?:string;
  
}
