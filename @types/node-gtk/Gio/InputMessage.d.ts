/**
  * Structure used for scatter/gather data input when receiving multiple
messages or packets in one go. You generally pass in an array of empty
Gio.InputVectors and the operation will use all the buffers as if they
were one buffer, and will set bytes_received to the total number of bytes
received across all Gio.InputVectors. 
  */
export declare class InputMessage {
}

