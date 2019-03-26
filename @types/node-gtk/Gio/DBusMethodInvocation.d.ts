import * as GObject from '../GObject';

/**
  * Instances of the Gio.DBusMethodInvocation class are used when
handling D-Bus method calls. It provides a way to asynchronously
return results and errors. 
  */
export declare class DBusMethodInvocation extends GObject.Object {
  /**
    * Gets the Gio.DBusConnection the method was invoked on.
    * @returns A Gio.DBusConnection. Do not free, it is owned by self. 
    */
  getConnection(): import('../Gio').DBusConnection;
  /**
    * Gets the name of the D-Bus interface the method was invoked on.
    * @returns A string. Do not free, it is owned by self. 
    */
  getInterfaceName(): string;
  /**
    * Gets the Gio.DBusMessage for the method invocation. This is useful if you need to use low-level protocol features, such as UNIX file descriptor passing, that cannot be properly expressed in the GLib.Variant API.
    * @returns Gio.DBusMessage. Do not free, it is owned by self. 
    */
  getMessage(): import('../Gio').DBusMessage;
  /**
    * Gets information about the method call, if any.
    * @returns A Gio.DBusMethodInfo or None. Do not free, it is owned by self. 
    */
  getMethodInfo(): import('../Gio').DBusMethodInfo;
  /**
    * Gets the name of the method that was invoked.
    * @returns A string. Do not free, it is owned by self. 
    */
  getMethodName(): string;
  /**
    * Gets the object path the method was invoked on.
    * @returns A string. Do not free, it is owned by self. 
    */
  getObjectPath(): string;
  /**
    * Gets the parameters of the method invocation. If there are no input parameters then this will return a GLib.Variant with 0 children rather than None.
    * @returns A GLib.Variant tuple. Do not unref this because it is owned by self. 
    */
  getParameters(): import('../GLib').Variant;
  /**
    * Gets information about the property that this method call is for, if any.
    * @returns a Gio.DBusPropertyInfo or None 
    */
  getPropertyInfo(): import('../Gio').DBusPropertyInfo;
  /**
    * Gets the bus name that invoked the method.
    * @returns A string. Do not free, it is owned by self. 
    */
  getSender(): string;
  /**
    * Finishes handling a D-Bus method call by returning an error.
    * @param errorName A valid D-Bus error name.
    * @param errorMessage A valid D-Bus error message. 
    */
  returnDbusError(errorName: string, errorMessage: string): void;
  /**
    * Like g_dbus_method_invocation_return_error() but without printf()-style formatting.
    * @param domain A #GQuark for the GLib.Error error domain.
    * @param code The error code.
    * @param message The error message. 
    */
  returnErrorLiteral(domain: number, code: number, message: string): void;
  /**
    * Like g_dbus_method_invocation_return_error() but takes a GLib.Error instead of the error domain, error code and message.
    * @param error A GLib.Error. 
    */
  returnGerror(error: import('../GLib').Error): void;
  /**
    * Finishes handling a D-Bus method call by returning parameters. If the parameters GLib.Variant is floating, it is consumed.
    * @param parameters A GLib.Variant tuple with out parameters for the method or None if not passing any parameters. 
    */
  returnValue(parameters: import('../GLib').Variant | null): void;
  /**
    * Like Gio.DBusMethodInvocation.return_value() but also takes a Gio.UnixFDList.
    * @param parameters A GLib.Variant tuple with out parameters for the method or None if not passing any parameters.
    * @param fdList A Gio.UnixFDList or None. 
    */
  returnValueWithUnixFdList(parameters: import('../GLib').Variant | null, fdList: import('../Gio').UnixFDList | null): void;
}

