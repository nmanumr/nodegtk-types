/**
  * Generated when the pointer moves. 
  */
export declare class EventMotion {
/**
  * x, y translated to the axes of device, or None if device is the mouse. 
  */
axes: number;
/**
  * the master device that the event originated from. Use Gdk.Event.get_source_device() to get the slave device. 
  */
device: import('../Gdk').Device;
/**
  * set to 1 if this event is just a hint, see the Gdk.EventMask.POINTER_MOTION_HINT_MASK value of Gdk.EventMask. 
  */
isHint: number;
/**
  * True if the event was sent explicitly. 
  */
sendEvent: number;
/**
  * a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt) and the pointer buttons. See Gdk.ModifierType. 
  */
state: import('../Gdk').ModifierType;
/**
  * the time of the event in milliseconds. 
  */
time: number;
/**
  * the type of the event. 
  */
type: import('../Gdk').EventType;
/**
  * the window which received the event. 
  */
window: import('../Gdk').Window;
/**
  * the x coordinate of the pointer relative to the window. 
  */
x: number;
/**
  * the x coordinate of the pointer relative to the root of the screen. 
  */
xRoot: number;
/**
  * the y coordinate of the pointer relative to the window. 
  */
y: number;
/**
  * the y coordinate of the pointer relative to the root of the screen. 
  */
yRoot: number;
}

