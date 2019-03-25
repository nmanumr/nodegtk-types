/**
  * The GLib.Hook struct represents a single hook function in a GLib.HookList. 
  */
export declare class Hook {
/**
  * Removes one GLib.Hook from a GLib.HookList, marking it inactive and calling GLib.Hook.unref() on it.
  * @param hookList a GLib.HookList
  * @param hook the GLib.Hook to remove 
  */
static destroyLink(hookList: import('../GLib').HookList, hook: import('../GLib').Hook): void;
/**
  * Calls the GLib.HookList finalize_hook function if it exists, and frees the memory allocated for the GLib.Hook.
  * @param hookList a GLib.HookList
  * @param hook the GLib.Hook to free 
  */
static free(hookList: import('../GLib').HookList, hook: import('../GLib').Hook): void;
/**
  * Inserts a GLib.Hook into a GLib.HookList, before a given GLib.Hook.
  * @param hookList a GLib.HookList
  * @param sibling the GLib.Hook to insert the new GLib.Hook before
  * @param hook the GLib.Hook to insert 
  */
static insertBefore(hookList: import('../GLib').HookList, sibling: import('../GLib').Hook | null, hook: import('../GLib').Hook): void;
/**
  * Prepends a GLib.Hook on the start of a GLib.HookList.
  * @param hookList a GLib.HookList
  * @param hook the GLib.Hook to add to the start of hook_list 
  */
static prepend(hookList: import('../GLib').HookList, hook: import('../GLib').Hook): void;
/**
  * Decrements the reference count of a GLib.Hook. If the reference count falls to 0, the GLib.Hook is removed from the GLib.HookList and GLib.Hook.free() is called to free it.
  * @param hookList a GLib.HookList
  * @param hook the GLib.Hook to unref 
  */
static unref(hookList: import('../GLib').HookList, hook: import('../GLib').Hook): void;
/**
  * Compares the ids of two GLib.Hook elements, returning a negative value if the second id is greater than the first.
  * @param sibling a GLib.Hook to compare with self
  * @returns a value <= 0 if the id of sibling is >= the id of self 
  */
compareIds(sibling: import('../GLib').Hook): number;
/**
  * data which is passed to func when this hook is invoked 
  */
data: Object;
/**
  * the default finalize_hook function of a GLib.HookList calls this member of the hook that is being finalized 
  */
destroy: import('../GLib').DestroyNotify;
/**
  * flags which are set for this hook. See GLib.HookFlagMask for predefined flags 
  */
flags: number;
/**
  * the function to call when this hook is invoked. The possible signatures for this function are GLib.HookFunc and GLib.HookCheckFunc 
  */
func: Object;
/**
  * the id of this hook, which is unique within its list 
  */
hookId: number;
/**
  * pointer to the next hook in the list 
  */
next: import('../GLib').Hook;
/**
  * pointer to the previous hook in the list 
  */
prev: import('../GLib').Hook;
/**
  * the reference count of this hook 
  */
refCount: number;
}

