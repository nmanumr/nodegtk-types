import * as Gtk from '../Gtk';
export declare interface HeaderBar extends Gtk.Container { }

/**
  * Gtk.HeaderBar is similar to a horizontal Gtk.Box. It allows children to
be placed at the start or the end. In addition, it allows a title and
subtitle to be displayed. The title will be centered with respect to
the width of the box, even if the children at either side take up
different amounts of space. The height of the titlebar will be
set to provide sufficient space for the subtitle, even if none is
currently set. If a subtitle is not needed, the space reservation
can be turned off with Gtk.HeaderBar.set_has_subtitle(). 
  */
export declare class HeaderBar {
  /**
    * Creates a new Gtk.HeaderBar widget.
    * @returns a new Gtk.HeaderBar 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Retrieves the custom title widget of the header. See Gtk.HeaderBar.set_custom_title().
    * @returns the custom title widget of the header, or None if none has been set explicitly. 
    */
  getCustomTitle(): import('../Gtk').Widget | null;
  /**
    * Gets the decoration layout set with Gtk.HeaderBar.set_decoration_layout().
    * @returns the decoration layout 
    */
  getDecorationLayout(): string;
  /**
    * Retrieves whether the header bar reserves space for a subtitle, regardless if one is currently set or not.
    * @returns True if the header bar reserves space for a subtitle 
    */
  getHasSubtitle(): boolean;
  /**
    * Returns whether this header bar shows the standard window decorations.
    * @returns True if the decorations are shown 
    */
  getShowCloseButton(): boolean;
  /**
    * Retrieves the subtitle of the header. See Gtk.HeaderBar.set_subtitle().
    * @returns the subtitle of the header, or None if none has been set explicitly. The returned string is owned by the widget and must not be modified or freed. 
    */
  getSubtitle(): string | null;
  /**
    * Retrieves the title of the header. See Gtk.HeaderBar.set_title().
    * @returns the title of the header, or None if none has been set explicitly. The returned string is owned by the widget and must not be modified or freed. 
    */
  getTitle(): string | null;
  /**
    * Adds child to self, packed with reference to the end of the self.
    * @param child the Gtk.Widget to be added to self 
    */
  packEnd(child: import('../Gtk').Widget): void;
  /**
    * Adds child to self, packed with reference to the start of the self.
    * @param child the Gtk.Widget to be added to self 
    */
  packStart(child: import('../Gtk').Widget): void;
  /**
    * Sets a custom title for the Gtk.HeaderBar.
    * @param titleWidget a custom widget to use for a title 
    */
  setCustomTitle(titleWidget: import('../Gtk').Widget | null): void;
  /**
    * Sets the decoration layout for this header bar, overriding the Gtk.Settings :gtk-decoration-layout setting.
    * @param layout a decoration layout, or None to unset the layout 
    */
  setDecorationLayout(layout: string | null): void;
  /**
    * Sets whether the header bar should reserve space for a subtitle, even if none is currently set.
    * @param setting True to reserve space for a subtitle 
    */
  setHasSubtitle(setting: boolean): void;
  /**
    * Sets whether this header bar shows the standard window decorations, including close, maximize, and minimize.
    * @param setting True to show standard window decorations 
    */
  setShowCloseButton(setting: boolean): void;
  /**
    * Sets the subtitle of the Gtk.HeaderBar. The title should give a user an additional detail to help him identify the current view.
    * @param subtitle a subtitle, or None 
    */
  setSubtitle(subtitle: string | null): void;
  /**
    * Sets the title of the Gtk.HeaderBar. The title should help a user identify the current view. A good title should not include the application name.
    * @param title a title, or None 
    */
  setTitle(title: string | null): void;
  /**
    * Custom title widget to display 
    */
  customTitle: import('../Gtk').Widget;
  /**
    * The layout for window decorations 
    */
  decorationLayout: string;
  /**
    * Whether the decoration-layout property has been set 
    */
  decorationLayoutSet: boolean;
  /**
    * Whether to reserve space for a subtitle 
    */
  hasSubtitle: boolean;
  /**
    * Whether to show window decorations 
    */
  showCloseButton: boolean;
  /**
    * The amount of space between children 
    */
  spacing: number;
  /**
    * The subtitle to display 
    */
  subtitle: string;
  /**
    * The title to display 
    */
  title: string;
}

