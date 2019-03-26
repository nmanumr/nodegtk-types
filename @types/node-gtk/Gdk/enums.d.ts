/**
  * Positioning hints for aligning a window relative to a rectangle.
  *  New in version 3.22.  
  */
export declare enum AnchorHints {
  /** allow flipping anchors horizontally */
  FLIP_X = 1,
  /** allow sliding window on both axes */
  SLIDE = 12,
  /** allow resizing window horizontally */
  RESIZE_X = 16,
  /** allow flipping anchors vertically */
  FLIP_Y = 2,
  /** allow flipping anchors on both axes */
  FLIP = 3,
  /** allow resizing window vertically */
  RESIZE_Y = 32,
  /** allow sliding window horizontally */
  SLIDE_X = 4,
  /** allow resizing window on both axes */
  RESIZE = 48,
  /** allow sliding window vertically */
  SLIDE_Y = 8,
}
/**
  * Flags describing the current capabilities of a device/tool.
  *  New in version 3.22.  
  */
export declare enum AxisFlags {
  /** Distance axis is present */
  DISTANCE = 128,
  /** X tilt axis is present */
  XTILT = 16,
  /** X axis is present */
  X = 2,
  /** Z-axis rotation is present */
  ROTATION = 256,
  /** Y tilt axis is present */
  YTILT = 32,
  /** Y axis is present */
  Y = 4,
  /** Slider axis is present */
  SLIDER = 512,
  /** Wheel axis is present */
  WHEEL = 64,
  /** Pressure axis is present */
  PRESSURE = 8,
}
/**
  * Used in Gdk.DragContext to indicate what the destination should do with the dropped data. 
  */
export declare enum DragAction {
  /** Means nothing, and should not be used. */
  DEFAULT = 1,
  /** Special action which tells the source that the destination will do something that the source doesn’t understand. */
  PRIVATE = 16,
  /** Copy the data. */
  COPY = 2,
  /** Ask the user what to do with the data. */
  ASK = 32,
  /** Move the data, i.e. first copy it, then delete it from the source using the DELETE target of the X selection protocol. */
  MOVE = 4,
  /** Add a link to the data. Note that this is only useful if source and destination agree on what it means. */
  LINK = 8,
}
/**
  * A set of bit-flags to indicate which events a window is to receive. Most of these masks map onto one or more of the Gdk.EventType event types above. 
  */
export declare enum EventMask {
  /** receive key press events */
  KEY_PRESS_MASK = 1024,
  /** receive events about window configuration changes of child windows */
  SUBSTRUCTURE_MASK = 1048576,
  /** receive pointer motion events while 3 button is pressed */
  BUTTON3_MOTION_MASK = 128,
  /** receive visibility change events */
  VISIBILITY_NOTIFY_MASK = 131072,
  /** receive pointer motion events while any button is pressed */
  BUTTON_MOTION_MASK = 16,
  /** receive focus change events */
  FOCUS_CHANGE_MASK = 16384,
  /** receive touchpad gesture events.
    *  New in version 3.18.  */
  TOUCHPAD_GESTURE_MASK = 16777216,
  /** receive expose events */
  EXPOSURE_MASK = 2,
  /** receive key release events */
  KEY_RELEASE_MASK = 2048,
  /** receive scroll events */
  SCROLL_MASK = 2097152,
  /** receive button press events */
  BUTTON_PRESS_MASK = 256,
  /** receive proximity in events */
  PROXIMITY_IN_MASK = 262144,
  /** receive pointer motion events while 1 button is pressed */
  BUTTON1_MOTION_MASK = 32,
  /** receive events about window configuration change */
  STRUCTURE_MASK = 32768,
  /** receive tablet pad events.
    *  New in version 3.22.  */
  TABLET_PAD_MASK = 33554432,
  /** receive all pointer motion events */
  POINTER_MOTION_MASK = 4,
  /** receive window enter events */
  ENTER_NOTIFY_MASK = 4096,
  /** receive touch events.
    *  New in version 3.4.  */
  TOUCH_MASK = 4194304,
  /** receive button release events */
  BUTTON_RELEASE_MASK = 512,
  /** receive proximity out events */
  PROXIMITY_OUT_MASK = 524288,
  /** receive pointer motion events while 2 button is pressed */
  BUTTON2_MOTION_MASK = 64,
  /** receive property change events */
  PROPERTY_CHANGE_MASK = 65536,
  /** the combination of all the above event masks. */
  ALL_EVENTS_MASK = 67108862,
  /** deprecated. see the explanation above */
  POINTER_MOTION_HINT_MASK = 8,
  /** receive window leave events */
  LEAVE_NOTIFY_MASK = 8192,
  /** receive smooth scrolling events.
    *  New in version 3.4.  */
  SMOOTH_SCROLL_MASK = 8388608,
}
/**
  * Gdk.FrameClockPhase is used to represent the different paint clock phases that can be requested. The elements of the enumeration correspond to the signals of Gdk.FrameClock.
  *  New in version 3.8.  
  */
