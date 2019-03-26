/**
  * A wrapper for the POSIX access() function. This function is used to test a pathname for one or several of read, write or execute permissions, or just existence.
  * @param filename a pathname in the GLib file name encoding (UTF-8 on Windows)
  * @param mode as in access()
  * @returns zero if the pathname refers to an existing file system object that has all the tested permissions, or -1 otherwise or on error. 
  */
export declare function access(filename: string, mode: number): number;
/**
  * Determines the numeric value of a character as a decimal digit. Differs from GLib.unichar_digit_value() because it takes a str, so there’s no worry about sign extension if characters are signed.
  * @param c an ASCII character
  * @returns If c is a decimal digit (according to g_ascii_isdigit()), its numeric value. Otherwise, -1. 
  */
export declare function asciiDigitValue(c: number): number;
/**
  * Converts a float to a string, using the ‘.’ as decimal point.
  * @param buffer A buffer to place the resulting string in
  * @param bufLen The length of the buffer.
  * @param d The float to convert
  * @returns The pointer to the buffer with the converted string. 
  */
export declare function asciiDtostr(buffer: string, bufLen: number, d: number): string;
/**
  * Converts a float to a string, using the ‘.’ as decimal point. To format the number you pass in a printf()-style format string. Allowed conversion specifiers are ‘e’, ‘E’, ‘f’, ‘F’, ‘g’ and ‘G’.
  * @param buffer A buffer to place the resulting string in
  * @param bufLen The length of the buffer.
  * @param format The printf()-style format to use for the code to use for converting.
  * @param d The float to convert
  * @returns The pointer to the buffer with the converted string. 
  */
export declare function asciiFormatd(buffer: string, bufLen: number, format: string, d: number): string;
/**
  * Compare two strings, ignoring the case of ASCII characters.
  * @param s1 string to compare with s2
  * @param s2 string to compare with s1
  * @returns 0 if the strings match, a negative value if s1 < s2, or a positive value if s1 > s2. 
  */
export declare function asciiStrcasecmp(s1: string, s2: string): number;
/**
  * Converts all upper case ASCII letters to lower case ASCII letters.
  * @param str a string
  * @param len length of str in bytes, or -1 if str is nul-terminated
  * @returns a newly-allocated string, with all the upper case characters in str converted to lower case, with semantics that exactly match GLib.ascii_tolower(). (Note that this is unlike the old GLib.strdown(), which modified the string in place.) 
  */
export declare function asciiStrdown(str: string, len: number): string;
/**
  * A convenience function for converting a string to a signed number.
  * @param str a string
  * @param base base of a parsed number
  * @param min a lower bound (inclusive)
  * @param max an upper bound (inclusive)
  * @returns True if str was a number, otherwise False.   out_num:a return location for a number 
  */
export declare function asciiStringToSigned(str: string, base: number, min: number, max: number): [boolean, number];
/**
  * A convenience function for converting a string to an unsigned number.
  * @param str a string
  * @param base base of a parsed number
  * @param min a lower bound (inclusive)
  * @param max an upper bound (inclusive)
  * @returns True if str was a number, otherwise False.   out_num:a return location for a number 
  */
export declare function asciiStringToUnsigned(str: string, base: number, min: number, max: number): [boolean, number];
/**
  * Compare s1 and s2, ignoring the case of ASCII characters and any characters after the first n in each string.
  * @param s1 string to compare with s2
  * @param s2 string to compare with s1
  * @param n number of characters to compare
  * @returns 0 if the strings match, a negative value if s1 < s2, or a positive value if s1 > s2. 
  */
export declare function asciiStrncasecmp(s1: string, s2: string, n: number): number;
/**
  * Converts a string to a float value.
  * @param nptr the string to convert to a numeric value.
  * @returns the float value.  endptr:if non-None, it returns the character after the last character used in the conversion. 
  */
export declare function asciiStrtod(nptr: string): [number, string];
/**
  * Converts a string to a #gint64 value. This function behaves like the standard strtoll() function does in the C locale. It does this without actually changing the current locale, since that would not be thread-safe.
  * @param nptr the string to convert to a numeric value.
  * @param base to be used for the conversion, 2..36 or 0
  * @returns the #gint64 value or zero on error.   endptr:if non-None, it returns the character after the last character used in the conversion. 
  */
export declare function asciiStrtoll(nptr: string, base: number): [number, string];
/**
  * Converts a string to a #guint64 value. This function behaves like the standard strtoull() function does in the C locale. It does this without actually changing the current locale, since that would not be thread-safe.
  * @param nptr the string to convert to a numeric value.
  * @param base to be used for the conversion, 2..36 or 0
  * @returns the #guint64 value or zero on error.   endptr:if non-None, it returns the character after the last character used in the conversion. 
  */
export declare function asciiStrtoull(nptr: string, base: number): [number, string];
/**
  * Converts all lower case ASCII letters to upper case ASCII letters.
  * @param str a string
  * @param len length of str in bytes, or -1 if str is nul-terminated
  * @returns a newly allocated string, with all the lower case characters in str converted to upper case, with semantics that exactly match GLib.ascii_toupper(). (Note that this is unlike the old GLib.strup(), which modified the string in place.) 
  */
export declare function asciiStrup(str: string, len: number): string;
/**
  * Convert a character to ASCII lower case.
  * @param c any character
  * @returns the result of converting c to lower case. If c is not an ASCII upper case letter, c is returned unchanged. 
  */
export declare function asciiTolower(c: number): number;
/**
  * Convert a character to ASCII upper case.
  * @param c any character
  * @returns the result of converting c to upper case. If c is not an ASCII lower case letter, c is returned unchanged. 
  */
export declare function asciiToupper(c: number): number;
/**
  * Determines the numeric value of a character as a hexidecimal digit. Differs from GLib.unichar_xdigit_value() because it takes a str, so there’s no worry about sign extension if characters are signed.
  * @param c an ASCII character.
  * @returns If c is a hex digit (according to g_ascii_isxdigit()), its numeric value. Otherwise, -1. 
  */
export declare function asciiXdigitValue(c: number): number;
export declare function assertWarning(logDomain: string, file: string, line: number, prettyFunction: string, expression: string): void;
export declare function assertionMessage(domain: string, file: string, line: number, func: string, message: string): void;
export declare function assertionMessageCmpstr(domain: string, file: string, line: number, func: string, expr: string, arg1: string, cmp: string, arg2: string): void;
export declare function assertionMessageError(domain: string, file: string, line: number, func: string, expr: string, error: import('../GLib').Error, errorDomain: number, errorCode: number): void;
/**
  * Specifies a function to be called at normal program termination.
  * @param func the function to call on normal program termination. 
  */
export declare function atexit(func: import('../GLib').voidFunc): void;
/**
  * Atomically adds val to the value of atomic.
  * @param atomic a pointer to a int or int
  * @param val the value to add
  * @returns the value of atomic before the add, signed 
  */
export declare function atomicIntAdd(atomic: number, val: number): number;
/**
  * Performs an atomic bitwise ‘and’ of the value of atomic and val, storing the result back in atomic.
  * @param atomic a pointer to a int or int
  * @param val the value to ‘and’
  * @returns the value of atomic before the operation, unsigned 
  */
export declare function atomicIntAnd(atomic: number, val: number): number;
/**
  * Compares atomic to oldval and, if equal, sets it to newval. If atomic was not equal to oldval then no change occurs.
  * @param atomic a pointer to a int or int
  * @param oldval the value to compare with
  * @param newval the value to conditionally replace with
  * @returns True if the exchange took place 
  */
export declare function atomicIntCompareAndExchange(atomic: number, oldval: number, newval: number): boolean;
/**
  * Decrements the value of atomic by 1.
  * @param atomic a pointer to a int or int
  * @returns True if the resultant value is zero 
  */
export declare function atomicIntDecAndTest(atomic: number): boolean;
/**
  * This function existed before GLib.atomic_int_add() returned the prior value of the integer (which it now does).  It is retained only for compatibility reasons.  Don’t use this function in new code.
  * @param atomic a pointer to a int
  * @param val the value to add
  * @returns the value of atomic before the add, signed 
  */
export declare function atomicIntExchangeAndAdd(atomic: number, val: number): number;
/**
  * Gets the current value of atomic.
  * @param atomic a pointer to a int or int
  * @returns the value of the integer 
  */
export declare function atomicIntGet(atomic: number): number;
/**
  * Increments the value of atomic by 1.
  * @param atomic a pointer to a int or int 
  */
export declare function atomicIntInc(atomic: number): void;
/**
  * Performs an atomic bitwise ‘or’ of the value of atomic and val, storing the result back in atomic.
  * @param atomic a pointer to a int or int
  * @param val the value to ‘or’
  * @returns the value of atomic before the operation, unsigned 
  */
export declare function atomicIntOr(atomic: number, val: number): number;
/**
  * Sets the value of atomic to newval.
  * @param atomic a pointer to a int or int
  * @param newval a new value to store 
  */
export declare function atomicIntSet(atomic: number, newval: number): void;
/**
  * Performs an atomic bitwise ‘xor’ of the value of atomic and val, storing the result back in atomic.
  * @param atomic a pointer to a int or int
  * @param val the value to ‘xor’
  * @returns the value of atomic before the operation, unsigned 
  */
export declare function atomicIntXor(atomic: number, val: number): number;
/**
  * Atomically adds val to the value of atomic.
  * @param atomic a pointer to a object-sized value
  * @param val the value to add
  * @returns the value of atomic before the add, signed 
  */
export declare function atomicPointerAdd(atomic: Object, val: number): number;
/**
  * Performs an atomic bitwise ‘and’ of the value of atomic and val, storing the result back in atomic.
  * @param atomic a pointer to a object-sized value
  * @param val the value to ‘and’
  * @returns the value of atomic before the operation, unsigned 
  */
export declare function atomicPointerAnd(atomic: Object, val: number): number;
/**
  * Compares atomic to oldval and, if equal, sets it to newval. If atomic was not equal to oldval then no change occurs.
  * @param atomic a pointer to a object-sized value
  * @param oldval the value to compare with
  * @param newval the value to conditionally replace with
  * @returns True if the exchange took place 
  */
export declare function atomicPointerCompareAndExchange(atomic: Object, oldval: Object | null, newval: Object | null): boolean;
/**
  * Gets the current value of atomic.
  * @param atomic a pointer to a object-sized value
  * @returns the value of the pointer 
  */
export declare function atomicPointerGet(atomic: Object): Object | null;
/**
  * Performs an atomic bitwise ‘or’ of the value of atomic and val, storing the result back in atomic.
  * @param atomic a pointer to a object-sized value
  * @param val the value to ‘or’
  * @returns the value of atomic before the operation, unsigned 
  */
export declare function atomicPointerOr(atomic: Object, val: number): number;
/**
  * Sets the value of atomic to newval.
  * @param atomic a pointer to a object-sized value
  * @param newval a new value to store 
  */
export declare function atomicPointerSet(atomic: Object, newval: Object | null): void;
/**
  * Performs an atomic bitwise ‘xor’ of the value of atomic and val, storing the result back in atomic.
  * @param atomic a pointer to a object-sized value
  * @param val the value to ‘xor’
  * @returns the value of atomic before the operation, unsigned 
  */
export declare function atomicPointerXor(atomic: Object, val: number): number;
/**
  * Atomically acquires a reference on the data pointed by mem_block.
  * @param memBlock a pointer to reference counted data
  * @returns a pointer to the data, with its reference count increased 
  */
export declare function atomicRcBoxAcquire(memBlock: Object): Object;
/**
  * Allocates block_size bytes of memory, and adds atomic reference counting semantics to it.
  * @param blockSize the size of the allocation, must be greater than 0
  * @returns a pointer to the allocated memory 
  */
export declare function atomicRcBoxAlloc(blockSize: number): Object;
/**
  * Allocates block_size bytes of memory, and adds atomic referenc counting semantics to it.
  * @param blockSize the size of the allocation, must be greater than 0
  * @returns a pointer to the allocated memory 
  */
export declare function atomicRcBoxAlloc0(blockSize: number): Object;
/**
  * Allocates a new block of data with atomit reference counting semantics, and copies block_size bytes of mem_block into it.
  * @param blockSize the number of bytes to copy, must be greater than 0
  * @param memBlock the memory to copy
  * @returns a pointer to the allocated memory 
  */
export declare function atomicRcBoxDup(blockSize: number, memBlock: Object): Object;
/**
  * Retrieves the size of the reference counted data pointed by mem_block.
  * @param memBlock a pointer to reference counted data
  * @returns the size of the data, in bytes 
  */
export declare function atomicRcBoxGetSize(memBlock: Object): number;
/**
  * Atomically releases a reference on the data pointed by mem_block.
  * @param memBlock a pointer to reference counted data 
  */
export declare function atomicRcBoxRelease(memBlock: Object): void;
/**
  * Atomically releases a reference on the data pointed by mem_block.
  * @param memBlock a pointer to reference counted data
  * @param clearFunc a function to call when clearing the data 
  */
export declare function atomicRcBoxReleaseFull(memBlock: Object, clearFunc: import('../GLib').destroyNotify): void;
/**
  * Atomically compares the current value of arc with val.
  * @param arc the address of an atomic reference count variable
  * @param val the value to compare
  * @returns True if the reference count is the same as the given value 
  */
export declare function atomicRefCountCompare(arc: number, val: number): boolean;
/**
  * Atomically decreases the reference count.
  * @param arc the address of an atomic reference count variable
  * @returns True if the reference count reached 0, and False otherwise 
  */
export declare function atomicRefCountDec(arc: number): boolean;
/**
  * Atomically increases the reference count.
  * @param arc the address of an atomic reference count variable 
  */
export declare function atomicRefCountInc(arc: number): void;
/**
  * Atomically initializes a reference count variable.
  * @param arc the address of an atomic reference count variable 
  */
export declare function atomicRefCountInit(arc: number): void;
/**
  * Decode a sequence of Base-64 encoded text into binary data.  Note that the returned binary data is not necessarily zero-terminated, so it should not be used as a character string.
  * @param text zero-terminated string with base64 text to decode
  * @returns newly allocated buffer containing the binary data that text represents. The returned buffer must be freed with GLib.free(). 
  */
export declare function base64Decode(text: string): Int8Array;
/**
  * Decode a sequence of Base-64 encoded text into binary data by overwriting the input data.
  * @param text zero-terminated string with base64 text to decode
  * @returns The binary data that text responds. This pointer is the same as the input text.  text:zero-terminated string with base64 text to decode 
  */
export declare function base64DecodeInplace(text: Int8Array): [number, Int8Array];
/**
  * Encode a sequence of binary data into its Base-64 stringified representation.
  * @param data the binary data to encode
  * @returns a newly allocated, zero-terminated Base-64 encoded string representing data. The returned string must be freed with GLib.free(). 
  */
export declare function base64Encode(data: Int8Array): string;
/**
  * Flush the status from a sequence of calls to GLib.base64_encode_step().
  * @param breakLines whether to break long lines
  * @param state Saved state from GLib.base64_encode_step()
  * @param save Saved state from GLib.base64_encode_step()
  * @returns The number of bytes of output that was written   out:pointer to destination buffer state:Saved state from GLib.base64_encode_step() save:Saved state from GLib.base64_encode_step() 
  */
export declare function base64EncodeClose(breakLines: boolean, state: number, save: number): [number, Int8Array, number, number];
/**
  * Incrementally encode a sequence of binary data into its Base-64 stringified representation. By calling this function multiple times you can convert data in chunks to avoid having to have the full encoded data in memory.
  * @param In the binary data to encode
  * @param breakLines whether to break long lines
  * @param state Saved state between steps, initialize to 0
  * @param save Saved state between steps, initialize to 0
  * @returns The number of bytes of output that was written   out:pointer to destination buffer state:Saved state between steps, initialize to 0 save:Saved state between steps, initialize to 0 
  */
export declare function base64EncodeStep(In: Int8Array, breakLines: boolean, state: number, save: number): [number, Int8Array, number, number];
/**
  * Gets the name of the file without any leading directory components. It returns a pointer into the given file name string.
  * @param fileName the name of the file
  * @returns the name of the file without any leading directory components 
  */
export declare function basename(fileName: string): string;
/**
  * Sets the indicated lock_bit in address.  If the bit is already set, this call will block until GLib.bit_unlock() unsets the corresponding bit.
  * @param address a pointer to an integer
  * @param lockBit a bit value between 0 and 31 
  */
export declare function bitLock(address: number, lockBit: number): void;
/**
  * Find the position of the first bit set in mask, searching from (but not including) nth_bit upwards. Bits are numbered from 0 (least significant) to sizeof(int) * 8 - 1 (31 or 63, usually). To start searching from the 0th bit, set nth_bit to -1.
  * @param mask a int containing flags
  * @param nthBit the index of the bit to start the search from
  * @returns the index of the first bit set which is higher than nth_bit, or -1 if no higher bits are set 
  */
export declare function bitNthLsf(mask: number, nthBit: number): number;
/**
  * Find the position of the first bit set in mask, searching from (but not including) nth_bit downwards. Bits are numbered from 0 (least significant) to sizeof(int) * 8 - 1 (31 or 63, usually). To start searching from the last bit, set nth_bit to -1 or GLib.SIZEOF_LONG * 8.
  * @param mask a int containing flags
  * @param nthBit the index of the bit to start the search from
  * @returns the index of the first bit set which is lower than nth_bit, or -1 if no lower bits are set 
  */
export declare function bitNthMsf(mask: number, nthBit: number): number;
/**
  * Gets the number of bits used to hold number, e.g. if number is 4, 3 bits are needed.
  * @param number a int
  * @returns the number of bits used to hold number 
  */
export declare function bitStorage(number: number): number;
/**
  * Sets the indicated lock_bit in address, returning True if successful.  If the bit is already set, returns False immediately.
  * @param address a pointer to an integer
  * @param lockBit a bit value between 0 and 31
  * @returns True if the lock was acquired 
  */
export declare function bitTrylock(address: number, lockBit: number): boolean;
/**
  * Clears the indicated lock_bit in address.  If another thread is currently blocked in GLib.bit_lock() on this same bit then it will be woken up.
  * @param address a pointer to an integer
  * @param lockBit a bit value between 0 and 31 
  */
export declare function bitUnlock(address: number, lockBit: number): void;
export declare function bookmarkFileErrorQuark(): number;
/**
  * Behaves exactly like g_build_filename(), but takes the path elements as a string array, instead of varargs. This function is mainly meant for language bindings.
  * @param args None-terminated array of strings containing the path elements.
  * @returns a newly-allocated string that must be freed with GLib.free(). 
  */
export declare function buildFilenamev(args: string): string;
/**
  * Behaves exactly like g_build_path(), but takes the path elements as a string array, instead of varargs. This function is mainly meant for language bindings.
  * @param separator a string used to separator the elements of the path.
  * @param args None-terminated array of strings containing the path elements.
  * @returns a newly-allocated string that must be freed with GLib.free(). 
  */
export declare function buildPathv(separator: string, args: string): string;
/**
  * Frees the memory allocated by the GLib.ByteArray. If free_segment is True it frees the actual byte data. If the reference count of array is greater than one, the GLib.ByteArray wrapper is preserved but the size of array will be set to zero.
  * @param array a GLib.ByteArray
  * @param freeSegment if True the actual byte data is freed as well
  * @returns the element data if free_segment is False, otherwise None.  The element data should be freed using GLib.free(). 
  */
export declare function byteArrayFree(array: Int8Array, freeSegment: boolean): number;
/**
  * Transfers the data from the GLib.ByteArray into a new immutable GLib.Bytes.
  * @param array a GLib.ByteArray
  * @returns a new immutable GLib.Bytes representing same byte data that was in the array 
  */
export declare function byteArrayFreeToBytes(array: Int8Array): import('../GLib').Bytes;
/**
  * Creates a new GLib.ByteArray with a reference count of 1.
  * @returns the new GLib.ByteArray 
  */
export declare function byteArrayNew(): Int8Array;
/**
  * Create byte array containing the data. The data will be owned by the array and will be freed with GLib.free(), i.e. it could be allocated using GLib.strdup().
  * @param data byte data for the array
  * @returns a new GLib.ByteArray 
  */
export declare function byteArrayNewTake(data: Int8Array): Int8Array;
/**
  * Atomically decrements the reference count of array by one. If the reference count drops to 0, all memory allocated by the array is released. This function is thread-safe and may be called from any thread.
  * @param array A GLib.ByteArray 
  */
export declare function byteArrayUnref(array: Int8Array): void;
/**
  * Gets the canonical file name from filename. All triple slashes are turned into single slashes, and all .. and ``.``s resolved against relative_to.
  * @param filename the name of the file
  * @param relativeTo the relative directory, or None to use the current working directory
  * @returns a newly allocated string with the canonical file path 
  */
export declare function canonicalizeFilename(filename: string, relativeTo: string | null): string;
/**
  * A wrapper for the POSIX chdir() function. The function changes the current directory of the process to path.
  * @param path a pathname in the GLib file name encoding (UTF-8 on Windows)
  * @returns 0 on success, -1 if an error occurred. 
  */
export declare function chdir(path: string): number;
/**
  * Checks that the GLib library in use is compatible with the given version. Generally you would pass in the constants GLib.MAJOR_VERSION, GLib.MINOR_VERSION, GLib.MICRO_VERSION as the three arguments to this function; that produces a check that the library in use is compatible with the version of GLib the application or module was compiled against.
  * @param requiredMajor the required major version
  * @param requiredMinor the required minor version
  * @param requiredMicro the required micro version
  * @returns None if the GLib library is compatible with the given version, or a string describing the version mismatch. The returned string is owned by GLib and must not be modified or freed. 
  */
export declare function checkVersion(requiredMajor: number, requiredMinor: number, requiredMicro: number): string;
/**
  * Gets the length in bytes of digests of type checksum_type
  * @param checksumType a GLib.ChecksumType
  * @returns the checksum length, or -1 if checksum_type is not supported. 
  */
