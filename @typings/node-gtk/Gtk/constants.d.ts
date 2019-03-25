/**
  * Like Gtk.get_binary_age(), but from the headers used at application compile time, rather than from the library linked against at application run time.  
  */
export declare const BINARY_AGE = 2405;
/**
  * Constant to return from a signal handler for the Gtk.SpinButton ::input signal in case of conversion failure.  
  */
export declare const INPUT_ERROR = -1;
/**
  * Like Gtk.get_interface_age(), but from the headers used at application compile time, rather than from the library linked against at application run time.  
  */
export declare const INTERFACE_AGE = 1;
/**
  * The name used for the stock full offset included by Gtk.LevelBar.  New in version 3.20.   
  */
export declare const LEVEL_BAR_OFFSET_FULL = 'full';
/**
  * The name used for the stock high offset included by Gtk.LevelBar.  New in version 3.6.   
  */
export declare const LEVEL_BAR_OFFSET_HIGH = 'high';
/**
  * The name used for the stock low offset included by Gtk.LevelBar.  New in version 3.6.   
  */
export declare const LEVEL_BAR_OFFSET_LOW = 'low';
/**
  * Like Gtk.get_major_version(), but from the headers used at application compile time, rather than from the library linked against at application run time.  
  */
export declare const MAJOR_VERSION = 3;
/**
  * The maximum length of sequences in compose tables.  
  */
export declare const MAX_COMPOSE_LEN = 7;
/**
  * Like Gtk.get_micro_version(), but from the headers used at application compile time, rather than from the library linked against at application run time.  
  */
export declare const MICRO_VERSION = 5;
/**
  * Like Gtk.get_minor_version(), but from the headers used at application compile time, rather than from the library linked against at application run time.  
  */
export declare const MINOR_VERSION = 24;
/**
  * Name for the A3 paper size.  
  */
export declare const PAPER_NAME_A3 = 'iso_a3';
/**
  * Name for the A4 paper size.  
  */
export declare const PAPER_NAME_A4 = 'iso_a4';
/**
  * Name for the A5 paper size.  
  */
export declare const PAPER_NAME_A5 = 'iso_a5';
/**
  * Name for the B5 paper size.  
  */
export declare const PAPER_NAME_B5 = 'iso_b5';
/**
  * Name for the Executive paper size.  
  */
export declare const PAPER_NAME_EXECUTIVE = 'na_executive';
/**
  * Name for the Legal paper size.  
  */
export declare const PAPER_NAME_LEGAL = 'na_legal';
/**
  * Name for the Letter paper size.  
  */
export declare const PAPER_NAME_LETTER = 'na_letter';
export declare const PATH_PRIO_MASK = 15;
export declare const PRINT_SETTINGS_COLLATE = 'collate';
export declare const PRINT_SETTINGS_DEFAULT_SOURCE = 'default-source';
export declare const PRINT_SETTINGS_DITHER = 'dither';
export declare const PRINT_SETTINGS_DUPLEX = 'duplex';
export declare const PRINT_SETTINGS_FINISHINGS = 'finishings';
export declare const PRINT_SETTINGS_MEDIA_TYPE = 'media-type';
export declare const PRINT_SETTINGS_NUMBER_UP = 'number-up';
export declare const PRINT_SETTINGS_NUMBER_UP_LAYOUT = 'number-up-layout';
export declare const PRINT_SETTINGS_N_COPIES = 'n-copies';
export declare const PRINT_SETTINGS_ORIENTATION = 'orientation';
/**
  * The key used by the “Print to file” printer to store the file name of the output without the path to the directory and the file extension.  New in version 3.6.   
  */
export declare const PRINT_SETTINGS_OUTPUT_BASENAME = 'output-basename';
export declare const PRINT_SETTINGS_OUTPUT_BIN = 'output-bin';
/**
  * The key used by the “Print to file” printer to store the directory to which the output should be written.  New in version 3.6.   
  */
export declare const PRINT_SETTINGS_OUTPUT_DIR = 'output-dir';
/**
  * The key used by the “Print to file” printer to store the format of the output. The supported values are “PS” and “PDF”.  
  */
export declare const PRINT_SETTINGS_OUTPUT_FILE_FORMAT = 'output-file-format';
/**
  * The key used by the “Print to file” printer to store the URI to which the output should be written. GTK+ itself supports only “file://” URIs.  
  */
export declare const PRINT_SETTINGS_OUTPUT_URI = 'output-uri';
export declare const PRINT_SETTINGS_PAGE_RANGES = 'page-ranges';
export declare const PRINT_SETTINGS_PAGE_SET = 'page-set';
export declare const PRINT_SETTINGS_PAPER_FORMAT = 'paper-format';
export declare const PRINT_SETTINGS_PAPER_HEIGHT = 'paper-height';
export declare const PRINT_SETTINGS_PAPER_WIDTH = 'paper-width';
export declare const PRINT_SETTINGS_PRINTER = 'printer';
export declare const PRINT_SETTINGS_PRINTER_LPI = 'printer-lpi';
export declare const PRINT_SETTINGS_PRINT_PAGES = 'print-pages';
export declare const PRINT_SETTINGS_QUALITY = 'quality';
export declare const PRINT_SETTINGS_RESOLUTION = 'resolution';
export declare const PRINT_SETTINGS_RESOLUTION_X = 'resolution-x';
export declare const PRINT_SETTINGS_RESOLUTION_Y = 'resolution-y';
export declare const PRINT_SETTINGS_REVERSE = 'reverse';
export declare const PRINT_SETTINGS_SCALE = 'scale';
export declare const PRINT_SETTINGS_USE_COLOR = 'use-color';
export declare const PRINT_SETTINGS_WIN32_DRIVER_EXTRA = 'win32-driver-extra';
export declare const PRINT_SETTINGS_WIN32_DRIVER_VERSION = 'win32-driver-version';
/**
  * Use this priority for functionality related to size allocation. It is used internally by GTK+ to compute the sizes of widgets. This priority is higher than Gdk.PRIORITY_REDRAW to avoid resizing a widget which was just redrawn.  
  */
