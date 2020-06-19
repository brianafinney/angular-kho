import { ContactInfo } from "./contact-info.model";
import { TypeOfEmail } from "./type-of-address.enum";





/**/
export class Email {
    constructor(  ){}        
       
	public emailType: TypeOfEmail;
	public emailAddress: string;
	public contactInfo: ContactInfo;
	public id: number;
	public insertedBy: string;
	public dateInserted: Date;
	public modifiedBy: string;
	public dateModified: Date;


}






