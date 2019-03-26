import * as Gio from '../Gio';
export declare interface UnixOutputStream extends Gio.OutputStream, Gio.FileDescriptorBased, Gio.PollableOutputStream { }

/**
  * Gio.UnixOutputStream implements Gio.OutputStream for writing to a UNIX
file descriptor, including asynchronous operations. (If the file
descriptor refers to a socket or pipe, this will use poll() to do
asynchronous I/O. If it refers to a regular file, it will fall back
to doing asynchronous I/O in another thread.) 
  */
export declare class UnixOutputStream {
  /**
    * Creates a new Gio.UnixOutputStream for the given fd.
    * @param fd a UNIX file descriptor
    * @param closeFd True to close the file descriptor when done
    * @returns a new Gio.OutputStream 
    */
  static new(fd: number, closeFd: boolean): import('../Gio').OutputStream;
  /**
    * Returns whether the file descriptor of self will be closed when the stream is closed.
    * @returns True if the file descriptor is closed when done 
    */
  getCloseFd(): boolean;
  /**
    * Return the UNIX file descriptor that the stream writes to.
    * @returns The file descriptor of self 
    */
  getFd(): number;
  /**
    * Sets whether the file descriptor of self shall be closed when the stream is closed.
    * @param closeFd True to close the file descriptor when done 
    */
  setCloseFd(closeFd: boolean): void;
  /**
    * Whether to close the file descriptor when the stream is closed 
    */
  closeFd: boolean;
  /**
    * The file descriptor to write to 
    */
  fd: number;
}

