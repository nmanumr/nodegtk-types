import * as GObject from '../GObject';
export declare interface StateSet extends GObject.Object { }

/**
  * An Atk.StateSet is a read-only representation of the full set of #AtkStates
that apply to an object at a given time. This set is not meant to be
modified, but rather created when Atk.Object.ref_state_set() is called. 
  */
export declare class StateSet {
  /**
    * Creates a new empty state set.
    * @returns a new Atk.StateSet 
    */
  static new(): import('../Atk').StateSet;
  /**
    * Adds the state of the specified type to the state set if it is not already present.
    * @param type an Atk.StateType
    * @returns True if  the state for type is not already in self. 
    */
  addState(type: import('../Atk').StateType): boolean;
  /**
    * Adds the states of the specified types to the state set.
    * @param types an array of Atk.StateType 
    */
  addStates(types: import('../Atk').StateType): void;
  /**
    * Constructs the intersection of the two sets, returning None if the intersection is empty.
    * @param compareSet another Atk.StateSet
    * @returns a new Atk.StateSet which is the intersection of the two sets. 
    */
  andSets(compareSet: import('../Atk').StateSet): import('../Atk').StateSet;
  /**
    * Removes all states from the state set. 
    */
  clearStates(): void;
  /**
    * Checks whether the state for the specified type is in the specified set.
    * @param type an Atk.StateType
    * @returns True if type is the state type is in self. 
    */
  containsState(type: import('../Atk').StateType): boolean;
  /**
    * Checks whether the states for all the specified types are in the specified set.
    * @param types an array of Atk.StateType
    * @returns True if all the states for type are in self. 
    */
  containsStates(types: import('../Atk').StateType): boolean;
  /**
    * Checks whether the state set is empty, i.e. has no states set.
    * @returns True if self has no states set, otherwise False 
    */
  isEmpty(): boolean;
  /**
    * Constructs the union of the two sets.
    * @param compareSet another Atk.StateSet
    * @returns a new Atk.StateSet which is the union of the two sets, returning None is empty. 
    */
  orSets(compareSet: import('../Atk').StateSet): import('../Atk').StateSet | null;
  /**
    * Removes the state for the specified type from the state set.
    * @param type an #AtkType
    * @returns True if type was the state type is in self. 
    */
  removeState(type: import('../Atk').StateType): boolean;
  /**
    * Constructs the exclusive-or of the two sets, returning None is empty. The set returned by this operation contains the states in exactly one of the two sets.
    * @param compareSet another Atk.StateSet
    * @returns a new Atk.StateSet which contains the states which are in exactly one of the two sets. 
    */
  xorSets(compareSet: import('../Atk').StateSet): import('../Atk').StateSet;
}