export declare const PRIORITY_RESIZE = 110;
/**
  * The “About” item.  New in version 2.6.   Deprecated since version 3.10: Use named icon “help-about” or the label “_About”.   
  */
export declare const STOCK_ABOUT = 'gtk-about';
/**
  * The “Add” item and icon.  Deprecated since version 3.10: Use named icon “list-add” or the label “_Add”.   
  */
export declare const STOCK_ADD = 'gtk-add';
/**
  * The “Apply” item and icon.  Deprecated since version 3.10: Do not use an icon. Use label “_Apply”.   
  */
export declare const STOCK_APPLY = 'gtk-apply';
/**
  * The “Bold” item and icon.  Deprecated since version 3.10: Use named icon “format-text-bold”.   
  */
export declare const STOCK_BOLD = 'gtk-bold';
/**
  * The “Cancel” item and icon.  Deprecated since version 3.10: Do not use an icon. Use label “_Cancel”.   
  */
export declare const STOCK_CANCEL = 'gtk-cancel';
/**
  * The “Caps Lock Warning” icon.  New in version 2.16.   Deprecated since version 3.10: Use named icon “dialog-warning-symbolic”.   
  */
export declare const STOCK_CAPS_LOCK_WARNING = 'gtk-caps-lock-warning';
/**
  * The “CD-Rom” item and icon.  Deprecated since version 3.10: Use named icon “media-optical”.   
  */
export declare const STOCK_CDROM = 'gtk-cdrom';
/**
  * The “Clear” item and icon.  Deprecated since version 3.10: Use named icon “edit-clear”.   
  */
export declare const STOCK_CLEAR = 'gtk-clear';
/**
  * The “Close” item and icon.  Deprecated since version 3.10: Use named icon “window-close” or the label “_Close”.   
  */
export declare const STOCK_CLOSE = 'gtk-close';
/**
  * The “Color Picker” item and icon.  New in version 2.2.   Deprecated since version 3.10.   
  */
export declare const STOCK_COLOR_PICKER = 'gtk-color-picker';
/**
  * The “Connect” icon.  New in version 2.6.   Deprecated since version 3.10.   
  */
export declare const STOCK_CONNECT = 'gtk-connect';
/**
  * The “Convert” item and icon.  Deprecated since version 3.10.   
  */
export declare const STOCK_CONVERT = 'gtk-convert';
/**
  * The “Copy” item and icon.  Deprecated since version 3.10: Use the named icon “edit-copy” or the label “_Copy”.   
  */
export declare const STOCK_COPY = 'gtk-copy';
/**
  * The “Cut” item and icon.  Deprecated since version 3.10: Use the named icon “edit-cut” or the label “Cu_t”.   
  */
export declare const STOCK_CUT = 'gtk-cut';
/**
  * The “Delete” item and icon.  Deprecated since version 3.10: Use the named icon “edit-delete” or the label “_Delete”.   
  */
export declare const STOCK_DELETE = 'gtk-delete';
/**
  * The “Authentication” item and icon.  New in version 2.4.   Deprecated since version 3.10: Use named icon “dialog-password”.   
  */
export declare const STOCK_DIALOG_AUTHENTICATION = 'gtk-dialog-authentication';
/**
  * The “Error” item and icon.  Deprecated since version 3.10: Use named icon “dialog-error”.   
  */
export declare const STOCK_DIALOG_ERROR = 'gtk-dialog-error';
/**
  * The “Information” item and icon.  Deprecated since version 3.10: Use named icon “dialog-information”.   
  */
export declare const STOCK_DIALOG_INFO = 'gtk-dialog-info';
/**
  * The “Question” item and icon.  Deprecated since version 3.10: Use named icon “dialog-question”.   
  */
export declare const STOCK_DIALOG_QUESTION = 'gtk-dialog-question';
/**
  * The “Warning” item and icon.  Deprecated since version 3.10: Use named icon “dialog-warning”.   
  */
export declare const STOCK_DIALOG_WARNING = 'gtk-dialog-warning';
/**
  * The “Directory” icon.  New in version 2.6.   Deprecated since version 3.10: Use named icon “folder”.   
  */
export declare const STOCK_DIRECTORY = 'gtk-directory';
/**
  * The “Discard” item.  New in version 2.12.   Deprecated since version 3.10.   
  */
export declare const STOCK_DISCARD = 'gtk-discard';
/**
  * The “Disconnect” icon.  New in version 2.6.   Deprecated since version 3.10.   
  */
export declare const STOCK_DISCONNECT = 'gtk-disconnect';
/**
  * The “Drag-And-Drop” icon.  Deprecated since version 3.10.   
  */
export declare const STOCK_DND = 'gtk-dnd';
/**
  * The “Drag-And-Drop multiple” icon.  Deprecated since version 3.10.   
  */
