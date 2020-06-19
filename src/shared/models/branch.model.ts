

import * as Models from '@models/index';


/**/
export class Branch {
    constructor(  ){}        
       
	public name: string;
	public code: string;
	public description: string;
	public contactInfo: Models.ContactInfo;
	public region: Models.Region;
	public divisions: Models.Division[];
	public id: number;
	public insertedBy: string;
	public dateInserted: Date;
	public modifiedBy: string;
	public dateModified: Date;


}






