import * as Gtk from '../Gtk';
import * as Atk from '../Atk';

export declare interface TreeViewAccessible extends Gtk.ContainerAccessible, Atk.Selection, Atk.Table, Gtk.CellAccessibleParent {
    getDescription(): string | null;
    getDescription(i: number): string | null;

    getName(i: number): string | null;
    getName(): string | null;

    setDescription(desc: string): boolean;
    setDescription(i: number, desc: string): boolean;

    grabFocus(cell: import('../Gtk').CellAccessible): boolean;
    grabFocus(): boolean;
}

export declare class TreeViewAccessible {
}

