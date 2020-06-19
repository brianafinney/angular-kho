




/**/
export class DataTablesRequestDTO {
    constructor(  ){}        
       
	public draw: number;
	public length: number;
	public start: number;
	public columns: DataTableColumnDTO[];
	public order: DataTableColumnOrderDTO[];
	public search: DataTableColumnSearchDTO;


}
/**/
export class DataTablesResponseDTO<T> {
    constructor(  ){}        
       
	public recordsTotal: number;
	public recordsFiltered: number;
	public draw: number;
	public data: T[];


}
/**/
export class DataTableColumnDTO {
    constructor(  ){}        
       
	public data: string;
	public name: string;
	public orderable: boolean;
	public search: DataTableColumnSearchDTO;
	public searchable: boolean;


}
/**/
export class DataTableColumnSearchDTO {
    constructor(  ){}        
       
	public regex: string;
	public value: string;


}
/**/
export class DataTableColumnOrderDTO {
    constructor(  ){}        
       
	public column: number;
	public dir: string;


}






