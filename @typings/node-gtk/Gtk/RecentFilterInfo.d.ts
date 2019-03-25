/**
  * A Gtk.RecentFilterInfo struct is used
to pass information about the tested file to Gtk.RecentFilter.filter(). 
  */
export declare class RecentFilterInfo {
/**
  * The number of days elapsed since the file has been registered. 
  */
age: number;
/**
  * The list of applications that have registered the file. 
  */
applications: string;
/**
  * Gtk.RecentFilterFlags to indicate which fields are set. 
  */
contains: import('../Gtk').RecentFilterFlags;
/**
  * The string that will be used to display the file in the recent chooser. 
  */
displayName: string;
/**
  * The groups to which the file belongs to. 
  */
groups: string;
/**
  * MIME type of the file. 
  */
mimeType: string;
/**
  * The URI of the file being tested. 
  */
uri: string;
}

