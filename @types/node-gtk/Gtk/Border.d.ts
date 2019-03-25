/**
  * A struct that specifies a border around a rectangular area
that can be of different width on each side. 
  */
export declare class Border {
/**
  * Allocates a new Gtk.Border-struct and initializes its elements to zero.
  * @returns a newly allocated Gtk.Border-struct. Free with Gtk.Border.free() 
  */
static new(): import('../Gtk').Border;
/**
  * Copies a Gtk.Border-struct.
  * @returns a copy of self. 
  */
copy(): import('../Gtk').Border;
/**
  * Frees a Gtk.Border-struct. 
  */
free(): void;
/**
  * The width of the bottom border 
  */
bottom: number;
/**
  * The width of the left border 
  */
left: number;
/**
  * The width of the right border 
  */
right: number;
/**
  * The width of the top border 
  */
top: number;
}

