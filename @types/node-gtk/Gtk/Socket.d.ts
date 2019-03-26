import * as Gtk from '../Gtk';
export declare interface Socket extends Gtk.Container { }

/**
  * Together with Gtk.Plug, Gtk.Socket provides the ability to embed
widgets from one process into another process in a fashion that
is transparent to the user. One process creates a Gtk.Socket widget
and passes that widget’s window ID to the other process, which then
creates a Gtk.Plug with that window ID. Any widgets contained in the
Gtk.Plug then will appear inside the first application’s window. 
  */
export declare class Socket {
  /**
    * Create a new empty Gtk.Socket.
    * @returns the new Gtk.Socket. 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Adds an XEMBED client, such as a Gtk.Plug, to the Gtk.Socket.  The client may be in the same process or in a different process.
    * @param window the Window of a client participating in the XEMBED protocol. 
    */
  addId(window: number): void;
  /**
    * Gets the window ID of a Gtk.Socket widget, which can then be used to create a client embedded inside the socket, for instance with Gtk.Plug.new().
    * @returns the window ID for the socket 
    */
  getId(): number;
  /**
    * Retrieves the window of the plug. Use this to check if the plug has been created inside of the socket.
    * @returns the window of the plug if available, or None 
    */
  getPlugWindow(): import('../Gdk').Window | null;
  ;
}

