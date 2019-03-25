/**
  * The Gtk.RcStyle-struct is used to represent a set
of information about the appearance of a widget.
This can later be composited together with other
Gtk.RcStyle-struct s to form a Gtk.Style. 
  */
export declare class RcStyle extends import('../GObject').Object{
/**
  * Creates a new Gtk.RcStyle with no fields set and a reference count of 1.
  * @returns the newly-created Gtk.RcStyle 
  */
static new(): import('../Gtk').RcStyle;
/**
  * Makes a copy of the specified Gtk.RcStyle. This function will correctly copy an RC style that is a member of a class derived from Gtk.RcStyle.
  * @returns the resulting Gtk.RcStyle 
  */
copy(): import('../Gtk').RcStyle;
/**
  * Base colors 
  */
base: import('../Gdk').Color;
/**
  * Background colors 
  */
bg: import('../Gdk').Color;
/**
  * Pixmap name 
  */
bgPixmapName: string;
/**
  * Gtk.RcFlags 
  */
colorFlags: import('../Gtk').RcFlags;
/**
  *   
  */
engineSpecified: number;
/**
  * Foreground colors 
  */
fg: import('../Gdk').Color;
/**
  * A Pango.FontDescription 
  */
fontDesc: import('../Pango').FontDescription;
/**
  *   
  */
iconFactories: Object;
/**
  * Name 
  */
name: string;
/**
  *   
  */
parentInstance: import('../GObject').Object;
/**
  *   
  */
rcProperties: Object;
/**
  *   
  */
rcStyleLists: Object;
/**
  * Text colors 
  */
text: import('../Gdk').Color;
/**
  * X thickness 
  */
xthickness: number;
/**
  * Y thickness 
  */
ythickness: number;
}

