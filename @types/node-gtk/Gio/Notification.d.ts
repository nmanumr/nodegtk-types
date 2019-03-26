import * as GObject from '../GObject';
export declare interface Notification extends GObject.Object { }

/**
  * Gio.Notification is a mechanism for creating a notification to be shown
to the user – typically as a pop-up notification presented by the
desktop environment shell. 
  */
export declare class Notification {
  /**
    * Creates a new Gio.Notification with title as its title.
    * @param title the title of the notification
    * @returns a new Gio.Notification instance 
    */
  static new(title: string): import('../Gio').Notification;
  /**
    * Adds a button to self that activates the action in detailed_action when clicked. That action must be an application-wide action (starting with “app.”). If detailed_action contains a target, the action will be activated with that target as its parameter.
    * @param label label of the button
    * @param detailedAction a detailed action name 
    */
  addButton(label: string, detailedAction: string): void;
  /**
    * Adds a button to self that activates action when clicked. action must be an application-wide action (it must start with “app.”).
    * @param label label of the button
    * @param action an action name
    * @param target a GLib.Variant to use as action’s parameter, or None 
    */
  addButtonWithTarget(label: string, action: string, target: import('../GLib').Variant | null): void;
  /**
    * Sets the body of self to body.
    * @param body the new body for self, or None 
    */
  setBody(body: string | null): void;
  /**
    * Sets the default action of self to detailed_action. This action is activated when the notification is clicked on.
    * @param detailedAction a detailed action name 
    */
  setDefaultAction(detailedAction: string): void;
  /**
    * Sets the default action of self to action. This action is activated when the notification is clicked on. It must be an application-wide action (start with “app.”).
    * @param action an action name
    * @param target a GLib.Variant to use as action’s parameter, or None 
    */
  setDefaultActionAndTarget(action: string, target: import('../GLib').Variant | null): void;
  /**
    * Sets the icon of self to icon.
    * @param icon the icon to be shown in self, as a Gio.Icon 
    */
  setIcon(icon: import('../Gio').Icon): void;
  /**
    * Sets the priority of self to priority. See Gio.NotificationPriority for possible values.
    * @param priority a Gio.NotificationPriority 
    */
  setPriority(priority: import('../Gio').NotificationPriority): void;
  /**
    * Sets the title of self to title.
    * @param title the new title for self 
    */
  setTitle(title: string): void;
  /**
    * Deprecated in favor of Gio.Notification.set_priority().
    * @param urgent True if self is urgent 
    */
  setUrgent(urgent: boolean): void;
}

