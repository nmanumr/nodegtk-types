/**
  * Gio.FileIcon specifies an icon by pointing to an image file
to be used as icon. 
  */
export declare class FileIcon extends import('../GObject').Object, import('../Gio').Icon, import('../Gio').LoadableIcon{
/**
  * Creates a new icon for a file.
  * @param file a Gio.File.
  * @returns a Gio.Icon for the given file, or None on error. 
  */
static new(file: import('../Gio').File): import('../Gio').FileIcon;
/**
  * Gets the Gio.File associated with the given self.
  * @returns a Gio.File, or None. 
  */
getFile(): import('../Gio').File;
/**
  * The file containing the icon 
  */
file: import('../Gio').File;
;
}