export declare enum FrameClockPhase {
  /** no phase */
  NONE = 0,
  /** corresponds to Gdk.FrameClock ::flush-events. Should not be handled by applications. */
  FLUSH_EVENTS = 1,
  /** corresponds to Gdk.FrameClock ::paint. */
  PAINT = 16,
  /** corresponds to Gdk.FrameClock ::before-paint. Should not be handled by applications. */
  BEFORE_PAINT = 2,
  /** corresponds to Gdk.FrameClock ::resume-events. Should not be handled by applications. */
  RESUME_EVENTS = 32,
  /** corresponds to Gdk.FrameClock ::update. */
  UPDATE = 4,
  /** corresponds to Gdk.FrameClock ::after-paint. Should not be handled by applications. */
  AFTER_PAINT = 64,
  /** corresponds to Gdk.FrameClock ::layout. */
  LAYOUT = 8,
}
/**
  * A set of bit-flags to indicate the state of modifier keys and mouse buttons in various event types. Typical modifier keys are Shift, Control, Meta, Super, Hyper, Alt, Compose, Apple, CapsLock or ShiftLock. 
  */
export declare enum ModifierType {
  /** the Shift key. */
  SHIFT_MASK = 1,
  /** the third mouse button. */
  BUTTON3_MASK = 1024,
  /** A reserved bit flag; do not use in your own code */
  MODIFIER_RESERVED_20_MASK = 1048576,
  /** not used in GDK itself. GTK+ uses it to differentiate between (keyval, modifiers) pairs from key press and release events. */
  RELEASE_MASK = 1073741824,
  /** the eighth modifier key (it depends on the modifier mapping of the X server which key is interpreted as this modifier). */
  MOD5_MASK = 128,
  /** A reserved bit flag; do not use in your own code */
  MODIFIER_RESERVED_17_MASK = 131072,
  /** the Hyper modifier.
    *  New in version 2.10.  */
  HYPER_MASK = 134217728,
  /** a mask covering all modifier types. */
  MODIFIER_MASK = 1543512063,
  /** the fifth modifier key (it depends on the modifier mapping of the X server which key is interpreted as this modifier). */
  MOD2_MASK = 16,
  /** A reserved bit flag; do not use in your own code */
  MODIFIER_RESERVED_14_MASK = 16384,
  /** A reserved bit flag; do not use in your own code */
  MODIFIER_RESERVED_24_MASK = 16777216,
  /** a Lock key (depending on the modifier mapping of the X server this may either be CapsLock or ShiftLock). */
  LOCK_MASK = 2,
  /** the fourth mouse button. */
  BUTTON4_MASK = 2048,
  /** A reserved bit flag; do not use in your own code */
  MODIFIER_RESERVED_21_MASK = 2097152,
  /** the first mouse button. */
  BUTTON1_MASK = 256,
  /** A reserved bit flag; do not use in your own code */
  MODIFIER_RESERVED_18_MASK = 262144,
  /** the Meta modifier.
    *  New in version 2.10.  */
  META_MASK = 268435456,
  /** the sixth modifier key (it depends on the modifier mapping of the X server which key is interpreted as this modifier). */
  MOD3_MASK = 32,
  /** A reserved bit flag; do not use in your own code */
  MODIFIER_RESERVED_15_MASK = 32768,
  /** A reserved bit flag; do not use in your own code */
  MODIFIER_RESERVED_25_MASK = 33554432,
  /** the Control key. */
  CONTROL_MASK = 4,
  /** the fifth mouse button. */
  BUTTON5_MASK = 4096,
  /** A reserved bit flag; do not use in your own code */
  MODIFIER_RESERVED_22_MASK = 4194304,
  /** the second mouse button. */
  BUTTON2_MASK = 512,
  /** A reserved bit flag; do not use in your own code */
  MODIFIER_RESERVED_19_MASK = 524288,
  /** A reserved bit flag; do not use in your own code */
  MODIFIER_RESERVED_29_MASK = 536870912,
  /** the seventh modifier key (it depends on the modifier mapping of the X server which key is interpreted as this modifier). */
  MOD4_MASK = 64,
  /** A reserved bit flag; do not use in your own code */
  MODIFIER_RESERVED_16_MASK = 65536,
  /** the Super modifier.
    *  New in version 2.10.  */
  SUPER_MASK = 67108864,
  /** the fourth modifier key (it depends on the modifier mapping of the X server which key is interpreted as this modifier, but normally it is the Alt key). */
  MOD1_MASK = 8,
  /** A reserved bit flag; do not use in your own code */
  MODIFIER_RESERVED_13_MASK = 8192,
  /** A reserved bit flag; do not use in your own code */
  MODIFIER_RESERVED_23_MASK = 8388608,
}
/**
  * Flags describing the seat capabilities.
  *  New in version 3.20.  
  */
export declare enum SeatCapabilities {
  /** No input capabilities */
  NONE = 0,
  /** The seat has a pointer (e.g. mouse) */
  POINTER = 1,
  /** The union of all capabilities */
  ALL = 15,
  /** The seat has touchscreen(s) attached */
  TOUCH = 2,
  /** The seat has drawing tablet(s) attached */
  TABLET_STYLUS = 4,
  /** The union of all pointing capabilities */
  ALL_POINTING = 7,
  /** The seat has keyboard(s) attached */
  KEYBOARD = 8,
}
/**
  * These are hints originally defined by the Motif toolkit. The window manager can use them when determining how to decorate the window. The hint must be set before mapping the window. 
  */
export declare enum WMDecoration {
  /** all decorations should be applied. */
  ALL = 1,
  /** a button for opening a menu should be included. */
  MENU = 16,
  /** a frame should be drawn around the window. */
  BORDER = 2,
  /** a minimize button should be included. */
  MINIMIZE = 32,
  /** the frame should have resize handles. */
  RESIZEH = 4,
  /** a maximize button should be included. */
  MAXIMIZE = 64,
  /** a titlebar should be placed above the window. */
  TITLE = 8,
}
/**
  * These are hints originally defined by the Motif toolkit. The window manager can use them when determining the functions to offer for the window. The hint must be set before mapping the window. 
  */
