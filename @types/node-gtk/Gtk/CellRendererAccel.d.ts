import * as Gtk from '../Gtk';
export declare interface CellRendererAccel extends Gtk.CellRendererText { }

/**
  * Gtk.CellRendererAccel displays a keyboard accelerator (i.e. a key
combination like Control + a). If the cell renderer is editable,
the accelerator can be changed by simply typing the new combination. 
  */
export declare class CellRendererAccel {
  /**
    * Creates a new Gtk.CellRendererAccel.
    * @returns the new cell renderer 
    */
  static new(): import('../Gtk').CellRenderer;
  /**
    * The keyval of the accelerator 
    */
  accelKey: number;
  /**
    * The type of accelerators 
    */
  accelMode: import('../Gtk').CellRendererAccelMode;
  /**
    * The modifier mask of the accelerator 
    */
  accelMods: import('../Gdk').ModifierType;
  /**
    * The hardware keycode of the accelerator 
    */
  keycode: number;
}

