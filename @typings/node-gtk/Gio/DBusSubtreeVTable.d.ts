/**
  * Virtual table for handling subtrees registered with Gio.DBusConnection.register_subtree(). 
  */
export declare class DBusSubtreeVTable {
/**
  * Function for dispatching a remote call on a child node. 
  */
dispatch: import('../Gio').DBusSubtreeDispatchFunc;
/**
  * Function for enumerating child nodes. 
  */
enumerate: Object;
/**
  * Function for introspecting a child node. 
  */
introspect: import('../Gio').DBusSubtreeIntrospectFunc;
/**
  *   
  */
padding: Object;
}

