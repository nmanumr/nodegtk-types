export declare class IconSource {
  /**
    * Creates a new Gtk.IconSource. A Gtk.IconSource contains a GdkPixbuf.Pixbuf (or image filename) that serves as the base image for one or more of the icons in a Gtk.IconSet, along with a specification for which icons in the icon set will be based on that pixbuf or image file. An icon set contains a set of icons that represent “the same” logical concept in different states, different global text directions, and different sizes.
    * @returns a new Gtk.IconSource 
    */
  static new(): import('../Gtk').IconSource;
  /**
    * Creates a copy of self; mostly useful for language bindings.
    * @returns a new Gtk.IconSource 
    */
  copy(): import('../Gtk').IconSource;
  /**
    * Frees a dynamically-allocated icon source, along with its filename, size, and pixbuf fields if those are not None. 
    */
  free(): void;
  /**
    * Obtains the text direction this icon source applies to. The return value is only useful/meaningful if the text direction is not wildcarded.
    * @returns text direction this source matches 
    */
  getDirection(): import('../Gtk').TextDirection;
  /**
    * Gets the value set by Gtk.IconSource.set_direction_wildcarded().
    * @returns True if this icon source is a base for any text direction variant 
    */
  getDirectionWildcarded(): boolean;
  /**
    * Retrieves the source filename, or None if none is set. The filename is not a copy, and should not be modified or expected to persist beyond the lifetime of the icon source.
    * @returns image filename. This string must not be modified or freed. 
    */
  getFilename(): string;
  /**
    * Retrieves the source icon name, or None if none is set. The icon_name is not a copy, and should not be modified or expected to persist beyond the lifetime of the icon source.
    * @returns icon name. This string must not be modified or freed. 
    */
  getIconName(): string;
  /**
    * Retrieves the source pixbuf, or None if none is set. In addition, if a filename source is in use, this function in some cases will return the pixbuf from loaded from the filename. This is, for example, true for the Gtk.IconSource passed to the Gtk.Style render_icon() virtual function. The reference count on the pixbuf is not incremented.
    * @returns source pixbuf 
    */
  getPixbuf(): import('../GdkPixbuf').Pixbuf;
  /**
    * Obtains the icon size this source applies to. The return value is only useful/meaningful if the icon size is not wildcarded.
    * @returns icon size (Gtk.IconSize) this source matches. 
    */
  getSize(): number;
  /**
    * Gets the value set by Gtk.IconSource.set_size_wildcarded().
    * @returns True if this icon source is a base for any icon size variant 
    */
  getSizeWildcarded(): boolean;
  /**
    * Obtains the widget state this icon source applies to. The return value is only useful/meaningful if the widget state is not wildcarded.
    * @returns widget state this source matches 
    */
  getState(): import('../Gtk').StateType;
  /**
    * Gets the value set by Gtk.IconSource.set_state_wildcarded().
    * @returns True if this icon source is a base for any widget state variant 
    */
  getStateWildcarded(): boolean;
  /**
    * Sets the text direction this icon source is intended to be used with.
    * @param direction text direction this source applies to 
    */
  setDirection(direction: import('../Gtk').TextDirection): void;
  /**
    * If the text direction is wildcarded, this source can be used as the base image for an icon in any Gtk.TextDirection. If the text direction is not wildcarded, then the text direction the icon source applies to should be set with Gtk.IconSource.set_direction(), and the icon source will only be used with that text direction.
    * @param setting True to wildcard the text direction 
    */
  setDirectionWildcarded(setting: boolean): void;
  /**
    * Sets the name of an image file to use as a base image when creating icon variants for Gtk.IconSet. The filename must be absolute.
    * @param filename image file to use 
    */
  setFilename(filename: string): void;
  /**
    * Sets the name of an icon to look up in the current icon theme to use as a base image when creating icon variants for Gtk.IconSet.
    * @param iconName name of icon to use 
    */
  setIconName(iconName: string | null): void;
  /**
    * Sets a pixbuf to use as a base image when creating icon variants for Gtk.IconSet.
    * @param pixbuf pixbuf to use as a source 
    */
  setPixbuf(pixbuf: import('../GdkPixbuf').Pixbuf): void;
  /**
    * Sets the icon size this icon source is intended to be used with.
    * @param size icon size (Gtk.IconSize) this source applies to 
    */
  setSize(size: number): void;
  /**
    * If the icon size is wildcarded, this source can be used as the base image for an icon of any size.  If the size is not wildcarded, then the size the source applies to should be set with Gtk.IconSource.set_size() and the icon source will only be used with that specific size.
    * @param setting True to wildcard the widget state 
    */
  setSizeWildcarded(setting: boolean): void;
  /**
    * Sets the widget state this icon source is intended to be used with.
    * @param state widget state this source applies to 
    */
  setState(state: import('../Gtk').StateType): void;
  /**
    * If the widget state is wildcarded, this source can be used as the base image for an icon in any Gtk.StateType.  If the widget state is not wildcarded, then the state the source applies to should be set with Gtk.IconSource.set_state() and the icon source will only be used with that specific state.
    * @param setting True to wildcard the widget state 
    */
  setStateWildcarded(setting: boolean): void;
}

