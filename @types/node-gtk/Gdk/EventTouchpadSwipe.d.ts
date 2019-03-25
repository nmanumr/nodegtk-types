/**
  * Generated during touchpad swipe gestures. 
  */
export declare class EventTouchpadSwipe {
/**
  * Movement delta in the X axis of the swipe focal point 
  */
dx: number;
/**
  * Movement delta in the Y axis of the swipe focal point 
  */
dy: number;
/**
  * The number of fingers triggering the swipe 
  */
nFingers: number;
/**
  * the current phase of the gesture 
  */
phase: number;
/**
  * True if the event was sent explicitly 
  */
sendEvent: number;
/**
  * a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt) and the pointer buttons. See Gdk.ModifierType. 
  */
state: import('../Gdk').ModifierType;
/**
  * the time of the event in milliseconds 
  */
time: number;
/**
  * the type of the event (Gdk.EventType.TOUCHPAD_SWIPE) 
  */
type: import('../Gdk').EventType;
/**
  * the window which received the event 
  */
window: import('../Gdk').Window;
/**
  * The X coordinate of the pointer 
  */
x: number;
/**
  * The X coordinate of the pointer, relative to the root of the screen. 
  */
xRoot: number;
/**
  * The Y coordinate of the pointer 
  */
y: number;
/**
  * The Y coordinate of the pointer, relative to the root of the screen. 
  */
yRoot: number;
}

