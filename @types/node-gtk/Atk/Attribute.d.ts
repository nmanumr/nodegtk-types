/**
  * Atk.Attribute is a string name/value pair representing a generic
attribute. This can be used to expose additional information from
an accessible object as a whole (see Atk.Object.get_attributes())
or an document (see Atk.Document.get_attributes()). In the case of
text attributes (see Atk.Text.get_default_attributes()),
Atk.TextAttribute enum defines all the possible text attribute
names. You can use Atk.TextAttribute.get_name() to get the string
name from the enum value. See also Atk.TextAttribute.for_name()
and Atk.TextAttribute.get_value() for more information. 
  */
export declare class Attribute {
  /**
    * Frees the memory used by an #AtkAttributeSet, including all its Atk.Attributes.
    * @param attribSet The #AtkAttributeSet to free 
    */
  static setFree(attribSet: Object): void;
}

