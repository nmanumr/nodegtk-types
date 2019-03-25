/**
  * The Pango.AttrFontFeatures structure is used to represent OpenType
font features as an attribute. 
  */
export declare class AttrFontFeatures {
/**
  * the common portion of the attribute 
  */
attr: import('../Pango').Attribute;
/**
  * the featues, as a string in CSS syntax 
  */
features: string;
}

