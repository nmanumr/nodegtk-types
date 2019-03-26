/**
  * Gio.IOExtensionPoint is an opaque data structure and can only be accessed
using the following functions. 
  */
export declare class IOExtensionPoint {
  /**
    * Registers type as extension for the extension point with name extension_point_name.
    * @param extensionPointName the name of the extension point
    * @param type the GObject.GType to register as extension
    * @param extensionName the name for the extension
    * @param priority the priority for the extension
    * @returns a Gio.IOExtension object for GObject.GType 
    */
  static implement(extensionPointName: string, type: import('../GObject').GType, extensionName: string, priority: number): import('../Gio').IOExtension;
  /**
    * Looks up an existing extension point.
    * @param name the name of the extension point
    * @returns the Gio.IOExtensionPoint, or None if there is no registered extension point with the given name. 
    */
  static lookup(name: string): import('../Gio').IOExtensionPoint;
  /**
    * Registers an extension point.
    * @param name The name of the extension point
    * @returns the new Gio.IOExtensionPoint. This object is owned by GIO and should not be freed. 
    */
  static register(name: string): import('../Gio').IOExtensionPoint;
  /**
    * Finds a Gio.IOExtension for an extension point by name.
    * @param name the name of the extension to get
    * @returns the Gio.IOExtension for self that has the given name, or None if there is no extension with that name 
    */
  getExtensionByName(name: string): import('../Gio').IOExtension;
  /**
    * Gets a list of all extensions that implement this extension point. The list is sorted by priority, beginning with the highest priority.
    * @returns a GLib.List of Gio.IOExtensions. The list is owned by GIO and should not be modified. 
    */
  getExtensions(): import('../Gio').IOExtension[];
  /**
    * Gets the required type for self.
    * @returns the GObject.GType that all implementations must have, or GObject.TYPE_INVALID if the extension point has no required type 
    */
  getRequiredType(): import('../GObject').GType;
  /**
    * Sets the required type for self to type. All implementations must henceforth have this type.
    * @param type the GObject.GType to require 
    */
  setRequiredType(type: import('../GObject').GType): void;
}

