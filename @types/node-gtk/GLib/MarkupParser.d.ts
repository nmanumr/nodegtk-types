/**
  * Any of the fields in GLib.MarkupParser can be None, in which case they
will be ignored. Except for the error function, any of these callbacks
can set an error; in particular the GLib.MarkupError.UNKNOWN_ELEMENT,
GLib.MarkupError.UNKNOWN_ATTRIBUTE, and GLib.MarkupError.INVALID_CONTENT
errors are intended to be set from these callbacks. If you set an error
from a callback, GLib.MarkupParseContext.parse() will report that error
back to its caller. 
  */
export declare class MarkupParser {
}

