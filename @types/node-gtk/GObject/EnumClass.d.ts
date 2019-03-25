/**
  * The class of an enumeration type holds information about its
possible values. 
  */
export declare class EnumClass {
/**
  * the parent class 
  */
gTypeClass: import('../GObject').TypeClass;
/**
  * the largest possible value. 
  */
maximum: number;
/**
  * the smallest possible value. 
  */
minimum: number;
/**
  * the number of possible values. 
  */
nValues: number;
/**
  * an array of GObject.EnumValue structs describing the individual values. 
  */
values: import('../GObject').EnumValue;
}

