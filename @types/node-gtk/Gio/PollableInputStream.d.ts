import * as GObject from '../GObject';
export declare interface PollableInputStream extends GObject.GInterface { }

/**
  * Gio.PollableInputStream is implemented by Gio.InputStreams that
can be polled for readiness to read. This can be used when
interfacing with a non-GIO API that expects
UNIX-file-descriptor-style asynchronous I/O rather than GIO-style. 
  */
export declare interface PollableInputStream {
  /**
    * Checks if self is actually pollable. Some classes may implement Gio.PollableInputStream but have only certain instances of that class be pollable. If this method returns False, then the behavior of other Gio.PollableInputStream methods is undefined.
    * @returns True if self is pollable, False if not. 
    */
  canPoll(): boolean;
  /**
    * Creates a GLib.Source that triggers when self can be read, or cancellable is triggered or an error occurs. The callback on the source is of the Gio.PollableSourceFunc type.
    * @param cancellable a Gio.Cancellable, or None
    * @returns a new GLib.Source 
    */
  createSource(cancellable: import('../Gio').Cancellable | null): import('../GLib').Source;
  /**
    * Checks if self can be read.
    * @returns True if self is readable, False if not. If an error has occurred on self, this will result in Gio.PollableInputStream.is_readable() returning True, and the next attempt to read will return the error. 
    */
  isReadable(): boolean;
  /**
    * Attempts to read up to count bytes from self into buffer, as with Gio.InputStream.read(). If self is not currently readable, this will immediately return Gio.IOErrorEnum.WOULD_BLOCK, and you can use Gio.PollableInputStream.create_source() to create a GLib.Source that will be triggered when self is readable.
    * @param buffer a buffer to read data into (which should be at least count bytes long).
    * @param cancellable a Gio.Cancellable, or None
    * @returns the number of bytes read, or -1 on error (including Gio.IOErrorEnum.WOULD_BLOCK). 
    */
  readNonblocking(buffer: Int8Array, cancellable: import('../Gio').Cancellable | null): number;
}

