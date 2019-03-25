/**
  * A Gio.Socket is a low-level networking primitive. It is a more or less
direct mapping of the BSD socket API in a portable GObject.Object based API.
It supports both the UNIX socket implementations and winsock2 on Windows. 
  */
export declare class Socket extends import('../GObject').Object, import('../Gio').DatagramBased, import('../Gio').Initable{
/**
  * Creates a new Gio.Socket with the defined family, type and protocol. If protocol is 0 (Gio.SocketProtocol.DEFAULT) the default protocol type for the family and type is used.
  * @param family the socket family to use, e.g. Gio.SocketFamily.IPV4.
  * @param type the socket type to use.
  * @param protocol the id of the protocol to use, or 0 for default.
  * @returns a Gio.Socket or None on error. Free the returned object with GObject.Object.unref(). 
  */
static new(family: import('../Gio').SocketFamily, type: import('../Gio').SocketType, protocol: import('../Gio').SocketProtocol): import('../Gio').Socket;
/**
  * Creates a new Gio.Socket from a native file descriptor or winsock SOCKET handle.
  * @param fd a native socket file descriptor.
  * @returns a Gio.Socket or None on error. Free the returned object with GObject.Object.unref(). 
  */
static newFromFd(fd: number): import('../Gio').Socket;
/**
  * Accept incoming connections on a connection-based socket. This removes the first outstanding connection request from the listening socket and creates a Gio.Socket object for it.
  * @param cancellable a Gio.Cancellable or None
  * @returns a new Gio.Socket, or None on error. Free the returned object with GObject.Object.unref(). 
  */
accept(cancellable: import('../Gio').Cancellable | null): import('../Gio').Socket;
/**
  * When a socket is created it is attached to an address family, but it doesn’t have an address in this family. Gio.Socket.bind() assigns the address (sometimes called name) of the socket.
  * @param address a Gio.SocketAddress specifying the local address.
  * @param allowReuse whether to allow reusing this address
  * @returns True on success, False on error. 
  */
bind(address: import('../Gio').SocketAddress, allowReuse: boolean): boolean;
/**
  * Checks and resets the pending connect error for the socket. This is used to check for errors when Gio.Socket.connect() is used in non-blocking mode.
  * @returns True if no error, False otherwise, setting error to the error 
  */
checkConnectResult(): boolean;
/**
  * Closes the socket, shutting down any active connection.
  * @returns True on success, False on error 
  */
close(): boolean;
/**
  * Checks on the readiness of self to perform operations. The operations specified in condition are checked for and masked against the currently-satisfied conditions on self. The result is returned.
  * @param condition a GLib.IOCondition mask to check
  * @returns the GIOCondition mask of the current state 
  */
conditionCheck(condition: import('../GLib').IOCondition): import('../GLib').IOCondition;
/**
  * Waits for up to timeout microseconds for condition to become true on self. If the condition is met, True is returned.
  * @param condition a GLib.IOCondition mask to wait for
  * @param timeout the maximum time (in microseconds) to wait, or -1
  * @param cancellable a Gio.Cancellable, or None
  * @returns True if the condition was met, False otherwise 
  */
conditionTimedWait(condition: import('../GLib').IOCondition, timeout: number, cancellable: import('../Gio').Cancellable | null): boolean;
/**
  * Waits for condition to become true on self. When the condition is met, True is returned.
  * @param condition a GLib.IOCondition mask to wait for
  * @param cancellable a Gio.Cancellable, or None
  * @returns True if the condition was met, False otherwise 
  */
conditionWait(condition: import('../GLib').IOCondition, cancellable: import('../Gio').Cancellable | null): boolean;
/**
  * Connect the socket to the specified remote address.
  * @param address a Gio.SocketAddress specifying the remote address.
  * @param cancellable a Gio.Cancellable or None
  * @returns True if connected, False on error. 
  */
connect(address: import('../Gio').SocketAddress, cancellable: import('../Gio').Cancellable | null): boolean;
/**
  * Creates a Gio.SocketConnection subclass of the right type for self.
  * @returns a Gio.SocketConnection 
  */
connectionFactoryCreateConnection(): import('../Gio').SocketConnection;
/**
  * Get the amount of data pending in the OS input buffer, without blocking.
  * @returns the number of bytes that can be read from the socket without blocking or truncating, or -1 on error. 
  */
getAvailableBytes(): number;
/**
  * Gets the blocking mode of the socket. For details on blocking I/O, see Gio.Socket.set_blocking().
  * @returns True if blocking I/O is used, False otherwise. 
  */
getBlocking(): boolean;
/**
  * Gets the broadcast setting on self; if True, it is possible to send packets to broadcast addresses.
  * @returns the broadcast setting on self 
  */
getBroadcast(): boolean;
/**
  * Returns the credentials of the foreign process connected to this socket, if any (e.g. it is only supported for Gio.SocketFamily.UNIX sockets).
  * @returns None if error is set, otherwise a Gio.Credentials object that must be freed with GObject.Object.unref(). 
  */
getCredentials(): import('../Gio').Credentials;
/**
  * Gets the socket family of the socket.
  * @returns a Gio.SocketFamily 
  */
getFamily(): import('../Gio').SocketFamily;
/**
  * Returns the underlying OS socket object. On unix this is a socket file descriptor, and on Windows this is a Winsock2 SOCKET handle. This may be useful for doing platform specific or otherwise unusual operations on the socket.
  * @returns the file descriptor of the socket. 
  */
getFd(): number;
/**
  * Gets the keepalive mode of the socket. For details on this, see Gio.Socket.set_keepalive().
  * @returns True if keepalive is active, False otherwise. 
  */
getKeepalive(): boolean;
/**
  * Gets the listen backlog setting of the socket. For details on this, see Gio.Socket.set_listen_backlog().
  * @returns the maximum number of pending connections. 
  */
getListenBacklog(): number;
/**
  * Try to get the local address of a bound socket. This is only useful if the socket has been bound to a local address, either explicitly or implicitly when connecting.
  * @returns a Gio.SocketAddress or None on error. Free the returned object with GObject.Object.unref(). 
  */
getLocalAddress(): import('../Gio').SocketAddress;
/**
  * Gets the multicast loopback setting on self; if True (the default), outgoing multicast packets will be looped back to multicast listeners on the same host.
  * @returns the multicast loopback setting on self 
  */
getMulticastLoopback(): boolean;
/**
  * Gets the multicast time-to-live setting on self; see Gio.Socket.set_multicast_ttl() for more details.
  * @returns the multicast time-to-live setting on self 
  */
getMulticastTtl(): number;
/**
  * Gets the value of an integer-valued option on self, as with getsockopt(). (If you need to fetch a  non-integer-valued option, you will need to call getsockopt() directly.)
  * @param level the “API level” of the option (eg, SOL_SOCKET)
  * @param optname the “name” of the option (eg, SO_BROADCAST)
  * @returns success or failure. On failure, error will be set, and the system error value (errno or WSAGetLastError()) will still be set to the result of the getsockopt() call.   value:return location for the option value 
  */
getOption(level: number, optname: number): [boolean, number];
/**
  * Gets the socket protocol id the socket was created with. In case the protocol is unknown, -1 is returned.
  * @returns a protocol id, or -1 if unknown 
  */
getProtocol(): import('../Gio').SocketProtocol;
/**
  * Try to get the remote address of a connected socket. This is only useful for connection oriented sockets that have been connected.
  * @returns a Gio.SocketAddress or None on error. Free the returned object with GObject.Object.unref(). 
  */
getRemoteAddress(): import('../Gio').SocketAddress;
/**
  * Gets the socket type of the socket.
  * @returns a Gio.SocketType 
  */
getSocketType(): import('../Gio').SocketType;
/**
  * Gets the timeout setting of the socket. For details on this, see Gio.Socket.set_timeout().
  * @returns the timeout in seconds 
  */
getTimeout(): number;
/**
  * Gets the unicast time-to-live setting on self; see Gio.Socket.set_ttl() for more details.
  * @returns the time-to-live setting on self 
  */
getTtl(): number;
/**
  * Checks whether a socket is closed.
  * @returns True if socket is closed, False otherwise 
  */
isClosed(): boolean;
/**
  * Check whether the socket is connected. This is only useful for connection-oriented sockets.
  * @returns True if socket is connected, False otherwise. 
  */
isConnected(): boolean;
/**
  * Registers self to receive multicast messages sent to group. self must be a Gio.SocketType.DATAGRAM socket, and must have been bound to an appropriate interface and port with Gio.Socket.bind().
  * @param group a Gio.InetAddress specifying the group address to join.
  * @param sourceSpecific True if source-specific multicast should be used
  * @param iface Name of the interface to use, or None
  * @returns True on success, False on error. 
  */
joinMulticastGroup(group: import('../Gio').InetAddress, sourceSpecific: boolean, iface: string | null): boolean;
/**
  * Registers self to receive multicast messages sent to group. self must be a Gio.SocketType.DATAGRAM socket, and must have been bound to an appropriate interface and port with Gio.Socket.bind().
  * @param group a Gio.InetAddress specifying the group address to join.
  * @param sourceSpecific a Gio.InetAddress specifying the source-specific multicast address or None to ignore.
  * @param iface Name of the interface to use, or None
  * @returns True on success, False on error. 
  */
joinMulticastGroupSsm(group: import('../Gio').InetAddress, sourceSpecific: import('../Gio').InetAddress | null, iface: string | null): boolean;
/**
  * Removes self from the multicast group defined by group, iface, and source_specific (which must all have the same values they had when you joined the group).
  * @param group a Gio.InetAddress specifying the group address to leave.
  * @param sourceSpecific True if source-specific multicast was used
  * @param iface Interface used
  * @returns True on success, False on error. 
  */
leaveMulticastGroup(group: import('../Gio').InetAddress, sourceSpecific: boolean, iface: string | null): boolean;
/**
  * Removes self from the multicast group defined by group, iface, and source_specific (which must all have the same values they had when you joined the group).
  * @param group a Gio.InetAddress specifying the group address to leave.
  * @param sourceSpecific a Gio.InetAddress specifying the source-specific multicast address or None to ignore.
  * @param iface Name of the interface to use, or None
  * @returns True on success, False on error. 
  */
leaveMulticastGroupSsm(group: import('../Gio').InetAddress, sourceSpecific: import('../Gio').InetAddress | null, iface: string | null): boolean;
/**
  * Marks the socket as a server socket, i.e. a socket that is used to accept incoming requests using Gio.Socket.accept().
  * @returns True on success, False on error. 
  */
listen(): boolean;
/**
  * Receive data (up to size bytes) from a socket. This is mainly used by connection-oriented sockets; it is identical to Gio.Socket.receive_from() with address set to None.
  * @param buffer a buffer to read data into (which should be at least size bytes long).
  * @param cancellable a Gio.Cancellable or None
  * @returns Number of bytes read, or 0 if the connection was closed by the peer, or -1 on error 
  */
receive(buffer: Int8Array, cancellable: import('../Gio').Cancellable | null): number;
/**
  * Receive data (up to size bytes) from a socket.
  * @param buffer a buffer to read data into (which should be at least size bytes long).
  * @param cancellable a Gio.Cancellable or None
  * @returns Number of bytes read, or 0 if the connection was closed by the peer, or -1 on error   address:a pointer to a Gio.SocketAddress pointer, or None 
  */
receiveFrom(buffer: Int8Array, cancellable: import('../Gio').Cancellable | null): [number, import('../Gio').SocketAddress];
/**
  * Receive data from a socket.  For receiving multiple messages, see Gio.Socket.receive_messages(); for easier use, see Gio.Socket.receive() and Gio.Socket.receive_from().
  * @param vectors an array of Gio.InputVector structs
  * @param flags a pointer to an int containing Gio.SocketMsgFlags flags
  * @param cancellable a Gio.Cancellable or None
  * @returns Number of bytes read, or 0 if the connection was closed by the peer, or -1 on error   address:a pointer to a Gio.SocketAddress pointer, or None messages:a pointer which may be filled with an array of Gio.SocketControlMessages, or None flags:a pointer to an int containing Gio.SocketMsgFlags flags 
  */
receiveMessage(vectors: import('../Gio').InputVector, flags: number, cancellable: import('../Gio').Cancellable | null): [number, import('../Gio').SocketAddress, import('../[Gio').SocketControlMessage], number];
/**
  * Receive multiple data messages from self in one go.  This is the most complicated and fully-featured version of this call. For easier use, see Gio.Socket.receive(), Gio.Socket.receive_from(), and Gio.Socket.receive_message().
  * @param messages an array of Gio.InputMessage structs
  * @param flags an int containing Gio.SocketMsgFlags flags for the overall operation
  * @param cancellable a Gio.Cancellable or None
  * @returns number of messages received, or -1 on error. Note that the number of messages received may be smaller than num_messages if in non-blocking mode, if the peer closed the connection, or if num_messages was larger than UIO_MAXIOV (1024), in which case the caller may re-try to receive the remaining messages. 
  */
