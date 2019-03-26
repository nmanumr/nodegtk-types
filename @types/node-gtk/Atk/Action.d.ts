import * as GObject from '../GObject';

/**
  * Atk.Action should be implemented by instances of Atk.Object classes
with which the user can interact directly, i.e. buttons,
checkboxes, scrollbars, e.g. components which are not “passive”
providers of UI information. 
  */
export declare interface Action extends GObject.GInterface {
  /**
    * Perform the specified action on the object.
    * @param i the action index corresponding to the action to be performed
    * @returns True if success, False otherwise 
    */
  doAction(i: number): boolean;
  /**
    * Returns a description of the specified action of the object.
    * @param i the action index corresponding to the action to be performed
    * @returns a description string, or None if self does not implement this interface. 
    */
  getDescription(i: number): string | null;
  /**
    * Gets the keybinding which can be used to activate this action, if one exists. The string returned should contain localized, human-readable, key sequences as they would appear when displayed on screen. It must be in the format “mnemonic;sequence;shortcut”.
    * @param i the action index corresponding to the action to be performed
    * @returns the keybinding which can be used to activate this action, or None if there is no keybinding for this action. 
    */
  getKeybinding(i: number): string | null;
  /**
    * Returns the localized name of the specified action of the object.
    * @param i the action index corresponding to the action to be performed
    * @returns a name string, or None if self does not implement this interface. 
    */
  getLocalizedName(i: number): string | null;
  /**
    * Gets the number of accessible actions available on the object. If there are more than one, the first one is considered the “default” action of the object.
    * @returns a the number of actions, or 0 if self does not implement this interface. 
    */
  getNActions(): number;
  /**
    * Returns a non-localized string naming the specified action of the object. This name is generally not descriptive of the end result of the action, but instead names the ‘interaction type’ which the object supports. By convention, the above strings should be used to represent the actions which correspond to the common point-and-click interaction techniques of the same name: i.e. “click”, “press”, “release”, “drag”, “drop”, “popup”, etc. The “popup” action should be used to pop up a context menu for the object, if one exists.
    * @param i the action index corresponding to the action to be performed
    * @returns a name string, or None if self does not implement this interface. 
    */
  getName(i: number): string | null;
  /**
    * Sets a description of the specified action of the object.
    * @param i the action index corresponding to the action to be performed
    * @param desc the description to be assigned to this action
    * @returns a bool representing if the description was successfully set; 
    */
  setDescription(i: number, desc: string): boolean;
}

