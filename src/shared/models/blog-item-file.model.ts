import { BlogItem } from "./blog-item.model";
import { UploadedFile } from "./uploaded-file.model";





/**/
export class BlogItemFile {
    constructor(  ){}        
       
	public id: number;
	public blogItemId: number;
	public blogItem: BlogItem;
	public fileId: string;
	public file: UploadedFile;


}






