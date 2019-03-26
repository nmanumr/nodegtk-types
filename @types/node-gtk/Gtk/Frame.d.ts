import * as Gtk from '../Gtk';
export declare interface Frame extends Gtk.Bin { }

/**
  * The frame widget is a bin that surrounds its child with a decorative
frame and an optional label. If present, the label is drawn in a gap
in the top side of the frame. The position of the label can be
controlled with Gtk.Frame.set_label_align(). 
  */
export declare class Frame {
  /**
    * Creates a new Gtk.Frame, with optional label label. If label is None, the label is omitted.
    * @param label the text to use as the label of the frame
    * @returns a new Gtk.Frame widget 
    */
  static new(label: string | null): import('../Gtk').Widget;
  /**
    * If the frame’s label widget is a Gtk.Label, returns the text in the label widget. (The frame will have a Gtk.Label for the label widget if a non-None argument was passed to Gtk.Frame.new().)
    * @returns the text in the label, or None if there was no label widget or the lable widget was not a Gtk.Label. This string is owned by GTK+ and must not be modified or freed. 
    */
  getLabel(): string | null;
  /**
    * Retrieves the X and Y alignment of the frame’s label. See Gtk.Frame.set_label_align().
    * @returns xalign:location to store X alignment of frame’s label, or None yalign:location to store X alignment of frame’s label, or None 
    */
  getLabelAlign(): [number, number];
  /**
    * Retrieves the label widget for the frame. See Gtk.Frame.set_label_widget().
    * @returns the label widget, or None if there is none. 
    */
  getLabelWidget(): import('../Gtk').Widget | null;
  /**
    * Retrieves the shadow type of the frame. See Gtk.Frame.set_shadow_type().
    * @returns the current shadow type of the frame. 
    */
  getShadowType(): import('../Gtk').ShadowType;
  /**
    * Removes the current Gtk.Frame :label-widget. If label is not None, creates a new Gtk.Label with that text and adds it as the Gtk.Frame :label-widget.
    * @param label the text to use as the label of the frame 
    */
  setLabel(label: string | null): void;
  /**
    * Sets the alignment of the frame widget’s label. The default values for a newly created frame are 0.0 and 0.5.
    * @param xalign The position of the label along the top edge of the widget. A value of 0.0 represents left alignment; 1.0 represents right alignment.
    * @param yalign The y alignment of the label. A value of 0.0 aligns under the frame; 1.0 aligns above the frame. If the values are exactly 0.0 or 1.0 the gap in the frame won’t be painted because the label will be completely above or below the frame. 
    */
  setLabelAlign(xalign: number, yalign: number): void;
  /**
    * Sets the Gtk.Frame :label-widget for the frame. This is the widget that will appear embedded in the top edge of the frame as a title.
    * @param labelWidget the new label widget 
    */
  setLabelWidget(labelWidget: import('../Gtk').Widget | null): void;
  /**
    * Sets the Gtk.Frame :shadow-type for self, i.e. whether it is drawn without (Gtk.ShadowType.NONE) or with (other values) a visible border. Values other than Gtk.ShadowType.NONE are treated identically by Gtk.Frame. The chosen type is applied by removing or adding the .flat class to the CSS node named border.
    * @param type the new Gtk.ShadowType 
    */
  setShadowType(type: import('../Gtk').ShadowType): void;
  /**
    * Text of the frame’s label 
    */
  label: string;
  /**
    * A widget to display in place of the usual frame label 
    */
  labelWidget: import('../Gtk').Widget;
  /**
    * The horizontal alignment of the label 
    */
  labelXalign: number;
  /**
    * The vertical alignment of the label 
    */
  labelYalign: number;
  /**
    * Appearance of the frame border 
    */
  shadowType: import('../Gtk').ShadowType;
}

