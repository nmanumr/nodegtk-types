/**
  * Accelerator flags used with Gtk.AccelGroup.connect(). 
  */
export declare enum AccelFlags {
  /** Accelerator is visible */
  VISIBLE = 1,
  /** Accelerator not removable */
  LOCKED = 2,
  /** Mask */
  MASK = 7,
}
/**
  * Types of user actions that may be blocked by Gtk.Application.inhibit().
  *  New in version 3.4.  
  */
export declare enum ApplicationInhibitFlags {
  /** Inhibit ending the user session by logging out or by shutting down the computer */
  LOGOUT = 1,
  /** Inhibit user switching */
  SWITCH = 2,
  /** Inhibit suspending the session or computer */
  SUSPEND = 4,
  /** Inhibit the session being marked as idle (and possibly locked) */
  IDLE = 8,
}
/**
  * Denotes the expansion properties that a widget will have when it (or its parent) is resized. 
  */
export declare enum AttachOptions {
  /** the widget should expand to take up any extra space in its container that has been allocated. */
  EXPAND = 1,
  /** the widget should shrink as and when possible. */
  SHRINK = 2,
  /** the widget should fill the space allocated to it. */
  FILL = 4,
}
/**
  * These options can be used to influence the display and behaviour of a Gtk.Calendar. 
  */
export declare enum CalendarDisplayOptions {
  /** Specifies that the month and year should be displayed. */
  SHOW_HEADING = 1,
  /** Specifies that three letter day descriptions should be present. */
  SHOW_DAY_NAMES = 2,
  /** Just show an indicator, not the full details text when details are provided. See Gtk.Calendar.set_detail_func(). */
  SHOW_DETAILS = 32,
  /** Prevents the user from switching months with the calendar. */
  NO_MONTH_CHANGE = 4,
  /** Displays each week numbers of the current year, down the left side of the calendar. */
  SHOW_WEEK_NUMBERS = 8,
}
/**
  * Tells how a cell is to be rendered. 
  */
export declare enum CellRendererState {
  /** The cell is currently selected, and probably has a selection colored background to render to. */
  SELECTED = 1,
  /** The cell is in the focus row. */
  FOCUSED = 16,
  /** The mouse is hovering over the cell. */
  PRELIT = 2,
  /** The cell is in a row that can be expanded.
    *  New in version 3.4.  */
  EXPANDABLE = 32,
  /** The cell is drawn in an insensitive manner */
  INSENSITIVE = 4,
  /** The cell is in a row that is expanded.
    *  New in version 3.4.  */
  EXPANDED = 64,
  /** The cell is in a sorted row */
  SORTED = 8,
}
export declare enum DebugFlag {
  MISC = 1,
  PRINTING = 1024,
  RESIZE = 1048576,
  MODULES = 128,
  INTERACTIVE = 131072,
  UPDATES = 16,
  BASELINES = 16384,
  PLUGSOCKET = 2,
  BUILDER = 2048,
  LAYOUT = 2097152,
  GEOMETRY = 256,
  TOUCHSCREEN = 262144,
  KEYBINDINGS = 32,
  PIXEL_CACHE = 32768,
  TEXT = 4,
  SIZE_REQUEST = 4096,
  ICONTHEME = 512,
  ACTIONS = 524288,
  MULTIHEAD = 64,
  NO_PIXEL_CACHE = 65536,
  TREE = 8,
  NO_CSS_CACHE = 8192,
}
/**
  * The Gtk.DestDefaults enumeration specifies the various types of action that will be taken on behalf of the user for a drag destination site. 
  */
export declare enum DestDefaults {
  /** If set for a widget, GTK+, during a drag over this widget will check if the drag matches this widget’s list of possible targets and actions. GTK+ will then call Gdk.drag_status() as appropriate. */
  MOTION = 1,
  /** If set for a widget, GTK+ will draw a highlight on this widget as long as a drag is over this widget and the widget drag format and action are acceptable. */
  HIGHLIGHT = 2,
  /** If set for a widget, when a drop occurs, GTK+ will will check if the drag matches this widget’s list of possible targets and actions. If so, GTK+ will call Gtk.Widget.drag_get_data() on behalf of the widget. Whether or not the drop is successful, GTK+ will call Gtk.drag_finish(). If the action was a move, then if the drag was successful, then True will be passed for the delete parameter to Gtk.drag_finish(). */
  DROP = 4,
  /** If set, specifies that all default actions should be taken. */
  ALL = 7,
}
/**
  * Flags used to influence dialog construction. 
  */
export declare enum DialogFlags {
  /** Make the constructed dialog modal, see Gtk.Window.set_modal() */
  MODAL = 1,
  /** Destroy the dialog when its parent is destroyed, see Gtk.Window.set_destroy_with_parent() */
  DESTROY_WITH_PARENT = 2,
  /** Create dialog with actions in header bar instead of action area.
    *  New in version 3.12.  */
  USE_HEADER_BAR = 4,
}
/**
  * Describes the behavior of a Gtk.EventControllerScroll.
  *  New in version 3.24.  
  */
export declare enum EventControllerScrollFlags {
  /** Don’t emit scroll. */
  NONE = 0,
  /** Emit scroll with vertical deltas. */
  VERTICAL = 1,
  /** Emit scroll with horizontal deltas. */
  HORIZONTAL = 2,
  /** Emit scroll on both axes. */
  BOTH_AXES = 3,
  /** Only emit deltas that are multiples of 1. */
  DISCRETE = 4,
  /** Emit Gtk.EventControllerScroll ::decelerate after continuous scroll finishes. */
  KINETIC = 8,
}
/**
  * These flags indicate what parts of a Gtk.FileFilterInfo struct are filled or need to be filled. 
  */
export declare enum FileFilterFlags {
  /** the filename of the file being tested */
  FILENAME = 1,
  /** the URI for the file being tested */
  URI = 2,
  /** the string that will be used to display the file in the file chooser */
  DISPLAY_NAME = 4,
  /** the mime type of the file */
  MIME_TYPE = 8,
}
/**
  * This enumeration specifies the granularity of font selection that is desired in a font chooser. 
  */
export declare enum FontChooserLevel {
  /** Allow selecting a font family */
  FAMILY = 0,
  /** Allow selecting a specific font face */
  STYLE = 1,
  /** Allow selecting a specific font size */
  SIZE = 2,
  VARIATIONS = 4,
  /** Allow selecting specific OpenType font features */
  FEATURES = 8,
}
/**
  * Used to specify options for Gtk.IconTheme.lookup_icon() 
  */
export declare enum IconLookupFlags {
  /** Never get SVG icons, even if gdk-pixbuf supports them. Cannot be used together with Gtk.IconLookupFlags.FORCE_SVG. */
  NO_SVG = 1,
  /** Try to load a variant of the icon for left-to-right text direction.
    *  New in version 3.14.  */
  DIR_LTR = 128,
  /** Always get the icon scaled to the requested size.
    *  New in version 2.14.  */
  FORCE_SIZE = 16,
  /** Get SVG icons, even if gdk-pixbuf doesn’t support them. Cannot be used together with Gtk.IconLookupFlags.NO_SVG. */
  FORCE_SVG = 2,
  /** Try to load a variant of the icon for right-to-left text direction.
    *  New in version 3.14.  */
  DIR_RTL = 256,
  /** Try to always load regular icons, even when symbolic icon names are given.
    *  New in version 3.14.  */
  FORCE_REGULAR = 32,
  /** When passed to Gtk.IconTheme.lookup_icon() includes builtin icons as well as files. For a builtin icon, Gtk.IconInfo.get_filename() is None and you need to call Gtk.IconInfo.get_builtin_pixbuf(). */
  USE_BUILTIN = 4,
  /** Try to always load symbolic icons, even when regular icon names are given.
    *  New in version 3.14.  */
  FORCE_SYMBOLIC = 64,
  /** Try to shorten icon name at ‘-‘ characters before looking at inherited themes. This flag is only supported in functions that take a single icon name. For more general fallback, see Gtk.IconTheme.choose_icon().
    *  New in version 2.12.  */
  GENERIC_FALLBACK = 8,
}
/**
  * Describes hints that might be taken into account by input methods or applications. Note that input methods may already tailor their behaviour according to the Gtk.InputPurpose of the entry.
  *  New in version 3.6.  
  */
export declare enum InputHints {
  /** No special behaviour suggested */
  NONE = 0,
  /** Suggest checking for typos */
  SPELLCHECK = 1,
  /** Suggest not offering Emoji support.
    *  New in version 3.22.20.  */
  NO_EMOJI = 1024,
  /** Suggest to not show an onscreen keyboard (e.g for a calculator that already has all the keys). */
  INHIBIT_OSK = 128,
  /** Suggest to capitalize all text */
  UPPERCASE_CHARS = 16,
  /** Suggest not checking for typos */
  NO_SPELLCHECK = 2,
  /** The text is vertical.
    *  New in version 3.18.  */
  VERTICAL_WRITING = 256,
  /** Suggest to capitalize the first character of each word */
  UPPERCASE_WORDS = 32,
  /** Suggest word completion */
  WORD_COMPLETION = 4,
  /** Suggest offering Emoji support.
    *  New in version 3.22.20.  */
  EMOJI = 512,
  /** Suggest to capitalize the first word of each sentence */
  UPPERCASE_SENTENCES = 64,
  /** Suggest to convert all text to lowercase */
  LOWERCASE = 8,
}
/**
  * Describes how a rendered element connects to adjacent elements. 
  */
