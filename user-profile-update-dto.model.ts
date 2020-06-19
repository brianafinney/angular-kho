


/**/
export class UserProfileUpdateDTO {
    constructor(  ){}        
       
	public id: number;
	public settings: string;
	public photo: string;
	public photoType: string;
	public givenName: string;
	public surname: string;
	public mobilePhone: string;
	public officeLocation: string;
	public department: string;
	public extension?: number;
	public email: string;
	public birthdayDate?: Date;
	public jobTitle: string;
	public managerName: string;


}