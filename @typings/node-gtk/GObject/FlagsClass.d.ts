/**
  * The class of a flags type holds information about its
possible values. 
  */
export declare class FlagsClass {
/**
  * the parent class 
  */
gTypeClass: import('../GObject').TypeClass;
/**
  * a mask covering all possible values. 
  */
mask: number;
/**
  * the number of possible values. 
  */
nValues: number;
/**
  * an array of GObject.FlagsValue structs describing the individual values. 
  */
values: import('../GObject').FlagsValue;
}

