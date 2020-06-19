

import * as Models from './'

/**/
export class ImageDTO {
    constructor() { }

    public id: string;
    public filename: string;
    public contentType: string;
    public contents: number[];
    public length: number;
}