export declare function checksumTypeGetLength(checksumType: import('../GLib').ChecksumType): number;
/**
  * Sets a function to be called when the child indicated by pid exits, at the priority priority.
  * @param priority priority – the priority of the idle source. Typically this will be in the range between GLib.PRIORITY_DEFAULT_IDLE and GLib.PRIORITY_HIGH_IDLE.
  * @param pid pid – process to watch. On POSIX the positive pid of a child process. On Windows a handle for a process (which doesn’t have to be a child).
  * @param function function – function to call
  * @param data data – data to pass to function 
  */
export declare function childWatchAdd(priority, pid, fn, data): void;
/**
  * Creates a new child_watch source.
  * @param pid process to watch. On POSIX the positive pid of a child process. On Windows a handle for a process (which doesn’t have to be a child).
  * @returns the newly-created child watch source 
  */
export declare function childWatchSourceNew(pid: number): import('../GLib').Source;
/**
  * If err or err is None, does nothing. Otherwise, calls GLib.Error.free() on err and sets err to None. 
  */
export declare function clearError(): void;
/**
  * This wraps the close() call; in case of error, %errno will be preserved, but the error will also be stored as a GLib.Error in error.
  * @param fd A file descriptor
  * @returns True on success, False if there was an error. 
  */
export declare function close(fd: number): boolean;
/**
  * Computes the checksum for a binary data. This is a convenience wrapper for GLib.Checksum.new(), GLib.Checksum.get_string() and GLib.Checksum.free().
  * @param checksumType a GLib.ChecksumType
  * @param data binary blob to compute the digest of
  * @returns the digest of the binary data as a string in hexadecimal. The returned string should be freed with GLib.free() when done using it. 
  */
export declare function computeChecksumForBytes(checksumType: import('../GLib').ChecksumType, data: import('../GLib').Bytes): string;
/**
  * Computes the checksum for a binary data of length. This is a convenience wrapper for GLib.Checksum.new(), GLib.Checksum.get_string() and GLib.Checksum.free().
  * @param checksumType a GLib.ChecksumType
  * @param data binary blob to compute the digest of
  * @returns the digest of the binary data as a string in hexadecimal. The returned string should be freed with GLib.free() when done using it. 
  */
export declare function computeChecksumForData(checksumType: import('../GLib').ChecksumType, data: Int8Array): string;
/**
  * Computes the checksum of a string.
  * @param checksumType a GLib.ChecksumType
  * @param str the string to compute the checksum of
  * @param length the length of the string, or -1 if the string is null-terminated.
  * @returns the checksum as a hexadecimal string. The returned string should be freed with GLib.free() when done using it. 
  */
export declare function computeChecksumForString(checksumType: import('../GLib').ChecksumType, str: string, length: number): string;
/**
  * Computes the HMAC for a binary data. This is a convenience wrapper for g_hmac_new(), GLib.Hmac.get_string() and GLib.Hmac.unref().
  * @param digestType a GLib.ChecksumType to use for the HMAC
  * @param key the key to use in the HMAC
  * @param data binary blob to compute the HMAC of
  * @returns the HMAC of the binary data as a string in hexadecimal. The returned string should be freed with GLib.free() when done using it. 
  */
export declare function computeHmacForBytes(digestType: import('../GLib').ChecksumType, key: import('../GLib').Bytes, data: import('../GLib').Bytes): string;
/**
  * Computes the HMAC for a binary data of length. This is a convenience wrapper for g_hmac_new(), GLib.Hmac.get_string() and GLib.Hmac.unref().
  * @param digestType a GLib.ChecksumType to use for the HMAC
  * @param key the key to use in the HMAC
  * @param data binary blob to compute the HMAC of
  * @returns the HMAC of the binary data as a string in hexadecimal. The returned string should be freed with GLib.free() when done using it. 
  */
export declare function computeHmacForData(digestType: import('../GLib').ChecksumType, key: Int8Array, data: Int8Array): string;
/**
  * Computes the HMAC for a string.
  * @param digestType a GLib.ChecksumType to use for the HMAC
  * @param key the key to use in the HMAC
  * @param str the string to compute the HMAC for
  * @param length the length of the string, or -1 if the string is nul-terminated
  * @returns the HMAC as a hexadecimal string. The returned string should be freed with GLib.free() when done using it. 
  */
export declare function computeHmacForString(digestType: import('../GLib').ChecksumType, key: Int8Array, str: string, length: number): string;
/**
  * Converts a string from one character set to another.
  * @param str the string to convert.
  * @param toCodeset name of character set into which to convert str
  * @param fromCodeset character set of str.
  * @returns If the conversion was successful, a newly allocated buffer containing the converted string, which must be freed with GLib.free(). Otherwise None and error will be set.   bytes_read:location to store the number of bytes in the input string that were successfully converted, or None. Even if the conversion was successful, this may be less than len if there were partial characters at the end of the input. If the error GLib.ConvertError.ILLEGAL_SEQUENCE occurs, the value stored will be the byte offset after the last valid input sequence. 
  */
export declare function convert(str: Int8Array, toCodeset: string, fromCodeset: string): [Int8Array, number];
export declare function convertErrorQuark(): number;
/**
  * Converts a string from one character set to another, possibly including fallback sequences for characters not representable in the output. Note that it is not guaranteed that the specification for the fallback sequences in fallback will be honored. Some systems may do an approximate conversion from from_codeset to to_codeset in their iconv() functions, in which case GLib will simply return that approximate conversion.
  * @param str the string to convert.
  * @param toCodeset name of character set into which to convert str
  * @param fromCodeset character set of str.
  * @param fallback UTF-8 string to use in place of characters not present in the target encoding. (The string must be representable in the target encoding). If None, characters not in the target encoding will be represented as Unicode escapes \uxxxx or \Uxxxxyyyy.
  * @returns If the conversion was successful, a newly allocated buffer containing the converted string, which must be freed with GLib.free(). Otherwise None and error will be set.   bytes_read:location to store the number of bytes in the input string that were successfully converted, or None. Even if the conversion was successful, this may be less than len if there were partial characters at the end of the input. 
  */
export declare function convertWithFallback(str: Int8Array, toCodeset: string, fromCodeset: string, fallback: string): [Int8Array, number];
/**
  * Calls the given function for each data element of the datalist. The function is called with each data element’s #GQuark id and data, together with the given user_data parameter. Note that this function is NOT thread-safe. So unless datalist can be protected from any modifications during invocation of this function, it should not be called.
  * @param datalist a datalist.
  * @param func the function to call for each data element.
  * @param userData user data to pass to the function. 
  */
export declare function datalistForeach(datalist: import('../GLib').Data, func: import('../GLib').dataForeachFunc, userData: Object | null): void;
/**
  * Gets a data element, using its string identifier. This is slower than GLib.datalist_id_get_data() because it compares strings.
  * @param datalist a datalist.
  * @param key the string identifying a data element.
  * @returns the data element, or None if it is not found. 
  */
export declare function datalistGetData(datalist: import('../GLib').Data, key: string): Object | null;
/**
  * Gets flags values packed in together with the datalist. See GLib.datalist_set_flags().
  * @param datalist pointer to the location that holds a list
  * @returns the flags of the datalist 
  */
export declare function datalistGetFlags(datalist: import('../GLib').Data): number;
/**
  * Retrieves the data element corresponding to key_id.
  * @param datalist a datalist.
  * @param keyId the #GQuark identifying a data element.
  * @returns the data element, or None if it is not found. 
  */
export declare function datalistIdGetData(datalist: import('../GLib').Data, keyId: number): Object | null;
/**
  * Turns on flag values for a data list. This function is used to keep a small number of boolean flags in an object with a data list without using any additional space. It is not generally useful except in circumstances where space is very tight. (It is used in the base #GObject type, for example.)
  * @param datalist pointer to the location that holds a list
  * @param flags the flags to turn on. The values of the flags are restricted by GLib.DATALIST_FLAGS_MASK (currently 3; giving two possible boolean flags). A value for flags that doesn’t fit within the mask is an error. 
  */
export declare function datalistSetFlags(datalist: import('../GLib').Data, flags: number): void;
/**
  * Turns off flag values for a data list. See GLib.datalist_unset_flags()
  * @param datalist pointer to the location that holds a list
  * @param flags the flags to turn off. The values of the flags are restricted by GLib.DATALIST_FLAGS_MASK (currently 3: giving two possible boolean flags). A value for flags that doesn’t fit within the mask is an error. 
  */
export declare function datalistUnsetFlags(datalist: import('../GLib').Data, flags: number): void;
/**
  * Destroys the dataset, freeing all memory allocated, and calling any destroy functions set for data elements.
  * @param datasetLocation the location identifying the dataset. 
  */
export declare function datasetDestroy(datasetLocation: Object): void;
/**
  * Calls the given function for each data element which is associated with the given location. Note that this function is NOT thread-safe. So unless dataset_location can be protected from any modifications during invocation of this function, it should not be called.
  * @param datasetLocation the location identifying the dataset.
  * @param func the function to call for each data element.
  * @param userData user data to pass to the function. 
  */
export declare function datasetForeach(datasetLocation: Object, func: import('../GLib').dataForeachFunc, userData: Object | null): void;
/**
  * Gets the data element corresponding to a #GQuark.
  * @param datasetLocation the location identifying the dataset.
  * @param keyId the #GQuark id to identify the data element.
  * @returns the data element corresponding to the #GQuark, or None if it is not found. 
  */
export declare function datasetIdGetData(datasetLocation: Object, keyId: number): Object | null;
/**
  * Returns the number of days in a month, taking leap years into account.
  * @param month month
  * @param year year
  * @returns number of days in month during the year 
  */
export declare function dateGetDaysInMonth(month: import('../GLib').DateMonth, year: number): number;
/**
  * Returns the number of weeks in the year, where weeks are taken to start on Monday. Will be 52 or 53. The date must be valid. (Years always have 52 7-day periods, plus 1 or 2 extra days depending on whether it’s a leap year. This function is basically telling you how many Mondays are in the year, i.e. there are 53 Mondays if one of the extra days happens to be a Monday.)
  * @param year a year
  * @returns number of Mondays in the year 
  */
export declare function dateGetMondayWeeksInYear(year: number): number;
/**
  * Returns the number of weeks in the year, where weeks are taken to start on Sunday. Will be 52 or 53. The date must be valid. (Years always have 52 7-day periods, plus 1 or 2 extra days depending on whether it’s a leap year. This function is basically telling you how many Sundays are in the year, i.e. there are 53 Sundays if one of the extra days happens to be a Sunday.)
  * @param year year to count weeks in
  * @returns the number of weeks in year 
  */
export declare function dateGetSundayWeeksInYear(year: number): number;
/**
  * Returns True if the year is a leap year.
  * @param year year to check
  * @returns True if the year is a leap year 
  */
export declare function dateIsLeapYear(year: number): boolean;
/**
  * Generates a printed representation of the date, in a locale-specific way. Works just like the platform’s C library strftime() function, but only accepts date-related formats; time-related formats give undefined results. Date must be valid. Unlike strftime() (which uses the locale encoding), works on a UTF-8 format string and stores a UTF-8 result.
  * @param s destination buffer
  * @param slen buffer size
  * @param format format string
  * @param date valid GLib.Date
  * @returns number of characters written to the buffer, or 0 the buffer was too small 
  */
export declare function dateStrftime(s: string, slen: number, format: string, date: import('../GLib').Date): number;
/**
  * A comparison function for GLib.DateTimes that is suitable as a GLib.CompareFunc. Both GLib.DateTimes must be non-None.
  * @param dt1 first GLib.DateTime to compare
  * @param dt2 second GLib.DateTime to compare
  * @returns -1, 0 or 1 if dt1 is less than, equal to or greater than dt2. 
  */
export declare function dateTimeCompare(dt1: Object, dt2: Object): number;
/**
  * Checks to see if dt1 and dt2 are equal.
  * @param dt1 a GLib.DateTime
  * @param dt2 a GLib.DateTime
  * @returns True if dt1 and dt2 are equal 
  */
export declare function dateTimeEqual(dt1: Object, dt2: Object): boolean;
/**
  * Hashes datetime into a int, suitable for use within GLib.HashTable.
  * @param datetime a GLib.DateTime
  * @returns a int containing the hash 
  */
export declare function dateTimeHash(datetime: Object): number;
/**
  * Returns True if the day of the month is valid (a day is valid if it’s between 1 and 31 inclusive).
  * @param day day to check
  * @returns True if the day is valid 
  */
export declare function dateValidDay(day: number): boolean;
/**
  * Returns True if the day-month-year triplet forms a valid, existing day in the range of days GLib.Date understands (Year 1 or later, no more than a few thousand years in the future).
  * @param day day
  * @param month month
  * @param year year
  * @returns True if the date is a valid one 
  */
export declare function dateValidDmy(day: number, month: import('../GLib').DateMonth, year: number): boolean;
/**
  * Returns True if the Julian day is valid. Anything greater than zero is basically a valid Julian, though there is a 32-bit limit.
  * @param julianDate Julian day to check
  * @returns True if the Julian day is valid 
  */
export declare function dateValidJulian(julianDate: number): boolean;
/**
  * Returns True if the month value is valid. The 12 GLib.DateMonth enumeration values are the only valid months.
  * @param month month
  * @returns True if the month is valid 
  */
export declare function dateValidMonth(month: import('../GLib').DateMonth): boolean;
/**
  * Returns True if the weekday is valid. The seven GLib.DateWeekday enumeration values are the only valid weekdays.
  * @param weekday weekday
  * @returns True if the weekday is valid 
  */
export declare function dateValidWeekday(weekday: import('../GLib').DateWeekday): boolean;
/**
  * Returns True if the year is valid. Any year greater than 0 is valid, though there is a 16-bit limit to what GLib.Date will understand.
  * @param year year
  * @returns True if the year is valid 
  */
export declare function dateValidYear(year: number): boolean;
/**
  * This is a variant of GLib.dgettext() that allows specifying a locale category instead of always using LC_MESSAGES. See GLib.dgettext() for more information about how this functions differs from calling dcgettext() directly.
  * @param domain the translation domain to use, or None to use the domain set with textdomain()
  * @param msgid message to translate
  * @param category a locale category
  * @returns the translated string for the given locale category 
  */
export declare function dcgettext(domain: string | null, msgid: string, category: number): string;
/**
  * This function is a wrapper of dgettext() which does not translate the message if the default domain as set with textdomain() has no translations for the current locale.
  * @param domain the translation domain to use, or None to use the domain set with textdomain()
  * @param msgid message to translate
  * @returns The translated string 
  */
export declare function dgettext(domain: string | null, msgid: string): string;
/**
  * Creates a subdirectory in the preferred directory for temporary files (as returned by GLib.get_tmp_dir()).
  * @param tmpl Template for directory name, as in g_mkdtemp(), basename only, or None for a default template
  * @returns The actual name used. This string should be freed with GLib.free() when not needed any longer and is is in the GLib file name encoding. In case of errors, None is returned and error will be set. 
  */
export declare function dirMakeTmp(tmpl: string | null): string;
/**
  * Compares two object arguments and returns True if they are equal. It can be passed to g_hash_table_new() as the key_equal_func parameter, when using opaque pointers compared by pointer value as keys in a GLib.HashTable.
  * @param v1 a key
  * @param v2 a key to compare with v1
  * @returns True if the two keys match. 
  */
export declare function directEqual(v1: Object | null, v2: Object | null): boolean;
/**
  * Converts a object to a hash value. It can be passed to g_hash_table_new() as the hash_func parameter, when using opaque pointers compared by pointer value as keys in a GLib.HashTable.
  * @param v a object key
  * @returns a hash value corresponding to the key. 
  */
export declare function directHash(v: Object | null): number;
/**
  * This function is a wrapper of dngettext() which does not translate the message if the default domain as set with textdomain() has no translations for the current locale.
  * @param domain the translation domain to use, or None to use the domain set with textdomain()
  * @param msgid message to translate
  * @param msgidPlural plural form of the message
  * @param n the quantity for which translation is needed
  * @returns The translated string 
  */
export declare function dngettext(domain: string | null, msgid: string, msgidPlural: string, n: number): string;
/**
  * Compares the two float values being pointed to and returns True if they are equal. It can be passed to g_hash_table_new() as the key_equal_func parameter, when using non-None pointers to doubles as keys in a GLib.HashTable.
  * @param v1 a pointer to a float key
  * @param v2 a pointer to a float key to compare with v1
  * @returns True if the two keys match. 
  */
export declare function doubleEqual(v1: Object, v2: Object): boolean;
/**
  * Converts a pointer to a float to a hash value. It can be passed to g_hash_table_new() as the hash_func parameter, It can be passed to g_hash_table_new() as the hash_func parameter, when using non-None pointers to doubles as keys in a GLib.HashTable.
  * @param v a pointer to a float key
  * @returns a hash value corresponding to the key. 
  */
export declare function doubleHash(v: Object): number;
/**
  * This function is a variant of GLib.dgettext() which supports a disambiguating message context. GNU gettext uses the ‘\004’ character to separate the message context and message id in msgctxtid. If 0 is passed as msgidoffset, this function will fall back to trying to use the deprecated convention of using “|” as a separation character.
  * @param domain the translation domain to use, or None to use the domain set with textdomain()
  * @param msgctxtid a combined message context and message id, separated by a \004 character
  * @param msgidoffset the offset of the message id in msgctxid
  * @returns The translated string 
  */
export declare function dpgettext(domain: string | null, msgctxtid: string, msgidoffset: number): string;
/**
  * This function is a variant of GLib.dgettext() which supports a disambiguating message context. GNU gettext uses the ‘\004’ character to separate the message context and message id in msgctxtid.
  * @param domain the translation domain to use, or None to use the domain set with textdomain()
  * @param context the message context
  * @param msgid the message
  * @returns The translated string 
  */
export declare function dpgettext2(domain: string | null, context: string, msgid: string): string;
/**
  * Returns the value of the environment variable variable in the provided list envp.
  * @param envp an environment list (eg, as returned from GLib.get_environ()), or None for an empty environment list
  * @param variable the environment variable to get
  * @returns the value of the environment variable, or None if the environment variable is not set in envp. The returned string is owned by envp, and will be freed if variable is set or unset again. 
  */
export declare function environGetenv(envp: string | null, variable: string): string;
/**
  * Sets the environment variable variable in the provided list envp to value.
  * @param envp an environment list that can be freed using GLib.strfreev() (e.g., as returned from GLib.get_environ()), or None for an empty environment list
  * @param variable the environment variable to set, must not contain ‘=’
  * @param value the value for to set the variable to
  * @param overwrite whether to change the variable if it already exists
  * @returns the updated environment list. Free it using GLib.strfreev(). 
  */
export declare function environSetenv(envp: string | null, variable: string, value: string, overwrite: boolean): string[];
/**
  * Removes the environment variable variable from the provided environment envp.
  * @param envp an environment list that can be freed using GLib.strfreev() (e.g., as returned from GLib.get_environ()), or None for an empty environment list
  * @param variable the environment variable to remove, must not contain ‘=’
  * @returns the updated environment list. Free it using GLib.strfreev(). 
  */
export declare function environUnsetenv(envp: string | null, variable: string): string[];
/**
  * Gets a GLib.FileError constant based on the passed-in err_no. For example, if you pass in EEXIST this function returns GLib.FileError.EXIST. Unlike errno values, you can portably assume that all GLib.FileError values will exist.
  * @param errNo an “errno” value
  * @returns GLib.FileError corresponding to the given errno 
  */
export declare function fileErrorFromErrno(errNo: number): import('../GLib').FileError;
export declare function fileErrorQuark(): number;
/**
  * Reads an entire file into allocated memory, with good error checking.
  * @param filename name of a file to read contents from, in the GLib file name encoding
  * @returns True on success, False if an error occurred  contents:location to store an allocated string, use GLib.free() to free the returned string 
  */
export declare function fileGetContents(filename: string): [boolean, Int8Array];
/**
  * Opens a file for writing in the preferred directory for temporary files (as returned by GLib.get_tmp_dir()).
  * @param tmpl Template for file name, as in g_mkstemp(), basename only, or None for a default template
  * @returns A file handle (as from open()) to the file opened for reading and writing. The file is opened in binary mode on platforms where there is a difference. The file handle should be closed with close(). In case of errors, -1 is returned and error will be set.  name_used:location to store actual name used, or None 
  */
export declare function fileOpenTmp(tmpl: string | null): [number, string];
/**
  * Reads the contents of the symbolic link filename like the POSIX readlink() function.  The returned string is in the encoding used for filenames. Use GLib.filename_to_utf8() to convert it to UTF-8.
  * @param filename the symbolic link
  * @returns A newly-allocated string with the contents of the symbolic link, or None if an error occurred. 
  */
export declare function fileReadLink(filename: string): string;
/**
  * Writes all of contents to a file named filename, with good error checking. If a file called filename already exists it will be overwritten.
  * @param filename name of a file to write contents to, in the GLib file name encoding
  * @param contents string to write to the file
  * @returns True on success, False if an error occurred 
  */
export declare function fileSetContents(filename: string, contents: Int8Array): boolean;
/**
  * Returns True if any of the tests in the bitfield test are True. For example, (G_FILE_TEST_EXISTS | G_FILE_TEST_IS_DIR) will return True if the file exists; the check whether it’s a directory doesn’t matter since the existence test is True. With the current set of available tests, there’s no point passing in more than one test at a time.
  * @param filename a filename to test in the GLib file name encoding
  * @param test bitfield of GLib.FileTest flags
  * @returns whether a test was True 
  */
export declare function fileTest(filename: string, test: import('../GLib').FileTest): boolean;
/**
  * Returns the display basename for the particular filename, guaranteed to be valid UTF-8. The display name might not be identical to the filename, for instance there might be problems converting it to UTF-8, and some files can be translated in the display.
  * @param filename an absolute pathname in the GLib file name encoding
  * @returns a newly allocated string containing a rendition of the basename of the filename in valid UTF-8 
  */
export declare function filenameDisplayBasename(filename: string): string;
/**
  * Converts a filename into a valid UTF-8 string. The conversion is not necessarily reversible, so you should keep the original around and use the return value of this function only for display purposes. Unlike GLib.filename_to_utf8(), the result is guaranteed to be non-None even if the filename actually isn’t in the GLib file name encoding.
  * @param filename a pathname hopefully in the GLib file name encoding
  * @returns a newly allocated string containing a rendition of the filename in valid UTF-8 
  */
