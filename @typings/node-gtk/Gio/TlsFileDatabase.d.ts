/**
  * Gio.TlsFileDatabase is implemented by Gio.TlsDatabase objects which load
their certificate information from a file. It is an interface which
TLS library specific subtypes implement. 
  */
export declare interface TlsFileDatabase extends import('../GObject').GInterface{
/**
  * Creates a new Gio.TlsFileDatabase which uses anchor certificate authorities in anchors to verify certificate chains.
  * @param anchors filename of anchor certificate authorities.
  * @returns the new Gio.TlsFileDatabase, or None on error 
  */
static new(anchors: string): import('../Gio').TlsFileDatabase;
/**
  * The certificate authority anchor file 
  */
anchors: string;
}

