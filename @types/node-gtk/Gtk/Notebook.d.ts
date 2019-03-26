import * as Gtk from '../Gtk';
export declare interface Notebook extends Gtk.Container { }

/**
  * The Gtk.Notebook widget is a Gtk.Container whose children are pages that
can be switched between using tab labels along one edge. 
  */
export declare class Notebook {
  /**
    * Creates a new Gtk.Notebook widget with no pages.
    * @returns the newly created Gtk.Notebook 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Appends a page to self.
    * @param child the Gtk.Widget to use as the contents of the page
    * @param tabLabel the Gtk.Widget to be used as the label for the page, or None to use the default label, “page N”
    * @returns the index (starting from 0) of the appended page in the notebook, or -1 if function fails 
    */
  appendPage(child: import('../Gtk').Widget, tabLabel: import('../Gtk').Widget | null): number;
  /**
    * Appends a page to self, specifying the widget to use as the label in the popup menu.
    * @param child the Gtk.Widget to use as the contents of the page
    * @param tabLabel the Gtk.Widget to be used as the label for the page, or None to use the default label, “page N”
    * @param menuLabel the widget to use as a label for the page-switch menu, if that is enabled. If None, and tab_label is a Gtk.Label or None, then the menu label will be a newly created label with the same text as tab_label; if tab_label is not a Gtk.Label, menu_label must be specified if the page-switch menu is to be used.
    * @returns the index (starting from 0) of the appended page in the notebook, or -1 if function fails 
    */
  appendPageMenu(child: import('../Gtk').Widget, tabLabel: import('../Gtk').Widget | null, menuLabel: import('../Gtk').Widget | null): number;
  /**
    * Removes the child from the notebook.
    * @param child a child 
    */
  detachTab(child: import('../Gtk').Widget): void;
  /**
    * Gets one of the action widgets. See Gtk.Notebook.set_action_widget().
    * @param packType pack type of the action widget to receive
    * @returns The action widget with the given pack_type or None when this action widget has not been set 
    */
  getActionWidget(packType: import('../Gtk').PackType): import('../Gtk').Widget | null;
  /**
    * Returns the page number of the current page.
    * @returns the index (starting from 0) of the current page in the notebook. If the notebook has no pages, then -1 will be returned. 
    */
  getCurrentPage(): number;
  /**
    * Gets the current group name for self.
    * @returns the group name, or None if none is set 
    */
  getGroupName(): string | null;
  /**
    * Retrieves the menu label widget of the page containing child.
    * @param child a widget contained in a page of self
    * @returns the menu label, or None if the notebook page does not have a menu label other than the default (the tab label). 
    */
  getMenuLabel(child: import('../Gtk').Widget): import('../Gtk').Widget | null;
  /**
    * Retrieves the text of the menu label for the page containing child.
    * @param child the child widget of a page of the notebook.
    * @returns the text of the tab label, or None if the widget does not have a menu label other than the default menu label, or the menu label widget is not a Gtk.Label. The string is owned by the widget and must not be freed. 
    */
  getMenuLabelText(child: import('../Gtk').Widget): string | null;
  /**
    * Gets the number of pages in a notebook.
    * @returns the number of pages in the notebook 
    */
  getNPages(): number;
  /**
    * Returns the child widget contained in page number page_num.
    * @param pageNum the index of a page in the notebook, or -1 to get the last page
    * @returns the child widget, or None if page_num is out of bounds 
    */
  getNthPage(pageNum: number): import('../Gtk').Widget | null;
  /**
    * Returns whether the tab label area has arrows for scrolling. See Gtk.Notebook.set_scrollable().
    * @returns True if arrows for scrolling are present 
    */
  getScrollable(): boolean;
  /**
    * Returns whether a bevel will be drawn around the notebook pages. See Gtk.Notebook.set_show_border().
    * @returns True if the bevel is drawn 
    */
  getShowBorder(): boolean;
  /**
    * Returns whether the tabs of the notebook are shown. See Gtk.Notebook.set_show_tabs().
    * @returns True if the tabs are shown 
    */
  getShowTabs(): boolean;
  /**
    * Returns whether the tab contents can be detached from self.
    * @param child a child Gtk.Widget
    * @returns True if the tab is detachable. 
    */
  getTabDetachable(child: import('../Gtk').Widget): boolean;
  /**
    * Returns the horizontal width of a tab border.
    * @returns horizontal width of a tab border 
    */
  getTabHborder(): number;
  /**
    * Returns the tab label widget for the page child. None is returned if child is not in self or if no tab label has specifically been set for child.
    * @param child the page
    * @returns the tab label 
    */
  getTabLabel(child: import('../Gtk').Widget): import('../Gtk').Widget | null;
  /**
    * Retrieves the text of the tab label for the page containing child.
    * @param child a widget contained in a page of self
    * @returns the text of the tab label, or None if the tab label widget is not a Gtk.Label. The string is owned by the widget and must not be freed. 
    */
  getTabLabelText(child: import('../Gtk').Widget): string | null;
  /**
    * Gets the edge at which the tabs for switching pages in the notebook are drawn.
    * @returns the edge at which the tabs are drawn 
    */
  getTabPos(): import('../Gtk').PositionType;
  /**
    * Gets whether the tab can be reordered via drag and drop or not.
    * @param child a child Gtk.Widget
    * @returns True if the tab is reorderable. 
    */
  getTabReorderable(child: import('../Gtk').Widget): boolean;
  /**
    * Returns the vertical width of a tab border.
    * @returns vertical width of a tab border 
    */
  getTabVborder(): number;
  /**
    * Insert a page into self at the given position.
    * @param child the Gtk.Widget to use as the contents of the page
    * @param tabLabel the Gtk.Widget to be used as the label for the page, or None to use the default label, “page N”
    * @param position the index (starting at 0) at which to insert the page, or -1 to append the page after all other pages
    * @returns the index (starting from 0) of the inserted page in the notebook, or -1 if function fails 
    */
  insertPage(child: import('../Gtk').Widget, tabLabel: import('../Gtk').Widget | null, position: number): number;
  /**
    * Insert a page into self at the given position, specifying the widget to use as the label in the popup menu.
    * @param child the Gtk.Widget to use as the contents of the page
    * @param tabLabel the Gtk.Widget to be used as the label for the page, or None to use the default label, “page N”
    * @param menuLabel the widget to use as a label for the page-switch menu, if that is enabled. If None, and tab_label is a Gtk.Label or None, then the menu label will be a newly created label with the same text as tab_label; if tab_label is not a Gtk.Label, menu_label must be specified if the page-switch menu is to be used.
    * @param position the index (starting at 0) at which to insert the page, or -1 to append the page after all other pages.
    * @returns the index (starting from 0) of the inserted page in the notebook 
    */
  insertPageMenu(child: import('../Gtk').Widget, tabLabel: import('../Gtk').Widget | null, menuLabel: import('../Gtk').Widget | null, position: number): number;
  /**
    * Switches to the next page. Nothing happens if the current page is the last page. 
    */
  nextPage(): void;
  /**
    * Finds the index of the page which contains the given child widget.
    * @param child a Gtk.Widget
    * @returns the index of the page containing child, or -1 if child is not in the notebook 
    */
  pageNum(child: import('../Gtk').Widget): number;
  /**
    * Disables the popup menu. 
    */
  popupDisable(): void;
  /**
    * Enables the popup menu: if the user clicks with the right mouse button on the tab labels, a menu with all the pages will be popped up. 
    */
  popupEnable(): void;
  /**
    * Prepends a page to self.
    * @param child the Gtk.Widget to use as the contents of the page
    * @param tabLabel the Gtk.Widget to be used as the label for the page, or None to use the default label, “page N”
    * @returns the index (starting from 0) of the prepended page in the notebook, or -1 if function fails 
    */
  prependPage(child: import('../Gtk').Widget, tabLabel: import('../Gtk').Widget | null): number;
  /**
    * Prepends a page to self, specifying the widget to use as the label in the popup menu.
    * @param child the Gtk.Widget to use as the contents of the page
    * @param tabLabel the Gtk.Widget to be used as the label for the page, or None to use the default label, “page N”
    * @param menuLabel the widget to use as a label for the page-switch menu, if that is enabled. If None, and tab_label is a Gtk.Label or None, then the menu label will be a newly created label with the same text as tab_label; if tab_label is not a Gtk.Label, menu_label must be specified if the page-switch menu is to be used.
    * @returns the index (starting from 0) of the prepended page in the notebook, or -1 if function fails 
    */
  prependPageMenu(child: import('../Gtk').Widget, tabLabel: import('../Gtk').Widget | null, menuLabel: import('../Gtk').Widget | null): number;
  /**
    * Switches to the previous page. Nothing happens if the current page is the first page. 
    */
  prevPage(): void;
  /**
    * Removes a page from the notebook given its index in the notebook.
    * @param pageNum the index of a notebook page, starting from 0. If -1, the last page will be removed. 
    */
  removePage(pageNum: number): void;
  /**
    * Reorders the page containing child, so that it appears in position position. If position is greater than or equal to the number of children in the list or negative, child will be moved to the end of the list.
    * @param child the child to move
    * @param position the new position, or -1 to move to the end 
    */
  reorderChild(child: import('../Gtk').Widget, position: number): void;
  /**
    * Sets widget as one of the action widgets. Depending on the pack type the widget will be placed before or after the tabs. You can use a Gtk.Box if you need to pack more than one widget on the same side.
    * @param widget a Gtk.Widget
    * @param packType pack type of the action widget 
    */
  setActionWidget(widget: import('../Gtk').Widget, packType: import('../Gtk').PackType): void;
  /**
    * Switches to the page number page_num.
    * @param pageNum index of the page to switch to, starting from 0. If negative, the last page will be used. If greater than the number of pages in the notebook, nothing will be done. 
    */
  setCurrentPage(pageNum: number): void;
  /**
    * Sets a group name for self.
    * @param groupName the name of the notebook group, or None to unset it 
    */
  setGroupName(groupName: string | null): void;
  /**
    * Changes the menu label for the page containing child.
    * @param child the child widget
    * @param menuLabel the menu label, or None for default 
    */
  setMenuLabel(child: import('../Gtk').Widget, menuLabel: import('../Gtk').Widget | null): void;
  /**
    * Creates a new label and sets it as the menu label of child.
    * @param child the child widget
    * @param menuText the label text 
    */
  setMenuLabelText(child: import('../Gtk').Widget, menuText: string): void;
  /**
    * Sets whether the tab label area will have arrows for scrolling if there are too many tabs to fit in the area.
    * @param scrollable True if scroll arrows should be added 
    */
  setScrollable(scrollable: boolean): void;
  /**
    * Sets whether a bevel will be drawn around the notebook pages. This only has a visual effect when the tabs are not shown. See Gtk.Notebook.set_show_tabs().
    * @param showBorder True if a bevel should be drawn around the notebook 
    */
  setShowBorder(showBorder: boolean): void;
  /**
    * Sets whether to show the tabs for the notebook or not.
    * @param showTabs True if the tabs should be shown 
    */
  setShowTabs(showTabs: boolean): void;
  /**
    * Sets whether the tab can be detached from self to another notebook or widget.
    * @param child a child Gtk.Widget
    * @param detachable whether the tab is detachable or not 
    */
  setTabDetachable(child: import('../Gtk').Widget, detachable: boolean): void;
  /**
    * Changes the tab label for child. If None is specified for tab_label, then the page will have the label “page N”.
    * @param child the page
    * @param tabLabel the tab label widget to use, or None for default tab label 
    */
  setTabLabel(child: import('../Gtk').Widget, tabLabel: import('../Gtk').Widget | null): void;
  /**
    * Creates a new label and sets it as the tab label for the page containing child.
    * @param child the page
    * @param tabText the label text 
    */
  setTabLabelText(child: import('../Gtk').Widget, tabText: string): void;
  /**
    * Sets the edge at which the tabs for switching pages in the notebook are drawn.
    * @param pos the edge to draw the tabs at 
    */
  setTabPos(pos: import('../Gtk').PositionType): void;
  /**
    * Sets whether the notebook tab can be reordered via drag and drop or not.
    * @param child a child Gtk.Widget
    * @param reorderable whether the tab is reorderable or not 
    */
  setTabReorderable(child: import('../Gtk').Widget, reorderable: boolean): void;
  /**
    * If True, pressing the right mouse button on the notebook pops up a menu that you can use to go to a page 
    */
  enablePopup: boolean;
  /**
    * Group name for tab drag and drop 
    */
  groupName: string;
  /**
    * The index of the current page 
    */
  page: number;
  /**
    * If True, scroll arrows are added if there are too many tabs to fit 
    */
  scrollable: boolean;
  /**
    * Whether the border should be shown 
    */
  showBorder: boolean;
  /**
    * Whether tabs should be shown 
    */
  showTabs: boolean;
  /**
    * Which side of the notebook holds the tabs 
    */
  tabPos: import('../Gtk').PositionType;
}

