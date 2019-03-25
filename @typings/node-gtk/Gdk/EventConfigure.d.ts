/**
  * Generated when a window size or position has changed. 
  */
export declare class EventConfigure {
/**
  * the new height of the window. 
  */
height: number;
/**
  * True if the event was sent explicitly. 
  */
sendEvent: number;
/**
  * the type of the event (Gdk.EventType.CONFIGURE). 
  */
type: import('../Gdk').EventType;
/**
  * the new width of the window. 
  */
width: number;
/**
  * the window which received the event. 
  */
window: import('../Gdk').Window;
/**
  * the new x coordinate of the window, relative to its parent. 
  */
x: number;
/**
  * the new y coordinate of the window, relative to its parent. 
  */
y: number;
}

