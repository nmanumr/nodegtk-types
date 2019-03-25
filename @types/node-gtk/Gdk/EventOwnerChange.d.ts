/**
  * Generated when the owner of a selection changes. On X11, this
information is only available if the X server supports the XFIXES
extension. 
  */
export declare class EventOwnerChange {
/**
  * the new owner of the selection, or None if there is none 
  */
owner: import('../Gdk').Window;
/**
  * the reason for the ownership change as a Gdk.OwnerChange value 
  */
reason: import('../Gdk').OwnerChange;
/**
  * the atom identifying the selection 
  */
selection: import('../Gdk').Atom;
/**
  * the time at which the selection ownership was taken over 
  */
selectionTime: number;
/**
  * True if the event was sent explicitly. 
  */
sendEvent: number;
/**
  * the timestamp of the event 
  */
time: number;
/**
  * the type of the event (Gdk.EventType.OWNER_CHANGE). 
  */
type: import('../Gdk').EventType;
/**
  * the window which received the event 
  */
window: import('../Gdk').Window;
}