export declare const STOCK_DND_MULTIPLE = 'gtk-dnd-multiple';
/**
  * The “Edit” item and icon.  New in version 2.6.   Deprecated since version 3.10.   
  */
export declare const STOCK_EDIT = 'gtk-edit';
/**
  * The “Execute” item and icon.  Deprecated since version 3.10: Use named icon “system-run”.   
  */
export declare const STOCK_EXECUTE = 'gtk-execute';
/**
  * The “File” item and icon. Since 3.0, this item has a label, before it only had an icon.  New in version 2.6.   Deprecated since version 3.10: Use named icon “text-x-generic”.   
  */
export declare const STOCK_FILE = 'gtk-file';
/**
  * The “Find” item and icon.  Deprecated since version 3.10: Use named icon “edit-find”.   
  */
export declare const STOCK_FIND = 'gtk-find';
/**
  * The “Find and Replace” item and icon.  Deprecated since version 3.10: Use named icon “edit-find-replace”.   
  */
export declare const STOCK_FIND_AND_REPLACE = 'gtk-find-and-replace';
/**
  * The “Floppy” item and icon.  Deprecated since version 3.10.   
  */
export declare const STOCK_FLOPPY = 'gtk-floppy';
/**
  * The “Fullscreen” item and icon.  New in version 2.8.   Deprecated since version 3.10: Use named icon “view-fullscreen”.   
  */
export declare const STOCK_FULLSCREEN = 'gtk-fullscreen';
/**
  * The “Bottom” item and icon.  Deprecated since version 3.10: Use named icon “go-bottom”.   
  */
export declare const STOCK_GOTO_BOTTOM = 'gtk-goto-bottom';
/**
  * The “First” item and icon. The icon has an RTL variant.  Deprecated since version 3.10: Use named icon “go-first”.   
  */
export declare const STOCK_GOTO_FIRST = 'gtk-goto-first';
/**
  * The “Last” item and icon. The icon has an RTL variant.  Deprecated since version 3.10: Use named icon “go-last”.   
  */
export declare const STOCK_GOTO_LAST = 'gtk-goto-last';
/**
  * The “Top” item and icon.  Deprecated since version 3.10: Use named icon “go-top”.   
  */
export declare const STOCK_GOTO_TOP = 'gtk-goto-top';
/**
  * The “Back” item and icon. The icon has an RTL variant.  Deprecated since version 3.10: Use named icon “go-previous”.   
  */
export declare const STOCK_GO_BACK = 'gtk-go-back';
/**
  * The “Down” item and icon.  Deprecated since version 3.10: Use named icon “go-down”.   
  */
export declare const STOCK_GO_DOWN = 'gtk-go-down';
/**
  * The “Forward” item and icon. The icon has an RTL variant.  Deprecated since version 3.10: Use named icon “go-next”.   
  */
export declare const STOCK_GO_FORWARD = 'gtk-go-forward';
/**
  * The “Up” item and icon.  Deprecated since version 3.10: Use named icon “go-up”.   
  */
export declare const STOCK_GO_UP = 'gtk-go-up';
/**
  * The “Harddisk” item and icon.  New in version 2.4.   Deprecated since version 3.10: Use named icon “drive-harddisk”.   
  */
export declare const STOCK_HARDDISK = 'gtk-harddisk';
/**
  * The “Help” item and icon.  Deprecated since version 3.10: Use named icon “help-browser”.   
  */
export declare const STOCK_HELP = 'gtk-help';
/**
  * The “Home” item and icon.  Deprecated since version 3.10: Use named icon “go-home”.   
  */
export declare const STOCK_HOME = 'gtk-home';
/**
  * The “Indent” item and icon. The icon has an RTL variant.  New in version 2.4.   Deprecated since version 3.10: Use named icon “format-indent-more”.   
  */
export declare const STOCK_INDENT = 'gtk-indent';
/**
  * The “Index” item and icon.  Deprecated since version 3.10.   
  */
export declare const STOCK_INDEX = 'gtk-index';
/**
  * The “Info” item and icon.  New in version 2.8.   Deprecated since version 3.10: Use named icon “dialog-information”.   
  */
export declare const STOCK_INFO = 'gtk-info';
/**
  * The “Italic” item and icon.  Deprecated since version 3.10: Use named icon “format-text-italic”.   
  */
export declare const STOCK_ITALIC = 'gtk-italic';
/**
  * The “Jump to” item and icon. The icon has an RTL variant.  Deprecated since version 3.10: Use named icon “go-jump”.   
  */
export declare const STOCK_JUMP_TO = 'gtk-jump-to';
/**
  * The “Center” item and icon.  Deprecated since version 3.10: Use named icon “format-justify-center”.   
  */
export declare const STOCK_JUSTIFY_CENTER = 'gtk-justify-center';
/**
  * The “Fill” item and icon.  Deprecated since version 3.10: Use named icon “format-justify-fill”.   
  */
export declare const STOCK_JUSTIFY_FILL = 'gtk-justify-fill';
/**
  * The “Left” item and icon.  Deprecated since version 3.10: Use named icon “format-justify-left”.   
  */
export declare const STOCK_JUSTIFY_LEFT = 'gtk-justify-left';
/**
  * The “Right” item and icon.  Deprecated since version 3.10: Use named icon “format-justify-right”.   
  */
