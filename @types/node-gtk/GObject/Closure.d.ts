/**
  * A GObject.Closure represents a callback supplied by the programmer. It
will generally comprise a function of some kind and a marshaller
used to call it. It is the responsibility of the marshaller to
convert the arguments for the invocation from GObject.Values into
a suitable form, perform the callback on the converted arguments,
and transform the return value back into a GObject.Value. 
  */
export declare class Closure {
  /**
    * A variant of GObject.Closure.new_simple() which stores object in the data field of the closure and calls GObject.Object.watch_closure() on object and the created closure. This function is mainly useful when implementing new types of closures.
    * @param sizeofClosure the size of the structure to allocate, must be at least sizeof (GClosure)
    * @param object a GObject.Object pointer to store in the data field of the newly allocated GObject.Closure
    * @returns a newly allocated GObject.Closure 
    */
  static newObject(sizeofClosure: number, object: import('../GObject').Object): import('../GObject').Closure;
  /**
    * Allocates a struct of the given size and initializes the initial part as a GObject.Closure. This function is mainly useful when implementing new types of closures.
    * @param sizeofClosure the size of the structure to allocate, must be at least sizeof (GClosure)
    * @param data data to store in the data field of the newly allocated GObject.Closure
    * @returns a floating reference to a new GObject.Closure 
    */
  static newSimple(sizeofClosure: number, data: Object | null): import('../GObject').Closure;
  /**
    * Sets a flag on the closure to indicate that its calling environment has become invalid, and thus causes any future invocations of GObject.Closure.invoke() on this self to be ignored. Also, invalidation notifiers installed on the closure will be called at this point. Note that unless you are holding a reference to the closure yourself, the invalidation notifiers may unref the closure and cause it to be destroyed, so if you need to access the closure after calling GObject.Closure.invalidate(), make sure that you’ve previously called GObject.Closure.ref(). 
    */
  invalidate(): void;
  /**
    * Invokes the closure, i.e. executes the callback represented by the self.
    * @param paramValues an array of GObject.Values holding the arguments on which to invoke the callback of self
    * @param invocationHint a context-dependent invocation hint
    * @returns a GObject.Value to store the return value. May be None if the callback of self doesn’t return a value. 
    */
  invoke(paramValues: import('../GObject').Value, invocationHint: Object | null): import('../GObject').Value;
  /**
    * Increments the reference count on a closure to force it staying alive while the caller holds a pointer to it.
    * @returns The self passed in, for convenience 
    */
  ref(): import('../GObject').Closure;
  /**
    * Takes over the initial ownership of a closure.  Each closure is initially created in a “floating” state, which means that the initial reference count is not owned by any caller. GObject.Closure.sink() checks to see if the object is still floating, and if so, unsets the floating state and decreases the reference count. If the closure is not floating, GObject.Closure.sink() does nothing. The reason for the existence of the floating state is to prevent cumbersome code sequences like: 
    */
  sink(): void;
  /**
    * Decrements the reference count of a closure after it was previously incremented by the same caller. If no other callers are using the closure, then the closure will be destroyed and freed. 
    */
  unref(): void;
}

