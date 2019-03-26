import * as Atk from '../Atk';
export declare interface GObjectAccessible extends Atk.Object { }

/**
  * This object class is derived from Atk.Object. It can be used as a
basis for implementing accessible objects for GObjects which are
not derived from GtkWidget. One example of its use is in providing
an accessible object for GnomeCanvasItem in the GAIL library. 
  */
export declare class GObjectAccessible {
  /**
    * Gets the accessible object for the specified obj.
    * @param obj a GObject.Object
    * @returns a Atk.Object which is the accessible object for the obj 
    */
  static forObject(obj: import('../GObject').Object): import('../Atk').Object;
  /**
    * Gets the GObject.Object for which self is the accessible object.
    * @returns a GObject.Object which is the object for which self is the accessible object 
    */
  getObject(): import('../GObject').Object;
}

