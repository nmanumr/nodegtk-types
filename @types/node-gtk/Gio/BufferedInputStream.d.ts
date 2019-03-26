import * as Gio from '../Gio';
export declare interface BufferedInputStream extends Gio.FilterInputStream, Gio.Seekable { }

/**
  * Buffered input stream implements Gio.FilterInputStream and provides
for buffered reads. 
  */
export declare class BufferedInputStream {
  /**
    * Creates a new Gio.InputStream from the given base_stream, with a buffer set to the default size (4 kilobytes).
    * @param baseStream a Gio.InputStream
    * @returns a Gio.InputStream for the given base_stream. 
    */
  static new(baseStream: import('../Gio').InputStream): import('../Gio').InputStream;
  /**
    * Creates a new Gio.BufferedInputStream from the given base_stream, with a buffer set to size.
    * @param baseStream a Gio.InputStream
    * @param size a #gsize
    * @returns a Gio.InputStream. 
    */
  static newSized(baseStream: import('../Gio').InputStream, size: number): import('../Gio').InputStream;
  /**
    * Tries to read count bytes from the stream into the buffer. Will block during this read.
    * @param count the number of bytes that will be read from the stream
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns the number of bytes read into self’s buffer, up to count, or -1 on error. 
    */
  fill(count: number, cancellable: import('../Gio').Cancellable | null): number;
  /**
    * Reads data into self’s buffer asynchronously, up to count size. io_priority can be used to prioritize reads. For the synchronous version of this function, see Gio.BufferedInputStream.fill().
    * @param count the number of bytes that will be read from the stream
    * @param ioPriority the I/O priority of the request
    * @param cancellable optional Gio.Cancellable object
    * @param callback a Gio.asyncReadyCallback
    * @param userData a object 
    */
  fillAsync(count: number, ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an asynchronous read.
    * @param result a Gio.AsyncResult
    * @returns a #gssize of the read stream, or -1 on an error. 
    */
  fillFinish(result: import('../Gio').AsyncResult): number;
  /**
    * Gets the size of the available data within the stream.
    * @returns size of the available stream. 
    */
  getAvailable(): number;
  /**
    * Gets the size of the input buffer.
    * @returns the current buffer size. 
    */
  getBufferSize(): number;
  /**
    * Peeks in the buffer, copying data of size count into buffer, offset offset bytes.
    * @param buffer a pointer to an allocated chunk of memory
    * @param offset a #gsize
    * @returns a #gsize of the number of bytes peeked, or -1 on error. 
    */
  peek(buffer: Int8Array, offset: number): number;
  /**
    * Returns the buffer with the currently available bytes. The returned buffer must not be modified and will become invalid when reading from the stream or filling the buffer.
    * @returns read-only buffer 
    */
  peekBuffer(): Int8Array;
  /**
    * Tries to read a single byte from the stream or the buffer. Will block during this read.
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns the byte read from the self, or -1 on end of stream or error. 
    */
  readByte(cancellable: import('../Gio').Cancellable | null): number;
  /**
    * Sets the size of the internal buffer of self to size, or to the size of the contents of the buffer. The buffer can never be resized smaller than its current contents.
    * @param size a #gsize 
    */
  setBufferSize(size: number): void;
  /**
    * The size of the backend buffer 
    */
  bufferSize: number;
}