export declare enum WMFunction {
  /** all functions should be offered. */
  ALL = 1,
  /** the window should be maximizable. */
  MAXIMIZE = 16,
  /** the window should be resizable. */
  RESIZE = 2,
  /** the window should be closable. */
  CLOSE = 32,
  /** the window should be movable. */
  MOVE = 4,
  /** the window should be minimizable. */
  MINIMIZE = 8,
}
/**
  * Used to indicate which fields in the Gdk.WindowAttr struct should be honored. For example, if you filled in the “cursor” and “x” fields of Gdk.WindowAttr, pass “Gdk.WindowAttributesType.X | Gdk.WindowAttributesType.CURSOR” to Gdk.Window.new(). Fields in Gdk.WindowAttr not covered by a bit in this enum are required; for example, the width/height, wclass, and window_type fields are required, they have no corresponding flag in Gdk.WindowAttributesType. 
  */
export declare enum WindowAttributesType {
  /** Honor the override_redirect field */
  NOREDIR = 128,
  /** Honor the cursor field */
  CURSOR = 16,
  /** Honor the title field */
  TITLE = 2,
  /** Honor the type_hint field */
  TYPE_HINT = 256,
  /** Honor the visual field */
  VISUAL = 32,
  /** Honor the X coordinate field */
  X = 4,
  /** Honor the wmclass_class and wmclass_name fields */
  WMCLASS = 64,
  /** Honor the Y coordinate field */
  Y = 8,
}
/**
  * Used to indicate which fields of a Gdk.Geometry struct should be paid attention to. Also, the presence/absence of Gdk.WindowHints.POS, Gdk.WindowHints.USER_POS, and Gdk.WindowHints.USER_SIZE is significant, though they don’t directly refer to Gdk.Geometry fields. Gdk.WindowHints.USER_POS will be set automatically by #GtkWindow if you call gtk_window_move(). Gdk.WindowHints.USER_POS and Gdk.WindowHints.USER_SIZE should be set if the user specified a size/position using a –geometry command-line argument; gtk_window_parse_geometry() automatically sets these flags. 
  */
export declare enum WindowHints {
  /** indicates that the program has positioned the window */
  POS = 1,
  /** indicates that the window’s position was explicitly set by the user */
  USER_POS = 128,
  /** aspect ratio fields are set */
  ASPECT = 16,
  /** min size fields are set */
  MIN_SIZE = 2,
  /** indicates that the window’s size was explicitly set by the user */
  USER_SIZE = 256,
  /** resize increment fields are set */
  RESIZE_INC = 32,
  /** max size fields are set */
  MAX_SIZE = 4,
  /** window gravity field is set */
  WIN_GRAVITY = 64,
  /** base size fields are set */
  BASE_SIZE = 8,
}
/**
  * Specifies the state of a toplevel window. 
  */
export declare enum WindowState {
  /** the window is not shown. */
  WITHDRAWN = 1,
  /** whether the top edge is resizable,
    *  New in version 3.22.23.  */
  TOP_RESIZABLE = 1024,
  /** the window is presented as focused (with active decorations). */
  FOCUSED = 128,
  /** the window is maximized without decorations. */
  FULLSCREEN = 16,
  /** whether the bottom edge is resizable,
    *  New in version 3.22.23.  */
  BOTTOM_RESIZABLE = 16384,
  /** the window is minimized. */
  ICONIFIED = 2,
  /** whether the right edge is tiled,
    *  New in version 3.22.23.  */
  RIGHT_TILED = 2048,
  /** the window is in a tiled state,Since 3.22.23, this is deprecated in favor of per-edge information.
    *  New in version 3.10.  */
  TILED = 256,
  /** the window is kept above other windows. */
  ABOVE = 32,
  /** whether the left edge is tiled,
    *  New in version 3.22.23.  */
  LEFT_TILED = 32768,
  /** the window is maximized. */
  MAXIMIZED = 4,
  /** whether the right edge is resizable,
    *  New in version 3.22.23.  */
  RIGHT_RESIZABLE = 4096,
  /** whether the top edge is tiled,
    *  New in version 3.22.23.  */
  TOP_TILED = 512,
  /** the window is kept below other windows. */
  BELOW = 64,
  /** whether the left edge is resizable,
    *  New in version 3.22.23.  */
  LEFT_RESIZABLE = 65536,
  /** the window is sticky. */
  STICKY = 8,
  /** whether the bottom edge is tiled,
    *  New in version 3.22.23.  */
  BOTTOM_TILED = 8192,
}
/**
  * An enumeration describing the way in which a device axis (valuator) maps onto the predefined valuator types that GTK+ understands. 
  */
export declare enum AxisUse {
  /** the axis is ignored. */
  IGNORE = 0,
  /** the axis is used as the x axis. */
  X = 1,
  /** a constant equal to the numerically highest axis value. */
  LAST = 10,
  /** the axis is used as the y axis. */
  Y = 2,
  /** the axis is used for pressure information. */
  PRESSURE = 3,
  /** the axis is used for x tilt information. */
  XTILT = 4,
  /** the axis is used for y tilt information. */
  YTILT = 5,
  /** the axis is used for wheel information. */
  WHEEL = 6,
  /** the axis is used for pen/tablet distance information. (Since: 3.22) */
  DISTANCE = 7,
  /** the axis is used for pen rotation information. (Since: 3.22) */
  ROTATION = 8,
  /** the axis is used for pen slider information. (Since: 3.22) */
  SLIDER = 9,
}
/**
  * A set of values describing the possible byte-orders for storing pixel values in memory. 
  */
