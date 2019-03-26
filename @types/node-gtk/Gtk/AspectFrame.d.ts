import * as Gtk from '../Gtk';
export declare interface AspectFrame extends Gtk.Frame { }

/**
  * The Gtk.AspectFrame is useful when you want
pack a widget so that it can resize but always retains
the same aspect ratio. For instance, one might be
drawing a small preview of a larger image. Gtk.AspectFrame
derives from Gtk.Frame, so it can draw a label and
a frame around the child. The frame will be
“shrink-wrapped” to the size of the child. 
  */
export declare class AspectFrame {
  /**
    * Create a new Gtk.AspectFrame.
    * @param label Label text.
    * @param xalign Horizontal alignment of the child within the allocation of the Gtk.AspectFrame. This ranges from 0.0 (left aligned) to 1.0 (right aligned)
    * @param yalign Vertical alignment of the child within the allocation of the Gtk.AspectFrame. This ranges from 0.0 (top aligned) to 1.0 (bottom aligned)
    * @param ratio The desired aspect ratio.
    * @param obeyChild If True, ratio is ignored, and the aspect ratio is taken from the requistion of the child.
    * @returns the new Gtk.AspectFrame. 
    */
  static new(label: string | null, xalign: number, yalign: number, ratio: number, obeyChild: boolean): import('../Gtk').Widget;
  /**
    * Set parameters for an existing Gtk.AspectFrame.
    * @param xalign Horizontal alignment of the child within the allocation of the Gtk.AspectFrame. This ranges from 0.0 (left aligned) to 1.0 (right aligned)
    * @param yalign Vertical alignment of the child within the allocation of the Gtk.AspectFrame. This ranges from 0.0 (top aligned) to 1.0 (bottom aligned)
    * @param ratio The desired aspect ratio.
    * @param obeyChild If True, ratio is ignored, and the aspect ratio is taken from the requistion of the child. 
    */
  set(xalign: number, yalign: number, ratio: number, obeyChild: boolean): void;
  /**
    * Force aspect ratio to match that of the frame’s child 
    */
  obeyChild: boolean;
  /**
    * Aspect ratio if obey_child is False 
    */
  ratio: number;
  /**
    * X alignment of the child 
    */
  xalign: number;
  /**
    * Y alignment of the child 
    */
  yalign: number;
}