receiveMessages(messages: import('../Gio').InputMessage, flags: number, cancellable: import('../Gio').Cancellable | null): number;
/**
  * This behaves exactly the same as Gio.Socket.receive(), except that the choice of blocking or non-blocking behavior is determined by the blocking argument rather than by self’s properties.
  * @param buffer a buffer to read data into (which should be at least size bytes long).
  * @param blocking whether to do blocking or non-blocking I/O
  * @param cancellable a Gio.Cancellable or None
  * @returns Number of bytes read, or 0 if the connection was closed by the peer, or -1 on error 
  */
receiveWithBlocking(buffer: Int8Array, blocking: boolean, cancellable: import('../Gio').Cancellable | null): number;
/**
  * Tries to send size bytes from buffer on the socket. This is mainly used by connection-oriented sockets; it is identical to Gio.Socket.send_to() with address set to None.
  * @param buffer the buffer containing the data to send.
  * @param cancellable a Gio.Cancellable or None
  * @returns Number of bytes written (which may be less than size), or -1 on error 
  */
send(buffer: Int8Array, cancellable: import('../Gio').Cancellable | null): number;
/**
  * Send data to address on self.  For sending multiple messages see Gio.Socket.send_messages(); for easier use, see Gio.Socket.send() and Gio.Socket.send_to().
  * @param address a Gio.SocketAddress, or None
  * @param vectors an array of Gio.OutputVector structs
  * @param messages a pointer to an array of Gio.SocketControlMessages, or None.
  * @param flags an int containing Gio.SocketMsgFlags flags
  * @param cancellable a Gio.Cancellable or None
  * @returns Number of bytes written (which may be less than size), or -1 on error 
  */
