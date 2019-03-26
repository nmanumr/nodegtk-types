/**
  * A Gtk.Requisition-struct represents the desired size of a widget. See
GtkWidget’s geometry management section for
more information. 
  */
export declare class Requisition {
  /**
    * Allocates a new Gtk.Requisition-struct and initializes its elements to zero.
    * @returns a new empty Gtk.Requisition. The newly allocated Gtk.Requisition should be freed with Gtk.Requisition.free(). 
    */
  static new(): import('../Gtk').Requisition;
  /**
    * Copies a Gtk.Requisition.
    * @returns a copy of self 
    */
  copy(): import('../Gtk').Requisition;
  /**
    * Frees a Gtk.Requisition. 
    */
  free(): void;
}

