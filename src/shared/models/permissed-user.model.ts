import { GraphUserPermissionDTO } from "./graph-user-permission-dto.model";



export class PermissedUser {
  constructor() { }
  public id: number;
  public displayName: string;
  public isSuperUser: boolean;
  public currentRoleId: number;
  public permissions: GraphUserPermissionDTO[];
}





