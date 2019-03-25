/**
  * A Gtk.FileFilterInfo-struct is used to pass information about the
tested file to Gtk.FileFilter.filter(). 
  */
export declare class FileFilterInfo {
/**
  * Flags indicating which of the following fields need are filled 
  */
contains: import('../Gtk').FileFilterFlags;
/**
  * the string that will be used to display the file in the file chooser 
  */
displayName: string;
/**
  * the filename of the file being tested 
  */
filename: string;
/**
  * the mime type of the file 
  */
mimeType: string;
/**
  * the URI for the file being tested 
  */
uri: string;
}

