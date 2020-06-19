

import * as Models from '@models/index';


/**/
export class Region {
    constructor(  ){}        
       
	public name: string;
	public code: string;
	public description: string;
	public contactInfo: Models.ContactInfo;
	public branches: Models.Branch[];
	public id: number;
	public insertedBy: string;
	public dateInserted: Date;
	public modifiedBy: string;
	public dateModified: Date;


}






