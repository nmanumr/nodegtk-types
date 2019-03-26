import * as Atk from '../Atk';
export declare interface Plug extends Atk.Object, Atk.Component { }

/**
  * See Atk.Socket 
  */
export declare class Plug {
  static new(): import('../Atk').Object;
  /**
    * Gets the unique ID of an Atk.Plug object, which can be used to embed inside of an Atk.Socket using Atk.Socket.embed().
    * @returns the unique ID for the plug 
    */
  getId(): string;
}

