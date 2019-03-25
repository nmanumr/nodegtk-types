/**
  * The Gdk.Geometry struct gives the window manager information about
a window’s geometry constraints. Normally you would set these on
the GTK+ level using gtk_window_set_geometry_hints(). #GtkWindow
then sets the hints on the Gdk.Window it creates. 
  */
export declare class Geometry {
/**
  * allowed window widths are base_height + height_inc * N where N is any integer (-1 allowed with #GtkWindow) 
  */
baseHeight: number;
/**
  * allowed window widths are base_width + width_inc * N where N is any integer (-1 allowed with #GtkWindow) 
  */
baseWidth: number;
/**
  * height resize increment 
  */
heightInc: number;
/**
  * maximum width/height ratio 
  */
maxAspect: number;
/**
  * maximum height of window (or -1 to use requisition, with #GtkWindow only) 
  */
maxHeight: number;
/**
  * maximum width of window (or -1 to use requisition, with #GtkWindow only) 
  */
maxWidth: number;
/**
  * minimum width/height ratio 
  */
minAspect: number;
/**
  * minimum height of window (or -1 to use requisition, with #GtkWindow only) 
  */
minHeight: number;
/**
  * minimum width of window (or -1 to use requisition, with #GtkWindow only) 
  */
minWidth: number;
/**
  * width resize increment 
  */
widthInc: number;
/**
  * window gravity, see gtk_window_set_gravity() 
  */
winGravity: import('../Gdk').Gravity;
}

