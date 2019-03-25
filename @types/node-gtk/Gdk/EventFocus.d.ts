/**
  * Describes a change of keyboard focus. 
  */
export declare class EventFocus {
/**
  * True if the window has gained the keyboard focus, False if it has lost the focus. 
  */
in: number;
/**
  * True if the event was sent explicitly. 
  */
sendEvent: number;
/**
  * the type of the event (Gdk.EventType.FOCUS_CHANGE). 
  */
type: import('../Gdk').EventType;
/**
  * the window which received the event. 
  */
window: import('../Gdk').Window;
}

