import * as GObject from '../GObject';
export declare interface DragContext extends GObject.Object { }

export declare class DragContext {
  finish(): void;
  /**
    * Determines the bitmask of actions proposed by the source if Gdk.DragContext.get_suggested_action() returns Gdk.DragAction.ASK.
    * @returns the Gdk.DragAction flags 
    */
  getActions(): import('../Gdk').DragAction;
  /**
    * Returns the destination window for the DND operation.
    * @returns a Gdk.Window 
    */
  getDestWindow(): import('../Gdk').Window;
  /**
    * Returns the Gdk.Device associated to the drag context.
    * @returns The Gdk.Device associated to self. 
    */
  getDevice(): import('../Gdk').Device;
  /**
    * Returns the window on which the drag icon should be rendered during the drag operation. Note that the window may not be available until the drag operation has begun. GDK will move the window in accordance with the ongoing drag operation. The window is owned by self and will be destroyed when the drag operation is over.
    * @returns the drag window, or None 
    */
  getDragWindow(): import('../Gdk').Window | null;
  /**
    * Returns the drag protocol that is used by this context.
    * @returns the drag protocol 
    */
  getProtocol(): import('../Gdk').DragProtocol;
  /**
    * Determines the action chosen by the drag destination.
    * @returns a Gdk.DragAction value 
    */
  getSelectedAction(): import('../Gdk').DragAction;
  /**
    * Returns the Gdk.Window where the DND operation started.
    * @returns a Gdk.Window 
    */
  getSourceWindow(): import('../Gdk').Window;
  /**
    * Determines the suggested drag action of the context.
    * @returns a Gdk.DragAction value 
    */
  getSuggestedAction(): import('../Gdk').DragAction;
  /**
    * Retrieves the list of targets of the context.
    * @returns a GLib.List of targets 
    */
  listTargets(): import('../Gdk').Atom[];
  /**
    * Requests the drag and drop operation to be managed by self. When a drag and drop operation becomes managed, the Gdk.DragContext will internally handle all input and source-side Gdk.EventDND events as required by the windowing system.
    * @param ipcWindow Window to use for IPC messaging/events
    * @param actions the actions supported by the drag source
    * @returns True if the drag and drop operation is managed. 
    */
  manageDnd(ipcWindow: import('../Gdk').Window, actions: import('../Gdk').DragAction): boolean;
  /**
    * Associates a Gdk.Device to self, so all Drag and Drop events for self are emitted as if they came from this device.
    * @param device a Gdk.Device 
    */
  setDevice(device: import('../Gdk').Device): void;
  /**
    * Sets the position of the drag window that will be kept under the cursor hotspot. Initially, the hotspot is at the top left corner of the drag window.
    * @param hotX x coordinate of the drag window hotspot
    * @param hotY y coordinate of the drag window hotspot 
    */
  setHotspot(hotX: number, hotY: number): void;
}

