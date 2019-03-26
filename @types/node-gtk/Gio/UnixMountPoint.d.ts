/**
  * Defines a Unix mount point (e.g. /dev).
This corresponds roughly to a fstab entry. 
  */
export declare class UnixMountPoint {
  /**
    * Compares two unix mount points.
    * @param mount2 a #GUnixMount.
    * @returns 1, 0 or -1 if self is greater than, equal to, or less than mount2, respectively. 
    */
  compare(mount2: import('../Gio').UnixMountPoint): number;
  /**
    * Makes a copy of self.
    * @returns a new Gio.UnixMountPoint 
    */
  copy(): import('../Gio').UnixMountPoint;
  /**
    * Frees a unix mount point. 
    */
  free(): void;
  /**
    * Gets the device path for a unix mount point.
    * @returns a string containing the device path. 
    */
  getDevicePath(): string;
  /**
    * Gets the file system type for the mount point.
    * @returns a string containing the file system type. 
    */
  getFsType(): string;
  /**
    * Gets the mount path for a unix mount point.
    * @returns a string containing the mount path. 
    */
  getMountPath(): string;
  /**
    * Gets the options for the mount point.
    * @returns a string containing the options. 
    */
  getOptions(): string;
  /**
    * Guesses whether a Unix mount point can be ejected.
    * @returns True if self is deemed to be ejectable. 
    */
  guessCanEject(): boolean;
  /**
    * Guesses the icon of a Unix mount point.
    * @returns a Gio.Icon 
    */
  guessIcon(): import('../Gio').Icon;
  /**
    * Guesses the name of a Unix mount point. The result is a translated string.
    * @returns A newly allocated string that must be freed with GLib.free() 
    */
  guessName(): string;
  /**
    * Guesses the symbolic icon of a Unix mount point.
    * @returns a Gio.Icon 
    */
  guessSymbolicIcon(): import('../Gio').Icon;
  /**
    * Checks if a unix mount point is a loopback device.
    * @returns True if the mount point is a loopback. False otherwise. 
    */
  isLoopback(): boolean;
  /**
    * Checks if a unix mount point is read only.
    * @returns True if a mount point is read only. 
    */
  isReadonly(): boolean;
  /**
    * Checks if a unix mount point is mountable by the user.
    * @returns True if the mount point is user mountable. 
    */
  isUserMountable(): boolean;
}

