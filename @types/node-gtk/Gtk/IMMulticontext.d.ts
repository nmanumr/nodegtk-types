import * as Gtk from '../Gtk';
export declare interface IMMulticontext extends Gtk.IMContext { }

export declare class IMMulticontext {
  /**
    * Creates a new Gtk.IMMulticontext.
    * @returns a new Gtk.IMMulticontext. 
    */
  static new(): import('../Gtk').IMContext;
  /**
    * Add menuitems for various available input methods to a menu; the menuitems, when selected, will switch the input method for the context and the global default input method.
    * @param menushell a Gtk.MenuShell 
    */
  appendMenuitems(menushell: import('../Gtk').MenuShell): void;
  /**
    * Gets the id of the currently active slave of the self.
    * @returns the id of the currently active slave 
    */
  getContextId(): string;
  /**
    * Sets the context id for self.
    * @param contextId the id to use 
    */
  setContextId(contextId: string): void;
  ;
}