export declare enum ByteOrder {
  /** The values are stored with the least-significant byte first. For instance, the 32-bit value 0xffeecc would be stored in memory as 0xcc, 0xee, 0xff, 0x00. */
  LSB_FIRST = 0,
  /** The values are stored with the most-significant byte first. For instance, the 32-bit value 0xffeecc would be stored in memory as 0x00, 0xff, 0xee, 0xcc. */
  MSB_FIRST = 1,
}
/**
  * Specifies the crossing mode for Gdk.EventCrossing. 
  */
export declare enum CrossingMode {
  /** crossing because of pointer motion. */
  NORMAL = 0,
  /** crossing because a grab is activated. */
  GRAB = 1,
  /** crossing because a grab is deactivated. */
  UNGRAB = 2,
  /** crossing because a GTK+ grab is activated. */
  GTK_GRAB = 3,
  /** crossing because a GTK+ grab is deactivated. */
  GTK_UNGRAB = 4,
  /** crossing because a GTK+ widget changed state (e.g. sensitivity). */
  STATE_CHANGED = 5,
  /** crossing because a touch sequence has begun, this event is synthetic as the pointer might have not left the window. */
  TOUCH_BEGIN = 6,
  /** crossing because a touch sequence has ended, this event is synthetic as the pointer might have not left the window. */
  TOUCH_END = 7,
  /** crossing because of a device switch (i.e. a mouse taking control of the pointer after a touch device), this event is synthetic as the pointer didn’t leave the window. */
  DEVICE_SWITCH = 8,
}
/**
  * Predefined cursors. 
  */
export declare enum CursorType {
  /** type of cursors constructed with Gdk.Cursor.new_from_pixbuf() */
  CURSOR_IS_PIXMAP = -1,
  /** Blank cursor.
    *  New in version 2.16.  */
  BLANK_CURSOR = -2,
  X_CURSOR = 0,
  BOGOSITY = 10,
  RIGHTBUTTON = 100,
  RTL_LOGO = 102,
  SAILBOAT = 104,
  SB_DOWN_ARROW = 106,
  SB_H_DOUBLE_ARROW = 108,
  SB_LEFT_ARROW = 110,
  SB_RIGHT_ARROW = 112,
  SB_UP_ARROW = 114,
  SB_V_DOUBLE_ARROW = 116,
  SHUTTLE = 118,
  BOTTOM_LEFT_CORNER = 12,
  SIZING = 120,
  SPIDER = 122,
  SPRAYCAN = 124,
  STAR = 126,
  TARGET = 128,
  TCROSS = 130,
  TOP_LEFT_ARROW = 132,
  TOP_LEFT_CORNER = 134,
  TOP_RIGHT_CORNER = 136,
  TOP_SIDE = 138,
  BOTTOM_RIGHT_CORNER = 14,
  TOP_TEE = 140,
  TREK = 142,
  UL_ANGLE = 144,
  UMBRELLA = 146,
  UR_ANGLE = 148,
  WATCH = 150,
  XTERM = 152,
  /** last cursor type */
  LAST_CURSOR = 153,
  BOTTOM_SIDE = 16,
  BOTTOM_TEE = 18,
  ARROW = 2,
  BOX_SPIRAL = 20,
  CENTER_PTR = 22,
  CIRCLE = 24,
  CLOCK = 26,
  COFFEE_MUG = 28,
  CROSS = 30,
  CROSS_REVERSE = 32,
  CROSSHAIR = 34,
  DIAMOND_CROSS = 36,
  DOT = 38,
  BASED_ARROW_DOWN = 4,
  DOTBOX = 40,
  DOUBLE_ARROW = 42,
  DRAFT_LARGE = 44,
  DRAFT_SMALL = 46,
  DRAPED_BOX = 48,
  EXCHANGE = 50,
  FLEUR = 52,
  GOBBLER = 54,
  GUMBY = 56,
  HAND1 = 58,
  BASED_ARROW_UP = 6,
  HAND2 = 60,
  HEART = 62,
  ICON = 64,
  IRON_CROSS = 66,
  LEFT_PTR = 68,
  LEFT_SIDE = 70,
  LEFT_TEE = 72,
  LEFTBUTTON = 74,
  LL_ANGLE = 76,
  LR_ANGLE = 78,
  BOAT = 8,
  MAN = 80,
  MIDDLEBUTTON = 82,
  MOUSE = 84,
  PENCIL = 86,
  PIRATE = 88,
  PLUS = 90,
  QUESTION_ARROW = 92,
  RIGHT_PTR = 94,
  RIGHT_SIDE = 96,
  RIGHT_TEE = 98,
}
/**
  * A pad feature. 
  */
export declare enum DevicePadFeature {
  /** a button */
  BUTTON = 0,
  /** a ring-shaped interactive area */
  RING = 1,
  /** a straight interactive area */
  STRIP = 2,
}
/**
  * Indicates the specific type of tool being used being a tablet. Such as an airbrush, pencil, etc.
  *  New in version 3.22.  
  */
export declare enum DeviceToolType {
  /** Tool is of an unknown type. */
  UNKNOWN = 0,
  /** Tool is a standard tablet stylus. */
  PEN = 1,
  /** Tool is standard tablet eraser. */
  ERASER = 2,
  /** Tool is a brush stylus. */
  BRUSH = 3,
  /** Tool is a pencil stylus. */
  PENCIL = 4,
  /** Tool is an airbrush stylus. */
  AIRBRUSH = 5,
  /** Tool is a mouse. */
  MOUSE = 6,
  /** Tool is a lens cursor. */
  LENS = 7,
}
/**
  * Indicates the device type. See ‘above [GdkDeviceManager.description]’ for more information about the meaning of these device types. 
  */
