/**
  * Structure representing a single field in a structured log entry. See
g_log_structured() for details. 
  */
export declare class LogField {
/**
  * field name (UTF-8 string) 
  */
key: string;
/**
  * length of value, in bytes, or -1 if it is nul-terminated 
  */
length: number;
/**
  * field value (arbitrary bytes) 
  */
value: Object;
}

