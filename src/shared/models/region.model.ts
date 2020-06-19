import { Branch } from "./branch.model";
import { ContactInfo } from "./contact-info.model";





/**/
export class Region {
    constructor(  ){}        
       
	public name: string;
	public code: string;
	public description: string;
	public contactInfo: ContactInfo;
	public branches: Branch[];
	public id: number;
	public insertedBy: string;
	public dateInserted: Date;
	public modifiedBy: string;
	public dateModified: Date;


}