export declare enum JunctionSides {
  /** No junctions. */
  NONE = 0,
  /** Element connects on the top-left corner. */
  CORNER_TOPLEFT = 1,
  /** Element connects on the right side. */
  RIGHT = 10,
  /** Element connects on the bottom side. */
  BOTTOM = 12,
  /** Element connects on the top-right corner. */
  CORNER_TOPRIGHT = 2,
  /** Element connects on the top side. */
  TOP = 3,
  /** Element connects on the bottom-left corner. */
  CORNER_BOTTOMLEFT = 4,
  /** Element connects on the left side. */
  LEFT = 5,
  /** Element connects on the bottom-right corner. */
  CORNER_BOTTOMRIGHT = 8,
}
/**
  * These flags serve two purposes.  First, the application can call Gtk.PlacesSidebar.set_open_flags() using these flags as a bitmask.  This tells the sidebar that the application is able to open folders selected from the sidebar in various ways, for example, in new tabs or in new windows in addition to the normal mode. 
  */
export declare enum PlacesOpenFlags {
  /** This is the default mode that Gtk.PlacesSidebar uses if no other flags are specified.  It indicates that the calling application should open the selected location in the normal way, for example, in the folder view beside the sidebar. */
  NORMAL = 1,
  /** When passed to Gtk.PlacesSidebar.set_open_flags(), this indicates that the application can open folders selected from the sidebar in new tabs.  This value will be passed to the Gtk.PlacesSidebar ::open-location signal when the user selects that a location be opened in a new tab instead of in the standard fashion. */
  NEW_TAB = 2,
  /** Similar to Gtk.PlacesOpenFlags.NEW_TAB, but indicates that the application can open folders in new windows. */
  NEW_WINDOW = 4,
}
/**
  * Deprecated 
  */
export declare enum RcFlags {
  /** Deprecated */
  FG = 1,
  /** Deprecated */
  BG = 2,
  /** Deprecated */
  TEXT = 4,
  /** Deprecated */
  BASE = 8,
}
/**
  * These flags indicate what parts of a Gtk.RecentFilterInfo struct are filled or need to be filled. 
  */
export declare enum RecentFilterFlags {
  /** the URI of the file being tested */
  URI = 1,
  /** the groups to which the file belongs to */
  GROUP = 16,
  /** the string that will be used to display the file in the recent chooser */
  DISPLAY_NAME = 2,
  /** the number of days elapsed since the file has been registered */
  AGE = 32,
  /** the mime type of the file */
  MIME_TYPE = 4,
  /** the list of applications that have registered the file */
  APPLICATION = 8,
}
/**
  * Describes a region within a widget. 
  */
export declare enum RegionFlags {
  /** Region has an even number within a set. */
  EVEN = 1,
  /** Region is the only one within a set. */
  ONLY = 16,
  /** Region has an odd number within a set. */
  ODD = 2,
  /** Region is part of a sorted area. */
  SORTED = 32,
  /** Region is the first one within a set. */
  FIRST = 4,
  /** Region is the last one within a set. */
  LAST = 8,
}
/**
  * Describes a widget state. Widget states are used to match the widget against CSS pseudo-classes. Note that GTK extends the regular CSS classes and sometimes uses different names. 
  */
export declare enum StateFlags {
  /** State during normal operation. */
  NORMAL = 0,
  /** Widget is active. */
  ACTIVE = 1,
  /** The location the widget points to has already been visited.
    *  New in version 3.12.  */
  VISITED = 1024,
  /** Widget is in left-to-right text direction.
    *  New in version 3.8.  */
  DIR_LTR = 128,
  /** Widget is inconsistent. */
  INCONSISTENT = 16,
  /** Widget has a mouse pointer over it. */
  PRELIGHT = 2,
  /** Widget is checked.
    *  New in version 3.14.  */
  CHECKED = 2048,
  /** Widget is in right-to-left text direction.
    *  New in version 3.8.  */
  DIR_RTL = 256,
  /** Widget has the keyboard focus. */
  FOCUSED = 32,
  /** Widget is selected. */
  SELECTED = 4,
  /** Widget is highlighted as a drop target for DND.
    *  New in version 3.20.  */
  DROP_ACTIVE = 4096,
  /** Widget is a link.
    *  New in version 3.12.  */
  LINK = 512,
  /** Widget is in a background toplevel window. */
  BACKDROP = 64,
  /** Widget is insensitive. */
  INSENSITIVE = 8,
}
/**
  * Flags that modify the behavior of Gtk.StyleContext.to_string(). New values may be added to this enumeration. 
  */
export declare enum StyleContextPrintFlags {
  NONE = 0,
  /** Print the entire tree of CSS nodes starting at the style context’s node */
  RECURSE = 1,
  /** Show the values of the CSS properties for each node */
  SHOW_STYLE = 2,
}
/**
  * The Gtk.TargetFlags enumeration is used to specify constraints on a Gtk.TargetEntry. 
  */
export declare enum TargetFlags {
  /** If this is set, the target will only be selected for drags within a single application. */
  SAME_APP = 1,
  /** If this is set, the target will only be selected for drags within a single widget. */
  SAME_WIDGET = 2,
  /** If this is set, the target will not be selected for drags within a single application. */
  OTHER_APP = 4,
  /** If this is set, the target will not be selected for drags withing a single widget. */
  OTHER_WIDGET = 8,
}
/**
  * Flags affecting how a search is done. 
  */
export declare enum TextSearchFlags {
  /** Search only visible data. A search match may have invisible text interspersed. */
  VISIBLE_ONLY = 1,
  /** Search only text. A match may have pixbufs or child widgets mixed inside the matched range. */
  TEXT_ONLY = 2,
  /** The text will be matched regardless of what case it is in. */
  CASE_INSENSITIVE = 4,
}
/**
  * Flags used to specify the supported drag targets. 
  */
export declare enum ToolPaletteDragTargets {
  /** Support drag of items. */
  ITEMS = 1,
  /** Support drag of groups. */
  GROUPS = 2,
}
/**
  * These flags indicate various properties of a Gtk.TreeModel. 
  */
export declare enum TreeModelFlags {
  /** iterators survive all signals emitted by the tree */
  ITERS_PERSIST = 1,
  /** the model is a list only, and never has children */
  LIST_ONLY = 2,
}
/**
  * These enumeration values are used by Gtk.UIManager.add_ui() to determine what UI element to create.
  *  Deprecated since version 3.10.  
  */
export declare enum UIManagerItemType {
  /** Pick the type of the UI element according to context. */
  AUTO = 0,
  /** Create a menubar. */
  MENUBAR = 1,
  /** Create a separator. */
  SEPARATOR = 128,
  /** Create a popup menu. */
  POPUP = 16,
  /** Create a menu. */
  MENU = 2,
  /** Install an accelerator. */
  ACCELERATOR = 256,
  /** Create a menuitem. */
  MENUITEM = 32,
  /** Create a toolbar. */
  TOOLBAR = 4,
  /** Same as Gtk.UIManagerItemType.POPUP, but the actions’ accelerators are shown. */
  POPUP_WITH_ACCELS = 512,
  /** Create a toolitem. */
  TOOLITEM = 64,
  /** Insert a placeholder. */
  PLACEHOLDER = 8,
}
/**
  * Controls how a widget deals with extra space in a single (x or y) dimension. 
  */
export declare enum Align {
  /** stretch to fill all space if possible, center if no meaningful way to stretch */
  FILL = 0,
  /** snap to left or top side, leaving space on right or bottom */
  START = 1,
  /** snap to right or bottom side, leaving space on left or top */
  END = 2,
  /** center natural width of widget inside the allocation */
  CENTER = 3,
  /** align the widget according to the baseline.
    *  New in version 3.10.  */
  BASELINE = 4,
}
/**
  * Used to specify the placement of scroll arrows in scrolling menus. 
  */
export declare enum ArrowPlacement {
  /** Place one arrow on each end of the menu. */
  BOTH = 0,
  /** Place both arrows at the top of the menu. */
  START = 1,
  /** Place both arrows at the bottom of the menu. */
  END = 2,
}
/**
  * Used to indicate the direction in which an arrow should point. 
  */
export declare enum ArrowType {
  /** Represents an upward pointing arrow. */
  UP = 0,
  /** Represents a downward pointing arrow. */
  DOWN = 1,
  /** Represents a left pointing arrow. */
  LEFT = 2,
  /** Represents a right pointing arrow. */
  RIGHT = 3,
  /** No arrow.
    *  New in version 2.10.  */
  NONE = 4,
}
/**
  * An enum for determining the page role inside the Gtk.Assistant. It’s used to handle buttons sensitivity and visibility. 
  */
