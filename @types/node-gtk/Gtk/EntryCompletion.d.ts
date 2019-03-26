import * as GObject from '../GObject';
import * as Gtk from '../Gtk';
export declare interface EntryCompletion extends GObject.Object, Gtk.Buildable, Gtk.CellLayout { }

/**
  * Gtk.EntryCompletion is an auxiliary object to be used in conjunction with
Gtk.Entry to provide the completion functionality. It implements the
Gtk.CellLayout interface, to allow the user to add extra cells to the
Gtk.TreeView with completion matches. 
  */
export declare class EntryCompletion {
  /**
    * Creates a new Gtk.EntryCompletion object.
    * @returns A newly created Gtk.EntryCompletion object 
    */
  static new(): import('../Gtk').EntryCompletion;
  /**
    * Creates a new Gtk.EntryCompletion object using the specified area to layout cells in the underlying Gtk.TreeViewColumn for the drop-down menu.
    * @param area the Gtk.CellArea used to layout cells
    * @returns A newly created Gtk.EntryCompletion object 
    */
  static newWithArea(area: import('../Gtk').CellArea): import('../Gtk').EntryCompletion;
  /**
    * Requests a completion operation, or in other words a refiltering of the current list with completions, using the current key. The completion list view will be updated accordingly. 
    */
  complete(): void;
  /**
    * Computes the common prefix that is shared by all rows in self that start with key. If no row matches key, None will be returned. Note that a text column must have been set for this function to work, see Gtk.EntryCompletion.set_text_column() for details.
    * @param key The text to complete for
    * @returns The common prefix all rows starting with key or None if no row matches key. 
    */
  computePrefix(key: string): string | null;
  /**
    * Deletes the action at index_ from self’s action list.
    * @param index the index of the item to delete 
    */
  deleteAction(index: number): void;
  /**
    * Get the original text entered by the user that triggered the completion or None if there’s no completion ongoing.
    * @returns the prefix for the current completion 
    */
  getCompletionPrefix(): string;
  /**
    * Gets the entry self has been attached to.
    * @returns The entry self has been attached to 
    */
  getEntry(): import('../Gtk').Widget;
  /**
    * Returns whether the common prefix of the possible completions should be automatically inserted in the entry.
    * @returns True if inline completion is turned on 
    */
  getInlineCompletion(): boolean;
  /**
    * Returns True if inline-selection mode is turned on.
    * @returns True if inline-selection mode is on 
    */
  getInlineSelection(): boolean;
  /**
    * Returns the minimum key length as set for self.
    * @returns The currently used minimum key length 
    */
  getMinimumKeyLength(): number;
  /**
    * Returns the model the Gtk.EntryCompletion is using as data source. Returns None if the model is unset.
    * @returns A Gtk.TreeModel, or None if none is currently being used 
    */
  getModel(): import('../Gtk').TreeModel | null;
  /**
    * Returns whether the completions should be presented in a popup window.
    * @returns True if popup completion is turned on 
    */
  getPopupCompletion(): boolean;
  /**
    * Returns whether the  completion popup window will be resized to the width of the entry.
    * @returns True if the popup window will be resized to the width of the entry 
    */
  getPopupSetWidth(): boolean;
  /**
    * Returns whether the completion popup window will appear even if there is only a single match.
    * @returns True if the popup window will appear regardless of the number of matches 
    */
  getPopupSingleMatch(): boolean;
  /**
    * Returns the column in the model of self to get strings from.
    * @returns the column containing the strings 
    */
  getTextColumn(): number;
  /**
    * Inserts an action in self’s action item list at position index_ with markup markup.
    * @param index the index of the item to insert
    * @param markup markup of the item to insert 
    */
  insertActionMarkup(index: number, markup: string): void;
  /**
    * Inserts an action in self’s action item list at position index_ with text text. If you want the action item to have markup, use Gtk.EntryCompletion.insert_action_markup().
    * @param index the index of the item to insert
    * @param text text of the item to insert 
    */
  insertActionText(index: number, text: string): void;
  /**
    * Requests a prefix insertion. 
    */
  insertPrefix(): void;
  /**
    * Sets whether the common prefix of the possible completions should be automatically inserted in the entry.
    * @param inlineCompletion True to do inline completion 
    */
  setInlineCompletion(inlineCompletion: boolean): void;
  /**
    * Sets whether it is possible to cycle through the possible completions inside the entry.
    * @param inlineSelection True to do inline selection 
    */
  setInlineSelection(inlineSelection: boolean): void;
  /**
    * Sets the match function for self to be func. The match function is used to determine if a row should or should not be in the completion list.
    * @param func the Gtk.EntryCompletionMatchFunc to use
    * @param funcData user data for func 
    */
  setMatchFunc(func: import('../Gtk').entryCompletionMatchFunc, funcData: Object | null): void;
  /**
    * Requires the length of the search key for self to be at least length. This is useful for long lists, where completing using a small key takes a lot of time and will come up with meaningless results anyway (ie, a too large dataset).
    * @param length the minimum length of the key in order to start completing 
    */
  setMinimumKeyLength(length: number): void;
  /**
    * Sets the model for a Gtk.EntryCompletion. If self already has a model set, it will remove it before setting the new model. If model is None, then it will unset the model.
    * @param model the Gtk.TreeModel 
    */
  setModel(model: import('../Gtk').TreeModel | null): void;
  /**
    * Sets whether the completions should be presented in a popup window.
    * @param popupCompletion True to do popup completion 
    */
  setPopupCompletion(popupCompletion: boolean): void;
  /**
    * Sets whether the completion popup window will be resized to be the same width as the entry.
    * @param popupSetWidth True to make the width of the popup the same as the entry 
    */
  setPopupSetWidth(popupSetWidth: boolean): void;
  /**
    * Sets whether the completion popup window will appear even if there is only a single match. You may want to set this to False if you are using inline completion.
    * @param popupSingleMatch True if the popup should appear even for a single match 
    */
  setPopupSingleMatch(popupSingleMatch: boolean): void;
  /**
    * Convenience function for setting up the most used case of this code: a completion list with just strings. This function will set up self to have a list displaying all (and just) strings in the completion list, and to get those strings from column in the model of self.
    * @param column the column in the model of self to get strings from 
    */
  setTextColumn(column: number): void;
  /**
    * The Gtk.CellArea used to layout cells 
    */
  cellArea: import('../Gtk').CellArea;
  /**
    * Whether the common prefix should be inserted automatically 
    */
  inlineCompletion: boolean;
  /**
    * Your description here 
    */
  inlineSelection: boolean;
  /**
    * Minimum length of the search key in order to look up matches 
    */
  minimumKeyLength: number;
  /**
    * The model to find matches in 
    */
  model: import('../Gtk').TreeModel;
  /**
    * Whether the completions should be shown in a popup window 
    */
  popupCompletion: boolean;
  /**
    * If True, the popup window will have the same size as the entry 
    */
  popupSetWidth: boolean;
  /**
    * If True, the popup window will appear for a single match. 
    */
  popupSingleMatch: boolean;
  /**
    * The column of the model containing the strings. 
    */
  textColumn: number;
}

