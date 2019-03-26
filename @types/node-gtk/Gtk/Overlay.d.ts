import * as Gtk from '../Gtk';
export declare interface Overlay extends Gtk.Bin { }

/**
  * Gtk.Overlay is a container which contains a single main child, on top
of which it can place “overlay” widgets. The position of each overlay
widget is determined by its Gtk.Widget :halign and Gtk.Widget :valign
properties. E.g. a widget with both alignments set to Gtk.Align.START
will be placed at the top left corner of the Gtk.Overlay container,
whereas an overlay with halign set to Gtk.Align.CENTER and valign set
to Gtk.Align.END will be placed a the bottom edge of the Gtk.Overlay,
horizontally centered. The position can be adjusted by setting the margin
properties of the child to non-zero values. 
  */
export declare class Overlay {
  /**
    * Creates a new Gtk.Overlay.
    * @returns a new Gtk.Overlay object. 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Adds widget to self.
    * @param widget a Gtk.Widget to be added to the container 
    */
  addOverlay(widget: import('../Gtk').Widget): void;
  /**
    * Convenience function to get the value of the Gtk.Overlay :pass-through child property for widget.
    * @param widget an overlay child of Gtk.Overlay
    * @returns whether the widget is a pass through child. 
    */
  getOverlayPassThrough(widget: import('../Gtk').Widget): boolean;
  /**
    * Moves child to a new index in the list of self children. The list contains overlays in the order that these were added to self.
    * @param child the overlaid Gtk.Widget to move
    * @param position the new index for child in the list of overlay children of self, starting from 0. If negative, indicates the end of the list 
    */
  reorderOverlay(child: import('../Gtk').Widget, position: number): void;
  /**
    * Convenience function to set the value of the Gtk.Overlay :pass-through child property for widget.
    * @param widget an overlay child of Gtk.Overlay
    * @param passThrough whether the child should pass the input through 
    */
  setOverlayPassThrough(widget: import('../Gtk').Widget, passThrough: boolean): void;
  ;
}

