

import * as Models from '@models/index';


/**/
export class NewCalendarEventDTO {
    constructor(  ){}        
       
	public title: string;
	public eventDesc: string;
	public importance: number;
	public ownerId: string;
	public locationId: number;
	public categoryId: number;
	public allDay: boolean;
	public eventStartDate: Date;
	public eventEndDate: Date;


}






