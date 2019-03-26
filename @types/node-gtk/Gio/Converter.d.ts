import * as GObject from '../GObject';

/**
  * Gio.Converter is implemented by objects that convert
binary data in various ways. The conversion can be
stateful and may fail at any place. 
  */
export declare interface Converter extends GObject.GInterface {
  /**
    * This is the main operation used when converting data. It is to be called multiple times in a loop, and each time it will do some work, i.e. producing some output (in outbuf) or consuming some input (from inbuf) or both. If its not possible to do any work an error is returned.
    * @param inbuf the buffer containing the data to convert.
    * @param outbuf a buffer to write converted data in.
    * @param flags a Gio.ConverterFlags controlling the conversion details
    * @returns a Gio.ConverterResult, Gio.ConverterResult.ERROR on error.   bytes_read:will be set to the number of bytes read from inbuf on success bytes_written:will be set to the number of bytes written to outbuf on success 
    */
  convert(inbuf: Int8Array, outbuf: Int8Array, flags: import('../Gio').ConverterFlags): [import('../Gio').ConverterResult, number, number];
  /**
    * Resets all internal state in the converter, making it behave as if it was just created. If the converter has any internal state that would produce output then that output is lost. 
    */
  reset(): void;
}