export declare function filenameDisplayName(filename: string): string;
/**
  * Converts an escaped ASCII-encoded URI to a local filename in the encoding used for filenames.
  * @param uri a uri describing a filename (escaped, encoded in ASCII).
  * @returns a newly-allocated string holding the resulting filename, or None on an error.  hostname:Location to store hostname for the URI. If there is no hostname in the URI, None will be stored in this location. 
  */
export declare function filenameFromUri(uri: string): [string, string | null];
/**
  * Converts a string from UTF-8 to the encoding GLib uses for filenames. Note that on Windows GLib uses UTF-8 for filenames; on other platforms, this function indirectly depends on the current locale.
  * @param utf8String a UTF-8 encoded string.
  * @param len the length of the string, or -1 if the string is nul-terminated.
  * @returns The converted string, or None on an error.   bytes_read:location to store the number of bytes in the input string that were successfully converted, or None. Even if the conversion was successful, this may be less than len if there were partial characters at the end of the input. If the error GLib.ConvertError.ILLEGAL_SEQUENCE occurs, the value stored will be the byte offset after the last valid input sequence. bytes_written:the number of bytes stored in the output buffer (not including the terminating nul). 
  */
export declare function filenameFromUtf8(utf8String: string, len: number): [string, number, number];
/**
  * Converts an absolute filename to an escaped ASCII-encoded URI, with the path component following Section 3.3. of RFC 2396.
  * @param filename an absolute filename specified in the GLib file name encoding, which is the on-disk file name bytes on Unix, and UTF-8 on Windows
  * @param hostname A UTF-8 encoded hostname, or None for none.
  * @returns a newly-allocated string holding the resulting URI, or None on an error. 
  */
export declare function filenameToUri(filename: string, hostname: string | null): string;
/**
  * Converts a string which is in the encoding used by GLib for filenames into a UTF-8 string. Note that on Windows GLib uses UTF-8 for filenames; on other platforms, this function indirectly depends on the current locale.
  * @param opsysstring a string in the encoding for filenames
  * @param len the length of the string, or -1 if the string is nul-terminated (Note that some encodings may allow nul bytes to occur inside strings. In that case, using -1 for the len parameter is unsafe)
  * @returns The converted string, or None on an error.   bytes_read:location to store the number of bytes in the input string that were successfully converted, or None. Even if the conversion was successful, this may be less than len if there were partial characters at the end of the input. If the error GLib.ConvertError.ILLEGAL_SEQUENCE occurs, the value stored will be the byte offset after the last valid input sequence. bytes_written:the number of bytes stored in the output buffer (not including the terminating nul). 
  */
export declare function filenameToUtf8(opsysstring: string, len: number): [string, number, number];
/**
  * Locates the first executable named program in the user’s path, in the same way that execvp() would locate it. Returns an allocated string with the absolute path name, or None if the program is not found in the path. If program is already an absolute path, returns a copy of program if program exists and is executable, and None otherwise.
  * @param program a program name in the GLib file name encoding
  * @returns a newly-allocated string with the absolute path, or None 
  */
export declare function findProgramInPath(program: string): string;
/**
  * Formats a size (for example the size of a file) into a human readable string.  Sizes are rounded to the nearest size prefix (kB, MB, GB) and are displayed rounded to the nearest tenth. E.g. the file size 3292528 bytes will be converted into the string “3.2 MB”.
  * @param size a size in bytes
  * @returns a newly-allocated formatted string containing a human readable file size 
  */
export declare function formatSize(size: number): string;
/**
  * Formats a size (for example the size of a file) into a human readable string. Sizes are rounded to the nearest size prefix (KB, MB, GB) and are displayed rounded to the nearest tenth. E.g. the file size 3292528 bytes will be converted into the string “3.1 MB”.
  * @param size a size in bytes
  * @returns a newly-allocated formatted string containing a human readable file size 
  */
export declare function formatSizeForDisplay(size: number): string;
/**
  * Formats a size.
  * @param size a size in bytes
  * @param flags GLib.FormatSizeFlags to modify the output
  * @returns a newly-allocated formatted string containing a human readable file size 
  */
export declare function formatSizeFull(size: number, flags: import('../GLib').FormatSizeFlags): string;
/**
  * Frees the memory pointed to by mem.
  * @param mem the memory to free 
  */
export declare function free(mem: Object | null): void;
/**
  * Gets a human-readable name for the application, as set by GLib.set_application_name(). This name should be localized if possible, and is intended for display to the user.  Contrast with GLib.get_prgname(), which gets a non-localized name. If GLib.set_application_name() has not been called, returns the result of GLib.get_prgname() (which may be None if GLib.set_prgname() has also not been called).
  * @returns human-readable application name. may return None 
  */
export declare function getApplicationName(): string;
/**
  * Obtains the character set for the current locale; you might use this character set as an argument to GLib.convert(), to convert from the current locale’s encoding to some other encoding. (Frequently GLib.locale_to_utf8() and GLib.locale_from_utf8() are nice shortcuts, though.)
  * @returns True if the returned charset is UTF-8  charset:return location for character set name, or None. 
  */
export declare function getCharset(): [boolean, string];
/**
  * Gets the character set for the current locale.
  * @returns a newly allocated string containing the name of the character set. This string must be freed with GLib.free(). 
  */
export declare function getCodeset(): string;
/**
  * Gets the current directory.
  * @returns the current directory 
  */
export declare function getCurrentDir(): string;
/**
  * Equivalent to the UNIX gettimeofday() function, but portable.
  * @returns Time in seconds since the Epoch 
  */
export declare function getCurrentTime(): number;
/**
  * Gets the list of environment variables for the current process.
  * @returns the list of environment variables 
  */
export declare function getEnviron(): string[];
/**
  * Determines the preferred character sets used for filenames. The first character set from the charsets is the filename encoding, the subsequent character sets are used when trying to generate a displayable representation of a filename, see GLib.filename_display_name().
  * @returns True if the filename encoding is UTF-8.  filename_charsets:  return location for the None-terminated list of encoding names 
  */
export declare function getFilenameCharsets(): [boolean, string[]];
/**
  * Gets the current user’s home directory.
  * @returns the current user’s home directory 
  */
export declare function getHomeDir(): string;
/**
  * Return a name for the machine.
  * @returns the host name of the machine. 
  */
export declare function getHostName(): string;
/**
  * Computes a list of applicable locale names, which can be used to e.g. construct locale-dependent filenames or search paths. The returned list is sorted from most desirable to least desirable and always contains the default locale “C”.
  * @returns a None-terminated array of strings owned by GLib that must not be modified or freed. 
  */
export declare function getLanguageNames(): string[];
/**
  * Computes a list of applicable locale names with a locale category name, which can be used to construct the fallback locale-dependent filenames or search paths. The returned list is sorted from most desirable to least desirable and always contains the default locale “C”.
  * @param categoryName a locale category name
  * @returns a None-terminated array of strings owned by GLib that must not be modified or freed. 
  */
export declare function getLanguageNamesWithCategory(categoryName: string): string[];
/**
  * Returns a list of derived variants of locale, which can be used to e.g. construct locale-dependent filenames or search paths. The returned list is sorted from most desirable to least desirable. This function handles territory, charset and extra locale modifiers.
  * @param locale a locale identifier
  * @returns a newly allocated array of newly allocated strings with the locale variants. Free with GLib.strfreev(). 
  */
export declare function getLocaleVariants(locale: string): string[];
/**
  * Queries the system monotonic time.
  * @returns the monotonic time, in microseconds 
  */
export declare function getMonotonicTime(): number;
/**
  * Determine the approximate number of threads that the system will schedule simultaneously for this process.  This is intended to be used as a parameter to g_thread_pool_new() for CPU bound tasks and similar cases.
  * @returns Number of schedulable threads, always greater than 0 
  */
export declare function getNumProcessors(): number;
/**
  * Gets the name of the program. This name should not be localized, in contrast to GLib.get_application_name().
  * @returns the name of the program. The returned string belongs to GLib and must not be modified or freed. 
  */
export declare function getPrgname(): string;
/**
  * Gets the real name of the user. This usually comes from the user’s entry in the passwd file. The encoding of the returned string is system-defined. (On Windows, it is, however, always UTF-8.) If the real user name cannot be determined, the string “Unknown” is returned.
  * @returns the user’s real name. 
  */
export declare function getRealName(): string;
/**
  * Queries the system wall-clock time.
  * @returns the number of microseconds since January 1, 1970 UTC. 
  */
export declare function getRealTime(): number;
/**
  * Returns an ordered list of base directories in which to access system-wide configuration information.
  * @returns a None-terminated array of strings owned by GLib that must not be modified or freed. 
  */
export declare function getSystemConfigDirs(): string[];
/**
  * Returns an ordered list of base directories in which to access system-wide application data.
  * @returns a None-terminated array of strings owned by GLib that must not be modified or freed. 
  */
export declare function getSystemDataDirs(): string[];
/**
  * Gets the directory to use for temporary files.
  * @returns the directory to use for temporary files. 
  */
export declare function getTmpDir(): string;
/**
  * Returns a base directory in which to store non-essential, cached data specific to particular user.
  * @returns a string owned by GLib that must not be modified or freed. 
  */
export declare function getUserCacheDir(): string;
/**
  * Returns a base directory in which to store user-specific application configuration information such as user preferences and settings.
  * @returns a string owned by GLib that must not be modified or freed. 
  */
export declare function getUserConfigDir(): string;
/**
  * Returns a base directory in which to access application data such as icons that is customized for a particular user.
  * @returns a string owned by GLib that must not be modified or freed. 
  */
export declare function getUserDataDir(): string;
/**
  * Gets the user name of the current user. The encoding of the returned string is system-defined. On UNIX, it might be the preferred file name encoding, or something else, and there is no guarantee that it is even consistent on a machine. On Windows, it is always UTF-8.
  * @returns the user name of the current user. 
  */
export declare function getUserName(): string;
/**
  * Returns a directory that is unique to the current user on the local system.
  * @returns a string owned by GLib that must not be modified or freed. 
  */
export declare function getUserRuntimeDir(): string;
/**
  * Returns the full path of a special directory using its logical id.
  * @param directory the logical id of special directory
  * @returns the path to the specified special directory, or None if the logical id was not found. The returned string is owned by GLib and should not be modified or freed. 
  */
export declare function getUserSpecialDir(directory: import('../GLib').UserDirectory): string;
/**
  * Returns the value of an environment variable.
  * @param variable the environment variable to get
  * @returns the value of the environment variable, or None if the environment variable is not found. The returned string may be overwritten by the next call to GLib.getenv(), GLib.setenv() or GLib.unsetenv(). 
  */
export declare function getenv(variable: string): string;
/**
  * This is a convenience function for using a GLib.HashTable as a set.  It is equivalent to calling GLib.HashTable.replace() with key as both the key and the value.
  * @param hashTable a GLib.HashTable
  * @param key a key to insert
  * @returns True if the key did not exist yet 
  */
export declare function hashTableAdd(hashTable: { object: object }, key: Object | null): boolean;
/**
  * Checks if key is in hash_table.
  * @param hashTable a GLib.HashTable
  * @param key a key to check
  * @returns True if key is in hash_table, False otherwise. 
  */
export declare function hashTableContains(hashTable: { object: object }, key: Object | null): boolean;
/**
  * Destroys all keys and values in the GLib.HashTable and decrements its reference count by 1. If keys and/or values are dynamically allocated, you should either free them first or create the GLib.HashTable with destroy notifiers using g_hash_table_new_full(). In the latter case the destroy functions you supplied will be called on all keys and values during the destruction phase.
  * @param hashTable a GLib.HashTable 
  */
export declare function hashTableDestroy(hashTable: { object: object }): void;
/**
  * Inserts a new key and value into a GLib.HashTable.
  * @param hashTable a GLib.HashTable
  * @param key a key to insert
  * @param value the value to associate with the key
  * @returns True if the key did not exist yet 
  */
export declare function hashTableInsert(hashTable: { object: object }, key: Object | null, value: Object | null): boolean;
/**
  * Looks up a key in a GLib.HashTable. Note that this function cannot distinguish between a key that is not present and one which is present and has the value None. If you need this distinction, use GLib.HashTable.lookup_extended().
  * @param hashTable a GLib.HashTable
  * @param key the key to look up
  * @returns the associated value, or None if the key is not found 
  */
export declare function hashTableLookup(hashTable: { object: object }, key: Object | null): Object | null;
/**
  * Looks up a key in the GLib.HashTable, returning the original key and the associated value and a bool which is True if the key was found. This is useful if you need to free the memory allocated for the original key, for example before calling GLib.HashTable.remove().
  * @param hashTable a GLib.HashTable
  * @param lookupKey the key to look up
  * @returns True if the key was found in the GLib.HashTable   orig_key:return location for the original key value:return location for the value associated with the key 
  */
export declare function hashTableLookupExtended(hashTable: { object: object }, lookupKey: Object | null): [boolean, Object, Object];
/**
  * Removes a key and its associated value from a GLib.HashTable.
  * @param hashTable a GLib.HashTable
  * @param key the key to remove
  * @returns True if the key was found and removed from the GLib.HashTable 
  */
export declare function hashTableRemove(hashTable: { object: object }, key: Object | null): boolean;
/**
  * Removes all keys and their associated values from a GLib.HashTable.
  * @param hashTable a GLib.HashTable 
  */
export declare function hashTableRemoveAll(hashTable: { object: object }): void;
/**
  * Inserts a new key and value into a GLib.HashTable similar to GLib.HashTable.insert(). The difference is that if the key already exists in the GLib.HashTable, it gets replaced by the new key. If you supplied a value_destroy_func when creating the GLib.HashTable, the old value is freed using that function. If you supplied a key_destroy_func when creating the GLib.HashTable, the old key is freed using that function.
  * @param hashTable a GLib.HashTable
  * @param key a key to insert
  * @param value the value to associate with the key
  * @returns True if the key did not exist yet 
  */
export declare function hashTableReplace(hashTable: { object: object }, key: Object | null, value: Object | null): boolean;
/**
  * Returns the number of elements contained in the GLib.HashTable.
  * @param hashTable a GLib.HashTable
  * @returns the number of key/value pairs in the GLib.HashTable. 
  */
export declare function hashTableSize(hashTable: { object: object }): number;
/**
  * Removes a key and its associated value from a GLib.HashTable without calling the key and value destroy functions.
  * @param hashTable a GLib.HashTable
  * @param key the key to remove
  * @returns True if the key was found and removed from the GLib.HashTable 
  */
export declare function hashTableSteal(hashTable: { object: object }, key: Object | null): boolean;
/**
  * Removes all keys and their associated values from a GLib.HashTable without calling the key and value destroy functions.
  * @param hashTable a GLib.HashTable 
  */
export declare function hashTableStealAll(hashTable: { object: object }): void;
/**
  * Looks up a key in the GLib.HashTable, stealing the original key and the associated value and returning True if the key was found. If the key was not found, False is returned.
  * @param hashTable a GLib.HashTable
  * @param lookupKey the key to look up
  * @returns True if the key was found in the GLib.HashTable   stolen_key:return location for the original key stolen_value:return location for the value associated with the key 
  */
export declare function hashTableStealExtended(hashTable: { object: object }, lookupKey: Object | null): [boolean, Object, Object];
/**
  * Atomically decrements the reference count of hash_table by one. If the reference count drops to 0, all keys and values will be destroyed, and all memory allocated by the hash table is released. This function is MT-safe and may be called from any thread.
  * @param hashTable a valid GLib.HashTable 
  */
export declare function hashTableUnref(hashTable: { object: object }): void;
/**
  * Destroys a GLib.Hook, given its ID.
  * @param hookList a GLib.HookList
  * @param hookId a hook ID
  * @returns True if the GLib.Hook was found in the GLib.HookList and destroyed 
  */
export declare function hookDestroy(hookList: import('../GLib').HookList, hookId: number): boolean;
/**
  * Removes one GLib.Hook from a GLib.HookList, marking it inactive and calling GLib.Hook.unref() on it.
  * @param hookList a GLib.HookList
  * @param hook the GLib.Hook to remove 
  */
export declare function hookDestroyLink(hookList: import('../GLib').HookList, hook: import('../GLib').Hook): void;
/**
  * Calls the GLib.HookList finalize_hook function if it exists, and frees the memory allocated for the GLib.Hook.
  * @param hookList a GLib.HookList
  * @param hook the GLib.Hook to free 
  */
export declare function hookFree(hookList: import('../GLib').HookList, hook: import('../GLib').Hook): void;
/**
  * Inserts a GLib.Hook into a GLib.HookList, before a given GLib.Hook.
  * @param hookList a GLib.HookList
  * @param sibling the GLib.Hook to insert the new GLib.Hook before
  * @param hook the GLib.Hook to insert 
  */
export declare function hookInsertBefore(hookList: import('../GLib').HookList, sibling: import('../GLib').Hook | null, hook: import('../GLib').Hook): void;
/**
  * Prepends a GLib.Hook on the start of a GLib.HookList.
  * @param hookList a GLib.HookList
  * @param hook the GLib.Hook to add to the start of hook_list 
  */
export declare function hookPrepend(hookList: import('../GLib').HookList, hook: import('../GLib').Hook): void;
/**
  * Decrements the reference count of a GLib.Hook. If the reference count falls to 0, the GLib.Hook is removed from the GLib.HookList and GLib.Hook.free() is called to free it.
  * @param hookList a GLib.HookList
  * @param hook the GLib.Hook to unref 
  */
export declare function hookUnref(hookList: import('../GLib').HookList, hook: import('../GLib').Hook): void;
/**
  * Tests if hostname contains segments with an ASCII-compatible encoding of an Internationalized Domain Name. If this returns True, you should decode the hostname with GLib.hostname_to_unicode() before displaying it to the user.
  * @param hostname a hostname
  * @returns True if hostname contains any ASCII-encoded segments. 
  */
export declare function hostnameIsAsciiEncoded(hostname: string): boolean;
/**
  * Tests if hostname is the string form of an IPv4 or IPv6 address. (Eg, “192.168.0.1”.)
  * @param hostname a hostname (or IP address in string form)
  * @returns True if hostname is an IP address 
  */
export declare function hostnameIsIpAddress(hostname: string): boolean;
/**
  * Tests if hostname contains Unicode characters. If this returns True, you need to encode the hostname with GLib.hostname_to_ascii() before using it in non-IDN-aware contexts.
  * @param hostname a hostname
  * @returns True if hostname contains any non-ASCII characters 
  */
export declare function hostnameIsNonAscii(hostname: string): boolean;
/**
  * Converts hostname to its canonical ASCII form; an ASCII-only string containing no uppercase letters and not ending with a trailing dot.
  * @param hostname a valid UTF-8 or ASCII hostname
  * @returns an ASCII hostname, which must be freed, or None if hostname is in some way invalid. 
  */
export declare function hostnameToAscii(hostname: string): string;
/**
  * Converts hostname to its canonical presentation form; a UTF-8 string in Unicode normalization form C, containing no uppercase letters, no forbidden characters, and no ASCII-encoded segments, and not ending with a trailing dot.
  * @param hostname a valid UTF-8 or ASCII hostname
  * @returns a UTF-8 hostname, which must be freed, or None if hostname is in some way invalid. 
  */
export declare function hostnameToUnicode(hostname: string): string;
/**
  * Adds a function to be called whenever there are no higher priority events pending.  If the function returns False it is automatically removed from the list of event sources and will not be called again.
  * @param priority the priority of the idle source. Typically this will be in the range between GLib.PRIORITY_DEFAULT_IDLE and GLib.PRIORITY_HIGH_IDLE.
  * @param function function to call
  * @param data data to pass to function
  * @returns the ID (greater than 0) of the event source. 
  */
export declare function idleAdd(priority: number, fn: import('../GLib').sourceFunc, data: Object | null): number;
/**
  * Removes the idle function with the given data.
  * @param data the data for the idle source’s callback.
  * @returns True if an idle source was found and removed. 
  */
export declare function idleRemoveByData(data: Object | null): boolean;
/**
  * Creates a new idle source.
  * @returns the newly-created idle source 
  */
export declare function idleSourceNew(): import('../GLib').Source;
/**
  * Compares the two #gint64 values being pointed to and returns True if they are equal. It can be passed to g_hash_table_new() as the key_equal_func parameter, when using non-None pointers to 64-bit integers as keys in a GLib.HashTable.
  * @param v1 a pointer to a #gint64 key
  * @param v2 a pointer to a #gint64 key to compare with v1
  * @returns True if the two keys match. 
  */
export declare function int64Equal(v1: Object, v2: Object): boolean;
/**
  * Converts a pointer to a #gint64 to a hash value.
  * @param v a pointer to a #gint64 key
  * @returns a hash value corresponding to the key. 
  */
export declare function int64Hash(v: Object): number;
/**
  * Compares the two int values being pointed to and returns True if they are equal. It can be passed to g_hash_table_new() as the key_equal_func parameter, when using non-None pointers to integers as keys in a GLib.HashTable.
  * @param v1 a pointer to a int key
  * @param v2 a pointer to a int key to compare with v1
  * @returns True if the two keys match. 
  */
export declare function intEqual(v1: Object, v2: Object): boolean;
/**
  * Converts a pointer to a int to a hash value. It can be passed to g_hash_table_new() as the hash_func parameter, when using non-None pointers to integer values as keys in a GLib.HashTable.
  * @param v a pointer to a int key
  * @returns a hash value corresponding to the key. 
  */
export declare function intHash(v: Object): number;
/**
  * Returns a canonical representation for string. Interned strings can be compared for equality by comparing the pointers, instead of using strcmp(). GLib.intern_static_string() does not copy the string, therefore string must not be freed or modified.
  * @param string a static string
  * @returns a canonical representation for the string 
  */
export declare function internStaticString(string: string | null): string;
/**
  * Returns a canonical representation for string. Interned strings can be compared for equality by comparing the pointers, instead of using strcmp().
  * @param string a string
  * @returns a canonical representation for the string 
  */
