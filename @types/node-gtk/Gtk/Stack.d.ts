import * as Gtk from '../Gtk';
export declare interface Stack extends Gtk.Container { }

/**
  * The Gtk.Stack widget is a container which only shows
one of its children at a time. In contrast to Gtk.Notebook,
Gtk.Stack does not provide a means for users to change the
visible child. Instead, the Gtk.StackSwitcher widget can be
used with Gtk.Stack to provide this functionality. 
  */
export declare class Stack {
  /**
    * Creates a new Gtk.Stack container.
    * @returns a new Gtk.Stack 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Adds a child to self. The child is identified by the name.
    * @param child the widget to add
    * @param name the name for child 
    */
  addNamed(child: import('../Gtk').Widget, name: string): void;
  /**
    * Adds a child to self. The child is identified by the name. The title will be used by Gtk.StackSwitcher to represent child in a tab bar, so it should be short.
    * @param child the widget to add
    * @param name the name for child
    * @param title a human-readable title for child 
    */
  addTitled(child: import('../Gtk').Widget, name: string, title: string): void;
  /**
    * Finds the child of the Gtk.Stack with the name given as the argument. Returns None if there is no child with this name.
    * @param name the name of the child to find
    * @returns the requested child of the Gtk.Stack 
    */
  getChildByName(name: string): import('../Gtk').Widget | null;
  /**
    * Gets whether self is horizontally homogeneous. See Gtk.Stack.set_hhomogeneous().
    * @returns whether self is horizontally homogeneous. 
    */
  getHhomogeneous(): boolean;
  /**
    * Gets whether self is homogeneous. See Gtk.Stack.set_homogeneous().
    * @returns whether self is homogeneous. 
    */
  getHomogeneous(): boolean;
  /**
    * Returns wether the Gtk.Stack is set up to interpolate between the sizes of children on page switch.
    * @returns True if child sizes are interpolated 
    */
  getInterpolateSize(): boolean;
  /**
    * Returns the amount of time (in milliseconds) that transitions between pages in self will take.
    * @returns the transition duration 
    */
  getTransitionDuration(): number;
  /**
    * Returns whether the self is currently in a transition from one page to another.
    * @returns True if the transition is currently running, False otherwise. 
    */
  getTransitionRunning(): boolean;
  /**
    * Gets the type of animation that will be used for transitions between pages in self.
    * @returns the current transition type of self 
    */
  getTransitionType(): import('../Gtk').StackTransitionType;
  /**
    * Gets whether self is vertically homogeneous. See Gtk.Stack.set_vhomogeneous().
    * @returns whether self is vertically homogeneous. 
    */
  getVhomogeneous(): boolean;
  /**
    * Gets the currently visible child of self, or None if there are no visible children.
    * @returns the visible child of the Gtk.Stack 
    */
  getVisibleChild(): import('../Gtk').Widget | null;
  /**
    * Returns the name of the currently visible child of self, or None if there is no visible child.
    * @returns the name of the visible child of the Gtk.Stack 
    */
  getVisibleChildName(): string | null;
  /**
    * Sets the Gtk.Stack to be horizontally homogeneous or not. If it is homogeneous, the Gtk.Stack will request the same width for all its children. If it isn’t, the stack may change width when a different child becomes visible.
    * @param hhomogeneous True to make self horizontally homogeneous 
    */
  setHhomogeneous(hhomogeneous: boolean): void;
  /**
    * Sets the Gtk.Stack to be homogeneous or not. If it is homogeneous, the Gtk.Stack will request the same size for all its children. If it isn’t, the stack may change size when a different child becomes visible.
    * @param homogeneous True to make self homogeneous 
    */
  setHomogeneous(homogeneous: boolean): void;
  /**
    * Sets whether or not self will interpolate its size when changing the visible child. If the Gtk.Stack :interpolate-size property is set to True, self will interpolate its size between the current one and the one it’ll take after changing the visible child, according to the set transition duration.
    * @param interpolateSize the new value 
    */
  setInterpolateSize(interpolateSize: boolean): void;
  /**
    * Sets the duration that transitions between pages in self will take.
    * @param duration the new duration, in milliseconds 
    */
  setTransitionDuration(duration: number): void;
  /**
    * Sets the type of animation that will be used for transitions between pages in self. Available types include various kinds of fades and slides.
    * @param transition the new transition type 
    */
  setTransitionType(transition: import('../Gtk').StackTransitionType): void;
  /**
    * Sets the Gtk.Stack to be vertically homogeneous or not. If it is homogeneous, the Gtk.Stack will request the same height for all its children. If it isn’t, the stack may change height when a different child becomes visible.
    * @param vhomogeneous True to make self vertically homogeneous 
    */
  setVhomogeneous(vhomogeneous: boolean): void;
  /**
    * Makes child the visible child of self.
    * @param child a child of self 
    */
  setVisibleChild(child: import('../Gtk').Widget): void;
  /**
    * Makes the child with the given name visible.
    * @param name the name of the child to make visible
    * @param transition the transition type to use 
    */
  setVisibleChildFull(name: string, transition: import('../Gtk').StackTransitionType): void;
  /**
    * Makes the child with the given name visible.
    * @param name the name of the child to make visible 
    */
  setVisibleChildName(name: string): void;
  /**
    * Horizontally homogeneous sizing 
    */
  hhomogeneous: boolean;
  /**
    * Homogeneous sizing 
    */
  homogeneous: boolean;
  /**
    * Whether or not the size should smoothly change when changing between differently sized children 
    */
  interpolateSize: boolean;
  /**
    * The animation duration, in milliseconds 
    */
  transitionDuration: number;
  /**
    * Whether or not the transition is currently running 
    */
  readonly transitionRunning: boolean;
  /**
    * The type of animation used to transition 
    */
  transitionType: import('../Gtk').StackTransitionType;
  /**
    * Vertically homogeneous sizing 
    */
  vhomogeneous: boolean;
  /**
    * The widget currently visible in the stack 
    */
  visibleChild: import('../Gtk').Widget;
  /**
    * The name of the widget currently visible in the stack 
    */
  visibleChildName: string;
}

