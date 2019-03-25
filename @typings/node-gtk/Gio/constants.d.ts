/**
  * Extension point for default handler to URI association. See Extending GIO.  
  */
export declare const DESKTOP_APP_INFO_LOOKUP_EXTENSION_POINT_NAME = 'gio-desktop-app-info-lookup';
/**
  * The string used to obtain a Unix device path with Gio.Drive.get_identifier().  New in version 2.58.   
  */
export declare const DRIVE_IDENTIFIER_KIND_UNIX_DEVICE = 'unix-device';
/**
  * A key in the “access” namespace for checking deletion privileges. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.BOOLEAN. This attribute will be True if the user is able to delete the file.  
  */
export declare const FILE_ATTRIBUTE_ACCESS_CAN_DELETE = 'access::can-delete';
/**
  * A key in the “access” namespace for getting execution privileges. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.BOOLEAN. This attribute will be True if the user is able to execute the file.  
  */
export declare const FILE_ATTRIBUTE_ACCESS_CAN_EXECUTE = 'access::can-execute';
/**
  * A key in the “access” namespace for getting read privileges. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.BOOLEAN. This attribute will be True if the user is able to read the file.  
  */
export declare const FILE_ATTRIBUTE_ACCESS_CAN_READ = 'access::can-read';
/**
  * A key in the “access” namespace for checking renaming privileges. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.BOOLEAN. This attribute will be True if the user is able to rename the file.  
  */
export declare const FILE_ATTRIBUTE_ACCESS_CAN_RENAME = 'access::can-rename';
/**
  * A key in the “access” namespace for checking trashing privileges. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.BOOLEAN. This attribute will be True if the user is able to move the file to the trash.  
  */
export declare const FILE_ATTRIBUTE_ACCESS_CAN_TRASH = 'access::can-trash';
/**
  * A key in the “access” namespace for getting write privileges. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.BOOLEAN. This attribute will be True if the user is able to write to the file.  
  */
export declare const FILE_ATTRIBUTE_ACCESS_CAN_WRITE = 'access::can-write';
/**
  * A key in the “dos” namespace for checking if the file’s archive flag is set. This attribute is True if the archive flag is set. This attribute is only available for DOS file systems. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.BOOLEAN.  
  */
export declare const FILE_ATTRIBUTE_DOS_IS_ARCHIVE = 'dos::is-archive';
/**
  * A key in the “dos” namespace for checking if the file’s backup flag is set. This attribute is True if the backup flag is set. This attribute is only available for DOS file systems. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.BOOLEAN.  
  */
export declare const FILE_ATTRIBUTE_DOS_IS_SYSTEM = 'dos::is-system';
/**
  * A key in the “etag” namespace for getting the value of the file’s entity tag. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.STRING.  
  */
export declare const FILE_ATTRIBUTE_ETAG_VALUE = 'etag::value';
/**
  * A key in the “filesystem” namespace for getting the number of bytes of free space left on the file system. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.UINT64.  
  */
export declare const FILE_ATTRIBUTE_FILESYSTEM_FREE = 'filesystem::free';
/**
  * A key in the “filesystem” namespace for checking if the file system is read only. Is set to True if the file system is read only. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.BOOLEAN.  
  */
export declare const FILE_ATTRIBUTE_FILESYSTEM_READONLY = 'filesystem::readonly';
/**
  * A key in the “filesystem” namespace for checking if the file system is remote. Is set to True if the file system is remote. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.BOOLEAN.  
  */
export declare const FILE_ATTRIBUTE_FILESYSTEM_REMOTE = 'filesystem::remote';
/**
  * A key in the “filesystem” namespace for getting the total size (in bytes) of the file system, used in Gio.File.query_filesystem_info(). Corresponding Gio.FileAttributeType is Gio.FileAttributeType.UINT64.  
  */
export declare const FILE_ATTRIBUTE_FILESYSTEM_SIZE = 'filesystem::size';
/**
  * A key in the “filesystem” namespace for getting the file system’s type. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.STRING.  
  */
export declare const FILE_ATTRIBUTE_FILESYSTEM_TYPE = 'filesystem::type';
/**
  * A key in the “filesystem” namespace for getting the number of bytes of used on the file system. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.UINT64.  New in version 2.32.   
  */
