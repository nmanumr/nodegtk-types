/**
  * A Gtk.VBox is a container that organizes child widgets into a single column. 
  */
export declare class VBox extends import('../Gtk').Box{
/**
  * Creates a new Gtk.VBox.
  * @param homogeneous True if all children are to be given equal space allotments.
  * @param spacing the number of pixels to place by default between children.
  * @returns a new Gtk.VBox. 
  */
static new(homogeneous: boolean, spacing: number): import('../Gtk').Widget;
;
/**
  *   
  */
box: import('../Gtk').Box;
}

