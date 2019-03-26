import * as GObject from '../GObject';
export declare interface SocketControlMessage extends GObject.Object { }

/**
  * A Gio.SocketControlMessage is a special-purpose utility message that
can be sent to or received from a Gio.Socket. These types of
messages are often called “ancillary data”. 
  */
export declare abstract class SocketControlMessage {
  /**
    * Tries to deserialize a socket control message of a given level and type. This will ask all known (to GObject.GType) subclasses of Gio.SocketControlMessage if they can understand this kind of message and if so deserialize it into a Gio.SocketControlMessage.
    * @param level a socket level
    * @param type a socket control message type for the given level
    * @param data pointer to the message data
    * @returns the deserialized message or None 
    */
  static deserialize(level: number, type: number, data: Int8Array): import('../Gio').SocketControlMessage;
  /**
    * Returns the “level” (i.e. the originating protocol) of the control message. This is often SOL_SOCKET.
    * @returns an integer describing the level 
    */
  getLevel(): number;
  /**
    * Returns the protocol specific type of the control message. For instance, for UNIX fd passing this would be SCM_RIGHTS.
    * @returns an integer describing the type of control message 
    */
  getMsgType(): number;
  /**
    * Returns the space required for the control message, not including headers or alignment.
    * @returns The number of bytes required. 
    */
  getSize(): number;
  /**
    * Converts the data in the message to bytes placed in the message.
    * @param data A buffer to write data to 
    */
  serialize(data: Object): void;
}

