/**
  * Encapsulates information about a key event. 
  */
export declare class KeyEventStruct {
/**
  * The raw hardware code that generated the key event.  This field is raraly useful. 
  */
keycode: number;
/**
  * A int representing a keysym value corresponding to those used by GDK and X11: see /usr/X11/include/keysymdef.h. 
  */
keyval: number;
/**
  * The length of member #string. 
  */
length: number;
/**
  * A bitmask representing the state of the modifier keys immediately after the event takes place. The meaning of the bits is currently defined to match the bitmask used by GDK in GdkEventType.state, see http://developer.gnome.org/doc/API/2.0/gdk/gdk-Event-Structures.html#GdkEventKey 
  */
state: number;
/**
  * A string containing one of the following: either a string approximating the text that would result from this keypress, if the key is a control or graphic character, or a symbolic name for this keypress. Alphanumeric and printable keys will have the symbolic key name in this string member, for instance “A”. “0”, “semicolon”, “aacute”.  Keypad keys have the prefix “KP”. 
  */
string: string;
/**
  * A timestamp in milliseconds indicating when the event occurred. These timestamps are relative to a starting point which should be considered arbitrary, and only used to compare the dispatch times of events to one another. 
  */
timestamp: number;
/**
  * An Atk.KeyEventType, generally one of Atk.KeyEventType.PRESS or Atk.KeyEventType.RELEASE 
  */
type: number;
}

