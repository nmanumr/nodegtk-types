import * as GObject from '../GObject';
export declare interface Relation extends GObject.Object { }

/**
  * An Atk.Relation describes a relation between an object and one or
more other objects. The actual relations that an object has with
other objects are defined as an Atk.RelationSet, which is a set of
AtkRelations. 
  */
export declare class Relation {
  /**
    * Create a new relation for the specified key and the specified list of targets.  See also Atk.Object.add_relationship().
    * @param targets an array of pointers to Atk.Objects
    * @param relationship an Atk.RelationType with which to create the new Atk.Relation
    * @returns a pointer to a new Atk.Relation 
    */
  static new(targets: import('../Atk').Object, relationship: import('../Atk').RelationType): import('../Atk').Relation;
  /**
    * Adds the specified Atk.Object to the target for the relation, if it is not already present.  See also Atk.Object.add_relationship().
    * @param target an Atk.Object 
    */
  addTarget(target: import('../Atk').Object): void;
  /**
    * Gets the type of self
    * @returns the type of self 
    */
  getRelationType(): import('../Atk').RelationType;
  /**
    * Gets the target list of self
    * @returns the target list of self 
    */
  getTarget(): import('../Atk').Object[];
  /**
    * Remove the specified Atk.Object from the target for the relation.
    * @param target an Atk.Object
    * @returns True if the removal is successful. 
    */
  removeTarget(target: import('../Atk').Object): boolean;
  /**
    * The type of the relation 
    */
  relationType: import('../Atk').RelationType;
  /**
    * An array of the targets for the relation 
    */
  target: import('../GObject').ValueArray;
}

