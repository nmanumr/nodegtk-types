import * as Gio from '../Gio';
export declare interface FilterOutputStream extends Gio.OutputStream { }

/**
  * Base class for output stream implementations that perform some
kind of filtering operation on a base stream. Typical examples
of filtering operations are character set conversion, compression
and byte order flipping. 
  */
export declare abstract class FilterOutputStream {
  /**
    * Gets the base stream for the filter stream.
    * @returns a Gio.OutputStream. 
    */
  getBaseStream(): import('../Gio').OutputStream;
  /**
    * Returns whether the base stream will be closed when self is closed.
    * @returns True if the base stream will be closed. 
    */
  getCloseBaseStream(): boolean;
  /**
    * Sets whether the base stream will be closed when self is closed.
    * @param closeBase True to close the base stream. 
    */
  setCloseBaseStream(closeBase: boolean): void;
  /**
    * The underlying base stream on which the io ops will be done. 
    */
  baseStream: import('../Gio').OutputStream;
  /**
    * If the base stream should be closed when the filter stream is closed. 
    */
  closeBaseStream: boolean;
}

