import { RevoGrid } from '@revolist/revogrid/dist/types/interfaces';
export interface SelectConfig extends RevoGrid.ColumnRegular {
    source?: (string | {
        [label: string]: any;
    })[];
    sourceLookup?: Record<string, any>;
    labelKey?: string;
    valueKey?: string;
}
declare type ObjectChange = {
    val: {
        label: string;
        value: any;
    };
    originalEvent: {
        code: string;
    };
};
declare type ArrayChange = {
    val: string;
    originalEvent: {
        code: string;
    };
};
export declare type ChangeValue = ObjectChange | ArrayChange;
export {};
