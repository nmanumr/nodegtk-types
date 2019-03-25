/**
  * Generated during Gdk.InputSource.TABLET_PAD interaction with tactile sensors. 
  */
export declare class EventPadAxis {
/**
  * the pad group the ring/strip belongs to. A Gdk.InputSource.TABLET_PAD device may have one or more groups containing a set of buttons/rings/strips each. 
  */
group: number;
/**
  * number of strip/ring that was interacted. This number is 0-indexed. 
  */
index: number;
/**
  * The current mode of group. Different groups in a Gdk.InputSource.TABLET_PAD device may have different current modes. 
  */
mode: number;
/**
  * True if the event was sent explicitly. 
  */
sendEvent: number;
/**
  * the time of the event in milliseconds. 
  */
time: number;
/**
  * the type of the event (Gdk.EventType.PAD_RING or Gdk.EventType.PAD_STRIP). 
  */
type: import('../Gdk').EventType;
/**
  * The current value for the given axis. 
  */
value: number;
/**
  * the window which received the event. 
  */
window: import('../Gdk').Window;
}

