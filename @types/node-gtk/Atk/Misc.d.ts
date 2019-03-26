import * as GObject from '../GObject';
export declare interface Misc extends GObject.Object { }

/**
  * A set of utility functions for thread locking. This interface and
all his related methods are deprecated since 2.12. 
  */
export declare class Misc {
  /**
    * Obtain the singleton instance of Atk.Misc for this application.
    * @returns The singleton instance of Atk.Misc for this application. 
    */
  static getInstance(): import('../Atk').Misc;
  /**
    * Take the thread mutex for the GUI toolkit, if one exists. (This method is implemented by the toolkit ATK implementation layer; for instance, for GTK+, GAIL implements this via GDK_THREADS_ENTER). 
    */
  threadsEnter(): void;
  /**
    * Release the thread mutex for the GUI toolkit, if one exists. This method, and Atk.Misc.threads_enter, are needed in some situations by threaded application code which services ATK requests, since fulfilling ATK requests often requires calling into the GUI toolkit.  If a long-running or potentially blocking call takes place inside such a block, it should be bracketed by Atk.Misc.threads_leave/Atk.Misc.threads_enter calls. (This method is implemented by the toolkit ATK implementation layer; for instance, for GTK+, GAIL implements this via GDK_THREADS_LEAVE). 
    */
  threadsLeave(): void;
}

