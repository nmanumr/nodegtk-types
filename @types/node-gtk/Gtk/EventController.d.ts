import * as GObject from '../GObject';
export declare interface EventController extends GObject.Object { }

/**
  * Gtk.EventController is a base, low-level implementation for event
controllers. Those react to a series of Gdk.Events, and possibly trigger
actions as a consequence of those. 
  */
export declare abstract class EventController {
  /**
    * Gets the propagation phase at which self handles events.
    * @returns the propagation phase 
    */
  getPropagationPhase(): import('../Gtk').PropagationPhase;
  /**
    * Returns the Gtk.Widget this controller relates to.
    * @returns a Gtk.Widget 
    */
  getWidget(): import('../Gtk').Widget;
  /**
    * Feeds an events into self, so it can be interpreted and the controller actions triggered.
    * @param event a Gdk.Event
    * @returns True if the event was potentially useful to trigger the controller action 
    */
  handleEvent(event: import('../Gdk').Event): boolean;
  /**
    * Resets the self to a clean state. Every interaction the controller did through Gtk.EventController ::handle-event will be dropped at this point. 
    */
  reset(): void;
  /**
    * Sets the propagation phase at which a controller handles events.
    * @param phase a propagation phase 
    */
  setPropagationPhase(phase: import('../Gtk').PropagationPhase): void;
  /**
    * Propagation phase at which this controller is run 
    */
  propagationPhase: import('../Gtk').PropagationPhase;
  /**
    * Widget the gesture relates to 
    */
  widget: import('../Gtk').Widget;
}

