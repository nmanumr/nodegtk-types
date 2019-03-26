import * as GObject from '../GObject';
export declare interface CellEditable extends GObject.GInterface { }

/**
  * The Gtk.CellEditable interface must be implemented for widgets to be usable
to edit the contents of a Gtk.TreeView cell. It provides a way to specify how
temporary widgets should be configured for editing, get the new value, etc. 
  */
export declare interface CellEditable {
  /**
    * Emits the Gtk.CellEditable ::editing-done signal. 
    */
  editingDone(): void;
  /**
    * Emits the Gtk.CellEditable ::remove-widget signal. 
    */
  removeWidget(): void;
  /**
    * Begins editing on a self.
    * @param event The Gdk.Event that began the editing process, or None if editing was initiated programmatically 
    */
  startEditing(event: import('../Gdk').Event | null): void;
  /**
    * Indicates that editing has been canceled 
    */
  editingCanceled: boolean;
}

