

import * as Models from '@models/index';


/**/
export class BlogCategory {
    constructor(  ){}        
       
	public blogItemCategories: Models.BlogItemCategory[];
	public categoryName: string;
	public isDeleted: boolean;
	public id: number;
	public insertedBy: string;
	public dateInserted: Date;
	public modifiedBy: string;
	public dateModified: Date;


}






