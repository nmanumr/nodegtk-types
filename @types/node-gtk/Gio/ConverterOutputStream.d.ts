import * as Gio from '../Gio';
export declare interface ConverterOutputStream extends Gio.FilterOutputStream, Gio.PollableOutputStream { }

/**
  * Converter output stream implements Gio.OutputStream and allows
conversion of data of various types during reading. 
  */
export declare class ConverterOutputStream {
  /**
    * Creates a new converter output stream for the base_stream.
    * @param baseStream a Gio.OutputStream
    * @param converter a Gio.Converter
    * @returns a new Gio.OutputStream. 
    */
  static new(baseStream: import('../Gio').OutputStream, converter: import('../Gio').Converter): import('../Gio').OutputStream;
  /**
    * Gets the Gio.Converter that is used by self.
    * @returns the converter of the converter output stream 
    */
  getConverter(): import('../Gio').Converter;
  /**
    * The converter object 
    */
  converter: import('../Gio').Converter;
}