export declare enum AssistantPageType {
  /** The page has regular contents. Both the Back and forward buttons will be shown. */
  CONTENT = 0,
  /** The page contains an introduction to the assistant task. Only the Forward button will be shown if there is a next page. */
  INTRO = 1,
  /** The page lets the user confirm or deny the changes. The Back and Apply buttons will be shown. */
  CONFIRM = 2,
  /** The page informs the user of the changes done. Only the Close button will be shown. */
  SUMMARY = 3,
  /** Used for tasks that take a long time to complete, blocks the assistant until the page is marked as complete. Only the back button will be shown. */
  PROGRESS = 4,
  /** Used for when other page types are not appropriate. No buttons will be shown, and the application must add its own buttons through Gtk.Assistant.add_action_widget(). */
  CUSTOM = 5,
}
/**
  * Whenever a container has some form of natural row it may align children in that row along a common typographical baseline. If the amount of verical space in the row is taller than the total requested height of the baseline-aligned children then it can use a Gtk.BaselinePosition to select where to put the baseline inside the extra availible space.
  *  New in version 3.10.  
  */
export declare enum BaselinePosition {
  /** Align the baseline at the top */
  TOP = 0,
  /** Center the baseline */
  CENTER = 1,
  /** Align the baseline at the bottom */
  BOTTOM = 2,
}
/**
  * Describes how the border of a UI element should be rendered. 
  */
export declare enum BorderStyle {
  /** No visible border */
  NONE = 0,
  /** A single line segment */
  SOLID = 1,
  /** Looks as if the content is sunken into the canvas */
  INSET = 2,
  /** Looks as if the content is coming out of the canvas */
  OUTSET = 3,
  /** Same as Gtk.BorderStyle.NONE */
  HIDDEN = 4,
  /** A series of round dots */
  DOTTED = 5,
  /** A series of square-ended dashes */
  DASHED = 6,
  /** Two parallel lines with some space between them */
  DOUBLE = 7,
  /** Looks as if it were carved in the canvas */
  GROOVE = 8,
  /** Looks as if it were coming out of the canvas */
  RIDGE = 9,
}
/**
  * Error codes that identify various errors that can occur while using Gtk.Builder. 
  */
export declare enum BuilderError {
  /** A type-func attribute didn’t name a function that returns a GObject.GType. */
  INVALID_TYPE_FUNCTION = 0,
  /** The input contained a tag that Gtk.Builder can’t handle. */
  UNHANDLED_TAG = 1,
  /** The wrong type was specified in a composite class’s template XML */
  TEMPLATE_MISMATCH = 10,
  /** The specified property is unknown for the object class. */
  INVALID_PROPERTY = 11,
  /** The specified signal is unknown for the object class. */
  INVALID_SIGNAL = 12,
  /** An object id is unknown */
  INVALID_ID = 13,
  /** An attribute that is required by Gtk.Builder was missing. */
  MISSING_ATTRIBUTE = 2,
  /** Gtk.Builder found an attribute that it doesn’t understand. */
  INVALID_ATTRIBUTE = 3,
  /** Gtk.Builder found a tag that it doesn’t understand. */
  INVALID_TAG = 4,
  /** A required property value was missing. */
  MISSING_PROPERTY_VALUE = 5,
  /** Gtk.Builder couldn’t parse some attribute value. */
  INVALID_VALUE = 6,
  /** The input file requires a newer version of GTK+. */
  VERSION_MISMATCH = 7,
  /** An object id occurred twice. */
  DUPLICATE_ID = 8,
  /** A specified object type is of the same type or derived from the type of the composite class being extended with builder XML. */
  OBJECT_TYPE_REFUSED = 9,
}
/**
  * Used to dictate the style that a Gtk.ButtonBox uses to layout the buttons it contains. 
  */
export declare enum ButtonBoxStyle {
  /** Buttons are evenly spread across the box. */
  SPREAD = 1,
  /** Buttons are placed at the edges of the box. */
  EDGE = 2,
  /** Buttons are grouped towards the start of the box, (on the left for a HBox, or the top for a VBox). */
  START = 3,
  /** Buttons are grouped towards the end of the box, (on the right for a HBox, or the bottom for a VBox). */
  END = 4,
  /** Buttons are centered in the box.
    *  New in version 2.12.  */
  CENTER = 5,
  /** Buttons expand to fill the box. This entails giving buttons a “linked” appearance, making button sizes homogeneous, and setting spacing to 0 (same as calling Gtk.Box.set_homogeneous() and Gtk.Box.set_spacing() manually).
    *  New in version 3.12.  */
  EXPAND = 6,
}
/**
  * The role specifies the desired appearance of a Gtk.ModelButton. 
  */
export declare enum ButtonRole {
  /** A plain button */
  NORMAL = 0,
  /** A check button */
  CHECK = 1,
  /** A radio button */
  RADIO = 2,
}
/**
  * Prebuilt sets of buttons for the dialog. If none of these choices are appropriate, simply use Gtk.ButtonsType.NONE then call Gtk.Dialog.add_buttons(). 
  */
export declare enum ButtonsType {
  /** no buttons at all */
  NONE = 0,
  /** an OK button */
  OK = 1,
  /** a Close button */
  CLOSE = 2,
  /** a Cancel button */
  CANCEL = 3,
  /** Yes and No buttons */
  YES_NO = 4,
  /** OK and Cancel buttons */
  OK_CANCEL = 5,
}
/**
  * Determines if the edited accelerators are GTK+ accelerators. If they are, consumed modifiers are suppressed, only accelerators accepted by GTK+ are allowed, and the accelerators are rendered in the same way as they are in menus. 
  */
export declare enum CellRendererAccelMode {
  /** GTK+ accelerators mode */
  GTK = 0,
  /** Other accelerator mode */
  OTHER = 1,
}
/**
  * Identifies how the user can interact with a particular cell. 
  */
export declare enum CellRendererMode {
  /** The cell is just for display and cannot be interacted with.  Note that this doesn’t mean that eg. the row being drawn can’t be selected – just that a particular element of it cannot be individually modified. */
  INERT = 0,
  /** The cell can be clicked. */
  ACTIVATABLE = 1,
  /** The cell can be edited or otherwise modified. */
  EDITABLE = 2,
}
/**
  * Specifies which corner a child widget should be placed in when packed into a Gtk.ScrolledWindow. This is effectively the opposite of where the scroll bars are placed. 
  */
export declare enum CornerType {
  /** Place the scrollbars on the right and bottom of the widget (default behaviour). */
  TOP_LEFT = 0,
  /** Place the scrollbars on the top and right of the widget. */
  BOTTOM_LEFT = 1,
  /** Place the scrollbars on the left and bottom of the widget. */
  TOP_RIGHT = 2,
  /** Place the scrollbars on the top and left of the widget. */
  BOTTOM_RIGHT = 3,
}
/**
  * Error codes for %GTK_CSS_PROVIDER_ERROR. 
  */
export declare enum CssProviderError {
  /** Failed. */
  FAILED = 0,
  /** Syntax error. */
  SYNTAX = 1,
  /** Import error. */
  IMPORT = 2,
  /** Name error. */
  NAME = 3,
  /** Deprecation error. */
  DEPRECATED = 4,
  /** Unknown value. */
  UNKNOWN_VALUE = 5,
}
/**
  * The different types of sections indicate parts of a CSS document as parsed by GTK’s CSS parser. They are oriented towards the CSS Grammar, but may contain extensions.
  *  New in version 3.2.  
  */
export declare enum CssSectionType {
  /** The section describes a complete document. This section time is the only one where Gtk.CssSection.get_parent() might return None. */
  DOCUMENT = 0,
  /** The section defines an import rule. */
  IMPORT = 1,
  /** The section defines a color. This is a GTK extension to CSS. */
  COLOR_DEFINITION = 2,
  /** The section defines a binding set. This is a GTK extension to CSS. */
  BINDING_SET = 3,
  /** The section defines a CSS ruleset. */
  RULESET = 4,
  /** The section defines a CSS selector. */
  SELECTOR = 5,
  /** The section defines the declaration of a CSS variable. */
  DECLARATION = 6,
  /** The section defines the value of a CSS declaration. */
  VALUE = 7,
  /** 
    *  New in version 3.6.  */
  KEYFRAMES = 8,
}
/**
  * See also: Gtk.Entry ::delete-from-cursor. 
  */
export declare enum DeleteType {
  /** Delete characters. */
  CHARS = 0,
  /** Delete only the portion of the word to the left/right of cursor if we’re in the middle of a word. */
  WORD_ENDS = 1,
  /** Delete words. */
  WORDS = 2,
  /** Delete display-lines. xlib.Display-lines refers to the visible lines, with respect to to the current line breaks. As opposed to paragraphs, which are defined by line breaks in the input. */
  DISPLAY_LINES = 3,
  /** Delete only the portion of the display-line to the left/right of cursor. */
  DISPLAY_LINE_ENDS = 4,
  /** Delete to the end of the paragraph. Like C-k in Emacs (or its reverse). */
  PARAGRAPH_ENDS = 5,
  /** Delete entire line. Like C-k in pico. */
  PARAGRAPHS = 6,
  /** Delete only whitespace. Like M-\ in Emacs. */
  WHITESPACE = 7,
}
/**
  * Focus movement types. 
  */
