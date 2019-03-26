import * as GObject from '../GObject';

/**
  * An interface used for objects which implement linking between
multiple resource or content locations, or multiple ‘markers’
within a single document.  A Hypertext instance is associated with
one or more Hyperlinks, which are associated with particular
offsets within the Hypertext’s included content.  While this
interface is derived from Text, there is no requirement that
Hypertext instances have textual content; they may implement Image
as well, and Hyperlinks need not have non-zero text offsets. 
  */
export declare interface Hypertext extends GObject.GInterface {
  /**
    * Gets the link in this hypertext document at index link_index
    * @param linkIndex an integer specifying the desired link
    * @returns the link in this hypertext document at index link_index 
    */
  getLink(linkIndex: number): import('../Atk').Hyperlink;
  /**
    * Gets the index into the array of hyperlinks that is associated with the character specified by char_index.
    * @param charIndex a character index
    * @returns an index into the array of hyperlinks in self, or -1 if there is no hyperlink associated with this character. 
    */
  getLinkIndex(charIndex: number): number;
  /**
    * Gets the number of links within this hypertext document.
    * @returns the number of links within this hypertext document 
    */
  getNLinks(): number;
}

