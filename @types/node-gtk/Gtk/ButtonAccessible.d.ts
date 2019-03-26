import * as Gtk from '../Gtk';
import * as Atk from '../Atk';


export declare interface ButtonAccessible extends Gtk.ContainerAccessible, Atk.Action, Atk.Image {
    getDescription(): string | null;
    getDescription(i: number): string | null;

    getName(i: number): string | null;
    getName(): string | null;

    setDescription(desc: string): boolean;
    setDescription(i: number, desc: string): boolean;
}

export declare class ButtonAccessible {
    
}

