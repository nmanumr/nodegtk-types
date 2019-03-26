import * as Gio from '../Gio';
export declare interface UnixFDMessage extends Gio.SocketControlMessage { }

/**
  * This Gio.SocketControlMessage contains a Gio.UnixFDList.
It may be sent using Gio.Socket.send_message() and received using
Gio.Socket.receive_message() over UNIX sockets (ie: sockets in the
%G_SOCKET_ADDRESS_UNIX family). The file descriptors are copied
between processes by the kernel. 
  */
export declare class UnixFDMessage {
  /**
    * Creates a new Gio.UnixFDMessage containing an empty file descriptor list.
    * @returns a new Gio.UnixFDMessage 
    */
  static new(): import('../Gio').SocketControlMessage;
  /**
    * Creates a new Gio.UnixFDMessage containing list.
    * @param fdList a Gio.UnixFDList
    * @returns a new Gio.UnixFDMessage 
    */
  static newWithFdList(fdList: import('../Gio').UnixFDList): import('../Gio').SocketControlMessage;
  /**
    * Adds a file descriptor to self.
    * @param fd a valid open file descriptor
    * @returns True in case of success, else False (and error is set) 
    */
  appendFd(fd: number): boolean;
  /**
    * Gets the Gio.UnixFDList contained in self.  This function does not return a reference to the caller, but the returned list is valid for the lifetime of self.
    * @returns the Gio.UnixFDList from self 
    */
  getFdList(): import('../Gio').UnixFDList;
  /**
    * Returns the array of file descriptors that is contained in this object.
    * @returns an array of file descriptors 
    */
  stealFds(): number[];
  /**
    * The Gio.UnixFDList object to send with the message 
    */
  fdList: import('../Gio').UnixFDList;
}

