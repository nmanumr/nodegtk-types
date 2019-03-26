import * as Gtk from '../Gtk';
export declare interface AccelLabel extends Gtk.Label { }

/**
  * The Gtk.AccelLabel widget is a subclass of Gtk.Label that also displays an
accelerator key on the right of the label text, e.g. “Ctrl+S”.
It is commonly used in menus to show the keyboard short-cuts for commands. 
  */
export declare class AccelLabel {
  /**
    * Creates a new Gtk.AccelLabel.
    * @param string the label string. Must be non-None.
    * @returns a new Gtk.AccelLabel. 
    */
  static new(string: string): import('../Gtk').Widget;
  /**
    * Gets the keyval and modifier mask set with Gtk.AccelLabel.set_accel().
    * @returns accelerator_key:  return location for the keyval accelerator_mods:  return location for the modifier mask 
    */
  getAccel(): [number, import('../Gdk').ModifierType];
  /**
    * Fetches the widget monitored by this accelerator label. See Gtk.AccelLabel.set_accel_widget().
    * @returns the object monitored by the accelerator label, or None. 
    */
  getAccelWidget(): import('../Gtk').Widget | null;
  /**
    * Returns the width needed to display the accelerator key(s). This is used by menus to align all of the Gtk.MenuItem widgets, and shouldn’t be needed by applications.
    * @returns the width needed to display the accelerator key(s). 
    */
  getAccelWidth(): number;
  /**
    * Recreates the string representing the accelerator keys. This should not be needed since the string is automatically updated whenever accelerators are added or removed from the associated widget.
    * @returns always returns False. 
    */
  refetch(): boolean;
  /**
    * Manually sets a keyval and modifier mask as the accelerator rendered by self.
    * @param acceleratorKey a keyval, or 0
    * @param acceleratorMods the modifier mask for the accel 
    */
  setAccel(acceleratorKey: number, acceleratorMods: import('../Gdk').ModifierType): void;
  /**
    * Sets the closure to be monitored by this accelerator label. The closure must be connected to an accelerator group; see Gtk.AccelGroup.connect(). Passing None for accel_closure will dissociate self from its current closure, if any.
    * @param accelClosure the closure to monitor for accelerator changes, or None 
    */
  setAccelClosure(accelClosure: import('../GObject').Closure | null): void;
  /**
    * Sets the widget to be monitored by this accelerator label. Passing None for accel_widget will dissociate self from its current widget, if any.
    * @param accelWidget the widget to be monitored, or None 
    */
  setAccelWidget(accelWidget: import('../Gtk').Widget | null): void;
  /**
    * The closure to be monitored for accelerator changes 
    */
  accelClosure: import('../GObject').Closure;
  /**
    * The widget to be monitored for accelerator changes 
    */
  accelWidget: import('../Gtk').Widget;
}

