export declare class TestLogBuffer {
  /**
    * Internal function for gtester to free test log messages, no ABI guarantees provided. 
    */
  free(): void;
  /**
    * Internal function for gtester to decode test log messages, no ABI guarantees provided. 
    */
  push(nBytes: number, bytes: number): void;
}

