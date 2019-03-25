/**
  * A structure containing a weak reference to a GObject.Object.  It can either
be empty (i.e. point to None), or point to an object for as long as
at least one “strong” reference to that object exists. Before the
object’s GObject.ObjectClass.dispose method is called, every GObject.WeakRef
associated with becomes empty (i.e. points to None). 
  */
export declare class WeakRef {
}

