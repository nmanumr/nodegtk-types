import * as Gtk from '../Gtk';
export declare interface ProgressBar extends Gtk.Widget, Gtk.Orientable { }

/**
  * The Gtk.ProgressBar is typically used to display the progress of a long
running operation. It provides a visual clue that processing is underway.
The Gtk.ProgressBar can be used in two different modes: percentage mode
and activity mode. 
  */
export declare class ProgressBar {
  /**
    * Creates a new Gtk.ProgressBar.
    * @returns a Gtk.ProgressBar. 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Returns the ellipsizing position of the progress bar. See Gtk.ProgressBar.set_ellipsize().
    * @returns Pango.EllipsizeMode 
    */
  getEllipsize(): import('../Pango').EllipsizeMode;
  /**
    * Returns the current fraction of the task that’s been completed.
    * @returns a fraction from 0.0 to 1.0 
    */
  getFraction(): number;
  /**
    * Gets the value set by Gtk.ProgressBar.set_inverted().
    * @returns True if the progress bar is inverted 
    */
  getInverted(): boolean;
  /**
    * Retrieves the pulse step set with Gtk.ProgressBar.set_pulse_step().
    * @returns a fraction from 0.0 to 1.0 
    */
  getPulseStep(): number;
  /**
    * Gets the value of the Gtk.ProgressBar :show-text property. See Gtk.ProgressBar.set_show_text().
    * @returns True if text is shown in the progress bar 
    */
  getShowText(): boolean;
  /**
    * Retrieves the text that is displayed with the progress bar, if any, otherwise None. The return value is a reference to the text, not a copy of it, so will become invalid if you change the text in the progress bar.
    * @returns text, or None; this string is owned by the widget and should not be modified or freed. 
    */
  getText(): string | null;
  /**
    * Indicates that some progress has been made, but you don’t know how much. Causes the progress bar to enter “activity mode,” where a block bounces back and forth. Each call to Gtk.ProgressBar.pulse() causes the block to move by a little bit (the amount of movement per pulse is determined by Gtk.ProgressBar.set_pulse_step()). 
    */
  pulse(): void;
  /**
    * Sets the mode used to ellipsize (add an ellipsis: “…”) the text if there is not enough space to render the entire string.
    * @param mode a Pango.EllipsizeMode 
    */
  setEllipsize(mode: import('../Pango').EllipsizeMode): void;
  /**
    * Causes the progress bar to “fill in” the given fraction of the bar. The fraction should be between 0.0 and 1.0, inclusive.
    * @param fraction fraction of the task that’s been completed 
    */
  setFraction(fraction: number): void;
  /**
    * Progress bars normally grow from top to bottom or left to right. Inverted progress bars grow in the opposite direction.
    * @param inverted True to invert the progress bar 
    */
  setInverted(inverted: boolean): void;
  /**
    * Sets the fraction of total progress bar length to move the bouncing block for each call to Gtk.ProgressBar.pulse().
    * @param fraction fraction between 0.0 and 1.0 
    */
  setPulseStep(fraction: number): void;
  /**
    * Sets whether the progress bar will show text next to the bar. The shown text is either the value of the Gtk.ProgressBar :text property or, if that is None, the Gtk.ProgressBar :fraction value, as a percentage.
    * @param showText whether to show text 
    */
  setShowText(showText: boolean): void;
  /**
    * Causes the given text to appear next to the progress bar.
    * @param text a UTF-8 string, or None 
    */
  setText(text: string | null): void;
  /**
    * The preferred place to ellipsize the string, if the progress bar does not have enough room to display the entire string, if at all. 
    */
  ellipsize: import('../Pango').EllipsizeMode;
  /**
    * The fraction of total work that has been completed 
    */
  fraction: number;
  /**
    * Invert the direction in which the progress bar grows 
    */
  inverted: boolean;
  /**
    * The fraction of total progress to move the bouncing block when pulsed 
    */
  pulseStep: number;
  /**
    * Whether the progress is shown as text. 
    */
  showText: boolean;
  /**
    * Text to be displayed in the progress bar 
    */
  text: string;
}

