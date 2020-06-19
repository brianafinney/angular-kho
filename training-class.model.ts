import { TrainingClassSeat } from "./training-class-seat.model";





/**/
export class TrainingClass {
    constructor(  ){}        
       
	public category: string;
	public description: string;
	public className: string;
	public classDate: Date;
	public startTime: Date;
	public endTime: Date;
	public location: string;
	public onSite: boolean;
	public online: boolean;
	public seats: TrainingClassSeat[];
	public maxSize: number;
	public id: number;
	public insertedBy: string;
	public dateInserted: Date;
	public modifiedBy: string;
	public dateModified: Date;


}






