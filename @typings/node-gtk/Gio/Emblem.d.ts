/**
  * Gio.Emblem is an implementation of Gio.Icon that supports
having an emblem, which is an icon with additional properties.
It can than be added to a Gio.EmblemedIcon. 
  */
export declare class Emblem extends import('../GObject').Object, import('../Gio').Icon{
/**
  * Creates a new emblem for icon.
  * @param icon a Gio.Icon containing the icon.
  * @returns a new Gio.Emblem. 
  */
static new(icon: import('../Gio').Icon): import('../Gio').Emblem;
/**
  * Creates a new emblem for icon.
  * @param icon a Gio.Icon containing the icon.
  * @param origin a Gio.EmblemOrigin enum defining the emblem’s origin
  * @returns a new Gio.Emblem. 
  */
static newWithOrigin(icon: import('../Gio').Icon, origin: import('../Gio').EmblemOrigin): import('../Gio').Emblem;
/**
  * Gives back the icon from self.
  * @returns a Gio.Icon. The returned object belongs to the emblem and should not be modified or freed. 
  */
getIcon(): import('../Gio').Icon;
/**
  * Gets the origin of the emblem.
  * @returns the origin of the emblem 
  */
getOrigin(): import('../Gio').EmblemOrigin;
/**
  * The actual icon of the emblem 
  */
icon: import('../GObject').Object;
/**
  * Tells which origin the emblem is derived from 
  */
origin: import('../Gio').EmblemOrigin;
;
}

