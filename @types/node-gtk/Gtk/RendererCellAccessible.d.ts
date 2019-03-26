import * as Gtk from '../Gtk';
export declare interface RendererCellAccessible extends Gtk.CellAccessible { }

export declare class RendererCellAccessible {
  static new(renderer: import('../Gtk').CellRenderer): import('../Atk').Object;
  /**
    * The cell renderer represented by this accessible 
    */
  renderer: import('../Gtk').CellRenderer;
}

