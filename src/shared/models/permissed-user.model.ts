
import * as Models from '@models/index';

export class PermissedUser {
  constructor() { }
  public id: number;
  public displayName: string;
  public isSuperUser: boolean;
  public currentRoleId: number;
  public permissions: Models.GraphUserPermissionDTO[];
}





