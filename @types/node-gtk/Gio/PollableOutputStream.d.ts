import * as GObject from '../GObject';
export declare interface PollableOutputStream extends GObject.GInterface { }

/**
  * Gio.PollableOutputStream is implemented by Gio.OutputStreams that
can be polled for readiness to write. This can be used when
interfacing with a non-GIO API that expects
UNIX-file-descriptor-style asynchronous I/O rather than GIO-style. 
  */
export declare interface PollableOutputStream {
  /**
    * Checks if self is actually pollable. Some classes may implement Gio.PollableOutputStream but have only certain instances of that class be pollable. If this method returns False, then the behavior of other Gio.PollableOutputStream methods is undefined.
    * @returns True if self is pollable, False if not. 
    */
  canPoll(): boolean;
  /**
    * Creates a GLib.Source that triggers when self can be written, or cancellable is triggered or an error occurs. The callback on the source is of the Gio.PollableSourceFunc type.
    * @param cancellable a Gio.Cancellable, or None
    * @returns a new GLib.Source 
    */
  createSource(cancellable: import('../Gio').Cancellable | null): import('../GLib').Source;
  /**
    * Checks if self can be written.
    * @returns True if self is writable, False if not. If an error has occurred on self, this will result in Gio.PollableOutputStream.is_writable() returning True, and the next attempt to write will return the error. 
    */
  isWritable(): boolean;
  /**
    * Attempts to write up to count bytes from buffer to self, as with Gio.OutputStream.write(). If self is not currently writable, this will immediately return Gio.IOErrorEnum.WOULD_BLOCK, and you can use Gio.PollableOutputStream.create_source() to create a GLib.Source that will be triggered when self is writable.
    * @param buffer a buffer to write data from
    * @param cancellable a Gio.Cancellable, or None
    * @returns the number of bytes written, or -1 on error (including Gio.IOErrorEnum.WOULD_BLOCK). 
    */
  writeNonblocking(buffer: Int8Array, cancellable: import('../Gio').Cancellable | null): number;
}

