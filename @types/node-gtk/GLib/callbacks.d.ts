/**
  * Prototype of a #GChildWatchSource callback, called when a child process has exited.  To interpret status, see the documentation for GLib.spawn_check_exit_status().
  * @param pid the process id of the child process
  * @param status Status information about the child process, encoded in a platform-specific manner
  * @param userData user data passed to GLib.child_watch_add() 
  */
export declare type childWatchFunc = (pid: number, status: number, userData: Object | null) => void;
/**
  * Specifies the type of function passed to g_clear_handle_id(). The implementation is expected to free the resource identified by handle_id; for instance, if handle_id is a GLib.Source ID, GLib.Source.remove() can be used.
  * @param handleId the handle ID to clear 
  */
export declare type clearHandleFunc = (handleId: number) => void;
/**
  * Specifies the type of a comparison function used to compare two values.  The function should return a negative integer if the first value comes before the second, 0 if they are equal, or a positive integer if the first value comes after the second.
  * @param a a value
  * @param b a value to compare with
  * @param userData user data
  * @returns negative value if a < b; zero if a = b; positive value if a > b 
  */
export declare type compareDataFunc = (a: Object | null, b: Object | null, userData: Object | null) => number;
/**
  * Specifies the type of a comparison function used to compare two values.  The function should return a negative integer if the first value comes before the second, 0 if they are equal, or a positive integer if the first value comes after the second.
  * @param a a value
  * @param b a value to compare with
  * @returns negative value if a < b; zero if a = b; positive value if a > b 
  */
export declare type compareFunc = (a: Object | null, b: Object | null) => number;
/**
  * A function of this signature is used to copy the node data when doing a deep-copy of a tree.
  * @param src A pointer to the data which should be copied
  * @param data Additional data
  * @returns A pointer to the copy 
  */
export declare type copyFunc = (src: Object, data: Object | null) => Object;
/**
  * Specifies the type of function passed to GLib.dataset_foreach(). It is called with each #GQuark id and associated data element, together with the user_data parameter supplied to GLib.dataset_foreach().
  * @param keyId the #GQuark id to identifying the data element.
  * @param data the data element.
  * @param userData user data passed to GLib.dataset_foreach(). 
  */
export declare type dataForeachFunc = (keyId: number, data: Object | null, userData: Object | null) => void;
/**
  * Specifies the type of function which is called when a data element is destroyed. It is passed the pointer to the data element and should free any memory and resources allocated for it.
  * @param data the data element. 
  */
export declare type destroyNotify = (data: Object | null) => void;
/**
  * The type of functions that are used to ‘duplicate’ an object. What this means depends on the context, it could just be incrementing the reference count, if data is a ref-counted object.
  * @param data the data to duplicate
  * @param userData user data that was specified in g_datalist_id_dup_data()
  * @returns a duplicate of data 
  */
export declare type duplicateFunc = (data: Object | null, userData: Object | null) => Object | null;
/**
  * Specifies the type of a function used to test two values for equality. The function should return True if both values are equal and False otherwise.
  * @param a a value
  * @param b a value to compare with
  * @returns True if a = b; False otherwise 
  */
export declare type equalFunc = (a: Object | null, b: Object | null) => boolean;
/**
  * Declares a type of function which takes an arbitrary data pointer argument and has no return value. It is not currently used in GLib or GTK+.
  * @param data a data pointer 
  */
export declare type freeFunc = (data: Object | null) => void;
/**
  * Specifies the type of functions passed to g_list_foreach() and g_slist_foreach().
  * @param data the element’s data
  * @param userData user data passed to g_list_foreach() or g_slist_foreach() 
  */
export declare type func = (data: Object | null, userData: Object | null) => void;
/**
  * Specifies the type of the function passed to g_hash_table_foreach(). It is called with each key/value pair, together with the user_data parameter which is passed to g_hash_table_foreach().
  * @param key a key
  * @param value the value corresponding to the key
  * @param userData user data passed to g_hash_table_foreach() 
  */
