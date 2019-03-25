/**
  * Structure used for scatter/gather data output when sending multiple
messages or packets in one go. You generally pass in an array of
Gio.OutputVectors and the operation will use all the buffers as if they
were one buffer. 
  */
export declare class OutputMessage {
/**
  * a Gio.SocketAddress, or None 
  */
address: import('../Gio').SocketAddress;
/**
  * initialize to 0. Will be set to the number of bytes that have been sent 
  */
bytesSent: number;
/**
  * a pointer to an array of Gio.SocketControlMessages, or None. 
  */
controlMessages: import('../Gio').SocketControlMessage;
/**
  * number of elements in control_messages. 
  */
numControlMessages: number;
/**
  * the number of output vectors pointed to by vectors. 
  */
numVectors: number;
/**
  * pointer to an array of output vectors 
  */
vectors: import('../Gio').OutputVector;
}

