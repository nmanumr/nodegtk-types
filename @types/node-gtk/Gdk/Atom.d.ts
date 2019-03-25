/**
  * An opaque type representing a string as an index into a table
of strings on the X server. 
  */
export declare class Atom {
/**
  * Finds or creates an atom corresponding to a given string.
  * @param atomName a string.
  * @param onlyIfExists if True, GDK is allowed to not create a new atom, but just return %GDK_NONE if the requested atom doesn’t already exists. Currently, the flag is ignored, since checking the existance of an atom is as expensive as creating it.
  * @returns the atom corresponding to atom_name. 
  */
static intern(atomName: string, onlyIfExists: boolean): import('../Gdk').Atom;
/**
  * Finds or creates an atom corresponding to a given string.
  * @param atomName a static string
  * @returns the atom corresponding to atom_name 
  */
static internStaticString(atomName: string): import('../Gdk').Atom;
/**
  * Determines the string corresponding to an atom.
  * @returns a newly-allocated string containing the string corresponding to self. When you are done with the return value, you should free it using GLib.free(). 
  */
name(): string;
}

