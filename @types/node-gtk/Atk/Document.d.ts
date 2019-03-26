import * as GObject from '../GObject';

/**
  * The Atk.Document interface should be supported by any object whose
content is a representation or view of a document.  The Atk.Document
interface should appear on the toplevel container for the document
content; however Atk.Document instances may be nested (i.e. an
Atk.Document may be a descendant of another Atk.Document) in those
cases where one document contains “embedded content” which can
reasonably be considered a document in its own right. 
  */
export declare interface Document extends GObject.GInterface {
  /**
    * 
    * @param attributeName a character string representing the name of the attribute whose value is being queried.
    * @returns a string value associated with the named attribute for this document, or None if a value for #attribute_name has not been specified for this document. 
    */
  getAttributeValue(attributeName: string): string | null;
  /**
    * Gets an AtkAttributeSet which describes document-wide attributes as name-value pairs.
    * @returns An AtkAttributeSet containing the explicitly set name-value-pair attributes associated with this document as a whole. 
    */
  getAttributes(): Object[];
  /**
    * 
    * @returns current page number inside self. -1 if not implemented, not know by the implementor or irrelevant. 
    */
  getCurrentPageNumber(): number;
  /**
    * Gets a object that points to an instance of the DOM.  It is up to the caller to check atk_document_get_type to determine how to cast this pointer.
    * @returns a object that points to an instance of the DOM. 
    */
  getDocument(): Object | null;
  /**
    * Gets a string indicating the document type.
    * @returns a string indicating the document type 
    */
  getDocumentType(): string;
  /**
    * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale of the content of this document instance.  Individual text substrings or images within this document may have a different locale, see atk_text_get_attributes and Atk.Image.get_image_locale.
    * @returns a UTF-8 string indicating the POSIX-style LC_MESSAGES locale of the document content as a whole, or None if the document content does not specify a locale. 
    */
  getLocale(): string;
  /**
    * 
    * @returns total page count of self. -1 if not implemented, not know by the implementor or irrelevant. 
    */
  getPageCount(): number;
  /**
    * 
    * @param attributeName a character string representing the name of the attribute whose value is being set.
    * @param attributeValue a string value to be associated with #attribute_name.
    * @returns True if #value is successfully associated with #attribute_name for this document, False otherwise (e.g. if the document does not allow the attribute to be modified). 
    */
  setAttributeValue(attributeName: string, attributeValue: string): boolean;
}

