interface GiRepositoryMap {
    'Gtk': typeof import('./Gtk');
    'Atk': typeof import('./Atk');
    'Gdk': typeof import('./Gdk');
    'Gio': typeof import('./Gio');
    'GLib': typeof import('./GLib');
    'xlib': typeof import('./xlib');
    'Pango': typeof import('./Pango');
    'GModule': typeof import('./GModule');
    'GObject': typeof import('./GObject');
    'GdkPixbuf': typeof import('./GdkPixbuf');
}

export declare class Gi {
    /**
     * Requires a module. Automatically loads dependencies.
     * @param namespace namespace to load
     * @param version version to load (null for latest)
     */
    require<K extends keyof GiRepositoryMap>(namespace: K, version?: string): GiRepositoryMap[K];

    /** Prepends a path to GObject-Introspection search path (for typelibs) */
    prependLibraryPath(path: string): void;

    /** Prepends a path to GObject-Introspection library path (for shared libraries) */
    prependLibraryPath(path: string): void;
}

declare var gi: Gi;

declare module "nodegtk" {
    export = gi;
}