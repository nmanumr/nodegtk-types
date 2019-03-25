/**
  * Note: old_value field of Atk.PropertyValues will not contain a
valid value. This is a field defined with the purpose of contain
the previous value of the property, but is not used anymore. 
  */
export declare class PropertyValues {
/**
  * The new value of the named property. 
  */
newValue: import('../GObject').Value;
/**
  * None. This field is not used anymore. 
  */
oldValue: import('../GObject').Value;
/**
  * The name of the ATK property which has changed. 
  */
propertyName: string;
}

