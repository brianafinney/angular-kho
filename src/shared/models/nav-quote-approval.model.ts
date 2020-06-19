import { NavQuoteAction } from "./nav-quote-action.model";





/**/
export class NavQuoteApproval {
    constructor(  ){}        
       
	public quoteNo: string;
	public revision: number;
	public divisionId: number;
	public readyForNav: boolean;
	public readyForNavDate?: Date;
	public initialNeededRoleActionsList: number[];
	public initialNeededRoleActions: string;
	public remainingNeededRoleActionsList: number[];
	public remainingNeededRoleActions: string;
	public approvalActions: NavQuoteAction[];
	public id: number;
	public insertedBy: string;
	public dateInserted: Date;
	public modifiedBy: string;
	public dateModified: Date;


}






