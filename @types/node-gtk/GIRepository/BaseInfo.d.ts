/**
  * GIRepository.BaseInfo is the common base struct of all other *Info structs
accessible through the GIRepository.Repository API.
All other structs can be casted to a GIRepository.BaseInfo, for instance: 
  */
export declare class BaseInfo {
  /**
    * Compare two GIRepository.BaseInfo.
    * @param info2 a GIRepository.BaseInfo
    * @returns True if and only if self equals info2. 
    */
  equal(info2: import('../GIRepository').BaseInfo): boolean;
  /**
    * Retrieve an arbitrary attribute associated with this node.
    * @param name a freeform string naming an attribute
    * @returns The value of the attribute, or None if no such attribute exists 
    */
  getAttribute(name: string): string;
  /**
    * Obtain the container of the self. The container is the parent GIRepository.BaseInfo. For instance, the parent of a #GIFunctionInfo is an #GIObjectInfo or #GIInterfaceInfo.
    * @returns the container 
    */
  getContainer(): import('../GIRepository').BaseInfo;
  /**
    * Obtain the name of the self. What the name represents depends on the GIRepository.InfoType of the self. For instance for #GIFunctionInfo it is the name of the function.
    * @returns the name of self or None if it lacks a name. 
    */
  getName(): string;
  /**
    * Obtain the namespace of self.
    * @returns the namespace 
    */
  getNamespace(): string;
  /**
    * Obtain the info type of the GIRepository.BaseInfo.
    * @returns the info type of self 
    */
  getType(): import('../GIRepository').InfoType;
  /**
    * Obtain the typelib this self belongs to
    * @returns the typelib. 
    */
  getTypelib(): import('../GIRepository').Typelib;
  /**
    * Obtain whether the self is represents a metadata which is deprecated or not.
    * @returns True if deprecated 
    */
  isDeprecated(): boolean;
  /**
    * Iterate over all attributes associated with this node.  The iterator structure is typically stack allocated, and must have its first member initialized to None.  Attributes are arbitrary namespaced key–value pairs which can be attached to almost any item.  They are intended for use by software higher in the toolchain than bindings, and are distinct from normal GIR annotations.
    * @param iterator a GIRepository.AttributeIter structure, must be initialized; see below
    * @returns True if there are more attributes  iterator:a GIRepository.AttributeIter structure, must be initialized; see below name:Returned name, must not be freed value:Returned name, must not be freed 
    */
  iterateAttributes(iterator: import('../GIRepository').AttributeIter): [boolean, import('../GIRepository').AttributeIter, string, string];
}