export declare type hFunc = (key: Object | null, value: Object | null, userData: Object | null) => void;
/**
  * Specifies the type of the function passed to g_hash_table_foreach_remove(). It is called with each key/value pair, together with the user_data parameter passed to g_hash_table_foreach_remove(). It should return True if the key/value pair should be removed from the GLib.HashTable.
  * @param key a key
  * @param value the value associated with the key
  * @param userData user data passed to GLib.HashTable.remove()
  * @returns True if the key/value pair should be removed from the GLib.HashTable 
  */
export declare type hrFunc = (key: Object | null, value: Object | null, userData: Object | null) => boolean;
/**
  * Specifies the type of the hash function which is passed to g_hash_table_new() when a GLib.HashTable is created.
  * @param key a key
  * @returns the hash value corresponding to the key 
  */
export declare type hashFunc = (key: Object | null) => number;
/**
  * Defines the type of a hook function that can be invoked by GLib.HookList.invoke_check().
  * @param data the data field of the GLib.Hook is passed to the hook function here
  * @returns False if the GLib.Hook should be destroyed 
  */
export declare type hookCheckFunc = (data: Object | null) => boolean;
/**
  * Defines the type of function used by g_hook_list_marshal_check().
  * @param hook a GLib.Hook
  * @param marshalData user data
  * @returns False if hook should be destroyed 
  */
export declare type hookCheckMarshaller = (hook: import('../GLib').Hook, marshalData: Object | null) => boolean;
/**
  * Defines the type of function used to compare GLib.Hook elements in g_hook_insert_sorted().
  * @param newHook the GLib.Hook being inserted
  * @param sibling the GLib.Hook to compare with new_hook
  * @returns a value <= 0 if new_hook should be before sibling 
  */
export declare type hookCompareFunc = (newHook: import('../GLib').Hook, sibling: import('../GLib').Hook) => number;
/**
  * Defines the type of function to be called when a hook in a list of hooks gets finalized.
  * @param hookList a GLib.HookList
  * @param hook the hook in hook_list that gets finalized 
  */
export declare type hookFinalizeFunc = (hookList: import('../GLib').HookList, hook: import('../GLib').Hook) => void;
/**
  * Defines the type of the function passed to g_hook_find().
  * @param hook a GLib.Hook
  * @param data user data passed to g_hook_find_func()
  * @returns True if the required GLib.Hook has been found 
  */
export declare type hookFindFunc = (hook: import('../GLib').Hook, data: Object | null) => boolean;
/**
  * Defines the type of a hook function that can be invoked by GLib.HookList.invoke().
  * @param data the data field of the GLib.Hook is passed to the hook function here 
  */
export declare type hookFunc = (data: Object | null) => void;
/**
  * Defines the type of function used by g_hook_list_marshal().
  * @param hook a GLib.Hook
  * @param marshalData user data 
  */
export declare type hookMarshaller = (hook: import('../GLib').Hook, marshalData: Object | null) => void;
/**
  * Specifies the type of function passed to GLib.io_add_watch() or GLib.io_add_watch(), which is called when the requested condition on a GLib.IOChannel is satisfied.
  * @param source the GLib.IOChannel event source
  * @param condition the condition which has been satisfied
  * @param data user data set in GLib.io_add_watch() or GLib.io_add_watch()
  * @returns the function should return False if the event source should be removed 
  */
export declare type ioFunc = (source: import('../GLib').IOChannel, condition: import('../GLib').IOCondition, data: Object | null) => boolean;
/**
  * Specifies the prototype of log handler functions.
  * @param logDomain the log domain of the message
  * @param logLevel the log level of the message (including the fatal and recursion flags)
  * @param message the message to process
  * @param userData user data, set in GLib.log_set_handler() 
  */
export declare type logFunc = (logDomain: string, logLevel: import('../GLib').LogLevelFlags, message: string, userData: Object | null) => void;
/**
  * Writer function for log entries. A log entry is a collection of one or more GLib.LogFields, using the standard field names from journal specification. See g_log_structured() for more information.
  * @param logLevel log level of the message
  * @param fields fields forming the message
  * @param userData user data passed to GLib.log_set_writer_func()
  * @returns GLib.LogWriterOutput.HANDLED if the log entry was handled successfully; GLib.LogWriterOutput.UNHANDLED otherwise 
  */
