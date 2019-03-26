/**
  * Describes the type of link 
  */
export declare enum HyperlinkStateFlags {
  /** Link is inline */
  INLINE = 1,
}
/**
  * Specifies how xy coordinates are to be interpreted. Used by functions such as Atk.Component.get_position() and Atk.Text.get_character_extents() 
  */
export declare enum CoordType {
  /** specifies xy coordinates relative to the screen */
  SCREEN = 0,
  /** specifies xy coordinates relative to the widget’s top-level window */
  WINDOW = 1,
  /** specifies xy coordinates relative to the widget’s immediate parent.
    *  New in version 2.30.  */
  PARENT = 2,
}
/**
  * Specifies the type of a keyboard evemt. 
  */
export declare enum KeyEventType {
  /** specifies a key press event */
  PRESS = 0,
  /** specifies a key release event */
  RELEASE = 1,
  /** Not a valid value; specifies end of enumeration */
  LAST_DEFINED = 2,
}
/**
  * Describes the layer of a component 
  */
export declare enum Layer {
  /** The object does not have a layer */
  INVALID = 0,
  /** This layer is reserved for the desktop background */
  BACKGROUND = 1,
  /** This layer is used for Canvas components */
  CANVAS = 2,
  /** This layer is normally used for components */
  WIDGET = 3,
  /** This layer is used for layered components */
  MDI = 4,
  /** This layer is used for popup components, such as menus */
  POPUP = 5,
  /** This layer is reserved for future use. */
  OVERLAY = 6,
  /** This layer is used for toplevel windows. */
  WINDOW = 7,
}
/**
  * Describes the type of the relation 
  */
export declare enum RelationType {
  /** Not used, represens “no relationship” or an error condition. */
  NULL = 0,
  /** Indicates an object controlled by one or more target objects. */
  CONTROLLED_BY = 1,
  /** Indicates that the object visually embeds another object’s content, i.e. this object’s content flows around another’s content. */
  EMBEDS = 10,
  /** Reciprocal of Atk.RelationType.EMBEDS, indicates that this object’s content is visualy embedded in another object. */
  EMBEDDED_BY = 11,
  /** Indicates that an object is a popup for another object. */
  POPUP_FOR = 12,
  /** Indicates that an object is a parent window of another object. */
  PARENT_WINDOW_OF = 13,
  /** Reciprocal of Atk.RelationType.DESCRIPTION_FOR. Indicates that one or more target objects provide descriptive information about this object. This relation type is most appropriate for information that is not essential as its presentation may be user-configurable and/or limited to an on-demand mechanism such as an assistive technology command. For brief, essential information such as can be found in a widget’s on-screen label, use Atk.RelationType.LABELLED_BY. For an on-screen error message, use Atk.RelationType.ERROR_MESSAGE. For lengthy extended descriptive information contained in an on-screen object, consider using Atk.RelationType.DETAILS as assistive technologies may provide a means for the user to navigate to objects containing detailed descriptions so that their content can be more closely reviewed. */
  DESCRIBED_BY = 14,
  /** Reciprocal of Atk.RelationType.DESCRIBED_BY. Indicates that this object provides descriptive information about the target object(s). See also Atk.RelationType.DETAILS_FOR and Atk.RelationType.ERROR_FOR. */
  DESCRIPTION_FOR = 15,
  /** Indicates an object is a cell in a treetable and is expanded to display other cells in the same column. */
  NODE_PARENT_OF = 16,
  /** Reciprocal of Atk.RelationType.DETAILS_FOR. Indicates that this object has a detailed or extended description, the contents of which can be found in the target object(s). This relation type is most appropriate for information that is sufficiently lengthy as to make navigation to the container of that information desirable. For less verbose information suitable for announcement only, see Atk.RelationType.DESCRIBED_BY. If the detailed information describes an error condition, Atk.RelationType.ERROR_FOR should be used instead.
    *  New in version 2.26.  */
  DETAILS = 17,
  /** Reciprocal of Atk.RelationType.DETAILS. Indicates that this object provides a detailed or extended description about the target object(s). See also Atk.RelationType.DESCRIPTION_FOR and Atk.RelationType.ERROR_FOR.
    *  New in version 2.26.  */
  DETAILS_FOR = 18,
  /** Reciprocal of Atk.RelationType.ERROR_FOR. Indicates that this object has one or more errors, the nature of which is described in the contents of the target object(s). Objects that have this relation type should also contain Atk.StateType.INVALID_ENTRY in their Atk.StateSet.
    *  New in version 2.26.  */
  ERROR_MESSAGE = 19,
  /** Indicates an object is an controller for one or more target objects. */
  CONTROLLER_FOR = 2,
  /** Reciprocal of Atk.RelationType.ERROR_MESSAGE. Indicates that this object contains an error message describing an invalid condition in the target object(s).
    *  New in version ATK_2.26.  */
  ERROR_FOR = 20,
  /** Not used, this value indicates the end of the enumeration. */
  LAST_DEFINED = 21,
  /** Indicates an object is a label for one or more target objects. */
  LABEL_FOR = 3,
  /** Indicates an object is labelled by one or more target objects. */
  LABELLED_BY = 4,
  /** Indicates an object is a member of a group of one or more target objects. */
  MEMBER_OF = 5,
  /** Indicates an object is a cell in a treetable which is displayed because a cell in the same column is expanded and identifies that cell. */
  NODE_CHILD_OF = 6,
  /** Indicates that the object has content that flows logically to another Atk.Object in a sequential way, (for instance text-flow). */
  FLOWS_TO = 7,
  /** Indicates that the object has content that flows logically from another Atk.Object in a sequential way, (for instance text-flow). */
  FLOWS_FROM = 8,
  /** Indicates a subwindow attached to a component but otherwise has no connection in  the UI heirarchy to that component. */
  SUBWINDOW_OF = 9,
}
/**
  * Describes the role of an object 
  */
