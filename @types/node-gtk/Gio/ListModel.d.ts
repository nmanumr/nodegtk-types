import * as GObject from '../GObject';

/**
  * Gio.ListModel is an interface that represents a mutable list of
GObject.Objects. Its main intention is as a model for various widgets in
user interfaces, such as list views, but it can also be used as a
convenient method of returning lists of data, with support for
updates. 
  */
export declare interface ListModel extends GObject.GInterface {
/**
  * Get the item at position. If position is greater than the number of items in self, None is returned.
  * @param position the position of the item to fetch
  * @returns the object at position. 
  */
getItem(position: number): import('../GObject').Object | null;
/**
  * Gets the type of the items in self. All items returned from g_list_model_get_type() are of that type or a subtype, or are an implementation of that interface.
  * @returns the GObject.GType of the items contained in self. 
  */
getItemType(): import('../GObject').GType;
/**
  * Gets the number of items in self.
  * @returns the number of items in self. 
  */
getNItems(): number;
/**
  * Emits the Gio.ListModel ::items-changed signal on self.
  * @param position the position at which self changed
  * @param removed the number of items removed
  * @param added the number of items added 
  */
itemsChanged(position: number, removed: number, added: number): void;
}

