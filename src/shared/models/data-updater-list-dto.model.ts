import * as Models from '@models/index';

/**/

export class DataAuditUpdaterListDTO<T>{
  constructor() {
    this.value = new Array<T>();
  }
  public dataUpdater: string;
  public value: T[];

}
