import * as Gtk from '../Gtk';
export declare interface MenuShell extends Gtk.Container { }

/**
  * A Gtk.MenuShell is the abstract base class used to derive the
Gtk.Menu and Gtk.MenuBar subclasses. 
  */
export declare abstract class MenuShell {
  /**
    * Activates the menu item within the menu shell.
    * @param menuItem the Gtk.MenuItem to activate
    * @param forceDeactivate if True, force the deactivation of the menu shell after the menu item is activated 
    */
  activateItem(menuItem: import('../Gtk').Widget, forceDeactivate: boolean): void;
  /**
    * Adds a new Gtk.MenuItem to the end of the menu shell’s item list.
    * @param child The Gtk.MenuItem to add 
    */
  append(child: import('../Gtk').MenuItem): void;
  /**
    * Establishes a binding between a Gtk.MenuShell and a Gio.MenuModel.
    * @param model the Gio.MenuModel to bind to or None to remove binding
    * @param actionNamespace the namespace for actions in model
    * @param withSeparators True if toplevel items in shell should have separators between them 
    */
  bindModel(model: import('../Gio').MenuModel | null, actionNamespace: string | null, withSeparators: boolean): void;
  /**
    * Cancels the selection within the menu shell. 
    */
  cancel(): void;
  /**
    * Deactivates the menu shell. 
    */
  deactivate(): void;
  /**
    * Deselects the currently selected item from the menu shell, if any. 
    */
  deselect(): void;
  /**
    * Gets the parent menu shell.
    * @returns the parent Gtk.MenuShell 
    */
  getParentShell(): import('../Gtk').Widget;
  /**
    * Gets the currently selected item.
    * @returns the currently selected item 
    */
  getSelectedItem(): import('../Gtk').Widget;
  /**
    * Returns True if the menu shell will take the keyboard focus on popup.
    * @returns True if the menu shell will take the keyboard focus on popup. 
    */
  getTakeFocus(): boolean;
  /**
    * Adds a new Gtk.MenuItem to the menu shell’s item list at the position indicated by position.
    * @param child The Gtk.MenuItem to add
    * @param position The position in the item list where child is added. Positions are numbered from 0 to n-1 
    */
  insert(child: import('../Gtk').Widget, position: number): void;
  /**
    * Adds a new Gtk.MenuItem to the beginning of the menu shell’s item list.
    * @param child The Gtk.MenuItem to add 
    */
  prepend(child: import('../Gtk').Widget): void;
  /**
    * Select the first visible or selectable child of the menu shell; don’t select tearoff items unless the only item is a tearoff item.
    * @param searchSensitive if True, search for the first selectable menu item, otherwise select nothing if the first item isn’t sensitive. This should be False if the menu is being popped up initially. 
    */
  selectFirst(searchSensitive: boolean): void;
  /**
    * Selects the menu item from the menu shell.
    * @param menuItem The Gtk.MenuItem to select 
    */
  selectItem(menuItem: import('../Gtk').Widget): void;
  /**
    * If take_focus is True (the default) the menu shell will take the keyboard focus so that it will receive all keyboard events which is needed to enable keyboard navigation in menus.
    * @param takeFocus True if the menu shell should take the keyboard focus on popup 
    */
  setTakeFocus(takeFocus: boolean): void;
  /**
    * A boolean that determines whether the menu grabs the keyboard focus 
    */
  takeFocus: boolean;
}

