import * as Gtk from '../Gtk';
import * as Atk from '../Atk';

export declare interface ExpanderAccessible extends Gtk.ContainerAccessible, Atk.Action {
    getDescription(): string | null;
    getDescription(i: number): string | null;

    getName(i: number): string | null;
    getName(): string | null;

    setDescription(desc: string): boolean;
    setDescription(i: number, desc: string): boolean;
}

export declare class ExpanderAccessible {

}

