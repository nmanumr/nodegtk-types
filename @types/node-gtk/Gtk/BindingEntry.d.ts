/**
  * Each key binding element of a binding sets binding list is
represented by a Gtk.BindingEntry. 
  */
export declare class BindingEntry {
  /**
    * Parses a signal description from signal_desc and incorporates it into binding_set.
    * @param bindingSet a Gtk.BindingSet
    * @param signalDesc a signal description
    * @returns GLib.TokenType.NONE if the signal was successfully parsed and added, the expected token otherwise 
    */
  static addSignalFromString(bindingSet: import('../Gtk').BindingSet, signalDesc: string): import('../GLib').TokenType;
  /**
    * Override or install a new key binding for keyval with modifiers on binding_set.
    * @param bindingSet a Gtk.BindingSet to add a signal to
    * @param keyval key value
    * @param modifiers key modifier
    * @param signalName signal name to be bound
    * @param bindingArgs list of Gtk.BindingArg signal arguments 
    */
  static addSignall(bindingSet: import('../Gtk').BindingSet, keyval: number, modifiers: import('../Gdk').ModifierType, signalName: string, bindingArgs: import('../Gtk').BindingArg): void;
  /**
    * Remove a binding previously installed via gtk_binding_entry_add_signal() on binding_set.
    * @param bindingSet a Gtk.BindingSet to remove an entry of
    * @param keyval key value of binding to remove
    * @param modifiers key modifier of binding to remove 
    */
  static remove(bindingSet: import('../Gtk').BindingSet, keyval: number, modifiers: import('../Gdk').ModifierType): void;
  /**
    * Install a binding on binding_set which causes key lookups to be aborted, to prevent bindings from lower priority sets to be activated.
    * @param bindingSet a Gtk.BindingSet to skip an entry of
    * @param keyval key value of binding to skip
    * @param modifiers key modifier of binding to skip 
    */
  static skip(bindingSet: import('../Gtk').BindingSet, keyval: number, modifiers: import('../Gdk').ModifierType): void;
}

