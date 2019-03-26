import * as Gio from '../Gio';
export declare interface BufferedOutputStream extends Gio.FilterOutputStream, Gio.Seekable { }

/**
  * Buffered output stream implements Gio.FilterOutputStream and provides
for buffered writes. 
  */
export declare class BufferedOutputStream {
  /**
    * Creates a new buffered output stream for a base stream.
    * @param baseStream a Gio.OutputStream.
    * @returns a Gio.OutputStream for the given base_stream. 
    */
  static new(baseStream: import('../Gio').OutputStream): import('../Gio').OutputStream;
  /**
    * Creates a new buffered output stream with a given buffer size.
    * @param baseStream a Gio.OutputStream.
    * @param size a #gsize.
    * @returns a Gio.OutputStream with an internal buffer set to size. 
    */
  static newSized(baseStream: import('../Gio').OutputStream, size: number): import('../Gio').OutputStream;
  /**
    * Checks if the buffer automatically grows as data is added.
    * @returns True if the self’s buffer automatically grows, False otherwise. 
    */
  getAutoGrow(): boolean;
  /**
    * Gets the size of the buffer in the self.
    * @returns the current size of the buffer. 
    */
  getBufferSize(): number;
  /**
    * Sets whether or not the self’s buffer should automatically grow. If auto_grow is true, then each write will just make the buffer larger, and you must manually flush the buffer to actually write out the data to the underlying stream.
    * @param autoGrow a bool. 
    */
  setAutoGrow(autoGrow: boolean): void;
  /**
    * Sets the size of the internal buffer to size.
    * @param size a #gsize. 
    */
  setBufferSize(size: number): void;
  /**
    * Whether the buffer should automatically grow 
    */
  autoGrow: boolean;
  /**
    * The size of the backend buffer 
    */
  bufferSize: number;
}

