import * as GObject from '../GObject';
export declare interface AccelGroup extends GObject.Object { }

/**
  * A Gtk.AccelGroup represents a group of keyboard accelerators,
typically attached to a toplevel Gtk.Window (with
Gtk.Window.add_accel_group()). Usually you won’t need to create a
Gtk.AccelGroup directly; instead, when using Gtk.UIManager, GTK+
automatically sets up the accelerators for your menus in the ui
manager’s Gtk.AccelGroup. 
  */
export declare class AccelGroup {
  /**
    * Finds the Gtk.AccelGroup to which closure is connected; see Gtk.AccelGroup.connect().
    * @param closure a GObject.Closure
    * @returns the Gtk.AccelGroup to which closure is connected, or None 
    */
  static fromAccelClosure(closure: import('../GObject').Closure): import('../Gtk').AccelGroup | null;
  /**
    * Creates a new Gtk.AccelGroup.
    * @returns a new Gtk.AccelGroup object 
    */
  static new(): import('../Gtk').AccelGroup;
  /**
    * Finds the first accelerator in self that matches accel_key and accel_mods, and activates it.
    * @param accelQuark the quark for the accelerator name
    * @param acceleratable the GObject.Object, usually a Gtk.Window, on which to activate the accelerator
    * @param accelKey accelerator keyval from a key event
    * @param accelMods keyboard state mask from a key event
    * @returns True if an accelerator was activated and handled this keypress 
    */
  activate(accelQuark: number, acceleratable: import('../GObject').Object, accelKey: number, accelMods: import('../Gdk').ModifierType): boolean;
  /**
    * Installs an accelerator in this group. When self is being activated in response to a call to Gtk.accel_groups_activate(), closure will be invoked if the accel_key and accel_mods from Gtk.accel_groups_activate() match those of this connection.
    * @param accelKey key value of the accelerator
    * @param accelMods modifier combination of the accelerator
    * @param accelFlags a flag mask to configure this accelerator
    * @param closure closure to be executed upon accelerator activation 
    */
  connect(accelKey: number, accelMods: import('../Gdk').ModifierType, accelFlags: import('../Gtk').AccelFlags, closure: import('../GObject').Closure): void;
  /**
    * Installs an accelerator in this group, using an accelerator path to look up the appropriate key and modifiers (see Gtk.AccelMap.add_entry()). When self is being activated in response to a call to Gtk.accel_groups_activate(), closure will be invoked if the accel_key and accel_mods from Gtk.accel_groups_activate() match the key and modifiers for the path.
    * @param accelPath path used for determining key and modifiers
    * @param closure closure to be executed upon accelerator activation 
    */
  connectByPath(accelPath: string, closure: import('../GObject').Closure): void;
  /**
    * Removes an accelerator previously installed through Gtk.AccelGroup.connect().
    * @param closure the closure to remove from this accelerator group, or None to remove all closures
    * @returns True if the closure was found and got disconnected 
    */
  disconnect(closure: import('../GObject').Closure | null): boolean;
  /**
    * Removes an accelerator previously installed through Gtk.AccelGroup.connect().
    * @param accelKey key value of the accelerator
    * @param accelMods modifier combination of the accelerator
    * @returns True if there was an accelerator which could be removed, False otherwise 
    */
  disconnectKey(accelKey: number, accelMods: import('../Gdk').ModifierType): boolean;
  /**
    * Finds the first entry in an accelerator group for which find_func returns True and returns its Gtk.AccelKey.
    * @param findFunc a function to filter the entries of self with
    * @param data data to pass to find_func
    * @returns the key of the first entry passing find_func. The key is owned by GTK+ and must not be freed. 
    */
  find(findFunc: import('../Gtk').accelGroupFindFunc, data: Object | null): import('../Gtk').AccelKey;
  /**
    * Locks are added and removed using Gtk.AccelGroup.lock() and Gtk.AccelGroup.unlock().
    * @returns True if there are 1 or more locks on the self, False otherwise. 
    */
  getIsLocked(): boolean;
  /**
    * Gets a Gdk.ModifierType representing the mask for this self. For example, Gdk.ModifierType.CONTROL_MASK, Gdk.ModifierType.SHIFT_MASK, etc.
    * @returns the modifier mask for this accel group. 
    */
  getModifierMask(): import('../Gdk').ModifierType;
  /**
    * Locks the given accelerator group. 
    */
  lock(): void;
  /**
    * Queries an accelerator group for all entries matching accel_key and accel_mods.
    * @param accelKey key value of the accelerator
    * @param accelMods modifier combination of the accelerator
    * @returns an array of n_entries Gtk.AccelGroupEntry elements, or None. The array is owned by GTK+ and must not be freed. 
    */
  query(accelKey: number, accelMods: import('../Gdk').ModifierType): import('../Gtk').AccelGroupEntry[] | null;
  /**
    * Undoes the last call to Gtk.AccelGroup.lock() on this self. 
    */
  unlock(): void;
  /**
    * Is the accel group locked 
    */
  readonly isLocked: boolean;
  /**
    * Modifier Mask 
    */
  readonly modifierMask: import('../Gdk').ModifierType;
}

