import * as GObject from '../GObject';
export declare interface PrintOperationPreview extends GObject.GInterface { }

export declare interface PrintOperationPreview {
  /**
    * Ends a preview. 
    */
  endPreview(): void;
  /**
    * Returns whether the given page is included in the set of pages that have been selected for printing.
    * @param pageNr a page number
    * @returns True if the page has been selected for printing 
    */
  isSelected(pageNr: number): boolean;
  /**
    * Renders a page to the preview, using the print context that was passed to the Gtk.PrintOperation ::preview handler together with self.
    * @param pageNr the page to render 
    */
  renderPage(pageNr: number): void;
}

