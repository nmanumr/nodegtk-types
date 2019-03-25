/**
  * Attributes to use for a newly-created window. 
  */
export declare class WindowAttr {
/**
  * cursor for the window (see Gdk.Window.set_cursor()) 
  */
cursor: import('../Gdk').Cursor;
/**
  * event mask (see Gdk.Window.set_events()) 
  */
eventMask: number;
/**
  * height of window 
  */
height: number;
/**
  * True to bypass the window manager 
  */
overrideRedirect: boolean;
/**
  * title of the window (for toplevel windows) 
  */
title: string;
/**
  * a hint of the function of the window 
  */
typeHint: import('../Gdk').WindowTypeHint;
/**
  * Gdk.Visual for window 
  */
visual: import('../Gdk').Visual;
/**
  * Gdk.WindowWindowClass.INPUT_OUTPUT (normal window) or Gdk.WindowWindowClass.INPUT_ONLY (invisible window that receives events) 
  */
wclass: import('../Gdk').WindowWindowClass;
/**
  * width of window 
  */
width: number;
/**
  * type of window 
  */
windowType: import('../Gdk').WindowType;
/**
  * don’t use (see gtk_window_set_wmclass()) 
  */
wmclassClass: string;
/**
  * don’t use (see gtk_window_set_wmclass()) 
  */
wmclassName: string;
/**
  * X coordinate relative to parent window (see Gdk.Window.move()) 
  */
x: number;
/**
  * Y coordinate relative to parent window (see Gdk.Window.move()) 
  */
y: number;
}

