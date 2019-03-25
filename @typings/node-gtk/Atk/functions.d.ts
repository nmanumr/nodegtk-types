/**
  * Frees the memory used by an #AtkAttributeSet, including all its Atk.Attributes.
  * @param attribSet The #AtkAttributeSet to free 
  */
export declare function attributeSetFree(attribSet: Object): void;
/**
  * Cause the focus tracker functions which have been specified to be executed for the object.
  * @param object an Atk.Object 
  */
export declare function focusTrackerNotify(object: import('../Atk').Object): void;
/**
  * Returns the binary age as passed to libtool when building the ATK library the process is running against.
  * @returns the binary age of the ATK library 
  */
export declare function getBinaryAge(): number;
/**
  * Gets a default implementation of the Atk.ObjectFactory/type registry. Note: For most toolkit maintainers, this will be the correct registry for registering new Atk.Object factories. Following a call to this function, maintainers may call Atk.Registry.set_factory_type() to associate an Atk.ObjectFactory subclass with the GObject.GType of objects for whom accessibility information will be provided.
  * @returns a default implementation of the Atk.ObjectFactory/type registry 
  */
export declare function getDefaultRegistry(): import('../Atk').Registry;
/**
  * Gets the currently focused object.
  * @returns the currently focused object for the current application 
  */
export declare function getFocusObject(): import('../Atk').Object;
/**
  * Returns the interface age as passed to libtool when building the ATK library the process is running against.
  * @returns the interface age of the ATK library 
  */
export declare function getInterfaceAge(): number;
/**
  * Returns the major version number of the ATK library.  (e.g. in ATK version 2.7.4 this is 2.)
  * @returns the major version number of the ATK library 
  */
export declare function getMajorVersion(): number;
/**
  * Returns the micro version number of the ATK library.  (e.g. in ATK version 2.7.4 this is 4.)
  * @returns the micro version number of the ATK library 
  */
export declare function getMicroVersion(): number;
/**
  * Returns the minor version number of the ATK library.  (e.g. in ATK version 2.7.4 this is 7.)
  * @returns the minor version number of the ATK library 
  */
export declare function getMinorVersion(): number;
/**
  * Gets the root accessible container for the current application.
  * @returns the root accessible container for the current application 
  */
export declare function getRoot(): import('../Atk').Object;
/**
  * Gets name string for the GUI toolkit implementing ATK for this application.
  * @returns name string for the GUI toolkit implementing ATK for this application 
  */
export declare function getToolkitName(): string;
/**
  * Gets version string for the GUI toolkit implementing ATK for this application.
  * @returns version string for the GUI toolkit implementing ATK for this application 
  */
export declare function getToolkitVersion(): string;
/**
  * Gets the current version for ATK.
  * @returns version string for ATK 
  */
export declare function getVersion(): string;
/**
  * Get the Atk.RelationType type corresponding to a relation name.
  * @param name a string which is the (non-localized) name of an ATK relation type.
  * @returns the Atk.RelationType enumerated type corresponding to the specified name, or Atk.RelationType.NULL if no matching relation type is found. 
  */
export declare function relationTypeForName(name: string): import('../Atk').RelationType;
/**
  * Gets the description string describing the Atk.RelationType type.
  * @param type The Atk.RelationType whose name is required
  * @returns the string describing the Atk.RelationType 
  */
export declare function relationTypeGetName(type: import('../Atk').RelationType): string;
/**
  * Associate name with a new Atk.RelationType
  * @param name a name string
  * @returns an Atk.RelationType associated with name 
  */
export declare function relationTypeRegister(name: string): import('../Atk').RelationType;
/**
  * 
  * @param trackerId the id of the focus tracker to remove 
  */
export declare function removeFocusTracker(trackerId: number): void;
/**
  * listener_id is the value returned by #atk_add_global_event_listener when you registered that event listener.
  * @param listenerId the id of the event listener to remove 
  */
export declare function removeGlobalEventListener(listenerId: number): void;
/**
  * listener_id is the value returned by #atk_add_key_event_listener when you registered that event listener.
  * @param listenerId the id of the event listener to remove 
  */
