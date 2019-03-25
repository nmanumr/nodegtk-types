/**
  * Generated when the pointer enters or leaves a window. 
  */
export declare class EventCrossing {
/**
  * the kind of crossing that happened (Gdk.NotifyType.INFERIOR, Gdk.NotifyType.ANCESTOR, Gdk.NotifyType.VIRTUAL, Gdk.NotifyType.NONLINEAR or Gdk.NotifyType.NONLINEAR_VIRTUAL). 
  */
detail: import('../Gdk').NotifyType;
/**
  * True if window is the focus window or an inferior. 
  */
focus: boolean;
/**
  * the crossing mode (Gdk.CrossingMode.NORMAL, Gdk.CrossingMode.GRAB, Gdk.CrossingMode.UNGRAB, Gdk.CrossingMode.GTK_GRAB, Gdk.CrossingMode.GTK_UNGRAB or Gdk.CrossingMode.STATE_CHANGED).  Gdk.CrossingMode.GTK_GRAB, Gdk.CrossingMode.GTK_UNGRAB, and Gdk.CrossingMode.STATE_CHANGED were added in 2.14 and are always synthesized, never native. 
  */
mode: import('../Gdk').CrossingMode;
/**
  * True if the event was sent explicitly. 
  */
sendEvent: number;
/**
  * a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt) and the pointer buttons. See Gdk.ModifierType. 
  */
state: import('../Gdk').ModifierType;
/**
  * the window that was entered or left. 
  */
subwindow: import('../Gdk').Window;
/**
  * the time of the event in milliseconds. 
  */
time: number;
/**
  * the type of the event (Gdk.EventType.ENTER_NOTIFY or Gdk.EventType.LEAVE_NOTIFY). 
  */
type: import('../Gdk').EventType;
/**
  * the window which received the event. 
  */
window: import('../Gdk').Window;
/**
  * the x coordinate of the pointer relative to the window. 
  */
x: number;
/**
  * the x coordinate of the pointer relative to the root of the screen. 
  */
xRoot: number;
/**
  * the y coordinate of the pointer relative to the window. 
  */
y: number;
/**
  * the y coordinate of the pointer relative to the root of the screen. 
  */
yRoot: number;
}

