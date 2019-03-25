/**
  * Information about nodes in a remote object hierarchy. 
  */
export declare class DBusNodeInfo {
/**
  * Parses xml_data and returns a Gio.DBusNodeInfo representing the data.
  * @param xmlData Valid D-Bus introspection XML.
  * @returns A Gio.DBusNodeInfo structure or None if error is set. Free with Gio.DBusNodeInfo.unref(). 
  */
static newForXml(xmlData: string): import('../Gio').DBusNodeInfo;
/**
  * Appends an XML representation of self (and its children) to string_builder.
  * @param indent Indentation level.
  * @param stringBuilder A GLib.String to to append XML data to. 
  */
generateXml(indent: number, stringBuilder: import('../GLib').String): void;
/**
  * Looks up information about an interface.
  * @param name A D-Bus interface name.
  * @returns A Gio.DBusInterfaceInfo or None if not found. Do not free, it is owned by self. 
  */
lookupInterface(name: string): import('../Gio').DBusInterfaceInfo;
/**
  * If self is statically allocated does nothing. Otherwise increases the reference count.
  * @returns The same self. 
  */
ref(): import('../Gio').DBusNodeInfo;
/**
  * If self is statically allocated, does nothing. Otherwise decreases the reference count of self. When its reference count drops to 0, the memory used is freed. 
  */
unref(): void;
/**
  * A pointer to a None-terminated array of pointers to Gio.DBusAnnotationInfo structures or None if there are no annotations. 
  */
annotations: import('../Gio').DBusAnnotationInfo;
/**
  * A pointer to a None-terminated array of pointers to Gio.DBusInterfaceInfo structures or None if there are no interfaces. 
  */
interfaces: import('../Gio').DBusInterfaceInfo;
/**
  * A pointer to a None-terminated array of pointers to Gio.DBusNodeInfo structures or None if there are no nodes. 
  */
nodes: import('../Gio').DBusNodeInfo;
/**
  * The path of the node or None if omitted. Note that this may be a relative path. See the D-Bus specification for more details. 
  */
path: string;
/**
  * The reference count or -1 if statically allocated. 
  */
refCount: number;
}

