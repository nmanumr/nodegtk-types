import * as Gio from '../Gio';
export declare interface AppLaunchContext extends Gio.AppLaunchContext { }

/**
  * Gdk.AppLaunchContext is an implementation of Gio.AppLaunchContext that
handles launching an application in a graphical context. It provides
startup notification and allows to launch applications on a specific
screen or workspace. 
  */
export declare class AppLaunchContext {
/**
  * Creates a new Gdk.AppLaunchContext.
  * @returns a new Gdk.AppLaunchContext 
  */
static new(): import('../Gdk').AppLaunchContext;
/**
  * Sets the workspace on which applications will be launched when using this context when running under a window manager that supports multiple workspaces, as described in the Extended Window Manager Hints.
  * @param desktop the number of a workspace, or -1 
  */
setDesktop(desktop: number): void;
/**
  * Sets the display on which applications will be launched when using this context. See also Gdk.AppLaunchContext.set_screen().
  * @param display a Gdk.Display 
  */
setDisplay(display: import('../Gdk').Display): void;
/**
  * Sets the icon for applications that are launched with this context.
  * @param icon a Gio.Icon, or None 
  */
setIcon(icon: import('../Gio').Icon | null): void;
/**
  * Sets the icon for applications that are launched with this context. The icon_name will be interpreted in the same way as the Icon field in desktop files. See also Gdk.AppLaunchContext.set_icon().
  * @param iconName an icon name, or None 
  */
setIconName(iconName: string | null): void;
/**
  * Sets the screen on which applications will be launched when using this context. See also Gdk.AppLaunchContext.set_display().
  * @param screen a Gdk.Screen 
  */
setScreen(screen: import('../Gdk').Screen): void;
/**
  * Sets the timestamp of self. The timestamp should ideally be taken from the event that triggered the launch.
  * @param timestamp a timestamp 
  */
setTimestamp(timestamp: number): void;
/**
  * Display 
  */
display: import('../Gdk').Display;
}