sendMessage(address: import('../Gio').SocketAddress | null, vectors: import('../Gio').OutputVector, messages: import('../Gio').SocketControlMessage | null, flags: number, cancellable: import('../Gio').Cancellable | null): number;
/**
  * Send multiple data messages from self in one go.  This is the most complicated and fully-featured version of this call. For easier use, see Gio.Socket.send(), Gio.Socket.send_to(), and Gio.Socket.send_message().
  * @param messages an array of Gio.OutputMessage structs
  * @param flags an int containing Gio.SocketMsgFlags flags
  * @param cancellable a Gio.Cancellable or None
  * @returns number of messages sent, or -1 on error. Note that the number of messages sent may be smaller than num_messages if the socket is non-blocking or if num_messages was larger than UIO_MAXIOV (1024), in which case the caller may re-try to send the remaining messages. 
  */
sendMessages(messages: import('../Gio').OutputMessage, flags: number, cancellable: import('../Gio').Cancellable | null): number;
/**
  * Tries to send size bytes from buffer to address. If address is None then the message is sent to the default receiver (set by Gio.Socket.connect()).
  * @param address a Gio.SocketAddress, or None
  * @param buffer the buffer containing the data to send.
  * @param cancellable a Gio.Cancellable or None
  * @returns Number of bytes written (which may be less than size), or -1 on error 
  */