export declare enum DirectionType {
  /** Move forward. */
  TAB_FORWARD = 0,
  /** Move backward. */
  TAB_BACKWARD = 1,
  /** Move up. */
  UP = 2,
  /** Move down. */
  DOWN = 3,
  /** Move left. */
  LEFT = 4,
  /** Move right. */
  RIGHT = 5,
}
/**
  * Gives an indication why a drag operation failed. The value can by obtained by connecting to the Gtk.Widget ::drag-failed signal. 
  */
export declare enum DragResult {
  /** The drag operation was successful. */
  SUCCESS = 0,
  /** No suitable drag target. */
  NO_TARGET = 1,
  /** The user cancelled the drag operation. */
  USER_CANCELLED = 2,
  /** The drag operation timed out. */
  TIMEOUT_EXPIRED = 3,
  /** The pointer or keyboard grab used for the drag operation was broken. */
  GRAB_BROKEN = 4,
  /** The drag operation failed due to some unspecified error. */
  ERROR = 5,
}
/**
  * Specifies the side of the entry at which an icon is placed.
  *  New in version 2.16.  
  */
export declare enum EntryIconPosition {
  /** At the beginning of the entry (depending on the text direction). */
  PRIMARY = 0,
  /** At the end of the entry (depending on the text direction). */
  SECONDARY = 1,
}
/**
  * Describes the state of a Gdk.EventSequence in a Gtk.Gesture.
  *  New in version 3.14.  
  */
export declare enum EventSequenceState {
  /** The sequence is handled, but not grabbed. */
  NONE = 0,
  /** The sequence is handled and grabbed. */
  CLAIMED = 1,
  /** The sequence is denied. */
  DENIED = 2,
}
/**
  * Used to specify the style of the expanders drawn by a Gtk.TreeView. 
  */
export declare enum ExpanderStyle {
  /** The style used for a collapsed subtree. */
  COLLAPSED = 0,
  /** Intermediate style used during animation. */
  SEMI_COLLAPSED = 1,
  /** Intermediate style used during animation. */
  SEMI_EXPANDED = 2,
  /** The style used for an expanded subtree. */
  EXPANDED = 3,
}
/**
  * Describes whether a Gtk.FileChooser is being used to open existing files or to save to a possibly new file. 
  */
export declare enum FileChooserAction {
  /** Indicates open mode.  The file chooser will only let the user pick an existing file. */
  OPEN = 0,
  /** Indicates save mode.  The file chooser will let the user pick an existing file, or type in a new filename. */
  SAVE = 1,
  /** Indicates an Open mode for selecting folders.  The file chooser will let the user pick an existing folder. */
  SELECT_FOLDER = 2,
  /** Indicates a mode for creating a new folder.  The file chooser will let the user name an existing or new folder. */
  CREATE_FOLDER = 3,
}
/**
  * Used as a return value of handlers for the Gtk.FileChooser ::confirm-overwrite signal of a Gtk.FileChooser. This value determines whether the file chooser will present the stock confirmation dialog, accept the user’s choice of a filename, or let the user choose another filename.
  *  New in version 2.8.  
  */
export declare enum FileChooserConfirmation {
  /** The file chooser will present its stock dialog to confirm about overwriting an existing file. */
  CONFIRM = 0,
  /** The file chooser will terminate and accept the user’s choice of a file name. */
  ACCEPT_FILENAME = 1,
  /** The file chooser will continue running, so as to let the user select another file name. */
  SELECT_AGAIN = 2,
}
/**
  * These identify the various errors that can occur while calling Gtk.FileChooser functions. 
  */
export declare enum FileChooserError {
  /** Indicates that a file does not exist. */
  NONEXISTENT = 0,
  /** Indicates a malformed filename. */
  BAD_FILENAME = 1,
  /** Indicates a duplicate path (e.g. when adding a bookmark). */
  ALREADY_EXISTS = 2,
  /** Indicates an incomplete hostname (e.g. “http://foo” without a slash after that). */
  INCOMPLETE_HOSTNAME = 3,
}
/**
  * Style for input method preedit. See also Gtk.Settings :gtk-im-preedit-style
  *  Deprecated since version 3.10.  
  */
export declare enum IMPreeditStyle {
  /** Deprecated */
  NOTHING = 0,
  /** Deprecated */
  CALLBACK = 1,
  /** Deprecated */
  NONE = 2,
}
/**
  * Style for input method status. See also Gtk.Settings :gtk-im-status-style
  *  Deprecated since version 3.10.  
  */
export declare enum IMStatusStyle {
  /** Deprecated */
  NOTHING = 0,
  /** Deprecated */
  CALLBACK = 1,
  /** Deprecated */
  NONE = 2,
}
/**
  * Built-in stock icon sizes. 
  */
export declare enum IconSize {
  /** Invalid size. */
  INVALID = 0,
  /** Size appropriate for menus (16px). */
  MENU = 1,
  /** Size appropriate for small toolbars (16px). */
  SMALL_TOOLBAR = 2,
  /** Size appropriate for large toolbars (24px) */
  LARGE_TOOLBAR = 3,
  /** Size appropriate for buttons (16px) */
  BUTTON = 4,
  /** Size appropriate for drag and drop (32px) */
  DND = 5,
  /** Size appropriate for dialogs (48px) */
  DIALOG = 6,
}
/**
  * Error codes for Gtk.IconTheme operations. 
  */
export declare enum IconThemeError {
  /** The icon specified does not exist in the theme */
  NOT_FOUND = 0,
  /** An unspecified error occurred. */
  FAILED = 1,
}
/**
  * An enum for determining where a dropped item goes. 
  */
export declare enum IconViewDropPosition {
  /** no drop possible */
  NO_DROP = 0,
  /** dropped item replaces the item */
  DROP_INTO = 1,
  /** droppped item is inserted to the left */
  DROP_LEFT = 2,
  /** dropped item is inserted to the right */
  DROP_RIGHT = 3,
  /** dropped item is inserted above */
  DROP_ABOVE = 4,
  /** dropped item is inserted below */
  DROP_BELOW = 5,
}
/**
  * Describes the image data representation used by a Gtk.Image. If you want to get the image from the widget, you can only get the currently-stored representation. e.g.  if the Gtk.Image.get_storage_type() returns Gtk.ImageType.PIXBUF, then you can call Gtk.Image.get_pixbuf() but not Gtk.Image.get_stock().  For empty images, you can request any storage type (call any of the “get” functions), but they will all return None values. 
  */
export declare enum ImageType {
  /** there is no image displayed by the widget */
  EMPTY = 0,
  /** the widget contains a GdkPixbuf.Pixbuf */
  PIXBUF = 1,
  /** the widget contains a ‘stock item name [gtkstock]’ */
  STOCK = 2,
  /** the widget contains a Gtk.IconSet */
  ICON_SET = 3,
  /** the widget contains a GdkPixbuf.PixbufAnimation */
  ANIMATION = 4,
  /** the widget contains a named icon. This image type was added in GTK+ 2.6 */
  ICON_NAME = 5,
  /** the widget contains a Gio.Icon. This image type was added in GTK+ 2.14 */
  GICON = 6,
  /** the widget contains a cairo.Surface. This image type was added in GTK+ 3.10 */
  SURFACE = 7,
}
/**
  * Describes primary purpose of the input widget. This information is useful for on-screen keyboards and similar input methods to decide which keys should be presented to the user.
  *  New in version 3.6.  
  */
export declare enum InputPurpose {
  /** Allow any character */
  FREE_FORM = 0,
  /** Allow only alphabetic characters */
  ALPHA = 1,
  /** Allow only digits */
  DIGITS = 2,
  /** Edited field expects numbers */
  NUMBER = 3,
  /** Edited field expects phone number */
  PHONE = 4,
  /** Edited field expects URL */
  URL = 5,
  /** Edited field expects email address */
  EMAIL = 6,
  /** Edited field expects the name of a person */
  NAME = 7,
  /** Like Gtk.InputPurpose.FREE_FORM, but characters are hidden */
  PASSWORD = 8,
  /** Like Gtk.InputPurpose.DIGITS, but characters are hidden */
  PIN = 9,
}
/**
  * Used for justifying the text inside a Gtk.Label widget. (See also Gtk.Alignment). 
  */
export declare enum Justification {
  /** The text is placed at the left edge of the label. */
  LEFT = 0,
  /** The text is placed at the right edge of the label. */
  RIGHT = 1,
  /** The text is placed in the center of the label. */
  CENTER = 2,
  /** The text is placed is distributed across the label. */
  FILL = 3,
}
/**
  * Describes how Gtk.LevelBar contents should be rendered. Note that this enumeration could be extended with additional modes in the future.
  *  New in version 3.6.  
  */
