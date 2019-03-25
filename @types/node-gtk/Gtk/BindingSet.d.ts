/**
  * A binding set maintains a list of activatable key bindings.
A single binding set can match multiple types of widgets.
Similar to style contexts, can be matched by any information contained
in a widgets Gtk.WidgetPath. When a binding within a set is matched upon
activation, an action signal is emitted on the target widget to carry out
the actual activation. 
  */
export declare class BindingSet {
/**
  * Find a binding set by its globally unique name.
  * @param setName unique binding set name
  * @returns None or the specified binding set 
  */
static find(setName: string): import('../Gtk').BindingSet | null;
/**
  * Find a key binding matching keyval and modifiers within self and activate the binding on object.
  * @param keyval key value of the binding
  * @param modifiers key modifier of the binding
  * @param object object to activate when binding found
  * @returns True if a binding was found and activated 
  */
activate(keyval: number, modifiers: import('../Gdk').ModifierType, object: import('../GObject').Object): boolean;
/**
  * This function was used internally by the GtkRC parsing mechanism to assign match patterns to Gtk.BindingSet structures.
  * @param pathType path type the pattern applies to
  * @param pathPattern the actual match pattern
  * @param priority binding priority 
  */
addPath(pathType: import('../Gtk').PathType, pathPattern: string, priority: import('../Gtk').PathPriorityType): void;
/**
  * unused 
  */
classBranchPspecs: Object;
/**
  * implementation detail 
  */
current: import('../Gtk').BindingEntry;
/**
  * the key binding entries in this binding set 
  */
entries: import('../Gtk').BindingEntry;
/**
  * whether this binding set stems from a CSS file and is reset upon theme changes 
  */
parsed: number;
/**
  * unused 
  */
priority: number;
/**
  * unique name of this binding set 
  */
setName: string;
/**
  * unused 
  */
widgetClassPspecs: Object;
/**
  * unused 
  */
widgetPathPspecs: Object;
}

