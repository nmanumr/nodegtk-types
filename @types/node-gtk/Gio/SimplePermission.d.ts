import * as Gio from '../Gio';
export declare interface SimplePermission extends Gio.Permission { }

/**
  * Gio.SimplePermission is a trivial implementation of Gio.Permission that
represents a permission that is either always or never allowed.  The
value is given at construction and doesn’t change. 
  */
export declare class SimplePermission {
  /**
    * Creates a new Gio.Permission instance that represents an action that is either always or never allowed.
    * @param allowed True if the action is allowed
    * @returns the Gio.SimplePermission, as a Gio.Permission 
    */
  static new(allowed: boolean): import('../Gio').Permission;
  ;
}