export declare const STOCK_JUSTIFY_RIGHT = 'gtk-justify-right';
/**
  * The “Leave Fullscreen” item and icon.  New in version 2.8.   Deprecated since version 3.10: Use named icon “view-restore”.   
  */
export declare const STOCK_LEAVE_FULLSCREEN = 'gtk-leave-fullscreen';
/**
  * The “Media Forward” item and icon. The icon has an RTL variant.  New in version 2.6.   Deprecated since version 3.10: Use named icon “media-seek-forward” or the label “_Forward”.   
  */
export declare const STOCK_MEDIA_FORWARD = 'gtk-media-forward';
/**
  * The “Media Next” item and icon. The icon has an RTL variant.  New in version 2.6.   Deprecated since version 3.10: Use named icon “media-skip-forward” or the label “_Next”.   
  */
export declare const STOCK_MEDIA_NEXT = 'gtk-media-next';
/**
  * The “Media Pause” item and icon.  New in version 2.6.   Deprecated since version 3.10: Use named icon “media-playback-pause” or the label “P_ause”.   
  */
export declare const STOCK_MEDIA_PAUSE = 'gtk-media-pause';
/**
  * The “Media Play” item and icon. The icon has an RTL variant.  New in version 2.6.   Deprecated since version 3.10: Use named icon “media-playback-start” or the label “_Play”.   
  */
export declare const STOCK_MEDIA_PLAY = 'gtk-media-play';
/**
  * The “Media Previous” item and icon. The icon has an RTL variant.  New in version 2.6.   Deprecated since version 3.10: Use named icon “media-skip-backward” or the label “Pre_vious”.   
  */
export declare const STOCK_MEDIA_PREVIOUS = 'gtk-media-previous';
/**
  * The “Media Record” item and icon.  New in version 2.6.   Deprecated since version 3.10: Use named icon “media-record” or the label “_Record”.   
  */
export declare const STOCK_MEDIA_RECORD = 'gtk-media-record';
/**
  * The “Media Rewind” item and icon. The icon has an RTL variant.  New in version 2.6.   Deprecated since version 3.10: Use named icon “media-seek-backward” or the label “R_ewind”.   
  */
export declare const STOCK_MEDIA_REWIND = 'gtk-media-rewind';
/**
  * The “Media Stop” item and icon.  New in version 2.6.   Deprecated since version 3.10: Use named icon “media-playback-stop” or the label “_Stop”.   
  */
export declare const STOCK_MEDIA_STOP = 'gtk-media-stop';
/**
  * The “Missing image” icon.  Deprecated since version 3.10: Use named icon “image-missing”.   
  */
export declare const STOCK_MISSING_IMAGE = 'gtk-missing-image';
/**
  * The “Network” item and icon.  New in version 2.4.   Deprecated since version 3.10: Use named icon “network-workgroup”.   
  */
export declare const STOCK_NETWORK = 'gtk-network';
/**
  * The “New” item and icon.  Deprecated since version 3.10: Use named icon “document-new” or the label “_New”.   
  */
export declare const STOCK_NEW = 'gtk-new';
/**
  * The “No” item and icon.  Deprecated since version 3.10.   
  */
export declare const STOCK_NO = 'gtk-no';
/**
  * The “OK” item and icon.  Deprecated since version 3.10: Do not use an icon. Use label “_OK”.   
  */
export declare const STOCK_OK = 'gtk-ok';
/**
  * The “Open” item and icon.  Deprecated since version 3.10: Use named icon “document-open” or the label “_Open”.   
  */
export declare const STOCK_OPEN = 'gtk-open';
/**
  * The “Landscape Orientation” item and icon.  New in version 2.10.   Deprecated since version 3.10.   
  */
export declare const STOCK_ORIENTATION_LANDSCAPE = 'gtk-orientation-landscape';
/**
  * The “Portrait Orientation” item and icon.  New in version 2.10.   Deprecated since version 3.10.   
  */
export declare const STOCK_ORIENTATION_PORTRAIT = 'gtk-orientation-portrait';
/**
  * The “Reverse Landscape Orientation” item and icon.  New in version 2.10.   Deprecated since version 3.10.   
  */
export declare const STOCK_ORIENTATION_REVERSE_LANDSCAPE = 'gtk-orientation-reverse-landscape';
/**
  * The “Reverse Portrait Orientation” item and icon.  New in version 2.10.   Deprecated since version 3.10.   
  */
export declare const STOCK_ORIENTATION_REVERSE_PORTRAIT = 'gtk-orientation-reverse-portrait';
/**
  * The “Page Setup” item and icon.  New in version 2.14.   Deprecated since version 3.10: Use named icon “document-page-setup” or the label “Page Set_up”.   
  */
export declare const STOCK_PAGE_SETUP = 'gtk-page-setup';
/**
  * The “Paste” item and icon.  Deprecated since version 3.10: Use named icon “edit-paste” or the label “_Paste”.   
  */
export declare const STOCK_PASTE = 'gtk-paste';
/**
  * The “Preferences” item and icon.  Deprecated since version 3.10: Use named icon “preferences-system” or the label “_Preferences”.   
  */
export declare const STOCK_PREFERENCES = 'gtk-preferences';
/**
  * The “Print” item and icon.  Deprecated since version 3.10: Use named icon “document-print” or the label “_Print”.   
  */
export declare const STOCK_PRINT = 'gtk-print';
/**
  * The “Print Error” icon.  New in version 2.14.   Deprecated since version 3.10: Use named icon “printer-error”.   
  */
