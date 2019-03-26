import * as GObject from '../GObject';

/**
  * Atk.Component should be implemented by most if not all UI elements
with an actual on-screen presence, i.e. components which can be
said to have a screen-coordinate bounding box.  Virtually all
widgets will need to have Atk.Component implementations provided
for their corresponding Atk.Object class.  In short, only UI
elements which are *not* GUI elements will omit this ATK interface. 
  */
export declare interface Component extends GObject.GInterface {
  /**
    * Checks whether the specified point is within the extent of the self.
    * @param x x coordinate
    * @param y y coordinate
    * @param coordType specifies whether the coordinates are relative to the screen or to the components top level window
    * @returns True or False indicating whether the specified point is within the extent of the self or not 
    */
  contains(x: number, y: number, coordType: import('../Atk').CoordType): boolean;
  /**
    * Returns the alpha value (i.e. the opacity) for this self, on a scale from 0 (fully transparent) to 1.0 (fully opaque).
    * @returns An alpha value from 0 to 1.0, inclusive. 
    */
  getAlpha(): number;
  /**
    * Gets the rectangle which gives the extent of the self.
    * @param coordType specifies whether the coordinates are relative to the screen or to the components top level window
    * @returns x:address of int to put x coordinate y:address of int to put y coordinate width:address of int to put width height:address of int to put height 
    */
  getExtents(coordType: import('../Atk').CoordType): [number, number, number, number];
  /**
    * Gets the layer of the component.
    * @returns an Atk.Layer which is the layer of the component 
    */
  getLayer(): import('../Atk').Layer;
  /**
    * Gets the zorder of the component. The value GObject.G_MININT will be returned if the layer of the component is not Atk.Layer.MDI or Atk.Layer.WINDOW.
    * @returns a int which is the zorder of the component, i.e. the depth at which the component is shown in relation to other components in the same container. 
    */
  getMdiZorder(): number;
  /**
    * Gets the position of self in the form of a point specifying self’s top-left corner.
    * @param coordType specifies whether the coordinates are relative to the screen or to the components top level window
    * @returns x:address of int to put x coordinate position y:address of int to put y coordinate position 
    */
  getPosition(coordType: import('../Atk').CoordType): [number, number];
  /**
    * Gets the size of the self in terms of width and height.
    * @returns width:address of int to put width of self height:address of int to put height of self 
    */
  getSize(): [number, number];
  /**
    * Grabs focus for this self.
    * @returns True if successful, False otherwise. 
    */
  grabFocus(): boolean;
  /**
    * Gets a reference to the accessible child, if one exists, at the coordinate point specified by x and y.
    * @param x x coordinate
    * @param y y coordinate
    * @param coordType specifies whether the coordinates are relative to the screen or to the components top level window
    * @returns a reference to the accessible child, if one exists 
    */
  refAccessibleAtPoint(x: number, y: number, coordType: import('../Atk').CoordType): import('../Atk').Object | null;
  /**
    * Remove the handler specified by handler_id from the list of functions to be executed when this object receives focus events (in or out).
    * @param handlerId the handler id of the focus handler to be removed from self 
    */
  removeFocusHandler(handlerId: number): void;
  /**
    * Makes self visible on the screen by scrolling all necessary parents.
    * @param type specify where the object should be made visible.
    * @returns whether scrolling was successful. 
    */
  scrollTo(type: import('../Atk').ScrollType): boolean;
  /**
    * Makes an object visible on the screen at a given position by scrolling all necessary parents.
    * @param coords specify whether coordinates are relative to the screen or to the parent object.
    * @param x x-position where to scroll to
    * @param y y-position where to scroll to
    * @returns whether scrolling was successful. 
    */
  scrollToPoint(coords: import('../Atk').CoordType, x: number, y: number): boolean;
  /**
    * Sets the extents of self.
    * @param x x coordinate
    * @param y y coordinate
    * @param width width to set for self
    * @param height height to set for self
    * @param coordType specifies whether the coordinates are relative to the screen or to the components top level window
    * @returns True or False whether the extents were set or not 
    */
  setExtents(x: number, y: number, width: number, height: number, coordType: import('../Atk').CoordType): boolean;
  /**
    * Sets the position of self.
    * @param x x coordinate
    * @param y y coordinate
    * @param coordType specifies whether the coordinates are relative to the screen or to the component’s top level window
    * @returns True or False whether or not the position was set or not 
    */
  setPosition(x: number, y: number, coordType: import('../Atk').CoordType): boolean;
  /**
    * Set the size of the self in terms of width and height.
    * @param width width to set for self
    * @param height height to set for self
    * @returns True or False whether the size was set or not 
    */
  setSize(width: number, height: number): boolean;
}