export declare const FILE_ATTRIBUTE_FILESYSTEM_USED = 'filesystem::used';
/**
  * A key in the “filesystem” namespace for hinting a file manager application whether it should preview (e.g. thumbnail) files on the file system. The value for this key contain a Gio.FilesystemPreviewType.  
  */
export declare const FILE_ATTRIBUTE_FILESYSTEM_USE_PREVIEW = 'filesystem::use-preview';
/**
  * A key in the “gvfs” namespace that gets the name of the current GVFS backend in use. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.STRING.  
  */
export declare const FILE_ATTRIBUTE_GVFS_BACKEND = 'gvfs::backend';
/**
  * A key in the “id” namespace for getting a file identifier. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.STRING. An example use would be during listing files, to avoid recursive directory scanning.  
  */
export declare const FILE_ATTRIBUTE_ID_FILE = 'id::file';
/**
  * A key in the “id” namespace for getting the file system identifier. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.STRING. An example use would be during drag and drop to see if the source and target are on the same filesystem (default to move) or not (default to copy).  
  */
export declare const FILE_ATTRIBUTE_ID_FILESYSTEM = 'id::filesystem';
/**
  * A key in the “mountable” namespace for checking if a file (of type Gio.FileType.MOUNTABLE) can be ejected. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.BOOLEAN.  
  */
export declare const FILE_ATTRIBUTE_MOUNTABLE_CAN_EJECT = 'mountable::can-eject';
/**
  * A key in the “mountable” namespace for checking if a file (of type Gio.FileType.MOUNTABLE) is mountable. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.BOOLEAN.  
  */
export declare const FILE_ATTRIBUTE_MOUNTABLE_CAN_MOUNT = 'mountable::can-mount';
/**
  * A key in the “mountable” namespace for checking if a file (of type Gio.FileType.MOUNTABLE) can be polled. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.BOOLEAN.  New in version 2.22.   
  */
export declare const FILE_ATTRIBUTE_MOUNTABLE_CAN_POLL = 'mountable::can-poll';
/**
  * A key in the “mountable” namespace for checking if a file (of type Gio.FileType.MOUNTABLE) can be started. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.BOOLEAN.  New in version 2.22.   
  */
export declare const FILE_ATTRIBUTE_MOUNTABLE_CAN_START = 'mountable::can-start';
/**
  * A key in the “mountable” namespace for checking if a file (of type Gio.FileType.MOUNTABLE) can be started degraded. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.BOOLEAN.  New in version 2.22.   
  */
export declare const FILE_ATTRIBUTE_MOUNTABLE_CAN_START_DEGRADED = 'mountable::can-start-degraded';
/**
  * A key in the “mountable” namespace for checking if a file (of type Gio.FileType.MOUNTABLE) can be stopped. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.BOOLEAN.  New in version 2.22.   
  */
export declare const FILE_ATTRIBUTE_MOUNTABLE_CAN_STOP = 'mountable::can-stop';
/**
  * A key in the “mountable” namespace for checking if a file (of type Gio.FileType.MOUNTABLE)  is unmountable. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.BOOLEAN.  
  */
export declare const FILE_ATTRIBUTE_MOUNTABLE_CAN_UNMOUNT = 'mountable::can-unmount';
/**
  * A key in the “mountable” namespace for getting the HAL UDI for the mountable file. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.STRING.  
  */
export declare const FILE_ATTRIBUTE_MOUNTABLE_HAL_UDI = 'mountable::hal-udi';
/**
  * A key in the “mountable” namespace for checking if a file (of type Gio.FileType.MOUNTABLE) is automatically polled for media. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.BOOLEAN.  New in version 2.22.   
  */
export declare const FILE_ATTRIBUTE_MOUNTABLE_IS_MEDIA_CHECK_AUTOMATIC = 'mountable::is-media-check-automatic';
/**
  * A key in the “mountable” namespace for getting the Gio.DriveStartStopType. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.UINT32.  New in version 2.22.   
  */
