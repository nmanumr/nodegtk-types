/**
  * The Pango.Item structure stores information about a segment of text. 
  */
export declare class Item {
  /**
    * Creates a new Pango.Item structure initialized to default values.
    * @returns the newly allocated Pango.Item, which should be freed with Pango.Item.free(). 
    */
  static new(): import('../Pango').Item;
  /**
    * Copy an existing Pango.Item structure.
    * @returns the newly allocated Pango.Item, which should be freed with Pango.Item.free(), or None if self was None. 
    */
  copy(): import('../Pango').Item | null;
  /**
    * Free a Pango.Item and all associated memory. 
    */
  free(): void;
  /**
    * Modifies self to cover only the text after split_index, and returns a new item that covers the text before split_index that used to be in self. You can think of split_index as the length of the returned item. split_index may not be 0, and it may not be greater than or equal to the length of self (that is, there must be at least one byte assigned to each item, you can’t create a zero-length item). split_offset is the length of the first item in chars, and must be provided because the text used to generate the item isn’t available, so Pango.Item.split() can’t count the str length of the split items itself.
    * @param splitIndex byte index of position to split item, relative to the start of the item
    * @param splitOffset number of chars between start of self and split_index
    * @returns new item representing text before split_index, which should be freed with Pango.Item.free(). 
    */
  split(splitIndex: number, splitOffset: number): import('../Pango').Item;
}

