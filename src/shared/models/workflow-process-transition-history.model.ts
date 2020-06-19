

import * as Models from '@models/index';


/**/
export class WorkflowProcessTransitionHistory {
    constructor(  ){}        
       
	public id: string;
	public processId: string;
	public executorIdentityId: string;
	public actorIdentityId: string;
	public fromActivityName: string;
	public toActivityName: string;
	public toStateName: string;
	public transitionTime: Date;
	public transitionClassifier: string;
	public isFinalised: boolean;
	public fromStateName: string;
	public triggerName: string;


}






