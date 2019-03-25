/**
  * The GObject.SignalInvocationHint structure is used to pass on additional information
to callbacks during a signal emission. 
  */
export declare class SignalInvocationHint {
/**
  * The detail passed on for this emission 
  */
detail: number;
/**
  * The stage the signal emission is currently in, this field will contain one of GObject.SignalFlags.RUN_FIRST, GObject.SignalFlags.RUN_LAST or GObject.SignalFlags.RUN_CLEANUP. 
  */
runType: import('../GObject').SignalFlags;
/**
  * The signal id of the signal invoking the callback 
  */
signalId: number;
}

