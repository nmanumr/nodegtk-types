import * as GObject from '../GObject';

/**
  * An interface whereby an object allows its backing content to be
streamed to clients.  Typical implementors would be images or
icons, HTML content, or multimedia display/rendering widgets. 
  */
export declare interface StreamableContent extends GObject.GInterface {
  /**
    * Gets the character string of the specified mime type. The first mime type is at position 0, the second at position 1, and so on.
    * @param i a int representing the position of the mime type starting from 0
    * @returns a str representing the specified mime type; the caller should not free the character string. 
    */
  getMimeType(i: number): string;
  /**
    * Gets the number of mime types supported by this object.
    * @returns a int which is the number of mime types supported by the object. 
    */
  getNMimeTypes(): number;
  /**
    * Gets the content in the specified mime type.
    * @param mimeType a str representing the mime type
    * @returns A GLib.IOChannel which contains the content in the specified mime type. 
    */
  getStream(mimeType: string): import('../GLib').IOChannel;
  /**
    * Get a string representing a URI in IETF standard format (see http://www.ietf.org/rfc/rfc2396.txt) from which the object’s content may be streamed in the specified mime-type, if one is available. If mime_type is None, the URI for the default (and possibly only) mime-type is returned.
    * @param mimeType a str representing the mime type, or None to request a URI for the default mime type.
    * @returns Returns a string representing a URI, or None if no corresponding URI can be constructed. 
    */
  getUri(mimeType: string): string | null;
}