export declare const STOCK_PRINT_ERROR = 'gtk-print-error';
/**
  * The “Print Paused” icon.  New in version 2.14.   Deprecated since version 3.10.   
  */
export declare const STOCK_PRINT_PAUSED = 'gtk-print-paused';
/**
  * The “Print Preview” item and icon.  Deprecated since version 3.10: Use label “Pre_view”.   
  */
export declare const STOCK_PRINT_PREVIEW = 'gtk-print-preview';
/**
  * The “Print Report” icon.  New in version 2.14.   Deprecated since version 3.10.   
  */
export declare const STOCK_PRINT_REPORT = 'gtk-print-report';
/**
  * The “Print Warning” icon.  New in version 2.14.   Deprecated since version 3.10.   
  */
export declare const STOCK_PRINT_WARNING = 'gtk-print-warning';
/**
  * The “Properties” item and icon.  Deprecated since version 3.10: Use named icon “document-properties” or the label “_Properties”.   
  */
export declare const STOCK_PROPERTIES = 'gtk-properties';
/**
  * The “Quit” item and icon.  Deprecated since version 3.10: Use named icon “application-exit” or the label “_Quit”.   
  */
export declare const STOCK_QUIT = 'gtk-quit';
/**
  * The “Redo” item and icon. The icon has an RTL variant.  Deprecated since version 3.10: Use named icon “edit-redo” or the label “_Redo”.   
  */
export declare const STOCK_REDO = 'gtk-redo';
/**
  * The “Refresh” item and icon.  Deprecated since version 3.10: Use named icon “view-refresh” or the label “_Refresh”.   
  */
export declare const STOCK_REFRESH = 'gtk-refresh';
/**
  * The “Remove” item and icon.  Deprecated since version 3.10: Use named icon “list-remove” or the label “_Remove”.   
  */
export declare const STOCK_REMOVE = 'gtk-remove';
/**
  * The “Revert” item and icon. The icon has an RTL variant.  Deprecated since version 3.10: Use named icon “document-revert” or the label “_Revert”.   
  */
export declare const STOCK_REVERT_TO_SAVED = 'gtk-revert-to-saved';
/**
  * The “Save” item and icon.  Deprecated since version 3.10: Use named icon “document-save” or the label “_Save”.   
  */
export declare const STOCK_SAVE = 'gtk-save';
/**
  * The “Save As” item and icon.  Deprecated since version 3.10: Use named icon “document-save-as” or the label “Save _As”.   
  */
export declare const STOCK_SAVE_AS = 'gtk-save-as';
/**
  * The “Select All” item and icon.  New in version 2.10.   Deprecated since version 3.10: Use named icon “edit-select-all” or the label “Select _All”.   
  */
export declare const STOCK_SELECT_ALL = 'gtk-select-all';
/**
  * The “Color” item and icon.  Deprecated since version 3.10.   
  */
export declare const STOCK_SELECT_COLOR = 'gtk-select-color';
/**
  * The “Font” item and icon.  Deprecated since version 3.10.   
  */
export declare const STOCK_SELECT_FONT = 'gtk-select-font';
/**
  * The “Ascending” item and icon.  Deprecated since version 3.10: Use named icon “view-sort-ascending”.   
  */
export declare const STOCK_SORT_ASCENDING = 'gtk-sort-ascending';
/**
  * The “Descending” item and icon.  Deprecated since version 3.10: Use named icon “view-sort-descending”.   
  */
export declare const STOCK_SORT_DESCENDING = 'gtk-sort-descending';
/**
  * The “Spell Check” item and icon.  Deprecated since version 3.10: Use named icon “tools-check-spelling”.   
  */
export declare const STOCK_SPELL_CHECK = 'gtk-spell-check';
/**
  * The “Stop” item and icon.  Deprecated since version 3.10: Use named icon “process-stop” or the label “_Stop”.   
  */
export declare const STOCK_STOP = 'gtk-stop';
/**
  * The “Strikethrough” item and icon.  Deprecated since version 3.10: Use named icon “format-text-strikethrough” or the label “_Strikethrough”.   
  */
export declare const STOCK_STRIKETHROUGH = 'gtk-strikethrough';
/**
  * The “Undelete” item and icon. The icon has an RTL variant.  Deprecated since version 3.10.   
  */
export declare const STOCK_UNDELETE = 'gtk-undelete';
/**
  * The “Underline” item and icon.  Deprecated since version 3.10: Use named icon “format-text-underline” or the label “_Underline”.   
  */
export declare const STOCK_UNDERLINE = 'gtk-underline';
/**
  * The “Undo” item and icon. The icon has an RTL variant.  Deprecated since version 3.10: Use named icon “edit-undo” or the label “_Undo”.   
  */
export declare const STOCK_UNDO = 'gtk-undo';
/**
  * The “Unindent” item and icon. The icon has an RTL variant.  New in version 2.4.   Deprecated since version 3.10: Use named icon “format-indent-less”.   
  */
export declare const STOCK_UNINDENT = 'gtk-unindent';
/**
  * The “Yes” item and icon.  Deprecated since version 3.10.   
  */
export declare const STOCK_YES = 'gtk-yes';
/**
  * The “Zoom 100%” item and icon.  Deprecated since version 3.10: Use named icon “zoom-original” or the label “_Normal Size”.   
  */
