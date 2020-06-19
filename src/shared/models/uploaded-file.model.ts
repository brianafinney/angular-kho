import { BlogItemFile } from "./blog-item-file.model";





/**/
export class UploadedFile {
    constructor(  ){}        
       
	public blogItemFiles: BlogItemFile[];
	public id: string;
	public category: string;
	public filename: string;
	public contentType: string;
	public contents: number[];
	public length: number;
	public description: string;
	public location: string;
	public isActive?: boolean;
	public insertedBy: string;
	public dateInserted: Date;
	public modifiedBy: string;
	public dateModified: Date;


}
/**/
export class UploadedFileReturn {
    constructor(  ){}        
       
	public uploadedFile: UploadedFile;
	public progress: number;


}






