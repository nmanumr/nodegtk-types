/**
  * Generated when the state of a toplevel window changes. 
  */
export declare class EventWindowState {
/**
  * mask specifying what flags have changed. 
  */
changedMask: import('../Gdk').WindowState;
/**
  * the new window state, a combination of Gdk.WindowState bits. 
  */
newWindowState: import('../Gdk').WindowState;
/**
  * True if the event was sent explicitly. 
  */
sendEvent: number;
/**
  * the type of the event (Gdk.EventType.WINDOW_STATE). 
  */
type: import('../Gdk').EventType;
/**
  * the window which received the event. 
  */
window: import('../Gdk').Window;
}

