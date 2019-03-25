/**
  * Meta-data to be passed to Gtk.RecentManager.add_full() when
registering a recently used resource. 
  */
export declare class RecentData {
/**
  * command line used to launch this resource; may contain the “\%f” and “\%u” escape characters which will be expanded to the resource file path and URI respectively when the command line is retrieved; 
  */
appExec: string;
/**
  * the name of the application that is registering this recently used resource; 
  */
appName: string;
/**
  * a UTF-8 encoded string, containing a short description of the resource, or None; 
  */
description: string;
/**
  * a UTF-8 encoded string, containing the name of the recently used resource to be displayed, or None; 
  */
displayName: string;
/**
  * a vector of strings containing groups names; 
  */
groups: string;
/**
  * whether this resource should be displayed only by the applications that have registered it or not. 
  */
isPrivate: boolean;
/**
  * the MIME type of the resource; 
  */
mimeType: string;
}

