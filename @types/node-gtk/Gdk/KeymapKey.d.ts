/**
  * A Gdk.KeymapKey is a hardware key that can be mapped to a keyval. 
  */
export declare class KeymapKey {
/**
  * indicates movement in a horizontal direction. Usually groups are used for two different languages. In group 0, a key might have two English characters, and in group 1 it might have two Hebrew characters. The Hebrew characters will be printed on the key next to the English characters. 
  */
group: number;
/**
  * the hardware keycode. This is an identifying number for a physical key. 
  */
keycode: number;
/**
  * indicates which symbol on the key will be used, in a vertical direction. So on a standard US keyboard, the key with the number “1” on it also has the exclamation point (“!”) character on it. The level indicates whether to use the “1” or the “!” symbol. The letter keys are considered to have a lowercase letter at level 0, and an uppercase letter at level 1, though only the uppercase letter is printed. 
  */
level: number;
}

