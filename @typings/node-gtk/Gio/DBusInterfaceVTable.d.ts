/**
  * Virtual table for handling properties and method calls for a D-Bus
interface. 
  */
export declare class DBusInterfaceVTable {
/**
  * Function for getting a property. 
  */
getProperty: import('../Gio').DBusInterfaceGetPropertyFunc;
/**
  * Function for handling incoming method calls. 
  */
methodCall: import('../Gio').DBusInterfaceMethodCallFunc;
/**
  *   
  */
padding: Object;
/**
  * Function for setting a property. 
  */
setProperty: import('../Gio').DBusInterfaceSetPropertyFunc;
}

