import * as GObject from '../GObject';
import * as Gio from '../Gio';
export declare interface ListStore extends GObject.Object, Gio.ListModel { }

/**
  * Gio.ListStore is a simple implementation of Gio.ListModel that stores all
items in memory. 
  */
export declare class ListStore {
/**
  * Creates a new Gio.ListStore with items of type item_type. item_type must be a subclass of GObject.Object.
  * @param itemType the GObject.GType of items in the list
  * @returns a new Gio.ListStore 
  */
static new(itemType: import('../GObject').GType): import('../Gio').ListStore;
/**
  * Appends item to self. item must be of type Gio.ListStore :item-type.
  * @param item the new item 
  */
append(item: import('../GObject').Object): void;
/**
  * Inserts item into self at position. item must be of type Gio.ListStore :item-type or derived from it. position must be smaller than the length of the list, or equal to it to append.
  * @param position the position at which to insert the new item
  * @param item the new item 
  */
insert(position: number, item: import('../GObject').Object): void;
/**
  * Inserts item into self at a position to be determined by the compare_func.
  * @param item the new item
  * @param compareFunc pairwise comparison function for sorting
  * @param userData user data for compare_func
  * @returns the position at which item was inserted 
  */
insertSorted(item: import('../GObject').Object, compareFunc: import('../GLib').compareDataFunc, userData: Object | null): number;
/**
  * Removes the item from self that is at position. position must be smaller than the current length of the list.
  * @param position the position of the item that is to be removed 
  */
remove(position: number): void;
/**
  * Removes all items from self. 
  */
removeAll(): void;
/**
  * Sort the items in self according to compare_func.
  * @param compareFunc pairwise comparison function for sorting
  * @param userData user data for compare_func 
  */
sort(compareFunc: import('../GLib').compareDataFunc, userData: Object | null): void;
/**
  * Changes self by removing n_removals items and adding n_additions items to it. additions must contain n_additions items of type Gio.ListStore :item-type.  None is not permitted.
  * @param position the position at which to make the change
  * @param nRemovals the number of items to remove
  * @param additions the items to add 
  */
splice(position: number, nRemovals: number, additions: import('../GObject').Object): void;
/**
  *   
  */
itemType: import('../GObject').GType;
}

