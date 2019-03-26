import * as Gtk from '../Gtk';
export declare interface Gesture extends Gtk.EventController { }

/**
  * Gtk.Gesture is the base object for gesture recognition, although this
object is quite generalized to serve as a base for multi-touch gestures,
it is suitable to implement single-touch and pointer-based gestures (using
the special None Gdk.EventSequence value for these). 
  */
export declare abstract class Gesture {
  /**
    * If there are touch sequences being currently handled by self, this function returns True and fills in rect with the bounding box containing all active touches. Otherwise, False will be returned.
    * @returns True if there are active touches, False otherwise  rect:bounding box containing all active touches. 
    */
  getBoundingBox(): [boolean, import('../Gdk').Rectangle];
  /**
    * If there are touch sequences being currently handled by self, this function returns True and fills in x and y with the center of the bounding box containing all active touches. Otherwise, False will be returned.
    * @returns False if no active touches are present, True otherwise  x:X coordinate for the bounding box center y:Y coordinate for the bounding box center 
    */
  getBoundingBoxCenter(): [boolean, number, number];
  /**
    * Returns the master Gdk.Device that is currently operating on self, or None if the gesture is not being interacted.
    * @returns a Gdk.Device, or None 
    */
  getDevice(): import('../Gdk').Device | null;
  /**
    * Returns all gestures in the group of self
    * @returns The list of Gtk.Gestures, free with g_list_free() 
    */
  getGroup(): import('../Gtk').Gesture[];
  /**
    * Returns the last event that was processed for sequence.
    * @param sequence a Gdk.EventSequence
    * @returns The last event from sequence 
    */
  getLastEvent(sequence: import('../Gdk').EventSequence | null): import('../Gdk').Event | null;
  /**
    * Returns the Gdk.EventSequence that was last updated on self.
    * @returns The last updated sequence 
    */
  getLastUpdatedSequence(): import('../Gdk').EventSequence | null;
  /**
    * If sequence is currently being interpreted by self, this function returns True and fills in x and y with the last coordinates stored for that event sequence. The coordinates are always relative to the widget allocation.
    * @param sequence a Gdk.EventSequence, or None for pointer events
    * @returns True if sequence is currently interpreted  x:return location for X axis of the sequence coordinates y:return location for Y axis of the sequence coordinates 
    */
  getPoint(sequence: import('../Gdk').EventSequence | null): [boolean, number, number];
  /**
    * Returns the sequence state, as seen by self.
    * @param sequence a Gdk.EventSequence
    * @returns The sequence state in self 
    */
  getSequenceState(sequence: import('../Gdk').EventSequence): import('../Gtk').EventSequenceState;
  /**
    * Returns the list of Gdk.EventSequences currently being interpreted by self.
    * @returns A list of Gdk.EventSequences, the list elements are owned by GTK+ and must not be freed or modified, the list itself must be deleted through g_list_free() 
    */
  getSequences(): import('../Gdk').EventSequence[];
  /**
    * Returns the user-defined window that receives the events handled by self. See Gtk.Gesture.set_window() for more information.
    * @returns the user defined window, or None if none 
    */
  getWindow(): import('../Gdk').Window | null;
  /**
    * Adds gesture to the same group than self. Gestures are by default isolated in their own groups.
    * @param gesture a Gtk.Gesture 
    */
  group(gesture: import('../Gtk').Gesture): void;
  /**
    * Returns True if self is currently handling events corresponding to sequence.
    * @param sequence a Gdk.EventSequence or None
    * @returns True if self is handling sequence, False otherwise 
    */
  handlesSequence(sequence: import('../Gdk').EventSequence | null): boolean;
  /**
    * Returns True if the gesture is currently active. A gesture is active meanwhile there are touch sequences interacting with it.
    * @returns True if gesture is active 
    */
  isActive(): boolean;
  /**
    * Returns True if both gestures pertain to the same group.
    * @param other another Gtk.Gesture
    * @returns whether the gestures are grouped 
    */
  isGroupedWith(other: import('../Gtk').Gesture): boolean;
  /**
    * Returns True if the gesture is currently recognized. A gesture is recognized if there are as many interacting touch sequences as required by self, and Gtk.Gesture ::check returned True for the sequences being currently interpreted.
    * @returns True if gesture is recognized 
    */
  isRecognized(): boolean;
  /**
    * Sets the state of sequence in self. Sequences start in state Gtk.EventSequenceState.NONE, and whenever they change state, they can never go back to that state. Likewise, sequences in state Gtk.EventSequenceState.DENIED cannot turn back to a not denied state. With these rules, the lifetime of an event sequence is constrained to the next four:
    * @param sequence a Gdk.EventSequence
    * @param state the sequence state
    * @returns True if sequence is handled by self, and the state is changed successfully 
    */
  setSequenceState(sequence: import('../Gdk').EventSequence, state: import('../Gtk').EventSequenceState): boolean;
  /**
    * Sets the state of all sequences that self is currently interacting with. See Gtk.Gesture.set_sequence_state() for more details on sequence states.
    * @param state the sequence state
    * @returns True if the state of at least one sequence was changed successfully 
    */
  setState(state: import('../Gtk').EventSequenceState): boolean;
  /**
    * Sets a specific window to receive events about, so self will effectively handle only events targeting window, or a child of it. window must pertain to Gtk.EventController.get_widget().
    * @param window a Gdk.Window, or None 
    */
  setWindow(window: import('../Gdk').Window | null): void;
  /**
    * Separates self into an isolated group. 
    */
  ungroup(): void;
  /**
    * Number of points needed to trigger the gesture 
    */
  nPoints: number;
  /**
    * Gdk.Window to receive events about 
    */
  window: import('../Gdk').Window;
}

