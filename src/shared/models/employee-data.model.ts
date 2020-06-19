

import * as Models from '@models/index';


/**/
export class EmployeeData {
    constructor(  ){}        
       
	public id: string;
	public employeeId: string;
	public username: string;
	public firstName: string;
	public lastName: string;
	public address: Models.Address;
	public homePhone: string;
	public mobilePhone: string;
	public workPhone: string;
	public manager: string;
	public dates: string[];
	public hiredDate: string;
	public reHiredDate: string;
	public deceased: string;
	public terminatedDate: string;
	public startedDate: string;
	public birthdayDate: string;
	public retiredDate: string;


}






