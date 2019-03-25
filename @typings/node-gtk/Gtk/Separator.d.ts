/**
  * Gtk.Separator is a horizontal or vertical separator widget, depending on the
value of the Gtk.Orientable :orientation property, used to group the widgets
within a window. It displays a line with a shadow to make it appear sunken
into the interface. 
  */
export declare class Separator extends import('../Gtk').Widget, import('../Gtk').Orientable{
/**
  * Creates a new Gtk.Separator with the given orientation.
  * @param orientation the separator’s orientation.
  * @returns a new Gtk.Separator. 
  */
static new(orientation: import('../Gtk').Orientation): import('../Gtk').Widget;
;
/**
  *   
  */
widget: import('../Gtk').Widget;
}

