import * as GObject from '../GObject';
import * as Gio from '../Gio';
export declare interface EmblemedIcon extends GObject.Object, Gio.Icon { }

/**
  * Gio.EmblemedIcon is an implementation of Gio.Icon that supports
adding an emblem to an icon. Adding multiple emblems to an
icon is ensured via Gio.EmblemedIcon.add_emblem(). 
  */
export declare class EmblemedIcon {
  /**
    * Creates a new emblemed icon for icon with the emblem emblem.
    * @param icon a Gio.Icon
    * @param emblem a Gio.Emblem, or None
    * @returns a new Gio.Icon 
    */
  static new(icon: import('../Gio').Icon, emblem: import('../Gio').Emblem | null): import('../Gio').EmblemedIcon;
  /**
    * Adds emblem to the GLib.List of Gio.Emblems.
    * @param emblem a Gio.Emblem 
    */
  addEmblem(emblem: import('../Gio').Emblem): void;
  /**
    * Removes all the emblems from icon. 
    */
  clearEmblems(): void;
  /**
    * Gets the list of emblems for the icon.
    * @returns a GLib.List of Gio.Emblems that is owned by self 
    */
  getEmblems(): import('../Gio').Emblem[];
  /**
    * Gets the main icon for self.
    * @returns a Gio.Icon that is owned by self 
    */
  getIcon(): import('../Gio').Icon;
  /**
    * The Gio.Icon to attach emblems to 
    */
  gicon: import('../Gio').Icon;
}

