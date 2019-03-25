/**
  * A Gtk.TargetPair is used to represent the same
information as a table of Gtk.TargetEntry, but in
an efficient form. 
  */
export declare class TargetPair {
/**
  * Gtk.TargetFlags for DND 
  */
flags: number;
/**
  * an application-assigned integer ID which will get passed as a parameter to e.g the Gtk.Widget ::selection-get signal. It allows the application to identify the target type without extensive string compares. 
  */
info: number;
/**
  * Gdk.Atom representation of the target type 
  */
target: import('../Gdk').Atom;
}