export declare enum DeviceType {
  /** Device is a master (or virtual) device. There will be an associated focus indicator on the screen. */
  MASTER = 0,
  /** Device is a slave (or physical) device. */
  SLAVE = 1,
  /** Device is a physical device, currently not attached to any virtual device. */
  FLOATING = 2,
}
/**
  * Used in Gdk.DragContext to the reason of a cancelled DND operation.
  *  New in version 3.20.  
  */
export declare enum DragCancelReason {
  /** There is no suitable drop target. */
  NO_TARGET = 0,
  /** Drag cancelled by the user */
  USER_CANCELLED = 1,
  /** Unspecified error. */
  ERROR = 2,
}
/**
  * Used in Gdk.DragContext to indicate the protocol according to which DND is done. 
  */
export declare enum DragProtocol {
  /** no protocol. */
  NONE = 0,
  /** The Motif DND protocol. No longer supported */
  MOTIF = 1,
  /** The Xdnd protocol. */
  XDND = 2,
  /** An extension to the Xdnd protocol for unclaimed root window drops. */
  ROOTWIN = 3,
  /** The simple WM_DROPFILES protocol. */
  WIN32_DROPFILES = 4,
  /** The complex OLE2 DND protocol (not implemented). */
  OLE2 = 5,
  /** Intra-application DND. */
  LOCAL = 6,
  /** Wayland DND protocol. */
  WAYLAND = 7,
}
/**
  * Specifies the type of the event. 
  */
export declare enum EventType {
  /** a special code to indicate a null event. */
  NOTHING = -1,
  /** the window manager has requested that the toplevel window be hidden or destroyed, usually when the user clicks on a special icon in the title bar. */
  DELETE = 0,
  /** the window has been destroyed. */
  DESTROY = 1,
  /** the pointer has entered the window. */
  ENTER_NOTIFY = 10,
  /** the pointer has left the window. */
  LEAVE_NOTIFY = 11,
  /** the keyboard focus has entered or left the window. */
  FOCUS_CHANGE = 12,
  /** the size, position or stacking order of the window has changed. Note that GTK+ discards these events for Gdk.WindowType.CHILD windows. */
  CONFIGURE = 13,
  /** the window has been mapped. */
  MAP = 14,
  /** the window has been unmapped. */
  UNMAP = 15,
  /** a property on the window has been changed or deleted. */
  PROPERTY_NOTIFY = 16,
  /** the application has lost ownership of a selection. */
  SELECTION_CLEAR = 17,
  /** another application has requested a selection. */
  SELECTION_REQUEST = 18,
  /** a selection has been received. */
  SELECTION_NOTIFY = 19,
  /** all or part of the window has become visible and needs to be redrawn. */
  EXPOSE = 2,
  /** an input device has moved into contact with a sensing surface (e.g. a touchscreen or graphics tablet). */
  PROXIMITY_IN = 20,
  /** an input device has moved out of contact with a sensing surface. */
  PROXIMITY_OUT = 21,
  /** the mouse has entered the window while a drag is in progress. */
  DRAG_ENTER = 22,
  /** the mouse has left the window while a drag is in progress. */
  DRAG_LEAVE = 23,
  /** the mouse has moved in the window while a drag is in progress. */
  DRAG_MOTION = 24,
  /** the status of the drag operation initiated by the window has changed. */
  DRAG_STATUS = 25,
  /** a drop operation onto the window has started. */
  DROP_START = 26,
  /** the drop operation initiated by the window has completed. */
  DROP_FINISHED = 27,
  /** a message has been received from another application. */
  CLIENT_EVENT = 28,
  /** the window visibility status has changed. */
  VISIBILITY_NOTIFY = 29,
  /** the pointer (usually a mouse) has moved. */
  MOTION_NOTIFY = 3,
  /** the scroll wheel was turned */
  SCROLL = 31,
  /** the state of a window has changed. See Gdk.WindowState for the possible window states */
  WINDOW_STATE = 32,
  /** a setting has been modified. */
  SETTING = 33,
  /** the owner of a selection has changed. This event type was added in 2.6 */
  OWNER_CHANGE = 34,
  /** a pointer or keyboard grab was broken. This event type was added in 2.8. */
  GRAB_BROKEN = 35,
  /** the content of the window has been changed. This event type was added in 2.14. */
  DAMAGE = 36,
  /** A new touch event sequence has just started. This event type was added in 3.4. */
  TOUCH_BEGIN = 37,
  /** A touch event sequence has been updated. This event type was added in 3.4. */
  TOUCH_UPDATE = 38,
  /** A touch event sequence has finished. This event type was added in 3.4. */
  TOUCH_END = 39,
  /** a mouse button has been pressed. */
  BUTTON_PRESS = 4,
  /** A touch event sequence has been canceled. This event type was added in 3.4. */
  TOUCH_CANCEL = 40,
  /** A touchpad swipe gesture event, the current state is determined by its phase field. This event type was added in 3.18. */
  TOUCHPAD_SWIPE = 41,
  /** A touchpad pinch gesture event, the current state is determined by its phase field. This event type was added in 3.18. */
  TOUCHPAD_PINCH = 42,
  /** A tablet pad button press event. This event type was added in 3.22. */
  PAD_BUTTON_PRESS = 43,
  /** A tablet pad button release event. This event type was added in 3.22. */
  PAD_BUTTON_RELEASE = 44,
  /** A tablet pad axis event from a “ring”. This event type was added in 3.22. */
  PAD_RING = 45,
  /** A tablet pad axis event from a “strip”. This event type was added in 3.22. */
  PAD_STRIP = 46,
  /** A tablet pad group mode change. This event type was added in 3.22. */
  PAD_GROUP_MODE = 47,
  /** marks the end of the Gdk.EventType enumeration. Added in 2.18 */
  EVENT_LAST = 48,
  '2BUTTON_PRESS' = 5,
  /** alias for Gdk.EventType._2BUTTON_PRESS, added in 3.6. */
  DOUBLE_BUTTON_PRESS = 5,
  /** a mouse button has been double-clicked (clicked twice within a short period of time). Note that each click also generates a Gdk.EventType.BUTTON_PRESS event. */
  _2BUTTON_PRESS = 5,
  '3BUTTON_PRESS' = 6,
  /** alias for Gdk.EventType._3BUTTON_PRESS, added in 3.6. */
  TRIPLE_BUTTON_PRESS = 6,
  /** a mouse button has been clicked 3 times in a short period of time. Note that each click also generates a Gdk.EventType.BUTTON_PRESS event. */
  _3BUTTON_PRESS = 6,
  /** a mouse button has been released. */
  BUTTON_RELEASE = 7,
  /** a key has been pressed. */
  KEY_PRESS = 8,
  /** a key has been released. */
  KEY_RELEASE = 9,
}
/**
  * Specifies the result of applying a Gdk.FilterFunc to a native event. 
  */
