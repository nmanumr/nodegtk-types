/**
  * Converter output stream implements Gio.OutputStream and allows
conversion of data of various types during reading. 
  */
export declare class ConverterOutputStream extends import('../Gio').FilterOutputStream, import('../Gio').PollableOutputStream{
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
/**
  *   
  */
parentInstance: import('../Gio').FilterOutputStream;
}