export declare function internString(string: string | null): string;
/**
  * Adds the GLib.IOChannel into the default main loop context with the given priority.
  * @param channel channel – a GLib.IOChannel
  * @param priority priority – the priority of the GLib.IOChannel source
  * @param condition condition – the condition to watch for
  * @param func func – the function to call when the condition is satisfied
  * @param userData user_data – user data to pass to func
  * @returns the event source id 
  */
export declare function ioAddWatch(channel, priority, condition, func, userData): any;
/**
  * Converts an errno error number to a GLib.IOChannelError.
  * @param en an errno error number, e.g. EINVAL
  * @returns a GLib.IOChannelError error number, e.g. GLib.IOChannelError.INVAL. 
  */
export declare function ioChannelErrorFromErrno(en: number): import('../GLib').IOChannelError;
export declare function ioChannelErrorQuark(): number;
/**
  * Creates a GLib.Source that’s dispatched when condition is met for the given channel. For example, if condition is GLib.IOCondition.IN, the source will be dispatched when there’s data available for reading.
  * @param channel a GLib.IOChannel to watch
  * @param condition conditions to watch for
  * @returns a new GLib.Source 
  */
export declare function ioCreateWatch(channel: import('../GLib').IOChannel, condition: import('../GLib').IOCondition): import('../GLib').Source;
export declare function keyFileErrorQuark(): number;
/**
  * Gets the names of all variables set in the environment.
  * @returns a None-terminated list of strings which must be freed with GLib.strfreev(). 
  */
export declare function listenv(): string[];
/**
  * Converts a string from UTF-8 to the encoding used for strings by the C runtime (usually the same as that used by the operating system) in the current locale. On Windows this means the system codepage.
  * @param utf8String a UTF-8 encoded string
  * @param len the length of the string, or -1 if the string is nul-terminated.
  * @returns A newly-allocated buffer containing the converted string, or None on an error, and error will be set.   bytes_read:location to store the number of bytes in the input string that were successfully converted, or None. Even if the conversion was successful, this may be less than len if there were partial characters at the end of the input. If the error GLib.ConvertError.ILLEGAL_SEQUENCE occurs, the value stored will be the byte offset after the last valid input sequence. 
  */
export declare function localeFromUtf8(utf8String: string, len: number): [Int8Array, number];
/**
  * Converts a string which is in the encoding used for strings by the C runtime (usually the same as that used by the operating system) in the current locale into a UTF-8 string.
  * @param opsysstring a string in the encoding of the current locale. On Windows this means the system codepage.
  * @returns The converted string, or None on an error.  bytes_read:location to store the number of bytes in the input string that were successfully converted, or None. Even if the conversion was successful, this may be less than len if there were partial characters at the end of the input. If the error GLib.ConvertError.ILLEGAL_SEQUENCE occurs, the value stored will be the byte offset after the last valid input sequence. bytes_written:the number of bytes stored in the output buffer (not including the terminating nul). 
  */
export declare function localeToUtf8(opsysstring: Int8Array): [string, number, number];
/**
  * The default log handler set up by GLib; g_log_set_default_handler() allows to install an alternate default log handler. This is used if no log handler has been set for the particular log domain and log level combination. It outputs the message to stderr or stdout and if the log level is fatal it calls G_BREAKPOINT(). It automatically prints a new-line character after the message, so one does not need to be manually included in message.
  * @param logDomain the log domain of the message, or None for the default “” application domain
  * @param logLevel the level of the message
  * @param message the message
  * @param unusedData data passed from g_log() which is unused 
  */
export declare function logDefaultHandler(logDomain: string | null, logLevel: import('../GLib').LogLevelFlags, message: string | null, unusedData: Object | null): void;
/**
  * Removes the log handler.
  * @param logDomain the log domain
  * @param handlerId the id of the handler, which was returned in GLib.log_set_handler() 
  */
export declare function logRemoveHandler(logDomain: string, handlerId: number): void;
/**
  * Sets the message levels which are always fatal, in any log domain. When a message with any of these levels is logged the program terminates. You can only set the levels defined by GLib to be fatal. GLib.LogLevelFlags.LEVEL_ERROR is always fatal.
  * @param fatalMask the mask containing bits set for each level of error which is to be fatal
  * @returns the old fatal mask 
  */
export declare function logSetAlwaysFatal(fatalMask: import('../GLib').LogLevelFlags): import('../GLib').LogLevelFlags;
/**
  * Sets the log levels which are fatal in the given domain. GLib.LogLevelFlags.LEVEL_ERROR is always fatal.
  * @param logDomain the log domain
  * @param fatalMask the new fatal mask
  * @returns the old fatal mask for the log domain 
  */
export declare function logSetFatalMask(logDomain: string, fatalMask: import('../GLib').LogLevelFlags): import('../GLib').LogLevelFlags;
/**
  * Like GLib.log_set_handler(), but takes a destroy notify for the user_data.
  * @param logDomain the log domain, or None for the default “” application domain
  * @param logLevels the log levels to apply the log handler for. To handle fatal and recursive messages as well, combine the log levels with the GLib.LogLevelFlags.FLAG_FATAL and GLib.LogLevelFlags.FLAG_RECURSION bit flags.
  * @param logFunc the log handler function
  * @param userData data passed to the log handler
  * @returns the id of the new handler 
  */
export declare function logSetHandler(logDomain: string | null, logLevels: import('../GLib').LogLevelFlags, logFunc: import('../GLib').logFunc, userData: Object | null): number;
/**
  * Set a writer function which will be called to format and write out each log message. Each program should set a writer function, or the default writer (GLib.log_writer_default()) will be used.
  * @param userData user data to pass to func 
  */
export declare function logSetWriterFunc(userData: Object | null): void;
/**
  * Log a message with structured data. The message will be passed through to the log writer set by the application using GLib.log_set_writer_func(). If the message is fatal (i.e. its log level is GLib.LogLevelFlags.LEVEL_ERROR), the program will be aborted at the end of this function.
  * @param logLevel log level, either from GLib.LogLevelFlags, or a user-defined level
  * @param fields key–value pairs of structured data to add to the log message 
  */
export declare function logStructuredArray(logLevel: import('../GLib').LogLevelFlags, fields: import('../GLib').LogField): void;
/**
  * Log a message with structured data, accepting the data within a GLib.Variant. This version is especially useful for use in other languages, via introspection.
  * @param logDomain log domain, usually GLib.LOG_DOMAIN
  * @param logLevel log level, either from GLib.LogLevelFlags, or a user-defined level
  * @param fields a dictionary (GLib.Variant of the type %G_VARIANT_TYPE_VARDICT) containing the key-value pairs of message data. 
  */
export declare function logVariant(logDomain: string | null, logLevel: import('../GLib').LogLevelFlags, fields: import('../GLib').Variant): void;
/**
  * Format a structured log message and output it to the default log destination for the platform. On Linux, this is typically the systemd journal, falling back to stdout or stderr if running from the terminal or if output is being redirected to a file.
  * @param logLevel log level, either from GLib.LogLevelFlags, or a user-defined level
  * @param fields key–value pairs of structured data forming the log message
  * @param userData user data passed to GLib.log_set_writer_func()
  * @returns GLib.LogWriterOutput.HANDLED on success, GLib.LogWriterOutput.UNHANDLED otherwise 
  */
export declare function logWriterDefault(logLevel: import('../GLib').LogLevelFlags, fields: import('../GLib').LogField, userData: Object | null): import('../GLib').LogWriterOutput;
/**
  * Format a structured log message as a string suitable for outputting to the terminal (or elsewhere). This will include the values of all fields it knows how to interpret, which includes MESSAGE and GLIB_DOMAIN (see the documentation for g_log_structured()). It does not include values from unknown fields.
  * @param logLevel log level, either from GLib.LogLevelFlags, or a user-defined level
  * @param fields key–value pairs of structured data forming the log message
  * @param useColor True to use ANSI color escape sequences when formatting the message, False to not
  * @returns string containing the formatted log message, in the character set of the current locale 
  */
export declare function logWriterFormatFields(logLevel: import('../GLib').LogLevelFlags, fields: import('../GLib').LogField, useColor: boolean): string;
/**
  * Check whether the given output_fd file descriptor is a connection to the systemd journal, or something else (like a log file or stdout or stderr).
  * @param outputFd output file descriptor to check
  * @returns True if output_fd points to the journal, False otherwise 
  */
export declare function logWriterIsJournald(outputFd: number): boolean;
/**
  * Format a structured log message and send it to the systemd journal as a set of key–value pairs. All fields are sent to the journal, but if a field has length zero (indicating program-specific data) then only its key will be sent.
  * @param logLevel log level, either from GLib.LogLevelFlags, or a user-defined level
  * @param fields key–value pairs of structured data forming the log message
  * @param userData user data passed to GLib.log_set_writer_func()
  * @returns GLib.LogWriterOutput.HANDLED on success, GLib.LogWriterOutput.UNHANDLED otherwise 
  */
export declare function logWriterJournald(logLevel: import('../GLib').LogLevelFlags, fields: import('../GLib').LogField, userData: Object | null): import('../GLib').LogWriterOutput;
/**
  * Format a structured log message and print it to either stdout or stderr, depending on its log level. GLib.LogLevelFlags.LEVEL_INFO and GLib.LogLevelFlags.LEVEL_DEBUG messages are sent to stdout; all other log levels are sent to stderr. Only fields which are understood by this function are included in the formatted string which is printed.
  * @param logLevel log level, either from GLib.LogLevelFlags, or a user-defined level
  * @param fields key–value pairs of structured data forming the log message
  * @param userData user data passed to GLib.log_set_writer_func()
  * @returns GLib.LogWriterOutput.HANDLED on success, GLib.LogWriterOutput.UNHANDLED otherwise 
  */
export declare function logWriterStandardStreams(logLevel: import('../GLib').LogLevelFlags, fields: import('../GLib').LogField, userData: Object | null): import('../GLib').LogWriterOutput;
/**
  * Check whether the given output_fd file descriptor supports ANSI color escape sequences. If so, they can safely be used when formatting log messages.
  * @param outputFd output file descriptor to check
  * @returns True if ANSI color escapes are supported, False otherwise 
  */
export declare function logWriterSupportsColor(outputFd: number): boolean;
/**
  * Returns the global default main context. This is the main context used for main loop functions when a main loop is not explicitly specified, and corresponds to the “main” main loop. See also GLib.MainContext.get_thread_default().
  * @returns the global default main context. 
  */
export declare function mainContextDefault(): import('../GLib').MainContext;
/**
  * Gets the thread-default GLib.MainContext for this thread. Asynchronous operations that want to be able to be run in contexts other than the default one should call this method or GLib.MainContext.ref_thread_default() to get a GLib.MainContext to add their GLib.Sources to. (Note that even in single-threaded programs applications may sometimes want to temporarily push a non-default context, so it is not safe to assume that this will always return None if you are running in the default thread.)
  * @returns the thread-default GLib.MainContext, or None if the thread-default context is the global default context. 
  */
export declare function mainContextGetThreadDefault(): import('../GLib').MainContext;
/**
  * Gets the thread-default GLib.MainContext for this thread, as with GLib.MainContext.get_thread_default(), but also adds a reference to it with GLib.MainContext.ref(). In addition, unlike GLib.MainContext.get_thread_default(), if the thread-default context is the global default context, this will return that GLib.MainContext (with a ref added to it) rather than returning None.
  * @returns the thread-default GLib.MainContext. Unref with GLib.MainContext.unref() when you are done with it. 
  */
export declare function mainContextRefThreadDefault(): import('../GLib').MainContext;
/**
  * Returns the currently firing source for this thread.
  * @returns The currently firing source or None. 
  */
export declare function mainCurrentSource(): import('../GLib').Source;
/**
  * Returns the depth of the stack of calls to GLib.MainContext.dispatch() on any GLib.MainContext in the current thread. That is, when called from the toplevel, it gives 0. When called from within a callback from GLib.MainContext.iteration() (or GLib.MainLoop.run(), etc.) it returns 1. When called from within a callback to a recursive call to GLib.MainContext.iteration(), it returns 2. And so forth.
  * @returns The main loop recursion level in the current thread 
  */
export declare function mainDepth(): number;
/**
  * Allocates n_bytes bytes of memory. If n_bytes is 0 it returns None.
  * @param nBytes the number of bytes to allocate
  * @returns a pointer to the allocated memory 
  */
export declare function malloc(nBytes: number): Object | null;
/**
  * Allocates n_bytes bytes of memory, initialized to 0’s. If n_bytes is 0 it returns None.
  * @param nBytes the number of bytes to allocate
  * @returns a pointer to the allocated memory 
  */
export declare function malloc0(nBytes: number): Object | null;
/**
  * This function is similar to GLib.malloc0(), allocating (n_blocks * n_block_bytes) bytes, but care is taken to detect possible overflow during multiplication.
  * @param nBlocks the number of blocks to allocate
  * @param nBlockBytes the size of each block in bytes
  * @returns a pointer to the allocated memory 
  */
export declare function malloc0N(nBlocks: number, nBlockBytes: number): Object | null;
/**
  * This function is similar to GLib.malloc(), allocating (n_blocks * n_block_bytes) bytes, but care is taken to detect possible overflow during multiplication.
  * @param nBlocks the number of blocks to allocate
  * @param nBlockBytes the size of each block in bytes
  * @returns a pointer to the allocated memory 
  */
export declare function mallocN(nBlocks: number, nBlockBytes: number): Object | null;
export declare function markupErrorQuark(): number;
/**
  * Escapes text so that the markup parser will parse it verbatim. Less than, greater than, ampersand, etc. are replaced with the corresponding entities. This function would typically be used when writing out a file to be parsed with the markup parser.
  * @param text some valid UTF-8 text
  * @param length length of text in bytes, or -1 if the text is nul-terminated
  * @returns a newly allocated string with the escaped text 
  */
export declare function markupEscapeText(text: string, length: number): string;
/**
  * Checks whether the allocator used by GLib.malloc() is the system’s malloc implementation. If it returns True memory allocated with malloc() can be used interchangeable with memory allocated using GLib.malloc(). This function is useful for avoiding an extra copy of allocated memory returned by a non-GLib-based API.
  * @returns if True, malloc() and GLib.malloc() can be mixed. 
  */
export declare function memIsSystemMalloc(): boolean;
/**
  * GLib used to support some tools for memory profiling, but this no longer works. There are many other useful tools for memory profiling these days which can be used instead. 
  */
export declare function memProfile(): void;
/**
  * This function used to let you override the memory allocation function. However, its use was incompatible with the use of global constructors in GLib and GIO, because those use the GLib allocators before main is reached. Therefore this function is now deprecated and is just a stub.
  * @param vtable table of memory allocation routines. 
  */
export declare function memSetVtable(vtable: import('../GLib').MemVTable): void;
/**
  * Allocates byte_size bytes of memory, and copies byte_size bytes into it from mem. If mem is None it returns None.
  * @param mem the memory to copy.
  * @param byteSize the number of bytes to copy.
  * @returns a pointer to the newly-allocated copy of the memory, or None if mem is None. 
  */
export declare function memdup(mem: Object | null, byteSize: number): Object | null;
/**
  * Create a directory if it doesn’t already exist. Create intermediate parent directories as needed, too.
  * @param pathname a pathname in the GLib file name encoding
  * @param mode permissions to use for newly created directories
  * @returns 0 if the directory already exists, or was successfully created. Returns -1 if an error occurred, with errno set. 
  */
export declare function mkdirWithParents(pathname: string, mode: number): number;
/**
  * Set the pointer at the specified location to None.
  * @param nullifyLocation the memory address of the pointer. 
  */
export declare function nullifyPointer(nullifyLocation: Object): void;
export declare function numberParserErrorQuark(): number;
/**
  * Prompts the user with [E]xit, [H]alt, show [S]tack trace or [P]roceed. This function is intended to be used for debugging use only. The following example shows how it can be used together with the g_log() functions.
  * @param prgName the program name, needed by gdb for the “[S]tack trace” option. If prg_name is None, GLib.get_prgname() is called to get the program name (which will work correctly if gdk_init() or gtk_init() has been called) 
  */
export declare function onErrorQuery(prgName: string): void;
/**
  * Invokes gdb, which attaches to the current process and shows a stack trace. Called by GLib.on_error_query() when the “[S]tack trace” option is selected. You can get the current process’s program name with GLib.get_prgname(), assuming that you have called gtk_init() or gdk_init().
  * @param prgName the program name, needed by gdb for the “[S]tack trace” option 
  */
export declare function onErrorStackTrace(prgName: string): void;
/**
  * Function to be called when starting a critical initialization section. The argument location must point to a static 0-initialized variable that will be set to a value other than 0 at the end of the initialization section. In combination with GLib.Once.init_leave() and the unique address value_location, it can be ensured that an initialization section will be executed only once during a program’s life time, and that concurrent threads are blocked until initialization completed. To be used in constructs like this:
  * @param location location of a static initializable variable containing 0
  * @returns True if the initialization section should be entered, False and blocks otherwise 
  */
export declare function onceInitEnter(location: Object): boolean;
/**
  * Counterpart to GLib.Once.init_enter(). Expects a location of a static 0-initialized initialization variable, and an initialization value other than 0. Sets the variable to the initialization value, and releases concurrent threads blocking in GLib.Once.init_enter() on this initialization variable.
  * @param location location of a static initializable variable containing 0
  * @param result new non-0 value for value_location 
  */
export declare function onceInitLeave(location: Object, result: number): void;
export declare function optionErrorQuark(): number;
/**
  * Parses a string containing debugging options into a int containing bit flags. This is used within GDK and GTK+ to parse the debug options passed on the command line or through environment variables.
  * @param string a list of debug options separated by colons, spaces, or commas, or None.
  * @param keys pointer to an array of GLib.DebugKey which associate strings with bit flags.
  * @returns the combined set of bit flags. 
  */
export declare function parseDebugString(string: string | null, keys: import('../GLib').DebugKey): number;
/**
  * Gets the last component of the filename.
  * @param fileName the name of the file
  * @returns a newly allocated string containing the last component of the filename 
  */
export declare function pathGetBasename(fileName: string): string;
/**
  * Gets the directory components of a file name.
  * @param fileName the name of the file
  * @returns the directory components of the file 
  */
export declare function pathGetDirname(fileName: string): string;
/**
  * Returns True if the given file_name is an absolute file name. Note that this is a somewhat vague concept on Windows.
  * @param fileName a file name
  * @returns True if file_name is absolute 
  */
export declare function pathIsAbsolute(fileName: string): boolean;
/**
  * Returns a pointer into file_name after the root component, i.e. after the “/” in UNIX or “C:" under Windows. If file_name is not an absolute path it returns None.
  * @param fileName a file name
  * @returns a pointer into file_name after the root component 
  */
export declare function pathSkipRoot(fileName: string): string | null;
/**
  * Matches a string against a compiled pattern. Passing the correct length of the string given is mandatory. The reversed string can be omitted by passing None, this is more efficient if the reversed version of the string to be matched is not at hand, as GLib.pattern_match() will only construct it if the compiled pattern requires reverse matches.
  * @param pspec a GLib.PatternSpec
  * @param stringLength the length of string (in bytes, i.e. strlen(), not GLib.utf8_strlen())
  * @param string the UTF-8 encoded string to match
  * @param stringReversed the reverse of string or None
  * @returns True if string matches pspec 
  */
export declare function patternMatch(pspec: import('../GLib').PatternSpec, stringLength: number, string: string, stringReversed: string | null): boolean;
/**
  * Matches a string against a pattern given as a string. If this function is to be called in a loop, it’s more efficient to compile the pattern once with g_pattern_spec_new() and call GLib.pattern_match_string() repeatedly.
  * @param pattern the UTF-8 encoded pattern
  * @param string the UTF-8 encoded string to match
  * @returns True if string matches pspec 
  */
export declare function patternMatchSimple(pattern: string, string: string): boolean;
/**
  * Matches a string against a compiled pattern. If the string is to be matched against more than one pattern, consider using GLib.pattern_match() instead while supplying the reversed string.
  * @param pspec a GLib.PatternSpec
  * @param string the UTF-8 encoded string to match
  * @returns True if string matches pspec 
  */
export declare function patternMatchString(pspec: import('../GLib').PatternSpec, string: string): boolean;
/**
  * This is equivalent to GLib.bit_lock, but working on pointers (or other pointer-sized values).
  * @param address a pointer to a object-sized value
  * @param lockBit a bit value between 0 and 31 
  */
export declare function pointerBitLock(address: Object, lockBit: number): void;
/**
  * This is equivalent to GLib.bit_trylock, but working on pointers (or other pointer-sized values).
  * @param address a pointer to a object-sized value
  * @param lockBit a bit value between 0 and 31
  * @returns True if the lock was acquired 
  */
export declare function pointerBitTrylock(address: Object, lockBit: number): boolean;
/**
  * This is equivalent to GLib.bit_unlock, but working on pointers (or other pointer-sized values).
  * @param address a pointer to a object-sized value
  * @param lockBit a bit value between 0 and 31 
  */
export declare function pointerBitUnlock(address: Object, lockBit: number): void;
/**
  * Polls fds, as with the poll() system call, but portably. (On systems that don’t have poll(), it is emulated using select().) This is used internally by GLib.MainContext, but it can be called directly if you need to block until a file descriptor is ready, but don’t want to run the full main loop.
  * @param fds file descriptors to poll
  * @param nfds the number of file descriptors in fds
  * @param timeout amount of time to wait, in milliseconds, or -1 to wait forever
  * @returns the number of entries in fds whose revents fields were filled in, or 0 if the operation timed out, or -1 on error or if the call was interrupted. 
  */
export declare function poll(fds: import('../GLib').PollFD, nfds: number, timeout: number): number;
/**
  * If dest is None, free src; otherwise, moves src into dest. The error variable dest points to must be None.
  * @param src error to move into the return location
  * @returns error return location 
  */
