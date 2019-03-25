/**
  * Used for button press and button release events. The
type field will be one of Gdk.EventType.BUTTON_PRESS,
Gdk.EventType._2BUTTON_PRESS, Gdk.EventType._3BUTTON_PRESS or Gdk.EventType.BUTTON_RELEASE, 
  */
export declare class EventButton {
/**
  * x, y translated to the axes of device, or None if device is the mouse. 
  */
axes: number;
/**
  * the button which was pressed or released, numbered from 1 to 5. Normally button 1 is the left mouse button, 2 is the middle button, and 3 is the right button. On 2-button mice, the middle button can often be simulated by pressing both mouse buttons together. 
  */
button: number;
/**
  * the master device that the event originated from. Use Gdk.Event.get_source_device() to get the slave device. 
  */
device: import('../Gdk').Device;
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
  * the type of the event (Gdk.EventType.BUTTON_PRESS, Gdk.EventType._2BUTTON_PRESS, Gdk.EventType._3BUTTON_PRESS or Gdk.EventType.BUTTON_RELEASE). 
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