export declare enum Role {
  /** Invalid role */
  INVALID = 0,
  /** A label which represents an accelerator */
  ACCELERATOR_LABEL = 1,
  /** The header for a column of data */
  COLUMN_HEADER = 10,
  /** An object designed to present a message to the user within an existing window.
    *  New in version 2.1.0.  */
  INFO_BAR = 100,
  /** A bar that serves as a level indicator to, for instance, show the strength of a password or the state of a battery.
    *  New in version 2.7.3.  */
  LEVEL_BAR = 101,
  /** A bar that serves as the title of a window or a dialog.
    *  New in version 2.12.  */
  TITLE_BAR = 102,
  /** An object which contains a text section that is quoted from another source.
    *  New in version 2.12.  */
  BLOCK_QUOTE = 103,
  /** An object which represents an audio element.
    *  New in version 2.12.  */
  AUDIO = 104,
  /** An object which represents a video element.
    *  New in version 2.12.  */
  VIDEO = 105,
  /** A definition of a term or concept.
    *  New in version 2.12.  */
  DEFINITION = 106,
  /** A section of a page that consists of a composition that forms an independent part of a document, page, or site. Examples: A blog entry, a news story, a forum post.
    *  New in version 2.12.  */
  ARTICLE = 107,
  /** A region of a web page intended as a navigational landmark. This is designed to allow Assistive Technologies to provide quick navigation among key regions within a document.
    *  New in version 2.12.  */
  LANDMARK = 108,
  /** A text widget or container holding log content, such as chat history and error logs. In this role there is a relationship between the arrival of new items in the log and the reading order. The log contains a meaningful sequence and new information is added only to the end of the log, not at arbitrary points.
    *  New in version 2.12.  */
  LOG = 109,
  /** A collapsible list of choices the user can select from */
  COMBO_BOX = 11,
  /** A container where non-essential information changes frequently. Common usages of marquee include stock tickers and ad banners. The primary difference between a marquee and a log is that logs usually have a meaningful order or sequence of important content changes.
    *  New in version 2.12.  */
  MARQUEE = 110,
  /** A text widget or container that holds a mathematical expression.
    *  New in version 2.12.  */
  MATH = 111,
  /** A widget whose purpose is to display a rating, such as the number of stars associated with a song in a media player. Objects of this role should also implement Atk.Value.
    *  New in version 2.12.  */
  RATING = 112,
  /** An object containing a numerical counter which indicates an amount of elapsed time from a start point, or the time remaining until an end point.
    *  New in version 2.12.  */
  TIMER = 113,
  /** An object that represents a list of term-value groups. A term-value group represents a individual description and consist of one or more names (Atk.Role.DESCRIPTION_TERM) followed by one or more values (Atk.Role.DESCRIPTION_VALUE). For each list, there should not be more than one group with the same term name.
    *  New in version 2.12.  */
  DESCRIPTION_LIST = 114,
  /** An object that represents a term or phrase with a corresponding definition.
    *  New in version 2.12.  */
  DESCRIPTION_TERM = 115,
  /** An object that represents the description, definition or value of a term.
    *  New in version 2.12.  */
  DESCRIPTION_VALUE = 116,
  /** A generic non-container object whose purpose is to display a brief amount of information to the user and whose role is known by the implementor but lacks semantic value for the user. Examples in which Atk.Role.STATIC is appropriate include the message displayed in a message box and an image used as an alternative means to display text. Atk.Role.STATIC should not be applied to widgets which are traditionally interactive, objects which display a significant amount of content, or any object which has an accessible relation pointing to another object. Implementors should expose the displayed information through the accessible name of the object. If doing so seems inappropriate, it may indicate that a different role should be used. For labels which describe another widget, see Atk.Role.LABEL. For text views, see Atk.Role.TEXT. For generic containers, see Atk.Role.PANEL. For objects whose role is not known by the implementor, see Atk.Role.UNKNOWN.
    *  New in version 2.16.  */
  STATIC = 117,
  /** An object that represents a mathematical fraction. */
  MATH_FRACTION = 118,
  /** An object that represents a mathematical expression displayed with a radical.
    *  New in version 2.16.  */
  MATH_ROOT = 119,
  /** An object whose purpose is to allow a user to edit a date */
  DATE_EDITOR = 12,
  /** An object that contains text that is displayed as a subscript.
    *  New in version 2.16.  */
  SUBSCRIPT = 120,
  /** An object that contains text that is displayed as a superscript.
    *  New in version 2.16.  */
  SUPERSCRIPT = 121,
  /** An object that contains the text of a footnote.
    *  New in version 2.26.  */
  FOOTNOTE = 122,
  /** not a valid role, used for finding end of the enumeration */
  LAST_DEFINED = 123,
  /** An inconifed internal frame within a DESKTOP_PANE */
  DESKTOP_ICON = 13,
  /** A pane that supports internal frames and iconified versions of those internal frames */
  DESKTOP_FRAME = 14,
  /** An object whose purpose is to allow a user to set a value */
  DIAL = 15,
  /** A top level window with title bar and a border */
  DIALOG = 16,
  /** A pane that allows the user to navigate through and select the contents of a directory */
  DIRECTORY_PANE = 17,
  /** An object used for drawing custom user interface elements */
  DRAWING_AREA = 18,
  /** A specialized dialog that lets the user choose a file */
  FILE_CHOOSER = 19,
  /** An object which is an alert to the user. Assistive Technologies typically respond to Atk.Role.ALERT by reading the entire onscreen contents of containers advertising this role.  Should be used for warning dialogs, etc. */
  ALERT = 2,
  /** A object that fills up space in a user interface */
  FILLER = 20,
  /** A specialized dialog that lets the user choose a font */
  FONT_CHOOSER = 21,
  /** A top level window with a title bar, border, menubar, etc. */
  FRAME = 22,
  /** A pane that is guaranteed to be painted on top of all panes beneath it */
  GLASS_PANE = 23,
  /** A document container for HTML, whose children represent the document content */
  HTML_CONTAINER = 24,
  /** A small fixed size picture, typically used to decorate components */
  ICON = 25,
  /** An object whose primary purpose is to display an image */
  IMAGE = 26,
  /** A frame-like object that is clipped by a desktop pane */
  INTERNAL_FRAME = 27,
  /** An object used to present an icon or short string in an interface */
  LABEL = 28,
  /** A specialized pane that allows its children to be drawn in layers, providing a form of stacking order */
  LAYERED_PANE = 29,
  /** An object which is an animated image */
  ANIMATION = 3,
  /** An object that presents a list of objects to the user and allows the user to select one or more of them */
  LIST = 30,
  /** An object that represents an element of a list */
  LIST_ITEM = 31,
  /** An object usually found inside a menu bar that contains a list of actions the user can choose from */
  MENU = 32,
  /** An object usually drawn at the top of the primary dialog box of an application that contains a list of menus the user can choose from */
  MENU_BAR = 33,
  /** An object usually contained in a menu that presents an action the user can choose */
  MENU_ITEM = 34,
  /** A specialized pane whose primary use is inside a DIALOG */
  OPTION_PANE = 35,
  /** An object that is a child of a page tab list */
  PAGE_TAB = 36,
  /** An object that presents a series of panels (or page tabs), one at a time, through some mechanism provided by the object */
  PAGE_TAB_LIST = 37,
  /** A generic container that is often used to group objects */
  PANEL = 38,
  /** A text object uses for passwords, or other places where the text content is not shown visibly to the user */
  PASSWORD_TEXT = 39,
  /** An arrow in one of the four cardinal directions */
  ARROW = 4,
  /** A temporary window that is usually used to offer the user a list of choices, and then hides when the user selects one of those choices */
  POPUP_MENU = 40,
  /** An object used to indicate how much of a task has been completed */
  PROGRESS_BAR = 41,
  /** An object the user can manipulate to tell the application to do something */
  PUSH_BUTTON = 42,
  /** A specialized check box that will cause other radio buttons in the same group to become unchecked when this one is checked */
  RADIO_BUTTON = 43,
  /** A check menu item which belongs to a group. At each instant exactly one of the radio menu items from a group is selected */
  RADIO_MENU_ITEM = 44,
  /** A specialized pane that has a glass pane and a layered pane as its children */
  ROOT_PANE = 45,
  /** The header for a row of data */
  ROW_HEADER = 46,
  /** An object usually used to allow a user to incrementally view a large amount of data. */
  SCROLL_BAR = 47,
  /** An object that allows a user to incrementally view a large amount of information */
  SCROLL_PANE = 48,
  /** An object usually contained in a menu to provide a visible and logical separation of the contents in a menu */
  SEPARATOR = 49,
  /** An object that displays a calendar and allows the user to select a date */
  CALENDAR = 5,
  /** An object that allows the user to select from a bounded range */
  SLIDER = 50,
  /** A specialized panel that presents two other panels at the same time */
  SPLIT_PANE = 51,
  /** An object used to get an integer or floating point number from the user */
  SPIN_BUTTON = 52,
  /** An object which reports messages of minor importance to the user */
  STATUSBAR = 53,
  /** An object used to represent information in terms of rows and columns */
  TABLE = 54,
  /** A cell in a table */
  TABLE_CELL = 55,
  /** The header for a column of a table */
  TABLE_COLUMN_HEADER = 56,
  /** The header for a row of a table */
  TABLE_ROW_HEADER = 57,
  /** A menu item used to tear off and reattach its menu */
  TEAR_OFF_MENU_ITEM = 58,
  /** An object that represents an accessible terminal.
    *  New in version 0.6.  */
  TERMINAL = 59,
  /** An object that can be drawn into and is used to trap events */
  CANVAS = 6,
  /** An interactive widget that supports multiple lines of text and optionally accepts user input, but whose purpose is not to solicit user input. Thus Atk.Role.TEXT is appropriate for the text view in a plain text editor but inappropriate for an input field in a dialog box or web form. For widgets whose purpose is to solicit input from the user, see Atk.Role.ENTRY and Atk.Role.PASSWORD_TEXT. For generic objects which display a brief amount of textual information, see Atk.Role.STATIC. */
  TEXT = 60,
  /** A specialized push button that can be checked or unchecked, but does not provide a separate indicator for the current state */
  TOGGLE_BUTTON = 61,
  /** A bar or palette usually composed of push buttons or toggle buttons */
  TOOL_BAR = 62,
  /** An object that provides information about another object */
  TOOL_TIP = 63,
  /** An object used to represent hierarchical information to the user */
  TREE = 64,
  /** An object capable of expanding and collapsing rows as well as showing multiple columns of data.
    *  New in version 0.7.  */
  TREE_TABLE = 65,
  /** The object contains some Accessible information, but its role is not known */
  UNKNOWN = 66,
  /** An object usually used in a scroll pane */
  VIEWPORT = 67,
  /** A top level window with no title or border. */
  WINDOW = 68,
  /** An object that serves as a document header.
    *  New in version 1.1.1.  */
  HEADER = 69,
  /** A choice that can be checked or unchecked and provides a separate indicator for the current state */
  CHECK_BOX = 7,
  /** An object that serves as a document footer.
    *  New in version 1.1.1.  */
  FOOTER = 70,
  /** An object which is contains a paragraph of text content.
    *  New in version 1.1.1.  */
  PARAGRAPH = 71,
  /** An object which describes margins and tab stops, etc. for text objects which it controls (should have CONTROLLER_FOR relation to such).
    *  New in version 1.1.1.  */
  RULER = 72,
  /** The object is an application object, which may contain Atk.Role.FRAME objects or other types of accessibles.  The root accessible of any application’s ATK hierarchy should have Atk.Role.APPLICATION.
    *  New in version 1.1.4.  */
  APPLICATION = 73,
  /** The object is a dialog or list containing items for insertion into an entry widget, for instance a list of words for completion of a text entry.
    *  New in version 1.3.  */
  AUTOCOMPLETE = 74,
  /** The object is an editable text object in a toolbar.
    *  New in version 1.5.  */
  EDIT_BAR = 75,
  /** The object is an embedded container within a document or panel.  This role is a grouping “hint” indicating that the contained objects share a context.
    *  New in version 1.7.2.  */
  EMBEDDED = 76,
  /** The object is a component whose textual content may be entered or modified by the user, provided Atk.StateType.EDITABLE is present.
    *  New in version 1.11.  */
  ENTRY = 77,
  /** The object is a graphical depiction of quantitative data. It may contain multiple subelements whose attributes and/or description may be queried to obtain both the quantitative data and information about how the data is being presented. The LABELLED_BY relation is particularly important in interpreting objects of this type, as is the accessible-description property.
    *  New in version 1.11.  */
  CHART = 78,
  /** The object contains descriptive information, usually textual, about another user interface element such as a table, chart, or image.
    *  New in version 1.11.  */
  CAPTION = 79,
  /** A menu item with a check box */
  CHECK_MENU_ITEM = 8,
  /** The object is a visual frame or container which contains a view of document content. Document frames may occur within another Document instance, in which case the second document may be said to be embedded in the containing instance. HTML frames are often ROLE_DOCUMENT_FRAME. Either this object, or a singleton descendant, should implement the Document interface.
    *  New in version 1.11.  */
  DOCUMENT_FRAME = 80,
  /** The object serves as a heading for content which follows it in a document. The ‘heading level’ of the heading, if availabe, may be obtained by querying the object’s attributes. */
  HEADING = 81,
  /** The object is a containing instance which encapsulates a page of information. Atk.Role.PAGE is used in documents and content which support a paginated navigation model.
    *  New in version 1.11.  */
  PAGE = 82,
  /** The object is a containing instance of document content which constitutes a particular ‘logical’ section of the document. The type of content within a section, and the nature of the section division itself, may be obtained by querying the object’s attributes. Sections may be nested.
    *  New in version 1.11.  */
  SECTION = 83,
  /** The object is redundant with another object in the hierarchy, and is exposed for purely technical reasons.  Objects of this role should normally be ignored by clients.
    *  New in version 1.11.  */
  REDUNDANT_OBJECT = 84,
  /** The object is a container for form controls, for instance as part of a web form or user-input form within a document.  This role is primarily a tag/convenience for clients when navigating complex documents, it is not expected that ordinary GUI containers will always have Atk.Role.FORM.
    *  New in version 1.12.0.  */
  FORM = 85,
  /** The object is a hypertext anchor, i.e. a “link” in a hypertext document.  Such objects are distinct from ‘inline’ content which may also use the Hypertext/Hyperlink interfaces to indicate the range/location within a text object where an inline or embedded object lies.
    *  New in version 1.12.1.  */
  LINK = 86,
  /** The object is a window or similar viewport which is used to allow composition or input of a ‘complex character’, in other words it is an “input method window.”
    *  New in version 1.12.1.  */
  INPUT_METHOD_WINDOW = 87,
  /** A row in a table.
    *  New in version 2.1.0.  */
  TABLE_ROW = 88,
  /** An object that represents an element of a tree.
    *  New in version 2.1.0.  */
  TREE_ITEM = 89,
  /** A specialized dialog that lets the user choose a color */
  COLOR_CHOOSER = 9,
  /** A document frame which contains a spreadsheet.
    *  New in version 2.1.0.  */
  DOCUMENT_SPREADSHEET = 90,
  /** A document frame which contains a presentation or slide content.
    *  New in version 2.1.0.  */
  DOCUMENT_PRESENTATION = 91,
  /** A document frame which contains textual content, such as found in a word processing application.
    *  New in version 2.1.0.  */
  DOCUMENT_TEXT = 92,
  /** A document frame which contains HTML or other markup suitable for display in a web browser.
    *  New in version 2.1.0.  */
  DOCUMENT_WEB = 93,
  /** A document frame which contains email content to be displayed or composed either in plain text or HTML.
    *  New in version 2.1.0.  */
  DOCUMENT_EMAIL = 94,
  /** An object found within a document and designed to present a comment, note, or other annotation. In some cases, this object might not be visible until activated.
    *  New in version 2.1.0.  */
  COMMENT = 95,
  /** A non-collapsible list of choices the user can select from.
    *  New in version 2.1.0.  */
  LIST_BOX = 96,
  /** A group of related widgets. This group typically has a label.
    *  New in version 2.1.0.  */
  GROUPING = 97,
  /** An image map object. Usually a graphic with multiple hotspots, where each hotspot can be activated resulting in the loading of another document or section of a document.
    *  New in version 2.1.0.  */
  IMAGE_MAP = 98,
  /** A transitory object designed to present a message to the user, typically at the desktop level rather than inside a particular application.
    *  New in version 2.1.0.  */
  NOTIFICATION = 99,
}
/**
  * Specifies where an object should be placed on the screen when using scroll_to.
  *  New in version 2.30.  
  */
