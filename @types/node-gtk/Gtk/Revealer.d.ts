import * as Gtk from '../Gtk';
export declare interface Revealer extends Gtk.Bin { }

/**
  * The Gtk.Revealer widget is a container which animates
the transition of its child from invisible to visible. 
  */
export declare class Revealer {
  /**
    * Creates a new Gtk.Revealer.
    * @returns a newly created Gtk.Revealer 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Returns whether the child is fully revealed, in other words whether the transition to the revealed state is completed.
    * @returns True if the child is fully revealed 
    */
  getChildRevealed(): boolean;
  /**
    * Returns whether the child is currently revealed. See Gtk.Revealer.set_reveal_child().
    * @returns True if the child is revealed. 
    */
  getRevealChild(): boolean;
  /**
    * Returns the amount of time (in milliseconds) that transitions will take.
    * @returns the transition duration 
    */
  getTransitionDuration(): number;
  /**
    * Gets the type of animation that will be used for transitions in self.
    * @returns the current transition type of self 
    */
  getTransitionType(): import('../Gtk').RevealerTransitionType;
  /**
    * Tells the Gtk.Revealer to reveal or conceal its child.
    * @param revealChild True to reveal the child 
    */
  setRevealChild(revealChild: boolean): void;
  /**
    * Sets the duration that transitions will take.
    * @param duration the new duration, in milliseconds 
    */
  setTransitionDuration(duration: number): void;
  /**
    * Sets the type of animation that will be used for transitions in self. Available types include various kinds of fades and slides.
    * @param transition the new transition type 
    */
  setTransitionType(transition: import('../Gtk').RevealerTransitionType): void;
  /**
    * Whether the child is revealed and the animation target reached 
    */
  readonly childRevealed: boolean;
  /**
    * Whether the container should reveal the child 
    */
  revealChild: boolean;
  /**
    * The animation duration, in milliseconds 
    */
  transitionDuration: number;
  /**
    * The type of animation used to transition 
    */
  transitionType: import('../Gtk').RevealerTransitionType;
}

