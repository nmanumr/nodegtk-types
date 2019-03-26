import * as GObject from '../GObject';
export declare interface FileDescriptorBased extends GObject.GInterface { }

/**
  * Gio.FileDescriptorBased is implemented by streams (implementations of
Gio.InputStream or Gio.OutputStream) that are based on file descriptors. 
  */
export declare interface FileDescriptorBased {
  /**
    * Gets the underlying file descriptor.
    * @returns The file descriptor 
    */
  getFd(): number;
}

