import * as Atk from '../Atk';

export declare interface EntryIconAccessible extends Atk.Object, Atk.Action, Atk.Component {
    getDescription(): string | null;
    getDescription(i: number): string | null;

    getName(i: number): string | null;
    getName(): string | null;

    setDescription(desc: string): boolean;
    setDescription(i: number, desc: string): boolean;
}

export declare class EntryIconAccessible {
}

