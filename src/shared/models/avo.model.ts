

import * as Models from '@models/index';


/**/
export class AVO {
    constructor(  ){}        
       
	public divisionId: number;
	public accountNumber: number;
	public customerName: string;
	public comments: string;
	public isActive: boolean;
	public startDate?: Date;
	public endDate?: Date;
	public division?: Models.Division;
	public id?: number;
	public insertedBy: string;
	public dateInserted?: Date;
	public modifiedBy: string;
	public dateModified?: Date;


}






