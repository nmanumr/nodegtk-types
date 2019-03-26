import * as Gtk from '../Gtk';
export declare interface ListBoxRow extends Gtk.Bin, Gtk.Actionable { }

export declare class ListBoxRow {
  /**
    * Creates a new Gtk.ListBoxRow, to be used as a child of a Gtk.ListBox.
    * @returns a new Gtk.ListBoxRow 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Marks self as changed, causing any state that depends on this to be updated. This affects sorting, filtering and headers. 
    */
  changed(): void;
  /**
    * Gets the value of the Gtk.ListBoxRow :activatable property for this row.
    * @returns True if the row is activatable 
    */
  getActivatable(): boolean;
  /**
    * Returns the current header of the self. This can be used in a Gtk.ListBoxUpdateHeaderFunc to see if there is a header set already, and if so to update the state of it.
    * @returns the current header, or None if none 
    */
  getHeader(): import('../Gtk').Widget | null;
  /**
    * Gets the current index of the self in its Gtk.ListBox container.
    * @returns the index of the self, or -1 if the self is not in a listbox 
    */
  getIndex(): number;
  /**
    * Gets the value of the Gtk.ListBoxRow :selectable property for this row.
    * @returns True if the row is selectable 
    */
  getSelectable(): boolean;
  /**
    * Returns whether the child is currently selected in its Gtk.ListBox container.
    * @returns True if self is selected 
    */
  isSelected(): boolean;
  /**
    * Set the Gtk.ListBoxRow :activatable property for this row.
    * @param activatable True to mark the row as activatable 
    */
  setActivatable(activatable: boolean): void;
  /**
    * Sets the current header of the self. This is only allowed to be called from a Gtk.ListBoxUpdateHeaderFunc. It will replace any existing header in the row, and be shown in front of the row in the listbox.
    * @param header the header, or None 
    */
  setHeader(header: import('../Gtk').Widget | null): void;
  /**
    * Set the Gtk.ListBoxRow :selectable property for this row.
    * @param selectable True to mark the row as selectable 
    */
  setSelectable(selectable: boolean): void;
  /**
    * Whether this row can be activated 
    */
  activatable: boolean;
  /**
    * Whether this row can be selected 
    */
  selectable: boolean;
}

