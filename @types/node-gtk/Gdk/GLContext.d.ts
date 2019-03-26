import * as GObject from '../GObject';
export declare interface GLContext extends GObject.Object { }

/**
  * Gdk.GLContext is an object representing the platform-specific
OpenGL drawing context. 
  */
export declare abstract class GLContext {
  /**
    * Clears the current Gdk.GLContext. 
    */
  static clearCurrent(): void;
  /**
    * Retrieves the current Gdk.GLContext.
    * @returns the current Gdk.GLContext, or None 
    */
  static getCurrent(): import('../Gdk').GLContext | null;
  /**
    * Retrieves the value set using Gdk.GLContext.set_debug_enabled().
    * @returns True if debugging is enabled 
    */
  getDebugEnabled(): boolean;
  /**
    * Retrieves the Gdk.Display the self is created for
    * @returns a Gdk.Display or None 
    */
  getDisplay(): import('../Gdk').Display | null;
  /**
    * Retrieves the value set using Gdk.GLContext.set_forward_compatible().
    * @returns True if the context should be forward compatible 
    */
  getForwardCompatible(): boolean;
  /**
    * Retrieves the major and minor version requested by calling Gdk.GLContext.set_required_version().
    * @returns major:return location for the major version to request minor:return location for the minor version to request 
    */
  getRequiredVersion(): [number, number];
  /**
    * Retrieves the Gdk.GLContext that this self share data with.
    * @returns a Gdk.GLContext or None 
    */
  getSharedContext(): import('../Gdk').GLContext | null;
  /**
    * Checks whether the self is using an OpenGL or OpenGL ES profile.
    * @returns True if the Gdk.GLContext is using an OpenGL ES profile 
    */
  getUseEs(): boolean;
  /**
    * Retrieves the OpenGL version of the self.
    * @returns major:return location for the major version minor:return location for the minor version 
    */
  getVersion(): [number, number];
  /**
    * Retrieves the Gdk.Window used by the self.
    * @returns a Gdk.Window or None 
    */
  getWindow(): import('../Gdk').Window | null;
  /**
    * Whether the Gdk.GLContext is in legacy mode or not.
    * @returns True if the GL context is in legacy mode 
    */
  isLegacy(): boolean;
  /**
    * Makes the self the current one. 
    */
  makeCurrent(): void;
  /**
    * Realizes the given Gdk.GLContext.
    * @returns True if the context is realized 
    */
  realize(): boolean;
  /**
    * Sets whether the Gdk.GLContext should perform extra validations and run time checking. This is useful during development, but has additional overhead.
    * @param enabled whether to enable debugging in the context 
    */
  setDebugEnabled(enabled: boolean): void;
  /**
    * Sets whether the Gdk.GLContext should be forward compatible.
    * @param compatible whether the context should be forward compatible 
    */
  setForwardCompatible(compatible: boolean): void;
  /**
    * Sets the major and minor version of OpenGL to request.
    * @param major the major version to request
    * @param minor the minor version to request 
    */
  setRequiredVersion(major: number, minor: number): void;
  /**
    * Requests that GDK create a OpenGL ES context instead of an OpenGL one, if the platform and windowing system allows it.
    * @param useEs whether the context should use OpenGL ES instead of OpenGL, or -1 to allow auto-detection 
    */
  setUseEs(useEs: number): void;
  /**
    * The GDK display used to create the GL context 
    */
  display: import('../Gdk').Display;
  /**
    * The GL context this context shares data with 
    */
  sharedContext: import('../Gdk').GLContext;
  /**
    * The GDK window bound to the GL context 
    */
  window: import('../Gdk').Window;
}

