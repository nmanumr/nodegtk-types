/**
  * A Gio.DBusObjectSkeleton instance is essentially a group of D-Bus
interfaces. The set of exported interfaces on the object may be
dynamic and change at runtime. 
  */
export declare class DBusObjectSkeleton extends import('../GObject').Object, import('../Gio').DBusObject{
/**
  * Creates a new Gio.DBusObjectSkeleton.
  * @param objectPath An object path.
  * @returns A Gio.DBusObjectSkeleton. Free with GObject.Object.unref(). 
  */
static new(objectPath: string): import('../Gio').DBusObjectSkeleton;
/**
  * Adds interface_ to self.
  * @param interface A Gio.DBusInterfaceSkeleton. 
  */
addInterface(interface: import('../Gio').DBusInterfaceSkeleton): void;
/**
  * This method simply calls Gio.DBusInterfaceSkeleton.flush() on all interfaces belonging to self. See that method for when flushing is useful. 
  */
flush(): void;
/**
  * Removes interface_ from self.
  * @param interface A Gio.DBusInterfaceSkeleton. 
  */
removeInterface(interface: import('../Gio').DBusInterfaceSkeleton): void;
/**
  * Removes the Gio.DBusInterface with interface_name from self.
  * @param interfaceName A D-Bus interface name. 
  */
removeInterfaceByName(interfaceName: string): void;
/**
  * Sets the object path for self.
  * @param objectPath A valid D-Bus object path. 
  */
setObjectPath(objectPath: string): void;
/**
  * The object path where the object is exported 
  */
gObjectPath: string;
/**
  *   
  */
parentInstance: import('../GObject').Object;
}

