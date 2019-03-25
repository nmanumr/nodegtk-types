/**
  * Generated when a selection is requested or ownership of a selection
is taken over by another client application. 
  */
export declare class EventSelection {
/**
  * the property in which to place the result of the conversion. 
  */
property: import('../Gdk').Atom;
/**
  * the window on which to place property or None if none. 
  */
requestor: import('../Gdk').Window;
/**
  * the selection. 
  */
selection: import('../Gdk').Atom;
/**
  * True if the event was sent explicitly. 
  */
sendEvent: number;
/**
  * the target to which the selection should be converted. 
  */
target: import('../Gdk').Atom;
/**
  * the time of the event in milliseconds. 
  */
time: number;
/**
  * the type of the event (Gdk.EventType.SELECTION_CLEAR, Gdk.EventType.SELECTION_NOTIFY or Gdk.EventType.SELECTION_REQUEST). 
  */
type: import('../Gdk').EventType;
/**
  * the window which received the event. 
  */
window: import('../Gdk').Window;
}

