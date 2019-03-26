import * as GObject from '../GObject';
import * as Gio from '../Gio';
export declare interface ZlibCompressor extends GObject.Object, Gio.Converter { }

/**
  * Zlib decompression 
  */
export declare class ZlibCompressor {
  /**
    * Creates a new Gio.ZlibCompressor.
    * @param format The format to use for the compressed data
    * @param level compression level (0-9), -1 for default
    * @returns a new Gio.ZlibCompressor 
    */
  static new(format: import('../Gio').ZlibCompressorFormat, level: number): import('../Gio').ZlibCompressor;
  /**
    * Returns the Gio.ZlibCompressor :file-info property.
    * @returns a Gio.FileInfo, or None 
    */
  getFileInfo(): import('../Gio').FileInfo;
  /**
    * Sets file_info in self. If non-None, and self’s Gio.ZlibCompressor :format property is Gio.ZlibCompressorFormat.GZIP, it will be used to set the file name and modification time in the GZIP header of the compressed data.
    * @param fileInfo a Gio.FileInfo 
    */
  setFileInfo(fileInfo: import('../Gio').FileInfo | null): void;
  /**
    * File info 
    */
  fileInfo: import('../Gio').FileInfo;
  /**
    * The format of the compressed data 
    */
  format: import('../Gio').ZlibCompressorFormat;
  /**
    * The level of compression from 0 (no compression) to 9 (most compression), -1 for the default level 
    */
  level: number;
}

