/**
  * The Pango.AttrFontDesc structure is used to store an attribute that
sets all aspects of the font description at once. 
  */
export declare class AttrFontDesc {
/**
  * the common portion of the attribute 
  */
attr: import('../Pango').Attribute;
/**
  * the font description which is the value of this attribute 
  */
desc: import('../Pango').FontDescription;
}

