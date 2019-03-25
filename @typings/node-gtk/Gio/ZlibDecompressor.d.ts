/**
  * Zlib decompression 
  */
export declare class ZlibDecompressor extends import('../GObject').Object, import('../Gio').Converter{
/**
  * Creates a new Gio.ZlibDecompressor.
  * @param format The format to use for the compressed data
  * @returns a new Gio.ZlibDecompressor 
  */
static new(format: import('../Gio').ZlibCompressorFormat): import('../Gio').ZlibDecompressor;
/**
  * Retrieves the Gio.FileInfo constructed from the GZIP header data of compressed data processed by compressor, or None if self’s Gio.ZlibDecompressor :format property is not Gio.ZlibCompressorFormat.GZIP, or the header data was not fully processed yet, or it not present in the data stream at all.
  * @returns a Gio.FileInfo, or None 
  */
getFileInfo(): import('../Gio').FileInfo;
/**
  * File info 
  */
fileInfo: import('../Gio').FileInfo;
/**
  * The format of the compressed data 
  */
format: import('../Gio').ZlibCompressorFormat;
;
}