export declare const STOCK_ZOOM_100 = 'gtk-zoom-100';
/**
  * The “Zoom to Fit” item and icon.  Deprecated since version 3.10: Use named icon “zoom-fit-best” or the label “Best _Fit”.   
  */
export declare const STOCK_ZOOM_FIT = 'gtk-zoom-fit';
/**
  * The “Zoom In” item and icon.  Deprecated since version 3.10: Use named icon “zoom-in” or the label “Zoom _In”.   
  */
export declare const STOCK_ZOOM_IN = 'gtk-zoom-in';
/**
  * The “Zoom Out” item and icon.  Deprecated since version 3.10: Use named icon “zoom-out” or the label “Zoom _Out”.   
  */
export declare const STOCK_ZOOM_OUT = 'gtk-zoom-out';
/**
  * A CSS class to match an accelerator. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_ACCELERATOR = 'accelerator';
/**
  * A CSS class used when rendering an arrow element. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_ARROW = 'arrow';
/**
  * A CSS class to match the window background. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_BACKGROUND = 'background';
/**
  * A CSS class to indicate an area at the bottom of a widget. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_BOTTOM = 'bottom';
/**
  * A CSS class to match buttons. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_BUTTON = 'button';
/**
  * A CSS class to match calendars. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_CALENDAR = 'calendar';
/**
  * A CSS class to match content rendered in cell views. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_CELL = 'cell';
/**
  * A CSS class to match check boxes. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_CHECK = 'check';
/**
  * A CSS class to match combobox entries. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_COMBOBOX_ENTRY = 'combobox-entry';
/**
  * A CSS class to match context menus. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_CONTEXT_MENU = 'context-menu';
/**
  * A CSS class that gets added to windows which have client-side decorations. Refer to individual widget documentation for used style classes.  New in version 3.14.   
  */
export declare const STYLE_CLASS_CSD = 'csd';
/**
  * A CSS class used when rendering a drag handle for text selection. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_CURSOR_HANDLE = 'cursor-handle';
/**
  * A CSS class to match the default widget. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_DEFAULT = 'default';
/**
  * A CSS class used when an action (usually a button) is one that is expected to remove or destroy something visible to the user. Refer to individual widget documentation for used style classes.  New in version 3.12.   
  */
export declare const STYLE_CLASS_DESTRUCTIVE_ACTION = 'destructive-action';
/**
  * A CSS class to match dimmed labels. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_DIM_LABEL = 'dim-label';
/**
  * A CSS class for a drag-and-drop indicator. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_DND = 'dnd';
/**
  * A CSS class defining a dock area. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_DOCK = 'dock';
/**
  * A CSS class to match text entries. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_ENTRY = 'entry';
/**
  * A CSS class for an area displaying an error message, such as those in infobars. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_ERROR = 'error';
/**
  * A CSS class defining an expander, such as those in treeviews. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_EXPANDER = 'expander';
/**
  * A CSS class that is added when widgets that usually have a frame or border (like buttons or entries) should appear without it. Refer to individual widget documentation for used style classes.  New in version 3.14.   
  */
export declare const STYLE_CLASS_FLAT = 'flat';
/**
  * A CSS class defining a frame delimiting content, such as Gtk.Frame or the scrolled window frame around the scrollable area. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_FRAME = 'frame';
/**
  * A CSS class defining a resize grip. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_GRIP = 'grip';
/**
  * A CSS class to match a header element. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_HEADER = 'header';
/**
  * A CSS class defining a highlighted area, such as headings in assistants and calendars. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_HIGHLIGHT = 'highlight';
/**
  * A CSS class for horizontally layered widgets. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_HORIZONTAL = 'horizontal';
/**
  * A CSS class defining an image, such as the icon in an entry. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_IMAGE = 'image';
/**
  * A CSS class for an area displaying an informational message, such as those in infobars. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_INFO = 'info';
/**
  * A CSS class to match inline toolbars. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_INLINE_TOOLBAR = 'inline-toolbar';
/**
  * A CSS class used when rendering a drag handle for the insertion cursor position. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_INSERTION_CURSOR = 'insertion-cursor';
/**
  * A CSS class to match labels. Refer to individual widget documentation for used style classes.  New in version 3.16.   
  */
export declare const STYLE_CLASS_LABEL = 'label';
/**
  * A CSS class to indicate an area at the left of a widget. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_LEFT = 'left';
/**
  * A CSS class used when rendering a level indicator, such as a battery charge level, or a password strength. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_LEVEL_BAR = 'level-bar';
/**
  * A CSS class to match a linked area, such as a box containing buttons belonging to the same control. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_LINKED = 'linked';
/**
  * A CSS class to match lists. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_LIST = 'list';
/**
  * A CSS class to match list rows. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_LIST_ROW = 'list-row';
/**
  * A CSS class defining marks in a widget, such as in scales. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_MARK = 'mark';
/**
  * A CSS class to match menus. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_MENU = 'menu';
/**
  * A CSS class to menubars. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_MENUBAR = 'menubar';
/**
  * A CSS class to match menu items. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_MENUITEM = 'menuitem';
/**
  * A CSS class that is added to message dialogs. Refer to individual widget documentation for used style classes.  New in version 3.14.   
  */
export declare const STYLE_CLASS_MESSAGE_DIALOG = 'message-dialog';
/**
  * A CSS class that is added to text view that should use a monospace font. Refer to individual widget documentation for used style classes.  New in version 3.16.   
  */
