import * as GObject from '../GObject';
export declare interface DBusMessage extends GObject.Object { }

/**
  * A type for representing D-Bus messages that can be sent or received
on a Gio.DBusConnection. 
  */
export declare class DBusMessage {
  /**
    * Utility function to calculate how many bytes are needed to completely deserialize the D-Bus message stored at blob.
    * @param blob A blob representing a binary D-Bus message.
    * @returns Number of bytes needed or -1 if error is set (e.g. if blob contains invalid data or not enough data is available to determine the size). 
    */
  static bytesNeeded(blob: Int8Array): number;
  /**
    * Creates a new empty Gio.DBusMessage.
    * @returns A Gio.DBusMessage. Free with GObject.Object.unref(). 
    */
  static new(): import('../Gio').DBusMessage;
  /**
    * Creates a new Gio.DBusMessage from the data stored at blob. The byte order that the message was in can be retrieved using Gio.DBusMessage.get_byte_order().
    * @param blob A blob representing a binary D-Bus message.
    * @param capabilities A Gio.DBusCapabilityFlags describing what protocol features are supported.
    * @returns A new Gio.DBusMessage or None if error is set. Free with GObject.Object.unref(). 
    */
  static newFromBlob(blob: Int8Array, capabilities: import('../Gio').DBusCapabilityFlags): import('../Gio').DBusMessage;
  /**
    * Creates a new Gio.DBusMessage for a method call.
    * @param name A valid D-Bus name or None.
    * @param path A valid object path.
    * @param interface A valid D-Bus interface name or None.
    * @param method A valid method name.
    * @returns A Gio.DBusMessage. Free with GObject.Object.unref(). 
    */
  static newMethodCall(name: string | null, path: string, interface: string | null, method: string): import('../Gio').DBusMessage;
  /**
    * Creates a new Gio.DBusMessage for a signal emission.
    * @param path A valid object path.
    * @param interface A valid D-Bus interface name.
    * @param signal A valid signal name.
    * @returns A Gio.DBusMessage. Free with GObject.Object.unref(). 
    */
  static newSignal(path: string, interface: string, signal: string): import('../Gio').DBusMessage;
  /**
    * Copies self. The copy is a deep copy and the returned Gio.DBusMessage is completely identical except that it is guaranteed to not be locked.
    * @returns A new Gio.DBusMessage or None if error is set. Free with GObject.Object.unref(). 
    */
  copy(): import('../Gio').DBusMessage;
  /**
    * Convenience to get the first item in the body of self.
    * @returns The string item or None if the first item in the body of self is not a string. 
    */
  getArg0(): string;
  /**
    * Gets the body of a message.
    * @returns A GLib.Variant or None if the body is empty. Do not free, it is owned by self. 
    */
  getBody(): import('../GLib').Variant;
  /**
    * Gets the byte order of self.
    * @returns The byte order. 
    */
  getByteOrder(): import('../Gio').DBusMessageByteOrder;
  /**
    * Convenience getter for the Gio.DBusMessageHeaderField.DESTINATION header field.
    * @returns The value. 
    */
  getDestination(): string;
  /**
    * Convenience getter for the Gio.DBusMessageHeaderField.ERROR_NAME header field.
    * @returns The value. 
    */
  getErrorName(): string;
  /**
    * Gets the flags for self.
    * @returns Flags that are set (typically values from the Gio.DBusMessageFlags enumeration bitwise ORed together). 
    */
  getFlags(): import('../Gio').DBusMessageFlags;
  /**
    * Gets a header field on self.
    * @param headerField A 8-bit unsigned integer (typically a value from the Gio.DBusMessageHeaderField enumeration)
    * @returns A GLib.Variant with the value if the header was found, None otherwise. Do not free, it is owned by self. 
    */
  getHeader(headerField: import('../Gio').DBusMessageHeaderField): import('../GLib').Variant | null;
  /**
    * Gets an array of all header fields on self that are set.
    * @returns An array of header fields terminated by Gio.DBusMessageHeaderField.INVALID.  Each element is a #guchar. Free with GLib.free(). 
    */
  getHeaderFields(): Int8Array;
  /**
    * Convenience getter for the Gio.DBusMessageHeaderField.INTERFACE header field.
    * @returns The value. 
    */
  getInterface(): string;
  /**
    * Checks whether self is locked. To monitor changes to this value, conncet to the GObject.Object ::notify signal to listen for changes on the Gio.DBusMessage :locked property.
    * @returns True if self is locked, False otherwise. 
    */
  getLocked(): boolean;
  /**
    * Convenience getter for the Gio.DBusMessageHeaderField.MEMBER header field.
    * @returns The value. 
    */
  getMember(): string;
  /**
    * Gets the type of self.
    * @returns A 8-bit unsigned integer (typically a value from the Gio.DBusMessageType enumeration). 
    */
  getMessageType(): import('../Gio').DBusMessageType;
  /**
    * Convenience getter for the Gio.DBusMessageHeaderField.NUM_UNIX_FDS header field.
    * @returns The value. 
    */
  getNumUnixFds(): number;
  /**
    * Convenience getter for the Gio.DBusMessageHeaderField.PATH header field.
    * @returns The value. 
    */
  getPath(): string;
  /**
    * Convenience getter for the Gio.DBusMessageHeaderField.REPLY_SERIAL header field.
    * @returns The value. 
    */
  getReplySerial(): number;
  /**
    * Convenience getter for the Gio.DBusMessageHeaderField.SENDER header field.
    * @returns The value. 
    */
  getSender(): string;
  /**
    * Gets the serial for self.
    * @returns A #guint32. 
    */
  getSerial(): number;
  /**
    * Convenience getter for the Gio.DBusMessageHeaderField.SIGNATURE header field.
    * @returns The value. 
    */
  getSignature(): string;
  /**
    * Gets the UNIX file descriptors associated with self, if any.
    * @returns A Gio.UnixFDList or None if no file descriptors are associated. Do not free, this object is owned by self. 
    */
  getUnixFdList(): import('../Gio').UnixFDList;
  /**
    * If self is locked, does nothing. Otherwise locks the message. 
    */
  lock(): void;
  /**
    * Creates a new Gio.DBusMessage that is an error reply to self.
    * @param errorName A valid D-Bus error name.
    * @param errorMessage The D-Bus error message.
    * @returns A Gio.DBusMessage. Free with GObject.Object.unref(). 
    */
  newMethodErrorLiteral(errorName: string, errorMessage: string): import('../Gio').DBusMessage;
  /**
    * Creates a new Gio.DBusMessage that is a reply to self.
    * @returns Gio.DBusMessage. Free with GObject.Object.unref(). 
    */
  newMethodReply(): import('../Gio').DBusMessage;
  /**
    * Produces a human-readable multi-line description of self.
    * @param indent Indentation level.
    * @returns A string that should be freed with GLib.free(). 
    */
  print(indent: number): string;
  /**
    * Sets the body self. As a side-effect the Gio.DBusMessageHeaderField.SIGNATURE header field is set to the type string of body (or cleared if body is None).
    * @param body Either None or a GLib.Variant that is a tuple. 
    */
  setBody(body: import('../GLib').Variant): void;
  /**
    * Sets the byte order of self.
    * @param byteOrder The byte order. 
    */
  setByteOrder(byteOrder: import('../Gio').DBusMessageByteOrder): void;
  /**
    * Convenience setter for the Gio.DBusMessageHeaderField.DESTINATION header field.
    * @param value The value to set. 
    */
  setDestination(value: string): void;
  /**
    * Convenience setter for the Gio.DBusMessageHeaderField.ERROR_NAME header field.
    * @param value The value to set. 
    */
  setErrorName(value: string): void;
  /**
    * Sets the flags to set on self.
    * @param flags Flags for self that are set (typically values from the Gio.DBusMessageFlags enumeration bitwise ORed together). 
    */
  setFlags(flags: import('../Gio').DBusMessageFlags): void;
  /**
    * Sets a header field on self.
    * @param headerField A 8-bit unsigned integer (typically a value from the Gio.DBusMessageHeaderField enumeration)
    * @param value A GLib.Variant to set the header field or None to clear the header field. 
    */
  setHeader(headerField: import('../Gio').DBusMessageHeaderField, value: import('../GLib').Variant | null): void;
  /**
    * Convenience setter for the Gio.DBusMessageHeaderField.INTERFACE header field.
    * @param value The value to set. 
    */
  setInterface(value: string): void;
  /**
    * Convenience setter for the Gio.DBusMessageHeaderField.MEMBER header field.
    * @param value The value to set. 
    */
  setMember(value: string): void;
  /**
    * Sets self to be of type.
    * @param type A 8-bit unsigned integer (typically a value from the Gio.DBusMessageType enumeration). 
    */
  setMessageType(type: import('../Gio').DBusMessageType): void;
  /**
    * Convenience setter for the Gio.DBusMessageHeaderField.NUM_UNIX_FDS header field.
    * @param value The value to set. 
    */
  setNumUnixFds(value: number): void;
  /**
    * Convenience setter for the Gio.DBusMessageHeaderField.PATH header field.
    * @param value The value to set. 
    */
  setPath(value: string): void;
  /**
    * Convenience setter for the Gio.DBusMessageHeaderField.REPLY_SERIAL header field.
    * @param value The value to set. 
    */
  setReplySerial(value: number): void;
  /**
    * Convenience setter for the Gio.DBusMessageHeaderField.SENDER header field.
    * @param value The value to set. 
    */
  setSender(value: string): void;
  /**
    * Sets the serial for self.
    * @param serial A #guint32. 
    */
  setSerial(serial: number): void;
  /**
    * Convenience setter for the Gio.DBusMessageHeaderField.SIGNATURE header field.
    * @param value The value to set. 
    */
  setSignature(value: string): void;
  /**
    * Sets the UNIX file descriptors associated with self. As a side-effect the Gio.DBusMessageHeaderField.NUM_UNIX_FDS header field is set to the number of fds in fd_list (or cleared if fd_list is None).
    * @param fdList A Gio.UnixFDList or None. 
    */
  setUnixFdList(fdList: import('../Gio').UnixFDList | null): void;
  /**
    * Serializes self to a blob. The byte order returned by Gio.DBusMessage.get_byte_order() will be used.
    * @param capabilities A Gio.DBusCapabilityFlags describing what protocol features are supported.
    * @returns A pointer to a valid binary D-Bus message of out_size bytes generated by self or None if error is set. Free with GLib.free(). 
    */
  toBlob(capabilities: import('../Gio').DBusCapabilityFlags): Int8Array;
  /**
    * If self is not of type Gio.DBusMessageType.ERROR does nothing and returns False.
    * @returns True if error was set, False otherwise. 
    */
  toGerror(): boolean;
  /**
    * Whether the message is locked 
    */
  readonly locked: boolean;
}

