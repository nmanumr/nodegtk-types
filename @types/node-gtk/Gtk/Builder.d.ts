import * as GObject from '../GObject';
export declare interface Builder extends GObject.Object { }

/**
  * A Gtk.Builder is an auxiliary object that reads textual descriptions
of a user interface and instantiates the described objects. To create
a Gtk.Builder from a user interface description, call
Gtk.Builder.new_from_file(), Gtk.Builder.new_from_resource() or
Gtk.Builder.new_from_string(). 
  */
export declare class Builder {
  /**
    * Creates a new empty builder object.
    * @returns a new (empty) Gtk.Builder object 
    */
  static new(): import('../Gtk').Builder;
  /**
    * Builds the GtkBuilder UI definition in the file filename.
    * @param filename filename of user interface description file
    * @returns a Gtk.Builder containing the described interface 
    */
  static newFromFile(filename: string): import('../Gtk').Builder;
  /**
    * Builds the GtkBuilder UI definition at resource_path.
    * @param resourcePath a Gio.Resource resource path
    * @returns a Gtk.Builder containing the described interface 
    */
  static newFromResource(resourcePath: string): import('../Gtk').Builder;
  /**
    * Builds the user interface described by string (in the GtkBuilder UI definition format).
    * @param string a user interface (XML) description
    * @param length the length of string, or -1
    * @returns a Gtk.Builder containing the interface described by string 
    */
  static newFromString(string: string, length: number): import('../Gtk').Builder;
  /**
    * Adds the callback_symbol to the scope of self under the given callback_name.
    * @param callbackName The name of the callback, as expected in the XML
    * @param callbackSymbol The callback pointer 
    */
  addCallbackSymbol(callbackName: string, callbackSymbol: import('../GObject').callback): void;
  /**
    * Parses a file containing a GtkBuilder UI definition and merges it with the current contents of self.
    * @param filename the name of the file to parse
    * @returns A positive value on success, 0 if an error occurred 
    */
  addFromFile(filename: string): number;
  /**
    * Parses a resource file containing a GtkBuilder UI definition and merges it with the current contents of self.
    * @param resourcePath the path of the resource file to parse
    * @returns A positive value on success, 0 if an error occurred 
    */
  addFromResource(resourcePath: string): number;
  /**
    * Parses a string containing a GtkBuilder UI definition and merges it with the current contents of self.
    * @param buffer the string to parse
    * @param length the length of buffer (may be -1 if buffer is nul-terminated)
    * @returns A positive value on success, 0 if an error occurred 
    */
  addFromString(buffer: string, length: number): number;
  /**
    * Parses a file containing a GtkBuilder UI definition building only the requested objects and merges them with the current contents of self.
    * @param filename the name of the file to parse
    * @param objectIds nul-terminated array of objects to build
    * @returns A positive value on success, 0 if an error occurred 
    */
  addObjectsFromFile(filename: string, objectIds: string): number;
  /**
    * Parses a resource file containing a GtkBuilder UI definition building only the requested objects and merges them with the current contents of self.
    * @param resourcePath the path of the resource file to parse
    * @param objectIds nul-terminated array of objects to build
    * @returns A positive value on success, 0 if an error occurred 
    */
  addObjectsFromResource(resourcePath: string, objectIds: string): number;
  /**
    * Parses a string containing a GtkBuilder UI definition building only the requested objects and merges them with the current contents of self.
    * @param buffer the string to parse
    * @param objectIds array of objects to build
    * @returns A positive value on success, 0 if an error occurred 
    */
  addObjectsFromString(buffer: string, objectIds: string): number;
  /**
    * Connect signals specified by this builder to a name, handler mapping. 
    */
  connectSignals(): void;
  /**
    * This function can be thought of the interpreted language binding version of Gtk.Builder.connect_signals(), except that it does not require GModule.Module to function correctly.
    * @param func the function used to connect the signals
    * @param userData arbitrary data that will be passed to the connection function 
    */
  connectSignalsFull(func: import('../Gtk').builderConnectFunc, userData: Object | null): void;
  /**
    * Add object to the self object pool so it can be referenced just like any other object built by builder.
    * @param name the name of the object exposed to the builder
    * @param object the object to expose 
    */
  exposeObject(name: string, object: import('../GObject').Object): void;
  /**
    * Main private entry point for building composite container components from template XML.
    * @param widget the widget that is being extended
    * @param templateType the type that the template is for
    * @param buffer the string to parse
    * @param length the length of buffer (may be -1 if buffer is nul-terminated)
    * @returns A positive value on success, 0 if an error occurred 
    */
  extendWithTemplate(widget: import('../Gtk').Widget, templateType: import('../GObject').GType, buffer: string, length: number): number;
  /**
    * Gets the Gtk.Application associated with the builder.
    * @returns the application being used by the builder, or None 
    */
  getApplication(): import('../Gtk').Application | null;
  /**
    * Gets the object named name. Note that this function does not increment the reference count of the returned object.
    * @param name name of object to get
    * @returns the object named name or None if it could not be found in the object tree. 
    */
  getObject(name: string): import('../GObject').Object | null;
  /**
    * Gets all objects that have been constructed by self. Note that this function does not increment the reference counts of the returned objects.
    * @returns a newly-allocated GLib.SList containing all the objects constructed by the Gtk.Builder instance. It should be freed by g_slist_free() 
    */
  getObjects(): import('../GObject').Object[];
  /**
    * Gets the translation domain of self.
    * @returns the translation domain. This string is owned by the builder object and must not be modified or freed. 
    */
  getTranslationDomain(): string;
  /**
    * Looks up a type by name, using the virtual function that Gtk.Builder has for that purpose. This is mainly used when implementing the Gtk.Buildable interface on a type.
    * @param typeName type name to lookup
    * @returns the GObject.GType found for type_name or GObject.TYPE_INVALID if no type was found 
    */
  getTypeFromName(typeName: string): import('../GObject').GType;
  /**
    * Sets the application associated with self.
    * @param application a Gtk.Application 
    */
  setApplication(application: import('../Gtk').Application): void;
  /**
    * Sets the translation domain of self. See Gtk.Builder :translation-domain.
    * @param domain the translation domain or None 
    */
  setTranslationDomain(domain: string | null): void;
  /**
    * This function demarshals a value from a string. This function calls GObject.Value.init() on the value argument, so it need not be initialised beforehand.
    * @param pspec the GObject.ParamSpec for the property
    * @param string the string representation of the value
    * @returns True on success   value:the GObject.Value to store the result in 
    */
  valueFromString(pspec: import('../GObject').ParamSpec, string: string): [boolean, import('../GObject').Value];
  /**
    * Like Gtk.Builder.value_from_string(), this function demarshals a value from a string, but takes a GObject.GType instead of GObject.ParamSpec. This function calls GObject.Value.init() on the value argument, so it need not be initialised beforehand.
    * @param type the GObject.GType of the value
    * @param string the string representation of the value
    * @returns True on success   value:the GObject.Value to store the result in 
    */
  valueFromStringType(type: import('../GObject').GType, string: string): [boolean, import('../GObject').Value];
  /**
    * The translation domain used by gettext 
    */
  translationDomain: string;
}

