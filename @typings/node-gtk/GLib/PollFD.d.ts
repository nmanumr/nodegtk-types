/**
  * Represents a file descriptor, which events to poll for, and which events
occurred. 
  */
export declare class PollFD {
/**
  * a bitwise combination from GLib.IOCondition, specifying which events should be polled for. Typically for reading from a file descriptor you would use GLib.IOCondition.IN | GLib.IOCondition.HUP | GLib.IOCondition.ERR, and for writing you would use GLib.IOCondition.OUT | GLib.IOCondition.ERR. 
  */
events: number;
/**
  * the file descriptor to poll (or a HANDLE on Win32) 
  */
fd: number;
/**
  * a bitwise combination of flags from GLib.IOCondition, returned from the poll() function to indicate which events occurred. 
  */
revents: number;
}

