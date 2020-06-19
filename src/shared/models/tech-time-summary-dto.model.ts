




/*This is the base class used for the summary of tech time as it relates to E-Service tickets*/
export class TechTimeSummaryDTO {
    constructor(  ){}        
       
	public id: number;
	public label: string;
	public firstTicketDate: Date;
	public lastTicketDate: Date;
	public workHoursInRange: number;
	public numberTicketServiceDays: number;
	public totalTicketMinutes: number;
	public totalTicketHours: number;
	public chargeability: number;
	public totalTicketCount: number;
	public sameDayTicket: number;
	public multiDayCount: number;
	public sameDayCloseRate: number;
	public avgTicketsPerDay: number;


}






