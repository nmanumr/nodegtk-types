import * as Gtk from '../Gtk';
export declare interface EventControllerMotion extends Gtk.EventController { }

/**
  * Gtk.EventControllerMotion is an event controller meant for situations
where you need to track the position of the pointer. 
  */
export declare class EventControllerMotion {
  /**
    * Creates a new event controller that will handle motion events for the given widget.
    * @param widget a Gtk.Widget
    * @returns a new Gtk.EventControllerMotion 
    */
  static new(widget: import('../Gtk').Widget): import('../Gtk').EventController;

}

