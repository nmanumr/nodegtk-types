import * as Gtk from '../Gtk';
export declare interface LockButton extends Gtk.Button { }

/**
  * Gtk.LockButton is a widget that can be used in control panels or
preference dialogs to allow users to obtain and revoke authorizations
needed to operate the controls. The required authorization is represented
by a Gio.Permission object. Concrete implementations of Gio.Permission may use
PolicyKit or some other authorization framework. To obtain a PolicyKit-based
Gio.Permission, use polkit_permission_new(). 
  */
export declare class LockButton {
  /**
    * Creates a new lock button which reflects the permission.
    * @param permission a Gio.Permission
    * @returns a new Gtk.LockButton 
    */
  static new(permission: import('../Gio').Permission | null): import('../Gtk').Widget;
  /**
    * Obtains the Gio.Permission object that controls self.
    * @returns the Gio.Permission of self 
    */
  getPermission(): import('../Gio').Permission;
  /**
    * Sets the Gio.Permission object that controls self.
    * @param permission a Gio.Permission object, or None 
    */
  setPermission(permission: import('../Gio').Permission | null): void;
  /**
    * The Gio.Permission object controlling this button 
    */
  permission: import('../Gio').Permission;
  /**
    * The text to display when prompting the user to lock 
    */
  textLock: string;
  /**
    * The text to display when prompting the user to unlock 
    */
  textUnlock: string;
  /**
    * The tooltip to display when prompting the user to lock 
    */
  tooltipLock: string;
  /**
    * The tooltip to display when prompting the user cannot obtain authorization 
    */
  tooltipNotAuthorized: string;
  /**
    * The tooltip to display when prompting the user to unlock 
    */
  tooltipUnlock: string;
}

