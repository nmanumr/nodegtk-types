import * as GObject from '../GObject';
export declare interface VolumeMonitor extends GObject.Object { }

/**
  * Gio.VolumeMonitor is for listing the user interesting devices and volumes
on the computer. In other words, what a file selector or file manager
would show in a sidebar. 
  */
export declare class VolumeMonitor {
  /**
    * This function should be called by any Gio.VolumeMonitor implementation when a new Gio.Mount object is created that is not associated with a Gio.Volume object. It must be called just before emitting the mount_added signal.
    * @param mount a Gio.Mount object to find a parent for
    * @returns the Gio.Volume object that is the parent for mount or None if no wants to adopt the Gio.Mount. 
    */
  static adoptOrphanMount(mount: import('../Gio').Mount): import('../Gio').Volume;
  /**
    * Gets the volume monitor used by gio.
    * @returns a reference to the Gio.VolumeMonitor used by gio. Call GObject.Object.unref() when done with it. 
    */
  static get(): import('../Gio').VolumeMonitor;
  /**
    * Gets a list of drives connected to the system.
    * @returns a GLib.List of connected Gio.Drive objects. 
    */
  getConnectedDrives(): import('../Gio').Drive[];
  /**
    * Finds a Gio.Mount object by its UUID (see Gio.Mount.get_uuid())
    * @param uuid the UUID to look for
    * @returns a Gio.Mount or None if no such mount is available. Free the returned object with GObject.Object.unref(). 
    */
  getMountForUuid(uuid: string): import('../Gio').Mount;
  /**
    * Gets a list of the mounts on the system.
    * @returns a GLib.List of Gio.Mount objects. 
    */
  getMounts(): import('../Gio').Mount[];
  /**
    * Finds a Gio.Volume object by its UUID (see Gio.Volume.get_uuid())
    * @param uuid the UUID to look for
    * @returns a Gio.Volume or None if no such volume is available. Free the returned object with GObject.Object.unref(). 
    */
  getVolumeForUuid(uuid: string): import('../Gio').Volume;
  /**
    * Gets a list of the volumes on the system.
    * @returns a GLib.List of Gio.Volume objects. 
    */
  getVolumes(): import('../Gio').Volume[];
}

