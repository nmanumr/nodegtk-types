/**
  * Gtk.WidgetPath is a boxed type that represents a widget hierarchy from
the topmost widget, typically a toplevel, to any child. This widget
path abstraction is used in Gtk.StyleContext on behalf of the real
widget in order to query style information. 
  */
export declare class WidgetPath {
  /**
    * Returns an empty widget path.
    * @returns A newly created, empty, Gtk.WidgetPath 
    */
  static new(): import('../Gtk').WidgetPath;
  /**
    * Appends the data from widget to the widget hierarchy represented by self. This function is a shortcut for adding information from widget to the given self. This includes setting the name or adding the style classes from widget.
    * @param widget the widget to append to the widget path
    * @returns the position where the data was inserted 
    */
  appendForWidget(widget: import('../Gtk').Widget): number;
  /**
    * Appends a widget type to the widget hierarchy represented by self.
    * @param type widget type to append
    * @returns the position where the element was inserted 
    */
  appendType(type: import('../GObject').GType): number;
  /**
    * Appends a widget type with all its siblings to the widget hierarchy represented by self. Using this function instead of Gtk.WidgetPath.append_type() will allow the CSS theming to use sibling matches in selectors and apply :nth-child() pseudo classes. In turn, it requires a lot more care in widget implementations as widgets need to make sure to call Gtk.Widget.reset_style() on all involved widgets when the siblings path changes.
    * @param siblings a widget path describing a list of siblings. This path may not contain any siblings itself and it must not be modified afterwards.
    * @param siblingIndex index into siblings for where the added element is positioned.
    * @returns the position where the element was inserted. 
    */
  appendWithSiblings(siblings: import('../Gtk').WidgetPath, siblingIndex: number): number;
  /**
    * Returns a copy of self
    * @returns a copy of self 
    */
  copy(): import('../Gtk').WidgetPath;
  /**
    * Decrements the reference count on self, freeing the structure if the reference count reaches 0. 
    */
  free(): void;
  /**
    * Returns the topmost object type, that is, the object type this path is representing.
    * @returns The object type 
    */
  getObjectType(): import('../GObject').GType;
  /**
    * Returns True if any of the parents of the widget represented in self is of type type, or any subtype of it.
    * @param type widget type to check in parents
    * @returns True if any parent is of type type 
    */
  hasParent(type: import('../GObject').GType): boolean;
  /**
    * Returns True if the widget type represented by this path is type, or a subtype of it.
    * @param type widget type to match
    * @returns True if the widget represented by self is of type type 
    */
  isType(type: import('../GObject').GType): boolean;
  /**
    * Adds the class name to the widget at position pos in the hierarchy defined in self. See Gtk.StyleContext.add_class().
    * @param pos position to modify, -1 for the path head
    * @param name a class name 
    */
  iterAddClass(pos: number, name: string): void;
  /**
    * Adds the region name to the widget at position pos in the hierarchy defined in self. See Gtk.StyleContext.add_region().
    * @param pos position to modify, -1 for the path head
    * @param name region name
    * @param flags flags affecting the region 
    */
  iterAddRegion(pos: number, name: string, flags: import('../Gtk').RegionFlags): void;
  /**
    * Removes all classes from the widget at position pos in the hierarchy defined in self.
    * @param pos position to modify, -1 for the path head 
    */
  iterClearClasses(pos: number): void;
  /**
    * Removes all regions from the widget at position pos in the hierarchy defined in self.
    * @param pos position to modify, -1 for the path head 
    */
  iterClearRegions(pos: number): void;
  /**
    * Returns the name corresponding to the widget found at the position pos in the widget hierarchy defined by self
    * @param pos position to get the widget name for, -1 for the path head
    * @returns The widget name, or None if none was set. 
    */
  iterGetName(pos: number): string | null;
  /**
    * Returns the object name that is at position pos in the widget hierarchy defined in self.
    * @param pos position to get the object name for, -1 for the path head
    * @returns the name or None 
    */
  iterGetObjectName(pos: number): string | null;
  /**
    * Returns the object GObject.GType that is at position pos in the widget hierarchy defined in self.
    * @param pos position to get the object type for, -1 for the path head
    * @returns a widget type 
    */
  iterGetObjectType(pos: number): import('../GObject').GType;
  /**
    * Returns the index into the list of siblings for the element at pos as returned by Gtk.WidgetPath.iter_get_siblings(). If that function would return None because the element at pos has no siblings, this function will return 0.
    * @param pos position to get the sibling index for, -1 for the path head
    * @returns 0 or the index into the list of siblings for the element at pos. 
    */
  iterGetSiblingIndex(pos: number): number;
  /**
    * Returns the list of siblings for the element at pos. If the element was not added with siblings, None is returned.
    * @param pos position to get the siblings for, -1 for the path head
    * @returns None or the list of siblings for the element at pos. 
    */
  iterGetSiblings(pos: number): import('../Gtk').WidgetPath;
  /**
    * Returns the state flags corresponding to the widget found at the position pos in the widget hierarchy defined by self
    * @param pos position to get the state for, -1 for the path head
    * @returns The state flags 
    */
  iterGetState(pos: number): import('../Gtk').StateFlags;
  /**
    * Returns True if the widget at position pos has the class name defined, False otherwise.
    * @param pos position to query, -1 for the path head
    * @param name class name
    * @returns True if the class name is defined for the widget at pos 
    */
  iterHasClass(pos: number, name: string): boolean;
  /**
    * Returns True if the widget at position pos has the name name, False otherwise.
    * @param pos position to query, -1 for the path head
    * @param name a widget name
    * @returns True if the widget at pos has this name 
    */
  iterHasName(pos: number, name: string): boolean;
  /**
    * See Gtk.WidgetPath.iter_has_class(). This is a version that operates with GQuarks.
    * @param pos position to query, -1 for the path head
    * @param qname class name as a #GQuark
    * @returns True if the widget at pos has the class defined. 
    */
  iterHasQclass(pos: number, qname: number): boolean;
  /**
    * See Gtk.WidgetPath.iter_has_name(). This is a version that operates on #GQuarks.
    * @param pos position to query, -1 for the path head
    * @param qname widget name as a #GQuark
    * @returns True if the widget at pos has this name 
    */
  iterHasQname(pos: number, qname: number): boolean;
  /**
    * See Gtk.WidgetPath.iter_has_region(). This is a version that operates with GQuarks.
    * @param pos position to query, -1 for the path head
    * @param qname region name as a #GQuark
    * @returns True if the widget at pos has the region defined.   flags:return location for the region flags 
    */
  iterHasQregion(pos: number, qname: number): [boolean, import('../Gtk').RegionFlags];
  /**
    * Returns True if the widget at position pos has the class name defined, False otherwise.
    * @param pos position to query, -1 for the path head
    * @param name region name
    * @returns True if the class name is defined for the widget at pos   flags:return location for the region flags 
    */
  iterHasRegion(pos: number, name: string): [boolean, import('../Gtk').RegionFlags];
  /**
    * Returns a list with all the class names defined for the widget at position pos in the hierarchy defined in self.
    * @param pos position to query, -1 for the path head
    * @returns The list of classes, This is a list of strings, the GLib.SList contents are owned by GTK+, but you should use g_slist_free() to free the list itself. 
    */
  iterListClasses(pos: number): string[];
  /**
    * Returns a list with all the region names defined for the widget at position pos in the hierarchy defined in self.
    * @param pos position to query, -1 for the path head
    * @returns The list of regions, This is a list of strings, the GLib.SList contents are owned by GTK+, but you should use g_slist_free() to free the list itself. 
    */
  iterListRegions(pos: number): string[];
  /**
    * Removes the class name from the widget at position pos in the hierarchy defined in self.
    * @param pos position to modify, -1 for the path head
    * @param name class name 
    */
  iterRemoveClass(pos: number, name: string): void;
  /**
    * Removes the region name from the widget at position pos in the hierarchy defined in self.
    * @param pos position to modify, -1 for the path head
    * @param name region name 
    */
  iterRemoveRegion(pos: number, name: string): void;
  /**
    * Sets the widget name for the widget found at position pos in the widget hierarchy defined by self.
    * @param pos position to modify, -1 for the path head
    * @param name widget name 
    */
  iterSetName(pos: number, name: string): void;
  /**
    * Sets the object name for a given position in the widget hierarchy defined by self.
    * @param pos position to modify, -1 for the path head
    * @param name object name to set or None to unset 
    */
  iterSetObjectName(pos: number, name: string | null): void;
  /**
    * Sets the object type for a given position in the widget hierarchy defined by self.
    * @param pos position to modify, -1 for the path head
    * @param type object type to set 
    */
  iterSetObjectType(pos: number, type: import('../GObject').GType): void;
  /**
    * Sets the widget name for the widget found at position pos in the widget hierarchy defined by self.
    * @param pos position to modify, -1 for the path head
    * @param state state flags 
    */
  iterSetState(pos: number, state: import('../Gtk').StateFlags): void;
  /**
    * Returns the number of Gtk.Widget GObject.GTypes between the represented widget and its topmost container.
    * @returns the number of elements in the path 
    */
  length(): number;
  /**
    * Prepends a widget type to the widget hierachy represented by self.
    * @param type widget type to prepend 
    */
  prependType(type: import('../GObject').GType): void;
  /**
    * Increments the reference count on self.
    * @returns self itself. 
    */
  ref(): import('../Gtk').WidgetPath;
  /**
    * Dumps the widget path into a string representation. It tries to match the CSS style as closely as possible (Note that there might be paths that cannot be represented in CSS).
    * @returns A new string describing self. 
    */
  toString(): string;
  /**
    * Decrements the reference count on self, freeing the structure if the reference count reaches 0. 
    */
  unref(): void;
}

