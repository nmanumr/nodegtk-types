import * as Gtk from '../Gtk';
export declare interface EventControllerKey extends Gtk.EventController { }

/**
  * Gtk.EventControllerKey is an event controller meant for situations
where you need access to key events. 
  */
export declare class EventControllerKey {
  static new(widget: import('../Gtk').Widget): import('../Gtk').EventController;
  forward(widget: import('../Gtk').Widget): boolean;
  getGroup(): number;
  /**
    * Gets the IM context of a key controller.
    * @returns the IM context 
    */
  getImContext(): import('../Gtk').IMContext;
  setImContext(imContext: import('../Gtk').IMContext): void;
  
}

