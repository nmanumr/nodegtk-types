/**
  * Generated when all or part of a window becomes visible and needs to be
redrawn. 
  */
export declare class EventExpose {
/**
  * bounding box of region. 
  */
area: import('../Gdk').Rectangle;
/**
  * the number of contiguous Gdk.EventType.EXPOSE events following this one. The only use for this is “exposure compression”, i.e. handling all contiguous Gdk.EventType.EXPOSE events in one go, though GDK performs some exposure compression so this is not normally needed. 
  */
count: number;
/**
  * the region that needs to be redrawn. 
  */
region: import('../cairo').Region;
/**
  * True if the event was sent explicitly. 
  */
sendEvent: number;
/**
  * the type of the event (Gdk.EventType.EXPOSE or Gdk.EventType.DAMAGE). 
  */
type: import('../Gdk').EventType;
/**
  * the window which received the event. 
  */
window: import('../Gdk').Window;
}

