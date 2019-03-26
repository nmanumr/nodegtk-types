import * as Gtk from '../Gtk';
export declare interface Arrow extends Gtk.Misc { }

/**
  * Gtk.Arrow should be used to draw simple arrows that need to point in
one of the four cardinal directions (up, down, left, or right).  The
style of the arrow can be one of shadow in, shadow out, etched in, or
etched out.  Note that these directions and style types may be
amended in versions of GTK+ to come. 
  */
export declare class Arrow {
  /**
    * Creates a new Gtk.Arrow widget.
    * @param arrowType a valid Gtk.ArrowType.
    * @param shadowType a valid Gtk.ShadowType.
    * @returns the new Gtk.Arrow widget. 
    */
  static new(arrowType: import('../Gtk').ArrowType, shadowType: import('../Gtk').ShadowType): import('../Gtk').Widget;
  /**
    * Sets the direction and style of the Gtk.Arrow, self.
    * @param arrowType a valid Gtk.ArrowType.
    * @param shadowType a valid Gtk.ShadowType. 
    */
  set(arrowType: import('../Gtk').ArrowType, shadowType: import('../Gtk').ShadowType): void;
  /**
    * The direction the arrow should point 
    */
  arrowType: import('../Gtk').ArrowType;
  /**
    * Appearance of the shadow surrounding the arrow 
    */
  shadowType: import('../Gtk').ShadowType;
}

