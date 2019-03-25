/**
  * Gio.FileDescriptorBased is implemented by streams (implementations of
Gio.InputStream or Gio.OutputStream) that are based on file descriptors. 
  */
export declare interface FileDescriptorBased extends import('../GObject').GInterface{
/**
  * Gets the underlying file descriptor.
  * @returns The file descriptor 
  */
getFd(): number;
}