export declare enum ScrollType {
  /** Scroll the object vertically and horizontally to the top left corner of the window. */
  TOP_LEFT = 0,
  /** Scroll the object vertically and horizontally to the bottom right corner of the window. */
  BOTTOM_RIGHT = 1,
  /** Scroll the object vertically to the top edge of the window. */
  TOP_EDGE = 2,
  /** Scroll the object vertically to the bottom edge of the window. */
  BOTTOM_EDGE = 3,
  /** Scroll the object vertically and horizontally to the left edge of the window. */
  LEFT_EDGE = 4,
  /** Scroll the object vertically and horizontally to the right edge of the window. */
  RIGHT_EDGE = 5,
  /** Scroll the object vertically and horizontally so that as much as possible of the object becomes visible. The exact placement is determined by the application. */
  ANYWHERE = 6,
}
/**
  * The possible types of states of an object 
  */
export declare enum StateType {
  /** Indicates an invalid state - probably an error condition. */
  INVALID = 0,
  /** Indicates a window is currently the active window, or an object is the active subelement within a container or table. Atk.StateType.ACTIVE should not be used for objects which have Atk.StateType.FOCUSABLE or Atk.StateType.SELECTABLE: Those objects should use Atk.StateType.FOCUSED and Atk.StateType.SELECTED respectively. Atk.StateType.ACTIVE is a means to indicate that an object which is not focusable and not selectable is the currently-active item within its parent container. */
  ACTIVE = 1,
  /** Indicates this object can accept keyboard focus, which means all events resulting from typing on the keyboard will normally be passed to it when it has focus */
  FOCUSABLE = 10,
  /** Indicates this object currently has the keyboard focus */
  FOCUSED = 11,
  /** Indicates the orientation of this object is horizontal; used, for instance, by objects of Atk.Role.SCROLL_BAR.  For objects where vertical/horizontal orientation is especially meaningful. */
  HORIZONTAL = 12,
  /** Indicates this object is minimized and is represented only by an icon */
  ICONIFIED = 13,
  /** Indicates something must be done with this object before the user can interact with an object in a different window */
  MODAL = 14,
  /** Indicates this (text) object can contain multiple lines of text */
  MULTI_LINE = 15,
  /** Indicates this object allows more than one of its children to be selected at the same time, or in the case of text objects, that the object supports non-contiguous text selections. */
  MULTISELECTABLE = 16,
  /** Indicates this object paints every pixel within its rectangular region. */
  OPAQUE = 17,
  /** Indicates this object is currently pressed. */
  PRESSED = 18,
  /** Indicates the size of this object is not fixed */
  RESIZABLE = 19,
  /** Indicates that the object is ‘armed’, i.e. will be activated by if a pointer button-release event occurs within its bounds.  Buttons often enter this state when a pointer click occurs within their bounds, as a precursor to activation. Atk.StateType.ARMED has been deprecated since ATK-2.16 and should not be used in newly-written code. */
  ARMED = 2,
  /** Indicates this object is the child of an object that allows its children to be selected and that this child is one of those children that can be selected */
  SELECTABLE = 20,
  /** Indicates this object is the child of an object that allows its children to be selected and that this child is one of those children that has been selected */
  SELECTED = 21,
  /** Indicates this object is sensitive, e.g. to user interaction. STATE_SENSITIVE usually accompanies STATE_ENABLED for user-actionable controls, but may be found in the absence of STATE_ENABLED if the current visible state of the control is “disconnected” from the application state.  In such cases, direct user interaction can often result in the object gaining STATE_SENSITIVE, for instance if a user makes an explicit selection using an object whose current state is ambiguous or undefined. see STATE_ENABLED, STATE_INDETERMINATE. */
  SENSITIVE = 22,
  /** Indicates this object, the object’s parent, the object’s parent’s parent, and so on, are all ‘shown’ to the end-user, i.e. subject to “exposure” if blocking or obscuring objects do not interpose between this object and the top of the window stack. */
  SHOWING = 23,
  /** Indicates this (text) object can contain only a single line of text */
  SINGLE_LINE = 24,
  /** Indicates that the information returned for this object may no longer be synchronized with the application state.  This is implied if the object has STATE_TRANSIENT, and can also occur towards the end of the object peer’s lifecycle. It can also be used to indicate that the index associated with this object has changed since the user accessed the object (in lieu of “index-in-parent-changed” events). */
  STALE = 25,
  /** Indicates this object is transient, i.e. a snapshot which may not emit events when its state changes.  Data from objects with Atk.StateType.TRANSIENT should not be cached, since there may be no notification given when the cached data becomes obsolete. */
  TRANSIENT = 26,
  /** Indicates the orientation of this object is vertical */
  VERTICAL = 27,
  /** Indicates this object is visible, e.g. has been explicitly marked for exposure to the user. */
  VISIBLE = 28,
  /** Indicates that “active-descendant-changed” event is sent when children become ‘active’ (i.e. are selected or navigated to onscreen). Used to prevent need to enumerate all children in very large containers, like tables. The presence of STATE_MANAGES_DESCENDANTS is an indication to the client. that the children should not, and need not, be enumerated by the client. Objects implementing this state are expected to provide relevant state notifications to listening clients, for instance notifications of visibility changes and activation of their contained child objects, without the client having previously requested references to those children. */
  MANAGES_DESCENDANTS = 29,
  /** Indicates the current object is busy, i.e. onscreen representation is in the process of changing, or the object is temporarily unavailable for interaction due to activity already in progress.  This state may be used by implementors of Document to indicate that content loading is underway.  It also may indicate other ‘pending’ conditions; clients may wish to interrogate this object when the Atk.StateType.BUSY flag is removed. */
  BUSY = 3,
  /** Indicates that the value, or some other quantifiable property, of this Atk.Object cannot be fully determined. In the case of a large data set in which the total number of items in that set is unknown (e.g. 1 of 999+), implementors should expose the currently-known set size (999) along with this state. In the case of a check box, this state should be used to indicate that the check box is a tri-state check box which is currently neither checked nor unchecked. */
  INDETERMINATE = 30,
  /** Indicates that an object is truncated, e.g. a text value in a speradsheet cell. */
  TRUNCATED = 31,
  /** Indicates that explicit user interaction with an object is required by the user interface, e.g. a required field in a “web-form” interface. */
  REQUIRED = 32,
  /** Indicates that the object has encountered an error condition due to failure of input validation. For instance, a form control may acquire this state in response to invalid or malformed user input. */
  INVALID_ENTRY = 33,
  /** Indicates that the object in question implements some form of ¨typeahead¨ or pre-selection behavior whereby entering the first character of one or more sub-elements causes those elements to scroll into view or become selected.  Subsequent character input may narrow the selection further as long as one or more sub-elements match the string. This state is normally only useful and encountered on objects that implement Selection. In some cases the typeahead behavior may result in full or partial ¨completion¨ of the data in the input field, in which case these input events may trigger text-changed events from the Atk.Text interface.  This state supplants Atk.Role.AUTOCOMPLETE. */
  SUPPORTS_AUTOCOMPLETION = 34,
  /** Indicates that the object in question supports text selection. It should only be exposed on objects which implement the Text interface, in order to distinguish this state from Atk.StateType.SELECTABLE, which infers that the object in question is a selectable child of an object which implements Selection. While similar, text selection and subelement selection are distinct operations. */
  SELECTABLE_TEXT = 35,
  /** Indicates that the object is the “default” active component, i.e. the object which is activated by an end-user press of the “Enter” or “Return” key.  Typically a “close” or “submit” button. */
  DEFAULT = 36,
  /** Indicates that the object changes its appearance dynamically as an inherent part of its presentation.  This state may come and go if an object is only temporarily animated on the way to a ‘final’ onscreen presentation. note some applications, notably content viewers, may not be able to detect all kinds of animated content.  Therefore the absence of this state should not be taken as definitive evidence that the object’s visual representation is static; this state is advisory. */
  ANIMATED = 37,
  /** Indicates that the object (typically a hyperlink) has already been ‘activated’, and/or its backing data has already been downloaded, rendered, or otherwise “visited”. */
  VISITED = 38,
  /** Indicates this object has the potential to be checked, such as a checkbox or toggle-able table cell.
    *  New in version 2.12.  */
  CHECKABLE = 39,
  /** Indicates this object is currently checked, for instance a checkbox is ‘non-empty’. */
  CHECKED = 4,
  /** Indicates that the object has a popup context menu or sub-level menu which may or may not be showing. This means that activation renders conditional content.  Note that ordinary tooltips are not considered popups in this context.
    *  New in version 2.12.  */
  HAS_POPUP = 40,
  /** Indicates this object has a tooltip.
    *  New in version 2.16.  */
  HAS_TOOLTIP = 41,
  /** Indicates that a widget which is ENABLED and SENSITIVE has a value which can be read, but not modified, by the user. Note that this state should only be applied to widget types whose value is normally directly user modifiable, such as check boxes, radio buttons, spin buttons, text input fields, and combo boxes, as a means to convey that the expected interaction with that widget is not possible. When the expected interaction with a widget does not include modification by the user, as is the case with labels and containers, Atk.StateType.READ_ONLY should not be applied. See also Atk.StateType.EDITABLE.
    *  New in version 2.16.  */
  READ_ONLY = 42,
  /** Not a valid state, used for finding end of enumeration */
  LAST_DEFINED = 43,
  /** Indicates that this object no longer has a valid backing widget (for instance, if its peer object has been destroyed) */
  DEFUNCT = 5,
  /** Indicates that this object can contain text, and that the user can change the textual contents of this object by editing those contents directly. For an object which is expected to be editable due to its type, but which cannot be edited due to the application or platform preventing the user from doing so, that object’s Atk.StateSet should lack Atk.StateType.EDITABLE and should contain Atk.StateType.READ_ONLY. */
  EDITABLE = 6,
  /** Indicates that this object is enabled, i.e. that it currently reflects some application state. Objects that are “greyed out” may lack this state, and may lack the STATE_SENSITIVE if direct user interaction cannot cause them to acquire STATE_ENABLED. See also: Atk.StateType.SENSITIVE */
  ENABLED = 7,
  /** Indicates this object allows progressive disclosure of its children */
  EXPANDABLE = 8,
  /** Indicates this object its expanded - see Atk.StateType.EXPANDABLE above */
  EXPANDED = 9,
}
/**
  * Describes the text attributes supported 
  */
