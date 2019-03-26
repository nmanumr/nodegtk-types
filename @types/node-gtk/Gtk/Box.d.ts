import * as Gtk from '../Gtk';
export declare interface Box extends Gtk.Container, Gtk.Orientable { }

/**
  * The Gtk.Box widget arranges child widgets into a single row or column,
depending upon the value of its Gtk.Orientable :orientation property. Within
the other dimension, all children are allocated the same size. Of course,
the Gtk.Widget :halign and Gtk.Widget :valign properties can be used on
the children to influence their allocation. 
  */
export declare class Box {
  /**
    * Creates a new Gtk.Box.
    * @param orientation the box’s orientation.
    * @param spacing the number of pixels to place by default between children.
    * @returns a new Gtk.Box. 
    */
  static new(orientation: import('../Gtk').Orientation, spacing: number): import('../Gtk').Widget;
  /**
    * Gets the value set by Gtk.Box.set_baseline_position().
    * @returns the baseline position 
    */
  getBaselinePosition(): import('../Gtk').BaselinePosition;
  /**
    * Retrieves the center widget of the box.
    * @returns the center widget or None in case no center widget is set. 
    */
  getCenterWidget(): import('../Gtk').Widget | null;
  /**
    * Returns whether the box is homogeneous (all children are the same size). See Gtk.Box.set_homogeneous().
    * @returns True if the box is homogeneous. 
    */
  getHomogeneous(): boolean;
  /**
    * Gets the value set by Gtk.Box.set_spacing().
    * @returns spacing between children 
    */
  getSpacing(): number;
  /**
    * Adds child to self, packed with reference to the end of self. The child is packed after (away from end of) any other child packed with reference to the end of self.
    * @param child the Gtk.Widget to be added to self
    * @param expand True if the new child is to be given extra space allocated to self. The extra space will be divided evenly between all children of self that use this option
    * @param fill True if space given to child by the expand option is actually allocated to child, rather than just padding it.  This parameter has no effect if expand is set to False.  A child is always allocated the full height of a horizontal Gtk.Box and the full width of a vertical Gtk.Box.  This option affects the other dimension
    * @param padding extra space in pixels to put between this child and its neighbors, over and above the global amount specified by Gtk.Box :spacing property.  If child is a widget at one of the reference ends of self, then padding pixels are also put between child and the reference edge of self 
    */
  packEnd(child: import('../Gtk').Widget, expand: boolean, fill: boolean, padding: number): void;
  /**
    * Adds child to self, packed with reference to the start of self. The child is packed after any other child packed with reference to the start of self.
    * @param child the Gtk.Widget to be added to self
    * @param expand True if the new child is to be given extra space allocated to self. The extra space will be divided evenly between all children that use this option
    * @param fill True if space given to child by the expand option is actually allocated to child, rather than just padding it.  This parameter has no effect if expand is set to False.  A child is always allocated the full height of a horizontal Gtk.Box and the full width of a vertical Gtk.Box. This option affects the other dimension
    * @param padding extra space in pixels to put between this child and its neighbors, over and above the global amount specified by Gtk.Box :spacing property.  If child is a widget at one of the reference ends of self, then padding pixels are also put between child and the reference edge of self 
    */
  packStart(child: import('../Gtk').Widget, expand: boolean, fill: boolean, padding: number): void;
  /**
    * Obtains information about how child is packed into self.
    * @param child the Gtk.Widget of the child to query
    * @returns expand:pointer to return location for expand child property fill:pointer to return location for fill child property padding:pointer to return location for padding child property pack_type:pointer to return location for pack-type child property 
    */
  queryChildPacking(child: import('../Gtk').Widget): [boolean, boolean, number, import('../Gtk').PackType];
  /**
    * Moves child to a new position in the list of self children. The list contains widgets packed Gtk.PackType.START as well as widgets packed Gtk.PackType.END, in the order that these widgets were added to self.
    * @param child the Gtk.Widget to move
    * @param position the new position for child in the list of children of self, starting from 0. If negative, indicates the end of the list 
    */
  reorderChild(child: import('../Gtk').Widget, position: number): void;
  /**
    * Sets the baseline position of a box. This affects only horizontal boxes with at least one baseline aligned child. If there is more vertical space available than requested, and the baseline is not allocated by the parent then position is used to allocate the baseline wrt the extra space available.
    * @param position a Gtk.BaselinePosition 
    */
  setBaselinePosition(position: import('../Gtk').BaselinePosition): void;
  /**
    * Sets a center widget; that is a child widget that will be centered with respect to the full width of the box, even if the children at either side take up different amounts of space.
    * @param widget the widget to center 
    */
  setCenterWidget(widget: import('../Gtk').Widget | null): void;
  /**
    * Sets the way child is packed into self.
    * @param child the Gtk.Widget of the child to set
    * @param expand the new value of the expand child property
    * @param fill the new value of the fill child property
    * @param padding the new value of the padding child property
    * @param packType the new value of the pack-type child property 
    */
  setChildPacking(child: import('../Gtk').Widget, expand: boolean, fill: boolean, padding: number, packType: import('../Gtk').PackType): void;
  /**
    * Sets the Gtk.Box :homogeneous property of self, controlling whether or not all children of self are given equal space in the box.
    * @param homogeneous a boolean value, True to create equal allotments, False for variable allotments 
    */
  setHomogeneous(homogeneous: boolean): void;
  /**
    * Sets the Gtk.Box :spacing property of self, which is the number of pixels to place between children of self.
    * @param spacing the number of pixels to put between children 
    */
  setSpacing(spacing: number): void;
  /**
    * The position of the baseline aligned widgets if extra space is available 
    */
  baselinePosition: import('../Gtk').BaselinePosition;
  /**
    * Whether the children should all be the same size 
    */
  homogeneous: boolean;
  /**
    * The amount of space between children 
    */
  spacing: number;
}

