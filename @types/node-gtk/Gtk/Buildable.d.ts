import * as GObject from '../GObject';
export declare interface Buildable extends GObject.GInterface { }

/**
  * Gtk.Buildable allows objects to extend and customize their deserialization
from GtkBuilder UI descriptions.
The interface includes methods for setting names and properties of objects,
parsing custom tags and constructing child objects. 
  */
export declare interface Buildable {
  /**
    * Adds a child to self. type is an optional string describing how the child should be added.
    * @param builder a Gtk.Builder
    * @param child child to add
    * @param type kind of child or None 
    */
  addChild(builder: import('../Gtk').Builder, child: import('../GObject').Object, type: string | null): void;
  /**
    * Constructs a child of self with the name name.
    * @param builder Gtk.Builder used to construct this object
    * @param name name of child to construct
    * @returns the constructed child 
    */
  constructChild(builder: import('../Gtk').Builder, name: string): import('../GObject').Object;
  /**
    * This is similar to Gtk.Buildable.parser_finished() but is called once for each custom tag handled by the self.
    * @param builder a Gtk.Builder
    * @param child child object or None for non-child tags
    * @param tagname the name of the tag
    * @param data user data created in custom_tag_start 
    */
  customFinished(builder: import('../Gtk').Builder, child: import('../GObject').Object | null, tagname: string, data: Object | null): void;
  /**
    * This is called at the end of each custom element handled by the buildable.
    * @param builder Gtk.Builder used to construct this object
    * @param child child object or None for non-child tags
    * @param tagname name of tag
    * @param data user data that will be passed in to parser functions 
    */
  customTagEnd(builder: import('../Gtk').Builder, child: import('../GObject').Object | null, tagname: string, data: Object | null): void;
  /**
    * This is called for each unknown element under <child>.
    * @param builder a Gtk.Builder used to construct this object
    * @param child child object or None for non-child tags
    * @param tagname name of tag
    * @returns True if a object has a custom implementation, False if it doesn’t.   parser:a GLib.MarkupParser to fill in data:return location for user data that will be passed in to parser functions 
    */
  customTagStart(builder: import('../Gtk').Builder, child: import('../GObject').Object | null, tagname: string): [boolean, import('../GLib').MarkupParser, Object];
  /**
    * Get the internal child called childname of the self object.
    * @param builder a Gtk.Builder
    * @param childname name of child
    * @returns the internal child of the buildable object 
    */
  getInternalChild(builder: import('../Gtk').Builder, childname: string): import('../GObject').Object;
  /**
    * Gets the name of the self object.
    * @returns the name set with Gtk.Buildable.set_name() 
    */
  getName(): string;
  /**
    * Called when the builder finishes the parsing of a GtkBuilder UI definition. Note that this will be called once for each time Gtk.Builder.add_from_file() or Gtk.Builder.add_from_string() is called on a builder.
    * @param builder a Gtk.Builder 
    */
  parserFinished(builder: import('../Gtk').Builder): void;
  /**
    * Sets the property name name to value on the self object.
    * @param builder a Gtk.Builder
    * @param name name of property
    * @param value value of property 
    */
  setBuildableProperty(builder: import('../Gtk').Builder, name: string, value: import('../GObject').Value): void;
  /**
    * Sets the name of the self object.
    * @param name name to set 
    */
  setName(name: string): void;
}

