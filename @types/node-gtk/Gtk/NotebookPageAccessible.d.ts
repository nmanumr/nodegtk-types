import * as Atk from '../Atk';
export declare interface NotebookPageAccessible extends Atk.Object, Atk.Component { }

export declare class NotebookPageAccessible {
    static new(notebook: import('../Gtk').NotebookAccessible, child: import('../Gtk').Widget): import('../Atk').Object;
    invalidate(): void;
}

