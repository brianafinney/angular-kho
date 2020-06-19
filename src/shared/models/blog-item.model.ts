import { BlogItemCategory } from "./blog-item-category.model";
import { BlogItemFile } from "./blog-item-file.model";





/**/
export class BlogItem {
    constructor(  ){}        
       
	public blogItemFiles: BlogItemFile[];
	public blogItemCategories: BlogItemCategory[];
	public title: string;
	public author: string;
	public summary: string;
	public story: string;
	public tags: string;
	public likes: number;
	public images: string[];
	public headerImage: string;
	public isDeleted: boolean;
	public id: number;
	public insertedBy: string;
	public dateInserted: Date;
	public modifiedBy: string;
	public dateModified: Date;


}






