import * as GObject from '../GObject';
import * as Atk from '../Atk';
export declare interface Hyperlink extends GObject.Object, Atk.Action { }

/**
  * An ATK object which encapsulates a link or set of links (for
instance in the case of client-side image maps) in a hypertext
document.  It may implement the Atk.Action interface.  Atk.Hyperlink
may also be used to refer to inline embedded content, since it
allows specification of a start and end offset within the host
Atk.Hypertext object. 
  */
export declare class Hyperlink {
  /**
    * Gets the index with the hypertext document at which this link ends.
    * @returns the index with the hypertext document at which this link ends 
    */
  getEndIndex(): number;
  /**
    * Gets the number of anchors associated with this hyperlink.
    * @returns the number of anchors associated with this hyperlink 
    */
  getNAnchors(): number;
  /**
    * Returns the item associated with this hyperlinks nth anchor. For instance, the returned Atk.Object will implement Atk.Text if self is a text hyperlink, Atk.Image if self is an image hyperlink etc.
    * @param i a (zero-index) integer specifying the desired anchor
    * @returns an Atk.Object associated with this hyperlinks i-th anchor 
    */
  getObject(i: number): import('../Atk').Object;
  /**
    * Gets the index with the hypertext document at which this link begins.
    * @returns the index with the hypertext document at which this link begins 
    */
  getStartIndex(): number;
  /**
    * Get a the URI associated with the anchor specified by i of self.
    * @param i a (zero-index) integer specifying the desired anchor
    * @returns a string specifying the URI 
    */
  getUri(i: number): string;
  /**
    * Indicates whether the link currently displays some or all of its content inline.  Ordinary HTML links will usually return False, but an inline <src> HTML element will return True.
    * @returns whether or not this link displays its content inline. 
    */
  isInline(): boolean;
  /**
    * Determines whether this Atk.Hyperlink is selected
    * @returns True if the Atk.Hyperlink is selected, False otherwise 
    */
  isSelectedLink(): boolean;
  /**
    * Since the document that a link is associated with may have changed this method returns True if the link is still valid (with respect to the document it references) and False otherwise.
    * @returns whether or not this link is still valid 
    */
  isValid(): boolean;
  /**
    * The end index of the Atk.Hyperlink object 
    */
  readonly endIndex: number;
  /**
    * The number of anchors associated with the Atk.Hyperlink object 
    */
  readonly numberOfAnchors: number;
  /**
    * Specifies whether the Atk.Hyperlink object is selected deprecated 
    */
  readonly selectedLink: boolean;
  /**
    * The start index of the Atk.Hyperlink object 
    */
  readonly startIndex: number;
}

