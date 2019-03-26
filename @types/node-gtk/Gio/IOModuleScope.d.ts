/**
  * Represents a scope for loading IO modules. A scope can be used for blocking
duplicate modules, or blocking a module you don’t want to load. 
  */
export declare class IOModuleScope {
  /**
    * Block modules with the given basename from being loaded when this scope is used with Gio.io_modules_scan_all_in_directory_with_scope() or Gio.io_modules_load_all_in_directory_with_scope().
    * @param basename the basename to block 
    */
  block(basename: string): void;
  /**
    * Free a module scope. 
    */
  free(): void;
}

