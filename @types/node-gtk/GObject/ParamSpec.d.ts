/**
  * GObject.ParamSpec is an object structure that encapsulates the metadata
required to specify parameters, such as e.g. GObject.Object properties. 
  */
export declare abstract class ParamSpec {
  /**
    * Get the short description of a GObject.ParamSpec.
    * @returns the short description of self. 
    */
  getBlurb(): string;
  /**
    * Gets the default value of self as a pointer to a GObject.Value.
    * @returns a pointer to a GObject.Value which must not be modified 
    */
  getDefaultValue(): import('../GObject').Value;
  /**
    * Get the name of a GObject.ParamSpec.
    * @returns the name of self. 
    */
  getName(): string;
  /**
    * Gets the GQuark for the name.
    * @returns the GQuark for self->name. 
    */
  getNameQuark(): number;
  /**
    * Get the nickname of a GObject.ParamSpec.
    * @returns the nickname of self. 
    */
  getNick(): string;
  /**
    * Gets back user data pointers stored via GObject.ParamSpec.set_qdata().
    * @param quark a #GQuark, naming the user data pointer
    * @returns the user data pointer set, or None 
    */
  getQdata(quark: number): Object | null;
  /**
    * If the paramspec redirects operations to another paramspec, returns that paramspec. Redirect is used typically for providing a new implementation of a property in a derived type while preserving all the properties from the parent type. Redirection is established by creating a property of type GObject.ParamSpecOverride. See GObject.ObjectClass.override_property() for an example of the use of this capability.
    * @returns paramspec to which requests on this paramspec should be redirected, or None if none. 
    */
  getRedirectTarget(): import('../GObject').ParamSpec;
  /**
    * Sets an opaque, named pointer on a GObject.ParamSpec. The name is specified through a #GQuark (retrieved e.g. via GLib.quark_from_static_string()), and the pointer can be gotten back from the self with GObject.ParamSpec.get_qdata().  Setting a previously set user data pointer, overrides (frees) the old pointer set, using None as pointer essentially removes the data stored.
    * @param quark a #GQuark, naming the user data pointer
    * @param data an opaque user data pointer 
    */
  setQdata(quark: number, data: Object | null): void;
  /**
    * The initial reference count of a newly created GObject.ParamSpec is 1, even though no one has explicitly called g_param_spec_ref() on it yet. So the initial reference count is flagged as “floating”, until someone calls g_param_spec_ref (pspec); g_param_spec_sink (pspec); in sequence on it, taking over the initial reference count (thus ending up with a self that has a reference count of 1 still, but is not flagged “floating” anymore). 
    */
  sink(): void;
  /**
    * Gets back user data pointers stored via GObject.ParamSpec.set_qdata() and removes the data from self without invoking its destroy() function (if any was set).  Usually, calling this function is only required to update user data pointers with a destroy notifier.
    * @param quark a #GQuark, naming the user data pointer
    * @returns the user data pointer set, or None 
    */
  stealQdata(quark: number): Object | null;
}

