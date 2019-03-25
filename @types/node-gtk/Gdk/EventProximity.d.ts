/**
  * Proximity events are generated when using GDK’s wrapper for the
XInput extension. The XInput extension is an add-on for standard X
that allows you to use nonstandard devices such as graphics tablets.
A proximity event indicates that the stylus has moved in or out of
contact with the tablet, or perhaps that the user’s finger has moved
in or out of contact with a touch screen. 
  */
export declare class EventProximity {
/**
  * the master device that the event originated from. Use Gdk.Event.get_source_device() to get the slave device. 
  */
device: import('../Gdk').Device;
/**
  * True if the event was sent explicitly. 
  */
sendEvent: number;
/**
  * the time of the event in milliseconds. 
  */
time: number;
/**
  * the type of the event (Gdk.EventType.PROXIMITY_IN or Gdk.EventType.PROXIMITY_OUT). 
  */
type: import('../Gdk').EventType;
/**
  * the window which received the event. 
  */
window: import('../Gdk').Window;
}

