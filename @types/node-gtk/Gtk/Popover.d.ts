import * as Gtk from '../Gtk';
export declare interface Popover extends Gtk.Bin { }

/**
  * Gtk.Popover is a bubble-like context window, primarily meant to
provide context-dependent information or options. Popovers are
attached to a widget, passed at construction time on Gtk.Popover.new(),
or updated afterwards through Gtk.Popover.set_relative_to(), by
default they will point to the whole widget area, although this
behavior can be changed through Gtk.Popover.set_pointing_to(). 
  */
export declare class Popover {
  /**
    * Creates a new popover to point to relative_to
    * @param relativeTo Gtk.Widget the popover is related to
    * @returns a new Gtk.Popover 
    */
  static new(relativeTo: import('../Gtk').Widget | null): import('../Gtk').Widget;
  /**
    * Creates a Gtk.Popover and populates it according to model. The popover is pointed to the relative_to widget.
    * @param relativeTo Gtk.Widget the popover is related to
    * @param model a Gio.MenuModel
    * @returns the new Gtk.Popover 
    */
  static newFromModel(relativeTo: import('../Gtk').Widget | null, model: import('../Gio').MenuModel): import('../Gtk').Widget;
  /**
    * Establishes a binding between a Gtk.Popover and a Gio.MenuModel.
    * @param model the Gio.MenuModel to bind to or None to remove binding
    * @param actionNamespace the namespace for actions in model 
    */
  bindModel(model: import('../Gio').MenuModel | null, actionNamespace: string | null): void;
  /**
    * Returns the constraint for placing this popover. See Gtk.Popover.set_constrain_to().
    * @returns the constraint for placing this popover. 
    */
  getConstrainTo(): import('../Gtk').PopoverConstraint;
  /**
    * Gets the widget that should be set as the default while the popover is shown.
    * @returns the default widget, or None if there is none 
    */
  getDefaultWidget(): import('../Gtk').Widget | null;
  /**
    * Returns whether the popover is modal, see Gtk.Popover.set_modal to see the implications of this.
    * @returns True if self is modal 
    */
  getModal(): boolean;
  /**
    * If a rectangle to point to has been set, this function will return True and fill in rect with such rectangle, otherwise it will return False and fill in rect with the attached widget coordinates.
    * @returns True if a rectangle to point to was set.  rect:location to store the rectangle 
    */
  getPointingTo(): [boolean, import('../Gdk').Rectangle];
  /**
    * Returns the preferred position of self.
    * @returns The preferred position. 
    */
  getPosition(): import('../Gtk').PositionType;
  /**
    * Returns the widget self is currently attached to
    * @returns a Gtk.Widget 
    */
  getRelativeTo(): import('../Gtk').Widget;
  /**
    * Returns whether show/hide transitions are enabled on this popover.
    * @returns True if the show and hide transitions of the given popover are enabled, False otherwise. 
    */
  getTransitionsEnabled(): boolean;
  /**
    * Pops self down.This is different than a Gtk.Widget.hide() call in that it shows the popover with a transition. If you want to hide the popover without a transition, use Gtk.Widget.hide(). 
    */
  popdown(): void;
  /**
    * Pops self up. This is different than a Gtk.Widget.show() call in that it shows the popover with a transition. If you want to show the popover without a transition, use Gtk.Widget.show(). 
    */
  popup(): void;
  /**
    * Sets a constraint for positioning this popover.
    * @param constraint the new constraint 
    */
  setConstrainTo(constraint: import('../Gtk').PopoverConstraint): void;
  /**
    * Sets the widget that should be set as default widget while the popover is shown (see Gtk.Window.set_default()). Gtk.Popover remembers the previous default widget and reestablishes it when the popover is dismissed.
    * @param widget the new default widget, or None 
    */
  setDefaultWidget(widget: import('../Gtk').Widget | null): void;
  /**
    * Sets whether self is modal, a modal popover will grab all input within the toplevel and grab the keyboard focus on it when being displayed. Clicking outside the popover area or pressing Esc will dismiss the popover and ungrab input.
    * @param modal True to make popover claim all input within the toplevel 
    */
  setModal(modal: boolean): void;
  /**
    * Sets the rectangle that self will point to, in the coordinate space of the widget self is attached to, see Gtk.Popover.set_relative_to().
    * @param rect rectangle to point to 
    */
  setPointingTo(rect: import('../Gdk').Rectangle): void;
  /**
    * Sets the preferred position for self to appear. If the self is currently visible, it will be immediately updated.
    * @param position preferred popover position 
    */
  setPosition(position: import('../Gtk').PositionType): void;
  /**
    * Sets a new widget to be attached to self. If self is visible, the position will be updated.
    * @param relativeTo a Gtk.Widget 
    */
  setRelativeTo(relativeTo: import('../Gtk').Widget | null): void;
  /**
    * Sets whether show/hide transitions are enabled on this popover
    * @param transitionsEnabled Whether transitions are enabled 
    */
  setTransitionsEnabled(transitionsEnabled: boolean): void;
  /**
    * Constraint for the popover position 
    */
  constrainTo: import('../Gtk').PopoverConstraint;
  /**
    * Whether the popover is modal 
    */
  modal: boolean;
  /**
    * Rectangle the bubble window points to 
    */
  pointingTo: import('../Gdk').Rectangle;
  /**
    * Position to place the bubble window 
    */
  position: import('../Gtk').PositionType;
  /**
    * Widget the bubble window points to 
    */
  relativeTo: import('../Gtk').Widget;
  /**
    * Whether show/hide transitions are enabled or not deprecated 
    */
  transitionsEnabled: boolean;
}

