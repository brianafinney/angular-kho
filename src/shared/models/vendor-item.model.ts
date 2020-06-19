

import * as Models from '@models/index';


/**/
export class VendorItem {
    constructor(  ){}        
       
	public vendorNo: string;
	public itemNo: string;
	public variantCode: string;
	public leadTimeCalc: string;
	public vendorItemNo: string;
	public vendor: Models.Vendor;
	public item: Models.ErpItem;


}






