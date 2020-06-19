import { ContactInfo } from "./contact-info.model";
import { TypeOfTelephone } from "./type-of-address.enum";





/**/
export class Telephone {
    constructor(  ){}        
       
	public telephoneType: TypeOfTelephone;
	public number: string;
	public contactInfo: ContactInfo;
	public id: number;
	public insertedBy: string;
	public dateInserted: Date;
	public modifiedBy: string;
	public dateModified: Date;


}






