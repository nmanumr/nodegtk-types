/**
  * Describes a key press or key release event. 
  */
export declare class EventKey {
/**
  * the keyboard group. 
  */
group: number;
/**
  * the raw code of the key that was pressed or released. 
  */
hardwareKeycode: number;
/**
  * a flag that indicates if hardware_keycode is mapped to a modifier. 
  */
isModifier: number;
/**
  * the key that was pressed or released. See the gdk/gdkkeysyms.h header file for a complete list of GDK key codes. 
  */
keyval: number;
/**
  * the length of string. 
  */
length: number;
/**
  * True if the event was sent explicitly. 
  */
sendEvent: number;
/**
  * a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt) and the pointer buttons. See Gdk.ModifierType. 
  */
state: import('../Gdk').ModifierType;
/**
  * a string containing an approximation of the text that would result from this keypress. The only correct way to handle text input of text is using input methods (see #GtkIMContext), so this field is deprecated and should never be used. (Gdk.unicode_to_keyval() provides a non-deprecated way of getting an approximate translation for a key.) The string is encoded in the encoding of the current locale (Note: this for backwards compatibility: strings in GTK+ and GDK are typically in UTF-8.) and NUL-terminated. In some cases, the translation of the key code will be a single NUL byte, in which case looking at length is necessary to distinguish it from the an empty translation. 
  */
string: string;
/**
  * the time of the event in milliseconds. 
  */
time: number;
/**
  * the type of the event (Gdk.EventType.KEY_PRESS or Gdk.EventType.KEY_RELEASE). 
  */
type: import('../Gdk').EventType;
/**
  * the window which received the event. 
  */
window: import('../Gdk').Window;
}

