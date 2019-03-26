/**
  * The GLib.Node struct represents one node in a n-ary tree. 
  */
export declare class Node {
  /**
    * Gets the position of the first child of a GLib.Node which contains the given data.
    * @param data the data to find
    * @returns the index of the child of self which contains data, or -1 if the data is not found 
    */
  childIndex(data: Object | null): number;
  /**
    * Gets the position of a GLib.Node with respect to its siblings. child must be a child of self. The first child is numbered 0, the second 1, and so on.
    * @param child a child of self
    * @returns the position of child with respect to its siblings 
    */
  childPosition(child: import('../GLib').Node): number;
  /**
    * Gets the depth of a GLib.Node.
    * @returns the depth of the GLib.Node 
    */
  depth(): number;
  /**
    * Removes self and its children from the tree, freeing any memory allocated. 
    */
  destroy(): void;
  /**
    * Returns True if self is an ancestor of descendant. This is true if node is the parent of descendant, or if node is the grandparent of descendant etc.
    * @param descendant a GLib.Node
    * @returns True if self is an ancestor of descendant 
    */
  isAncestor(descendant: import('../GLib').Node): boolean;
  /**
    * Gets the maximum height of all branches beneath a GLib.Node. This is the maximum distance from the GLib.Node to all leaf nodes.
    * @returns the maximum height of the tree beneath self 
    */
  maxHeight(): number;
  /**
    * Gets the number of children of a GLib.Node.
    * @returns the number of children of self 
    */
  nChildren(): number;
  /**
    * Gets the number of nodes in a tree.
    * @param flags which types of children are to be counted, one of GLib.TraverseFlags.ALL, GLib.TraverseFlags.LEAVES and GLib.TraverseFlags.NON_LEAVES
    * @returns the number of nodes in the tree 
    */
  nNodes(flags: import('../GLib').TraverseFlags): number;
  /**
    * Reverses the order of the children of a GLib.Node. (It doesn’t change the order of the grandchildren.) 
    */
  reverseChildren(): void;
  /**
    * Unlinks a GLib.Node from a tree, resulting in two separate trees. 
    */
  unlink(): void;
}

