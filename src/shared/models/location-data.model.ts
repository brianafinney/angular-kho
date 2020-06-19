

import * as Models from '@models/index';


/**/
export class LocationData {
    constructor(  ){}        
       
	public state: number;
	public county: string;
	public city: string;
	public franchise: string;
	public zipCode: string;
	public citySalesTax?: number;
	public countySalesTax?: number;
	public stateSalesTax?: number;
	public nonPrevailingWageQuoteRate?: number;
	public prevailingWageQuoteRate?: number;
	public id: number;
	public insertedBy: string;
	public dateInserted: Date;
	public modifiedBy: string;
	public dateModified: Date;


}