export declare const FILE_ATTRIBUTE_MOUNTABLE_START_STOP_TYPE = 'mountable::start-stop-type';
/**
  * A key in the “mountable” namespace for getting the unix device. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.UINT32.  
  */
export declare const FILE_ATTRIBUTE_MOUNTABLE_UNIX_DEVICE = 'mountable::unix-device';
/**
  * A key in the “mountable” namespace for getting the unix device file. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.STRING.  New in version 2.22.   
  */
export declare const FILE_ATTRIBUTE_MOUNTABLE_UNIX_DEVICE_FILE = 'mountable::unix-device-file';
/**
  * A key in the “owner” namespace for getting the file owner’s group. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.STRING.  
  */
export declare const FILE_ATTRIBUTE_OWNER_GROUP = 'owner::group';
/**
  * A key in the “owner” namespace for getting the user name of the file’s owner. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.STRING.  
  */
export declare const FILE_ATTRIBUTE_OWNER_USER = 'owner::user';
/**
  * A key in the “owner” namespace for getting the real name of the user that owns the file. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.STRING.  
  */
export declare const FILE_ATTRIBUTE_OWNER_USER_REAL = 'owner::user-real';
/**
  * A key in the “preview” namespace for getting a Gio.Icon that can be used to get preview of the file. For example, it may be a low resolution thumbnail without metadata. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.OBJECT.  The value for this key should contain a Gio.Icon.  New in version 2.20.   
  */
export declare const FILE_ATTRIBUTE_PREVIEW_ICON = 'preview::icon';
/**
  * A key in the “recent” namespace for getting time, when the metadata for the file in recent:/// was last changed. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.INT64.  New in version 2.52.   
  */
export declare const FILE_ATTRIBUTE_RECENT_MODIFIED = 'recent::modified';
/**
  * A key in the “selinux” namespace for getting the file’s SELinux context. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.STRING. Note that this attribute is only available if GLib has been built with SELinux support.  
  */
export declare const FILE_ATTRIBUTE_SELINUX_CONTEXT = 'selinux::context';
/**
  * A key in the “standard” namespace for getting the amount of disk space that is consumed by the file (in bytes).  This will generally be larger than the file size (due to block size overhead) but can occasionally be smaller (for example, for sparse files). Corresponding Gio.FileAttributeType is Gio.FileAttributeType.UINT64.  New in version 2.20.   
  */
export declare const FILE_ATTRIBUTE_STANDARD_ALLOCATED_SIZE = 'standard::allocated-size';
/**
  * A key in the “standard” namespace for getting the content type of the file. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.STRING. The value for this key should contain a valid content type.  
  */
export declare const FILE_ATTRIBUTE_STANDARD_CONTENT_TYPE = 'standard::content-type';
/**
  * A key in the “standard” namespace for getting the copy name of the file. The copy name is an optional version of the name. If available it’s always in UTF8, and corresponds directly to the original filename (only transcoded to UTF8). This is useful if you want to copy the file to another filesystem that might have a different encoding. If the filename is not a valid string in the encoding selected for the filesystem it is in then the copy name will not be set. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.STRING.  
  */
export declare const FILE_ATTRIBUTE_STANDARD_COPY_NAME = 'standard::copy-name';
/**
  * A key in the “standard” namespace for getting the description of the file. The description is a utf8 string that describes the file, generally containing the filename, but can also contain furter information. Example descriptions could be “filename (on hostname)” for a remote file or “filename (in trash)” for a file in the trash. This is useful for instance as the window title when displaying a directory or for a bookmarks menu. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.STRING.  
  */
export declare const FILE_ATTRIBUTE_STANDARD_DESCRIPTION = 'standard::description';
/**
  * A key in the “standard” namespace for getting the display name of the file. A display name is guaranteed to be in UTF8 and can thus be displayed in the UI. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.STRING.  
  */
export declare const FILE_ATTRIBUTE_STANDARD_DISPLAY_NAME = 'standard::display-name';
/**
  * A key in the “standard” namespace for edit name of the file. An edit name is similar to the display name, but it is meant to be used when you want to rename the file in the UI. The display name might contain information you don’t want in the new filename (such as “(invalid unicode)” if the filename was in an invalid encoding). Corresponding Gio.FileAttributeType is Gio.FileAttributeType.STRING.  
  */
