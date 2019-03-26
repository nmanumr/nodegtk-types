import * as GObject from '../GObject';
export declare interface RemoteActionGroup extends GObject.GInterface { }

/**
  * The Gio.RemoteActionGroup interface is implemented by Gio.ActionGroup
instances that either transmit action invocations to other processes
or receive action invocations in the local process from other
processes. 
  */
export declare interface RemoteActionGroup {
  /**
    * Activates the remote action.
    * @param actionName the name of the action to activate
    * @param parameter the optional parameter to the activation
    * @param platformData the platform data to send 
    */
  activateActionFull(actionName: string, parameter: import('../GLib').Variant | null, platformData: import('../GLib').Variant): void;
  /**
    * Changes the state of a remote action.
    * @param actionName the name of the action to change the state of
    * @param value the new requested value for the state
    * @param platformData the platform data to send 
    */
  changeActionStateFull(actionName: string, value: import('../GLib').Variant, platformData: import('../GLib').Variant): void;
}

