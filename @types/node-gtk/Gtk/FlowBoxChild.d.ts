import * as Gtk from '../Gtk';
export declare interface FlowBoxChild extends Gtk.Bin { }

export declare class FlowBoxChild {
  /**
    * Creates a new Gtk.FlowBoxChild, to be used as a child of a Gtk.FlowBox.
    * @returns a new Gtk.FlowBoxChild 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Marks self as changed, causing any state that depends on this to be updated. This affects sorting and filtering. 
    */
  changed(): void;
  /**
    * Gets the current index of the self in its Gtk.FlowBox container.
    * @returns the index of the self, or -1 if the self is not in a flow box. 
    */
  getIndex(): number;
  /**
    * Returns whether the self is currently selected in its Gtk.FlowBox container.
    * @returns True if self is selected 
    */
  isSelected(): boolean;
  ;
}

