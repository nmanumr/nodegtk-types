import * as Gtk from '../Gtk';
export declare interface Plug extends Gtk.Window { }

/**
  * Together with Gtk.Socket, Gtk.Plug provides the ability to embed
widgets from one process into another process in a fashion that is
transparent to the user. One process creates a Gtk.Socket widget
and passes the ID of that widget’s window to the other process,
which then creates a Gtk.Plug with that window ID. Any widgets
contained in the Gtk.Plug then will appear inside the first
application’s window. 
  */
export declare class Plug {
  /**
    * Creates a new plug widget inside the Gtk.Socket identified by socket_id. If socket_id is 0, the plug is left “unplugged” and can later be plugged into a Gtk.Socket by  Gtk.Socket.add_id().
    * @param socketId the window ID of the socket, or 0.
    * @returns the new Gtk.Plug widget. 
    */
  static new(socketId: number): import('../Gtk').Widget;
  /**
    * Create a new plug widget inside the Gtk.Socket identified by socket_id.
    * @param display the Gdk.Display on which socket_id is displayed
    * @param socketId the XID of the socket’s window.
    * @returns the new Gtk.Plug widget. 
    */
  static newForDisplay(display: import('../Gdk').Display, socketId: number): import('../Gtk').Widget;
  /**
    * Finish the initialization of self for a given Gtk.Socket identified by socket_id. This function will generally only be used by classes deriving from Gtk.Plug.
    * @param socketId the XID of the socket’s window. 
    */
  construct(socketId: number): void;
  /**
    * Finish the initialization of self for a given Gtk.Socket identified by socket_id which is currently displayed on display. This function will generally only be used by classes deriving from Gtk.Plug.
    * @param display the Gdk.Display associated with socket_id’s Gtk.Socket.
    * @param socketId the XID of the socket’s window. 
    */
  constructForDisplay(display: import('../Gdk').Display, socketId: number): void;
  /**
    * Determines whether the plug is embedded in a socket.
    * @returns True if the plug is embedded in a socket 
    */
  getEmbedded(): boolean;
  /**
    * Gets the window ID of a Gtk.Plug widget, which can then be used to embed this window inside another window, for instance with Gtk.Socket.add_id().
    * @returns the window ID for the plug 
    */
  getId(): number;
  /**
    * Retrieves the socket the plug is embedded in.
    * @returns the window of the socket, or None 
    */
  getSocketWindow(): import('../Gdk').Window | null;
  /**
    * Whether the plug is embedded 
    */
  readonly embedded: boolean;
  /**
    * The window of the socket the plug is embedded in 
    */
  readonly socketWindow: import('../Gdk').Window;
}

