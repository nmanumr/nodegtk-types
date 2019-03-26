/**
  * A utility type for constructing container-type GLib.Variant instances. 
  */
export declare class VariantBuilder {
  /**
    * Allocates and initialises a new GLib.VariantBuilder.
    * @param type a container type
    * @returns a GLib.VariantBuilder 
    */
  static new(type: import('../GLib').VariantType): import('../GLib').VariantBuilder;
  /**
    * Adds value to self.
    * @param value a GLib.Variant 
    */
  addValue(value: import('../GLib').Variant): void;
  /**
    * Closes the subcontainer inside the given self that was opened by the most recent call to GLib.VariantBuilder.open(). 
    */
  close(): void;
  /**
    * Ends the builder process and returns the constructed value.
    * @returns a new, floating, GLib.Variant 
    */
  end(): import('../GLib').Variant;
  /**
    * Opens a subcontainer inside the given self.  When done adding items to the subcontainer, GLib.VariantBuilder.close() must be called. type is the type of the container: so to build a tuple of several values, type must include the tuple itself.
    * @param type the GLib.VariantType of the container 
    */
  open(type: import('../GLib').VariantType): void;
  /**
    * Increases the reference count on self.
    * @returns a new reference to self 
    */
  ref(): import('../GLib').VariantBuilder;
  /**
    * Decreases the reference count on self. 
    */
  unref(): void;
}

