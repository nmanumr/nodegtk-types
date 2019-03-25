/**
  * The GLib.List struct is used for each element in a doubly-linked list. 
  */
export declare class List {
/**
  * holds the element’s data, which can be a pointer to any kind of data, or any integer value using the Type Conversion Macros 
  */
data: Object;
/**
  * contains the link to the next element in the list 
  */
next: Object;
/**
  * contains the link to the previous element in the list 
  */
prev: Object;
}