export declare enum LevelBarMode {
  /** the bar has a continuous mode */
  CONTINUOUS = 0,
  /** the bar has a discrete mode */
  DISCRETE = 1,
}
/**
  * The type of license for an application.
  *  New in version 3.0.  
  */
export declare enum License {
  /** No license specified */
  UNKNOWN = 0,
  /** A license text is going to be specified by the developer */
  CUSTOM = 1,
  /** The GNU General Public License, version 3.0 only.
    *  New in version 3.12.  */
  GPL_3_0_ONLY = 10,
  /** The GNU Lesser General Public License, version 2.1 only.
    *  New in version 3.12.  */
  LGPL_2_1_ONLY = 11,
  /** The GNU Lesser General Public License, version 3.0 only.
    *  New in version 3.12.  */
  LGPL_3_0_ONLY = 12,
  /** The GNU Affero General Public License, version 3.0 or later.
    *  New in version 3.22.  */
  AGPL_3_0 = 13,
  /** The GNU Affero General Public License, version 3.0 only.
    *  New in version 3.22.27.  */
  AGPL_3_0_ONLY = 14,
  /** The GNU General Public License, version 2.0 or later */
  GPL_2_0 = 2,
  /** The GNU General Public License, version 3.0 or later */
  GPL_3_0 = 3,
  /** The GNU Lesser General Public License, version 2.1 or later */
  LGPL_2_1 = 4,
  /** The GNU Lesser General Public License, version 3.0 or later */
  LGPL_3_0 = 5,
  /** The BSD standard license */
  BSD = 6,
  /** The MIT/X11 standard license */
  MIT_X11 = 7,
  /** The Artistic License, version 2.0 */
  ARTISTIC = 8,
  /** The GNU General Public License, version 2.0 only.
    *  New in version 3.12.  */
  GPL_2_0_ONLY = 9,
}
/**
  * An enumeration representing directional movements within a menu. 
  */
export declare enum MenuDirectionType {
  /** To the parent menu shell */
  PARENT = 0,
  /** To the submenu, if any, associated with the item */
  CHILD = 1,
  /** To the next menu item */
  NEXT = 2,
  /** To the previous menu item */
  PREV = 3,
}
/**
  * The type of message being displayed in the dialog. 
  */
export declare enum MessageType {
  /** Informational message */
  INFO = 0,
  /** Non-fatal warning message */
  WARNING = 1,
  /** Question requiring a choice */
  QUESTION = 2,
  /** Fatal error message */
  ERROR = 3,
  /** None of the above */
  OTHER = 4,
}
export declare enum MovementStep {
  /** Move forward or back by graphemes */
  LOGICAL_POSITIONS = 0,
  /** Move left or right by graphemes */
  VISUAL_POSITIONS = 1,
  /** Move forward or back by words */
  WORDS = 2,
  /** Move up or down lines (wrapped lines) */
  DISPLAY_LINES = 3,
  /** Move to either end of a line */
  DISPLAY_LINE_ENDS = 4,
  /** Move up or down paragraphs (newline-ended lines) */
  PARAGRAPHS = 5,
  /** Move to either end of a paragraph */
  PARAGRAPH_ENDS = 6,
  /** Move by pages */
  PAGES = 7,
  /** Move to ends of the buffer */
  BUFFER_ENDS = 8,
  /** Move horizontally by pages */
  HORIZONTAL_PAGES = 9,
}
export declare enum NotebookTab {
  FIRST = 0,
  LAST = 1,
}
/**
  * Used to determine the layout of pages on a sheet when printing multiple pages per sheet. 
  */
export declare enum NumberUpLayout {
  LRTB = 0,
  LRBT = 1,
  RLTB = 2,
  RLBT = 3,
  TBLR = 4,
  TBRL = 5,
  BTLR = 6,
  BTRL = 7,
}
/**
  * Represents the orientation of widgets and other objects which can be switched between horizontal and vertical orientation on the fly, like Gtk.Toolbar or Gtk.GesturePan. 
  */
export declare enum Orientation {
  /** The element is in horizontal orientation. */
  HORIZONTAL = 0,
  /** The element is in vertical orientation. */
  VERTICAL = 1,
}
/**
  * Determines how widgets should be packed inside menubars and menuitems contained in menubars. 
  */
export declare enum PackDirection {
  /** Widgets are packed left-to-right */
  LTR = 0,
  /** Widgets are packed right-to-left */
  RTL = 1,
  /** Widgets are packed top-to-bottom */
  TTB = 2,
  /** Widgets are packed bottom-to-top */
  BTT = 3,
}
/**
  * Represents the packing location Gtk.Box children. (See: Gtk.VBox, Gtk.HBox, and Gtk.ButtonBox). 
  */
export declare enum PackType {
  /** The child is packed into the start of the box */
  START = 0,
  /** The child is packed into the end of the box */
  END = 1,
}
/**
  * The type of a pad action. 
  */
export declare enum PadActionType {
  /** Action is triggered by a pad button */
  BUTTON = 0,
  /** Action is triggered by a pad ring */
  RING = 1,
  /** Action is triggered by a pad strip */
  STRIP = 2,
}
/**
  * See also Gtk.PrintSettings.set_orientation(). 
  */
export declare enum PageOrientation {
  /** Portrait mode. */
  PORTRAIT = 0,
  /** Landscape mode. */
  LANDSCAPE = 1,
  /** Reverse portrait mode. */
  REVERSE_PORTRAIT = 2,
  /** Reverse landscape mode. */
  REVERSE_LANDSCAPE = 3,
}
/**
  * See also gtk_print_job_set_page_set(). 
  */
export declare enum PageSet {
  /** All pages. */
  ALL = 0,
  /** Even pages. */
  EVEN = 1,
  /** Odd pages. */
  ODD = 2,
}
/**
  * Describes the panning direction of a Gtk.GesturePan
  *  New in version 3.14.  
  */
export declare enum PanDirection {
  /** panned towards the left */
  LEFT = 0,
  /** panned towards the right */
  RIGHT = 1,
  /** panned upwards */
  UP = 2,
  /** panned downwards */
  DOWN = 3,
}
/**
  * Priorities for path lookups. See also Gtk.BindingSet.add_path().
  *  Deprecated since version 3.0.  
  */
export declare enum PathPriorityType {
  /** Deprecated */
  LOWEST = 0,
  /** Deprecated */
  THEME = 10,
  /** Deprecated */
  RC = 12,
  /** Deprecated */
  HIGHEST = 15,
  /** Deprecated */
  GTK = 4,
  /** Deprecated */
  APPLICATION = 8,
}
/**
  * Widget path types. See also Gtk.BindingSet.add_path().
  *  Deprecated since version 3.0.  
  */
export declare enum PathType {
  /** Deprecated */
  WIDGET = 0,
  /** Deprecated */
  WIDGET_CLASS = 1,
  /** Deprecated */
  CLASS = 2,
}
/**
  * Determines how the size should be computed to achieve the one of the visibility mode for the scrollbars. 
  */
export declare enum PolicyType {
  /** The scrollbar is always visible. The view size is independent of the content. */
  ALWAYS = 0,
  /** The scrollbar will appear and disappear as necessary. For example, when all of a Gtk.TreeView can not be seen. */
  AUTOMATIC = 1,
  /** The scrollbar should never appear. In this mode the content determines the size. */
  NEVER = 2,
  /** Don’t show a scrollbar, but don’t force the size to follow the content. This can be used e.g. to make multiple scrolled windows share a scrollbar.
    *  New in version 3.16.  */
  EXTERNAL = 3,
}
/**
  * Describes constraints to positioning of popovers. More values may be added to this enumeration in the future.
  *  New in version 3.20.  
  */
export declare enum PopoverConstraint {
  /** Don’t constrain the popover position beyond what is imposed by the implementation */
  NONE = 0,
  /** Constrain the popover to the boundaries of the window that it is attached to */
  WINDOW = 1,
}
/**
  * Describes which edge of a widget a certain feature is positioned at, e.g. the tabs of a Gtk.Notebook, the handle of a Gtk.HandleBox or the label of a Gtk.Scale. 
  */
export declare enum PositionType {
  /** The feature is at the left edge. */
  LEFT = 0,
  /** The feature is at the right edge. */
  RIGHT = 1,
  /** The feature is at the top edge. */
  TOP = 2,
  /** The feature is at the bottom edge. */
  BOTTOM = 3,
}
/**
  * See also Gtk.PrintSettings.set_duplex(). 
  */
export declare enum PrintDuplex {
  /** No duplex. */
  SIMPLEX = 0,
  /** Horizontal duplex. */
  HORIZONTAL = 1,
  /** Vertical duplex. */
  VERTICAL = 2,
}
/**
  * Error codes that identify various errors that can occur while using the GTK+ printing support. 
  */
