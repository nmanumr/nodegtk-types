import * as Gtk from '../Gtk';
export declare interface GestureMultiPress extends Gtk.GestureSingle { }

/**
  * Gtk.GestureMultiPress is a Gtk.Gesture implementation able to recognize
multiple clicks on a nearby zone, which can be listened for through the
Gtk.GestureMultiPress ::pressed signal. Whenever time or distance between
clicks exceed the GTK+ defaults, Gtk.GestureMultiPress ::stopped is emitted,
and the click counter is reset. 
  */
export declare class GestureMultiPress {
  /**
    * Returns a newly created Gtk.Gesture that recognizes single and multiple presses.
    * @param widget a Gtk.Widget
    * @returns a newly created Gtk.GestureMultiPress 
    */
  static new(widget: import('../Gtk').Widget): import('../Gtk').Gesture;
  /**
    * If an area was set through Gtk.GestureMultiPress.set_area(), this function will return True and fill in rect with the press area. See Gtk.GestureMultiPress.set_area() for more details on what the press area represents.
    * @returns True if rect was filled with the press area  rect:return location for the press area 
    */
  getArea(): [boolean, import('../Gdk').Rectangle];
  /**
    * If rect is non-None, the press area will be checked to be confined within the rectangle, otherwise the button count will be reset so the press is seen as being the first one. If rect is None, the area will be reset to an unrestricted state.
    * @param rect rectangle to receive coordinates on 
    */
  setArea(rect: import('../Gdk').Rectangle | null): void;
  ;
}

