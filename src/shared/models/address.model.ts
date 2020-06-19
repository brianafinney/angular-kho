

import * as Models from '@models/index';


/**/
export class Address {
    constructor(  ){}        
       
	public addressType: Models.TypeOfAddress;
	public addressLine1: string;
	public addressLine2: string;
	public city: string;
	public state: Models.UnitedStates;
	public zip: string;
	public county: string;
	public crossStreets: string;
	public longitude: number;
	public lattitude: number;
	public contactInfo: Models.ContactInfo;
	public id: number;
	public insertedBy: string;
	public dateInserted: Date;
	public modifiedBy: string;
	public dateModified: Date;


}






