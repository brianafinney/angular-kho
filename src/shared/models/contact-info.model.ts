import { Telephone } from "./telephone.model";
import { Address } from "./address.model";
import { Email } from "./email.model";





/**/
export class ContactInfo {
    constructor(  ){}        
       
	public description: string;
	public addresses: Address[];
	public phoneNumbers: Telephone[];
	public emails: Email[];
	public id: number;
	public insertedBy: string;
	public dateInserted: Date;
	public modifiedBy: string;
	public dateModified: Date;


}






