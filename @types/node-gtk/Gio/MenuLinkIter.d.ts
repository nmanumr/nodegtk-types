import * as GObject from '../GObject';
export declare interface MenuLinkIter extends GObject.Object { }

/**
  * Gio.MenuLinkIter is an opaque structure type.  You must access it using
the functions below. 
  */
export declare abstract class MenuLinkIter {
  /**
    * Gets the name of the link at the current iterator position.
    * @returns the type of the link 
    */
  getName(): string;
  /**
    * This function combines Gio.MenuLinkIter.next() with Gio.MenuLinkIter.get_name() and Gio.MenuLinkIter.get_value().
    * @returns True on success, or False if there is no additional link  out_link:the name of the link value:the linked Gio.MenuModel 
    */
  getNext(): [boolean, string, import('../Gio').MenuModel];
  /**
    * Gets the linked Gio.MenuModel at the current iterator position.
    * @returns the Gio.MenuModel that is linked to 
    */
  getValue(): import('../Gio').MenuModel;
  /**
    * Attempts to advance the iterator to the next (possibly first) link.
    * @returns True on success, or False when there are no more links 
    */
  next(): boolean;
}

