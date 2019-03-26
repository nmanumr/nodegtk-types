import * as GObject from '../GObject';
export declare interface Resolver extends GObject.Object { }

/**
  * Gio.Resolver provides cancellable synchronous and asynchronous DNS
resolution, for hostnames (Gio.Resolver.lookup_by_address(),
Gio.Resolver.lookup_by_name() and their async variants) and SRV
(service) records (Gio.Resolver.lookup_service()). 
  */
export declare abstract class Resolver {
  /**
    * Gets the default Gio.Resolver. You should unref it when you are done with it. Gio.Resolver may use its reference count as a hint about how many threads it should allocate for concurrent DNS resolutions.
    * @returns the default Gio.Resolver. 
    */
  static getDefault(): import('../Gio').Resolver;
  /**
    * Synchronously reverse-resolves address to determine its associated hostname.
    * @param address the address to reverse-resolve
    * @param cancellable a Gio.Cancellable, or None
    * @returns a hostname (either ASCII-only, or in ASCII-encoded form), or None on error. 
    */
  lookupByAddress(address: import('../Gio').InetAddress, cancellable: import('../Gio').Cancellable | null): string;
  /**
    * Begins asynchronously reverse-resolving address to determine its associated hostname, and eventually calls callback, which must call Gio.Resolver.lookup_by_address_finish() to get the final result.
    * @param address the address to reverse-resolve
    * @param cancellable a Gio.Cancellable, or None
    * @param callback callback to call after resolution completes
    * @param userData data for callback 
    */
  lookupByAddressAsync(address: import('../Gio').InetAddress, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Retrieves the result of a previous call to Gio.Resolver.lookup_by_address_async().
    * @param result the result passed to your Gio.asyncReadyCallback
    * @returns a hostname (either ASCII-only, or in ASCII-encoded form), or None on error. 
    */
  lookupByAddressFinish(result: import('../Gio').AsyncResult): string;
  /**
    * Synchronously resolves hostname to determine its associated IP address(es). hostname may be an ASCII-only or UTF-8 hostname, or the textual form of an IP address (in which case this just becomes a wrapper around Gio.InetAddress.new_from_string()).
    * @param hostname the hostname to look up
    * @param cancellable a Gio.Cancellable, or None
    * @returns a non-empty GLib.List of Gio.InetAddress, or None on error. You must unref each of the addresses and free the list when you are done with it. (You can use g_resolver_free_addresses() to do this.) 
    */
  lookupByName(hostname: string, cancellable: import('../Gio').Cancellable | null): import('../Gio').InetAddress[];
  /**
    * Begins asynchronously resolving hostname to determine its associated IP address(es), and eventually calls callback, which must call Gio.Resolver.lookup_by_name_finish() to get the result. See Gio.Resolver.lookup_by_name() for more details.
    * @param hostname the hostname to look up the address of
    * @param cancellable a Gio.Cancellable, or None
    * @param callback callback to call after resolution completes
    * @param userData data for callback 
    */
  lookupByNameAsync(hostname: string, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Retrieves the result of a call to Gio.Resolver.lookup_by_name_async().
    * @param result the result passed to your Gio.asyncReadyCallback
    * @returns a GLib.List of Gio.InetAddress, or None on error. See Gio.Resolver.lookup_by_name() for more details. 
    */
  lookupByNameFinish(result: import('../Gio').AsyncResult): import('../Gio').InetAddress[];
  /**
    * Synchronously performs a DNS record lookup for the given rrname and returns a list of records as GLib.Variant tuples. See Gio.ResolverRecordType for information on what the records contain for each record_type.
    * @param rrname the DNS name to lookup the record for
    * @param recordType the type of DNS record to lookup
    * @param cancellable a Gio.Cancellable, or None
    * @returns a non-empty GLib.List of GLib.Variant, or None on error. You must free each of the records and the list when you are done with it. (You can use g_list_free_full() with GLib.Variant.unref() to do this.) 
    */
  lookupRecords(rrname: string, recordType: import('../Gio').ResolverRecordType, cancellable: import('../Gio').Cancellable | null): import('../GLib').Variant[];
  /**
    * Begins asynchronously performing a DNS lookup for the given rrname, and eventually calls callback, which must call Gio.Resolver.lookup_records_finish() to get the final result. See Gio.Resolver.lookup_records() for more details.
    * @param rrname the DNS name to lookup the record for
    * @param recordType the type of DNS record to lookup
    * @param cancellable a Gio.Cancellable, or None
    * @param callback callback to call after resolution completes
    * @param userData data for callback 
    */
  lookupRecordsAsync(rrname: string, recordType: import('../Gio').ResolverRecordType, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Retrieves the result of a previous call to Gio.Resolver.lookup_records_async(). Returns a non-empty list of records as GLib.Variant tuples. See Gio.ResolverRecordType for information on what the records contain.
    * @param result the result passed to your Gio.asyncReadyCallback
    * @returns a non-empty GLib.List of GLib.Variant, or None on error. You must free each of the records and the list when you are done with it. (You can use g_list_free_full() with GLib.Variant.unref() to do this.) 
    */
  lookupRecordsFinish(result: import('../Gio').AsyncResult): import('../GLib').Variant[];
  /**
    * Synchronously performs a DNS SRV lookup for the given service and protocol in the given domain and returns an array of Gio.SrvTarget. domain may be an ASCII-only or UTF-8 hostname. Note also that the service and protocol arguments do not include the leading underscore that appears in the actual DNS entry.
    * @param service the service type to look up (eg, “ldap”)
    * @param protocol the networking protocol to use for service (eg, “tcp”)
    * @param domain the DNS domain to look up the service in
    * @param cancellable a Gio.Cancellable, or None
    * @returns a non-empty GLib.List of Gio.SrvTarget, or None on error. You must free each of the targets and the list when you are done with it. (You can use g_resolver_free_targets() to do this.) 
    */
  lookupService(service: string, protocol: string, domain: string, cancellable: import('../Gio').Cancellable | null): import('../Gio').SrvTarget[];
  /**
    * Begins asynchronously performing a DNS SRV lookup for the given service and protocol in the given domain, and eventually calls callback, which must call Gio.Resolver.lookup_service_finish() to get the final result. See Gio.Resolver.lookup_service() for more details.
    * @param service the service type to look up (eg, “ldap”)
    * @param protocol the networking protocol to use for service (eg, “tcp”)
    * @param domain the DNS domain to look up the service in
    * @param cancellable a Gio.Cancellable, or None
    * @param callback callback to call after resolution completes
    * @param userData data for callback 
    */
  lookupServiceAsync(service: string, protocol: string, domain: string, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Retrieves the result of a previous call to Gio.Resolver.lookup_service_async().
    * @param result the result passed to your Gio.asyncReadyCallback
    * @returns a non-empty GLib.List of Gio.SrvTarget, or None on error. See Gio.Resolver.lookup_service() for more details. 
    */
  lookupServiceFinish(result: import('../Gio').AsyncResult): import('../Gio').SrvTarget[];
  /**
    * Sets self to be the application’s default resolver (reffing self, and unreffing the previous default resolver, if any). Future calls to Gio.Resolver.get_default() will return this resolver. 
    */
  setDefault(): void;
}

