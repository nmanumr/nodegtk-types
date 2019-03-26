import * as Gio from '../Gio';
export declare interface Menu extends Gio.MenuModel { }

/**
  * Gio.Menu is a simple implementation of Gio.MenuModel.
You populate a Gio.Menu by adding Gio.MenuItem instances to it. 
  */
export declare class Menu {
  /**
    * Creates a new Gio.Menu.
    * @returns a new Gio.Menu 
    */
  static new(): import('../Gio').Menu;
  /**
    * Convenience function for appending a normal menu item to the end of self.  Combine Gio.MenuItem.new() and Gio.Menu.insert_item() for a more flexible alternative.
    * @param label the section label, or None
    * @param detailedAction the detailed action string, or None 
    */
  append(label: string | null, detailedAction: string | null): void;
  /**
    * Appends item to the end of self.
    * @param item a Gio.MenuItem to append 
    */
  appendItem(item: import('../Gio').MenuItem): void;
  /**
    * Convenience function for appending a section menu item to the end of self.  Combine Gio.MenuItem.new_section() and Gio.Menu.insert_item() for a more flexible alternative.
    * @param label the section label, or None
    * @param section a Gio.MenuModel with the items of the section 
    */
  appendSection(label: string | null, section: import('../Gio').MenuModel): void;
  /**
    * Convenience function for appending a submenu menu item to the end of self.  Combine Gio.MenuItem.new_submenu() and Gio.Menu.insert_item() for a more flexible alternative.
    * @param label the section label, or None
    * @param submenu a Gio.MenuModel with the items of the submenu 
    */
  appendSubmenu(label: string | null, submenu: import('../Gio').MenuModel): void;
  /**
    * Marks self as frozen. 
    */
  freeze(): void;
  /**
    * Convenience function for inserting a normal menu item into self. Combine Gio.MenuItem.new() and Gio.Menu.insert_item() for a more flexible alternative.
    * @param position the position at which to insert the item
    * @param label the section label, or None
    * @param detailedAction the detailed action string, or None 
    */
  insert(position: number, label: string | null, detailedAction: string | null): void;
  /**
    * Inserts item into self.
    * @param position the position at which to insert the item
    * @param item the Gio.MenuItem to insert 
    */
  insertItem(position: number, item: import('../Gio').MenuItem): void;
  /**
    * Convenience function for inserting a section menu item into self. Combine Gio.MenuItem.new_section() and Gio.Menu.insert_item() for a more flexible alternative.
    * @param position the position at which to insert the item
    * @param label the section label, or None
    * @param section a Gio.MenuModel with the items of the section 
    */
  insertSection(position: number, label: string | null, section: import('../Gio').MenuModel): void;
  /**
    * Convenience function for inserting a submenu menu item into self. Combine Gio.MenuItem.new_submenu() and Gio.Menu.insert_item() for a more flexible alternative.
    * @param position the position at which to insert the item
    * @param label the section label, or None
    * @param submenu a Gio.MenuModel with the items of the submenu 
    */
  insertSubmenu(position: number, label: string | null, submenu: import('../Gio').MenuModel): void;
  /**
    * Convenience function for prepending a normal menu item to the start of self.  Combine Gio.MenuItem.new() and Gio.Menu.insert_item() for a more flexible alternative.
    * @param label the section label, or None
    * @param detailedAction the detailed action string, or None 
    */
  prepend(label: string | null, detailedAction: string | null): void;
  /**
    * Prepends item to the start of self.
    * @param item a Gio.MenuItem to prepend 
    */
  prependItem(item: import('../Gio').MenuItem): void;
  /**
    * Convenience function for prepending a section menu item to the start of self.  Combine Gio.MenuItem.new_section() and Gio.Menu.insert_item() for a more flexible alternative.
    * @param label the section label, or None
    * @param section a Gio.MenuModel with the items of the section 
    */
  prependSection(label: string | null, section: import('../Gio').MenuModel): void;
  /**
    * Convenience function for prepending a submenu menu item to the start of self.  Combine Gio.MenuItem.new_submenu() and Gio.Menu.insert_item() for a more flexible alternative.
    * @param label the section label, or None
    * @param submenu a Gio.MenuModel with the items of the submenu 
    */
  prependSubmenu(label: string | null, submenu: import('../Gio').MenuModel): void;
  /**
    * Removes an item from the menu.
    * @param position the position of the item to remove 
    */
  remove(position: number): void;
  /**
    * Removes all items in the menu. 
    */
  removeAll(): void;
}