export declare function propagateError(src: import('../GLib').Error): import('../GLib').Error | null;
/**
  * Gets the #GQuark identifying the given (static) string. If the string does not currently have an associated #GQuark, a new #GQuark is created, linked to the given string.
  * @param string a string
  * @returns the #GQuark identifying the string, or 0 if string is None 
  */
export declare function quarkFromStaticString(string: string | null): number;
/**
  * Gets the #GQuark identifying the given string. If the string does not currently have an associated #GQuark, a new #GQuark is created, using a copy of the string.
  * @param string a string
  * @returns the #GQuark identifying the string, or 0 if string is None 
  */
export declare function quarkFromString(string: string | null): number;
/**
  * Gets the string associated with the given #GQuark.
  * @param quark a #GQuark.
  * @returns the string associated with the #GQuark 
  */
export declare function quarkToString(quark: number): string;
/**
  * Gets the #GQuark associated with the given string, or 0 if string is None or it has no associated #GQuark.
  * @param string a string
  * @returns the #GQuark associated with the string, or 0 if string is None or there is no #GQuark associated with it 
  */
export declare function quarkTryString(string: string | null): number;
/**
  * Returns a random float equally distributed over the range [0..1).
  * @returns a random number 
  */
export declare function randomDouble(): number;
/**
  * Returns a random float equally distributed over the range [begin..`end`).
  * @param begin lower closed bound of the interval
  * @param end upper open bound of the interval
  * @returns a random number 
  */
export declare function randomDoubleRange(begin: number, end: number): number;
/**
  * Return a random #guint32 equally distributed over the range [0..2^32-1].
  * @returns a random number 
  */
export declare function randomInt(): number;
/**
  * Returns a random #gint32 equally distributed over the range [begin..`end`-1].
  * @param begin lower closed bound of the interval
  * @param end upper open bound of the interval
  * @returns a random number 
  */
export declare function randomIntRange(begin: number, end: number): number;
/**
  * Sets the seed for the global random number generator, which is used by the g_random_* functions, to seed.
  * @param seed a value to reinitialize the global random number generator 
  */
export declare function randomSetSeed(seed: number): void;
/**
  * Acquires a reference on the data pointed by mem_block.
  * @param memBlock a pointer to reference counted data
  * @returns a pointer to the data, with its reference count increased 
  */
export declare function rcBoxAcquire(memBlock: Object): Object;
/**
  * Allocates block_size bytes of memory, and adds reference counting semantics to it.
  * @param blockSize the size of the allocation, must be greater than 0
  * @returns a pointer to the allocated memory 
  */
export declare function rcBoxAlloc(blockSize: number): Object;
/**
  * Allocates block_size bytes of memory, and adds reference counting semantics to it.
  * @param blockSize the size of the allocation, must be greater than 0
  * @returns a pointer to the allocated memory 
  */
export declare function rcBoxAlloc0(blockSize: number): Object;
/**
  * Allocates a new block of data with reference counting semantics, and copies block_size bytes of mem_block into it.
  * @param blockSize the number of bytes to copy, must be greater than 0
  * @param memBlock the memory to copy
  * @returns a pointer to the allocated memory 
  */
export declare function rcBoxDup(blockSize: number, memBlock: Object): Object;
/**
  * Retrieves the size of the reference counted data pointed by mem_block.
  * @param memBlock a pointer to reference counted data
  * @returns the size of the data, in bytes 
  */
export declare function rcBoxGetSize(memBlock: Object): number;
/**
  * Releases a reference on the data pointed by mem_block.
  * @param memBlock a pointer to reference counted data 
  */
export declare function rcBoxRelease(memBlock: Object): void;
/**
  * Releases a reference on the data pointed by mem_block.
  * @param memBlock a pointer to reference counted data
  * @param clearFunc a function to call when clearing the data 
  */
export declare function rcBoxReleaseFull(memBlock: Object, clearFunc: import('../GLib').destroyNotify): void;
/**
  * Reallocates the memory pointed to by mem, so that it now has space for n_bytes bytes of memory. It returns the new address of the memory, which may have been moved. mem may be None, in which case it’s considered to have zero-length. n_bytes may be 0, in which case None will be returned and mem will be freed unless it is None.
  * @param mem the memory to reallocate
  * @param nBytes new size of the memory in bytes
  * @returns the new address of the allocated memory 
  */
export declare function realloc(mem: Object | null, nBytes: number): Object | null;
/**
  * This function is similar to GLib.realloc(), allocating (n_blocks * n_block_bytes) bytes, but care is taken to detect possible overflow during multiplication.
  * @param mem the memory to reallocate
  * @param nBlocks the number of blocks to allocate
  * @param nBlockBytes the size of each block in bytes
  * @returns the new address of the allocated memory 
  */
export declare function reallocN(mem: Object | null, nBlocks: number, nBlockBytes: number): Object | null;
/**
  * Compares the current value of rc with val.
  * @param rc the address of a reference count variable
  * @param val the value to compare
  * @returns True if the reference count is the same as the given value 
  */
export declare function refCountCompare(rc: number, val: number): boolean;
/**
  * Decreases the reference count.
  * @param rc the address of a reference count variable
  * @returns True if the reference count reached 0, and False otherwise 
  */
export declare function refCountDec(rc: number): boolean;
/**
  * Increases the reference count.
  * @param rc the address of a reference count variable 
  */
export declare function refCountInc(rc: number): void;
/**
  * Initializes a reference count variable.
  * @param rc the address of a reference count variable 
  */
export declare function refCountInit(rc: number): void;
/**
  * Acquires a reference on a string.
  * @param str a reference counted string
  * @returns the given string, with its reference count increased 
  */
export declare function refStringAcquire(str: string): string;
/**
  * Retrieves the length of str.
  * @param str a reference counted string
  * @returns the length of the given string, in bytes 
  */
export declare function refStringLength(str: string): number;
/**
  * Creates a new reference counted string and copies the contents of str into it.
  * @param str a NUL-terminated string
  * @returns the newly created reference counted string 
  */
export declare function refStringNew(str: string): string;
/**
  * Creates a new reference counted string and copies the content of str into it.
  * @param str a NUL-terminated string
  * @returns the newly created reference counted string, or a new reference to an existing string 
  */
export declare function refStringNewIntern(str: string): string;
/**
  * Creates a new reference counted string and copies the contents of str into it, up to len bytes.
  * @param str a string
  * @param len length of str to use, or -1 if str is nul-terminated
  * @returns the newly created reference counted string 
  */
export declare function refStringNewLen(str: string, len: number): string;
/**
  * Releases a reference on a string; if it was the last reference, the resources allocated by the string are freed as well.
  * @param str a reference counted string 
  */
export declare function refStringRelease(str: string): void;
/**
  * Checks whether replacement is a valid replacement string (see GLib.Regex.replace()), i.e. that all escape sequences in it are valid.
  * @param replacement the replacement string
  * @returns whether replacement is a valid replacement string  has_references:location to store information about references in replacement or None 
  */
export declare function regexCheckReplacement(replacement: string): [boolean, boolean];
export declare function regexErrorQuark(): number;
/**
  * Escapes the nul characters in string to “\x00”.  It can be used to compile a regex with embedded nul characters.
  * @param string the string to escape
  * @param length the length of string
  * @returns a newly-allocated escaped string 
  */
export declare function regexEscapeNul(string: string, length: number): string;
/**
  * Escapes the special characters used for regular expressions in string, for instance “a.b*c” becomes “a.b\*c”. This function is useful to dynamically generate regular expressions.
  * @param string the string to escape
  * @returns a newly-allocated escaped string 
  */
export declare function regexEscapeString(string: string): string;
/**
  * Scans for a match in string for pattern.
  * @param pattern the regular expression
  * @param string the string to scan for matches
  * @param compileOptions compile options for the regular expression, or 0
  * @param matchOptions match options, or 0
  * @returns True if the string matched, False otherwise 
  */
export declare function regexMatchSimple(pattern: string, string: string, compileOptions: import('../GLib').RegexCompileFlags, matchOptions: import('../GLib').RegexMatchFlags): boolean;
/**
  * Breaks the string on the pattern, and returns an array of the tokens. If the pattern contains capturing parentheses, then the text for each of the substrings will also be returned. If the pattern does not match anywhere in the string, then the whole string is returned as the first token.
  * @param pattern the regular expression
  * @param string the string to scan for matches
  * @param compileOptions compile options for the regular expression, or 0
  * @param matchOptions match options, or 0
  * @returns a None-terminated array of strings. Free it using GLib.strfreev() 
  */
export declare function regexSplitSimple(pattern: string, string: string, compileOptions: import('../GLib').RegexCompileFlags, matchOptions: import('../GLib').RegexMatchFlags): string[];
/**
  * Resets the cache used for GLib.get_user_special_dir(), so that the latest on-disk version is used. Call this only if you just changed the data on disk yourself. 
  */
export declare function reloadUserSpecialDirsCache(): void;
/**
  * A wrapper for the POSIX rmdir() function. The rmdir() function deletes a directory from the filesystem.
  * @param filename a pathname in the GLib file name encoding (UTF-8 on Windows)
  * @returns 0 if the directory was successfully removed, -1 if an error occurred 
  */
export declare function rmdir(filename: string): number;
/**
  * Returns the data that iter points to.
  * @param iter a GLib.SequenceIter
  * @returns the data that iter points to 
  */
export declare function sequenceGet(iter: import('../GLib').SequenceIter): Object | null;
/**
  * Inserts a new item just before the item pointed to by iter.
  * @param iter a GLib.SequenceIter
  * @param data the data for the new item
  * @returns an iterator pointing to the new item 
  */
export declare function sequenceInsertBefore(iter: import('../GLib').SequenceIter, data: Object | null): import('../GLib').SequenceIter;
/**
  * Moves the item pointed to by src to the position indicated by dest. After calling this function dest will point to the position immediately after src. It is allowed for src and dest to point into different sequences.
  * @param src a GLib.SequenceIter pointing to the item to move
  * @param dest a GLib.SequenceIter pointing to the position to which the item is moved 
  */
export declare function sequenceMove(src: import('../GLib').SequenceIter, dest: import('../GLib').SequenceIter): void;
/**
  * Inserts the (begin, end) range at the destination pointed to by dest. The begin and end iters must point into the same sequence. It is allowed for dest to point to a different sequence than the one pointed into by begin and end.
  * @param dest a GLib.SequenceIter
  * @param begin a GLib.SequenceIter
  * @param end a GLib.SequenceIter 
  */
export declare function sequenceMoveRange(dest: import('../GLib').SequenceIter, begin: import('../GLib').SequenceIter, end: import('../GLib').SequenceIter): void;
/**
  * Finds an iterator somewhere in the range (begin, end). This iterator will be close to the middle of the range, but is not guaranteed to be exactly in the middle.
  * @param begin a GLib.SequenceIter
  * @param end a GLib.SequenceIter
  * @returns a GLib.SequenceIter pointing somewhere in the (begin, end) range 
  */
export declare function sequenceRangeGetMidpoint(begin: import('../GLib').SequenceIter, end: import('../GLib').SequenceIter): import('../GLib').SequenceIter;
/**
  * Removes the item pointed to by iter. It is an error to pass the end iterator to this function.
  * @param iter a GLib.SequenceIter 
  */
export declare function sequenceRemove(iter: import('../GLib').SequenceIter): void;
/**
  * Removes all items in the (begin, end) range.
  * @param begin a GLib.SequenceIter
  * @param end a GLib.SequenceIter 
  */
export declare function sequenceRemoveRange(begin: import('../GLib').SequenceIter, end: import('../GLib').SequenceIter): void;
/**
  * Changes the data for the item pointed to by iter to be data. If the sequence has a data destroy function associated with it, that function is called on the existing data that iter pointed to.
  * @param iter a GLib.SequenceIter
  * @param data new data for the item 
  */
export declare function sequenceSet(iter: import('../GLib').SequenceIter, data: Object | null): void;
/**
  * Swaps the items pointed to by a and b. It is allowed for a and b to point into difference sequences.
  * @param a a GLib.SequenceIter
  * @param b a GLib.SequenceIter 
  */
export declare function sequenceSwap(a: import('../GLib').SequenceIter, b: import('../GLib').SequenceIter): void;
/**
  * Sets a human-readable name for the application. This name should be localized if possible, and is intended for display to the user. Contrast with GLib.set_prgname(), which sets a non-localized name. GLib.set_prgname() will be called automatically by gtk_init(), but GLib.set_application_name() will not.
  * @param applicationName localized name of the application 
  */
export declare function setApplicationName(applicationName: string): void;
/**
  * Does nothing if err is None; if err is non-None, then err must be None. A new GLib.Error is created and assigned to err. Unlike g_set_error(), message is not a printf()-style format string. Use this function if message contains text you don’t have control over, that could include printf() escape sequences.
  * @param domain error domain
  * @param code error code
  * @param message error message
  * @returns a return location for a GLib.Error 
  */
export declare function setErrorLiteral(domain: number, code: number, message: string): import('../GLib').Error;
/**
  * Sets the name of the program. This name should not be localized, in contrast to GLib.set_application_name().
  * @param prgname the name of the program. 
  */
export declare function setPrgname(prgname: string): void;
/**
  * Sets an environment variable. On UNIX, both the variable’s name and value can be arbitrary byte strings, except that the variable’s name cannot contain ‘=’. On Windows, they should be in UTF-8.
  * @param variable the environment variable to set, must not contain ‘=’.
  * @param value the value for to set the variable to.
  * @param overwrite whether to change the variable if it already exists.
  * @returns False if the environment variable couldn’t be set. 
  */
export declare function setenv(variable: string, value: string, overwrite: boolean): boolean;
export declare function shellErrorQuark(): number;
/**
  * Parses a command line into an argument vector, in much the same way the shell would, but without many of the expansions the shell would perform (variable expansion, globs, operators, filename expansion, etc. are not supported). The results are defined to be the same as those you would get from a UNIX98 /bin/sh, as long as the input contains none of the unsupported shell expansions. If the input does contain such expansions, they are passed through literally. Possible errors are those from the #G_SHELL_ERROR domain. Free the returned vector with GLib.strfreev().
  * @param commandLine command line to parse
  * @returns True on success, False if error set  argvp:return location for array of args 
  */
export declare function shellParseArgv(commandLine: string): [boolean, string[]];
/**
  * Quotes a string so that the shell (/bin/sh) will interpret the quoted string to mean unquoted_string. If you pass a filename to the shell, for example, you should first quote it with this function.  The return value must be freed with GLib.free(). The quoting style used is undefined (single or double quotes may be used).
  * @param unquotedString a literal string
  * @returns quoted string 
  */
export declare function shellQuote(unquotedString: string): string;
/**
  * Unquotes a string as the shell (/bin/sh) would. Only handles quotes; if a string contains file globs, arithmetic operators, variables, backticks, redirections, or other special-to-the-shell features, the result will be different from the result a real shell would produce (the variables, backticks, etc. will be passed through literally instead of being expanded). This function is guaranteed to succeed if applied to the result of GLib.shell_quote(). If it fails, it returns None and sets the error. The quoted_string need not actually contain quoted or escaped text; GLib.shell_unquote() simply goes through the string and unquotes/unescapes anything that the shell would. Both single and double quotes are handled, as are escapes including escaped newlines. The return value must be freed with GLib.free(). Possible errors are in the #G_SHELL_ERROR domain.
  * @param quotedString shell-quoted string
  * @returns an unquoted string 
  */
export declare function shellUnquote(quotedString: string): string;
/**
  * Allocates a block of memory from the slice allocator. The block address handed out can be expected to be aligned to at least 1 * sizeof (void*), though in general slices are 2 * sizeof (void*) bytes aligned, if a malloc() fallback implementation is used instead, the alignment may be reduced in a libc dependent fashion. Note that the underlying slice allocation mechanism can be changed with the G_SLICE=always-malloc environment variable.
  * @param blockSize the number of bytes to allocate
  * @returns a pointer to the allocated memory block, which will be None if and only if mem_size is 0 
  */
export declare function sliceAlloc(blockSize: number): Object | null;
/**
  * Allocates a block of memory via GLib.slice_alloc() and initializes the returned memory to 0. Note that the underlying slice allocation mechanism can be changed with the G_SLICE=always-malloc environment variable.
  * @param blockSize the number of bytes to allocate
  * @returns a pointer to the allocated block, which will be None if and only if mem_size is 0 
  */
export declare function sliceAlloc0(blockSize: number): Object | null;
/**
  * Allocates a block of memory from the slice allocator and copies block_size bytes into it from mem_block.
  * @param blockSize the number of bytes to allocate
  * @param memBlock the memory to copy
  * @returns a pointer to the allocated memory block, which will be None if and only if mem_size is 0 
  */
export declare function sliceCopy(blockSize: number, memBlock: Object | null): Object | null;
/**
  * Frees a block of memory.
  * @param blockSize the size of the block
  * @param memBlock a pointer to the block to free 
  */
export declare function sliceFree1(blockSize: number, memBlock: Object | null): void;
/**
  * Frees a linked list of memory blocks of structure type type.
  * @param blockSize the size of the blocks
  * @param memChain a pointer to the first block of the chain
  * @param nextOffset the offset of the next field in the blocks 
  */
export declare function sliceFreeChainWithOffset(blockSize: number, memChain: Object | null, nextOffset: number): void;
export declare function sliceGetConfig(ckey: import('../GLib').SliceConfig): number;
export declare function sliceGetConfigState(ckey: import('../GLib').SliceConfig, address: number, nValues: number): number;
export declare function sliceSetConfig(ckey: import('../GLib').SliceConfig, value: number): void;
/**
  * Removes the source with the given ID from the default main context. You must use GLib.Source.destroy() for sources added to a non-default main context.
  * @param tag the ID of the source to remove.
  * @returns For historical reasons, this function always returns True 
  */
export declare function sourceRemove(tag: number): boolean;
/**
  * Removes a source from the default main loop context given the source functions and user data. If multiple sources exist with the same source functions and user data, only one will be destroyed.
  * @param funcs The source_funcs passed to GLib.Source.new()
  * @param userData the user data for the callback
  * @returns True if a source was found and removed. 
  */
export declare function sourceRemoveByFuncsUserData(funcs: import('../GLib').SourceFuncs, userData: Object | null): boolean;
/**
  * Removes a source from the default main loop context given the user data for the callback. If multiple sources exist with the same user data, only one will be destroyed.
  * @param userData the user_data for the callback.
  * @returns True if a source was found and removed. 
  */
export declare function sourceRemoveByUserData(userData: Object | null): boolean;
/**
  * Sets the name of a source using its ID.
  * @param tag a GLib.Source ID
  * @param name debug name for the source 
  */
export declare function sourceSetNameById(tag: number, name: string): void;
/**
  * Gets the smallest prime number from a built-in array of primes which is larger than num. This is used within GLib to calculate the optimum size of a GLib.HashTable.
  * @param num a int
  * @returns the smallest prime number from a built-in array of primes which is larger than num 
  */
export declare function spacedPrimesClosest(num: number): number;
/**
  * See GLib.spawn_async_with_pipes() for a full description; this function simply calls the GLib.spawn_async_with_pipes()
  * @param argv child’s argument vector
  * @param envp child’s environment, or None to inherit parent’s
  * @param flags flags from GLib.SpawnFlags
  * @param childSetup function to run in the child just before exec()
  * @param userData user data for child_setup
  * @param standardInput pipe stdin if True
  * @param standardOutput pipe stdout if True
  * @param standardError pipe stderr if True
  * @returns pid:child process ID stdin:file descriptor to child’s stdin, or None stdout:file descriptor to read child’s stdout, or None stderr:file descriptor to read child’s stderr, or None 
  */
export declare function spawnAsync(argv: string, envp: string | null, flags: import('../GLib').SpawnFlags, childSetup: import('../GLib').spawnChildSetupFunc | null, userData: Object | null, standardInput: boolean, standardOutput: boolean, standardError: boolean): [number, number | null, number | null, number | null];
/**
  * Identical to GLib.spawn_async_with_pipes() but instead of creating pipes for the stdin/stdout/stderr, you can pass existing file descriptors into this function through the stdin_fd, stdout_fd and stderr_fd parameters. The following flags also have their behaviour slightly tweaked as a result:
  * @param workingDirectory child’s current working directory, or None to inherit parent’s, in the GLib file name encoding
  * @param argv child’s argument vector, in the GLib file name encoding
  * @param envp child’s environment, or None to inherit parent’s, in the GLib file name encoding
  * @param flags flags from GLib.SpawnFlags
  * @param childSetup function to run in the child just before exec()
  * @param userData user data for child_setup
  * @param stdinFd file descriptor to use for child’s stdin, or -1
  * @param stdoutFd file descriptor to use for child’s stdout, or -1
  * @param stderrFd file descriptor to use for child’s stderr, or -1
  * @returns True on success, False if an error was set   child_pid:return location for child process ID, or None 
  */
export declare function spawnAsyncWithFds(workingDirectory: string | null, argv: string, envp: string | null, flags: import('../GLib').SpawnFlags, childSetup: import('../GLib').spawnChildSetupFunc | null, userData: Object | null, stdinFd: number, stdoutFd: number, stderrFd: number): [boolean, number];
/**
  * Executes a child program asynchronously (your program will not block waiting for the child to exit). The child program is specified by the only argument that must be provided, argv. argv should be a None-terminated array of strings, to be passed as the argument vector for the child. The first string in argv is of course the name of the program to execute. By default, the name of the program must be a full path. If flags contains the GLib.SpawnFlags.SEARCH_PATH flag, the PATH environment variable is used to search for the executable. If flags contains the GLib.SpawnFlags.SEARCH_PATH_FROM_ENVP flag, the PATH variable from envp is used to search for the executable. If both the GLib.SpawnFlags.SEARCH_PATH and GLib.SpawnFlags.SEARCH_PATH_FROM_ENVP flags are set, the PATH variable from envp takes precedence over the environment variable.
  * @param workingDirectory child’s current working directory, or None to inherit parent’s, in the GLib file name encoding
  * @param argv child’s argument vector, in the GLib file name encoding
  * @param envp child’s environment, or None to inherit parent’s, in the GLib file name encoding
  * @param flags flags from GLib.SpawnFlags
  * @param childSetup function to run in the child just before exec()
  * @param userData user data for child_setup
  * @returns True on success, False if an error was set   child_pid:return location for child process ID, or None standard_input:return location for file descriptor to write to child’s stdin, or None standard_output:  return location for file descriptor to read child’s stdout, or None standard_error:return location for file descriptor to read child’s stderr, or None 
  */
