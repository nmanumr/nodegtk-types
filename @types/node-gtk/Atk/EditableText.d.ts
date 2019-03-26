import * as GObject from '../GObject';

/**
  * Atk.EditableText should be implemented by UI components which
contain text which the user can edit, via the Atk.Object
corresponding to that component (see Atk.Object). 
  */
export declare interface EditableText extends GObject.GInterface {
  /**
    * Copy text from start_pos up to, but not including end_pos to the clipboard.
    * @param startPos start position
    * @param endPos end position 
    */
  copyText(startPos: number, endPos: number): void;
  /**
    * Copy text from start_pos up to, but not including end_pos to the clipboard and then delete from the widget.
    * @param startPos start position
    * @param endPos end position 
    */
  cutText(startPos: number, endPos: number): void;
  /**
    * Delete text start_pos up to, but not including end_pos.
    * @param startPos start position
    * @param endPos end position 
    */
  deleteText(startPos: number, endPos: number): void;
  /**
    * Insert text at a given position.
    * @param string the text to insert
    * @param length the length of text to insert, in bytes
    * @param position The caller initializes this to the position at which to insert the text. After the call it points at the position after the newly inserted text. 
    */
  insertText(string: string, length: number, position: number): void;
  /**
    * Paste text from clipboard to specified position.
    * @param position position to paste 
    */
  pasteText(position: number): void;
  /**
    * Sets the attributes for a specified range. See the ATK_ATTRIBUTE macros (such as #ATK_ATTRIBUTE_LEFT_MARGIN) for examples of attributes that can be set. Note that other attributes that do not have corresponding ATK_ATTRIBUTE macros may also be set for certain text widgets.
    * @param attribSet an #AtkAttributeSet
    * @param startOffset start of range in which to set attributes
    * @param endOffset end of range in which to set attributes
    * @returns True if attributes successfully set for the specified range, otherwise False 
    */
  setRunAttributes(attribSet: Object, startOffset: number, endOffset: number): boolean;
  /**
    * Set text contents of self.
    * @param string string to set for text contents of self 
    */
  setTextContents(string: string): void;
}

