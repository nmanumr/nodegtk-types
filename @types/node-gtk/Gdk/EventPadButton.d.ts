/**
  * Generated during Gdk.InputSource.TABLET_PAD button presses and releases. 
  */
export declare class EventPadButton {
/**
  * The pad button that was pressed. 
  */
button: number;
/**
  * the pad group the button belongs to. A Gdk.InputSource.TABLET_PAD device may have one or more groups containing a set of buttons/rings/strips each. 
  */
group: number;
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
  * the type of the event (Gdk.EventType.PAD_BUTTON_PRESS or Gdk.EventType.PAD_BUTTON_RELEASE). 
  */
type: import('../Gdk').EventType;
/**
  * the window which received the event. 
  */
window: import('../Gdk').Window;
}

