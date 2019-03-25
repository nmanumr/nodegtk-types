/**
  * Generated during DND operations. 
  */
export declare class EventDND {
/**
  * the Gdk.DragContext for the current DND operation. 
  */
context: import('../Gdk').DragContext;
/**
  * True if the event was sent explicitly. 
  */
sendEvent: number;
/**
  * the time of the event in milliseconds. 
  */
time: number;
/**
  * the type of the event (Gdk.EventType.DRAG_ENTER, Gdk.EventType.DRAG_LEAVE, Gdk.EventType.DRAG_MOTION, Gdk.EventType.DRAG_STATUS, Gdk.EventType.DROP_START or Gdk.EventType.DROP_FINISHED). 
  */
type: import('../Gdk').EventType;
/**
  * the window which received the event. 
  */
window: import('../Gdk').Window;
/**
  * the x coordinate of the pointer relative to the root of the screen, only set for Gdk.EventType.DRAG_MOTION and Gdk.EventType.DROP_START. 
  */
xRoot: number;
/**
  * the y coordinate of the pointer relative to the root of the screen, only set for Gdk.EventType.DRAG_MOTION and Gdk.EventType.DROP_START. 
  */
yRoot: number;
}

