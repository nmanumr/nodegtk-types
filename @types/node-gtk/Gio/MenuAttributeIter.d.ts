import * as GObject from '../GObject';
export declare interface MenuAttributeIter extends GObject.Object { }

/**
  * Gio.MenuAttributeIter is an opaque structure type.  You must access it
using the functions below. 
  */
export declare abstract class MenuAttributeIter {
  /**
    * Gets the name of the attribute at the current iterator position, as a string.
    * @returns the name of the attribute 
    */
  getName(): string;
  /**
    * This function combines Gio.MenuAttributeIter.next() with Gio.MenuAttributeIter.get_name() and Gio.MenuAttributeIter.get_value().
    * @returns True on success, or False if there is no additional attribute  out_name:the type of the attribute value:the attribute value 
    */
  getNext(): [boolean, string, import('../GLib').Variant];
  /**
    * Gets the value of the attribute at the current iterator position.
    * @returns the value of the current attribute 
    */
  getValue(): import('../GLib').Variant;
  /**
    * Attempts to advance the iterator to the next (possibly first) attribute.
    * @returns True on success, or False when there are no more attributes 
    */
  next(): boolean;
}

