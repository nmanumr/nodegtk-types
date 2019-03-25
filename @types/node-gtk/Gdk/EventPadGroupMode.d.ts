/**
  * Generated during Gdk.InputSource.TABLET_PAD mode switches in a group. 
  */
export declare class EventPadGroupMode {
/**
  * the pad group that is switching mode. A Gdk.InputSource.TABLET_PAD device may have one or more groups containing a set of buttons/rings/strips each. 
  */
group: number;
/**
  * The new mode of group. Different groups in a Gdk.InputSource.TABLET_PAD device may have different current modes. 
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
  * the type of the event (Gdk.EventType.PAD_GROUP_MODE). 
  */
type: import('../Gdk').EventType;
/**
  * the window which received the event. 
  */
window: import('../Gdk').Window;
}