export declare type logWriterFunc = (logLevel: import('../GLib').LogLevelFlags, fields: import('../GLib').LogField, userData: Object | null) => import('../GLib').LogWriterOutput;
/**
  * Specifies the type of function passed to g_node_children_foreach(). The function is called with each child node, together with the user data passed to g_node_children_foreach().
  * @param node a GLib.Node.
  * @param data user data passed to g_node_children_foreach(). 
  */
export declare type nodeForeachFunc = (node: import('../GLib').Node, data: Object | null) => void;
/**
  * Specifies the type of function passed to g_node_traverse(). The function is called with each of the nodes visited, together with the user data passed to g_node_traverse(). If the function returns True, then the traversal is stopped.
  * @param node a GLib.Node.
  * @param data user data passed to g_node_traverse().
  * @returns True to stop the traversal. 
  */
export declare type nodeTraverseFunc = (node: import('../GLib').Node, data: Object | null) => boolean;
/**
  * The type of function to be passed as callback for GLib.OptionArg.CALLBACK options.
  * @param optionName The name of the option being parsed. This will be either a single dash followed by a single letter (for a short name) or two dashes followed by a long option name.
  * @param value The value to be parsed.
  * @param data User data added to the GLib.OptionGroup containing the option when it was created with GLib.OptionGroup.new()
  * @returns True if the option was successfully parsed, False if an error occurred, in which case error should be set with g_set_error() 
  */
export declare type optionArgFunc = (optionName: string, value: string, data: Object | null) => boolean;
/**
  * The type of function to be used as callback when a parse error occurs.
  * @param context The active GLib.OptionContext
  * @param group The group to which the function belongs
  * @param data User data added to the GLib.OptionGroup containing the option when it was created with GLib.OptionGroup.new() 
  */
export declare type optionErrorFunc = (context: import('../GLib').OptionContext, group: import('../GLib').OptionGroup, data: Object | null) => void;
/**
  * The type of function that can be called before and after parsing.
  * @param context The active GLib.OptionContext
  * @param group The group to which the function belongs
  * @param data User data added to the GLib.OptionGroup containing the option when it was created with GLib.OptionGroup.new()
  * @returns True if the function completed successfully, False if an error occurred, in which case error should be set with g_set_error() 
  */
export declare type optionParseFunc = (context: import('../GLib').OptionContext, group: import('../GLib').OptionGroup, data: Object | null) => boolean;
/**
  * Specifies the type of function passed to g_main_context_set_poll_func(). The semantics of the function should match those of the poll() system call.
  * @param ufds an array of GLib.PollFD elements
  * @param nfsd the number of elements in ufds
  * @param timeout the maximum time to wait for an event of the file descriptors. A negative value indicates an infinite timeout.
  * @returns the number of GLib.PollFD elements which have events or errors reported, or -1 if an error occurred. 
  */
export declare type pollFunc = (ufds: import('../GLib').PollFD, nfsd: number, timeout: number) => number;
/**
  * Specifies the type of the print handler functions. These are called with the complete formatted string to output.
  * @param string the message to output 
  */
export declare type printFunc = (string: string) => void;
/**
  * Specifies the type of the function passed to g_regex_replace_eval(). It is called for each occurrence of the pattern in the string passed to g_regex_replace_eval(), and it should append the replacement to result.
  * @param matchInfo the GLib.MatchInfo generated by the match. Use GLib.MatchInfo.get_regex() and GLib.MatchInfo.get_string() if you need the GLib.Regex or the matched string.
  * @param result a GLib.String containing the new string
  * @param userData user data passed to g_regex_replace_eval()
  * @returns False to continue the replacement process, True to stop it 
  */
export declare type regexEvalCallback = (matchInfo: import('../GLib').MatchInfo, result: import('../GLib').String, userData: Object | null) => boolean;
/**
  * Specifies the type of the message handler function.
  * @param scanner a GLib.Scanner
  * @param message the message
  * @param error True if the message signals an error, False if it signals a warning. 
  */
