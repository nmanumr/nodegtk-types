import * as Gio from '../Gio';
export declare interface ThreadedSocketService extends Gio.SocketService { }

/**
  * A Gio.ThreadedSocketService is a simple subclass of Gio.SocketService
that handles incoming connections by creating a worker thread and
dispatching the connection to it by emitting the
Gio.ThreadedSocketService ::run signal in the new thread. 
  */
export declare class ThreadedSocketService {
  /**
    * Creates a new Gio.ThreadedSocketService with no listeners. Listeners must be added with one of the Gio.SocketListener “add” methods.
    * @param maxThreads the maximal number of threads to execute concurrently handling incoming clients, -1 means no limit
    * @returns a new Gio.SocketService. 
    */
  static new(maxThreads: number): import('../Gio').SocketService;
  /**
    * The max number of threads handling clients for this service 
    */
  maxThreads: number;
}

