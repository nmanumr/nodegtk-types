import * as GObject from '../GObject';
export declare interface RelationSet extends GObject.Object { }

/**
  * The Atk.RelationSet held by an object establishes its relationships
with objects beyond the normal “parent/child” hierarchical
relationships that all user interface objects have.
AtkRelationSets establish whether objects are labelled or
controlled by other components, share group membership with other
components (for instance within a radio-button group), or share
content which “flows” between them, among other types of possible
relationships. 
  */
export declare class RelationSet {
  /**
    * Creates a new empty relation set.
    * @returns a new Atk.RelationSet 
    */
  static new(): import('../Atk').RelationSet;
  /**
    * Add a new relation to the current relation set if it is not already present. This function ref’s the Atk.Relation so the caller of this function should unref it to ensure that it will be destroyed when the Atk.RelationSet is destroyed.
    * @param relation an Atk.Relation 
    */
  add(relation: import('../Atk').Relation): void;
  /**
    * Add a new relation of the specified type with the specified target to the current relation set if the relation set does not contain a relation of that type. If it is does contain a relation of that typea the target is added to the relation.
    * @param relationship an Atk.RelationType
    * @param target an Atk.Object 
    */
  addRelationByType(relationship: import('../Atk').RelationType, target: import('../Atk').Object): void;
  /**
    * Determines whether the relation set contains a relation that matches the specified type.
    * @param relationship an Atk.RelationType
    * @returns True if relationship is the relationship type of a relation in self, False otherwise 
    */
  contains(relationship: import('../Atk').RelationType): boolean;
  /**
    * Determines whether the relation set contains a relation that matches the specified pair formed by type relationship and object target.
    * @param relationship an Atk.RelationType
    * @param target an Atk.Object
    * @returns True if self contains a relation with the relationship type relationship with an object target, False otherwise 
    */
  containsTarget(relationship: import('../Atk').RelationType, target: import('../Atk').Object): boolean;
  /**
    * Determines the number of relations in a relation set.
    * @returns an integer representing the number of relations in the set. 
    */
  getNRelations(): number;
  /**
    * Determines the relation at the specified position in the relation set.
    * @param i a int representing a position in the set, starting from 0.
    * @returns a Atk.Relation, which is the relation at position i in the set. 
    */
  getRelation(i: number): import('../Atk').Relation;
  /**
    * Finds a relation that matches the specified type.
    * @param relationship an Atk.RelationType
    * @returns an Atk.Relation, which is a relation matching the specified type. 
    */
  getRelationByType(relationship: import('../Atk').RelationType): import('../Atk').Relation;
  /**
    * Removes a relation from the relation set. This function unref’s the Atk.Relation so it will be deleted unless there is another reference to it.
    * @param relation an Atk.Relation 
    */
  remove(relation: import('../Atk').Relation): void;
}