export declare const FILE_ATTRIBUTE_STANDARD_EDIT_NAME = 'standard::edit-name';
/**
  * A key in the “standard” namespace for getting the fast content type. The fast content type isn’t as reliable as the regular one, as it only uses the filename to guess it, but it is faster to calculate than the regular content type. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.STRING.  
  */
export declare const FILE_ATTRIBUTE_STANDARD_FAST_CONTENT_TYPE = 'standard::fast-content-type';
/**
  * A key in the “standard” namespace for getting the icon for the file. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.OBJECT. The value for this key should contain a Gio.Icon.  
  */
export declare const FILE_ATTRIBUTE_STANDARD_ICON = 'standard::icon';
/**
  * A key in the “standard” namespace for checking if a file is a backup file. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.BOOLEAN.  
  */
export declare const FILE_ATTRIBUTE_STANDARD_IS_BACKUP = 'standard::is-backup';
/**
  * A key in the “standard” namespace for checking if a file is hidden. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.BOOLEAN.  
  */
export declare const FILE_ATTRIBUTE_STANDARD_IS_HIDDEN = 'standard::is-hidden';
/**
  * A key in the “standard” namespace for checking if the file is a symlink. Typically the actual type is something else, if we followed the symlink to get the type. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.BOOLEAN.  
  */
export declare const FILE_ATTRIBUTE_STANDARD_IS_SYMLINK = 'standard::is-symlink';
/**
  * A key in the “standard” namespace for checking if a file is virtual. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.BOOLEAN.  
  */
export declare const FILE_ATTRIBUTE_STANDARD_IS_VIRTUAL = 'standard::is-virtual';
/**
  * A key in the “standard” namespace for checking if a file is volatile. This is meant for opaque, non-POSIX-like backends to indicate that the URI is not persistent. Applications should look at Gio.FILE_ATTRIBUTE_STANDARD_SYMLINK_TARGET for the persistent URI. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.BOOLEAN.  New in version 2.46.   
  */
export declare const FILE_ATTRIBUTE_STANDARD_IS_VOLATILE = 'standard::is-volatile';
/**
  * A key in the “standard” namespace for getting the name of the file. The name is the on-disk filename which may not be in any known encoding, and can thus not be generally displayed as is. Use Gio.FILE_ATTRIBUTE_STANDARD_DISPLAY_NAME if you need to display the name in a user interface. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.BYTE_STRING.  
  */
export declare const FILE_ATTRIBUTE_STANDARD_NAME = 'standard::name';
/**
  * A key in the “standard” namespace for getting the file’s size (in bytes). Corresponding Gio.FileAttributeType is Gio.FileAttributeType.UINT64.  
  */
export declare const FILE_ATTRIBUTE_STANDARD_SIZE = 'standard::size';
/**
  * A key in the “standard” namespace for setting the sort order of a file. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.INT32. An example use would be in file managers, which would use this key to set the order files are displayed. Files with smaller sort order should be sorted first, and files without sort order as if sort order was zero.  
  */
export declare const FILE_ATTRIBUTE_STANDARD_SORT_ORDER = 'standard::sort-order';
/**
  * A key in the “standard” namespace for getting the symbolic icon for the file. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.OBJECT. The value for this key should contain a Gio.Icon.  New in version 2.34.   
  */
export declare const FILE_ATTRIBUTE_STANDARD_SYMBOLIC_ICON = 'standard::symbolic-icon';
/**
  * A key in the “standard” namespace for getting the symlink target, if the file is a symlink. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.BYTE_STRING.  
  */
export declare const FILE_ATTRIBUTE_STANDARD_SYMLINK_TARGET = 'standard::symlink-target';
/**
  * A key in the “standard” namespace for getting the target URI for the file, in the case of Gio.FileType.SHORTCUT or Gio.FileType.MOUNTABLE files. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.STRING.  
  */
export declare const FILE_ATTRIBUTE_STANDARD_TARGET_URI = 'standard::target-uri';
/**
  * A key in the “standard” namespace for storing file types. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.UINT32. The value for this key should contain a Gio.FileType.  
  */
