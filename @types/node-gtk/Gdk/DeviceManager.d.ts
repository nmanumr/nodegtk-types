import * as GObject from '../GObject';
export declare interface DeviceManager extends GObject.Object { }

/**
  * In addition to a single pointer and keyboard for user interface input,
GDK contains support for a variety of input devices, including graphics
tablets, touchscreens and multiple pointers/keyboards interacting
simultaneously with the user interface. Such input devices often have
additional features, such as sub-pixel positioning information and
additional device-dependent information. 
  */
export declare abstract class DeviceManager {
  /**
    * Returns the client pointer, that is, the master pointer that acts as the core pointer for this application. In X11, window managers may change this depending on the interaction pattern under the presence of several pointers.
    * @returns The client pointer. This memory is owned by GDK and must not be freed or unreferenced. 
    */
  getClientPointer(): import('../Gdk').Device;
  /**
    * Gets the Gdk.Display associated to self.
    * @returns the Gdk.Display to which self is associated to, or None. This memory is owned by GDK and must not be freed or unreferenced. 
    */
  getDisplay(): import('../Gdk').Display | null;
  /**
    * Returns the list of devices of type type currently attached to self.
    * @param type device type to get.
    * @returns a list of Gdk.Devices. The returned list must be freed with g_list_free (). The list elements are owned by GTK+ and must not be freed or unreffed. 
    */
  listDevices(type: import('../Gdk').DeviceType): import('../Gdk').Device[];
  /**
    * Display for the device manager 
    */
  display: import('../Gdk').Display;
}

