import * as Gtk from '../Gtk';
export declare interface EventBox extends Gtk.Bin { }

/**
  * The Gtk.EventBox widget is a subclass of Gtk.Bin which also has its
own window. It is useful since it allows you to catch events for widgets
which do not have their own window. 
  */
export declare class EventBox {
  /**
    * Creates a new Gtk.EventBox.
    * @returns a new Gtk.EventBox 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Returns whether the event box window is above or below the windows of its child. See Gtk.EventBox.set_above_child() for details.
    * @returns True if the event box window is above the window of its child 
    */
  getAboveChild(): boolean;
  /**
    * Returns whether the event box has a visible window. See Gtk.EventBox.set_visible_window() for details.
    * @returns True if the event box window is visible 
    */
  getVisibleWindow(): boolean;
  /**
    * Set whether the event box window is positioned above the windows of its child, as opposed to below it. If the window is above, all events inside the event box will go to the event box. If the window is below, events in windows of child widgets will first got to that widget, and then to its parents.
    * @param aboveChild True if the event box window is above its child 
    */
  setAboveChild(aboveChild: boolean): void;
  /**
    * Set whether the event box uses a visible or invisible child window. The default is to use visible windows.
    * @param visibleWindow True to make the event box have a visible window 
    */
  setVisibleWindow(visibleWindow: boolean): void;
  /**
    * Whether the event-trapping window of the eventbox is above the window of the child widget as opposed to below it. 
    */
  aboveChild: boolean;
  /**
    * Whether the event box is visible, as opposed to invisible and only used to trap events. 
    */
  visibleWindow: boolean;
}

