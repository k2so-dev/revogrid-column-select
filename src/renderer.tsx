import { SelectConfig } from "./type";
export const SelectColumnRenderer = (h: any, {model, prop, column}: any): any[] => {
    let col = column as SelectConfig;
    let val = model[prop];
    if (col.labelKey && col.sourceLookup) {
        val = col.sourceLookup[val][col.labelKey];
    }
    return [
        <div class='cell-value-wrapper'>{val}</div>,
        <span class={{ 'arrow-down': true }}
            onClick = {(e: MouseEvent) => {
                const ev = new MouseEvent('dblclick', {
                    bubbles: true,
                    cancelable: true,
                    view: window
                });
                e.target.dispatchEvent(ev);
            }}>
        </span>
    ];
};
