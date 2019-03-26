import * as GObject from '../GObject';
export declare interface MenuModel extends GObject.Object { }

/**
  * Gio.MenuModel represents the contents of a menu – an ordered list of
menu items. The items are associated with actions, which can be
activated through them. Items can be grouped in sections, and may
have submenus associated with them. Both items and sections usually
have some representation data, such as labels or icons. The type of
the associated action (ie whether it is stateful, and what kind of
state it has) can influence the representation of the item. 
  */
export declare abstract class MenuModel {
  /**
    * Queries the item at position item_index in self for the attribute specified by attribute.
    * @param itemIndex the index of the item
    * @param attribute the attribute to query
    * @param expectedType the expected type of the attribute, or None
    * @returns the value of the attribute 
    */
  getItemAttributeValue(itemIndex: number, attribute: string, expectedType: import('../GLib').VariantType | null): import('../GLib').Variant;
  /**
    * Queries the item at position item_index in self for the link specified by link.
    * @param itemIndex the index of the item
    * @param link the link to query
    * @returns the linked Gio.MenuModel, or None 
    */
  getItemLink(itemIndex: number, link: string): import('../Gio').MenuModel;
  /**
    * Query the number of items in self.
    * @returns the number of items 
    */
  getNItems(): number;
  /**
    * Queries if self is mutable.
    * @returns True if the model is mutable (ie: “items-changed” may be emitted). 
    */
  isMutable(): boolean;
  /**
    * Requests emission of the Gio.MenuModel ::items-changed signal on self.
    * @param position the position of the change
    * @param removed the number of items removed
    * @param added the number of items added 
    */
  itemsChanged(position: number, removed: number, added: number): void;
  /**
    * Creates a Gio.MenuAttributeIter to iterate over the attributes of the item at position item_index in self.
    * @param itemIndex the index of the item
    * @returns a new Gio.MenuAttributeIter 
    */
  iterateItemAttributes(itemIndex: number): import('../Gio').MenuAttributeIter;
  /**
    * Creates a Gio.MenuLinkIter to iterate over the links of the item at position item_index in self.
    * @param itemIndex the index of the item
    * @returns a new Gio.MenuLinkIter 
    */
  iterateItemLinks(itemIndex: number): import('../Gio').MenuLinkIter;
}

