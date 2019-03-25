/**
  * Structure used for scatter/gather data output.
You generally pass in an array of Gio.OutputVectors
and the operation will use all the buffers as if they were
one buffer. 
  */
export declare class OutputVector {
/**
  * Pointer to a buffer of data to read. 
  */
buffer: Object;
/**
  * the size of buffer. 
  */
size: number;
}

