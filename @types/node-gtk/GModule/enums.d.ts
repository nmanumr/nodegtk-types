/**
  * Flags passed to g_module_open(). Note that these flags are not supported on all platforms. 
  */
export declare enum ModuleFlags {
  /** specifies that symbols are only resolved when needed. The default action is to bind all symbols when the module is loaded. */
  LAZY = 1,
  /** specifies that symbols in the module should not be added to the global name space. The default action on most platforms is to place symbols in the module in the global name space, which may cause conflicts with existing symbols. */
  LOCAL = 2,
  /** mask for all flags. */
  MASK = 3,
}
