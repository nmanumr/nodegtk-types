/**
  * The Atk.ObjectFactory which creates an Atk.NoOpObject. An instance of
this is created by an Atk.Registry if no factory type has not been
specified to create an accessible object of a particular type. 
  */
export declare class NoOpObjectFactory extends import('../Atk').ObjectFactory{
/**
  * Creates an instance of an Atk.ObjectFactory which generates primitive (non-functioning) Atk.Objects.
  * @returns an instance of an Atk.ObjectFactory 
  */
static new(): import('../Atk').ObjectFactory;
/**
  *   
  */
parent: import('../Atk').ObjectFactory;
}

