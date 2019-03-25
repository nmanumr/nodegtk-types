/**
  * A Gtk.ShortcutsGroup represents a group of related keyboard shortcuts
or gestures. The group has a title. It may optionally be associated with
a view of the application, which can be used to show only relevant shortcuts
depending on the application context. 
  */
export declare class ShortcutsGroup extends import('../Gtk').Box{
/**
  * Accelerator Size Group 
  */
accelSizeGroup: import('../Gtk').SizeGroup;
/**
  * Height 
  */
height: number;
/**
  * Title 
  */
title: string;
/**
  * Title Size Group 
  */
titleSizeGroup: import('../Gtk').SizeGroup;
/**
  * View 
  */
view: string;
;
}

