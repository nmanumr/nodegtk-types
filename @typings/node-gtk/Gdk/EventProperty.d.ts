/**
  * Describes a property change on a window. 
  */
export declare class EventProperty {
/**
  * the property that was changed. 
  */
atom: import('../Gdk').Atom;
/**
  * True if the event was sent explicitly. 
  */
sendEvent: number;
/**
  * whether the property was changed (Gdk.PropertyState.NEW_VALUE) or deleted (Gdk.PropertyState.DELETE). 
  */
state: import('../Gdk').PropertyState;
/**
  * the time of the event in milliseconds. 
  */
time: number;
/**
  * the type of the event (Gdk.EventType.PROPERTY_NOTIFY). 
  */
type: import('../Gdk').EventType;
/**
  * the window which received the event. 
  */
window: import('../Gdk').Window;
}

