import * as Gtk from '../Gtk';
export declare interface EventControllerScroll extends Gtk.EventController { }

/**
  * Gtk.EventControllerScroll is an event controller meant to handle
scroll events from mice and touchpads. It is capable of handling
both discrete and continuous scroll events, abstracting them both
on the Gtk.EventControllerScroll ::scroll signal (deltas in the
discrete case are multiples of 1). 
  */
export declare class EventControllerScroll {
  /**
    * Creates a new event controller that will handle scroll events for the given widget.
    * @param widget a Gtk.Widget
    * @param flags behavior flags
    * @returns a new Gtk.EventControllerScroll 
    */
  static new(widget: import('../Gtk').Widget, flags: import('../Gtk').EventControllerScrollFlags): import('../Gtk').EventController;
  /**
    * Gets the flags conditioning the scroll controller behavior.
    * @returns the controller flags. 
    */
  getFlags(): import('../Gtk').EventControllerScrollFlags;
  /**
    * Sets the flags conditioning scroll controller behavior.
    * @param flags behavior flags 
    */
  setFlags(flags: import('../Gtk').EventControllerScrollFlags): void;
  /**
    * Flags 
    */
  flags: import('../Gtk').EventControllerScrollFlags;
}

