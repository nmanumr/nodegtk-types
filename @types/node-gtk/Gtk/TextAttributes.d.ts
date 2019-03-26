/**
  * Using Gtk.TextAttributes directly should rarely be necessary.
It’s primarily useful with Gtk.TextIter.get_attributes().
As with most GTK+ structs, the fields in this struct should only
be read, never modified directly. 
  */
export declare class TextAttributes {
  /**
    * Creates a Gtk.TextAttributes, which describes a set of properties on some text.
    * @returns a new Gtk.TextAttributes, free with Gtk.TextAttributes.unref(). 
    */
  static new(): import('../Gtk').TextAttributes;
  /**
    * Copies self and returns a new Gtk.TextAttributes.
    * @returns a copy of self, free with Gtk.TextAttributes.unref() 
    */
  copy(): import('../Gtk').TextAttributes;
  /**
    * Copies the values from self to dest so that dest has the same values as self. Frees existing values in dest.
    * @param dest another Gtk.TextAttributes 
    */
  copyValues(dest: import('../Gtk').TextAttributes): void;
  /**
    * Increments the reference count on self.
    * @returns the Gtk.TextAttributes that were passed in 
    */
  ref(): import('../Gtk').TextAttributes;
  /**
    * Decrements the reference count on self, freeing the structure if the reference count reaches 0. 
    */
  unref(): void;
}