export declare type scannerMsgFunc = (scanner: import('../GLib').Scanner, message: string, error: boolean) => void;
/**
  * A GLib.SequenceIterCompareFunc is a function used to compare iterators. It must return zero if the iterators compare equal, a negative value if a comes before b, and a positive value if b comes before a.
  * @param a a GLib.SequenceIter
  * @param b a GLib.SequenceIter
  * @param data user data
  * @returns zero if the iterators are equal, a negative value if a comes before b, and a positive value if b comes before a. 
  */
export declare type sequenceIterCompareFunc = (a: import('../GLib').SequenceIter, b: import('../GLib').SequenceIter, data: Object | null) => number;
/**
  * This is just a placeholder for #GClosureMarshal, which cannot be used here for dependency reasons. 
  */
export declare type sourceDummyMarshal = () => void;
/**
  * Specifies the type of function passed to GLib.timeout_add(), GLib.timeout_add(), GLib.idle_add(), and GLib.idle_add().
  * @param userData data passed to the function, set when the source was created with one of the above functions
  * @returns False if the source should be removed. GLib.SOURCE_CONTINUE and GLib.SOURCE_REMOVE are more memorable names for the return value. 
  */
export declare type sourceFunc = (userData: Object | null) => boolean;
/**
  * Specifies the type of the setup function passed to GLib.spawn_async(), GLib.spawn_sync() and GLib.spawn_async_with_pipes(), which can, in very limited ways, be used to affect the child’s execution.
  * @param userData user data to pass to the function. 
  */
export declare type spawnChildSetupFunc = (userData: Object | null) => void;
/**
  * The type used for test case functions that take an extra pointer argument.
  * @param userData the data provided when registering the test 
  */
export declare type testDataFunc = (userData: Object | null) => void;
/**
  * The type used for functions that operate on test fixtures.  This is used for the fixture setup and teardown functions as well as for the testcases themselves.
  * @param fixture the test fixture
  * @param userData the data provided when registering the test 
  */
export declare type testFixtureFunc = (fixture: Object, userData: Object | null) => void;
/**
  * The type used for test case functions. 
  */
export declare type testFunc = () => void;
/**
  * Specifies the prototype of fatal log handler functions.
  * @param logDomain the log domain of the message
  * @param logLevel the log level of the message (including the fatal and recursion flags)
  * @param message the message to process
  * @param userData user data, set in g_test_log_set_fatal_handler()
  * @returns True if the program should abort, False otherwise 
  */
export declare type testLogFatalFunc = (logDomain: string, logLevel: import('../GLib').LogLevelFlags, message: string, userData: Object | null) => boolean;
/**
  * Specifies the type of the func functions passed to g_thread_new() or g_thread_try_new().
  * @param data data passed to the thread
  * @returns the return value of the thread 
  */
export declare type threadFunc = (data: Object | null) => Object | null;
/**
  * The type of functions which are used to translate user-visible strings, for –help output.
  * @param str the untranslated string
  * @param data user data specified when installing the function, e.g. in GLib.OptionGroup.set_translate_func()
  * @returns a translation of the string for the current locale. The returned string is owned by GLib and must not be freed. 
  */
export declare type translateFunc = (str: string, data: Object | null) => string;
/**
  * Specifies the type of function passed to g_tree_traverse(). It is passed the key and value of each node, together with the user_data parameter passed to g_tree_traverse(). If the function returns True, the traversal is stopped.
  * @param key a key of a GLib.Tree node
  * @param value the value corresponding to the key
  * @param data user data passed to g_tree_traverse()
  * @returns True to stop the traversal 
  */
export declare type traverseFunc = (key: Object | null, value: Object | null, data: Object | null) => boolean;
/**
  * The type of functions to be called when a UNIX fd watch source triggers.
  * @param fd the fd that triggered the event
  * @param condition the IO conditions reported on fd
  * @param userData user data passed to g_unix_fd_add()
  * @returns False if the source should be removed 
  */
export declare type unixFdSourceFunc = (fd: number, condition: import('../GLib').IOCondition, userData: Object | null) => boolean;
/**
  * Declares a type of function which takes no arguments and has no return value. It is used to specify the type function passed to GLib.atexit(). 
  */
export declare type voidFunc = () => void;
