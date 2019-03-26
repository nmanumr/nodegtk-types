import * as Gio from '../Gio';
export declare interface SimpleIOStream extends Gio.IOStream { }

/**
  * Gio.SimpleIOStream creates a Gio.IOStream from an arbitrary Gio.InputStream and
Gio.OutputStream. This allows any pair of input and output streams to be used
with Gio.IOStream methods. 
  */
export declare class SimpleIOStream {
  /**
    * Creates a new Gio.SimpleIOStream wrapping input_stream and output_stream. See also Gio.IOStream.
    * @param inputStream a Gio.InputStream.
    * @param outputStream a Gio.OutputStream.
    * @returns a new Gio.SimpleIOStream instance. 
    */
  static new(inputStream: import('../Gio').InputStream, outputStream: import('../Gio').OutputStream): import('../Gio').IOStream;
  ;
}

