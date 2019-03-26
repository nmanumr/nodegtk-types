import * as GObject from '../GObject';
export declare interface Object extends GObject.Object { }

/**
  * This class is the primary class for accessibility support via the
Accessibility ToolKit (ATK).  Objects which are instances of
Atk.Object (or instances of Atk.Object-derived types) are queried
for properties which relate basic (and generic) properties of a UI
component such as name and description.  Instances of Atk.Object
may also be queried as to whether they implement other ATK
interfaces (e.g. Atk.Action, Atk.Component, etc.), as appropriate
to the role which a given UI component plays in a user interface. 
  */
export declare class Object {
  /**
    * Adds a relationship of the specified type with the specified target.
    * @param relationship The Atk.RelationType of the relation
    * @param target The Atk.Object which is to be the target of the relation.
    * @returns True if the relationship is added. 
    */
  addRelationship(relationship: import('../Atk').RelationType, target: import('../Atk').Object): boolean;
  /**
    * Get a list of properties applied to this object as a whole, as an #AtkAttributeSet consisting of name-value pairs. As such these attributes may be considered weakly-typed properties or annotations, as distinct from strongly-typed object data available via other get/set methods. Not all objects have explicit “name-value pair” #AtkAttributeSet properties.
    * @returns an #AtkAttributeSet consisting of all explicit properties/annotations applied to the object, or an empty set if the object has no name-value pair attributes assigned to it. This #atkattributeset should be freed by a call to Atk.Attribute.set_free(). 
    */
  getAttributes(): Object[];
  /**
    * Gets the accessible description of the accessible.
    * @returns a character string representing the accessible description of the accessible. 
    */
  getDescription(): string | null;
  /**
    * Gets the 0-based index of this accessible in its parent; returns -1 if the accessible does not have an accessible parent.
    * @returns an integer which is the index of the accessible in its parent 
    */
  getIndexInParent(): number;
  /**
    * Gets the layer of the accessible.
    * @returns an Atk.Layer which is the layer of the accessible 
    */
  getLayer(): import('../Atk').Layer;
  /**
    * Gets the zorder of the accessible. The value GObject.G_MININT will be returned if the layer of the accessible is not Atk.Layer.MDI.
    * @returns a int which is the zorder of the accessible, i.e. the depth at which the component is shown in relation to other components in the same container. 
    */
  getMdiZorder(): number;
  /**
    * Gets the number of accessible children of the accessible.
    * @returns an integer representing the number of accessible children of the accessible. 
    */
  getNAccessibleChildren(): number;
  /**
    * Gets the accessible name of the accessible.
    * @returns a character string representing the accessible name of the object. 
    */
  getName(): string;
  /**
    * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale of self.
    * @returns a UTF-8 string indicating the POSIX-style LC_MESSAGES locale of self. 
    */
  getObjectLocale(): string;
  /**
    * Gets the accessible parent of the accessible. By default this is the one assigned with Atk.Object.set_parent(), but it is assumed that ATK implementors have ways to get the parent of the object without the need of assigning it manually with Atk.Object.set_parent(), and will return it with this method.
    * @returns an Atk.Object representing the accessible parent of the accessible 
    */
  getParent(): import('../Atk').Object;
  /**
    * Gets the role of the accessible.
    * @returns an Atk.Role which is the role of the accessible 
    */
  getRole(): import('../Atk').Role;
  /**
    * This function is called when implementing subclasses of Atk.Object. It does initialization required for the new object. It is intended that this function should called only in the …_new() functions used to create an instance of a subclass of Atk.Object
    * @param data a object which identifies the object for which the Atk.Object was created. 
    */
  initialize(data: Object | null): void;
  /**
    * Emits a state-change signal for the specified state.
    * @param state an #AtkState whose state is changed
    * @param value a bool which indicates whether the state is being set on or off 
    */
  notifyStateChange(state: number, value: boolean): void;
  /**
    * Gets the accessible parent of the accessible, if it has been manually assigned with Atk.Object.set_parent. Otherwise, this function returns None.
    * @returns an Atk.Object representing the accessible parent of the accessible if assigned 
    */
  peekParent(): import('../Atk').Object;
  /**
    * Gets a reference to the specified accessible child of the object. The accessible children are 0-based so the first accessible child is at index 0, the second at index 1 and so on.
    * @param i a int representing the position of the child, starting from 0
    * @returns an Atk.Object representing the specified accessible child of the accessible. 
    */
  refAccessibleChild(i: number): import('../Atk').Object;
  /**
    * Gets the Atk.RelationSet associated with the object.
    * @returns an Atk.RelationSet representing the relation set of the object. 
    */
  refRelationSet(): import('../Atk').RelationSet;
  /**
    * Gets a reference to the state set of the accessible; the caller must unreference it when it is no longer needed.
    * @returns a reference to an Atk.StateSet which is the state set of the accessible 
    */
  refStateSet(): import('../Atk').StateSet;
  /**
    * 
    * @param handlerId a int which identifies the handler to be removed. 
    */
  removePropertyChangeHandler(handlerId: number): void;
  /**
    * Removes a relationship of the specified type with the specified target.
    * @param relationship The Atk.RelationType of the relation
    * @param target The Atk.Object which is the target of the relation to be removed.
    * @returns True if the relationship is removed. 
    */
  removeRelationship(relationship: import('../Atk').RelationType, target: import('../Atk').Object): boolean;
  /**
    * Sets the accessible description of the accessible. You can’t set the description to None. This is reserved for the initial value. In this aspect None is similar to Atk.Role.UNKNOWN. If you want to set the name to a empty value you can use “”.
    * @param description a character string to be set as the accessible description 
    */
  setDescription(description: string): void;
  /**
    * Sets the accessible name of the accessible. You can’t set the name to None. This is reserved for the initial value. In this aspect None is similar to Atk.Role.UNKNOWN. If you want to set the name to a empty value you can use “”.
    * @param name a character string to be set as the accessible name 
    */
  setName(name: string): void;
  /**
    * Sets the accessible parent of the accessible. parent can be None.
    * @param parent an Atk.Object to be set as the accessible parent 
    */
  setParent(parent: import('../Atk').Object): void;
  /**
    * Sets the role of the accessible.
    * @param role an Atk.Role to be set as the role 
    */
  setRole(role: import('../Atk').Role): void;
  /**
    * The accessible layer of this object 
    */
  readonly accessibleComponentLayer: number;
  /**
    * The accessible MDI value of this object 
    */
  readonly accessibleComponentMdiZorder: number;
  /**
    * Description of an object, formatted for assistive technology access 
    */
  accessibleDescription: string;
  /**
    * The number of links which the current Atk.Hypertext has 
    */
  readonly accessibleHypertextNlinks: number;
  /**
    * Object instance’s name formatted for assistive technology access 
    */
  accessibleName: string;
  /**
    * Parent of the current accessible as returned by Atk.Object.get_parent() 
    */
  accessibleParent: import('../Atk').Object;
  /**
    * The accessible role of this object 
    */
  accessibleRole: import('../Atk').Role;
  /**
    * Is used to notify that the table caption has changed; this property should not be used. accessible-table-caption-object should be used instead deprecated 
    */
  accessibleTableCaption: string;
  /**
    * Is used to notify that the table caption has changed 
    */
  accessibleTableCaptionObject: import('../Atk').Object;
  /**
    * Is used to notify that the table column description has changed deprecated 
    */
  accessibleTableColumnDescription: string;
  /**
    * Is used to notify that the table column header has changed deprecated 
    */
  accessibleTableColumnHeader: import('../Atk').Object;
  /**
    * Is used to notify that the table row description has changed deprecated 
    */
  accessibleTableRowDescription: string;
  /**
    * Is used to notify that the table row header has changed deprecated 
    */
  accessibleTableRowHeader: import('../Atk').Object;
  /**
    * Is used to notify that the table summary has changed 
    */
  accessibleTableSummary: import('../Atk').Object;
  /**
    * Is used to notify that the value has changed deprecated 
    */
  accessibleValue: number;
}

