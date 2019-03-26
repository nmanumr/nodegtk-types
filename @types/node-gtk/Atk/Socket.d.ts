import * as Atk from '../Atk';
export declare interface Socket extends Atk.Object, Atk.Component { }

/**
  * Together with Atk.Plug, Atk.Socket provides the ability to embed
accessibles from one process into another in a fashion that is
transparent to assistive technologies. Atk.Socket works as the
container of Atk.Plug, embedding it using the method
Atk.Socket.embed(). Any accessible contained in the Atk.Plug will
appear to the assistive technologies as being inside the
application that created the Atk.Socket. 
  */
export declare class Socket {
  static new(): import('../Atk').Object;
  /**
    * Embeds the children of an Atk.Plug as the children of the Atk.Socket. The plug may be in the same process or in a different process.
    * @param plugId the ID of an Atk.Plug 
    */
  embed(plugId: string): void;
  /**
    * Determines whether or not the socket has an embedded plug.
    * @returns True if a plug is embedded in the socket 
    */
  isOccupied(): boolean;
  ;
}