export declare const FILE_ATTRIBUTE_STANDARD_TYPE = 'standard::type';
/**
  * A key in the “thumbnail” namespace for checking if thumbnailing failed. This attribute is True if thumbnailing failed. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.BOOLEAN.  
  */
export declare const FILE_ATTRIBUTE_THUMBNAILING_FAILED = 'thumbnail::failed';
/**
  * A key in the “thumbnail” namespace for checking whether the thumbnail is outdated. This attribute is True if the thumbnail is up-to-date with the file it represents, and False if the file has been modified since the thumbnail was generated. If Gio.FILE_ATTRIBUTE_THUMBNAILING_FAILED is True and this attribute is False, it indicates that thumbnailing may be attempted again and may succeed. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.BOOLEAN.  New in version 2.40.   
  */
export declare const FILE_ATTRIBUTE_THUMBNAIL_IS_VALID = 'thumbnail::is-valid';
/**
  * A key in the “thumbnail” namespace for getting the path to the thumbnail image. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.BYTE_STRING.  
  */
export declare const FILE_ATTRIBUTE_THUMBNAIL_PATH = 'thumbnail::path';
/**
  * A key in the “time” namespace for getting the time the file was last accessed. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.UINT64, and contains the time since the file was last accessed, in seconds since the UNIX epoch.  
  */
export declare const FILE_ATTRIBUTE_TIME_ACCESS = 'time::access';
/**
  * A key in the “time” namespace for getting the microseconds of the time the file was last accessed. This should be used in conjunction with Gio.FILE_ATTRIBUTE_TIME_ACCESS. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.UINT32.  
  */
export declare const FILE_ATTRIBUTE_TIME_ACCESS_USEC = 'time::access-usec';
/**
  * A key in the “time” namespace for getting the time the file was last changed. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.UINT64, and contains the time since the file was last changed, in seconds since the UNIX epoch. This corresponds to the traditional UNIX ctime.  
  */
export declare const FILE_ATTRIBUTE_TIME_CHANGED = 'time::changed';
/**
  * A key in the “time” namespace for getting the microseconds of the time the file was last changed. This should be used in conjunction with Gio.FILE_ATTRIBUTE_TIME_CHANGED. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.UINT32.  
  */
export declare const FILE_ATTRIBUTE_TIME_CHANGED_USEC = 'time::changed-usec';
/**
  * A key in the “time” namespace for getting the time the file was created. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.UINT64, and contains the time since the file was created, in seconds since the UNIX epoch. This corresponds to the NTFS ctime.  
  */
export declare const FILE_ATTRIBUTE_TIME_CREATED = 'time::created';
/**
  * A key in the “time” namespace for getting the microseconds of the time the file was created. This should be used in conjunction with Gio.FILE_ATTRIBUTE_TIME_CREATED. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.UINT32.  
  */
export declare const FILE_ATTRIBUTE_TIME_CREATED_USEC = 'time::created-usec';
/**
  * A key in the “time” namespace for getting the time the file was last modified. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.UINT64, and contains the time since the file was modified, in seconds since the UNIX epoch.  
  */
export declare const FILE_ATTRIBUTE_TIME_MODIFIED = 'time::modified';
/**
  * A key in the “time” namespace for getting the microseconds of the time the file was last modified. This should be used in conjunction with Gio.FILE_ATTRIBUTE_TIME_MODIFIED. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.UINT32.  
  */
export declare const FILE_ATTRIBUTE_TIME_MODIFIED_USEC = 'time::modified-usec';
/**
  * A key in the “trash” namespace.  When requested against items in trash:///, will return the date and time when the file was trashed. The format of the returned string is YYYY-MM-DDThh:mm:ss. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.STRING.  New in version 2.24.   
  */
export declare const FILE_ATTRIBUTE_TRASH_DELETION_DATE = 'trash::deletion-date';
/**
  * A key in the “trash” namespace.  When requested against trash:/// returns the number of (toplevel) items in the trash folder. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.UINT32.  
  */
