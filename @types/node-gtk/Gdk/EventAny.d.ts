/**
  * Contains the fields which are common to all event structs.
Any event pointer can safely be cast to a pointer to a Gdk.EventAny to
access these fields. 
  */
export declare class EventAny {
/**
  * True if the event was sent explicitly. 
  */
sendEvent: number;
/**
  * the type of the event. 
  */
type: import('../Gdk').EventType;
/**
  * the window which received the event. 
  */
window: import('../Gdk').Window;
}

