import * as Models from '@models/index';
export class BlogItemForUI {
    constructor(  ){}        
       
	public blogItemFiles: Models.BlogItemFile[];
	public blogItemCategories: Models.BlogItemCategory[];
	public blogCategories: Models.BlogCategory[];
	public blogImages: Models.ImageDTO[];
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