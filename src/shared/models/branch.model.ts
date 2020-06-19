import { Division } from "./division.model";
import { Region } from "./region.model";
import { ContactInfo } from "./contact-info.model";





/**/
export class Branch {
    constructor(  ){}        
       
	public name: string;
	public code: string;
	public description: string;
	public contactInfo: ContactInfo;
	public region: Region;
	public divisions: Division[];
	public id: number;
	public insertedBy: string;
	public dateInserted: Date;
	public modifiedBy: string;
	public dateModified: Date;


}






