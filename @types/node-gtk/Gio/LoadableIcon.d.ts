import * as GObject from '../GObject';
export declare interface LoadableIcon extends GObject.GInterface { }

/**
  * Extends the Gio.Icon interface and adds the ability to
load icons from streams. 
  */
export declare interface LoadableIcon {
  /**
    * Loads a loadable icon. For the asynchronous version of this function, see Gio.LoadableIcon.load_async().
    * @param size an integer.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns a Gio.InputStream to read the icon from.   type:a location to store the type of the loaded icon, None to ignore. 
    */
  load(size: number, cancellable: import('../Gio').Cancellable | null): [import('../Gio').InputStream, string];
  /**
    * Loads an icon asynchronously. To finish this function, see Gio.LoadableIcon.load_finish(). For the synchronous, blocking version of this function, see Gio.LoadableIcon.load().
    * @param size an integer.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  loadAsync(size: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an asynchronous icon load started in Gio.LoadableIcon.load_async().
    * @param res a Gio.AsyncResult.
    * @returns a Gio.InputStream to read the icon from.  type:a location to store the type of the loaded icon, None to ignore. 
    */
  loadFinish(res: import('../Gio').AsyncResult): [import('../Gio').InputStream, string];
}

