import * as Gtk from '../Gtk';
export declare interface ShortcutsSection extends Gtk.Box { }

/**
  * A Gtk.ShortcutsSection collects all the keyboard shortcuts and gestures
for a major application mode. If your application needs multiple sections,
you should give each section a unique Gtk.ShortcutsSection :section-name and
a Gtk.ShortcutsSection :title that can be shown in the section selector of
the Gtk.ShortcutsWindow. 
  */
export declare class ShortcutsSection {
  /**
    * Maximum Height 
    */
  maxHeight: number;
  /**
    * Section Name 
    */
  sectionName: string;
  /**
    * Title 
    */
  title: string;
  /**
    * View Name 
    */
  viewName: string;
}