export declare enum TextAttribute {
  /** Invalid attribute, like bad spelling or grammar. */
  INVALID = 0,
  /** The pixel width of the left margin */
  LEFT_MARGIN = 1,
  /** Number of pixels that the characters are risen above the baseline */
  RISE = 10,
  /** “none”, “single”, “double”, “low”, or “error” */
  UNDERLINE = 11,
  /** “true” or “false” whether the text is strikethrough */
  STRIKETHROUGH = 12,
  /** The size of the characters in points. eg: 10 */
  SIZE = 13,
  /** The scale of the characters. The value is a string representation of a double */
  SCALE = 14,
  /** The weight of the characters. */
  WEIGHT = 15,
  /** The language used */
  LANGUAGE = 16,
  /** The font family name */
  FAMILY_NAME = 17,
  /** The background color. The value is an RGB value of the format “%u,%u,%u” */
  BG_COLOR = 18,
  /** The foreground color. The value is an RGB value of the format “%u,%u,%u” */
  FG_COLOR = 19,
  /** The pixel width of the right margin */
  RIGHT_MARGIN = 2,
  /** “true” if a #GdkBitmap is set for stippling the background color. */
  BG_STIPPLE = 20,
  /** “true” if a #GdkBitmap is set for stippling the foreground color. */
  FG_STIPPLE = 21,
  /** The wrap mode of the text, if any. Values are “none”, “str”, “word”, or “word_char”. */
  WRAP_MODE = 22,
  /** The direction of the text, if set. Values are “none”, “ltr” or “rtl” */
  DIRECTION = 23,
  /** The justification of the text, if set. Values are “left”, “right”, “center” or “fill” */
  JUSTIFICATION = 24,
  /** The stretch of the text, if set. Values are “ultra_condensed”, “extra_condensed”, “condensed”, “semi_condensed”, “normal”, “semi_expanded”, “expanded”, “extra_expanded” or “ultra_expanded” */
  STRETCH = 25,
  /** The capitalization variant of the text, if set. Values are “normal” or “small_caps” */
  VARIANT = 26,
  /** The slant style of the text, if set. Values are “normal”, “oblique” or “italic” */
  STYLE = 27,
  /** not a valid text attribute, used for finding end of enumeration */
  LAST_DEFINED = 28,
  /** The number of pixels that the text is indented */
  INDENT = 3,
  /** Either “true” or “false” indicating whether text is visible or not */
  INVISIBLE = 4,
  /** Either “true” or “false” indicating whether text is editable or not */
  EDITABLE = 5,
  /** Pixels of blank space to leave above each newline-terminated line. */
  PIXELS_ABOVE_LINES = 6,
  /** Pixels of blank space to leave below each newline-terminated line. */
  PIXELS_BELOW_LINES = 7,
  /** Pixels of blank space to leave between wrapped lines inside the same newline-terminated line (paragraph). */
  PIXELS_INSIDE_WRAP = 8,
  /** “true” or “false” whether to make the background color for each character the height of the highest font used on the current line, or the height of the font used for the current character. */
  BG_FULL_HEIGHT = 9,
}
/**
  * Text boundary types used for specifying boundaries for regions of text. This enumeration is deprecated since 2.9.4 and should not be used. Use Atk.TextGranularity with Atk.Text.get_string_at_offset instead. 
  */