export declare const STYLE_CLASS_MONOSPACE = 'monospace';
/**
  * A CSS class used when an element needs the user attention, for instance a button in a stack switcher corresponding to a hidden page that changed state. Refer to individual widget documentation for used style classes.  New in version 3.12.   
  */
export declare const STYLE_CLASS_NEEDS_ATTENTION = 'needs-attention';
/**
  * A CSS class defining a notebook. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_NOTEBOOK = 'notebook';
/**
  * A CSS class used when rendering an OSD (On xlib.Screen xlib.Display) element, on top of another container. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_OSD = 'osd';
/**
  * A CSS class that is added on the visual hints that happen when scrolling is attempted past the limits of a scrollable area. Refer to individual widget documentation for used style classes.  New in version 3.14.   
  */
export declare const STYLE_CLASS_OVERSHOOT = 'overshoot';
/**
  * A CSS class for a pane separator, such as those in Gtk.Paned. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_PANE_SEPARATOR = 'pane-separator';
/**
  * A CSS class that is added to areas that should look like paper. This is used in print previews and themes are encouraged to style it as black text on white background. Refer to individual widget documentation for used style classes.  New in version 3.16.   
  */
export declare const STYLE_CLASS_PAPER = 'paper';
/**
  * A CSS class that matches popovers. Refer to individual widget documentation for used style classes.  New in version 3.14.   
  */
export declare const STYLE_CLASS_POPOVER = 'popover';
/**
  * A CSS class that is added to the toplevel windows used for menus. Refer to individual widget documentation for used style classes.  New in version 3.14.   
  */
export declare const STYLE_CLASS_POPUP = 'popup';
/**
  * A CSS class to match primary toolbars. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_PRIMARY_TOOLBAR = 'primary-toolbar';
/**
  * A CSS class to use when rendering activity as a progressbar. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_PROGRESSBAR = 'progressbar';
/**
  * A CSS class to use when rendering a pulse in an indeterminate progress bar. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_PULSE = 'pulse';
/**
  * A CSS class for an area displaying a question to the user, such as those in infobars. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_QUESTION = 'question';
/**
  * A CSS class to match radio buttons. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_RADIO = 'radio';
/**
  * A CSS class to match a raised control, such as a raised button on a toolbar. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_RAISED = 'raised';
/**
  * A CSS class used to indicate a read-only state. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_READ_ONLY = 'read-only';
/**
  * A CSS class to indicate an area at the right of a widget. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_RIGHT = 'right';
/**
  * A CSS class to match the rubberband selection rectangle. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_RUBBERBAND = 'rubberband';
/**
  * A CSS class to match scale widgets. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_SCALE = 'scale';
/**
  * A CSS class to match scale widgets with marks attached, all the marks are above for horizontal Gtk.Scale. left for vertical Gtk.Scale. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_SCALE_HAS_MARKS_ABOVE = 'scale-has-marks-above';
/**
  * A CSS class to match scale widgets with marks attached, all the marks are below for horizontal Gtk.Scale, right for vertical Gtk.Scale. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_SCALE_HAS_MARKS_BELOW = 'scale-has-marks-below';
/**
  * A CSS class to match scrollbars. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_SCROLLBAR = 'scrollbar';
/**
  * A CSS class to match the junction area between an horizontal and vertical scrollbar, when they’re both shown. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_SCROLLBARS_JUNCTION = 'scrollbars-junction';
/**
  * A CSS class for a separator. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_SEPARATOR = 'separator';
/**
  * A CSS class defining a sidebar, such as the left side in a file chooser. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_SIDEBAR = 'sidebar';
/**
  * A CSS class to match sliders. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_SLIDER = 'slider';
/**
  * A CSS class defining an spinbutton. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_SPINBUTTON = 'spinbutton';
/**
  * A CSS class to use when rendering activity as a “spinner”. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_SPINNER = 'spinner';
/**
  * A CSS class to match statusbars. Refer to individual widget documentation for used style classes.  New in version 3.16.   
  */
export declare const STYLE_CLASS_STATUSBAR = 'statusbar';
/**
  * A CSS class used for the subtitle label in a titlebar in a toplevel window. Refer to individual widget documentation for used style classes.  New in version 3.14.   
  */
export declare const STYLE_CLASS_SUBTITLE = 'subtitle';
/**
  * A CSS class used when an action (usually a button) is the primary suggested action in a specific context. Refer to individual widget documentation for used style classes.  New in version 3.12.   
  */
export declare const STYLE_CLASS_SUGGESTED_ACTION = 'suggested-action';
/**
  * A CSS class used for the title label in a titlebar in a toplevel window. Refer to individual widget documentation for used style classes.  New in version 3.14.   
  */
export declare const STYLE_CLASS_TITLE = 'title';
/**
  * A CSS class used when rendering a titlebar in a toplevel window. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_TITLEBAR = 'titlebar';
/**
  * A CSS class to match toolbars. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_TOOLBAR = 'toolbar';
/**
  * A CSS class to match tooltip windows. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_TOOLTIP = 'tooltip';
/**
  * A CSS class to indicate an area at the top of a widget. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_TOP = 'top';
/**
  * A CSS class for touch selection popups on entries and text views. Refer to individual widget documentation for used style classes.  New in version 3.16.   
  */
