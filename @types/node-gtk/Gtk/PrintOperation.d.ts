import * as GObject from '../GObject';
import * as Gtk from '../Gtk';
export declare interface PrintOperation extends GObject.Object, Gtk.PrintOperationPreview { }

/**
  * Gtk.PrintOperation is the high-level, portable printing API.
It looks a bit different than other GTK+ dialogs such as the
Gtk.FileChooser, since some platforms don’t expose enough
infrastructure to implement a good print dialog. On such
platforms, Gtk.PrintOperation uses the native print dialog.
On platforms which do not provide a native print dialog, GTK+
uses its own, see #GtkPrintUnixDialog. 
  */
export declare class PrintOperation {
  /**
    * Creates a new Gtk.PrintOperation.
    * @returns a new Gtk.PrintOperation 
    */
  static new(): import('../Gtk').PrintOperation;
  /**
    * Cancels a running print operation. This function may be called from a Gtk.PrintOperation ::begin-print, Gtk.PrintOperation ::paginate or Gtk.PrintOperation ::draw-page signal handler to stop the currently running print operation. 
    */
  cancel(): void;
  /**
    * Signalize that drawing of particular page is complete. 
    */
  drawPageFinish(): void;
  /**
    * Returns the default page setup, see Gtk.PrintOperation.set_default_page_setup().
    * @returns the default page setup 
    */
  getDefaultPageSetup(): import('../Gtk').PageSetup;
  /**
    * Gets the value of Gtk.PrintOperation :embed-page-setup property.
    * @returns whether page setup selection combos are embedded 
    */
  getEmbedPageSetup(): boolean;
  /**
    * Call this when the result of a print operation is Gtk.PrintOperationResult.ERROR, either as returned by Gtk.PrintOperation.run(), or in the Gtk.PrintOperation ::done signal handler. The returned GLib.Error will contain more details on what went wrong. 
    */
  getError(): void;
  /**
    * Gets the value of Gtk.PrintOperation :has-selection property.
    * @returns whether there is a selection 
    */
  getHasSelection(): boolean;
  /**
    * Returns the number of pages that will be printed.
    * @returns the number of pages that will be printed 
    */
  getNPagesToPrint(): number;
  /**
    * Returns the current print settings.
    * @returns the current print settings of self. 
    */
  getPrintSettings(): import('../Gtk').PrintSettings;
  /**
    * Returns the status of the print operation. Also see Gtk.PrintOperation.get_status_string().
    * @returns the status of the print operation 
    */
  getStatus(): import('../Gtk').PrintStatus;
  /**
    * Returns a string representation of the status of the print operation. The string is translated and suitable for displaying the print status e.g. in a Gtk.Statusbar.
    * @returns a string representation of the status of the print operation 
    */
  getStatusString(): string;
  /**
    * Gets the value of Gtk.PrintOperation :support-selection property.
    * @returns whether the application supports print of selection 
    */
  getSupportSelection(): boolean;
  /**
    * A convenience function to find out if the print operation is finished, either successfully (Gtk.PrintStatus.FINISHED) or unsuccessfully (Gtk.PrintStatus.FINISHED_ABORTED).
    * @returns True, if the print operation is finished. 
    */
  isFinished(): boolean;
  /**
    * Runs the print operation, by first letting the user modify print settings in the print dialog, and then print the document.
    * @param action the action to start
    * @param parent Transient parent of the dialog
    * @returns the result of the print operation. A return value of Gtk.PrintOperationResult.APPLY indicates that the printing was completed successfully. In this case, it is a good idea to obtain the used print settings with Gtk.PrintOperation.get_print_settings() and store them for reuse with the next print operation. A value of Gtk.PrintOperationResult.IN_PROGRESS means the operation is running asynchronously, and will emit the Gtk.PrintOperation ::done signal when done. 
    */
  run(action: import('../Gtk').PrintOperationAction, parent: import('../Gtk').Window | null): import('../Gtk').PrintOperationResult;
  /**
    * Sets whether the Gtk.PrintOperation.run() may return before the print operation is completed. Note that some platforms may not allow asynchronous operation.
    * @param allowAsync True to allow asynchronous operation 
    */
  setAllowAsync(allowAsync: boolean): void;
  /**
    * Sets the current page.
    * @param currentPage the current page, 0-based 
    */
  setCurrentPage(currentPage: number): void;
  /**
    * Sets the label for the tab holding custom widgets.
    * @param label the label to use, or None to use the default label 
    */
  setCustomTabLabel(label: string | null): void;
  /**
    * Makes default_page_setup the default page setup for self.
    * @param defaultPageSetup a Gtk.PageSetup, or None 
    */
  setDefaultPageSetup(defaultPageSetup: import('../Gtk').PageSetup | null): void;
  /**
    * Sets up the Gtk.PrintOperation to wait for calling of Gtk.PrintOperation.draw_page_finish() from application. It can be used for drawing page in another thread. 
    */
  setDeferDrawing(): void;
  /**
    * Embed page size combo box and orientation combo box into page setup page. Selected page setup is stored as default page setup in Gtk.PrintOperation.
    * @param embed True to embed page setup selection in the #GtkPrintUnixDialog 
    */
  setEmbedPageSetup(embed: boolean): void;
  /**
    * Sets up the Gtk.PrintOperation to generate a file instead of showing the print dialog. The indended use of this function is for implementing “Export to PDF” actions. Currently, PDF is the only supported format.
    * @param filename the filename for the exported file 
    */
  setExportFilename(filename: string): void;
  /**
    * Sets whether there is a selection to print.
    * @param hasSelection True indicates that a selection exists 
    */
  setHasSelection(hasSelection: boolean): void;
  /**
    * Sets the name of the print job. The name is used to identify the job (e.g. in monitoring applications like eggcups).
    * @param jobName a string that identifies the print job 
    */
  setJobName(jobName: string): void;
  /**
    * Sets the number of pages in the document.
    * @param nPages the number of pages 
    */
  setNPages(nPages: number): void;
  /**
    * Sets the print settings for self. This is typically used to re-establish print settings from a previous print operation, see Gtk.PrintOperation.run().
    * @param printSettings Gtk.PrintSettings 
    */
  setPrintSettings(printSettings: import('../Gtk').PrintSettings | null): void;
  /**
    * If show_progress is True, the print operation will show a progress dialog during the print operation.
    * @param showProgress True to show a progress dialog 
    */
  setShowProgress(showProgress: boolean): void;
  /**
    * Sets whether selection is supported by Gtk.PrintOperation.
    * @param supportSelection True to support selection 
    */
  setSupportSelection(supportSelection: boolean): void;
  /**
    * If track_status is True, the print operation will try to continue report on the status of the print job in the printer queues and printer. This can allow your application to show things like “out of paper” issues, and when the print job actually reaches the printer.
    * @param trackStatus True to track status after printing 
    */
  setTrackPrintStatus(trackStatus: boolean): void;
  /**
    * Sets up the transformation for the cairo context obtained from Gtk.PrintContext in such a way that distances are measured in units of unit.
    * @param unit the unit to use 
    */
  setUnit(unit: import('../Gtk').Unit): void;
  /**
    * If full_page is True, the transformation for the cairo context obtained from Gtk.PrintContext puts the origin at the top left corner of the page (which may not be the top left corner of the sheet, depending on page orientation and the number of pages per sheet). Otherwise, the origin is at the top left corner of the imageable area (i.e. inside the margins).
    * @param fullPage True to set up the Gtk.PrintContext for the full page 
    */
  setUseFullPage(fullPage: boolean): void;
  /**
    * True if print process may run asynchronous. 
    */
  allowAsync: boolean;
  /**
    * The current page in the document 
    */
  currentPage: number;
  /**
    * Label for the tab containing custom widgets. 
    */
  customTabLabel: string;
  /**
    * The Gtk.PageSetup used by default 
    */
  defaultPageSetup: import('../Gtk').PageSetup;
  /**
    * True if page setup combos are embedded in GtkPrintUnixDialog 
    */
  embedPageSetup: boolean;
  /**
    * Export filename 
    */
  exportFilename: string;
  /**
    * True if a selection exists. 
    */
  hasSelection: boolean;
  /**
    * A string used for identifying the print job. 
    */
  jobName: string;
  /**
    * The number of pages in the document. 
    */
  nPages: number;
  /**
    * The number of pages that will be printed. 
    */
  readonly nPagesToPrint: number;
  /**
    * The Gtk.PrintSettings used for initializing the dialog 
    */
  printSettings: import('../Gtk').PrintSettings;
  /**
    * True if a progress dialog is shown while printing. 
    */
  showProgress: boolean;
  /**
    * The status of the print operation 
    */
  readonly status: import('../Gtk').PrintStatus;
  /**
    * A human-readable description of the status 
    */
  readonly statusString: string;
  /**
    * True if the print operation will support print of selection. 
    */
  supportSelection: boolean;
  /**
    * True if the print operation will continue to report on the print job status after the print data has been sent to the printer or print server. 
    */
  trackPrintStatus: boolean;
  /**
    * The unit in which distances can be measured in the context 
    */
  unit: import('../Gtk').Unit;
  /**
    * True if the origin of the context should be at the corner of the page and not the corner of the imageable area 
    */
  useFullPage: boolean;
}

