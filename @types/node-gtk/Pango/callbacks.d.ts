/**
  * Type of a function that can duplicate user data for an attribute.
  * @param userData user data to copy
  * @returns new copy of user_data. 
  */
export declare type attrDataCopyFunc = (userData: Object | null) => Object | null;
/**
  * Type of a function filtering a list of attributes.
  * @param attribute a Pango attribute
  * @param userData user data passed to the function
  * @returns True if the attribute should be selected for filtering, False otherwise. 
  */
export declare type attrFilterFunc = (attribute: import('../Pango').Attribute, userData: Object | null) => boolean;
/**
  * A callback function used by Pango.Fontset.foreach() when enumerating the fonts in a fontset.
  * @param fontset a Pango.Fontset
  * @param font a font from fontset
  * @param userData callback data
  * @returns if True, stop iteration and return immediately. 
  */
export declare type fontsetForeachFunc = (fontset: import('../Pango').Fontset, font: import('../Pango').Font, userData: Object | null) => boolean;
