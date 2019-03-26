/**
  * The GLib.Rand struct is an opaque data structure. It should only be
accessed through the g_rand_* functions. 
  */
export declare class Rand {
  /**
    * Returns the next random float from self equally distributed over the range [0..1).
    * @returns a random number 
    */
  double(): number;
  /**
    * Returns the next random float from self equally distributed over the range [begin..`end`).
    * @param begin lower closed bound of the interval
    * @param end upper open bound of the interval
    * @returns a random number 
    */
  doubleRange(begin: number, end: number): number;
  /**
    * Frees the memory allocated for the GLib.Rand. 
    */
  free(): void;
  /**
    * Returns the next random #guint32 from self equally distributed over the range [0..2^32-1].
    * @returns a random number 
    */
  int(): number;
  /**
    * Returns the next random #gint32 from self equally distributed over the range [begin..`end`-1].
    * @param begin lower closed bound of the interval
    * @param end upper open bound of the interval
    * @returns a random number 
    */
  intRange(begin: number, end: number): number;
  /**
    * Sets the seed for the random number generator GLib.Rand to seed.
    * @param seed a value to reinitialize the random number generator 
    */
  setSeed(seed: number): void;
  /**
    * Initializes the random number generator by an array of longs. Array can be of arbitrary size, though only the first 624 values are taken.  This function is useful if you have many low entropy seeds, or if you require more then 32 bits of actual entropy for your application.
    * @param seed array to initialize with
    * @param seedLength length of array 
    */
  setSeedArray(seed: number, seedLength: number): void;
}