export declare function removeKeyEventListener(listenerId: number): void;
/**
  * Get the Atk.Role type corresponding to a rolew name.
  * @param name a string which is the (non-localized) name of an ATK role.
  * @returns the Atk.Role enumerated type corresponding to the specified name, or Atk.Role.INVALID if no matching role is found. 
  */
export declare function roleForName(name: string): import('../Atk').Role;
/**
  * Gets the localized description string describing the Atk.Role role.
  * @param role The Atk.Role whose localized name is required
  * @returns the localized string describing the Atk.Role 
  */
export declare function roleGetLocalizedName(role: import('../Atk').Role): string;
/**
  * Gets the description string describing the Atk.Role role.
  * @param role The Atk.Role whose name is required
  * @returns the string describing the Atk.Role 
  */
export declare function roleGetName(role: import('../Atk').Role): string;
/**
  * Registers the role specified by name. name must be a meaningful name. So it should not be empty, or consisting on whitespaces.
  * @param name a character string describing the new role.
  * @returns an Atk.Role for the new role if added properly. Atk.Role.INVALID in case of error. 
  */
export declare function roleRegister(name: string): import('../Atk').Role;
/**
  * Gets the Atk.StateType corresponding to the description string name.
  * @param name a character string state name
  * @returns an Atk.StateType corresponding to name 
  */
export declare function stateTypeForName(name: string): import('../Atk').StateType;
/**
  * Gets the description string describing the Atk.StateType type.
  * @param type The Atk.StateType whose name is required
  * @returns the string describing the Atk.StateType 
  */
export declare function stateTypeGetName(type: import('../Atk').StateType): string;
/**
  * Register a new object state.
  * @param name a character string describing the new state.
  * @returns an #AtkState value for the new state. 
  */
export declare function stateTypeRegister(name: string): import('../Atk').StateType;
/**
  * Get the Atk.TextAttribute type corresponding to a text attribute name.
  * @param name a string which is the (non-localized) name of an ATK text attribute.
  * @returns the Atk.TextAttribute enumerated type corresponding to the specified name, or #ATK_TEXT_ATTRIBUTE_INVALID if no matching text attribute is found. 
  */
export declare function textAttributeForName(name: string): import('../Atk').TextAttribute;
/**
  * Gets the name corresponding to the Atk.TextAttribute
  * @param attr The Atk.TextAttribute whose name is required
  * @returns a string containing the name; this string should not be freed 
  */
export declare function textAttributeGetName(attr: import('../Atk').TextAttribute): string;
/**
  * Gets the value for the index of the Atk.TextAttribute
  * @param attr The Atk.TextAttribute for which a value is required
  * @param index The index of the required value
  * @returns a string containing the value; this string should not be freed; None is returned if there are no values maintained for the attr value. 
  */
export declare function textAttributeGetValue(attr: import('../Atk').TextAttribute, index: number): string | null;
/**
  * Associate name with a new Atk.TextAttribute
  * @param name a name string
  * @returns an Atk.TextAttribute associated with name 
  */
export declare function textAttributeRegister(name: string): import('../Atk').TextAttribute;
/**
  * Frees the memory associated with an array of Atk.TextRange. It is assumed that the array was returned by the function Atk.Text.get_bounded_ranges and is None terminated.
  * @param ranges A pointer to an array of Atk.TextRange which is to be freed. 
  */
export declare function textFreeRanges(ranges: import('../Atk').TextRange): void;
/**
  * Gets the localized description string describing the Atk.ValueType value_type.
  * @param valueType The Atk.ValueType whose localized name is required
  * @returns the localized string describing the Atk.ValueType 
  */
export declare function valueTypeGetLocalizedName(valueType: import('../Atk').ValueType): string;
/**
  * Gets the description string describing the Atk.ValueType value_type.
  * @param valueType The Atk.ValueType whose name is required
  * @returns the string describing the Atk.ValueType 
  */
export declare function valueTypeGetName(valueType: import('../Atk').ValueType): string;
