

import * as Models from '@models/index';


/**/
export class AgGridDataTableRowRequestDTO {
    constructor(  ){
		this.rowGroupColumns = new  Array<AgGridColumnValueObject>();
		this.valueColumns = new  Array<AgGridColumnValueObject>();
		this.pivotColumns = new  AgGridColumnValueObject();
		this.sortModel = new  Array<AgGridSortModel>();
		this.filterModel = new  Array<FilterHolder>();
		this.combinedFilters = new  AgCombinedFilterModel();
	}        
       
	public startRow: number;
	public endRow: number;
	public pivotMode: boolean;
	public groupKeys: string[];
	public rowGroupColumns:  AgGridColumnValueObject[];
	public valueColumns:  AgGridColumnValueObject[];
	public pivotColumns:  AgGridColumnValueObject;
	public sortModel:  AgGridSortModel[];
	public filterModel:  FilterHolder[];
	public combinedFilters:  AgCombinedFilterModel;


}
/**/
export class FilterHolder{
	[key: string]: AgGridFilterModel;
}
export class AgGridColumnValueObject {
    constructor(  ){}        
       
	public id: string;
	public displayName: string;
	public field: string;
	public aggFunction: string;


}
/**/
export class AgGridSortModel {
    constructor(  ){}        
       
	public colId: string;
	public sort: string;


}
/**/
export class AgCombinedFilterModel {
    constructor(  ){}        
       
	public filterType: string;
	public operator: string;
	public conditions: AgCombinedFilterModel[];


}
/**/
export class AgGridFilterModel {
    constructor(  ){}        
       
	public filterType: string;
	public type: string;
	public filter: string;
	public filterTo?: number;
	public values: string;
	public dateFrom: string;
	public dateTo: string;


}







