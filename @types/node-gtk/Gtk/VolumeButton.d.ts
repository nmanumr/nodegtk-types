import * as Gtk from '../Gtk';
export declare interface VolumeButton extends Gtk.ScaleButton { }

/**
  * Gtk.VolumeButton is a subclass of Gtk.ScaleButton that has
been tailored for use as a volume control widget with suitable
icons, tooltips and accessible labels. 
  */
export declare class VolumeButton {
  /**
    * Creates a Gtk.VolumeButton, with a range between 0.0 and 1.0, with a stepping of 0.02. Volume values can be obtained and modified using the functions from Gtk.ScaleButton.
    * @returns a new Gtk.VolumeButton 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Whether to use symbolic icons 
    */
  useSymbolic: boolean;
}

