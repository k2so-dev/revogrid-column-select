import { SelectConfig } from './type';
import { SelectColumnEditor } from './editor';
export default class SelectColumnType {
    constructor();
    readonly editor: typeof SelectColumnEditor;
    beforeSetup: (col: SelectConfig) => void;
    cellTemplate: (h: any, { model, prop, column }: any) => any[];
    private loadCustomComponent;
}
export declare const CreateSelectColumnType: typeof SelectColumnType;
