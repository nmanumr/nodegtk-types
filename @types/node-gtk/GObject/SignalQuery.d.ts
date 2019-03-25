/**
  * A structure holding in-depth information for a specific signal. It is
filled in by the GObject.signal_query() function. 
  */
export declare class SignalQuery {
/**
  * The interface/instance type that this signal can be emitted for. 
  */
itype: import('../GObject').GType;
/**
  * The number of parameters that user callbacks take. 
  */
nParams: number;
/**
  * The individual parameter types for user callbacks, note that the effective callback signature is:   .. code-block:: c      @return_type callback (#gpointer     data1,     [param_types param_names,]     gpointer     data2); 
  */
paramTypes: import('../GObject').GType;
/**
  * The return type for user callbacks. 
  */
returnType: import('../GObject').GType;
/**
  * The signal flags as passed in to GObject.signal_new(). 
  */
signalFlags: import('../GObject').SignalFlags;
/**
  * The signal id of the signal being queried, or 0 if the signal to be queried was unknown. 
  */
signalId: number;
/**
  * The signal name. 
  */
signalName: string;
}

