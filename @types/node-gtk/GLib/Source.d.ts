/**
  * The GSource struct is an opaque data type
representing an event source. 
  */
export declare class Source {
  /**
    * Creates a new GLib.Source structure. The size is specified to allow creating structures derived from GLib.Source that contain additional data. The size passed in must be at least sizeof (GSource).
    * @param sourceFuncs structure containing functions that implement the sources behavior.
    * @param structSize size of the GLib.Source structure to create.
    * @returns the newly-created GLib.Source. 
    */
  static new(sourceFuncs: import('../GLib').SourceFuncs, structSize: number): import('../GLib').Source;
  /**
    * Removes the source with the given ID from the default main context. You must use GLib.Source.destroy() for sources added to a non-default main context.
    * @param tag the ID of the source to remove.
    * @returns For historical reasons, this function always returns True 
    */
  static remove(tag: number): boolean;
  /**
    * Removes a source from the default main loop context given the source functions and user data. If multiple sources exist with the same source functions and user data, only one will be destroyed.
    * @param funcs The source_funcs passed to GLib.Source.new()
    * @param userData the user data for the callback
    * @returns True if a source was found and removed. 
    */
  static removeByFuncsUserData(funcs: import('../GLib').SourceFuncs, userData: Object | null): boolean;
  /**
    * Removes a source from the default main loop context given the user data for the callback. If multiple sources exist with the same user data, only one will be destroyed.
    * @param userData the user_data for the callback.
    * @returns True if a source was found and removed. 
    */
  static removeByUserData(userData: Object | null): boolean;
  /**
    * Sets the name of a source using its ID.
    * @param tag a GLib.Source ID
    * @param name debug name for the source 
    */
  static setNameById(tag: number, name: string): void;
  /**
    * Adds child_source to self as a “polled” source; when self is added to a GLib.MainContext, child_source will be automatically added with the same priority, when child_source is triggered, it will cause self to dispatch (in addition to calling its own callback), and when self is destroyed, it will destroy child_source as well. (self will also still be dispatched if its own prepare/check functions indicate that it is ready.)
    * @param childSource a second GLib.Source that self should “poll” 
    */
  addChildSource(childSource: import('../GLib').Source): void;
  /**
    * Adds a file descriptor to the set of file descriptors polled for this source. This is usually combined with GLib.Source.new() to add an event source. The event source’s check function will typically test the revents field in the GLib.PollFD struct and return True if events need to be processed.
    * @param fd a GLib.PollFD structure holding information about a file descriptor to watch. 
    */
  addPoll(fd: import('../GLib').PollFD): void;
  /**
    * Monitors fd for the IO events in events.
    * @param fd the fd to monitor
    * @param events an event mask
    * @returns an opaque tag 
    */
  addUnixFd(fd: number, events: import('../GLib').IOCondition): Object;
  /**
    * Adds a GLib.Source to a context so that it will be executed within that context. Remove it by calling GLib.Source.destroy().
    * @param context a GLib.MainContext (if None, the default context will be used)
    * @returns the ID (greater than 0) for the source within the GLib.MainContext. 
    */
  attach(context: import('../GLib').MainContext | null): number;
  /**
    * Removes a source from its GLib.MainContext, if any, and mark it as destroyed.  The source cannot be subsequently added to another context. It is safe to call this on sources which have already been removed from their context. 
    */
  destroy(): void;
  /**
    * Checks whether a source is allowed to be called recursively. see GLib.Source.set_can_recurse().
    * @returns whether recursion is allowed. 
    */
  getCanRecurse(): boolean;
  /**
    * Gets the GLib.MainContext with which the source is associated.
    * @returns the GLib.MainContext with which the source is associated, or None if the context has not yet been added to a source. 
    */
  getContext(): import('../GLib').MainContext | null;
  /**
    * This function ignores self and is otherwise the same as GLib.get_current_time().
    * @returns Time in seconds since the Epoch 
    */
  getCurrentTime(): number;
  /**
    * Returns the numeric ID for a particular source. The ID of a source is a positive integer which is unique within a particular main loop context. The reverse mapping from ID to source is done by GLib.MainContext.find_source_by_id().
    * @returns the ID (greater than 0) for the source 
    */
  getId(): number;
  /**
    * Gets a name for the source, used in debugging and profiling.  The name may be None if it has never been set with GLib.Source.set_name().
    * @returns the name of the source 
    */
  getName(): string;
  /**
    * Gets the priority of a source.
    * @returns the priority of the source 
    */
  getPriority(): number;
  /**
    * Gets the “ready time” of self, as set by GLib.Source.set_ready_time().
    * @returns the monotonic ready time, -1 for “never” 
    */
  getReadyTime(): number;
  /**
    * Gets the time to be used when checking this source. The advantage of calling this function over calling GLib.get_monotonic_time() directly is that when checking multiple sources, GLib can cache a single value instead of having to repeatedly get the system monotonic time.
    * @returns the monotonic time in microseconds 
    */
  getTime(): number;
  /**
    * Returns whether self has been destroyed.
    * @returns True if the source has been destroyed 
    */
  isDestroyed(): boolean;
  /**
    * Updates the event mask to watch for the fd identified by tag.
    * @param tag the tag from GLib.Source.add_unix_fd()
    * @param newEvents the new event mask to watch 
    */
  modifyUnixFd(tag: Object, newEvents: import('../GLib').IOCondition): void;
  /**
    * Queries the events reported for the fd corresponding to tag on self during the last poll.
    * @param tag the tag from GLib.Source.add_unix_fd()
    * @returns the conditions reported on the fd 
    */
  queryUnixFd(tag: Object): import('../GLib').IOCondition;
  /**
    * Increases the reference count on a source by one.
    * @returns self 
    */
  ref(): import('../GLib').Source;
  /**
    * Detaches child_source from self and destroys it.
    * @param childSource a GLib.Source previously passed to GLib.Source.add_child_source(). 
    */
  removeChildSource(childSource: import('../GLib').Source): void;
  /**
    * Removes a file descriptor from the set of file descriptors polled for this source.
    * @param fd a GLib.PollFD structure previously passed to GLib.Source.add_poll(). 
    */
  removePoll(fd: import('../GLib').PollFD): void;
  /**
    * Reverses the effect of a previous call to GLib.Source.add_unix_fd().
    * @param tag the tag from GLib.Source.add_unix_fd() 
    */
  removeUnixFd(tag: Object): void;
  /**
    * Sets the callback function for a source. The callback for a source is called from the source’s dispatch function.
    * @param func a callback function
    * @param data the data to pass to callback function 
    */
  setCallback(func: import('../GLib').sourceFunc, data: Object | null): void;
  /**
    * Sets the callback function storing the data as a refcounted callback “object”. This is used internally. Note that calling GLib.Source.set_callback_indirect() assumes an initial reference count on callback_data, and thus callback_funcs->unref will eventually be called once more than callback_funcs->ref.
    * @param callbackData pointer to callback data “object”
    * @param callbackFuncs functions for reference counting callback_data and getting the callback and data 
    */
  setCallbackIndirect(callbackData: Object | null, callbackFuncs: import('../GLib').SourceCallbackFuncs): void;
  /**
    * Sets whether a source can be called recursively. If can_recurse is True, then while the source is being dispatched then this source will be processed normally. Otherwise, all processing of this source is blocked until the dispatch function returns.
    * @param canRecurse whether recursion is allowed for this source 
    */
  setCanRecurse(canRecurse: boolean): void;
  /**
    * Sets the source functions (can be used to override default implementations) of an unattached source.
    * @param funcs the new GLib.SourceFuncs 
    */
  setFuncs(funcs: import('../GLib').SourceFuncs): void;
  /**
    * Sets a name for the source, used in debugging and profiling. The name defaults to None.
    * @param name debug name for the source 
    */
  setName(name: string): void;
  /**
    * Sets the priority of a source. While the main loop is being run, a source will be dispatched if it is ready to be dispatched and no sources at a higher (numerically smaller) priority are ready to be dispatched.
    * @param priority the new priority. 
    */
  setPriority(priority: number): void;
  /**
    * Sets a GLib.Source to be dispatched when the given monotonic time is reached (or passed).  If the monotonic time is in the past (as it always will be if ready_time is 0) then the source will be dispatched immediately.
    * @param readyTime the monotonic time at which the source will be ready, 0 for “immediately”, -1 for “never” 
    */
  setReadyTime(readyTime: number): void;
  /**
    * Decreases the reference count of a source by one. If the resulting reference count is zero the source and associated memory will be destroyed. 
    */
  unref(): void;
}