export declare enum PrintError {
  /** An unspecified error occurred. */
  GENERAL = 0,
  /** An internal error occurred. */
  INTERNAL_ERROR = 1,
  /** A memory allocation failed. */
  NOMEM = 2,
  /** An error occurred while loading a page setup or paper size from a key file. */
  INVALID_FILE = 3,
}
/**
  * The action parameter to Gtk.PrintOperation.run() determines what action the print operation should perform. 
  */
export declare enum PrintOperationAction {
  /** Show the print dialog. */
  PRINT_DIALOG = 0,
  /** Start to print without showing the print dialog, based on the current print settings. */
  PRINT = 1,
  /** Show the print preview. */
  PREVIEW = 2,
  /** Export to a file. This requires the export-filename property to be set. */
  EXPORT = 3,
}
/**
  * A value of this type is returned by Gtk.PrintOperation.run(). 
  */
export declare enum PrintOperationResult {
  /** An error has occurred. */
  ERROR = 0,
  /** The print settings should be stored. */
  APPLY = 1,
  /** The print operation has been canceled, the print settings should not be stored. */
  CANCEL = 2,
  /** The print operation is not complete yet. This value will only be returned when running asynchronously. */
  IN_PROGRESS = 3,
}
/**
  * See also gtk_print_job_set_pages() 
  */
export declare enum PrintPages {
  /** All pages. */
  ALL = 0,
  /** Current page. */
  CURRENT = 1,
  /** Range of pages. */
  RANGES = 2,
  /** Selected pages. */
  SELECTION = 3,
}
/**
  * See also Gtk.PrintSettings.set_quality(). 
  */
export declare enum PrintQuality {
  /** Low quality. */
  LOW = 0,
  /** Normal quality. */
  NORMAL = 1,
  /** High quality. */
  HIGH = 2,
  /** Draft quality. */
  DRAFT = 3,
}
/**
  * The status gives a rough indication of the completion of a running print operation. 
  */
export declare enum PrintStatus {
  /** The printing has not started yet; this status is set initially, and while the print dialog is shown. */
  INITIAL = 0,
  /** This status is set while the begin-print signal is emitted and during pagination. */
  PREPARING = 1,
  /** This status is set while the pages are being rendered. */
  GENERATING_DATA = 2,
  /** The print job is being sent off to the printer. */
  SENDING_DATA = 3,
  /** The print job has been sent to the printer, but is not printed for some reason, e.g. the printer may be stopped. */
  PENDING = 4,
  /** Some problem has occurred during printing, e.g. a paper jam. */
  PENDING_ISSUE = 5,
  /** The printer is processing the print job. */
  PRINTING = 6,
  /** The printing has been completed successfully. */
  FINISHED = 7,
  /** The printing has been aborted. */
  FINISHED_ABORTED = 8,
}
/**
  * Describes the stage at which events are fed into a Gtk.EventController.
  *  New in version 3.14.  
  */
export declare enum PropagationPhase {
  /** Events are not delivered automatically. Those can be manually fed through Gtk.EventController.handle_event(). This should only be used when full control about when, or whether the controller handles the event is needed. */
  NONE = 0,
  /** Events are delivered in the capture phase. The capture phase happens before the bubble phase, runs from the toplevel down to the event widget. This option should only be used on containers that might possibly handle events before their children do. */
  CAPTURE = 1,
  /** Events are delivered in the bubble phase. The bubble phase happens after the capture phase, and before the default handlers are run. This phase runs from the event widget, up to the toplevel. */
  BUBBLE = 2,
  /** Events are delivered in the default widget event handlers, note that widget implementations must chain up on button, motion, touch and grab broken handlers for controllers in this phase to be run. */
  TARGET = 3,
}
/**
  * The Gtk.RcTokenType enumeration represents the tokens in the RC file. It is exposed so that theme engines can reuse these tokens when parsing the theme-engine specific portions of a RC file.
  *  Deprecated since version 3.0: Use Gtk.CssProvider instead.  
  */
export declare enum RcTokenType {
  /** Deprecated */
  INVALID = 270,
  /** Deprecated */
  INCLUDE = 271,
  /** Deprecated */
  NORMAL = 272,
  /** Deprecated */
  ACTIVE = 273,
  /** Deprecated */
  PRELIGHT = 274,
  /** Deprecated */
  SELECTED = 275,
  /** Deprecated */
  INSENSITIVE = 276,
  /** Deprecated */
  FG = 277,
  /** Deprecated */
  BG = 278,
  /** Deprecated */
  TEXT = 279,
  /** Deprecated */
  BASE = 280,
  /** Deprecated */
  XTHICKNESS = 281,
  /** Deprecated */
  YTHICKNESS = 282,
  /** Deprecated */
  FONT = 283,
  /** Deprecated */
  FONTSET = 284,
  /** Deprecated */
  FONT_NAME = 285,
  /** Deprecated */
  BG_PIXMAP = 286,
  /** Deprecated */
  PIXMAP_PATH = 287,
  /** Deprecated */
  STYLE = 288,
  /** Deprecated */
  BINDING = 289,
  /** Deprecated */
  BIND = 290,
  /** Deprecated */
  WIDGET = 291,
  /** Deprecated */
  WIDGET_CLASS = 292,
  /** Deprecated */
  CLASS = 293,
  /** Deprecated */
  LOWEST = 294,
  /** Deprecated */
  GTK = 295,
  /** Deprecated */
  APPLICATION = 296,
  /** Deprecated */
  THEME = 297,
  /** Deprecated */
  RC = 298,
  /** Deprecated */
  HIGHEST = 299,
  /** Deprecated */
  ENGINE = 300,
  /** Deprecated */
  MODULE_PATH = 301,
  /** Deprecated */
  IM_MODULE_PATH = 302,
  /** Deprecated */
  IM_MODULE_FILE = 303,
  /** Deprecated */
  STOCK = 304,
  /** Deprecated */
  LTR = 305,
  /** Deprecated */
  RTL = 306,
  /** Deprecated */
  COLOR = 307,
  /** Deprecated */
  UNBIND = 308,
  /** Deprecated */
  LAST = 309,
}
/**
  * These identify the various errors that can occur while calling Gtk.RecentChooser functions.
  *  New in version 2.10.  
  */
export declare enum RecentChooserError {
  /** Indicates that a file does not exist */
  NOT_FOUND = 0,
  /** Indicates a malformed URI */
  INVALID_URI = 1,
}
/**
  * Error codes for Gtk.RecentManager operations
  *  New in version 2.10.  
  */
export declare enum RecentManagerError {
  /** the URI specified does not exists in the recently used resources list. */
  NOT_FOUND = 0,
  /** the URI specified is not valid. */
  INVALID_URI = 1,
  /** the supplied string is not UTF-8 encoded. */
  INVALID_ENCODING = 2,
  /** no application has registered the specified item. */
  NOT_REGISTERED = 3,
  /** failure while reading the recently used resources file. */
  READ = 4,
  /** failure while writing the recently used resources file. */
  WRITE = 5,
  /** unspecified error. */
  UNKNOWN = 6,
}
/**
  * Used to specify the sorting method to be applyed to the recently used resource list.
  *  New in version 2.10.  
  */
export declare enum RecentSortType {
  /** Do not sort the returned list of recently used resources. */
  NONE = 0,
  /** Sort the returned list with the most recently used items first. */
  MRU = 1,
  /** Sort the returned list with the least recently used items first. */
  LRU = 2,
  /** Sort the returned list using a custom sorting function passed using Gtk.RecentChooser.set_sort_func(). */
  CUSTOM = 3,
}
/**
  * Indicated the relief to be drawn around a Gtk.Button. 
  */
export declare enum ReliefStyle {
  /** Draw a normal relief. */
  NORMAL = 0,
  /** A half relief. Deprecated in 3.14, does the same as Gtk.ReliefStyle.NORMAL */
  HALF = 1,
  /** No relief. */
  NONE = 2,
}
export declare enum ResizeMode {
  /** Pass resize request to the parent */
  PARENT = 0,
  /** Queue resizes on this widget */
  QUEUE = 1,
  /** Resize immediately. Deprecated. */
  IMMEDIATE = 2,
}
/**
  * Predefined values for use as response ids in Gtk.Dialog.add_button(). All predefined values are negative; GTK+ leaves values of 0 or greater for application-defined response ids. 
  */
export declare enum ResponseType {
  /** Returned if an action widget has no response id, or if the dialog gets programmatically hidden or destroyed */
  NONE = -1,
  /** Returned by Apply buttons in GTK+ dialogs */
  APPLY = -10,
  /** Returned by Help buttons in GTK+ dialogs */
  HELP = -11,
  /** Generic response id, not used by GTK+ dialogs */
  REJECT = -2,
  /** Generic response id, not used by GTK+ dialogs */
  ACCEPT = -3,
  /** Returned if the dialog is deleted */
  DELETE_EVENT = -4,
  /** Returned by OK buttons in GTK+ dialogs */
  OK = -5,
  /** Returned by Cancel buttons in GTK+ dialogs */
  CANCEL = -6,
  /** Returned by Close buttons in GTK+ dialogs */
  CLOSE = -7,
  /** Returned by Yes buttons in GTK+ dialogs */
  YES = -8,
  /** Returned by No buttons in GTK+ dialogs */
  NO = -9,
}
/**
  * These enumeration values describe the possible transitions when the child of a Gtk.Revealer widget is shown or hidden. 
  */