export declare enum TextBoundary {
  /** Boundary is the boundary between characters (including non-printing characters) */
  CHAR = 0,
  /** Boundary is the start (i.e. first character) of a word. */
  WORD_START = 1,
  /** Boundary is the end (i.e. last character) of a word. */
  WORD_END = 2,
  /** Boundary is the first character in a sentence. */
  SENTENCE_START = 3,
  /** Boundary is the last (terminal) character in a sentence; in languages which use “sentence stop” punctuation such as English, the boundary is thus the ‘.’, ‘?’, or similar terminal punctuation character. */
  SENTENCE_END = 4,
  /** Boundary is the initial character of the content or a character immediately following a newline, linefeed, or return character. */
  LINE_START = 5,
  /** Boundary is the linefeed, or return character. */
  LINE_END = 6,
}
/**
  * Describes the type of clipping required. 
  */
export declare enum TextClipType {
  /** No clipping to be done */
  NONE = 0,
  /** Text clipped by min coordinate is omitted */
  MIN = 1,
  /** Text clipped by max coordinate is omitted */
  MAX = 2,
  /** Only text fully within mix/max bound is retained */
  BOTH = 3,
}
/**
  * Text granularity types used for specifying the granularity of the region of text we are interested in. 
  */
export declare enum TextGranularity {
  /** Granularity is defined by the boundaries between characters (including non-printing characters) */
  CHAR = 0,
  /** Granularity is defined by the boundaries of a word, starting at the beginning of the current word and finishing at the beginning of the following one, if present. */
  WORD = 1,
  /** Granularity is defined by the boundaries of a sentence, starting at the beginning of the current sentence and finishing at the beginning of the following one, if present. */
  SENTENCE = 2,
  /** Granularity is defined by the boundaries of a line, starting at the beginning of the current line and finishing at the beginning of the following one, if present. */
  LINE = 3,
  /** Granularity is defined by the boundaries of a paragraph, starting at the beginning of the current paragraph and finishing at the beginning of the following one, if present. */
  PARAGRAPH = 4,
}
/**
  * Default types for a given value. Those are defined in order to easily get localized strings to describe a given value or a given subrange, using Atk.ValueType.get_localized_name(). 
  */
export declare enum ValueType {
  VERY_WEAK = 0,
  WEAK = 1,
  VERY_BAD = 10,
  BAD = 11,
  GOOD = 12,
  VERY_GOOD = 13,
  BEST = 14,
  LAST_DEFINED = 15,
  ACCEPTABLE = 2,
  STRONG = 3,
  VERY_STRONG = 4,
  VERY_LOW = 5,
  LOW = 6,
  MEDIUM = 7,
  HIGH = 8,
  VERY_HIGH = 9,
}
