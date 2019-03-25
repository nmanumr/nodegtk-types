/**
  * A structure holding information for a specific type.
It is filled in by the GObject.type_query() function. 
  */
export declare class TypeQuery {
/**
  * the size of the class structure 
  */
classSize: number;
/**
  * the size of the instance structure 
  */
instanceSize: number;
/**
  * the GObject.GType value of the type 
  */
type: import('../GObject').GType;
/**
  * the name of the type 
  */
typeName: string;
}

