/**
  * Generated when a setting is modified. 
  */
export declare class EventSetting {
/**
  * what happened to the setting (Gdk.SettingAction.NEW, Gdk.SettingAction.CHANGED or Gdk.SettingAction.DELETED). 
  */
action: import('../Gdk').SettingAction;
/**
  * the name of the setting. 
  */
name: string;
/**
  * True if the event was sent explicitly. 
  */
sendEvent: number;
/**
  * the type of the event (Gdk.EventType.SETTING). 
  */
type: import('../Gdk').EventType;
/**
  * the window which received the event. 
  */
window: import('../Gdk').Window;
}

