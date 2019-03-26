/**
  * An opaque structure representing a test suite. 
  */
export declare class TestSuite {
  /**
    * Adds test_case to self.
    * @param testCase a GLib.TestCase 
    */
  add(testCase: import('../GLib').TestCase): void;
  /**
    * Adds nestedsuite to self.
    * @param nestedsuite another GLib.TestSuite 
    */
  addSuite(nestedsuite: import('../GLib').TestSuite): void;
}

