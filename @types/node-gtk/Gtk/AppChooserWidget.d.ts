import * as Gtk from '../Gtk';

export declare interface AppChooserWidget extends Gtk.Box, Gtk.AppChooser {}

/**
  * Gtk.AppChooserWidget is a widget for selecting applications.
It is the main building block for Gtk.AppChooserDialog. Most
applications only need to use the latter; but you can use
this widget as part of a larger widget if you have special needs. 
  */
export declare class AppChooserWidget {
/**
  * Creates a new Gtk.AppChooserWidget for applications that can handle content of the given type.
  * @param contentType the content type to show applications for
  * @returns a newly created Gtk.AppChooserWidget 
  */
static new(contentType: string): import('../Gtk').Widget;
/**
  * Returns the text that is shown if there are not applications that can handle the content type.
  * @returns the value of Gtk.AppChooserWidget :default-text 
  */
getDefaultText(): string;
/**
  * Returns the current value of the Gtk.AppChooserWidget :show-all property.
  * @returns the value of Gtk.AppChooserWidget :show-all 
  */
getShowAll(): boolean;
/**
  * Returns the current value of the Gtk.AppChooserWidget :show-default property.
  * @returns the value of Gtk.AppChooserWidget :show-default 
  */
getShowDefault(): boolean;
/**
  * Returns the current value of the Gtk.AppChooserWidget :show-fallback property.
  * @returns the value of Gtk.AppChooserWidget :show-fallback 
  */
getShowFallback(): boolean;
/**
  * Returns the current value of the Gtk.AppChooserWidget :show-other property.
  * @returns the value of Gtk.AppChooserWidget :show-other 
  */
getShowOther(): boolean;
/**
  * Returns the current value of the Gtk.AppChooserWidget :show-recommended property.
  * @returns the value of Gtk.AppChooserWidget :show-recommended 
  */
getShowRecommended(): boolean;
/**
  * Sets the text that is shown if there are not applications that can handle the content type.
  * @param text the new value for Gtk.AppChooserWidget :default-text 
  */
setDefaultText(text: string): void;
/**
  * Sets whether the app chooser should show all applications in a flat list.
  * @param setting the new value for Gtk.AppChooserWidget :show-all 
  */
setShowAll(setting: boolean): void;
/**
  * Sets whether the app chooser should show the default handler for the content type in a separate section.
  * @param setting the new value for Gtk.AppChooserWidget :show-default 
  */
setShowDefault(setting: boolean): void;
/**
  * Sets whether the app chooser should show related applications for the content type in a separate section.
  * @param setting the new value for Gtk.AppChooserWidget :show-fallback 
  */
setShowFallback(setting: boolean): void;
/**
  * Sets whether the app chooser should show applications which are unrelated to the content type.
  * @param setting the new value for Gtk.AppChooserWidget :show-other 
  */
setShowOther(setting: boolean): void;
/**
  * Sets whether the app chooser should show recommended applications for the content type in a separate section.
  * @param setting the new value for Gtk.AppChooserWidget :show-recommended 
  */
setShowRecommended(setting: boolean): void;
/**
  * The default text appearing when there are no applications 
  */
defaultText: string;
/**
  * Whether the widget should show all applications 
  */
// showAll: boolean;
/**
  * Whether the widget should show the default application 
  */
showDefault: boolean;
/**
  * Whether the widget should show fallback applications 
  */
showFallback: boolean;
/**
  * Whether the widget should show other applications 
  */
showOther: boolean;
/**
  * Whether the widget should show recommended applications 
  */
showRecommended: boolean;
}

