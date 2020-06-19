

import * as Models from '@models/index';


/**/
export class TicketMissingTimeDTO {
    constructor(  ){}        
       
	public supervisorApproval: boolean;
	public supervisorApprovalDate?: Date;
	public workStatus: string;
	public billStatus: string;
	public cancelledReason: string;
	public technician: string;
	public logDate?: Date;
	public division: string;
	public workOrderId: number;


}






