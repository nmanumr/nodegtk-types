/**
  * A data structure representing an IO Channel. The fields should be
considered private and should only be accessed with the following
functions. 
  */
export declare class IOChannel {
  /**
    * Converts an errno error number to a GLib.IOChannelError.
    * @param en an errno error number, e.g. EINVAL
    * @returns a GLib.IOChannelError error number, e.g. GLib.IOChannelError.INVAL. 
    */
  static errorFromErrno(en: number): import('../GLib').IOChannelError;
  static errorQuark(): number;
  /**
    * Open a file filename as a GLib.IOChannel using mode mode. This channel will be closed when the last reference to it is dropped, so there is no need to call GLib.IOChannel.close() (though doing so will not cause problems, as long as no attempt is made to access the channel after it is closed).
    * @param filename A string containing the name of a file
    * @param mode One of “r”, “w”, “a”, “r+”, “w+”, “a+”. These have the same meaning as in fopen()
    * @returns A GLib.IOChannel on success, None on failure. 
    */
  static newFile(filename: string, mode: string): import('../GLib').IOChannel;
  /**
    * Creates a new GLib.IOChannel given a file descriptor. On UNIX systems this works for plain files, pipes, and sockets.
    * @param fd a file descriptor.
    * @returns a new GLib.IOChannel. 
    */
  static unixNew(fd: number): import('../GLib').IOChannel;
  addWatch(): void;
  /**
    * Close an IO channel. Any pending data to be written will be flushed, ignoring errors. The channel will not be freed until the last reference is dropped using GLib.IOChannel.unref(). 
    */
  close(): void;
  /**
    * Flushes the write buffer for the GLib.IOChannel.
    * @returns the status of the operation: One of GLib.IOStatus.NORMAL, GLib.IOStatus.AGAIN, or GLib.IOStatus.ERROR. 
    */
  flush(): import('../GLib').IOStatus;
  /**
    * This function returns a GLib.IOCondition depending on whether there is data to be read/space to write data in the internal buffers in the GLib.IOChannel. Only the flags GLib.IOCondition.IN and GLib.IOCondition.OUT may be set.
    * @returns A GLib.IOCondition 
    */
  getBufferCondition(): import('../GLib').IOCondition;
  /**
    * Gets the buffer size.
    * @returns the size of the buffer. 
    */
  getBufferSize(): number;
  /**
    * Returns whether self is buffered.
    * @returns True if the self is buffered. 
    */
  getBuffered(): boolean;
  /**
    * Returns whether the file/socket/whatever associated with self will be closed when self receives its final unref and is destroyed. The default value of this is True for channels created by GLib.IOChannel.new_file (), and False for all other channels.
    * @returns True if the channel will be closed, False otherwise. 
    */
  getCloseOnUnref(): boolean;
  /**
    * Gets the encoding for the input/output of the channel. The internal encoding is always UTF-8. The encoding None makes the channel safe for binary data.
    * @returns A string containing the encoding, this string is owned by GLib and must not be freed. 
    */
  getEncoding(): string;
  /**
    * Gets the current flags for a GLib.IOChannel, including read-only flags such as GLib.IOFlags.IS_READABLE.
    * @returns the flags which are set on the channel 
    */
  getFlags(): import('../GLib').IOFlags;
  /**
    * This returns the string that GLib.IOChannel uses to determine where in the file a line break occurs. A value of None indicates autodetection.
    * @param length a location to return the length of the line terminator
    * @returns The line termination string. This value is owned by GLib and must not be freed. 
    */
  getLineTerm(length: number): string;
  /**
    * Initializes a GLib.IOChannel struct. 
    */
  init(): void;
  next(): void;
  /**
    * Reads data from a GLib.IOChannel.
    * @param buf a buffer to read the data into (which should be at least count bytes long)
    * @param count the number of bytes to read from the GLib.IOChannel
    * @param bytesRead returns the number of bytes actually read
    * @returns GLib.IOError.NONE if the operation was successful. 
    */
  read(buf: string, count: number, bytesRead: number): import('../GLib').IOError;
  /**
    * Replacement for GLib.IOChannel.read() with the new API.
    * @returns the status of the operation.  buf:a buffer to read data into bytes_read:The number of bytes read. This may be zero even on success if count < 6 and the channel’s encoding is non-None. This indicates that the next UTF-8 character is too wide for the buffer. 
    */
  readChars(): [import('../GLib').IOStatus, Int8Array, number];
  /**
    * Reads a line, including the terminating character(s), from a GLib.IOChannel into a newly-allocated string. str_return will contain allocated memory if the return is GLib.IOStatus.NORMAL.
    * @returns the status of the operation.  str_return:The line read from the GLib.IOChannel, including the line terminator. This data should be freed with GLib.free() when no longer needed. This is a nul-terminated string. If a length of zero is returned, this will be None instead. length:location to store length of the read data, or None terminator_pos:location to store position of line terminator, or None 
    */
  readLine(): [import('../GLib').IOStatus, string, number, number];
  /**
    * Reads a line from a GLib.IOChannel, using a GLib.String as a buffer.
    * @param buffer a GLib.String into which the line will be written. If buffer already contains data, the old data will be overwritten.
    * @param terminatorPos location to store position of line terminator, or None
    * @returns the status of the operation. 
    */
  readLineString(buffer: import('../GLib').String, terminatorPos: number | null): import('../GLib').IOStatus;
  /**
    * Reads all the remaining data from the file.
    * @returns GLib.IOStatus.NORMAL on success. This function never returns GLib.IOStatus.EOF.  str_return:Location to store a pointer to a string holding the remaining data in the GLib.IOChannel. This data should be freed with GLib.free() when no longer needed. This data is terminated by an extra nul character, but there may be other nuls in the intervening data. 
    */
  readToEnd(): [import('../GLib').IOStatus, Int8Array];
  /**
    * Reads a Unicode character from self. This function cannot be called on a channel with None encoding.
    * @returns a GLib.IOStatus  thechar:a location to return a character 
    */
  readUnichar(): [import('../GLib').IOStatus, string];
  readline(): void;
  readlines(): void;
  /**
    * Increments the reference count of a GLib.IOChannel.
    * @returns the self that was passed in (since 2.6) 
    */
  ref(): import('../GLib').IOChannel;
  /**
    * Sets the current position in the GLib.IOChannel, similar to the standard library function fseek().
    * @param offset an offset, in bytes, which is added to the position specified by type
    * @param type the position in the file, which can be GLib.SeekType.CUR (the current position), GLib.SeekType.SET (the start of the file), or GLib.SeekType.END (the end of the file)
    * @returns GLib.IOError.NONE if the operation was successful. 
    */
  seek(offset: number, type: import('../GLib').SeekType): import('../GLib').IOError;
  /**
    * Replacement for GLib.IOChannel.seek() with the new API.
    * @param offset The offset in bytes from the position specified by type
    * @param type a GLib.SeekType. The type GLib.SeekType.CUR is only allowed in those cases where a call to GLib.IOChannel.set_encoding () is allowed. See the documentation for GLib.IOChannel.set_encoding () for details.
    * @returns the status of the operation. 
    */
  seekPosition(offset: number, type: import('../GLib').SeekType): import('../GLib').IOStatus;
  /**
    * Sets the buffer size.
    * @param size the size of the buffer, or 0 to let GLib pick a good size 
    */
  setBufferSize(size: number): void;
  /**
    * The buffering state can only be set if the channel’s encoding is None. For any other encoding, the channel must be buffered.
    * @param buffered whether to set the channel buffered or unbuffered 
    */
  setBuffered(buffered: boolean): void;
  /**
    * Whether to close the channel on the final unref of the GLib.IOChannel data structure. The default value of this is True for channels created by GLib.IOChannel.new_file (), and False for all other channels.
    * @param doClose Whether to close the channel on the final unref of the GLib.IOChannel data structure. 
    */
  setCloseOnUnref(doClose: boolean): void;
  /**
    * Sets the encoding for the input/output of the channel. The internal encoding is always UTF-8. The default encoding for the external file is UTF-8.
    * @param encoding the encoding type
    * @returns GLib.IOStatus.NORMAL if the encoding was successfully set 
    */
  setEncoding(encoding: string | null): import('../GLib').IOStatus;
  /**
    * Sets the (writeable) flags in self to (flags & GLib.IOFlags.SET_MASK).
    * @param flags the flags to set on the IO channel
    * @returns the status of the operation. 
    */
  setFlags(flags: import('../GLib').IOFlags): import('../GLib').IOStatus;
  /**
    * This sets the string that GLib.IOChannel uses to determine where in the file a line break occurs.
    * @param lineTerm The line termination string. Use None for autodetect.  Autodetection breaks on “\n”, “\r\n”, “\r”, “\0”, and the Unicode paragraph separator. Autodetection should not be used for anything other than file-based channels.
    * @param length The length of the termination string. If -1 is passed, the string is assumed to be nul-terminated. This option allows termination strings with embedded nuls. 
    */
  setLineTerm(lineTerm: string | null, length: number): void;
  /**
    * Close an IO channel. Any pending data to be written will be flushed if flush is True. The channel will not be freed until the last reference is dropped using GLib.IOChannel.unref().
    * @param flush if True, flush pending
    * @returns the status of the operation. 
    */
  shutdown(flush: boolean): import('../GLib').IOStatus;
  /**
    * Returns the file descriptor of the GLib.IOChannel.
    * @returns the file descriptor of the GLib.IOChannel. 
    */
  unixGetFd(): number;
  /**
    * Decrements the reference count of a GLib.IOChannel. 
    */
  unref(): void;
  /**
    * Writes data to a GLib.IOChannel.
    * @param buf the buffer containing the data to write
    * @param count the number of bytes to write
    * @param bytesWritten the number of bytes actually written
    * @returns GLib.IOError.NONE if the operation was successful. 
    */
  write(buf: string, count: number, bytesWritten: number): import('../GLib').IOError;
  /**
    * Replacement for GLib.IOChannel.write() with the new API.
    * @param buf a buffer to write data from
    * @param count the size of the buffer. If -1, the buffer is taken to be a nul-terminated string.
    * @returns the status of the operation.   bytes_written:The number of bytes written. This can be nonzero even if the return value is not GLib.IOStatus.NORMAL. If the return value is GLib.IOStatus.NORMAL and the channel is blocking, this will always be equal to count if count >= 0. 
    */
  writeChars(buf: Int8Array, count: number): [import('../GLib').IOStatus, number];
  /**
    * Writes a Unicode character to self. This function cannot be called on a channel with None encoding.
    * @param thechar a character
    * @returns a GLib.IOStatus 
    */
  writeUnichar(thechar: string): import('../GLib').IOStatus;
  writelines(): void;
}

