

import * as Models from '@models/index';


/**/
export class BlogItemFile {
    constructor(  ){}        
       
	public id: number;
	public blogItemId: number;
	public blogItem: Models.BlogItem;
	public fileId: string;
	public file: Models.UploadedFile;


}






