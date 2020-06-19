import { Vendor } from "./vendor.model";
import { ErpItem } from "./erp-item.model";





/**/
export class VendorItem {
    constructor(  ){}        
       
	public vendorNo: string;
	public itemNo: string;
	public variantCode: string;
	public leadTimeCalc: string;
	public vendorItemNo: string;
	public vendor: Vendor;
	public item: ErpItem;


}






