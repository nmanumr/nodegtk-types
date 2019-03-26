import * as Gtk from '../Gtk';
export declare interface Assistant extends Gtk.Window { }

/**
  * A Gtk.Assistant is a widget used to represent a generally complex
operation splitted in several steps, guiding the user through its
pages and controlling the page flow to collect the necessary data. 
  */
export declare class Assistant {
  /**
    * Creates a new Gtk.Assistant.
    * @returns a newly created Gtk.Assistant 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Adds a widget to the action area of a Gtk.Assistant.
    * @param child a Gtk.Widget 
    */
  addActionWidget(child: import('../Gtk').Widget): void;
  /**
    * Appends a page to the self.
    * @param page a Gtk.Widget
    * @returns the index (starting at 0) of the inserted page 
    */
  appendPage(page: import('../Gtk').Widget): number;
  /**
    * Erases the visited page history so the back button is not shown on the current page, and removes the cancel button from subsequent pages. 
    */
  commit(): void;
  /**
    * Returns the page number of the current page.
    * @returns The index (starting from 0) of the current page in the self, or -1 if the self has no pages, or no current page. 
    */
  getCurrentPage(): number;
  /**
    * Returns the number of pages in the self
    * @returns the number of pages in the self 
    */
  getNPages(): number;
  /**
    * Returns the child widget contained in page number page_num.
    * @param pageNum the index of a page in the self, or -1 to get the last page
    * @returns the child widget, or None if page_num is out of bounds 
    */
  getNthPage(pageNum: number): import('../Gtk').Widget | null;
  /**
    * Gets whether page is complete.
    * @param page a page of self
    * @returns True if page is complete. 
    */
  getPageComplete(page: import('../Gtk').Widget): boolean;
  /**
    * Gets whether page has padding.
    * @param page a page of self
    * @returns True if page has padding 
    */
  getPageHasPadding(page: import('../Gtk').Widget): boolean;
  /**
    * Gets the header image for page.
    * @param page a page of self
    * @returns the header image for page, or None if there’s no header image for the page 
    */
  getPageHeaderImage(page: import('../Gtk').Widget): import('../GdkPixbuf').Pixbuf;
  /**
    * Gets the side image for page.
    * @param page a page of self
    * @returns the side image for page, or None if there’s no side image for the page 
    */
  getPageSideImage(page: import('../Gtk').Widget): import('../GdkPixbuf').Pixbuf;
  /**
    * Gets the title for page.
    * @param page a page of self
    * @returns the title for page 
    */
  getPageTitle(page: import('../Gtk').Widget): string;
  /**
    * Gets the page type of page.
    * @param page a page of self
    * @returns the page type of page 
    */
  getPageType(page: import('../Gtk').Widget): import('../Gtk').AssistantPageType;
  /**
    * Inserts a page in the self at a given position.
    * @param page a Gtk.Widget
    * @param position the index (starting at 0) at which to insert the page, or -1 to append the page to the self
    * @returns the index (starting from 0) of the inserted page 
    */
  insertPage(page: import('../Gtk').Widget, position: number): number;
  /**
    * Navigate to the next page. 
    */
  nextPage(): void;
  /**
    * Prepends a page to the self.
    * @param page a Gtk.Widget
    * @returns the index (starting at 0) of the inserted page 
    */
  prependPage(page: import('../Gtk').Widget): number;
  /**
    * Navigate to the previous visited page. 
    */
  previousPage(): void;
  /**
    * Removes a widget from the action area of a Gtk.Assistant.
    * @param child a Gtk.Widget 
    */
  removeActionWidget(child: import('../Gtk').Widget): void;
  /**
    * Removes the page_num’s page from self.
    * @param pageNum the index of a page in the self, or -1 to remove the last page 
    */
  removePage(pageNum: number): void;
  /**
    * Switches the page to page_num.
    * @param pageNum index of the page to switch to, starting from 0. If negative, the last page will be used. If greater than the number of pages in the self, nothing will be done. 
    */
  setCurrentPage(pageNum: number): void;
  /**
    * Sets the page forwarding function to be page_func.
    * @param pageFunc the Gtk.AssistantPageFunc, or None to use the default one
    * @param data user data for page_func 
    */
  setForwardPageFunc(pageFunc: import('../Gtk').assistantPageFunc | null, data: Object | null): void;
  /**
    * Sets whether page contents are complete.
    * @param page a page of self
    * @param complete the completeness status of the page 
    */
  setPageComplete(page: import('../Gtk').Widget, complete: boolean): void;
  /**
    * Sets whether the assistant is adding padding around the page.
    * @param page a page of self
    * @param hasPadding whether this page has padding 
    */
  setPageHasPadding(page: import('../Gtk').Widget, hasPadding: boolean): void;
  /**
    * Sets a header image for page.
    * @param page a page of self
    * @param pixbuf the new header image page 
    */
  setPageHeaderImage(page: import('../Gtk').Widget, pixbuf: import('../GdkPixbuf').Pixbuf | null): void;
  /**
    * Sets a side image for page.
    * @param page a page of self
    * @param pixbuf the new side image page 
    */
  setPageSideImage(page: import('../Gtk').Widget, pixbuf: import('../GdkPixbuf').Pixbuf | null): void;
  /**
    * Sets a title for page.
    * @param page a page of self
    * @param title the new title for page 
    */
  setPageTitle(page: import('../Gtk').Widget, title: string): void;
  /**
    * Sets the page type for page.
    * @param page a page of self
    * @param type the new type for page 
    */
  setPageType(page: import('../Gtk').Widget, type: import('../Gtk').AssistantPageType): void;
  /**
    * Forces self to recompute the buttons state. 
    */
  updateButtonsState(): void;
  /**
    * Use Header Bar for actions. 
    */
  useHeaderBar: number;
}

