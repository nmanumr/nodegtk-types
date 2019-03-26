import * as Gtk from '../Gtk';
import * as Atk from '../Atk';

export declare interface CellAccessible extends Gtk.Accessible, Atk.Action, Atk.Component, Atk.TableCell {
    getDescription(): string | null;
    getDescription(i: number): string | null;

    getName(i: number): string | null;
    getName(): string | null;

    setDescription(desc: string): boolean;
    setDescription(i: number, desc: string): boolean;
}

export declare class CellAccessible {
}

