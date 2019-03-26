export declare class Error {
  args;
  code;
  domain;
  message;
  /**
    * Creates a new GLib.Error; unlike g_error_new(), message is not a printf()-style format string. Use this function if message contains text you don’t have control over, that could include printf() escape sequences. 
    */
  static newLiteral(): void;
  /**
    * Returns True if self matches domain and code, False otherwise. In particular, when self is None, False will be returned. 
    */
  matches(): void;
}

