import * as GObject from '../GObject';
export declare interface ParamSpecOverride extends GObject.ParamSpec { }

/**
  * This is a type of GObject.ParamSpec type that simply redirects operations to
another paramspec.  All operations other than getting or
setting the value are redirected, including accessing the nick and
blurb, validating a value, and so forth. See
GObject.ParamSpec.get_redirect_target() for retrieving the overidden
property. GObject.ParamSpecOverride is used in implementing
GObject.ObjectClass.override_property(), and will not be directly useful
unless you are implementing a new base type similar to GObject.Object. 
  */
export declare class ParamSpecOverride {
}

