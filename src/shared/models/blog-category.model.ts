import { BlogItemCategory } from "./blog-item-category.model";





/**/
export class BlogCategory {
    constructor(  ){}        
       
	public blogItemCategories: BlogItemCategory[];
	public categoryName: string;
	public isDeleted: boolean;
	public id: number;
	public insertedBy: string;
	public dateInserted: Date;
	public modifiedBy: string;
	public dateModified: Date;


}






