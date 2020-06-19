import { TypeOfAttribute } from "./type-of-attribute.enum";





/**/
export class RecordAttribute {
    constructor(  ){}        
       
	public attributeType: TypeOfAttribute;
	public recordId: number;
	public name: string;
	public values: string;
	public id: number;
	public isActive: boolean;
	public dateCreated: Date;
	public dateModified: Date;
	public createdBy: string;
	public modifiedBy: string;


}