export declare enum RevealerTransitionType {
  /** No transition */
  NONE = 0,
  /** Fade in */
  CROSSFADE = 1,
  /** Slide in from the left */
  SLIDE_RIGHT = 2,
  /** Slide in from the right */
  SLIDE_LEFT = 3,
  /** Slide in from the bottom */
  SLIDE_UP = 4,
  /** Slide in from the top */
  SLIDE_DOWN = 5,
}
export declare enum ScrollStep {
  /** Scroll in steps. */
  STEPS = 0,
  /** Scroll by pages. */
  PAGES = 1,
  /** Scroll to ends. */
  ENDS = 2,
  /** Scroll in horizontal steps. */
  HORIZONTAL_STEPS = 3,
  /** Scroll by horizontal pages. */
  HORIZONTAL_PAGES = 4,
  /** Scroll to the horizontal ends. */
  HORIZONTAL_ENDS = 5,
}
/**
  * Scrolling types. 
  */
export declare enum ScrollType {
  /** No scrolling. */
  NONE = 0,
  /** Jump to new location. */
  JUMP = 1,
  /** Step to the left. */
  STEP_LEFT = 10,
  /** Step to the right. */
  STEP_RIGHT = 11,
  /** Page to the left. */
  PAGE_LEFT = 12,
  /** Page to the right. */
  PAGE_RIGHT = 13,
  /** Scroll to start. */
  START = 14,
  /** Scroll to end. */
  END = 15,
  /** Step backward. */
  STEP_BACKWARD = 2,
  /** Step forward. */
  STEP_FORWARD = 3,
  /** Page backward. */
  PAGE_BACKWARD = 4,
  /** Page forward. */
  PAGE_FORWARD = 5,
  /** Step up. */
  STEP_UP = 6,
  /** Step down. */
  STEP_DOWN = 7,
  /** Page up. */
  PAGE_UP = 8,
  /** Page down. */
  PAGE_DOWN = 9,
}
/**
  * Defines the policy to be used in a scrollable widget when updating the scrolled window adjustments in a given orientation. 
  */
export declare enum ScrollablePolicy {
  /** Scrollable adjustments are based on the minimum size */
  MINIMUM = 0,
  /** Scrollable adjustments are based on the natural size */
  NATURAL = 1,
}
/**
  * Used to control what selections users are allowed to make. 
  */
export declare enum SelectionMode {
  /** No selection is possible. */
  NONE = 0,
  /** Zero or one element may be selected. */
  SINGLE = 1,
  /** Exactly one element is selected. In some circumstances, such as initially or during a search operation, it’s possible for no element to be selected with Gtk.SelectionMode.BROWSE. What is really enforced is that the user can’t deselect a currently selected element except by selecting another element. */
  BROWSE = 2,
  /** Any number of elements may be selected. The Ctrl key may be used to enlarge the selection, and Shift key to select between the focus and the child pointed to. Some widgets may also allow Click-drag to select a range of elements. */
  MULTIPLE = 3,
}
/**
  * Determines how GTK+ handles the sensitivity of stepper arrows at the end of range widgets. 
  */
export declare enum SensitivityType {
  /** The arrow is made insensitive if the thumb is at the end */
  AUTO = 0,
  /** The arrow is always sensitive */
  ON = 1,
  /** The arrow is always insensitive */
  OFF = 2,
}
/**
  * Used to change the appearance of an outline typically provided by a Gtk.Frame. 
  */
export declare enum ShadowType {
  /** No outline. */
  NONE = 0,
  /** The outline is bevelled inwards. */
  IN = 1,
  /** The outline is bevelled outwards like a button. */
  OUT = 2,
  /** The outline has a sunken 3d appearance. */
  ETCHED_IN = 3,
  /** The outline has a raised 3d appearance. */
  ETCHED_OUT = 4,
}
/**
  * Gtk.ShortcutType specifies the kind of shortcut that is being described. More values may be added to this enumeration over time.
  *  New in version 3.20.  
  */
export declare enum ShortcutType {
  /** The shortcut is a keyboard accelerator. The Gtk.ShortcutsShortcut :accelerator property will be used. */
  ACCELERATOR = 0,
  /** The shortcut is a pinch gesture. GTK+ provides an icon and subtitle. */
  GESTURE_PINCH = 1,
  /** The shortcut is a stretch gesture. GTK+ provides an icon and subtitle. */
  GESTURE_STRETCH = 2,
  /** The shortcut is a clockwise rotation gesture. GTK+ provides an icon and subtitle. */
  GESTURE_ROTATE_CLOCKWISE = 3,
  /** The shortcut is a counterclockwise rotation gesture. GTK+ provides an icon and subtitle. */
  GESTURE_ROTATE_COUNTERCLOCKWISE = 4,
  /** The shortcut is a two-finger swipe gesture. GTK+ provides an icon and subtitle. */
  GESTURE_TWO_FINGER_SWIPE_LEFT = 5,
  /** The shortcut is a two-finger swipe gesture. GTK+ provides an icon and subtitle. */
  GESTURE_TWO_FINGER_SWIPE_RIGHT = 6,
  /** The shortcut is a gesture. The Gtk.ShortcutsShortcut :icon property will be used. */
  GESTURE = 7,
}
/**
  * The mode of the size group determines the directions in which the size group affects the requested sizes of its component widgets. 
  */
export declare enum SizeGroupMode {
  /** group has no effect */
  NONE = 0,
  /** group affects horizontal requisition */
  HORIZONTAL = 1,
  /** group affects vertical requisition */
  VERTICAL = 2,
  /** group affects both horizontal and vertical requisition */
  BOTH = 3,
}
/**
  * Specifies a preference for height-for-width or width-for-height geometry management. 
  */
export declare enum SizeRequestMode {
  /** Prefer height-for-width geometry management */
  HEIGHT_FOR_WIDTH = 0,
  /** Prefer width-for-height geometry management */
  WIDTH_FOR_HEIGHT = 1,
  /** Don’t trade height-for-width or width-for-height */
  CONSTANT_SIZE = 2,
}
/**
  * Determines the direction of a sort. 
  */
export declare enum SortType {
  /** Sorting is in ascending order. */
  ASCENDING = 0,
  /** Sorting is in descending order. */
  DESCENDING = 1,
}
/**
  * The spin button update policy determines whether the spin button displays values even if they are outside the bounds of its adjustment. See Gtk.SpinButton.set_update_policy(). 
  */
export declare enum SpinButtonUpdatePolicy {
  /** When refreshing your Gtk.SpinButton, the value is always displayed */
  ALWAYS = 0,
  /** When refreshing your Gtk.SpinButton, the value is only displayed if it is valid within the bounds of the spin button’s adjustment */
  IF_VALID = 1,
}
/**
  * The values of the Gtk.SpinType enumeration are used to specify the change to make in Gtk.SpinButton.spin(). 
  */
export declare enum SpinType {
  /** Increment by the adjustments step increment. */
  STEP_FORWARD = 0,
  /** Decrement by the adjustments step increment. */
  STEP_BACKWARD = 1,
  /** Increment by the adjustments page increment. */
  PAGE_FORWARD = 2,
  /** Decrement by the adjustments page increment. */
  PAGE_BACKWARD = 3,
  /** Go to the adjustments lower bound. */
  HOME = 4,
  /** Go to the adjustments upper bound. */
  END = 5,
  /** Change by a specified amount. */
  USER_DEFINED = 6,
}
/**
  * These enumeration values describe the possible transitions between pages in a Gtk.Stack widget. 
  */
export declare enum StackTransitionType {
  /** No transition */
  NONE = 0,
  /** A cross-fade */
  CROSSFADE = 1,
  /** Cover the old page by sliding to the left.
    *  New in version 3.12.  */
  OVER_LEFT = 10,
  /** Cover the old page by sliding to the right.
    *  New in version 3.12.  */
  OVER_RIGHT = 11,
  /** Uncover the new page by sliding up.
    *  New in version 3.12.  */
  UNDER_UP = 12,
  /** Uncover the new page by sliding down.
    *  New in version 3.12.  */
  UNDER_DOWN = 13,
  /** Uncover the new page by sliding to the left.
    *  New in version 3.12.  */
  UNDER_LEFT = 14,
  /** Uncover the new page by sliding to the right.
    *  New in version 3.12.  */
  UNDER_RIGHT = 15,
  /** Cover the old page sliding up or uncover the new page sliding down, according to order.
    *  New in version 3.12.  */
  OVER_UP_DOWN = 16,
  /** Cover the old page sliding down or uncover the new page sliding up, according to order.
    *  New in version 3.14.  */
  OVER_DOWN_UP = 17,
  /** Cover the old page sliding left or uncover the new page sliding right, according to order.
    *  New in version 3.14.  */
  OVER_LEFT_RIGHT = 18,
  /** Cover the old page sliding right or uncover the new page sliding left, according to order.
    *  New in version 3.14.  */
  OVER_RIGHT_LEFT = 19,
  /** Slide from left to right */
  SLIDE_RIGHT = 2,
  /** Slide from right to left */
  SLIDE_LEFT = 3,
  /** Slide from bottom up */
  SLIDE_UP = 4,
  /** Slide from top down */
  SLIDE_DOWN = 5,
  /** Slide from left or right according to the children order */
  SLIDE_LEFT_RIGHT = 6,
  /** Slide from top down or bottom up according to the order */
  SLIDE_UP_DOWN = 7,
  /** Cover the old page by sliding up.
    *  New in version 3.12.  */
  OVER_UP = 8,
  /** Cover the old page by sliding down.
    *  New in version 3.12.  */
  OVER_DOWN = 9,
}
/**
  * This type indicates the current state of a widget; the state determines how the widget is drawn. The Gtk.StateType enumeration is also used to identify different colors in a Gtk.Style for drawing, so states can be used for subparts of a widget as well as entire widgets.
  *  Deprecated since version 3.14: All APIs that are using this enumeration have been deprecated in favor of alternatives using Gtk.StateFlags.  
  */
