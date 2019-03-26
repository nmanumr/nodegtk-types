import * as Gtk from '../Gtk';
export declare interface PadController extends Gtk.EventController { }

/**
  * Gtk.PadController is an event controller for the pads found in drawing
tablets (The collection of buttons and tactile sensors often found around
the stylus-sensitive area). 
  */
export declare class PadController {
  /**
    * Creates a new Gtk.PadController that will associate events from pad to actions. A None pad may be provided so the controller manages all pad devices generically, it is discouraged to mix Gtk.PadController objects with None and non-None pad argument on the same window, as execution order is not guaranteed.
    * @param window a Gtk.Window
    * @param group Gio.ActionGroup to trigger actions from
    * @param pad A Gdk.InputSource.TABLET_PAD device, or None to handle all pads
    * @returns A newly created Gtk.PadController 
    */
  static new(window: import('../Gtk').Window, group: import('../Gio').ActionGroup, pad: import('../Gdk').Device | null): import('../Gtk').PadController;
  /**
    * Adds an individual action to self. This action will only be activated if the given button/ring/strip number in index is interacted while the current mode is mode. -1 may be used for simple cases, so the action is triggered on all modes.
    * @param type the type of pad feature that will trigger this action
    * @param index the 0-indexed button/ring/strip number that will trigger this action
    * @param mode the mode that will trigger this action, or -1 for all modes.
    * @param label Human readable description of this action, this string should be deemed user-visible.
    * @param actionName action name that will be activated in the Gio.ActionGroup 
    */
  setAction(type: import('../Gtk').PadActionType, index: number, mode: number, label: string, actionName: string): void;
  /**
    * This is a convenience function to add a group of action entries on self. See Gtk.PadActionEntry and Gtk.PadController.set_action().
    * @param entries the action entries to set on self 
    */
  setActionEntries(entries: import('../Gtk').PadActionEntry): void;
  /**
    * Action group to launch actions from 
    */
  actionGroup: import('../Gio').ActionGroup;
  /**
    * Pad device to control 
    */
  pad: import('../Gdk').Device;
}

