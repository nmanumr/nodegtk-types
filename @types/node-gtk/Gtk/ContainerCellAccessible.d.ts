import * as Gtk from '../Gtk';
export declare interface ContainerCellAccessible extends Gtk.CellAccessible { }

export declare class ContainerCellAccessible {
  static new(): import('../Gtk').ContainerCellAccessible;
  addChild(child: import('../Gtk').CellAccessible): void;
  /**
    * Get a list of children. 
    */
  getChildren(): import('../Gtk').CellAccessible[];
  removeChild(child: import('../Gtk').CellAccessible): void;
  
}

