/**
  * Each piece of memory that is pushed onto the stack
is cast to a GLib.TrashStack. 
  */
export declare class TrashStack {
  /**
    * Returns the height of a GLib.TrashStack.
    * @param stackP a GLib.TrashStack
    * @returns the height of the stack 
    */
  static height(stackP: import('../GLib').TrashStack): number;
  /**
    * Returns the element at the top of a GLib.TrashStack which may be None.
    * @param stackP a GLib.TrashStack
    * @returns the element at the top of the stack 
    */
  static peek(stackP: import('../GLib').TrashStack): Object | null;
  /**
    * Pops a piece of memory off a GLib.TrashStack.
    * @param stackP a GLib.TrashStack
    * @returns the element at the top of the stack 
    */
  static pop(stackP: import('../GLib').TrashStack): Object | null;
  /**
    * Pushes a piece of memory onto a GLib.TrashStack.
    * @param stackP a GLib.TrashStack
    * @param dataP the piece of memory to push on the stack 
    */
  static push(stackP: import('../GLib').TrashStack, dataP: Object): void;
}