export declare enum FilterReturn {
  /** event not handled, continue processing. */
  CONTINUE = 0,
  /** native event translated into a GDK event and stored in the event structure that was passed in. */
  TRANSLATE = 1,
  /** event handled, terminate processing. */
  REMOVE = 2,
}
/**
  * Indicates which monitor (in a multi-head setup) a window should span over when in fullscreen mode.
  *  New in version 3.8.  
  */
export declare enum FullscreenMode {
  /** Fullscreen on current monitor only. */
  CURRENT_MONITOR = 0,
  /** Span across all monitors when fullscreen. */
  ALL_MONITORS = 1,
}
/**
  * Error enumeration for Gdk.GLContext.
  *  New in version 3.16.  
  */
export declare enum GLError {
  /** OpenGL support is not available */
  NOT_AVAILABLE = 0,
  /** The requested visual format is not supported */
  UNSUPPORTED_FORMAT = 1,
  /** The requested profile is not supported */
  UNSUPPORTED_PROFILE = 2,
}
/**
  * Defines how device grabs interact with other devices. 
  */
export declare enum GrabOwnership {
  /** All other devices’ events are allowed. */
  NONE = 0,
  /** Other devices’ events are blocked for the grab window. */
  WINDOW = 1,
  /** Other devices’ events are blocked for the whole application. */
  APPLICATION = 2,
}
/**
  * Returned by Gdk.Device.grab(), Gdk.pointer_grab() and Gdk.keyboard_grab() to indicate success or the reason for the failure of the grab attempt. 
  */
export declare enum GrabStatus {
  /** the resource was successfully grabbed. */
  SUCCESS = 0,
  /** the resource is actively grabbed by another client. */
  ALREADY_GRABBED = 1,
  /** the resource was grabbed more recently than the specified time. */
  INVALID_TIME = 2,
  /** the grab window or the confine_to window are not viewable. */
  NOT_VIEWABLE = 3,
  /** the resource is frozen by an active grab of another client. */
  FROZEN = 4,
  /** the grab failed for some other reason.
    *  New in version 3.16.  */
  FAILED = 5,
}
/**
  * Defines the reference point of a window and the meaning of coordinates passed to gtk_window_move(). See gtk_window_move() and the “implementation notes” section of the Extended Window Manager Hints specification for more details. 
  */
export declare enum Gravity {
  /** the reference point is at the top left corner. */
  NORTH_WEST = 1,
  /** the reference point is at the top left corner of the window itself, ignoring window manager decorations. */
  STATIC = 10,
  /** the reference point is in the middle of the top edge. */
  NORTH = 2,
  /** the reference point is at the top right corner. */
  NORTH_EAST = 3,
  /** the reference point is at the middle of the left edge. */
  WEST = 4,
  /** the reference point is at the center of the window. */
  CENTER = 5,
  /** the reference point is at the middle of the right edge. */
  EAST = 6,
  /** the reference point is at the lower left corner. */
  SOUTH_WEST = 7,
  /** the reference point is at the middle of the lower edge. */
  SOUTH = 8,
  /** the reference point is at the lower right corner. */
  SOUTH_EAST = 9,
}
/**
  * An enumeration that describes the mode of an input device. 
  */
export declare enum InputMode {
  /** the device is disabled and will not report any events. */
  DISABLED = 0,
  /** the device is enabled. The device’s coordinate space maps to the entire screen. */
  SCREEN = 1,
  /** the device is enabled. The device’s coordinate space is mapped to a single window. The manner in which this window is chosen is undefined, but it will typically be the same way in which the focus window for key events is determined. */
  WINDOW = 2,
}
/**
  * An enumeration describing the type of an input device in general terms. 
  */
