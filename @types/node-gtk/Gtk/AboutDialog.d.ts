import * as Gtk from '../Gtk';
export declare interface AboutDialog extends Gtk.Dialog { }

/**
  * The Gtk.AboutDialog offers a simple way to display information about
a program like its logo, name, copyright, website and license. It is
also possible to give credits to the authors, documenters, translators
and artists who have worked on the program. An about dialog is typically
opened when the user selects the About option from the Help menu.
All parts of the dialog are optional. 
  */
export declare class AboutDialog {
  /**
    * Creates a new Gtk.AboutDialog.
    * @returns a newly created Gtk.AboutDialog 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Creates a new section in the Credits page.
    * @param sectionName The name of the section
    * @param people The people who belong to that section 
    */
  addCreditSection(sectionName: string, people: string): void;
  /**
    * Returns the string which are displayed in the artists tab of the secondary credits dialog.
    * @returns A None-terminated string array containing the artists. The array is owned by the about dialog and must not be modified. 
    */
  getArtists(): string[];
  /**
    * Returns the string which are displayed in the authors tab of the secondary credits dialog.
    * @returns A None-terminated string array containing the authors. The array is owned by the about dialog and must not be modified. 
    */
  getAuthors(): string[];
  /**
    * Returns the comments string.
    * @returns The comments. The string is owned by the about dialog and must not be modified. 
    */
  getComments(): string;
  /**
    * Returns the copyright string.
    * @returns The copyright string. The string is owned by the about dialog and must not be modified. 
    */
  getCopyright(): string;
  /**
    * Returns the string which are displayed in the documenters tab of the secondary credits dialog.
    * @returns A None-terminated string array containing the documenters. The array is owned by the about dialog and must not be modified. 
    */
  getDocumenters(): string[];
  /**
    * Returns the license information.
    * @returns The license information. The string is owned by the about dialog and must not be modified. 
    */
  getLicense(): string;
  /**
    * Retrieves the license set using Gtk.AboutDialog.set_license_type()
    * @returns a Gtk.License value 
    */
  getLicenseType(): import('../Gtk').License;
  /**
    * Returns the pixbuf displayed as logo in the about dialog.
    * @returns the pixbuf displayed as logo. The pixbuf is owned by the about dialog. If you want to keep a reference to it, you have to call GObject.Object.ref() on it. 
    */
  getLogo(): import('../GdkPixbuf').Pixbuf;
  /**
    * Returns the icon name displayed as logo in the about dialog.
    * @returns the icon name displayed as logo. The string is owned by the dialog. If you want to keep a reference to it, you have to call GLib.strdup() on it. 
    */
  getLogoIconName(): string;
  /**
    * Returns the program name displayed in the about dialog.
    * @returns The program name. The string is owned by the about dialog and must not be modified. 
    */
  getProgramName(): string;
  /**
    * Returns the translator credits string which is displayed in the translators tab of the secondary credits dialog.
    * @returns The translator credits string. The string is owned by the about dialog and must not be modified. 
    */
  getTranslatorCredits(): string;
  /**
    * Returns the version string.
    * @returns The version string. The string is owned by the about dialog and must not be modified. 
    */
  getVersion(): string;
  /**
    * Returns the website URL.
    * @returns The website URL. The string is owned by the about dialog and must not be modified. 
    */
  getWebsite(): string;
  /**
    * Returns the label used for the website link.
    * @returns The label used for the website link. The string is owned by the about dialog and must not be modified. 
    */
  getWebsiteLabel(): string;
  /**
    * Returns whether the license text in self is automatically wrapped.
    * @returns True if the license text is wrapped 
    */
  getWrapLicense(): boolean;
  /**
    * Sets the strings which are displayed in the artists tab of the secondary credits dialog.
    * @param artists a None-terminated array of strings 
    */
  setArtists(artists: string): void;
  /**
    * Sets the strings which are displayed in the authors tab of the secondary credits dialog.
    * @param authors a None-terminated array of strings 
    */
  setAuthors(authors: string): void;
  /**
    * Sets the comments string to display in the about dialog. This should be a short string of one or two lines.
    * @param comments a comments string 
    */
  setComments(comments: string | null): void;
  /**
    * Sets the copyright string to display in the about dialog. This should be a short string of one or two lines.
    * @param copyright the copyright string 
    */
  setCopyright(copyright: string | null): void;
  /**
    * Sets the strings which are displayed in the documenters tab of the secondary credits dialog.
    * @param documenters a None-terminated array of strings 
    */
  setDocumenters(documenters: string): void;
  /**
    * Sets the license information to be displayed in the secondary license dialog. If license is None, the license button is hidden.
    * @param license the license information or None 
    */
  setLicense(license: string | null): void;
  /**
    * Sets the license of the application showing the self dialog from a list of known licenses.
    * @param licenseType the type of license 
    */
  setLicenseType(licenseType: import('../Gtk').License): void;
  /**
    * Sets the pixbuf to be displayed as logo in the about dialog. If it is None, the default window icon set with Gtk.Window.set_default_icon() will be used.
    * @param logo a GdkPixbuf.Pixbuf, or None 
    */
  setLogo(logo: import('../GdkPixbuf').Pixbuf | null): void;
  /**
    * Sets the pixbuf to be displayed as logo in the about dialog. If it is None, the default window icon set with Gtk.Window.set_default_icon() will be used.
    * @param iconName an icon name, or None 
    */
  setLogoIconName(iconName: string | null): void;
  /**
    * Sets the name to display in the about dialog. If this is not set, it defaults to GLib.get_application_name().
    * @param name the program name 
    */
  setProgramName(name: string): void;
  /**
    * Sets the translator credits string which is displayed in the translators tab of the secondary credits dialog.
    * @param translatorCredits the translator credits 
    */
  setTranslatorCredits(translatorCredits: string | null): void;
  /**
    * Sets the version string to display in the about dialog.
    * @param version the version string 
    */
  setVersion(version: string | null): void;
  /**
    * Sets the URL to use for the website link.
    * @param website a URL string starting with “http://” 
    */
  setWebsite(website: string | null): void;
  /**
    * Sets the label to be used for the website link.
    * @param websiteLabel the label used for the website link 
    */
  setWebsiteLabel(websiteLabel: string): void;
  /**
    * Sets whether the license text in self is automatically wrapped.
    * @param wrapLicense whether to wrap the license 
    */
  setWrapLicense(wrapLicense: boolean): void;
  /**
    * List of people who have contributed artwork to the program 
    */
  artists: string;
  /**
    * List of authors of the program 
    */
  authors: string;
  /**
    * Comments about the program 
    */
  comments: string;
  /**
    * Copyright information for the program 
    */
  copyright: string;
  /**
    * List of people documenting the program 
    */
  documenters: string;
  /**
    * The license of the program 
    */
  license: string;
  /**
    * The license type of the program 
    */
  licenseType: import('../Gtk').License;
  /**
    * A logo for the about box. If this is not set, it defaults to Gtk.Window.get_default_icon_list() 
    */
  logo: import('../GdkPixbuf').Pixbuf;
  /**
    * A named icon to use as the logo for the about box. 
    */
  logoIconName: string;
  /**
    * The name of the program. If this is not set, it defaults to GLib.get_application_name() 
    */
  programName: string;
  /**
    * Credits to the translators. This string should be marked as translatable 
    */
  translatorCredits: string;
  /**
    * The version of the program 
    */
  version: string;
  /**
    * The URL for the link to the website of the program 
    */
  website: string;
  /**
    * The label for the link to the website of the program 
    */
  websiteLabel: string;
  /**
    * Whether to wrap the license text. 
    */
  wrapLicense: boolean;
}

