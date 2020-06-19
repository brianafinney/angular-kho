

import * as Models from '@models/index';


/**/
export class ChatHistory {
    constructor(  ){}        
       
	public fromId: string;
	public toId: string;
	public message: string;
	public isRead: boolean;
	public dateSeen?: Date;
	public id: number;
	public insertedBy: string;
	public dateInserted: Date;
	public modifiedBy: string;
	public dateModified: Date;


}