export declare function spawnAsyncWithPipes(workingDirectory: string | null, argv: string, envp: string | null, flags: import('../GLib').SpawnFlags, childSetup: import('../GLib').spawnChildSetupFunc | null, userData: Object | null): [boolean, number, number, number, number];
/**
  * Set error if exit_status indicates the child exited abnormally (e.g. with a nonzero exit code, or via a fatal signal).
  * @param exitStatus An exit code as returned from GLib.spawn_sync()
  * @returns True if child exited successfully, False otherwise (and error will be set) 
  */
export declare function spawnCheckExitStatus(exitStatus: number): boolean;
/**
  * On some platforms, notably Windows, the #GPid type represents a resource which must be closed to prevent resource leaking. GLib.spawn_close_pid() is provided for this purpose. It should be used on all platforms, even though it doesn’t do anything under UNIX.
  * @param pid The process reference to close 
  */
export declare function spawnClosePid(pid: number): void;
/**
  * A simple version of GLib.spawn_async() that parses a command line with GLib.shell_parse_argv() and passes it to GLib.spawn_async(). Runs a command line in the background. Unlike GLib.spawn_async(), the GLib.SpawnFlags.SEARCH_PATH flag is enabled, other flags are not. Note that GLib.SpawnFlags.SEARCH_PATH can have security implications, so consider using GLib.spawn_async() directly if appropriate. Possible errors are those from GLib.shell_parse_argv() and GLib.spawn_async().
  * @param commandLine a command line
  * @returns True on success, False if error is set 
  */
export declare function spawnCommandLineAsync(commandLine: string): boolean;
/**
  * A simple version of GLib.spawn_sync() with little-used parameters removed, taking a command line instead of an argument vector.  See GLib.spawn_sync() for full details. command_line will be parsed by GLib.shell_parse_argv(). Unlike GLib.spawn_sync(), the GLib.SpawnFlags.SEARCH_PATH flag is enabled. Note that GLib.SpawnFlags.SEARCH_PATH can have security implications, so consider using GLib.spawn_sync() directly if appropriate. Possible errors are those from GLib.spawn_sync() and those from GLib.shell_parse_argv().
  * @param commandLine a command line
  * @returns True on success, False if an error was set  standard_output:  return location for child output standard_error:return location for child errors exit_status:return location for child exit status, as returned by waitpid() 
  */
export declare function spawnCommandLineSync(commandLine: string): [boolean, Int8Array, Int8Array, number];
export declare function spawnErrorQuark(): number;
export declare function spawnExitErrorQuark(): number;
/**
  * Executes a child synchronously (waits for the child to exit before returning). All output from the child is stored in standard_output and standard_error, if those parameters are non-None. Note that you must set the GLib.SpawnFlags.STDOUT_TO_DEV_NULL and GLib.SpawnFlags.STDERR_TO_DEV_NULL flags when passing None for standard_output and standard_error.
  * @param workingDirectory child’s current working directory, or None to inherit parent’s
  * @param argv child’s argument vector
  * @param envp child’s environment, or None to inherit parent’s
  * @param flags flags from GLib.SpawnFlags
  * @param childSetup function to run in the child just before exec()
  * @param userData user data for child_setup
  * @returns True on success, False if an error was set   standard_output:  return location for child output, or None standard_error:return location for child error messages, or None exit_status:return location for child exit status, as returned by waitpid(), or None 
  */
export declare function spawnSync(workingDirectory: string | null, argv: string, envp: string | null, flags: import('../GLib').SpawnFlags, childSetup: import('../GLib').spawnChildSetupFunc | null, userData: Object | null): [boolean, Int8Array, Int8Array, number];
/**
  * Copies a nul-terminated string into the dest buffer, include the trailing nul, and return a pointer to the trailing nul byte. This is useful for concatenating multiple strings together without having to repeatedly scan for the end.
  * @param dest destination buffer.
  * @param src source string.
  * @returns a pointer to trailing nul byte. 
  */
export declare function stpcpy(dest: string, src: string): string;
/**
  * Compares two strings for byte-by-byte equality and returns True if they are equal. It can be passed to g_hash_table_new() as the key_equal_func parameter, when using non-None strings as keys in a GLib.HashTable.
  * @param v1 a key
  * @param v2 a key to compare with v1
  * @returns True if the two keys match 
  */
export declare function strEqual(v1: Object, v2: Object): boolean;
/**
  * Looks whether the string str begins with prefix.
  * @param str a nul-terminated string
  * @param prefix the nul-terminated prefix to look for
  * @returns True if str begins with prefix, False otherwise. 
  */
export declare function strHasPrefix(str: string, prefix: string): boolean;
/**
  * Looks whether the string str ends with suffix.
  * @param str a nul-terminated string
  * @param suffix the nul-terminated suffix to look for
  * @returns True if str end with suffix, False otherwise. 
  */
export declare function strHasSuffix(str: string, suffix: string): boolean;
/**
  * Converts a string to a hash value.
  * @param v a string key
  * @returns a hash value corresponding to the key 
  */
export declare function strHash(v: Object): number;
/**
  * Determines if a string is pure ASCII. A string is pure ASCII if it contains no bytes with the high bit set.
  * @param str a string
  * @returns True if str is ASCII 
  */
export declare function strIsAscii(str: string): boolean;
/**
  * Checks if a search conducted for search_term should match potential_hit.
  * @param searchTerm the search term from the user
  * @param potentialHit the text that may be a hit
  * @param acceptAlternates True to accept ASCII alternates
  * @returns True if potential_hit is a hit 
  */
export declare function strMatchString(searchTerm: string, potentialHit: string, acceptAlternates: boolean): boolean;
/**
  * Transliterate str to plain ASCII.
  * @param str a string, in UTF-8
  * @param fromLocale the source locale, if known
  * @returns a string in plain ASCII 
  */
export declare function strToAscii(str: string, fromLocale: string | null): string;
/**
  * Tokenises string and performs folding on each token.
  * @param string a string
  * @param translitLocale the language code (like ‘de’ or ‘en_GB’) from which string originates
  * @returns the folded tokens   ascii_alternates:  a return location for ASCII alternates 
  */
export declare function strTokenizeAndFold(string: string, translitLocale: string | null): [string[], string[]];
/**
  * For each character in string, if the character is not in valid_chars, replaces the character with substitutor. Modifies string in place, and return string itself, not a copy. The return value is to allow nesting such as
  * @param string a nul-terminated array of bytes
  * @param validChars bytes permitted in string
  * @param substitutor replacement character for disallowed bytes
  * @returns string 
  */
export declare function strcanon(string: string, validChars: string, substitutor: number): string;
/**
  * A case-insensitive string comparison, corresponding to the standard strcasecmp() function on platforms which support it.
  * @param s1 a string
  * @param s2 a string to compare with s1
  * @returns 0 if the strings match, a negative value if s1 < s2, or a positive value if s1 > s2. 
  */
export declare function strcasecmp(s1: string, s2: string): number;
/**
  * Removes trailing whitespace from a string.
  * @param string a string to remove the trailing whitespace from
  * @returns string 
  */
export declare function strchomp(string: string): string;
/**
  * Removes leading whitespace from a string, by moving the rest of the characters forward.
  * @param string a string to remove the leading whitespace from
  * @returns string 
  */
export declare function strchug(string: string): string;
/**
  * Compares str1 and str2 like strcmp(). Handles None gracefully by sorting it before non-None strings. Comparing two None pointers returns 0.
  * @param str1 a C string or None
  * @param str2 another C string or None
  * @returns an integer less than, equal to, or greater than zero, if str1 is <, == or > than str2. 
  */
export declare function strcmp0(str1: string | null, str2: string | null): number;
/**
  * Replaces all escaped characters with their one byte equivalent.
  * @param source a string to compress
  * @returns a newly-allocated copy of source with all escaped character compressed 
  */
export declare function strcompress(source: string): string;
/**
  * Converts any delimiter characters in string to new_delimiter. Any characters in string which are found in delimiters are changed to the new_delimiter character. Modifies string in place, and returns string itself, not a copy. The return value is to allow nesting such as
  * @param string the string to convert
  * @param delimiters a string containing the current delimiters, or None to use the standard delimiters defined in GLib.STR_DELIMITERS
  * @param newDelimiter the new delimiter character
  * @returns string 
  */
export declare function strdelimit(string: string, delimiters: string | null, newDelimiter: number): string;
/**
  * Converts a string to lower case.
  * @param string the string to convert.
  * @returns the string 
  */
export declare function strdown(string: string): string;
/**
  * Duplicates a string. If str is None it returns None. The returned string should be freed with GLib.free() when no longer needed.
  * @param str the string to duplicate
  * @returns a newly-allocated copy of str 
  */
export declare function strdup(str: string | null): string;
/**
  * Returns a string corresponding to the given error code, e.g. “no such process”. Unlike strerror(), this always returns a string in UTF-8 encoding, and the pointer is guaranteed to remain valid for the lifetime of the process.
  * @param errnum the system error number. See the standard C %errno documentation
  * @returns a UTF-8 string describing the error code. If the error code is unknown, it returns a string like “unknown error (<code>)”. 
  */
export declare function strerror(errnum: number): string;
/**
  * Escapes the special characters ‘\b’, ‘\f’, ‘\n’, ‘\r’, ‘\t’, ‘\v’, ‘' and ‘”’ in the string source by inserting a ‘' before them. Additionally all characters in the range 0x01-0x1F (everything below SPACE) and in the range 0x7F-0xFF (all non-ASCII chars) are replaced with a ‘' followed by their octal representation. Characters supplied in exceptions are not escaped.
  * @param source a string to escape
  * @param exceptions a string of characters not to escape in source
  * @returns a newly-allocated copy of source with certain characters escaped. See above. 
  */
export declare function strescape(source: string, exceptions: string | null): string;
/**
  * Frees a None-terminated array of strings, as well as each string it contains.
  * @param strArray a None-terminated array of strings to free 
  */
export declare function strfreev(strArray: string | null): void;
/**
  * Creates a new GLib.String, initialized with the given string.
  * @param init the initial text to copy into the string, or None to start with an empty string
  * @returns the new GLib.String 
  */
export declare function stringNew(init: string | null): import('../GLib').String;
/**
  * Creates a new GLib.String with len bytes of the init buffer. Because a length is provided, init need not be nul-terminated, and can contain embedded nul bytes.
  * @param init initial contents of the string
  * @param len length of init to use
  * @returns a new GLib.String 
  */
export declare function stringNewLen(init: string, len: number): import('../GLib').String;
/**
  * Creates a new GLib.String, with enough space for dfl_size bytes. This is useful if you are going to add a lot of text to the string and don’t want it to be reallocated too often.
  * @param dflSize the default size of the space allocated to hold the string
  * @returns the new GLib.String 
  */
export declare function stringSizedNew(dflSize: number): import('../GLib').String;
/**
  * An auxiliary function for gettext() support (see Q_()).
  * @param msgid a string
  * @param msgval another string
  * @returns msgval, unless msgval is identical to msgid and contains a ‘|’ character, in which case a pointer to the substring of msgid after the first ‘|’ character is returned. 
  */
export declare function stripContext(msgid: string, msgval: string): string;
/**
  * Joins a number of strings together to form one long string, with the optional separator inserted between each of them. The returned string should be freed with GLib.free().
  * @param separator a string to insert between each of the strings, or None
  * @param strArray a None-terminated array of strings to join
  * @returns a newly-allocated string containing all of the strings joined together, with separator between them 
  */
export declare function strjoinv(separator: string | null, strArray: string): string;
/**
  * Portability wrapper that calls strlcat() on systems which have it, and emulates it otherwise. Appends nul-terminated src string to dest, guaranteeing nul-termination for dest. The total size of dest won’t exceed dest_size.
  * @param dest destination buffer, already containing one nul-terminated string
  * @param src source buffer
  * @param destSize length of dest buffer in bytes (not length of existing string inside dest)
  * @returns size of attempted result, which is MIN (dest_size, strlen (original dest)) + strlen (src), so if retval >= dest_size, truncation occurred. 
  */
export declare function strlcat(dest: string, src: string, destSize: number): number;
/**
  * Portability wrapper that calls strlcpy() on systems which have it, and emulates strlcpy() otherwise. Copies src to dest; dest is guaranteed to be nul-terminated; src must be nul-terminated; dest_size is the buffer size, not the number of bytes to copy.
  * @param dest destination buffer
  * @param src source buffer
  * @param destSize length of dest in bytes
  * @returns length of src 
  */
export declare function strlcpy(dest: string, src: string, destSize: number): number;
/**
  * A case-insensitive string comparison, corresponding to the standard strncasecmp() function on platforms which support it. It is similar to GLib.strcasecmp() except it only compares the first n characters of the strings.
  * @param s1 a string
  * @param s2 a string to compare with s1
  * @param n the maximum number of characters to compare
  * @returns 0 if the strings match, a negative value if s1 < s2, or a positive value if s1 > s2. 
  */
export declare function strncasecmp(s1: string, s2: string, n: number): number;
/**
  * Duplicates the first n bytes of a string, returning a newly-allocated buffer n + 1 bytes long which will always be nul-terminated. If str is less than n bytes long the buffer is padded with nuls. If str is None it returns None. The returned value should be freed when no longer needed.
  * @param str the string to duplicate
  * @param n the maximum number of bytes to copy from str
  * @returns a newly-allocated buffer containing the first n bytes of str, nul-terminated 
  */
export declare function strndup(str: string, n: number): string;
/**
  * Creates a new string length bytes long filled with fill_char. The returned string should be freed when no longer needed.
  * @param length the length of the new string
  * @param fillChar the byte to fill the string with
  * @returns a newly-allocated string filled the fill_char 
  */
export declare function strnfill(length: number, fillChar: number): string;
/**
  * Reverses all of the bytes in a string. For example, g_strreverse ("abcdef") will result in “fedcba”.
  * @param string the string to reverse
  * @returns the same pointer passed in as string 
  */
export declare function strreverse(string: string): string;
/**
  * Searches the string haystack for the last occurrence of the string needle.
  * @param haystack a nul-terminated string
  * @param needle the nul-terminated string to search for
  * @returns a pointer to the found occurrence, or None if not found. 
  */
export declare function strrstr(haystack: string, needle: string): string;
/**
  * Searches the string haystack for the last occurrence of the string needle, limiting the length of the search to haystack_len.
  * @param haystack a nul-terminated string
  * @param haystackLen the maximum length of haystack
  * @param needle the nul-terminated string to search for
  * @returns a pointer to the found occurrence, or None if not found. 
  */
export declare function strrstrLen(haystack: string, haystackLen: number, needle: string): string;
/**
  * Returns a string describing the given signal, e.g. “Segmentation fault”. You should use this function in preference to strsignal(), because it returns a string in UTF-8 encoding, and since not all platforms support the strsignal() function.
  * @param signum the signal number. See the signal documentation
  * @returns a UTF-8 string describing the signal. If the signal is unknown, it returns “unknown signal (<signum>)”. 
  */
export declare function strsignal(signum: number): string;
/**
  * Searches the string haystack for the first occurrence of the string needle, limiting the length of the search to haystack_len.
  * @param haystack a string
  * @param haystackLen the maximum length of haystack. Note that -1 is a valid length, if haystack is nul-terminated, meaning it will search through the whole string.
  * @param needle the string to search for
  * @returns a pointer to the found occurrence, or None if not found. 
  */
export declare function strstrLen(haystack: string, haystackLen: number, needle: string): string;
/**
  * Converts a string to a float value. It calls the standard strtod() function to handle the conversion, but if the string is not completely converted it attempts the conversion again with GLib.ascii_strtod(), and returns the best match.
  * @param nptr the string to convert to a numeric value.
  * @returns the float value.  endptr:if non-None, it returns the character after the last character used in the conversion. 
  */
export declare function strtod(nptr: string): [number, string];
/**
  * Converts a string to upper case.
  * @param string the string to convert
  * @returns the string 
  */
export declare function strup(string: string): string;
/**
  * Checks if strv contains str. strv must not be None.
  * @param strv a None-terminated array of strings
  * @param str a string
  * @returns True if str is an element of strv, according to GLib.str_equal(). 
  */
export declare function strvContains(strv: string, str: string): boolean;
export declare function strvGetType(): import('../GObject').GType;
/**
  * Returns the length of the given None-terminated string array str_array. str_array must not be None.
  * @param strArray a None-terminated array of strings
  * @returns length of str_array. 
  */
export declare function strvLength(strArray: string): number;
/**
  * Create a new test case, similar to g_test_create_case(). However the test is assumed to use no fixture, and test suites are automatically created on the fly and added to the root fixture, based on the slash-separated portions of testpath. The test_data argument will be passed as first argument to test_func.
  * @param testpath /-separated test case path name for the test.
  * @param testData Test data argument for the test function.
  * @param testFunc The test function to invoke for this test. 
  */
export declare function testAddDataFunc(testpath: string, testData: Object | null, testFunc: import('../GLib').testDataFunc): void;
/**
  * Create a new test case, as with GLib.test_add_data_func(), but freeing test_data after the test run is complete.
  * @param testpath /-separated test case path name for the test.
  * @param testData Test data argument for the test function.
  * @param testFunc The test function to invoke for this test. 
  */
export declare function testAddDataFuncFull(testpath: string, testData: Object | null, testFunc: import('../GLib').testDataFunc): void;
/**
  * Create a new test case, similar to g_test_create_case(). However the test is assumed to use no fixture, and test suites are automatically created on the fly and added to the root fixture, based on the slash-separated portions of testpath.
  * @param testpath /-separated test case path name for the test.
  * @param testFunc The test function to invoke for this test. 
  */
export declare function testAddFunc(testpath: string, testFunc: import('../GLib').testFunc): void;
export declare function testAssertExpectedMessagesInternal(domain: string, file: string, line: number, func: string): void;
/**
  * This function adds a message to test reports that associates a bug URI with a test case. Bug URIs are constructed from a base URI set with GLib.test_bug_base() and bug_uri_snippet.
  * @param bugUriSnippet Bug specific bug tracker URI portion. 
  */
export declare function testBug(bugUriSnippet: string): void;
/**
  * Specify the base URI for bug reports.
  * @param uriPattern the base pattern for bug URIs 
  */
export declare function testBugBase(uriPattern: string): void;
/**
  * Indicates that a message with the given log_domain and log_level, with text matching pattern, is expected to be logged. When this message is logged, it will not be printed, and the test case will not abort.
  * @param logDomain the log domain of the message
  * @param logLevel the log level of the message
  * @param pattern a glob-style pattern 
  */
export declare function testExpectMessage(logDomain: string | null, logLevel: import('../GLib').LogLevelFlags, pattern: string): void;
/**
  * Indicates that a test failed. This function can be called multiple times from the same test. You can use this function if your test failed in a recoverable way. 
  */
export declare function testFail(): void;
/**
  * Returns whether a test has already failed. This will be the case when GLib.test_fail(), GLib.test_incomplete() or GLib.test_skip() have been called, but also if an assertion has failed.
  * @returns True if the test has failed 
  */
export declare function testFailed(): boolean;
/**
  * Gets the pathname of the directory containing test files of the type specified by file_type.
  * @param fileType the type of file (built vs. distributed)
  * @returns the path of the directory, owned by GLib 
  */
export declare function testGetDir(fileType: import('../GLib').TestFileType): string;
/**
  * Indicates that a test failed because of some incomplete functionality. This function can be called multiple times from the same test.
  * @param msg explanation 
  */
export declare function testIncomplete(msg: string | null): void;
export declare function testLogTypeName(logType: import('../GLib').TestLogType): string;
/**
  * This function enqueus a callback destroy_func to be executed during the next test case teardown phase. This is most useful to auto destruct allocated test resources at the end of a test run. Resources are released in reverse queue order, that means enqueueing callback A before callback B will cause B() to be called before A() during teardown.
  * @param destroyFunc Destroy callback for teardown phase.
  * @param destroyData Destroy callback data. 
  */
export declare function testQueueDestroy(destroyFunc: import('../GLib').destroyNotify, destroyData: Object | null): void;
/**
  * Enqueue a pointer to be released with GLib.free() during the next teardown phase. This is equivalent to calling GLib.test_queue_destroy() with a destroy callback of GLib.free().
  * @param gfreePointer the pointer to be stored. 
  */
export declare function testQueueFree(gfreePointer: Object | null): void;
/**
  * Get a reproducible random floating point number, see GLib.test_rand_int() for details on test case random numbers.
  * @returns a random number from the seeded random number generator. 
  */
export declare function testRandDouble(): number;
/**
  * Get a reproducible random floating pointer number out of a specified range, see GLib.test_rand_int() for details on test case random numbers.
  * @param rangeStart the minimum value returned by this function
  * @param rangeEnd the minimum value not returned by this function
  * @returns a number with range_start <= number < range_end. 
  */
export declare function testRandDoubleRange(rangeStart: number, rangeEnd: number): number;
/**
  * Get a reproducible random integer number.
  * @returns a random number from the seeded random number generator. 
  */
export declare function testRandInt(): number;
/**
  * Get a reproducible random integer number out of a specified range, see GLib.test_rand_int() for details on test case random numbers.
  * @param begin the minimum value returned by this function
  * @param end the smallest value not to be returned by this function
  * @returns a number with begin <= number < end. 
  */
export declare function testRandIntRange(begin: number, end: number): number;
/**
  * Runs all tests under the toplevel suite which can be retrieved with g_test_get_root(). Similar to GLib.test_run_suite(), the test cases to be run are filtered according to test path arguments (-p testpath and -s testpath) as parsed by g_test_init(). GLib.test_run_suite() or GLib.test_run() may only be called once in a program.
  * @returns 0 on success, 1 on failure (assuming it returns at all), 0 or 77 if all tests were skipped with GLib.test_skip() and/or GLib.test_incomplete() 
  */
