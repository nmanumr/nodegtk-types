/**
  * A function which is called when an object emits a matching event, as used in #atk_add_focus_tracker. Currently the only events for which object-specific handlers are supported are events of type “focus:”.  Most clients of ATK will prefer to attach signal handlers for the various ATK signals instead.
  * @param obj An Atk.Object instance for whom the callback will be called when the specified event (e.g. ‘focus:’) takes place. 
  */
export declare type eventListener = (obj: import('../Atk').Object) => void;
/**
  * An Atk.EventListenerInit function is a special function that is called in order to initialize the per-object event registration system used by Atk.EventListener, if any preparation is required. 
  */
export declare type eventListenerInit = () => void;
/**
  * The type of callback function used for atk_component_add_focus_handler() and Atk.Component.remove_focus_handler()
  * @param object the Atk.Object that receives/lose the focus
  * @param focusIn True if the object receives the focus 
  */
export declare type focusHandler = (object: import('../Atk').Object, focusIn: boolean) => void;
/**
  * An Atk.KeySnoopFunc is a type of callback which is called whenever a key event occurs, if registered via atk_add_key_event_listener.  It allows for pre-emptive interception of key events via the return code as described below.
  * @param event an Atk.KeyEventStruct containing information about the key event for which notification is being given.
  * @param userData a block of data which will be passed to the event listener, on notification.
  * @returns True (nonzero) if the event emission should be stopped and the event discarded without being passed to the normal GUI recipient; False (zero) if the event dispatch to the client application should proceed as normal. see atk_add_key_event_listener. 
  */
export declare type keySnoopFunc = (event: import('../Atk').KeyEventStruct, userData: Object | null) => number;
/**
  * An Atk.PropertyChangeHandler is a function which is executed when an Atk.Object’s property changes value. It is specified in a call to atk_object_connect_property_change_handler().
  * @param obj atkobject which property changes
  * @param vals values changed 
  */
export declare type propertyChangeHandler = (obj: import('../Atk').Object, vals: import('../Atk').PropertyValues) => void;
