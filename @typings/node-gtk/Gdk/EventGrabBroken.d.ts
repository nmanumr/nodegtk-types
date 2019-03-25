/**
  * Generated when a pointer or keyboard grab is broken. On X11, this happens
when the grab window becomes unviewable (i.e. it or one of its ancestors
is unmapped), or if the same application grabs the pointer or keyboard
again. Note that implicit grabs (which are initiated by button presses)
can also cause Gdk.EventGrabBroken events. 
  */
export declare class EventGrabBroken {
/**
  * If this event is caused by another grab in the same application, grab_window contains the new grab window. Otherwise grab_window is None. 
  */
grabWindow: import('../Gdk').Window;
/**
  * True if the broken grab was implicit 
  */
implicit: boolean;
/**
  * True if a keyboard grab was broken, False if a pointer grab was broken 
  */
keyboard: boolean;
/**
  * True if the event was sent explicitly. 
  */
sendEvent: number;
/**
  * the type of the event (Gdk.EventType.GRAB_BROKEN) 
  */
type: import('../Gdk').EventType;
/**
  * the window which received the event, i.e. the window that previously owned the grab 
  */
window: import('../Gdk').Window;
}

