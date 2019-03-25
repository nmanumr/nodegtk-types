/**
  * A Gtk.ShortcutsWindow shows brief information about the keyboard shortcuts
and gestures of an application. The shortcuts can be grouped, and you can
have multiple sections in this window, corresponding to the major modes of
your application. 
  */
export declare class ShortcutsWindow extends import('../Gtk').Window{
/**
  * Section Name 
  */
sectionName: string;
/**
  * View Name 
  */
viewName: string;
/**
  *   
  */
window: import('../Gtk').Window;
}