export declare function testRun(): number;
/**
  * Execute the tests within suite and all nested GLib.TestSuites. The test suites to be executed are filtered according to test path arguments (-p testpath and -s testpath) as parsed by g_test_init(). See the GLib.test_run() documentation for more information on the order that tests are run in.
  * @param suite a GLib.TestSuite
  * @returns 0 on success 
  */
export declare function testRunSuite(suite: import('../GLib').TestSuite): number;
/**
  * Changes the behaviour of g_assert_cmpstr(), g_assert_cmpint(), g_assert_cmpuint(), g_assert_cmphex(), g_assert_cmpfloat(), g_assert_true(), g_assert_false(), g_assert_null(), g_assert_no_error(), g_assert_error(), g_test_assert_expected_messages() and the various g_test_trap_assert_*() macros to not abort to program, but instead call GLib.test_fail() and continue. (This also changes the behavior of GLib.test_fail() so that it will not cause the test program to abort after completing the failed test.) 
  */
export declare function testSetNonfatalAssertions(): void;
/**
  * Indicates that a test was skipped.
  * @param msg explanation 
  */
export declare function testSkip(msg: string | null): void;
/**
  * Returns True (after g_test_init() has been called) if the test program is running under GLib.test_trap_subprocess().
  * @returns True if the test program is running under GLib.test_trap_subprocess(). 
  */
export declare function testSubprocess(): boolean;
/**
  * Get the time since the last start of the timer with GLib.test_timer_start().
  * @returns the time since the last start of the timer, as a double 
  */
export declare function testTimerElapsed(): number;
/**
  * Report the last result of GLib.test_timer_elapsed().
  * @returns the last result of GLib.test_timer_elapsed(), as a double 
  */
export declare function testTimerLast(): number;
/**
  * Start a timing test. Call GLib.test_timer_elapsed() when the task is supposed to be done. Call this function again to restart the timer. 
  */
export declare function testTimerStart(): void;
export declare function testTrapAssertions(domain: string, file: string, line: number, func: string, assertionFlags: number, pattern: string): void;
/**
  * Fork the current test program to execute a test case that might not return or that might abort.
  * @param usecTimeout Timeout for the forked test in micro seconds.
  * @param testTrapFlags Flags to modify forking behaviour.
  * @returns True for the forked child and False for the executing parent process. 
  */
export declare function testTrapFork(usecTimeout: number, testTrapFlags: import('../GLib').TestTrapFlags): boolean;
/**
  * Check the result of the last GLib.test_trap_subprocess() call.
  * @returns True if the last test subprocess terminated successfully. 
  */
export declare function testTrapHasPassed(): boolean;
/**
  * Check the result of the last GLib.test_trap_subprocess() call.
  * @returns True if the last test subprocess got killed due to a timeout. 
  */
export declare function testTrapReachedTimeout(): boolean;
/**
  * Respawns the test program to run only test_path in a subprocess. This can be used for a test case that might not return, or that might abort.
  * @param testPath Test to run in a subprocess
  * @param usecTimeout Timeout for the subprocess test in micro seconds.
  * @param testFlags Flags to modify subprocess behaviour. 
  */
export declare function testTrapSubprocess(testPath: string | null, usecTimeout: number, testFlags: import('../GLib').TestSubprocessFlags): void;
export declare function threadErrorQuark(): number;
/**
  * Terminates the current thread.
  * @param retval the return value of this thread 
  */
export declare function threadExit(retval: Object | null): void;
/**
  * This function will return the maximum interval that a thread will wait in the thread pool for new tasks before being stopped.
  * @returns the maximum interval (milliseconds) to wait for new tasks in the thread pool before stopping the thread 
  */
export declare function threadPoolGetMaxIdleTime(): number;
/**
  * Returns the maximal allowed number of unused threads.
  * @returns the maximal number of unused threads 
  */
export declare function threadPoolGetMaxUnusedThreads(): number;
/**
  * Returns the number of currently unused threads.
  * @returns the number of currently unused threads 
  */
export declare function threadPoolGetNumUnusedThreads(): number;
/**
  * This function will set the maximum interval that a thread waiting in the pool for new tasks can be idle for before being stopped. This function is similar to calling GLib.ThreadPool.stop_unused_threads() on a regular timeout, except this is done on a per thread basis.
  * @param interval the maximum interval (in milliseconds) a thread can be idle 
  */
export declare function threadPoolSetMaxIdleTime(interval: number): void;
/**
  * Sets the maximal number of unused threads to max_threads. If max_threads is -1, no limit is imposed on the number of unused threads.
  * @param maxThreads maximal number of unused threads 
  */
export declare function threadPoolSetMaxUnusedThreads(maxThreads: number): void;
/**
  * Stops all currently unused threads. This does not change the maximal number of unused threads. This function can be used to regularly stop all unused threads e.g. from GLib.timeout_add(). 
  */
export declare function threadPoolStopUnusedThreads(): void;
/**
  * This function returns the GLib.Thread corresponding to the current thread. Note that this function does not increase the reference count of the returned struct.
  * @returns the GLib.Thread representing the current thread 
  */
export declare function threadSelf(): import('../GLib').Thread;
/**
  * Causes the calling thread to voluntarily relinquish the CPU, so that other threads can run. 
  */
export declare function threadYield(): void;
export declare function threadsInit(): void;
/**
  * Converts a string containing an ISO 8601 encoded date and time to a GLib.TimeVal and puts it into time_.
  * @param isoDate an ISO 8601 encoded date string
  * @returns True if the conversion was successful.  time_:a GLib.TimeVal 
  */
export declare function timeValFromIso8601(isoDate: string): [boolean, import('../GLib').TimeVal];
/**
  * Sets a function to be called at regular intervals, with the given priority.  The function is called repeatedly until it returns False, at which point the timeout is automatically destroyed and the function will not be called again.  The notify function is called when the timeout is destroyed.  The first call to the function will be at the end of the first interval.
  * @param priority the priority of the timeout source. Typically this will be in the range between GLib.PRIORITY_DEFAULT and GLib.PRIORITY_HIGH.
  * @param interval the time between calls to the function, in milliseconds (1/1000ths of a second)
  * @param function function to call
  * @param data data to pass to function
  * @returns the ID (greater than 0) of the event source. 
  */
export declare function timeoutAdd(priority: number, interval: number, fn: import('../GLib').sourceFunc, data: Object | null): number;
/**
  * Sets a function to be called at regular intervals, with priority. The function is called repeatedly until it returns False, at which point the timeout is automatically destroyed and the function will not be called again.
  * @param priority the priority of the timeout source. Typically this will be in the range between GLib.PRIORITY_DEFAULT and GLib.PRIORITY_HIGH.
  * @param interval the time between calls to the function, in seconds
  * @param function function to call
  * @param data data to pass to function
  * @returns the ID (greater than 0) of the event source. 
  */
export declare function timeoutAddSeconds(priority: number, interval: number, fn: import('../GLib').sourceFunc, data: Object | null): number;
/**
  * Creates a new timeout source.
  * @param interval the timeout interval in milliseconds.
  * @returns the newly-created timeout source 
  */
export declare function timeoutSourceNew(interval: number): import('../GLib').Source;
/**
  * Creates a new timeout source.
  * @param interval the timeout interval in seconds
  * @returns the newly-created timeout source 
  */
export declare function timeoutSourceNewSeconds(interval: number): import('../GLib').Source;
/**
  * Returns the height of a GLib.TrashStack.
  * @param stackP a GLib.TrashStack
  * @returns the height of the stack 
  */
export declare function trashStackHeight(stackP: import('../GLib').TrashStack): number;
/**
  * Returns the element at the top of a GLib.TrashStack which may be None.
  * @param stackP a GLib.TrashStack
  * @returns the element at the top of the stack 
  */
export declare function trashStackPeek(stackP: import('../GLib').TrashStack): Object | null;
/**
  * Pops a piece of memory off a GLib.TrashStack.
  * @param stackP a GLib.TrashStack
  * @returns the element at the top of the stack 
  */
export declare function trashStackPop(stackP: import('../GLib').TrashStack): Object | null;
/**
  * Pushes a piece of memory onto a GLib.TrashStack.
  * @param stackP a GLib.TrashStack
  * @param dataP the piece of memory to push on the stack 
  */
export declare function trashStackPush(stackP: import('../GLib').TrashStack, dataP: Object): void;
/**
  * Attempts to allocate n_bytes, and returns None on failure. Contrast with GLib.malloc(), which aborts the program on failure.
  * @param nBytes number of bytes to allocate.
  * @returns the allocated memory, or None. 
  */
export declare function tryMalloc(nBytes: number): Object | null;
/**
  * Attempts to allocate n_bytes, initialized to 0’s, and returns None on failure. Contrast with GLib.malloc0(), which aborts the program on failure.
  * @param nBytes number of bytes to allocate
  * @returns the allocated memory, or None 
  */
export declare function tryMalloc0(nBytes: number): Object | null;
/**
  * This function is similar to GLib.try_malloc0(), allocating (n_blocks * n_block_bytes) bytes, but care is taken to detect possible overflow during multiplication.
  * @param nBlocks the number of blocks to allocate
  * @param nBlockBytes the size of each block in bytes
  * @returns the allocated memory, or None 
  */
export declare function tryMalloc0N(nBlocks: number, nBlockBytes: number): Object | null;
/**
  * This function is similar to GLib.try_malloc(), allocating (n_blocks * n_block_bytes) bytes, but care is taken to detect possible overflow during multiplication.
  * @param nBlocks the number of blocks to allocate
  * @param nBlockBytes the size of each block in bytes
  * @returns the allocated memory, or None. 
  */
export declare function tryMallocN(nBlocks: number, nBlockBytes: number): Object | null;
/**
  * Attempts to realloc mem to a new size, n_bytes, and returns None on failure. Contrast with GLib.realloc(), which aborts the program on failure.
  * @param mem previously-allocated memory, or None.
  * @param nBytes number of bytes to allocate.
  * @returns the allocated memory, or None. 
  */
export declare function tryRealloc(mem: Object | null, nBytes: number): Object | null;
/**
  * This function is similar to GLib.try_realloc(), allocating (n_blocks * n_block_bytes) bytes, but care is taken to detect possible overflow during multiplication.
  * @param mem previously-allocated memory, or None.
  * @param nBlocks the number of blocks to allocate
  * @param nBlockBytes the size of each block in bytes
  * @returns the allocated memory, or None. 
  */
export declare function tryReallocN(mem: Object | null, nBlocks: number, nBlockBytes: number): Object | null;
/**
  * Convert a string from UCS-4 to UTF-16. A 0 character will be added to the result after the converted text.
  * @param str a UCS-4 encoded string
  * @param len the maximum length (number of characters) of str to use. If len < 0, then the string is nul-terminated.
  * @returns a pointer to a newly allocated UTF-16 string. This value must be freed with GLib.free(). If an error occurs, None will be returned and error set.   items_read:location to store number of bytes read, or None. If an error occurs then the index of the invalid input is stored here. items_written:location to store number of #gunichar2  written, or None. The value stored here does not include the trailing 0. 
  */
export declare function ucs4ToUtf16(str: string, len: number): [number, number, number];
/**
  * Convert a string from a 32-bit fixed width representation as UCS-4. to UTF-8. The result will be terminated with a 0 byte.
  * @param str a UCS-4 encoded string
  * @param len the maximum length (number of characters) of str to use. If len < 0, then the string is nul-terminated.
  * @returns a pointer to a newly allocated UTF-8 string. This value must be freed with GLib.free(). If an error occurs, None will be returned and error set. In that case, items_read will be set to the position of the first invalid input character.   items_read:location to store number of characters read, or None. items_written:location to store number of bytes written or None. The value here stored does not include the trailing 0 byte. 
  */
export declare function ucs4ToUtf8(str: string, len: number): [string, number, number];
/**
  * Determines the break type of c. c should be a Unicode character (to derive a character from UTF-8 encoded text, use GLib.utf8_get_char()). The break type is used to find word and line breaks (“text boundaries”), Pango implements the Unicode boundary resolution algorithms and normally you would use a function such as pango_break() instead of caring about break types yourself.
  * @param c a Unicode character
  * @returns the break type of c 
  */
export declare function unicharBreakType(c: string): import('../GLib').UnicodeBreakType;
/**
  * Determines the canonical combining class of a Unicode character.
  * @param uc a Unicode character
  * @returns the combining class of the character 
  */
export declare function unicharCombiningClass(uc: string): number;
/**
  * Performs a single composition step of the Unicode canonical composition algorithm.
  * @param a a Unicode character
  * @param b a Unicode character
  * @param ch return location for the composed character
  * @returns True if the characters could be composed 
  */
export declare function unicharCompose(a: string, b: string, ch: string): boolean;
/**
  * Performs a single decomposition step of the Unicode canonical decomposition algorithm.
  * @param ch a Unicode character
  * @param a return location for the first component of ch
  * @param b return location for the second component of ch
  * @returns True if the character could be decomposed 
  */
export declare function unicharDecompose(ch: string, a: string, b: string): boolean;
/**
  * Determines the numeric value of a character as a decimal digit.
  * @param c a Unicode character
  * @returns If c is a decimal digit (according to GLib.unichar_isdigit()), its numeric value. Otherwise, -1. 
  */
export declare function unicharDigitValue(c: string): number;
/**
  * Computes the canonical or compatibility decomposition of a Unicode character.  For compatibility decomposition, pass True for compat; for canonical decomposition pass False for compat.
  * @param ch a Unicode character.
  * @param compat whether perform canonical or compatibility decomposition
  * @param result location to store decomposed result, or None
  * @param resultLen length of result
  * @returns the length of the full decomposition. 
  */
export declare function unicharFullyDecompose(ch: string, compat: boolean, result: string | null, resultLen: number): number;
/**
  * In Unicode, some characters are “mirrored”. This means that their images are mirrored horizontally in text that is laid out from right to left. For instance, “(” would become its mirror image, “)”, in right-to-left text.
  * @param ch a Unicode character
  * @param mirroredCh location to store the mirrored character
  * @returns True if ch has a mirrored character, False otherwise 
  */
export declare function unicharGetMirrorChar(ch: string, mirroredCh: string): boolean;
/**
  * Looks up the GLib.UnicodeScript for a particular character (as defined by Unicode Standard Annex \#24). No check is made for ch being a valid Unicode character; if you pass in invalid character, the result is undefined.
  * @param ch a Unicode character
  * @returns the GLib.UnicodeScript for the character. 
  */
export declare function unicharGetScript(ch: string): import('../GLib').UnicodeScript;
/**
  * Determines whether a character is alphanumeric. Given some UTF-8 text, obtain a character value with GLib.utf8_get_char().
  * @param c a Unicode character
  * @returns True if c is an alphanumeric character 
  */
export declare function unicharIsalnum(c: string): boolean;
/**
  * Determines whether a character is alphabetic (i.e. a letter). Given some UTF-8 text, obtain a character value with GLib.utf8_get_char().
  * @param c a Unicode character
  * @returns True if c is an alphabetic character 
  */
export declare function unicharIsalpha(c: string): boolean;
/**
  * Determines whether a character is a control character. Given some UTF-8 text, obtain a character value with GLib.utf8_get_char().
  * @param c a Unicode character
  * @returns True if c is a control character 
  */
export declare function unicharIscntrl(c: string): boolean;
/**
  * Determines if a given character is assigned in the Unicode standard.
  * @param c a Unicode character
  * @returns True if the character has an assigned value 
  */
export declare function unicharIsdefined(c: string): boolean;
/**
  * Determines whether a character is numeric (i.e. a digit).  This covers ASCII 0-9 and also digits in other languages/scripts.  Given some UTF-8 text, obtain a character value with GLib.utf8_get_char().
  * @param c a Unicode character
  * @returns True if c is a digit 
  */
export declare function unicharIsdigit(c: string): boolean;
/**
  * Determines whether a character is printable and not a space (returns False for control characters, format characters, and spaces). GLib.unichar_isprint() is similar, but returns True for spaces. Given some UTF-8 text, obtain a character value with GLib.utf8_get_char().
  * @param c a Unicode character
  * @returns True if c is printable unless it’s a space 
  */
export declare function unicharIsgraph(c: string): boolean;
/**
  * Determines whether a character is a lowercase letter. Given some UTF-8 text, obtain a character value with GLib.utf8_get_char().
  * @param c a Unicode character
  * @returns True if c is a lowercase letter 
  */
export declare function unicharIslower(c: string): boolean;
/**
  * Determines whether a character is a mark (non-spacing mark, combining mark, or enclosing mark in Unicode speak). Given some UTF-8 text, obtain a character value with GLib.utf8_get_char().
  * @param c a Unicode character
  * @returns True if c is a mark character 
  */
export declare function unicharIsmark(c: string): boolean;
/**
  * Determines whether a character is printable. Unlike GLib.unichar_isgraph(), returns True for spaces. Given some UTF-8 text, obtain a character value with GLib.utf8_get_char().
  * @param c a Unicode character
  * @returns True if c is printable 
  */
export declare function unicharIsprint(c: string): boolean;
/**
  * Determines whether a character is punctuation or a symbol. Given some UTF-8 text, obtain a character value with GLib.utf8_get_char().
  * @param c a Unicode character
  * @returns True if c is a punctuation or symbol character 
  */
export declare function unicharIspunct(c: string): boolean;
/**
  * Determines whether a character is a space, tab, or line separator (newline, carriage return, etc.).  Given some UTF-8 text, obtain a character value with GLib.utf8_get_char().
  * @param c a Unicode character
  * @returns True if c is a space character 
  */
export declare function unicharIsspace(c: string): boolean;
/**
  * Determines if a character is titlecase. Some characters in Unicode which are composites, such as the DZ digraph have three case variants instead of just two. The titlecase form is used at the beginning of a word where only the first letter is capitalized. The titlecase form of the DZ digraph is U+01F2 LATIN CAPITAL LETTTER D WITH SMALL LETTER Z.
  * @param c a Unicode character
  * @returns True if the character is titlecase 
  */
export declare function unicharIstitle(c: string): boolean;
/**
  * Determines if a character is uppercase.
  * @param c a Unicode character
  * @returns True if c is an uppercase character 
  */
export declare function unicharIsupper(c: string): boolean;
/**
  * Determines if a character is typically rendered in a double-width cell.
  * @param c a Unicode character
  * @returns True if the character is wide 
  */
export declare function unicharIswide(c: string): boolean;
/**
  * Determines if a character is typically rendered in a double-width cell under legacy East Asian locales.  If a character is wide according to GLib.unichar_iswide(), then it is also reported wide with this function, but the converse is not necessarily true. See the Unicode Standard Annex #11 for details.
  * @param c a Unicode character
  * @returns True if the character is wide in legacy East Asian locales 
  */
export declare function unicharIswideCjk(c: string): boolean;
/**
  * Determines if a character is a hexidecimal digit.
  * @param c a Unicode character.
  * @returns True if the character is a hexadecimal digit 
  */
export declare function unicharIsxdigit(c: string): boolean;
/**
  * Determines if a given character typically takes zero width when rendered. The return value is True for all non-spacing and enclosing marks (e.g., combining accents), format characters, zero-width space, but not U+00AD SOFT HYPHEN.
  * @param c a Unicode character
  * @returns True if the character has zero width 
  */
export declare function unicharIszerowidth(c: string): boolean;
/**
  * Converts a single character to UTF-8.
  * @param c a Unicode character code
  * @returns number of bytes written  outbuf:output buffer, must have at least 6 bytes of space. If None, the length will be computed and returned and nothing will be written to outbuf. 
  */
export declare function unicharToUtf8(c: string): [number, string];
/**
  * Converts a character to lower case.
  * @param c a Unicode character.
  * @returns the result of converting c to lower case. If c is not an upperlower or titlecase character, or has no lowercase equivalent c is returned unchanged. 
  */
export declare function unicharTolower(c: string): string;
/**
  * Converts a character to the titlecase.
  * @param c a Unicode character
  * @returns the result of converting c to titlecase. If c is not an uppercase or lowercase character, c is returned unchanged. 
  */
export declare function unicharTotitle(c: string): string;
/**
  * Converts a character to uppercase.
  * @param c a Unicode character
  * @returns the result of converting c to uppercase. If c is not an lowercase or titlecase character, or has no upper case equivalent c is returned unchanged. 
  */
export declare function unicharToupper(c: string): string;
/**
  * Classifies a Unicode character by type.
  * @param c a Unicode character
  * @returns the type of the character. 
  */
export declare function unicharType(c: string): import('../GLib').UnicodeType;
/**
  * Checks whether ch is a valid Unicode character. Some possible integer values of ch will not be valid. 0 is considered a valid character, though it’s normally a string terminator.
  * @param ch a Unicode character
  * @returns True if ch is a valid Unicode character 
  */
export declare function unicharValidate(ch: string): boolean;
/**
  * Determines the numeric value of a character as a hexidecimal digit.
  * @param c a Unicode character
  * @returns If c is a hex digit (according to GLib.unichar_isxdigit()), its numeric value. Otherwise, -1. 
  */
export declare function unicharXdigitValue(c: string): number;
/**
  * Computes the canonical decomposition of a Unicode character.
  * @param ch a Unicode character.
  * @param resultLen location to store the length of the return value.
  * @returns a newly allocated string of Unicode characters. result_len is set to the resulting length of the string. 
  */
export declare function unicodeCanonicalDecomposition(ch: string, resultLen: number): string;
/**
  * Computes the canonical ordering of a string in-place. This rearranges decomposed characters in the string according to their combining classes.  See the Unicode manual for more information.
  * @param string a UCS-4 encoded string.
  * @param len the maximum length of string to use. 
  */
export declare function unicodeCanonicalOrdering(string: string, len: number): void;
/**
  * Looks up the Unicode script for iso15924.  ISO 15924 assigns four-letter codes to scripts.  For example, the code for Arabic is ‘Arab’. This function accepts four letter codes encoded as a guint32 in a big-endian fashion.  That is, the code expected for Arabic is 0x41726162 (0x41 is ASCII code for ‘A’, 0x72 is ASCII code for ‘r’, etc).
  * @param iso15924 a Unicode script
  * @returns the Unicode script for iso15924, or of GLib.UnicodeScript.INVALID_CODE if iso15924 is zero and GLib.UnicodeScript.UNKNOWN if iso15924 is unknown. 
  */
