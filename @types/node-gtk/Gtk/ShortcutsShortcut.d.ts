import * as Gtk from '../Gtk';
export declare interface ShortcutsShortcut extends Gtk.Box { }

/**
  * A Gtk.ShortcutsShortcut represents a single keyboard shortcut or gesture
with a short text. This widget is only meant to be used with Gtk.ShortcutsWindow. 
  */
export declare class ShortcutsShortcut {
  /**
    * Accelerator Size Group 
    */
  accelSizeGroup: import('../Gtk').SizeGroup;
  /**
    * The accelerator keys for shortcuts of type ‘Accelerator’ 
    */
  accelerator: string;
  /**
    * The name of the action 
    */
  actionName: string;
  /**
    * Text direction for which this shortcut is active 
    */
  direction: import('../Gtk').TextDirection;
  /**
    * The icon to show for shortcuts of type ‘Other Gesture’ 
    */
  icon: import('../Gio').Icon;
  /**
    * Whether an icon has been set 
    */
  iconSet: boolean;
  /**
    * The type of shortcut that is represented 
    */
  shortcutType: import('../Gtk').ShortcutType;
  /**
    * A short description for the gesture 
    */
  subtitle: string;
  /**
    * Whether a subtitle has been set 
    */
  subtitleSet: boolean;
  /**
    * A short description for the shortcut 
    */
  title: string;
  /**
    * Title Size Group 
    */
  titleSizeGroup: import('../Gtk').SizeGroup;
}

