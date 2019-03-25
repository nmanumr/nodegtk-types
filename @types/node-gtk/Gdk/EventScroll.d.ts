/**
  * Generated from button presses for the buttons 4 to 7. Wheel mice are
usually configured to generate button press events for buttons 4 and 5
when the wheel is turned. 
  */
export declare class EventScroll {
/**
  * the x coordinate of the scroll delta 
  */
deltaX: number;
/**
  * the y coordinate of the scroll delta 
  */
deltaY: number;
/**
  * the master device that the event originated from. Use Gdk.Event.get_source_device() to get the slave device. 
  */
device: import('../Gdk').Device;
/**
  * the direction to scroll to (one of Gdk.ScrollDirection.UP, Gdk.ScrollDirection.DOWN, Gdk.ScrollDirection.LEFT, Gdk.ScrollDirection.RIGHT or Gdk.ScrollDirection.SMOOTH). 
  */
direction: import('../Gdk').ScrollDirection;
/**
  *   
  */
isStop: number;
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
  * the type of the event (Gdk.EventType.SCROLL). 
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

