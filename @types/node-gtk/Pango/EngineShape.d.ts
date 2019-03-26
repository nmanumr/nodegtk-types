import * as Pango from '../Pango';
export declare interface EngineShape extends Pango.Engine { }

/**
  * The Pango.EngineShape class is implemented by engines that
customize the rendering-system dependent part of the
Pango pipeline for a particular script or language.
A Pango.EngineShape implementation is then specific to both
a particular rendering system or group of rendering systems
and to a particular script. For instance, there is one
Pango.EngineShape implementation to handle shaping Arabic
for Fontconfig-based backends. 
  */
export declare abstract class EngineShape {
}

