import * as Gio from '../Gio';
export declare interface UnixInputStream extends Gio.InputStream, Gio.FileDescriptorBased, Gio.PollableInputStream { }

/**
  * Gio.UnixInputStream implements Gio.InputStream for reading from a UNIX
file descriptor, including asynchronous operations. (If the file
descriptor refers to a socket or pipe, this will use poll() to do
asynchronous I/O. If it refers to a regular file, it will fall back
to doing asynchronous I/O in another thread.) 
  */
export declare class UnixInputStream {
  /**
    * Creates a new Gio.UnixInputStream for the given fd.
    * @param fd a UNIX file descriptor
    * @param closeFd True to close the file descriptor when done
    * @returns a new Gio.UnixInputStream 
    */
  static new(fd: number, closeFd: boolean): import('../Gio').InputStream;
  /**
    * Returns whether the file descriptor of self will be closed when the stream is closed.
    * @returns True if the file descriptor is closed when done 
    */
  getCloseFd(): boolean;
  /**
    * Return the UNIX file descriptor that the stream reads from.
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
    * The file descriptor to read from 
    */
  fd: number;
}

