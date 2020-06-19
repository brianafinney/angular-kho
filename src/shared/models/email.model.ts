

import * as Models from '@models/index';


/**/
export class Email {
    constructor(  ){}        
       
	public emailType: Models.TypeOfEmail;
	public emailAddress: string;
	public contactInfo: Models.ContactInfo;
	public id: number;
	public insertedBy: string;
	public dateInserted: Date;
	public modifiedBy: string;
	public dateModified: Date;


}