export declare enum InputSource {
  /** the device is a mouse. (This will be reported for the core pointer, even if it is something else, such as a trackball.) */
  MOUSE = 0,
  /** the device is a stylus of a graphics tablet or similar device. */
  PEN = 1,
  /** the device is an eraser. Typically, this would be the other end of a stylus on a graphics tablet. */
  ERASER = 2,
  /** the device is a graphics tablet “puck” or similar device. */
  CURSOR = 3,
  /** the device is a keyboard. */
  KEYBOARD = 4,
  /** the device is a direct-input touch device, such as a touchscreen or tablet. This device type has been added in 3.4. */
  TOUCHSCREEN = 5,
  /** the device is an indirect touch device, such as a touchpad. This device type has been added in 3.4. */
  TOUCHPAD = 6,
  /** the device is a trackpoint. This device type has been added in 3.22 */
  TRACKPOINT = 7,
  /** the device is a “pad”, a collection of buttons, rings and strips found in drawing tablets. This device type has been added in 3.22. */
  TABLET_PAD = 8,
}
/**
  * This enum is used with Gdk.Keymap.get_modifier_mask() in order to determine what modifiers the currently used windowing system backend uses for particular purposes. For example, on X11/Windows, the Control key is used for invoking menu shortcuts (accelerators), whereas on Apple computers it’s the Command key (which correspond to Gdk.ModifierType.CONTROL_MASK and Gdk.ModifierType.MOD2_MASK, respectively).
  *  New in version 3.4.  
  */
export declare enum ModifierIntent {
  /** the primary modifier used to invoke menu accelerators. */
  PRIMARY_ACCELERATOR = 0,
  /** the modifier used to invoke context menus. Note that mouse button 3 always triggers context menus. When this modifier is not 0, it additionally triggers context menus when used with mouse button 1. */
  CONTEXT_MENU = 1,
  /** the modifier used to extend selections using modifier-click or modifier-cursor-key */
  EXTEND_SELECTION = 2,
  /** the modifier used to modify selections, which in most cases means toggling the clicked item into or out of the selection. */
  MODIFY_SELECTION = 3,
  /** when any of these modifiers is pressed, the key event cannot produce a symbol directly. This is meant to be used for input methods, and for use cases like typeahead search. */
  NO_TEXT_INPUT = 4,
  /** the modifier that switches between keyboard groups (AltGr on X11/Windows and Option/Alt on OS X). */
  SHIFT_GROUP = 5,
  /** The set of modifier masks accepted as modifiers in accelerators. Needed because Command is mapped to MOD2 on OSX, which is widely used, but on X11 MOD2 is NumLock and using that for a mod key is problematic at best. Ref: https://bugzilla.gnome.org/show_bug.cgi?id=736125. */
  DEFAULT_MOD_MASK = 6,
}
/**
  * Specifies the kind of crossing for Gdk.EventCrossing. 
  */
export declare enum NotifyType {
  /** the window is entered from an ancestor or left towards an ancestor. */
  ANCESTOR = 0,
  /** the pointer moves between an ancestor and an inferior of the window. */
  VIRTUAL = 1,
  /** the window is entered from an inferior or left towards an inferior. */
  INFERIOR = 2,
  /** the window is entered from or left towards a window which is neither an ancestor nor an inferior. */
  NONLINEAR = 3,
  /** the pointer moves between two windows which are not ancestors of each other and the window is part of the ancestor chain between one of these windows and their least common ancestor. */
  NONLINEAR_VIRTUAL = 4,
  /** an unknown type of enter/leave event occurred. */
  UNKNOWN = 5,
}
/**
  * Specifies why a selection ownership was changed. 
  */
export declare enum OwnerChange {
  /** some other app claimed the ownership */
  NEW_OWNER = 0,
  /** the window was destroyed */
  DESTROY = 1,
  /** the client was closed */
  CLOSE = 2,
}
/**
  * Describes how existing data is combined with new data when using gdk_property_change(). 
  */
export declare enum PropMode {
  /** the new data replaces the existing data. */
  REPLACE = 0,
  /** the new data is prepended to the existing data. */
  PREPEND = 1,
  /** the new data is appended to the existing data. */
  APPEND = 2,
}
/**
  * Specifies the type of a property change for a Gdk.EventProperty. 
  */
export declare enum PropertyState {
  /** the property value was changed. */
  NEW_VALUE = 0,
  /** the property was deleted. */
  DELETE = 1,
}
/**
  * Specifies the direction for Gdk.EventScroll. 
  */
export declare enum ScrollDirection {
  /** the window is scrolled up. */
  UP = 0,
  /** the window is scrolled down. */
  DOWN = 1,
  /** the window is scrolled to the left. */
  LEFT = 2,
  /** the window is scrolled to the right. */
  RIGHT = 3,
  /** the scrolling is determined by the delta values in Gdk.EventScroll. See Gdk.Event.get_scroll_deltas().
    *  New in version 3.4.  */
  SMOOTH = 4,
}
/**
  * Specifies the kind of modification applied to a setting in a Gdk.EventSetting. 
  */
export declare enum SettingAction {
  /** a setting was added. */
  NEW = 0,
  /** a setting was changed. */
  CHANGED = 1,
  /** a setting was deleted. */
  DELETED = 2,
}
export declare enum Status {
  ERROR = -1,
  ERROR_PARAM = -2,
  ERROR_FILE = -3,
  ERROR_MEM = -4,
  OK = 0,
}
/**
  * This enumeration describes how the red, green and blue components of physical pixels on an output device are laid out.
  *  New in version 3.22.  
  */
