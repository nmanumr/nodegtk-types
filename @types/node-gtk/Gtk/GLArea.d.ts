import * as Gtk from '../Gtk';
export declare interface GLArea extends Gtk.Widget { }

/**
  * Gtk.GLArea is a widget that allows drawing with OpenGL. 
  */
export declare class GLArea {
  /**
    * Creates a new Gtk.GLArea widget.
    * @returns a new Gtk.GLArea 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Ensures that the self framebuffer object is made the current draw and read target, and that all the required buffers for the self are created and bound to the frambuffer. 
    */
  attachBuffers(): void;
  /**
    * Returns whether the area is in auto render mode or not.
    * @returns True if the self is auto rendering, False otherwise 
    */
  getAutoRender(): boolean;
  /**
    * Retrieves the Gdk.GLContext used by self.
    * @returns the Gdk.GLContext 
    */
  getContext(): import('../Gdk').GLContext;
  /**
    * Gets the current error set on the self.
    * @returns the GLib.Error or None 
    */
  getError(): import('../GLib').Error | null;
  /**
    * Returns whether the area has an alpha component.
    * @returns True if the self has an alpha component, False otherwise 
    */
  getHasAlpha(): boolean;
  /**
    * Returns whether the area has a depth buffer.
    * @returns True if the self has a depth buffer, False otherwise 
    */
  getHasDepthBuffer(): boolean;
  /**
    * Returns whether the area has a stencil buffer.
    * @returns True if the self has a stencil buffer, False otherwise 
    */
  getHasStencilBuffer(): boolean;
  /**
    * Retrieves the required version of OpenGL set using Gtk.GLArea.set_required_version().
    * @returns major:return location for the required major version minor:return location for the required minor version 
    */
  getRequiredVersion(): [number, number];
  /**
    * Retrieves the value set by Gtk.GLArea.set_use_es().
    * @returns True if the Gtk.GLArea should create an OpenGL ES context and False otherwise 
    */
  getUseEs(): boolean;
  /**
    * Ensures that the Gdk.GLContext used by self is associated with the Gtk.GLArea. 
    */
  makeCurrent(): void;
  /**
    * Marks the currently rendered data (if any) as invalid, and queues a redraw of the widget, ensuring that the Gtk.GLArea ::render signal is emitted during the draw. 
    */
  queueRender(): void;
  /**
    * If auto_render is True the Gtk.GLArea ::render signal will be emitted every time the widget draws. This is the default and is useful if drawing the widget is faster.
    * @param autoRender a boolean 
    */
  setAutoRender(autoRender: boolean): void;
  /**
    * Sets an error on the area which will be shown instead of the GL rendering. This is useful in the Gtk.GLArea ::create-context signal if GL context creation fails.
    * @param error a new GLib.Error, or None to unset the error 
    */
  setError(error: import('../GLib').Error | null): void;
  /**
    * If has_alpha is True the buffer allocated by the widget will have an alpha channel component, and when rendering to the window the result will be composited over whatever is below the widget.
    * @param hasAlpha True to add an alpha component 
    */
  setHasAlpha(hasAlpha: boolean): void;
  /**
    * If has_depth_buffer is True the widget will allocate and enable a depth buffer for the target framebuffer. Otherwise there will be none.
    * @param hasDepthBuffer True to add a depth buffer 
    */
  setHasDepthBuffer(hasDepthBuffer: boolean): void;
  /**
    * If has_stencil_buffer is True the widget will allocate and enable a stencil buffer for the target framebuffer. Otherwise there will be none.
    * @param hasStencilBuffer True to add a stencil buffer 
    */
  setHasStencilBuffer(hasStencilBuffer: boolean): void;
  /**
    * Sets the required version of OpenGL to be used when creating the context for the widget.
    * @param major the major version
    * @param minor the minor version 
    */
  setRequiredVersion(major: number, minor: number): void;
  /**
    * Sets whether the self should create an OpenGL or an OpenGL ES context.
    * @param useEs whether to use OpenGL or OpenGL ES 
    */
  setUseEs(useEs: boolean): void;
  /**
    * Whether the Gtk.GLArea renders on each redraw 
    */
  autoRender: boolean;
  /**
    * The GL context 
    */
  readonly context: import('../Gdk').GLContext;
  /**
    * Whether the color buffer has an alpha component 
    */
  hasAlpha: boolean;
  /**
    * Whether a depth buffer is allocated 
    */
  hasDepthBuffer: boolean;
  /**
    * Whether a stencil buffer is allocated 
    */
  hasStencilBuffer: boolean;
  /**
    * Whether the context uses OpenGL or OpenGL ES 
    */
  useEs: boolean;
}

