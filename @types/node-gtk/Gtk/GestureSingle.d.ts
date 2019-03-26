import * as Gtk from '../Gtk';
export declare interface GestureSingle extends Gtk.Gesture { }

/**
  * Gtk.GestureSingle is a subclass of Gtk.Gesture, optimized (although
not restricted) for dealing with mouse and single-touch gestures. Under
interaction, these gestures stick to the first interacting sequence, which
is accessible through Gtk.GestureSingle.get_current_sequence() while the
gesture is being interacted with. 
  */
export declare class GestureSingle {
  /**
    * Returns the button number self listens for, or 0 if self reacts to any button press.
    * @returns The button number, or 0 for any button 
    */
  getButton(): number;
  /**
    * Returns the button number currently interacting with self, or 0 if there is none.
    * @returns The current button number 
    */
  getCurrentButton(): number;
  /**
    * Returns the event sequence currently interacting with self. This is only meaningful if Gtk.Gesture.is_active() returns True.
    * @returns the current sequence 
    */
  getCurrentSequence(): import('../Gdk').EventSequence | null;
  /**
    * Gets whether a gesture is exclusive. For more information, see Gtk.GestureSingle.set_exclusive().
    * @returns Whether the gesture is exclusive 
    */
  getExclusive(): boolean;
  /**
    * Returns True if the gesture is only triggered by touch events.
    * @returns True if the gesture only handles touch events 
    */
  getTouchOnly(): boolean;
  /**
    * Sets the button number self listens to. If non-0, every button press from a different button number will be ignored. Touch events implicitly match with button 1.
    * @param button button number to listen to, or 0 for any button 
    */
  setButton(button: number): void;
  /**
    * Sets whether self is exclusive. An exclusive gesture will only handle pointer and “pointer emulated” touch events, so at any given time, there is only one sequence able to interact with those.
    * @param exclusive True to make self exclusive 
    */
  setExclusive(exclusive: boolean): void;
  /**
    * If touch_only is True, self will only handle events of type Gdk.EventType.TOUCH_BEGIN, Gdk.EventType.TOUCH_UPDATE or Gdk.EventType.TOUCH_END. If False, mouse events will be handled too.
    * @param touchOnly whether self handles only touch events 
    */
  setTouchOnly(touchOnly: boolean): void;
  /**
    * Button number to listen to 
    */
  button: number;
  /**
    * Whether the gesture is exclusive 
    */
  exclusive: boolean;
  /**
    * Whether the gesture handles only touch events 
    */
  touchOnly: boolean;
}

