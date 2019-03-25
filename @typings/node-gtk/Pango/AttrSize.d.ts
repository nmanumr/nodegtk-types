/**
  * The Pango.AttrSize structure is used to represent attributes which
set font size. 
  */
export declare class AttrSize {
/**
  * whether the font size is in device units or points. This field is only present for compatibility with Pango-1.8.0 (Pango.AttrType.ABSOLUTE_SIZE was added in 1.8.1); and always will be False for Pango.AttrType.SIZE and True for Pango.AttrType.ABSOLUTE_SIZE. 
  */
absolute: number;
/**
  * the common portion of the attribute 
  */
attr: import('../Pango').Attribute;
/**
  * size of font, in units of 1/Pango.SCALE of a point (for Pango.AttrType.SIZE) or of a device uni (for Pango.AttrType.ABSOLUTE_SIZE) 
  */
size: number;
}

