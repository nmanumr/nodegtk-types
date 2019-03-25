/**
  * A Gtk.BindingSignal stores the necessary information to
activate a widget in response to a key press via a signal
emission. 
  */
export declare class BindingSignal {
/**
  * the arguments specified for the signal 
  */
args: import('../Gtk').BindingArg;
/**
  * number of arguments specified for the signal 
  */
nArgs: number;
/**
  * implementation detail 
  */
next: import('../Gtk').BindingSignal;
/**
  * the action signal to be emitted 
  */
signalName: string;
}