export declare enum SubpixelLayout {
  /** The layout is not known */
  UNKNOWN = 0,
  /** Not organized in this way */
  NONE = 1,
  /** The layout is horizontal, the order is RGB */
  HORIZONTAL_RGB = 2,
  /** The layout is horizontal, the order is BGR */
  HORIZONTAL_BGR = 3,
  /** The layout is vertical, the order is RGB */
  VERTICAL_RGB = 4,
  /** The layout is vertical, the order is BGR */
  VERTICAL_BGR = 5,
}
/**
  * Specifies the current state of a touchpad gesture. All gestures are guaranteed to begin with an event with phase Gdk.TouchpadGesturePhase.BEGIN, followed by 0 or several events with phase Gdk.TouchpadGesturePhase.UPDATE. 
  */
export declare enum TouchpadGesturePhase {
  /** The gesture has begun. */
  BEGIN = 0,
  /** The gesture has been updated. */
  UPDATE = 1,
  /** The gesture was finished, changes should be permanently applied. */
  END = 2,
  /** The gesture was cancelled, all changes should be undone. */
  CANCEL = 3,
}
/**
  * Specifies the visiblity status of a window for a Gdk.EventVisibility. 
  */
export declare enum VisibilityState {
  /** the window is completely visible. */
  UNOBSCURED = 0,
  /** the window is partially visible. */
  PARTIAL = 1,
  /** the window is not visible at all. */
  FULLY_OBSCURED = 2,
}
/**
  * A set of values that describe the manner in which the pixel values for a visual are converted into RGB values for display. 
  */
export declare enum VisualType {
  /** Each pixel value indexes a grayscale value directly. */
  STATIC_GRAY = 0,
  /** Each pixel is an index into a color map that maps pixel values into grayscale values. The color map can be changed by an application. */
  GRAYSCALE = 1,
  /** Each pixel value is an index into a predefined, unmodifiable color map that maps pixel values into RGB values. */
  STATIC_COLOR = 2,
  /** Each pixel is an index into a color map that maps pixel values into rgb values. The color map can be changed by an application. */
  PSEUDO_COLOR = 3,
  /** Each pixel value directly contains red, green, and blue components. Use Gdk.Visual.get_red_pixel_details(), etc, to obtain information about how the components are assembled into a pixel value. */
  TRUE_COLOR = 4,
  /** Each pixel value contains red, green, and blue components as for Gdk.VisualType.TRUE_COLOR, but the components are mapped via a color table into the final output table instead of being converted directly. */
  DIRECT_COLOR = 5,
}
/**
  * Determines a window edge or corner. 
  */
export declare enum WindowEdge {
  /** the top left corner. */
  NORTH_WEST = 0,
  /** the top edge. */
  NORTH = 1,
  /** the top right corner. */
  NORTH_EAST = 2,
  /** the left edge. */
  WEST = 3,
  /** the right edge. */
  EAST = 4,
  /** the lower left corner. */
  SOUTH_WEST = 5,
  /** the lower edge. */
  SOUTH = 6,
  /** the lower right corner. */
  SOUTH_EAST = 7,
}
/**
  * Describes the kind of window. 
  */
export declare enum WindowType {
  /** root window; this window has no parent, covers the entire screen, and is created by the window system */
  ROOT = 0,
  /** toplevel window (used to implement #GtkWindow) */
  TOPLEVEL = 1,
  /** child window (used to implement e.g. #GtkEntry) */
  CHILD = 2,
  /** override redirect temporary window (used to implement #GtkMenu) */
  TEMP = 3,
  /** foreign window (see gdk_window_foreign_new()) */
  FOREIGN = 4,
  /** offscreen window (see Offscreen Windows).
    *  New in version 2.18.  */
  OFFSCREEN = 5,
  /** subsurface-based window; This window is visually tied to a toplevel, and is moved/stacked with it. Currently this window type is only implemented in Wayland.
    *  New in version 3.14.  */
  SUBSURFACE = 6,
}
/**
  * These are hints for the window manager that indicate what type of function the window has. The window manager can use this when determining decoration and behaviour of the window. The hint must be set before mapping the window. 
  */
export declare enum WindowTypeHint {
  /** Normal toplevel window. */
  NORMAL = 0,
  /** Dialog window. */
  DIALOG = 1,
  /** A tooltip. */
  TOOLTIP = 10,
  /** A notification - typically a “bubble” that belongs to a status icon. */
  NOTIFICATION = 11,
  /** A popup from a combo box. */
  COMBO = 12,
  /** A window that is used to implement a DND cursor. */
  DND = 13,
  /** Window used to implement a menu; GTK+ uses this hint only for torn-off menus, see #GtkTearoffMenuItem. */
  MENU = 2,
  /** Window used to implement toolbars. */
  TOOLBAR = 3,
  /** Window used to display a splash screen during application startup. */
  SPLASHSCREEN = 4,
  /** Utility windows which are not detached toolbars or dialogs. */
  UTILITY = 5,
  /** Used for creating dock or panel windows. */
  DOCK = 6,
  /** Used for creating the desktop background window. */
  DESKTOP = 7,
  /** A menu that belongs to a menubar. */
  DROPDOWN_MENU = 8,
  /** A menu that does not belong to a menubar, e.g. a context menu. */
  POPUP_MENU = 9,
}
/**
  * Gdk.WindowWindowClass.INPUT_OUTPUT windows are the standard kind of window you might expect. Such windows receive events and are also displayed on screen. Gdk.WindowWindowClass.INPUT_ONLY windows are invisible; they are usually placed above other windows in order to trap or filter the events. You can’t draw on Gdk.WindowWindowClass.INPUT_ONLY windows. 
  */
export declare enum WindowWindowClass {
  /** window for graphics and events */
  INPUT_OUTPUT = 0,
  /** window for events only */
  INPUT_ONLY = 1,
}
