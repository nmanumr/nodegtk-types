/**
  * Deprecated 
  */
export declare class RcProperty {
  /**
    * A Gtk.RcPropertyParser for use with Gtk.Settings.install_property_parser() or gtk_widget_class_install_style_property_parser() which parses borders in the form "{ left, right, top, bottom }" for integers left, right, top and bottom.
    * @param pspec a GObject.ParamSpec
    * @param gstring the GLib.String to be parsed
    * @param propertyValue a GObject.Value which must hold boxed values.
    * @returns True if gstring could be parsed and property_value has been set to the resulting Gtk.Border. 
    */
  static parseBorder(pspec: import('../GObject').ParamSpec, gstring: import('../GLib').String, propertyValue: import('../GObject').Value): boolean;
  /**
    * A Gtk.RcPropertyParser for use with Gtk.Settings.install_property_parser() or gtk_widget_class_install_style_property_parser() which parses a color given either by its name or in the form { red, green, blue } where red, green and blue are integers between 0 and 65535 or floating-point numbers between 0 and 1.
    * @param pspec a GObject.ParamSpec
    * @param gstring the GLib.String to be parsed
    * @param propertyValue a GObject.Value which must hold Gdk.Color values.
    * @returns True if gstring could be parsed and property_value has been set to the resulting Gdk.Color. 
    */
  static parseColor(pspec: import('../GObject').ParamSpec, gstring: import('../GLib').String, propertyValue: import('../GObject').Value): boolean;
  /**
    * A Gtk.RcPropertyParser for use with Gtk.Settings.install_property_parser() or gtk_widget_class_install_style_property_parser() which parses a single enumeration value.
    * @param pspec a GObject.ParamSpec
    * @param gstring the GLib.String to be parsed
    * @param propertyValue a GObject.Value which must hold enum values.
    * @returns True if gstring could be parsed and property_value has been set to the resulting GObject.EnumValue. 
    */
  static parseEnum(pspec: import('../GObject').ParamSpec, gstring: import('../GLib').String, propertyValue: import('../GObject').Value): boolean;
  /**
    * A Gtk.RcPropertyParser for use with Gtk.Settings.install_property_parser() or gtk_widget_class_install_style_property_parser() which parses flags.
    * @param pspec a GObject.ParamSpec
    * @param gstring the GLib.String to be parsed
    * @param propertyValue a GObject.Value which must hold flags values.
    * @returns True if gstring could be parsed and property_value has been set to the resulting flags value. 
    */
  static parseFlags(pspec: import('../GObject').ParamSpec, gstring: import('../GLib').String, propertyValue: import('../GObject').Value): boolean;
  /**
    * A Gtk.RcPropertyParser for use with Gtk.Settings.install_property_parser() or gtk_widget_class_install_style_property_parser() which parses a requisition in the form "{ width, height }" for integers %width and %height.
    * @param pspec a GObject.ParamSpec
    * @param gstring the GLib.String to be parsed
    * @param propertyValue a GObject.Value which must hold boxed values.
    * @returns True if gstring could be parsed and property_value has been set to the resulting Gtk.Requisition. 
    */
  static parseRequisition(pspec: import('../GObject').ParamSpec, gstring: import('../GLib').String, propertyValue: import('../GObject').Value): boolean;
}

