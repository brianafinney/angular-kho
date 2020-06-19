

import * as Models from '@models/index';


/**/
export class WorkflowProcessInstance {
    constructor(  ){}        
       
	public id: string;
	public stateName: string;
	public activityName: string;
	public schemeId?: string;
	public previousState: string;
	public previousStateForDirect: string;
	public previousStateForReverse: string;
	public previousActivity: string;
	public previousActivityForDirect: string;
	public previousActivityForReverse: string;
	public parentProcessId?: string;
	public rootProcessId: string;
	public isDeterminingParametersChanged: boolean;
	public tenantId: string;


}






