import * as Atk from '../Atk';
export declare interface ToplevelAccessible extends Atk.Object { }

export declare class ToplevelAccessible {
  /**
    * 
    * @returns List of children. 
    */
  getChildren(): import('../Gtk').Window[];
  ;
}

