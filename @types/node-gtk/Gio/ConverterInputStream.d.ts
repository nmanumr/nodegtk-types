/**
  * Converter input stream implements Gio.InputStream and allows
conversion of data of various types during reading. 
  */
export declare class ConverterInputStream extends import('../Gio').FilterInputStream, import('../Gio').PollableInputStream{
/**
  * Creates a new converter input stream for the base_stream.
  * @param baseStream a Gio.InputStream
  * @param converter a Gio.Converter
  * @returns a new Gio.InputStream. 
  */
static new(baseStream: import('../Gio').InputStream, converter: import('../Gio').Converter): import('../Gio').InputStream;
/**
  * Gets the Gio.Converter that is used by self.
  * @returns the converter of the converter input stream 
  */
getConverter(): import('../Gio').Converter;
/**
  * The converter object 
  */
converter: import('../Gio').Converter;
/**
  *   
  */
parentInstance: import('../Gio').FilterInputStream;
}

