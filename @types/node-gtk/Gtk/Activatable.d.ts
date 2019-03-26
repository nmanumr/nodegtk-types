import * as GObject from '../GObject';
export declare interface Activatable extends GObject.GInterface { }

/**
  * Activatable widgets can be connected to a Gtk.Action and reflects
the state of its action. A Gtk.Activatable can also provide feedback
through its action, as they are responsible for activating their
related actions. 
  */
export declare interface Activatable {
  /**
    * This is a utility function for Gtk.Activatable implementors.
    * @param action the Gtk.Action to set 
    */
  doSetRelatedAction(action: import('../Gtk').Action): void;
  /**
    * Gets the related Gtk.Action for self.
    * @returns the related Gtk.Action if one is set. 
    */
  getRelatedAction(): import('../Gtk').Action;
  /**
    * Gets whether this activatable should reset its layout and appearance when setting the related action or when the action changes appearance.
    * @returns whether self uses its actions appearance. 
    */
  getUseActionAppearance(): boolean;
  /**
    * Sets the related action on the self object.
    * @param action the Gtk.Action to set 
    */
  setRelatedAction(action: import('../Gtk').Action): void;
  /**
    * Sets whether this activatable should reset its layout and appearance when setting the related action or when the action changes appearance
    * @param useAppearance whether to use the actions appearance 
    */
  setUseActionAppearance(useAppearance: boolean): void;
  /**
    * This is called to update the activatable completely, this is called internally when the Gtk.Activatable :related-action property is set or unset and by the implementing class when Gtk.Activatable :use-action-appearance changes.
    * @param action the related Gtk.Action or None 
    */
  syncActionProperties(action: import('../Gtk').Action | null): void;
  /**
    * The action this activatable will activate and receive updates from deprecated 
    */
  relatedAction: import('../Gtk').Action;
  /**
    * Whether to use the related actions appearance properties deprecated 
    */
  useActionAppearance: boolean;
}

