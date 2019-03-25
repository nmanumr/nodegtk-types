/**
  * Structure used for scatter/gather data input when receiving multiple
messages or packets in one go. You generally pass in an array of empty
Gio.InputVectors and the operation will use all the buffers as if they
were one buffer, and will set bytes_received to the total number of bytes
received across all Gio.InputVectors. 
  */
export declare class InputMessage {
/**
  * return location for a Gio.SocketAddress, or None 
  */
address: import('../Gio').SocketAddress;
/**
  * will be set to the number of bytes that have been received 
  */
bytesReceived: number;
/**
  * return location for a caller-allocated array of Gio.SocketControlMessages, or None 
  */
controlMessages: import('../Gio').SocketControlMessage;
/**
  * collection of Gio.SocketMsgFlags for the received message, outputted by the call 
  */
flags: number;
/**
  * return location for the number of elements in control_messages 
  */
numControlMessages: number;
/**
  * the number of input vectors pointed to by vectors 
  */
numVectors: number;
/**
  * pointer to an array of input vectors 
  */
vectors: import('../Gio').InputVector;
}