export declare function unicodeScriptFromIso15924(iso15924: number): import('../GLib').UnicodeScript;
/**
  * Looks up the ISO 15924 code for script.  ISO 15924 assigns four-letter codes to scripts.  For example, the code for Arabic is ‘Arab’.  The four letter codes are encoded as a guint32 by this function in a big-endian fashion.  That is, the code returned for Arabic is 0x41726162 (0x41 is ASCII code for ‘A’, 0x72 is ASCII code for ‘r’, etc).
  * @param script a Unicode script
  * @returns the ISO 15924 code for script, encoded as an integer, of zero if script is GLib.UnicodeScript.INVALID_CODE or ISO 15924 code ‘Zzzz’ (script code for UNKNOWN) if script is not understood. 
  */
export declare function unicodeScriptToIso15924(script: import('../GLib').UnicodeScript): number;
export declare function unixErrorQuark(): number;
/**
  * Sets a function to be called when the IO condition, as specified by condition becomes true for fd.
  * @param priority the priority of the source
  * @param fd a file descriptor
  * @param condition IO conditions to watch for on fd
  * @param function a GLib.UnixFDSourceFunc
  * @param userData data to pass to function
  * @returns the ID (greater than 0) of the event source 
  */
export declare function unixFdAddFull(priority: number, fd: number, condition: import('../GLib').IOCondition, fn: import('../GLib').unixFdSourceFunc, userData: Object | null): number;
/**
  * Creates a GLib.Source to watch for a particular IO condition on a file descriptor.
  * @param fd a file descriptor
  * @param condition IO conditions to watch for on fd
  * @returns the newly created GLib.Source 
  */
export declare function unixFdSourceNew(fd: number, condition: import('../GLib').IOCondition): import('../GLib').Source;
/**
  * Similar to the UNIX pipe() call, but on modern systems like Linux uses the pipe2() system call, which atomically creates a pipe with the configured flags. The only supported flag currently is %FD_CLOEXEC. If for example you want to configure %O_NONBLOCK, that must still be done separately with fcntl().
  * @param fds Array of two integers
  * @param flags Bitfield of file descriptor flags, as for fcntl()
  * @returns True on success, False if not (and errno will be set). 
  */
export declare function unixOpenPipe(fds: number, flags: number): boolean;
/**
  * Control the non-blocking state of the given file descriptor, according to nonblock. On most systems this uses %O_NONBLOCK, but on some older ones may use %O_NDELAY.
  * @param fd A file descriptor
  * @param nonblock If True, set the descriptor to be non-blocking
  * @returns True if successful 
  */
export declare function unixSetFdNonblocking(fd: number, nonblock: boolean): boolean;
/**
  * A convenience function for GLib.unix_signal_source_new(), which attaches to the default GLib.MainContext.  You can remove the watch using GLib.Source.remove().
  * @param priority the priority of the signal source. Typically this will be in the range between GLib.PRIORITY_DEFAULT and GLib.PRIORITY_HIGH.
  * @param signum Signal number
  * @param handler Callback
  * @param userData Data for handler
  * @returns An ID (greater than 0) for the event source 
  */
export declare function unixSignalAdd(priority: number, signum: number, handler: import('../GLib').sourceFunc, userData: Object | null): number;
export declare function unixSignalAddFull(): void;
/**
  * Create a GLib.Source that will be dispatched upon delivery of the UNIX signal signum.  In GLib versions before 2.36, only SIGHUP, SIGINT, SIGTERM can be monitored.  In GLib 2.36, SIGUSR1 and SIGUSR2 were added. In GLib 2.54, SIGWINCH was added.
  * @param signum A signal number
  * @returns A newly created GLib.Source 
  */
export declare function unixSignalSourceNew(signum: number): import('../GLib').Source;
/**
  * A wrapper for the POSIX unlink() function. The unlink() function deletes a name from the filesystem. If this was the last link to the file and no processes have it opened, the diskspace occupied by the file is freed.
  * @param filename a pathname in the GLib file name encoding (UTF-8 on Windows)
  * @returns 0 if the name was successfully deleted, -1 if an error occurred 
  */
export declare function unlink(filename: string): number;
/**
  * Removes an environment variable from the environment.
  * @param variable the environment variable to remove, must not contain ‘=’ 
  */
export declare function unsetenv(variable: string): void;
/**
  * Escapes a string for use in a URI.
  * @param unescaped the unescaped input string.
  * @param reservedCharsAllowed a string of reserved characters that are allowed to be used, or None.
  * @param allowUtf8 True if the result can include UTF-8 characters.
  * @returns an escaped version of unescaped. The returned string should be freed when no longer needed. 
  */
export declare function uriEscapeString(unescaped: string, reservedCharsAllowed: string | null, allowUtf8: boolean): string;
/**
  * Splits an URI list conforming to the text/uri-list mime type defined in RFC 2483 into individual URIs, discarding any comments. The URIs are not validated.
  * @param uriList an URI list
  * @returns a newly allocated None-terminated list of strings holding the individual URIs. The array should be freed with GLib.strfreev(). 
  */
export declare function uriListExtractUris(uriList: string): string[];
/**
  * Gets the scheme portion of a URI string. RFC 3986 decodes the scheme as:
  * @param uri a valid URI.
  * @returns The “Scheme” component of the URI, or None on error. The returned string should be freed when no longer needed. 
  */
export declare function uriParseScheme(uri: string): string;
/**
  * Unescapes a segment of an escaped string.
  * @param escapedString A string, may be None
  * @param escapedStringEnd Pointer to end of escaped_string, may be None
  * @param illegalCharacters An optional string of illegal characters not to be allowed, may be None
  * @returns an unescaped version of escaped_string or None on error. The returned string should be freed when no longer needed.  As a special case if None is given for escaped_string, this function will return None. 
  */
export declare function uriUnescapeSegment(escapedString: string | null, escapedStringEnd: string | null, illegalCharacters: string | null): string;
/**
  * Unescapes a whole escaped string.
  * @param escapedString an escaped string to be unescaped.
  * @param illegalCharacters a string of illegal characters not to be allowed, or None.
  * @returns an unescaped version of escaped_string. The returned string should be freed when no longer needed. 
  */
export declare function uriUnescapeString(escapedString: string, illegalCharacters: string | null): string;
/**
  * Pauses the current thread for the given number of microseconds.
  * @param microseconds number of microseconds to pause 
  */
export declare function usleep(microseconds: number): void;
/**
  * Convert a string from UTF-16 to UCS-4. The result will be nul-terminated.
  * @param str a UTF-16 encoded string
  * @param len the maximum length (number of #gunichar2) of str to use. If len < 0, then the string is nul-terminated.
  * @returns a pointer to a newly allocated UCS-4 string. This value must be freed with GLib.free(). If an error occurs, None will be returned and error set.   items_read:location to store number of words read, or None. If None, then GLib.ConvertError.PARTIAL_INPUT will be returned in case str contains a trailing partial character. If an error occurs then the index of the invalid input is stored here. items_written:location to store number of characters written, or None. The value stored here does not include the trailing 0 character. 
  */
export declare function utf16ToUcs4(str: number, len: number): [string, number, number];
/**
  * Convert a string from UTF-16 to UTF-8. The result will be terminated with a 0 byte.
  * @param str a UTF-16 encoded string
  * @param len the maximum length (number of #gunichar2) of str to use. If len < 0, then the string is nul-terminated.
  * @returns a pointer to a newly allocated UTF-8 string. This value must be freed with GLib.free(). If an error occurs, None will be returned and error set.   items_read:location to store number of words read, or None. If None, then GLib.ConvertError.PARTIAL_INPUT will be returned in case str contains a trailing partial character. If an error occurs then the index of the invalid input is stored here. items_written:location to store number of bytes written, or None. The value stored here does not include the trailing 0 byte. 
  */
export declare function utf16ToUtf8(str: number, len: number): [string, number, number];
/**
  * Converts a string into a form that is independent of case. The result will not correspond to any particular case, but can be compared for equality or ordered with the results of calling GLib.utf8_casefold() on other strings.
  * @param str a UTF-8 encoded string
  * @param len length of str, in bytes, or -1 if str is nul-terminated.
  * @returns a newly allocated string, that is a case independent form of str. 
  */
export declare function utf8Casefold(str: string, len: number): string;
/**
  * Compares two strings for ordering using the linguistically correct rules for the current locale. When sorting a large number of strings, it will be significantly faster to obtain collation keys with GLib.utf8_collate_key() and compare the keys with strcmp() when sorting instead of sorting the original strings.
  * @param str1 a UTF-8 encoded string
  * @param str2 a UTF-8 encoded string
  * @returns < 0 if str1 compares before str2, 0 if they compare equal, > 0 if str1 compares after str2. 
  */
export declare function utf8Collate(str1: string, str2: string): number;
/**
  * Converts a string into a collation key that can be compared with other collation keys produced by the same function using strcmp().
  * @param str a UTF-8 encoded string.
  * @param len length of str, in bytes, or -1 if str is nul-terminated.
  * @returns a newly allocated string. This string should be freed with GLib.free() when you are done with it. 
  */
export declare function utf8CollateKey(str: string, len: number): string;
/**
  * Converts a string into a collation key that can be compared with other collation keys produced by the same function using strcmp().
  * @param str a UTF-8 encoded string.
  * @param len length of str, in bytes, or -1 if str is nul-terminated.
  * @returns a newly allocated string. This string should be freed with GLib.free() when you are done with it. 
  */
export declare function utf8CollateKeyForFilename(str: string, len: number): string;
/**
  * Finds the start of the next UTF-8 character in the string after p.
  * @param p a pointer to a position within a UTF-8 encoded string
  * @param end a pointer to the byte following the end of the string, or None to indicate that the string is nul-terminated
  * @returns a pointer to the found character or None if end is set and is reached 
  */
export declare function utf8FindNextChar(p: string, end: string | null): string | null;
/**
  * Given a position p with a UTF-8 encoded string str, find the start of the previous UTF-8 character starting before p. Returns None if no UTF-8 characters are present in str before p.
  * @param str pointer to the beginning of a UTF-8 encoded string
  * @param p pointer to some position within str
  * @returns a pointer to the found character or None. 
  */
export declare function utf8FindPrevChar(str: string, p: string): string;
/**
  * Converts a sequence of bytes encoded as UTF-8 to a Unicode character.
  * @param p a pointer to Unicode character encoded as UTF-8
  * @returns the resulting character 
  */
export declare function utf8GetChar(p: string): string;
/**
  * Convert a sequence of bytes encoded as UTF-8 to a Unicode character. This function checks for incomplete characters, for invalid characters such as characters that are out of the range of Unicode, and for overlong encodings of valid characters.
  * @param p a pointer to Unicode character encoded as UTF-8
  * @param maxLen the maximum number of bytes to read, or -1 if p is nul-terminated
  * @returns the resulting character. If p points to a partial sequence at the end of a string that could begin a valid character (or if max_len is zero), returns (gunichar)-2; otherwise, if p does not point to a valid UTF-8 encoded Unicode character, returns (gunichar)-1. 
  */
export declare function utf8GetCharValidated(p: string, maxLen: number): string;
/**
  * If the provided string is valid UTF-8, return a copy of it. If not, return a copy in which bytes that could not be interpreted as valid Unicode are replaced with the Unicode replacement character (U+FFFD).
  * @param str string to coerce into UTF-8
  * @param len the maximum length of str to use, in bytes. If len < 0, then the string is nul-terminated.
  * @returns a valid UTF-8 string whose content resembles str 
  */
export declare function utf8MakeValid(str: string, len: number): string;
/**
  * Converts a string into canonical form, standardizing such issues as whether a character with an accent is represented as a base character and combining accent or as a single precomposed character. The string has to be valid UTF-8, otherwise None is returned. You should generally call GLib.utf8_normalize() before comparing two Unicode strings.
  * @param str a UTF-8 encoded string.
  * @param len length of str, in bytes, or -1 if str is nul-terminated.
  * @param mode the type of normalization to perform.
  * @returns a newly allocated string, that is the normalized form of str, or None if str is not valid UTF-8. 
  */
export declare function utf8Normalize(str: string, len: number, mode: import('../GLib').NormalizeMode): string;
/**
  * Converts from an integer character offset to a pointer to a position within the string.
  * @param str a UTF-8 encoded string
  * @param offset a character offset within str
  * @returns the resulting pointer 
  */
export declare function utf8OffsetToPointer(str: string, offset: number): string;
/**
  * Converts from a pointer to position within a string to a integer character offset.
  * @param str a UTF-8 encoded string
  * @param pos a pointer to a position within str
  * @returns the resulting character offset 
  */
export declare function utf8PointerToOffset(str: string, pos: string): number;
/**
  * Finds the previous UTF-8 character in the string before p.
  * @param p a pointer to a position within a UTF-8 encoded string
  * @returns a pointer to the found character 
  */
export declare function utf8PrevChar(p: string): string;
/**
  * Finds the leftmost occurrence of the given Unicode character in a UTF-8 encoded string, while limiting the search to len bytes. If len is -1, allow unbounded search.
  * @param p a nul-terminated UTF-8 encoded string
  * @param len the maximum length of p
  * @param c a Unicode character
  * @returns None if the string does not contain the character, otherwise, a pointer to the start of the leftmost occurrence of the character in the string. 
  */
export declare function utf8Strchr(p: string, len: number, c: string): string;
/**
  * Converts all Unicode characters in the string that have a case to lowercase. The exact manner that this is done depends on the current locale, and may result in the number of characters in the string changing.
  * @param str a UTF-8 encoded string
  * @param len length of str, in bytes, or -1 if str is nul-terminated.
  * @returns a newly allocated string, with all characters converted to lowercase. 
  */
export declare function utf8Strdown(str: string, len: number): string;
/**
  * Computes the length of the string in characters, not including the terminating nul character. If the max’th byte falls in the middle of a character, the last (partial) character is not counted.
  * @param p pointer to the start of a UTF-8 encoded string
  * @param max the maximum number of bytes to examine. If max is less than 0, then the string is assumed to be nul-terminated. If max is 0, p will not be examined and may be None. If max is greater than 0, up to max bytes are examined
  * @returns the length of the string in characters 
  */
export declare function utf8Strlen(p: string, max: number): number;
/**
  * Like the standard C strncpy() function, but copies a given number of characters instead of a given number of bytes. The src string must be valid UTF-8 encoded text. (Use GLib.utf8_validate() on all text before trying to use UTF-8 utility functions with it.)
  * @param dest buffer to fill with characters from src
  * @param src UTF-8 encoded string
  * @param n character count
  * @returns dest 
  */
export declare function utf8Strncpy(dest: string, src: string, n: number): string;
/**
  * Find the rightmost occurrence of the given Unicode character in a UTF-8 encoded string, while limiting the search to len bytes. If len is -1, allow unbounded search.
  * @param p a nul-terminated UTF-8 encoded string
  * @param len the maximum length of p
  * @param c a Unicode character
  * @returns None if the string does not contain the character, otherwise, a pointer to the start of the rightmost occurrence of the character in the string. 
  */
export declare function utf8Strrchr(p: string, len: number, c: string): string;
/**
  * Reverses a UTF-8 string. str must be valid UTF-8 encoded text. (Use GLib.utf8_validate() on all text before trying to use UTF-8 utility functions with it.)
  * @param str a UTF-8 encoded string
  * @param len the maximum length of str to use, in bytes. If len < 0, then the string is nul-terminated.
  * @returns a newly-allocated string which is the reverse of str 
  */
export declare function utf8Strreverse(str: string, len: number): string;
/**
  * Converts all Unicode characters in the string that have a case to uppercase. The exact manner that this is done depends on the current locale, and may result in the number of characters in the string increasing. (For instance, the German ess-zet will be changed to SS.)
  * @param str a UTF-8 encoded string
  * @param len length of str, in bytes, or -1 if str is nul-terminated.
  * @returns a newly allocated string, with all characters converted to uppercase. 
  */
export declare function utf8Strup(str: string, len: number): string;
/**
  * Copies a substring out of a UTF-8 encoded string. The substring will contain end_pos - start_pos characters.
  * @param str a UTF-8 encoded string
  * @param startPos a character offset within str
  * @param endPos another character offset within str
  * @returns a newly allocated copy of the requested substring. Free with GLib.free() when no longer needed. 
  */
export declare function utf8Substring(str: string, startPos: number, endPos: number): string;
/**
  * Convert a string from UTF-8 to a 32-bit fixed width representation as UCS-4. A trailing 0 character will be added to the string after the converted text.
  * @param str a UTF-8 encoded string
  * @param len the maximum length of str to use, in bytes. If len < 0, then the string is nul-terminated.
  * @returns a pointer to a newly allocated UCS-4 string. This value must be freed with GLib.free(). If an error occurs, None will be returned and error set.   items_read:location to store number of bytes read, or None. If None, then GLib.ConvertError.PARTIAL_INPUT will be returned in case str contains a trailing partial character. If an error occurs then the index of the invalid input is stored here. items_written:location to store number of characters written or None. The value here stored does not include the trailing 0 character. 
  */
export declare function utf8ToUcs4(str: string, len: number): [string, number, number];
/**
  * Convert a string from UTF-8 to a 32-bit fixed width representation as UCS-4, assuming valid UTF-8 input. This function is roughly twice as fast as GLib.utf8_to_ucs4() but does no error checking on the input. A trailing 0 character will be added to the string after the converted text.
  * @param str a UTF-8 encoded string
  * @param len the maximum length of str to use, in bytes. If len < 0, then the string is nul-terminated.
  * @returns a pointer to a newly allocated UCS-4 string. This value must be freed with GLib.free().   items_written:location to store the number of characters in the result, or None. 
  */
export declare function utf8ToUcs4Fast(str: string, len: number): [string, number];
/**
  * Convert a string from UTF-8 to UTF-16. A 0 character will be added to the result after the converted text.
  * @param str a UTF-8 encoded string
  * @param len the maximum length (number of bytes) of str to use. If len < 0, then the string is nul-terminated.
  * @returns a pointer to a newly allocated UTF-16 string. This value must be freed with GLib.free(). If an error occurs, None will be returned and error set.   items_read:location to store number of bytes read, or None. If None, then GLib.ConvertError.PARTIAL_INPUT will be returned in case str contains a trailing partial character. If an error occurs then the index of the invalid input is stored here. items_written:location to store number of #gunichar2 written, or None. The value stored here does not include the trailing 0. 
  */
export declare function utf8ToUtf16(str: string, len: number): [number, number, number];
/**
  * Validates UTF-8 encoded text. str is the text to validate; if str is nul-terminated, then max_len can be -1, otherwise max_len should be the number of bytes to validate. If end is non-None, then the end of the valid range will be stored there (i.e. the start of the first invalid character if some bytes were invalid, or the end of the text being validated otherwise).
  * @param str a pointer to character data
  * @returns True if the text was valid UTF-8  end:return location for end of valid data 
  */
export declare function utf8Validate(str: Int8Array): [boolean, string];
/**
  * Parses the string str and verify if it is a UUID.
  * @param str a string representing a UUID
  * @returns True if str is a valid UUID, False otherwise. 
  */
export declare function uuidStringIsValid(str: string): boolean;
/**
  * Generates a random UUID (RFC 4122 version 4) as a string.
  * @returns A string that should be freed with GLib.free(). 
  */
export declare function uuidStringRandom(): string;
export declare function variantGetGtype(): import('../GObject').GType;
/**
  * Determines if a given string is a valid D-Bus object path.  You should ensure that a string is a valid D-Bus object path before passing it to GLib.Variant.new_object_path().
  * @param string a normal C nul-terminated string
  * @returns True if string is a D-Bus object path 
  */
export declare function variantIsObjectPath(string: string): boolean;
/**
  * Determines if a given string is a valid D-Bus type signature.  You should ensure that a string is a valid D-Bus type signature before passing it to GLib.Variant.new_signature().
  * @param string a normal C nul-terminated string
  * @returns True if string is a D-Bus type signature 
  */
export declare function variantIsSignature(string: string): boolean;
/**
  * Parses a GLib.Variant from a text representation.
  * @param type a GLib.VariantType, or None
  * @param text a string containing a GLib.Variant in text form
  * @param limit a pointer to the end of text, or None
  * @param endptr a location to store the end pointer, or None
  * @returns a non-floating reference to a GLib.Variant, or None 
  */
export declare function variantParse(type: import('../GLib').VariantType | null, text: string, limit: string | null, endptr: string | null): import('../GLib').Variant;
/**
  * Pretty-prints a message showing the context of a GLib.Variant parse error within the string for which parsing was attempted.
  * @param error a GLib.Error from the GLib.VariantParseError domain
  * @param sourceStr the string that was given to the parser
  * @returns the printed message 
  */
export declare function variantParseErrorPrintContext(error: import('../GLib').Error, sourceStr: string): string;
export declare function variantParseErrorQuark(): number;
/**
  * Same as g_variant_error_quark(). 
  */
export declare function variantParserGetErrorQuark(): number;
export declare function variantTypeChecked(arg0: string): import('../GLib').VariantType;
export declare function variantTypeStringGetDepth(typeString: string): number;
/**
  * Checks if type_string is a valid GLib.Variant type string.  This call is equivalent to calling GLib.VariantType.string_scan() and confirming that the following character is a nul terminator.
  * @param typeString a pointer to any string
  * @returns True if type_string is exactly one valid type string 
  */
export declare function variantTypeStringIsValid(typeString: string): boolean;
/**
  * Scan for a single complete and valid GLib.Variant type string in string. The memory pointed to by limit (or bytes beyond it) is never accessed.
  * @param string a pointer to any string
  * @param limit the end of string, or None
  * @returns True if a valid type string was found   endptr:location to store the end pointer, or None 
  */
export declare function variantTypeStringScan(string: string, limit: string | null): [boolean, string];
