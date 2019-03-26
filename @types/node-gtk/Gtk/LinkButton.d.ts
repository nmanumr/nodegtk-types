import * as Gtk from '../Gtk';
export declare interface LinkButton extends Gtk.Button { }

/**
  * A Gtk.LinkButton is a Gtk.Button with a hyperlink, similar to the one
used by web browsers, which triggers an action when clicked. It is useful
to show quick links to resources. 
  */
export declare class LinkButton {
  /**
    * Creates a new Gtk.LinkButton with the URI as its text.
    * @param uri a valid URI
    * @returns a new link button widget. 
    */
  static new(uri: string): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.LinkButton containing a label.
    * @param uri a valid URI
    * @param label the text of the button
    * @returns a new link button widget. 
    */
  static newWithLabel(uri: string, label: string | null): import('../Gtk').Widget;
  /**
    * Retrieves the URI set using Gtk.LinkButton.set_uri().
    * @returns a valid URI.  The returned string is owned by the link button and should not be modified or freed. 
    */
  getUri(): string;
  /**
    * Retrieves the “visited” state of the URI where the Gtk.LinkButton points. The button becomes visited when it is clicked. If the URI is changed on the button, the “visited” state is unset again.
    * @returns True if the link has been visited, False otherwise 
    */
  getVisited(): boolean;
  /**
    * Sets uri as the URI where the Gtk.LinkButton points. As a side-effect this unsets the “visited” state of the button.
    * @param uri a valid URI 
    */
  setUri(uri: string): void;
  /**
    * Sets the “visited” state of the URI where the Gtk.LinkButton points.  See Gtk.LinkButton.get_visited() for more details.
    * @param visited the new “visited” state 
    */
  setVisited(visited: boolean): void;
  /**
    * The URI bound to this button 
    */
  uri: string;
  /**
    * Whether this link has been visited. 
    */
  visited: boolean;
}

