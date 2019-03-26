import * as GObject from '../GObject';
import * as Gtk from '../Gtk';
export declare interface Settings extends GObject.Object, Gtk.StyleProvider { }

/**
  * Gtk.Settings provide a mechanism to share global settings between
applications. 
  */
export declare class Settings {
  /**
    * Gets the Gtk.Settings object for the default GDK screen, creating it if necessary. See Gtk.Settings.get_for_screen().
    * @returns a Gtk.Settings object. If there is no default screen, then returns None. 
    */
  static getDefault(): import('../Gtk').Settings | null;
  /**
    * Gets the Gtk.Settings object for screen, creating it if necessary.
    * @param screen a Gdk.Screen.
    * @returns a Gtk.Settings object. 
    */
  static getForScreen(screen: import('../Gdk').Screen): import('../Gtk').Settings;
  static installProperty(pspec: import('../GObject').ParamSpec): void;
  static installPropertyParser(pspec: import('../GObject').ParamSpec, parser: import('../Gtk').rcPropertyParser): void;
  /**
    * Undoes the effect of calling g_object_set() to install an application-specific value for a setting. After this call, the setting will again follow the session-wide value for this setting.
    * @param name the name of the setting to reset 
    */
  resetProperty(name: string): void;
  setDoubleProperty(name: string, vDouble: number, origin: string): void;
  setLongProperty(name: string, vLong: number, origin: string): void;
  setPropertyValue(name: string, svalue: import('../Gtk').SettingsValue): void;
  setStringProperty(name: string, vString: string, origin: string): void;
  /**
    * A hash table representation of the color scheme. deprecated 
    */
  readonly colorHash: import('../GLib').HashTable;
  /**
    * Whether buttons in dialogs should use the alternative button order 
    */
  gtkAlternativeButtonOrder: boolean;
  /**
    * Whether the direction of the sort indicators in list and tree views is inverted compared to the default (where down means ascending) 
    */
  gtkAlternativeSortArrows: boolean;
  /**
    * Whether the application prefers to have a dark theme. 
    */
  gtkApplicationPreferDarkTheme: boolean;
  /**
    * Whether mnemonics should be automatically shown and hidden when the user presses the mnemonic activator. deprecated 
    */
  gtkAutoMnemonics: boolean;
  /**
    * Whether images should be shown on buttons deprecated 
    */
  gtkButtonImages: boolean;
  /**
    * Whether menu accelerators can be changed by pressing a key over the menu item deprecated 
    */
  gtkCanChangeAccels: boolean;
  /**
    * Palette to use in the color selector deprecated 
    */
  gtkColorPalette: string;
  /**
    * A palette of named colors for use in themes deprecated 
    */
  gtkColorScheme: string;
  /**
    * Whether the cursor should blink 
    */
  gtkCursorBlink: boolean;
  /**
    * Length of the cursor blink cycle, in milliseconds 
    */
  gtkCursorBlinkTime: number;
  /**
    * Time after which the cursor stops blinking, in seconds 
    */
  gtkCursorBlinkTimeout: number;
  /**
    * Name of the cursor theme to use, or None to use the default theme 
    */
  gtkCursorThemeName: string;
  /**
    * Size to use for cursors, or 0 to use the default size 
    */
  gtkCursorThemeSize: number;
  /**
    * The layout for window decorations 
    */
  gtkDecorationLayout: string;
  /**
    * Whether builtin GTK+ dialogs should use a header bar instead of an action area. 
    */
  gtkDialogsUseHeader: boolean;
  /**
    * Number of pixels the cursor can move before dragging 
    */
  gtkDndDragThreshold: number;
  /**
    * Maximum distance allowed between two clicks for them to be considered a double click (in pixels) 
    */
  gtkDoubleClickDistance: number;
  /**
    * Maximum time allowed between two clicks for them to be considered a double click (in milliseconds) 
    */
  gtkDoubleClickTime: number;
  /**
    * Whether menu items should have accelerators 
    */
  gtkEnableAccels: boolean;
  /**
    * Whether to enable toolkit-wide animations. 
    */
  gtkEnableAnimations: boolean;
  /**
    * Whether to play any event sounds at all 
    */
  gtkEnableEventSounds: boolean;
  /**
    * Whether to play event sounds as feedback to user input 
    */
  gtkEnableInputFeedbackSounds: boolean;
  /**
    * Whether labels should have mnemonics deprecated 
    */
  gtkEnableMnemonics: boolean;
  /**
    * Whether a middle click on a mouse should paste the ‘PRIMARY’ clipboard content at the cursor location. 
    */
  gtkEnablePrimaryPaste: boolean;
  /**
    * Whether tooltips should be shown on widgets deprecated 
    */
  gtkEnableTooltips: boolean;
  /**
    * How long to show the last input character in hidden entries 
    */
  gtkEntryPasswordHintTimeout: number;
  /**
    * Whether to select the contents of an entry when it is focused 
    */
  gtkEntrySelectOnFocus: boolean;
  /**
    * When True, keyboard navigation and other errors will cause a beep 
    */
  gtkErrorBell: boolean;
  /**
    * Name of a icon theme to fall back to deprecated 
    */
  gtkFallbackIconTheme: string;
  /**
    * Name of the Gtk.FileChooser backend to use by default deprecated 
    */
  gtkFileChooserBackend: string;
  /**
    * The default font family and size to use 
    */
  gtkFontName: string;
  /**
    * Timestamp of current fontconfig configuration 
    */
  gtkFontconfigTimestamp: number;
  /**
    * List of icon sizes (gtk-menu=16,16:py:data::gtk-button<Gtk.Settings.props.gtk_button>=20,20… deprecated 
    */
  gtkIconSizes: string;
  /**
    * Name of icon theme to use 
    */
  gtkIconThemeName: string;
  /**
    * Which IM module should be used by default 
    */
  gtkImModule: string;
  /**
    * How to draw the input method preedit string deprecated 
    */
  gtkImPreeditStyle: import('../Gtk').IMPreeditStyle;
  /**
    * How to draw the input method statusbar deprecated 
    */
  gtkImStatusStyle: import('../Gtk').IMStatusStyle;
  /**
    * Name of key theme to load 
    */
  gtkKeyThemeName: string;
  /**
    * When True, there are only cursor keys available to navigate widgets deprecated 
    */
  gtkKeynavCursorOnly: boolean;
  /**
    * Whether to show cursor in text 
    */
  gtkKeynavUseCaret: boolean;
  /**
    * Whether to wrap around when keyboard-navigating widgets deprecated 
    */
  gtkKeynavWrapAround: boolean;
  /**
    * Whether to select the contents of a selectable label when it is focused 
    */
  gtkLabelSelectOnFocus: boolean;
  /**
    * Time for a button/touch press to be considered a long press (in milliseconds) 
    */
  gtkLongPressTime: number;
  /**
    * Keybinding to activate the menu bar deprecated 
    */
  gtkMenuBarAccel: string;
  /**
    * Delay before the submenus of a menu bar appear deprecated 
    */
  gtkMenuBarPopupDelay: number;
  /**
    * Whether images should be shown in menus deprecated 
    */
  gtkMenuImages: boolean;
  /**
    * The time before hiding a submenu when the pointer is moving towards the submenu deprecated 
    */
  gtkMenuPopdownDelay: number;
  /**
    * Minimum time the pointer must stay over a menu item before the submenu appear deprecated 
    */
  gtkMenuPopupDelay: number;
  /**
    * List of currently active GTK modules 
    */
  gtkModules: string;
  /**
    * Whether a primary click on the trough should warp the slider into position 
    */
  gtkPrimaryButtonWarpsSlider: boolean;
  /**
    * List of the GtkPrintBackend backends to use by default 
    */
  gtkPrintBackends: string;
  /**
    * Command to run when displaying a print preview 
    */
  gtkPrintPreviewCommand: string;
  /**
    * Whether GTK+ remembers recent files 
    */
  gtkRecentFilesEnabled: boolean;
  /**
    * Number of recently used files deprecated 
    */
  gtkRecentFilesLimit: number;
  /**
    * Maximum age of recently used files, in days 
    */
  gtkRecentFilesMaxAge: number;
  /**
    * Where the contents of scrolled windows are located with respect to the scrollbars, if not overridden by the scrolled window’s own placement. deprecated 
    */
  gtkScrolledWindowPlacement: import('../Gtk').CornerType;
  /**
    * Set to True if the desktop environment is displaying the app menu, False if the app should display it itself. 
    */
  gtkShellShowsAppMenu: boolean;
  /**
    * Set to True if the desktop environment is displaying the desktop folder, False if not. 
    */
  gtkShellShowsDesktop: boolean;
  /**
    * Set to True if the desktop environment is displaying the menubar, False if the app should display it itself. 
    */
  gtkShellShowsMenubar: boolean;
  /**
    * Whether the context menus of entries and text views should offer to change the input method deprecated 
    */
  gtkShowInputMethodMenu: boolean;
  /**
    * Whether the context menus of entries and text views should offer to insert control characters deprecated 
    */
  gtkShowUnicodeMenu: boolean;
  /**
    * XDG sound theme name 
    */
  gtkSoundThemeName: string;
  /**
    * Whether two cursors should be displayed for mixed left-to-right and right-to-left text 
    */
  gtkSplitCursor: boolean;
  /**
    * Name of theme to load 
    */
  gtkThemeName: string;
  /**
    * Expand value for timeouts, when a widget is expanding a new region deprecated 
    */
  gtkTimeoutExpand: number;
  /**
    * Starting value for timeouts, when button is pressed deprecated 
    */
  gtkTimeoutInitial: number;
  /**
    * Repeat value for timeouts, when button is pressed deprecated 
    */
  gtkTimeoutRepeat: number;
  /**
    * The action to take on titlebar double-click 
    */
  gtkTitlebarDoubleClick: string;
  /**
    * The action to take on titlebar middle-click 
    */
  gtkTitlebarMiddleClick: string;
  /**
    * The action to take on titlebar right-click 
    */
  gtkTitlebarRightClick: string;
  /**
    * The size of icons in default toolbars. deprecated 
    */
  gtkToolbarIconSize: import('../Gtk').IconSize;
  /**
    * Whether default toolbars have text only, text and icons, icons only, etc. deprecated 
    */
  gtkToolbarStyle: import('../Gtk').ToolbarStyle;
  /**
    * Timeout after which browse mode is disabled deprecated 
    */
  gtkTooltipBrowseModeTimeout: number;
  /**
    * Timeout before tooltip is shown when browse mode is enabled deprecated 
    */
  gtkTooltipBrowseTimeout: number;
  /**
    * Timeout before tooltip is shown deprecated 
    */
  gtkTooltipTimeout: number;
  /**
    * When True, there are no motion notify events delivered on this screen deprecated 
    */
  gtkTouchscreenMode: boolean;
  /**
    * Whether ‘focus rectangles’ should be hidden until the user starts to use the keyboard. deprecated 
    */
  gtkVisibleFocus: import('../Gtk').PolicyType;
  /**
    * Whether to antialias Xft fonts; 0=no, 1=yes, -1=default 
    */
  gtkXftAntialias: number;
  /**
    * Resolution for Xft, in 1024 * dots/inch. -1 to use default value 
    */
  gtkXftDpi: number;
  /**
    * Whether to hint Xft fonts; 0=no, 1=yes, -1=default 
    */
  gtkXftHinting: number;
  /**
    * What degree of hinting to use; hintnone, hintslight, hintmedium, or hintfull 
    */
  gtkXftHintstyle: string;
  /**
    * Type of subpixel antialiasing; none, rgb, bgr, vrgb, vbgr 
    */
  gtkXftRgba: string;
}

