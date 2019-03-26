/**
  * The Pango.Attribute structure represents the common portions of all
attributes. Particular types of attributes include this structure
as their initial portion. The common portion of the attribute holds
the range to which the value in the type-specific part of the attribute
applies and should be initialized using Pango.Attribute.init().
By default an attribute will have an all-inclusive range of [0,:obj:GObject.G_MAXUINT]. 
  */
export declare class Attribute {
  /**
    * Destroy a Pango.Attribute and free all associated memory. 
    */
  destroy(): void;
  /**
    * Compare two attributes for equality. This compares only the actual value of the two attributes and not the ranges that the attributes apply to.
    * @param attr2 another Pango.Attribute
    * @returns True if the two attributes have the same value. 
    */
  equal(attr2: import('../Pango').Attribute): boolean;
  /**
    * Initializes self’s klass to klass, it’s start_index to Pango.ATTR_INDEX_FROM_TEXT_BEGINNING and end_index to %PANGO_ATTR_INDEX_TO_TEXT_END such that the attribute applies to the entire text by default.
    * @param klass a Pango.AttrClass 
    */
  init(klass: import('../Pango').AttrClass): void;
}

