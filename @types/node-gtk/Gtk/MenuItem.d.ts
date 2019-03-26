import * as Gtk from '../Gtk';

export declare interface MenuItem extends Gtk.Bin, Gtk.Actionable, Gtk.Activatable {
  activate(): void;
  activate(): boolean;
}

/**
  * The Gtk.MenuItem widget and the derived widgets are the only valid
children for menus. Their function is to correctly handle highlighting,
alignment, events and submenus. 
  */
export declare class MenuItem {
  /**
    * Creates a new Gtk.MenuItem.
    * @returns the newly created Gtk.MenuItem 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.MenuItem whose child is a Gtk.Label.
    * @param label the text for the label
    * @returns the newly created Gtk.MenuItem 
    */
  static newWithLabel(label: string): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.MenuItem containing a label.
    * @param label The text of the button, with an underscore in front of the mnemonic character
    * @returns a new Gtk.MenuItem 
    */
  static newWithMnemonic(label: string): import('../Gtk').Widget;
  /**
    * Emits the Gtk.MenuItem ::activate signal on the given item 
    */
  activate(): void;
  /**
    * Emits the Gtk.MenuItem ::deselect signal on the given item. 
    */
  deselect(): void;
  /**
    * Retrieve the accelerator path that was previously set on self.
    * @returns the accelerator path corresponding to this menu item’s functionality, or None if not set 
    */
  getAccelPath(): string | null;
  /**
    * Sets text on the self label
    * @returns The text in the self label. This is the internal string used by the label, and must not be modified. 
    */
  getLabel(): string;
  /**
    * Returns whether the self reserves space for the submenu indicator, regardless if it has a submenu or not.
    * @returns True if self always reserves space for the submenu indicator 
    */
  getReserveIndicator(): boolean;
  /**
    * Gets whether the menu item appears justified at the right side of the menu bar.
    * @returns True if the menu item will appear at the far right if added to a menu bar. 
    */
  getRightJustified(): boolean;
  /**
    * Gets the submenu underneath this menu item, if any. See Gtk.MenuItem.set_submenu().
    * @returns submenu for this menu item, or None if none 
    */
  getSubmenu(): import('../Gtk').Widget | null;
  /**
    * Checks if an underline in the text indicates the next character should be used for the mnemonic accelerator key.
    * @returns True if an embedded underline in the label indicates the mnemonic accelerator key. 
    */
  getUseUnderline(): boolean;
  /**
    * Emits the Gtk.MenuItem ::select signal on the given item. 
    */
  select(): void;
  /**
    * Set the accelerator path on self, through which runtime changes of the menu item’s accelerator caused by the user can be identified and saved to persistent storage (see Gtk.AccelMap.save() on this). To set up a default accelerator for this menu item, call Gtk.AccelMap.add_entry() with the same accel_path. See also Gtk.AccelMap.add_entry() on the specifics of accelerator paths, and Gtk.Menu.set_accel_path() for a more convenient variant of this function.
    * @param accelPath accelerator path, corresponding to this menu item’s functionality, or None to unset the current path. 
    */
  setAccelPath(accelPath: string | null): void;
  /**
    * Sets text on the self label
    * @param label the text you want to set 
    */
  setLabel(label: string): void;
  /**
    * Sets whether the self should reserve space for the submenu indicator, regardless if it actually has a submenu or not.
    * @param reserve the new value 
    */
  setReserveIndicator(reserve: boolean): void;
  /**
    * Sets whether the menu item appears justified at the right side of a menu bar. This was traditionally done for “Help” menu items, but is now considered a bad idea. (If the widget layout is reversed for a right-to-left language like Hebrew or Arabic, right-justified-menu-items appear at the left.)
    * @param rightJustified if True the menu item will appear at the far right if added to a menu bar 
    */
  setRightJustified(rightJustified: boolean): void;
  /**
    * Sets or replaces the menu item’s submenu, or removes it when a None submenu is passed.
    * @param submenu the submenu, or None 
    */
  setSubmenu(submenu: import('../Gtk').Menu | null): void;
  /**
    * If true, an underline in the text indicates the next character should be used for the mnemonic accelerator key.
    * @param setting True if underlines in the text indicate mnemonics 
    */
  setUseUnderline(setting: boolean): void;
  /**
    * Emits the Gtk.MenuItem ::toggle-size-allocate signal on the given item.
    * @param allocation the allocation to use as signal data. 
    */
  toggleSizeAllocate(allocation: number): void;
  /**
    * Emits the Gtk.MenuItem ::toggle-size-request signal on the given item.
    * @param requisition the requisition to use as signal data.
    * @returns the requisition to use as signal data. 
    */
  toggleSizeRequest(requisition: number): number;
  /**
    * Sets the accelerator path of the menu item 
    */
  accelPath: string;
  /**
    * The text for the child label 
    */
  label: string;
  /**
    * Sets whether the menu item appears justified at the right side of a menu bar deprecated 
    */
  rightJustified: boolean;
  /**
    * The submenu attached to the menu item, or None if it has none 
    */
  submenu: import('../Gtk').Menu;
  /**
    * If set, an underline in the text indicates the next character should be used for the mnemonic accelerator key 
    */
  useUnderline: boolean;
}

