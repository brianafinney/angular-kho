

import * as Models from '@models/index';


/**/
export class SalesEntryComponentDTO {
    constructor(  ){}        
       
	public systemNumber: string;
	public poNumber: string;
	public checkNumber: string;
	public saleType: string;
	public memo: string;
	public newCustomer?: boolean;
	public clientOwned?: boolean;
	public certifiedPayroll?: boolean;
	public prevailingWage?: boolean;
	public sonitrolSystem?: boolean;
	public subContractor?: boolean;
	public selfGeneratedLead?: boolean;
	public salesPerson?: number;
	public salesManager?: number;
	public monthsOfContract?: number;
	public currentRMR?: number;
	public downPayment?: number;
	public totalInvestment?: number;
	public equipmentCost?: number;
	public wireCost?: number;
	public newRMR?: number;
	public listRMR?: number;
	public installCreditAsSold?: number;
	public installCreditRMR?: number;
	public netRMR?: number;
	public dInstalled?: Date;
	public dOnline?: Date;
	public dOffline?: Date;
	public dContractPackage?: Date;
	public dBillingPackage?: Date;
	public dSaleMonth?: Date;
	public dSold?: Date;


}






