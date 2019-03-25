/**
  * Generated when the window visibility status has changed. 
  */
export declare class EventVisibility {
/**
  * True if the event was sent explicitly. 
  */
sendEvent: number;
/**
  * the new visibility state (Gdk.VisibilityState.FULLY_OBSCURED, Gdk.VisibilityState.PARTIAL or Gdk.VisibilityState.UNOBSCURED). 
  */
state: import('../Gdk').VisibilityState;
/**
  * the type of the event (Gdk.EventType.VISIBILITY_NOTIFY). 
  */
type: import('../Gdk').EventType;
/**
  * the window which received the event. 
  */
window: import('../Gdk').Window;
}