export declare enum StateType {
  /** State during normal operation. */
  NORMAL = 0,
  /** State of a currently active widget, such as a depressed button. */
  ACTIVE = 1,
  /** State indicating that the mouse pointer is over the widget and the widget will respond to mouse clicks. */
  PRELIGHT = 2,
  /** State of a selected item, such the selected row in a list. */
  SELECTED = 3,
  /** State indicating that the widget is unresponsive to user actions. */
  INSENSITIVE = 4,
  /** The widget is inconsistent, such as checkbuttons or radiobuttons that aren’t either set to True nor False, or buttons requiring the user attention. */
  INCONSISTENT = 5,
  /** The widget has the keyboard focus. */
  FOCUSED = 6,
}
/**
  * These values are used as “info” for the targets contained in the lists returned by Gtk.TextBuffer.get_copy_target_list() and Gtk.TextBuffer.get_paste_target_list(). 
  */
export declare enum TextBufferTargetInfo {
  /** Buffer contents */
  BUFFER_CONTENTS = -1,
  /** Rich text */
  RICH_TEXT = -2,
  /** Text */
  TEXT = -3,
}
/**
  * Reading directions for text. 
  */
export declare enum TextDirection {
  /** No direction. */
  NONE = 0,
  /** Left to right text direction. */
  LTR = 1,
  /** Right to left text direction. */
  RTL = 2,
}
/**
  * Granularity types that extend the text selection. Use the Gtk.TextView ::extend-selection signal to customize the selection.
  *  New in version 3.16.  
  */
export declare enum TextExtendSelection {
  /** Selects the current word. It is triggered by a double-click for example. */
  WORD = 0,
  /** Selects the current line. It is triggered by a triple-click for example. */
  LINE = 1,
}
/**
  * Used to reference the layers of Gtk.TextView for the purpose of customized drawing with the ::draw_layer vfunc. 
  */
export declare enum TextViewLayer {
  /** Old deprecated layer, use Gtk.TextViewLayer.BELOW_TEXT instead */
  BELOW = 0,
  /** Old deprecated layer, use Gtk.TextViewLayer.ABOVE_TEXT instead */
  ABOVE = 1,
  /** The layer rendered below the text (but above the background).
    *  New in version 3.20.  */
  BELOW_TEXT = 2,
  /** The layer rendered above the text.
    *  New in version 3.20.  */
  ABOVE_TEXT = 3,
}
/**
  * Used to reference the parts of Gtk.TextView. 
  */
export declare enum TextWindowType {
  /** Invalid value, used as a marker */
  PRIVATE = 0,
  /** Window that floats over scrolling areas. */
  WIDGET = 1,
  /** Scrollable text window. */
  TEXT = 2,
  /** Left side border window. */
  LEFT = 3,
  /** Right side border window. */
  RIGHT = 4,
  /** Top border window. */
  TOP = 5,
  /** Bottom border window. */
  BOTTOM = 6,
}
/**
  * Whether spacers are vertical lines or just blank.
  *  Deprecated since version 3.20.  
  */
export declare enum ToolbarSpaceStyle {
  /** Use blank spacers. */
  EMPTY = 0,
  /** Use vertical lines for spacers. */
  LINE = 1,
}
/**
  * Used to customize the appearance of a Gtk.Toolbar. Note that setting the toolbar style overrides the user’s preferences for the default toolbar style.  Note that if the button has only a label set and Gtk.ToolbarStyle.ICONS is used, the label will be visible, and vice versa. 
  */
export declare enum ToolbarStyle {
  /** Buttons display only icons in the toolbar. */
  ICONS = 0,
  /** Buttons display only text labels in the toolbar. */
  TEXT = 1,
  /** Buttons display text and icons in the toolbar. */
  BOTH = 2,
  /** Buttons display icons and text alongside each other, rather than vertically stacked */
  BOTH_HORIZ = 3,
}
/**
  * The sizing method the column uses to determine its width.  Please note that Gtk.TreeViewColumnSizing.AUTOSIZE are inefficient for large views, and can make columns appear choppy. 
  */
export declare enum TreeViewColumnSizing {
  /** Columns only get bigger in reaction to changes in the model */
  GROW_ONLY = 0,
  /** Columns resize to be the optimal size everytime the model changes. */
  AUTOSIZE = 1,
  /** Columns are a fixed numbers of pixels wide. */
  FIXED = 2,
}
/**
  * An enum for determining where a dropped row goes. 
  */
export declare enum TreeViewDropPosition {
  /** dropped row is inserted before */
  BEFORE = 0,
  /** dropped row is inserted after */
  AFTER = 1,
  /** dropped row becomes a child or is inserted before */
  INTO_OR_BEFORE = 2,
  /** dropped row becomes a child or is inserted after */
  INTO_OR_AFTER = 3,
}
/**
  * Used to indicate which grid lines to draw in a tree view. 
  */
export declare enum TreeViewGridLines {
  /** No grid lines. */
  NONE = 0,
  /** Horizontal grid lines. */
  HORIZONTAL = 1,
  /** Vertical grid lines. */
  VERTICAL = 2,
  /** Horizontal and vertical grid lines. */
  BOTH = 3,
}
/**
  * See also Gtk.PrintSettings.set_paper_width(). 
  */
export declare enum Unit {
  /** No units. */
  NONE = 0,
  /** Dimensions in points. */
  POINTS = 1,
  /** Dimensions in inches. */
  INCH = 2,
  /** Dimensions in millimeters */
  MM = 3,
}
/**
  * Kinds of widget-specific help. Used by the ::show-help signal. 
  */
export declare enum WidgetHelpType {
  /** Tooltip. */
  TOOLTIP = 0,
  /** What’s this. */
  WHATS_THIS = 1,
}
/**
  * Window placement can be influenced using this enumeration. Note that using Gtk.WindowPosition.CENTER_ALWAYS is almost always a bad idea. It won’t necessarily work well with all window managers or on all windowing systems. 
  */
export declare enum WindowPosition {
  /** No influence is made on placement. */
  NONE = 0,
  /** Windows should be placed in the center of the screen. */
  CENTER = 1,
  /** Windows should be placed at the current mouse position. */
  MOUSE = 2,
  /** Keep window centered as it changes size, etc. */
  CENTER_ALWAYS = 3,
  /** Center the window on its transient parent (see Gtk.Window.set_transient_for()). */
  CENTER_ON_PARENT = 4,
}
/**
  * A Gtk.Window can be one of these types. Most things you’d consider a “window” should have type Gtk.WindowType.TOPLEVEL; windows with this type are managed by the window manager and have a frame by default (call Gtk.Window.set_decorated() to toggle the frame).  Windows with type Gtk.WindowType.POPUP are ignored by the window manager; window manager keybindings won’t work on them, the window manager won’t decorate the window with a frame, many GTK+ features that rely on the window manager will not work (e.g. resize grips and maximization/minimization). Gtk.WindowType.POPUP is used to implement widgets such as Gtk.Menu or tooltips that you normally don’t think of as windows per se. Nearly all windows should be Gtk.WindowType.TOPLEVEL. In particular, do not use Gtk.WindowType.POPUP just to turn off the window borders; use Gtk.Window.set_decorated() for that. 
  */
export declare enum WindowType {
  /** A regular window, such as a dialog. */
  TOPLEVEL = 0,
  /** A special window such as a tooltip. */
  POPUP = 1,
}
/**
  * Describes a type of line wrapping. 
  */
export declare enum WrapMode {
  /** do not wrap lines; just make the text area wider */
  NONE = 0,
  /** wrap text, breaking lines anywhere the cursor can appear (between characters, usually - if you want to be technical, between graphemes, see Pango.get_log_attrs()) */
  CHAR = 1,
  /** wrap text, breaking lines in between words */
  WORD = 2,
  /** wrap text, breaking lines in between words, or if that is not enough, also between graphemes */
  WORD_CHAR = 3,
}
