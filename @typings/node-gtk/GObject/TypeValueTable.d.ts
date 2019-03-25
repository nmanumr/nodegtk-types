/**
  * The GObject.TypeValueTable provides the functions required by the GObject.Value
implementation, to serve as a container for values of a type. 
  */
export declare class TypeValueTable {
/**
  * A string format describing how to collect the contents of this value bit-by-bit. Each character in the format represents an argument to be collected, and the characters themselves indicate the type of the argument. Currently supported arguments are:   * ‘i’ - Integers. passed as collect_values[].v_int. * ‘l’ - Longs. passed as collect_values[].v_long. * ‘d’ - Doubles. passed as collect_values[].v_double. * ‘p’ - Pointers. passed as collect_values[].v_pointer.   It should be noted that for variable argument list construction,   ANSI C promotes every type smaller than an integer to an int, and   floats to doubles. So for collection of short int or str, ‘i’   needs to be used, and for collection of floats ‘d’. 
  */
collectFormat: string;
/**
  *   
  */
collectValue: Object;
/**
  * Format description of the arguments to collect for lcopy_value, analogous to collect_format. Usually, lcopy_format string consists only of ‘p’s to provide lcopy_value() with pointers to storage locations. 
  */
lcopyFormat: string;
/**
  *   
  */
lcopyValue: Object;
/**
  *   
  */
valueCopy: Object;
/**
  *   
  */
valueFree: Object;
/**
  *   
  */
valueInit: Object;
/**
  *   
  */
valuePeekPointer: Object;
}

