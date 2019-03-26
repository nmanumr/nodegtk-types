import * as GObject from '../GObject';
export declare interface FilenameCompleter extends GObject.Object { }

/**
  * Completes partial file and directory names given a partial string by
looking in the file system for clues. Can return a list of possible
completion strings for widget implementations. 
  */
export declare class FilenameCompleter {
  /**
    * Creates a new filename completer.
    * @returns a Gio.FilenameCompleter. 
    */
  static new(): import('../Gio').FilenameCompleter;
  /**
    * Obtains a completion for initial_text from self.
    * @param initialText text to be completed.
    * @returns a completed string, or None if no completion exists. This string is not owned by GIO, so remember to GLib.free() it when finished. 
    */
  getCompletionSuffix(initialText: string): string;
  /**
    * Gets an array of completion strings for a given initial text.
    * @param initialText text to be completed.
    * @returns array of strings with possible completions for initial_text. This array must be freed by GLib.strfreev() when finished. 
    */
  getCompletions(initialText: string): string[];
  /**
    * If dirs_only is True, self will only complete directory names, and not file names.
    * @param dirsOnly a bool. 
    */
  setDirsOnly(dirsOnly: boolean): void;
}