sendTo(address: import('../Gio').SocketAddress | null, buffer: Int8Array, cancellable: import('../Gio').Cancellable | null): number;
/**
  * This behaves exactly the same as Gio.Socket.send(), except that the choice of blocking or non-blocking behavior is determined by the blocking argument rather than by self’s properties.
  * @param buffer the buffer containing the data to send.
  * @param blocking whether to do blocking or non-blocking I/O
  * @param cancellable a Gio.Cancellable or None
  * @returns Number of bytes written (which may be less than size), or -1 on error 
  */
sendWithBlocking(buffer: Int8Array, blocking: boolean, cancellable: import('../Gio').Cancellable | null): number;
/**
  * Sets the blocking mode of the socket. In blocking mode all operations (which don’t take an explicit blocking parameter) block until they succeed or there is an error. In non-blocking mode all functions return results immediately or with a Gio.IOErrorEnum.WOULD_BLOCK error.
  * @param blocking Whether to use blocking I/O or not. 
  */
setBlocking(blocking: boolean): void;
/**
  * Sets whether self should allow sending to broadcast addresses. This is False by default.
  * @param broadcast whether self should allow sending to broadcast addresses 
  */
setBroadcast(broadcast: boolean): void;
/**
  * Sets or unsets the %SO_KEEPALIVE flag on the underlying socket. When this flag is set on a socket, the system will attempt to verify that the remote socket endpoint is still present if a sufficiently long period of time passes with no data being exchanged. If the system is unable to verify the presence of the remote endpoint, it will automatically close the connection.
  * @param keepalive Value for the keepalive flag 
  */