export declare const STYLE_CLASS_TOUCH_SELECTION = 'touch-selection';
/**
  * A CSS class to match troughs, as in scrollbars and progressbars. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_TROUGH = 'trough';
/**
  * A CSS class that is added on the visual hints that happen where content is ‘scrolled off’ and can be made visible by scrolling. Refer to individual widget documentation for used style classes.  New in version 3.16.   
  */
export declare const STYLE_CLASS_UNDERSHOOT = 'undershoot';
/**
  * A CSS class for vertically layered widgets. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_VERTICAL = 'vertical';
/**
  * A CSS class defining a view, such as iconviews or treeviews. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_VIEW = 'view';
/**
  * A CSS class for an area displaying a warning message, such as those in infobars. Refer to individual widget documentation for used style classes.  
  */
export declare const STYLE_CLASS_WARNING = 'warning';
/**
  * A CSS class to indicate that a UI element should be ‘wide’. Used by Gtk.Paned. Refer to individual widget documentation for used style classes.  New in version 3.16.   
  */
export declare const STYLE_CLASS_WIDE = 'wide';
/**
  * A property holding the background color of rendered elements as a Gdk.RGBA.  
  */
export declare const STYLE_PROPERTY_BACKGROUND_COLOR = 'background-color';
/**
  * A property holding the element’s background as a cairo.Pattern.  
  */
export declare const STYLE_PROPERTY_BACKGROUND_IMAGE = 'background-image';
/**
  * A property holding the element’s border color as a Gdk.RGBA.  
  */
export declare const STYLE_PROPERTY_BORDER_COLOR = 'border-color';
/**
  * A property holding the rendered element’s border radius in pixels as a int.  
  */
export declare const STYLE_PROPERTY_BORDER_RADIUS = 'border-radius';
/**
  * A property holding the element’s border style as a Gtk.BorderStyle.  
  */
export declare const STYLE_PROPERTY_BORDER_STYLE = 'border-style';
/**
  * A property holding the rendered element’s border width in pixels as a Gtk.Border. The border is the intermediary spacing property of the padding/border/margin series. Gtk.render_frame() uses this property to find out the frame line width, so Gtk.Widgets rendering frames may need to add up this padding when requesting size  
  */
export declare const STYLE_PROPERTY_BORDER_WIDTH = 'border-width';
/**
  * A property holding the foreground color of rendered elements as a Gdk.RGBA.  
  */
export declare const STYLE_PROPERTY_COLOR = 'color';
/**
  * A property holding the font properties used when rendering text as a Pango.FontDescription.  
  */
export declare const STYLE_PROPERTY_FONT = 'font';
/**
  * A property holding the rendered element’s margin as a Gtk.Border. The margin is defined as the spacing between the border of the element and its surrounding elements. It is external to Gtk.Widget’s size allocations, and the most external spacing property of the padding/border/margin series.  
  */
export declare const STYLE_PROPERTY_MARGIN = 'margin';
/**
  * A property holding the rendered element’s padding as a Gtk.Border. The padding is defined as the spacing between the inner part of the element border and its child. It’s the innermost spacing property of the padding/border/margin series.  
  */
export declare const STYLE_PROPERTY_PADDING = 'padding';
/**
  * A priority that can be used when adding a Gtk.StyleProvider for application-specific style information.  
  */
export declare const STYLE_PROVIDER_PRIORITY_APPLICATION = 600;
/**
  * The priority used for default style information that is used in the absence of themes. Note that this is not very useful for providing default styling for custom style classes - themes are likely to override styling provided at this priority with catch-all * {...} rules.  
  */
export declare const STYLE_PROVIDER_PRIORITY_FALLBACK = 1;
/**
  * The priority used for style information provided via Gtk.Settings. This priority is higher than Gtk.STYLE_PROVIDER_PRIORITY_THEME to let settings override themes.  
  */
export declare const STYLE_PROVIDER_PRIORITY_SETTINGS = 400;
/**
  * The priority used for style information provided by themes.  
  */
export declare const STYLE_PROVIDER_PRIORITY_THEME = 200;
/**
  * The priority used for the style information from XDG_CONFIG_HOME/gtk-3.0/gtk.css. You should not use priorities higher than this, to give the user the last word.  
  */
export declare const STYLE_PROVIDER_PRIORITY_USER = 800;
/**
  * A widget region name to define a treeview column.  Deprecated since version 3.20: Don’t use regions.   
  */
export declare const STYLE_REGION_COLUMN = 'column';
/**
  * A widget region name to define a treeview column header.  Deprecated since version 3.20: Don’t use regions.   
  */
export declare const STYLE_REGION_COLUMN_HEADER = 'column-header';
/**
  * A widget region name to define a treeview row.  Deprecated since version 3.20: Don’t use regions.   
  */
export declare const STYLE_REGION_ROW = 'row';
/**
  * A widget region name to define a notebook tab.  Deprecated since version 3.20: Don’t use regions.   
  */
export declare const STYLE_REGION_TAB = 'tab';
/**
  * The priority at which the text view validates onscreen lines in an idle job in the background.  
  */
export declare const TEXT_VIEW_PRIORITY_VALIDATE = 125;
/**
  * The Gtk.TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID can be used to make a Gtk.TreeSortable use the default sort function. See also Gtk.TreeSortable.set_sort_column_id()  
  */
export declare const TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID = -1;
/**
  * The Gtk.TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID can be used to make a Gtk.TreeSortable use no sorting. See also Gtk.TreeSortable.set_sort_column_id()  
  */
export declare const TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID = -2;
