import * as GObject from '../GObject';
export declare interface Keymap extends GObject.Object { }

/**
  * A Gdk.Keymap defines the translation from keyboard state
(including a hardware key, a modifier mask, and active keyboard group)
to a keyval. This translation has two phases. The first phase is
to determine the effective keyboard group and level for the keyboard
state; the second phase is to look up the keycode/group/level triplet
in the keymap and see what keyval it corresponds to. 
  */
export declare class Keymap {
  /**
    * Returns the Gdk.Keymap attached to the default display.
    * @returns the Gdk.Keymap attached to the default display. 
    */
  static getDefault(): import('../Gdk').Keymap;
  /**
    * Returns the Gdk.Keymap attached to display.
    * @param display the Gdk.Display.
    * @returns the Gdk.Keymap attached to display. 
    */
  static getForDisplay(display: import('../Gdk').Display): import('../Gdk').Keymap;
  /**
    * Maps the non-virtual modifiers (i.e Mod2, Mod3, …) which are set in state to the virtual modifiers (i.e. Super, Hyper and Meta) and set the corresponding bits in state.
    * @param state pointer to the modifier mask to change
    * @returns pointer to the modifier mask to change 
    */
  addVirtualModifiers(state: import('../Gdk').ModifierType): import('../Gdk').ModifierType;
  /**
    * Returns whether the Caps Lock modifer is locked.
    * @returns True if Caps Lock is on 
    */
  getCapsLockState(): boolean;
  /**
    * Returns the direction of effective layout of the keymap.
    * @returns Pango.Direction.LTR or Pango.Direction.RTL if it can determine the direction. Pango.Direction.NEUTRAL otherwise. 
    */
  getDirection(): import('../Pango').Direction;
  /**
    * Returns the keyvals bound to hardware_keycode. The Nth Gdk.KeymapKey in keys is bound to the Nth keyval in keyvals. Free the returned arrays with GLib.free(). When a keycode is pressed by the user, the keyval from this list of entries is selected by considering the effective keyboard group and level. See Gdk.Keymap.translate_keyboard_state().
    * @param hardwareKeycode a keycode
    * @returns True if there were any entries  keys:return location for array of Gdk.KeymapKey, or None keyvals:return location for array of keyvals, or None 
    */
  getEntriesForKeycode(hardwareKeycode: number): [boolean, import('../Gdk').KeymapKey[], number[]];
  /**
    * Obtains a list of keycode/group/level combinations that will generate keyval. Groups and levels are two kinds of keyboard mode; in general, the level determines whether the top or bottom symbol on a key is used, and the group determines whether the left or right symbol is used. On US keyboards, the shift key changes the keyboard level, and there are no groups. A group switch key might convert a keyboard between Hebrew to English modes, for example. Gdk.EventKey contains a %group field that indicates the active keyboard group. The level is computed from the modifier mask. The returned array should be freed with GLib.free().
    * @param keyval a keyval, such as Gdk.KEY_a, Gdk.KEY_Up, Gdk.KEY_Return, etc.
    * @returns True if keys were found and returned  keys:return location for an array of Gdk.KeymapKey 
    */
  getEntriesForKeyval(keyval: number): [boolean, import('../Gdk').KeymapKey[]];
  /**
    * Returns the modifier mask the self’s windowing system backend uses for a particular purpose.
    * @param intent the use case for the modifier mask
    * @returns the modifier mask used for intent. 
    */
  getModifierMask(intent: import('../Gdk').ModifierIntent): import('../Gdk').ModifierType;
  /**
    * Returns the current modifier state.
    * @returns the current modifier state. 
    */
  getModifierState(): number;
  /**
    * Returns whether the Num Lock modifer is locked.
    * @returns True if Num Lock is on 
    */
  getNumLockState(): boolean;
  /**
    * Returns whether the Scroll Lock modifer is locked.
    * @returns True if Scroll Lock is on 
    */
  getScrollLockState(): boolean;
  /**
    * Determines if keyboard layouts for both right-to-left and left-to-right languages are in use.
    * @returns True if there are layouts in both directions, False otherwise 
    */
  haveBidiLayouts(): boolean;
  /**
    * Looks up the keyval mapped to a keycode/group/level triplet. If no keyval is bound to key, returns 0. For normal user input, you want to use Gdk.Keymap.translate_keyboard_state() instead of this function, since the effective group/level may not be the same as the current keyboard state.
    * @param key a Gdk.KeymapKey with keycode, group, and level initialized
    * @returns a keyval, or 0 if none was mapped to the given key 
    */
  lookupKey(key: import('../Gdk').KeymapKey): number;
  /**
    * Maps the virtual modifiers (i.e. Super, Hyper and Meta) which are set in state to their non-virtual counterparts (i.e. Mod2, Mod3,…) and set the corresponding bits in state.
    * @param state pointer to the modifier state to map
    * @returns False if two virtual modifiers were mapped to the same non-virtual modifier. Note that False is also returned if a virtual modifier is mapped to a non-virtual modifier that was already set in state.  state:pointer to the modifier state to map 
    */
  mapVirtualModifiers(state: import('../Gdk').ModifierType): [boolean, import('../Gdk').ModifierType];
  /**
    * Translates the contents of a Gdk.EventKey into a keyval, effective group, and level. Modifiers that affected the translation and are thus unavailable for application use are returned in consumed_modifiers. See Groups for an explanation of groups and levels. The effective_group is the group that was actually used for the translation; some keys such as Enter are not affected by the active keyboard group. The level is derived from state. For convenience, Gdk.EventKey already contains the translated keyval, so this function isn’t as useful as you might think.
    * @param hardwareKeycode a keycode
    * @param state a modifier state
    * @param group active keyboard group
    * @returns True if there was a keyval bound to the keycode/state/group   keyval:return location for keyval, or None effective_group:  return location for effective group, or None level:return location for level, or None consumed_modifiers:  return location for modifiers that were used to determine the group or level, or None 
    */
  translateKeyboardState(hardwareKeycode: number, state: import('../Gdk').ModifierType, group: number): [boolean, number, number, number, import('../Gdk').ModifierType];
}