setKeepalive(keepalive: boolean): void;
/**
  * Sets the maximum number of outstanding connections allowed when listening on this socket. If more clients than this are connecting to the socket and the application is not handling them on time then the new connections will be refused.
  * @param backlog the maximum number of pending connections. 
  */
setListenBacklog(backlog: number): void;
/**
  * Sets whether outgoing multicast packets will be received by sockets listening on that multicast address on the same host. This is True by default.
  * @param loopback whether self should receive messages sent to its multicast groups from the local host 
  */
setMulticastLoopback(loopback: boolean): void;
/**
  * Sets the time-to-live for outgoing multicast datagrams on self. By default, this is 1, meaning that multicast packets will not leave the local network.
  * @param ttl the time-to-live value for all multicast datagrams on self 
  */
setMulticastTtl(ttl: number): void;
/**
  * Sets the value of an integer-valued option on self, as with setsockopt(). (If you need to set a non-integer-valued option, you will need to call setsockopt() directly.)
  * @param level the “API level” of the option (eg, SOL_SOCKET)
  * @param optname the “name” of the option (eg, SO_BROADCAST)
  * @param value the value to set the option to
  * @returns success or failure. On failure, error will be set, and the system error value (errno or WSAGetLastError()) will still be set to the result of the setsockopt() call. 
  */
setOption(level: number, optname: number, value: number): boolean;
/**
  * Sets the time in seconds after which I/O operations on self will time out if they have not yet completed.
  * @param timeout the timeout for self, in seconds, or 0 for none 
  */
setTimeout(timeout: number): void;
/**
  * Sets the time-to-live for outgoing unicast packets on self. By default the platform-specific default value is used.
  * @param ttl the time-to-live value for all unicast packets on self 
  */
setTtl(ttl: number): void;
/**
  * Shut down part or all of a full-duplex connection.
  * @param shutdownRead whether to shut down the read side
  * @param shutdownWrite whether to shut down the write side
  * @returns True on success, False on error 
  */
shutdown(shutdownRead: boolean, shutdownWrite: boolean): boolean;
/**
  * Checks if a socket is capable of speaking IPv4.
  * @returns True if this socket can be used with IPv4. 
  */
speaksIpv4(): boolean;
/**
  * Whether or not I/O on this socket is blocking 
  */
blocking: boolean;
/**
  * Whether to allow sending to broadcast addresses 
  */
broadcast: boolean;
/**
  * The sockets address family 
  */
family: import('../Gio').SocketFamily;
/**
  * The sockets file descriptor 
  */
fd: number;
/**
  * Keep connection alive by sending periodic pings 
  */
keepalive: boolean;
/**
  * Outstanding connections in the listen queue 
  */
listenBacklog: number;
/**
  * The local address the socket is bound to 
  */
localAddress: import('../Gio').SocketAddress;
/**
  * Whether outgoing multicast packets loop back to the local host 
  */
multicastLoopback: boolean;
/**
  * Time-to-live of outgoing multicast packets 
  */
multicastTtl: number;
/**
  * The id of the protocol to use, or -1 for unknown 
  */
protocol: import('../Gio').SocketProtocol;
/**
  * The remote address the socket is connected to 
  */
remoteAddress: import('../Gio').SocketAddress;
/**
  * The timeout in seconds on socket I/O 
  */
timeout: number;
/**
  * Time-to-live of outgoing unicast packets 
  */
ttl: number;
/**
  * The sockets type 
  */
type: import('../Gio').SocketType;
/**
  *   
  */
parentInstance: import('../GObject').Object;
}

