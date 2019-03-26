import * as GObject from '../GObject';

/**
  * Atk.HyperlinkImpl allows AtkObjects to refer to their associated
Atk.Hyperlink instance, if one exists.  Atk.HyperlinkImpl differs
from Atk.Hyperlink in that Atk.HyperlinkImpl is an interface, whereas
Atk.Hyperlink is a object type.  The Atk.HyperlinkImpl interface
allows a client to query an Atk.Object for the availability of an
associated Atk.Hyperlink instance, and obtain that instance.  It is
thus particularly useful in cases where embedded content or inline
content within a text object is present, since the embedding text
object implements Atk.Hypertext and the inline/embedded objects are
exposed as children which implement Atk.HyperlinkImpl, in addition
to their being obtainable via Atk.Hypertext :getLink followed by
Atk.Hyperlink :getObject. 
  */
export declare interface HyperlinkImpl extends GObject.GInterface {
  /**
    * Gets the hyperlink associated with this object.
    * @returns an Atk.Hyperlink object which points to this implementing Atk.Object. 
    */
  getHyperlink(): import('../Atk').Hyperlink;
}

