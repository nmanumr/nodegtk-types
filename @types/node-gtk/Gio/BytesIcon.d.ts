/**
  * Gio.BytesIcon specifies an image held in memory in a common format (usually
png) to be used as icon. 
  */
export declare class BytesIcon extends import('../GObject').Object, import('../Gio').Icon, import('../Gio').LoadableIcon{
/**
  * Creates a new icon for a bytes.
  * @param bytes a GLib.Bytes.
  * @returns a Gio.Icon for the given bytes, or None on error. 
  */
static new(bytes: import('../GLib').Bytes): import('../Gio').BytesIcon;
/**
  * Gets the GLib.Bytes associated with the given self.
  * @returns a GLib.Bytes, or None. 
  */
getBytes(): import('../GLib').Bytes;
/**
  * The bytes containing the icon 
  */
bytes: import('../GLib').Bytes;
;
}

