import { Edition } from '@revolist/revogrid/dist/types/interfaces';
import { SelectConfig } from './type';
export declare class SelectColumnEditor implements Edition.EditorBase {
    private column;
    private saveCallback;
    constructor(column: SelectConfig, saveCallback: (value: Edition.SaveData, preventFocus?: boolean) => void);
    element?: HTMLSelectElement | null;
    editCell?: Edition.EditCell;
    componentDidRender(): void;
    render(h: any): JSX.Element;
}
