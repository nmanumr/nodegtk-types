/**
  * Used for touch events.
type field will be one of Gdk.EventType.TOUCH_BEGIN, Gdk.EventType.TOUCH_UPDATE,
Gdk.EventType.TOUCH_END or Gdk.EventType.TOUCH_CANCEL. 
  */
export declare class EventTouch {
/**
  * x, y translated to the axes of device, or None if device is the mouse 
  */
axes: number;
/**
  * the master device that the event originated from. Use Gdk.Event.get_source_device() to get the slave device. 
  */
device: import('../Gdk').Device;
/**
  * whether the event should be used for emulating pointer event 
  */
emulatingPointer: boolean;
/**
  * True if the event was sent explicitly. 
  */
sendEvent: number;
/**
  * the event sequence that the event belongs to 
  */
sequence: import('../Gdk').EventSequence;
/**
  * a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt) and the pointer buttons. See Gdk.ModifierType 
  */
state: import('../Gdk').ModifierType;
/**
  * the time of the event in milliseconds. 
  */
time: number;
/**
  * the type of the event (Gdk.EventType.TOUCH_BEGIN, Gdk.EventType.TOUCH_UPDATE, Gdk.EventType.TOUCH_END, Gdk.EventType.TOUCH_CANCEL) 
  */
type: import('../Gdk').EventType;
/**
  * the window which received the event 
  */
window: import('../Gdk').Window;
/**
  * the x coordinate of the pointer relative to the window 
  */
x: number;
/**
  * the x coordinate of the pointer relative to the root of the screen 
  */
xRoot: number;
/**
  * the y coordinate of the pointer relative to the window 
  */
y: number;
/**
  * the y coordinate of the pointer relative to the root of the screen 
  */
yRoot: number;
}

