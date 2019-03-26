/**
  * The GMainContext struct is an opaque data
type representing a set of sources to be handled in a main loop. 
  */
export declare class MainContext {
  /**
    * Returns the global default main context. This is the main context used for main loop functions when a main loop is not explicitly specified, and corresponds to the “main” main loop. See also GLib.MainContext.get_thread_default().
    * @returns the global default main context. 
    */
  static default(): import('../GLib').MainContext;
  /**
    * Gets the thread-default GLib.MainContext for this thread. Asynchronous operations that want to be able to be run in contexts other than the default one should call this method or GLib.MainContext.ref_thread_default() to get a GLib.MainContext to add their GLib.Sources to. (Note that even in single-threaded programs applications may sometimes want to temporarily push a non-default context, so it is not safe to assume that this will always return None if you are running in the default thread.)
    * @returns the thread-default GLib.MainContext, or None if the thread-default context is the global default context. 
    */
  static getThreadDefault(): import('../GLib').MainContext;
  /**
    * Creates a new GLib.MainContext structure.
    * @returns the new GLib.MainContext 
    */
  static new(): import('../GLib').MainContext;
  /**
    * Gets the thread-default GLib.MainContext for this thread, as with GLib.MainContext.get_thread_default(), but also adds a reference to it with GLib.MainContext.ref(). In addition, unlike GLib.MainContext.get_thread_default(), if the thread-default context is the global default context, this will return that GLib.MainContext (with a ref added to it) rather than returning None.
    * @returns the thread-default GLib.MainContext. Unref with GLib.MainContext.unref() when you are done with it. 
    */
  static refThreadDefault(): import('../GLib').MainContext;
  /**
    * Tries to become the owner of the specified context. If some other thread is the owner of the context, returns False immediately. Ownership is properly recursive: the owner can require ownership again and will release ownership when GLib.MainContext.release() is called as many times as GLib.MainContext.acquire().
    * @returns True if the operation succeeded, and this thread is now the owner of self. 
    */
  acquire(): boolean;
  /**
    * Adds a file descriptor to the set of file descriptors polled for this context. This will very seldom be used directly. Instead a typical event source will use GLib.Source.add_unix_fd() instead.
    * @param fd a GLib.PollFD structure holding information about a file descriptor to watch.
    * @param priority the priority for this file descriptor which should be the same as the priority used for GLib.Source.attach() to ensure that the file descriptor is polled whenever the results may be needed. 
    */
  addPoll(fd: import('../GLib').PollFD, priority: number): void;
  /**
    * Passes the results of polling back to the main loop.
    * @param maxPriority the maximum numerical priority of sources to check
    * @param fds array of GLib.PollFD’s that was passed to the last call to GLib.MainContext.query()
    * @returns True if some sources are ready to be dispatched. 
    */
  check(maxPriority: number, fds: import('../GLib').PollFD): boolean;
  /**
    * Dispatches all pending sources. 
    */
  dispatch(): void;
  /**
    * Finds a source with the given source functions and user data.  If multiple sources exist with the same source function and user data, the first one found will be returned.
    * @param funcs the source_funcs passed to GLib.Source.new().
    * @param userData the user data from the callback.
    * @returns the source, if one was found, otherwise None 
    */
  findSourceByFuncsUserData(funcs: import('../GLib').SourceFuncs, userData: Object | null): import('../GLib').Source;
  /**
    * Finds a GLib.Source given a pair of context and ID.
    * @param sourceId the source ID, as returned by GLib.Source.get_id().
    * @returns the GLib.Source 
    */
  findSourceById(sourceId: number): import('../GLib').Source;
  /**
    * Finds a source with the given user data for the callback.  If multiple sources exist with the same user data, the first one found will be returned.
    * @param userData the user_data for the callback.
    * @returns the source, if one was found, otherwise None 
    */
  findSourceByUserData(userData: Object | null): import('../GLib').Source;
  /**
    * Invokes a function in such a way that self is owned during the invocation of function.
    * @param priority the priority at which to run function
    * @param function function to call
    * @param data data to pass to function 
    */
  invokeFull(priority: number, fn: import('../GLib').sourceFunc, data: Object | null): void;
  /**
    * Determines whether this thread holds the (recursive) ownership of this GLib.MainContext. This is useful to know before waiting on another thread that may be blocking to get ownership of self.
    * @returns True if current thread is owner of self. 
    */
  isOwner(): boolean;
  /**
    * Runs a single iteration for the given main loop. This involves checking to see if any event sources are ready to be processed, then if no events sources are ready and may_block is True, waiting for a source to become ready, then dispatching the highest priority events sources that are ready. Otherwise, if may_block is False sources are not waited to become ready, only those highest priority events sources will be dispatched (if any), that are ready at this given moment without further waiting.
    * @param mayBlock whether the call may block.
    * @returns True if events were dispatched. 
    */
  iteration(mayBlock: boolean): boolean;
  /**
    * Checks if any sources have pending events for the given context.
    * @returns True if events are pending. 
    */
  pending(): boolean;
  /**
    * Pops self off the thread-default context stack (verifying that it was on the top of the stack). 
    */
  popThreadDefault(): void;
  /**
    * Prepares to poll sources within a main loop. The resulting information for polling is determined by calling GLib.MainContext.query ().
    * @param priority location to store priority of highest priority source already ready.
    * @returns True if some source is ready to be dispatched prior to polling. 
    */
  prepare(priority: number): boolean;
  /**
    * Acquires self and sets it as the thread-default context for the current thread. This will cause certain asynchronous operations (such as most ‘gio [gio]’-based I/O) which are started in this thread to run under self and deliver their results to its main loop, rather than running under the global default context in the main thread. Note that calling this function changes the context returned by GLib.MainContext.get_thread_default(), not the one returned by GLib.MainContext.default(), so it does not affect the context used by functions like GLib.idle_add(). 
    */
  pushThreadDefault(): void;
  /**
    * Determines information necessary to poll this main loop.
    * @param maxPriority maximum priority source to check
    * @returns the number of records actually stored in fds, or, if more than n_fds records need to be stored, the number of records that need to be stored.  timeout_:location to store timeout to be used in polling fds:location to store GLib.PollFD records that need to be polled. 
    */
  query(maxPriority: number): [number, number, import('../GLib').PollFD[]];
  /**
    * Increases the reference count on a GLib.MainContext object by one.
    * @returns the self that was passed in (since 2.6) 
    */
  ref(): import('../GLib').MainContext;
  /**
    * Releases ownership of a context previously acquired by this thread with GLib.MainContext.acquire(). If the context was acquired multiple times, the ownership will be released only when GLib.MainContext.release() is called as many times as it was acquired. 
    */
  release(): void;
  /**
    * Removes file descriptor from the set of file descriptors to be polled for a particular context.
    * @param fd a GLib.PollFD descriptor previously added with GLib.MainContext.add_poll() 
    */
  removePoll(fd: import('../GLib').PollFD): void;
  /**
    * Decreases the reference count on a GLib.MainContext object by one. If the result is zero, free the context and free all associated memory. 
    */
  unref(): void;
  /**
    * Tries to become the owner of the specified context, as with GLib.MainContext.acquire(). But if another thread is the owner, atomically drop mutex and wait on cond until that owner releases ownership or until cond is signaled, then try again (once) to become the owner.
    * @param cond a condition variable
    * @param mutex a mutex, currently held
    * @returns True if the operation succeeded, and this thread is now the owner of self. 
    */
  wait(cond: import('../GLib').Cond, mutex: import('../GLib').Mutex): boolean;
  /**
    * If self is currently blocking in GLib.MainContext.iteration() waiting for a source to become ready, cause it to stop blocking and return.  Otherwise, cause the next invocation of GLib.MainContext.iteration() to return without blocking. 
    */
  wakeup(): void;
}

