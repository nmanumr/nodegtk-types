import * as GObject from '../GObject';
export declare interface MenuItem extends GObject.Object { }

/**
  * Gio.MenuItem is an opaque structure type.  You must access it using the
functions below. 
  */
export declare class MenuItem {
  /**
    * Creates a new Gio.MenuItem.
    * @param label the section label, or None
    * @param detailedAction the detailed action string, or None
    * @returns a new Gio.MenuItem 
    */
  static new(label: string | null, detailedAction: string | null): import('../Gio').MenuItem;
  /**
    * Creates a Gio.MenuItem as an exact copy of an existing menu item in a Gio.MenuModel.
    * @param model a Gio.MenuModel
    * @param itemIndex the index of an item in model
    * @returns a new Gio.MenuItem. 
    */
  static newFromModel(model: import('../Gio').MenuModel, itemIndex: number): import('../Gio').MenuItem;
  /**
    * Creates a new Gio.MenuItem representing a section.
    * @param label the section label, or None
    * @param section a Gio.MenuModel with the items of the section
    * @returns a new Gio.MenuItem 
    */
  static newSection(label: string | null, section: import('../Gio').MenuModel): import('../Gio').MenuItem;
  /**
    * Creates a new Gio.MenuItem representing a submenu.
    * @param label the section label, or None
    * @param submenu a Gio.MenuModel with the items of the submenu
    * @returns a new Gio.MenuItem 
    */
  static newSubmenu(label: string | null, submenu: import('../Gio').MenuModel): import('../Gio').MenuItem;
  /**
    * Queries the named attribute on self.
    * @param attribute the attribute name to query
    * @param expectedType the expected type of the attribute
    * @returns the attribute value, or None 
    */
  getAttributeValue(attribute: string, expectedType: import('../GLib').VariantType | null): import('../GLib').Variant;
  /**
    * Queries the named link on self.
    * @param link the link name to query
    * @returns the link, or None 
    */
  getLink(link: string): import('../Gio').MenuModel;
  /**
    * Sets or unsets the “action” and “target” attributes of self.
    * @param action the name of the action for this item
    * @param targetValue a GLib.Variant to use as the action target 
    */
  setActionAndTargetValue(action: string | null, targetValue: import('../GLib').Variant | null): void;
  /**
    * Sets or unsets an attribute on self. 
    */
  setAttribute(): void;
  /**
    * Sets or unsets an attribute on self.
    * @param attribute the attribute to set
    * @param value a GLib.Variant to use as the value, or None 
    */
  setAttributeValue(attribute: string, value: import('../GLib').Variant | null): void;
  /**
    * Sets the “action” and possibly the “target” attribute of self.
    * @param detailedAction the “detailed” action string 
    */
  setDetailedAction(detailedAction: string): void;
  /**
    * Sets (or unsets) the icon on self.
    * @param icon a Gio.Icon, or None 
    */
  setIcon(icon: import('../Gio').Icon): void;
  /**
    * Sets or unsets the “label” attribute of self.
    * @param label the label to set, or None to unset 
    */
  setLabel(label: string | null): void;
  /**
    * Creates a link from self to model if non-None, or unsets it.
    * @param link type of link to establish or unset
    * @param model the Gio.MenuModel to link to (or None to unset) 
    */
  setLink(link: string, model: import('../Gio').MenuModel | null): void;
  /**
    * Sets or unsets the “section” link of self to section.
    * @param section a Gio.MenuModel, or None 
    */
  setSection(section: import('../Gio').MenuModel | null): void;
  /**
    * Sets or unsets the “submenu” link of self to submenu.
    * @param submenu a Gio.MenuModel, or None 
    */
  setSubmenu(submenu: import('../Gio').MenuModel | null): void;
}

