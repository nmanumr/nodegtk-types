/**
  * Represents a request of a screen object in a given orientation. These
are primarily used in container implementations when allocating a natural
size for children calling. See Gtk.distribute_natural_allocation(). 
  */
export declare class RequestedSize {
/**
  * A client pointer 
  */
data: Object;
/**
  * The minimum size needed for allocation in a given orientation 
  */
minimumSize: number;
/**
  * The natural size for allocation in a given orientation 
  */
naturalSize: number;
}