export declare const FILE_ATTRIBUTE_TRASH_ITEM_COUNT = 'trash::item-count';
/**
  * A key in the “trash” namespace.  When requested against items in trash:///, will return the original path to the file before it was trashed. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.BYTE_STRING.  New in version 2.24.   
  */
export declare const FILE_ATTRIBUTE_TRASH_ORIG_PATH = 'trash::orig-path';
/**
  * A key in the “unix” namespace for getting the number of blocks allocated for the file. This attribute is only available for UNIX file systems. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.UINT64.  
  */
export declare const FILE_ATTRIBUTE_UNIX_BLOCKS = 'unix::blocks';
/**
  * A key in the “unix” namespace for getting the block size for the file system. This attribute is only available for UNIX file systems. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.UINT32.  
  */
export declare const FILE_ATTRIBUTE_UNIX_BLOCK_SIZE = 'unix::block-size';
/**
  * A key in the “unix” namespace for getting the device id of the device the file is located on (see stat() documentation). This attribute is only available for UNIX file systems. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.UINT32.  
  */
export declare const FILE_ATTRIBUTE_UNIX_DEVICE = 'unix::device';
/**
  * A key in the “unix” namespace for getting the group ID for the file. This attribute is only available for UNIX file systems. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.UINT32.  
  */
export declare const FILE_ATTRIBUTE_UNIX_GID = 'unix::gid';
/**
  * A key in the “unix” namespace for getting the inode of the file. This attribute is only available for UNIX file systems. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.UINT64.  
  */
export declare const FILE_ATTRIBUTE_UNIX_INODE = 'unix::inode';
/**
  * A key in the “unix” namespace for checking if the file represents a UNIX mount point. This attribute is True if the file is a UNIX mount point. Since 2.58, / is considered to be a mount point. This attribute is only available for UNIX file systems. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.BOOLEAN.  
  */
export declare const FILE_ATTRIBUTE_UNIX_IS_MOUNTPOINT = 'unix::is-mountpoint';
/**
  * A key in the “unix” namespace for getting the mode of the file (e.g. whether the file is a regular file, symlink, etc). See lstat() documentation. This attribute is only available for UNIX file systems. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.UINT32.  
  */
export declare const FILE_ATTRIBUTE_UNIX_MODE = 'unix::mode';
/**
  * A key in the “unix” namespace for getting the number of hard links for a file. See lstat() documentation. This attribute is only available for UNIX file systems. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.UINT32.  
  */
export declare const FILE_ATTRIBUTE_UNIX_NLINK = 'unix::nlink';
/**
  * A key in the “unix” namespace for getting the device ID for the file (if it is a special file). See lstat() documentation. This attribute is only available for UNIX file systems. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.UINT32.  
  */
export declare const FILE_ATTRIBUTE_UNIX_RDEV = 'unix::rdev';
/**
  * A key in the “unix” namespace for getting the user ID for the file. This attribute is only available for UNIX file systems. Corresponding Gio.FileAttributeType is Gio.FileAttributeType.UINT32.  
  */
export declare const FILE_ATTRIBUTE_UNIX_UID = 'unix::uid';
/**
  * The menu item attribute which holds the action name of the item.  Action names are namespaced with an identifier for the action group in which the action resides. For example, “win.” for window-specific actions and “app.” for application-wide actions. See also g_menu_model_get_item_attribute() and Gio.MenuItem.set_attribute().  New in version 2.32.   
  */
export declare const MENU_ATTRIBUTE_ACTION = 'action';
/**
  * The menu item attribute that holds the namespace for all action names in menus that are linked from this item.  New in version 2.36.   
  */
export declare const MENU_ATTRIBUTE_ACTION_NAMESPACE = 'action-namespace';
/**
  * The menu item attribute which holds the icon of the item. The icon is stored in the format returned by Gio.Icon.serialize(). This attribute is intended only to represent ‘noun’ icons such as favicons for a webpage, or application icons.  It should not be used for ‘verbs’ (ie: stock icons).  New in version 2.38.   
  */
export declare const MENU_ATTRIBUTE_ICON = 'icon';
/**
  * The menu item attribute which holds the label of the item.  New in version 2.32.   
  */
