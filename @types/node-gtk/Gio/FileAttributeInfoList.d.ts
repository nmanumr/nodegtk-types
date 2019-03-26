/**
  * Acts as a lightweight registry for possible valid file attributes.
The registry stores Key-Value pair formats as Gio.FileAttributeInfos. 
  */
export declare class FileAttributeInfoList {
  /**
    * Creates a new file attribute info list.
    * @returns a Gio.FileAttributeInfoList. 
    */
  static new(): import('../Gio').FileAttributeInfoList;
  /**
    * Adds a new attribute with name to the self, setting its type and flags.
    * @param name the name of the attribute to add.
    * @param type the Gio.FileAttributeType for the attribute.
    * @param flags Gio.FileAttributeInfoFlags for the attribute. 
    */
  add(name: string, type: import('../Gio').FileAttributeType, flags: import('../Gio').FileAttributeInfoFlags): void;
  /**
    * Makes a duplicate of a file attribute info list.
    * @returns a copy of the given self. 
    */
  dup(): import('../Gio').FileAttributeInfoList;
  /**
    * Gets the file attribute with the name name from self.
    * @param name the name of the attribute to lookup.
    * @returns a Gio.FileAttributeInfo for the name, or None if an attribute isn’t found. 
    */
  lookup(name: string): import('../Gio').FileAttributeInfo;
  /**
    * References a file attribute info list.
    * @returns Gio.FileAttributeInfoList or None on error. 
    */
  ref(): import('../Gio').FileAttributeInfoList;
  /**
    * Removes a reference from the given self. If the reference count falls to zero, the self is deleted. 
    */
  unref(): void;
}