export declare const MENU_ATTRIBUTE_LABEL = 'label';
/**
  * The menu item attribute which holds the target with which the item’s action will be activated. See also g_menu_item_set_action_and_target()  New in version 2.32.   
  */
export declare const MENU_ATTRIBUTE_TARGET = 'target';
/**
  * The name of the link that associates a menu item with a section.  The linked menu will usually be shown in place of the menu item, using the item’s label as a header. See also Gio.MenuItem.set_link().  New in version 2.32.   
  */
export declare const MENU_LINK_SECTION = 'section';
/**
  * The name of the link that associates a menu item with a submenu. See also Gio.MenuItem.set_link().  New in version 2.32.   
  */
export declare const MENU_LINK_SUBMENU = 'submenu';
export declare const NATIVE_VOLUME_MONITOR_EXTENSION_POINT_NAME = 'gio-native-volume-monitor';
/**
  * Extension point for network status monitoring functionality. See Extending GIO.  New in version 2.30.   
  */
export declare const NETWORK_MONITOR_EXTENSION_POINT_NAME = 'gio-network-monitor';
/**
  * Extension point for proxy functionality. See Extending GIO.  New in version 2.26.   
  */
export declare const PROXY_EXTENSION_POINT_NAME = 'gio-proxy';
/**
  * Extension point for proxy resolving functionality. See Extending GIO.  
  */
export declare const PROXY_RESOLVER_EXTENSION_POINT_NAME = 'gio-proxy-resolver';
/**
  * Extension point for Gio.SettingsBackend functionality.  
  */
export declare const SETTINGS_BACKEND_EXTENSION_POINT_NAME = 'gsettings-backend';
/**
  * Extension point for TLS functionality via Gio.TlsBackend. See Extending GIO.  
  */
export declare const TLS_BACKEND_EXTENSION_POINT_NAME = 'gio-tls-backend';
/**
  * The purpose used to verify the client certificate in a TLS connection. Used by TLS servers.  
  */
export declare const TLS_DATABASE_PURPOSE_AUTHENTICATE_CLIENT = '1.3.6.1.5.5.7.3.2';
/**
  * The purpose used to verify the server certificate in a TLS connection. This is the most common purpose in use. Used by TLS clients.  
  */
export declare const TLS_DATABASE_PURPOSE_AUTHENTICATE_SERVER = '1.3.6.1.5.5.7.3.1';
/**
  * Extension point for Gio.Vfs functionality. See Extending GIO.  
  */
export declare const VFS_EXTENSION_POINT_NAME = 'gio-vfs';
/**
  * The string used to obtain the volume class with Gio.Volume.get_identifier(). Known volume classes include device and network. Other classes may be added in the future. This is intended to be used by applications to classify Gio.Volume instances into different sections - for example a file manager or file chooser can use this information to show network volumes under a “Network” heading and device volumes under a “Devices” heading.  
  */
export declare const VOLUME_IDENTIFIER_KIND_CLASS = 'class';
/**
  * The string used to obtain a Hal UDI with Gio.Volume.get_identifier().  Deprecated since version 2.58: Do not use, HAL is deprecated.   
  */
export declare const VOLUME_IDENTIFIER_KIND_HAL_UDI = 'hal-udi';
/**
  * The string used to obtain a filesystem label with Gio.Volume.get_identifier().  
  */
export declare const VOLUME_IDENTIFIER_KIND_LABEL = 'label';
/**
  * The string used to obtain a NFS mount with Gio.Volume.get_identifier().  
  */
export declare const VOLUME_IDENTIFIER_KIND_NFS_MOUNT = 'nfs-mount';
/**
  * The string used to obtain a Unix device path with Gio.Volume.get_identifier().  
  */
export declare const VOLUME_IDENTIFIER_KIND_UNIX_DEVICE = 'unix-device';
/**
  * The string used to obtain a UUID with Gio.Volume.get_identifier().  
  */
export declare const VOLUME_IDENTIFIER_KIND_UUID = 'uuid';
/**
  * Extension point for volume monitor functionality. See Extending GIO.  
  */
export declare const VOLUME_MONITOR_EXTENSION_POINT_NAME = 'gio-volume-monitor';
