export declare interface CellAccessibleParent extends import('../GObject').GInterface{
activate(cell: import('../Gtk').CellAccessible): void;
edit(cell: import('../Gtk').CellAccessible): void;
expandCollapse(cell: import('../Gtk').CellAccessible): void;
getCellArea(cell: import('../Gtk').CellAccessible, cellRect: import('../Gdk').Rectangle): void;
getCellExtents(cell: import('../Gtk').CellAccessible, x: number, y: number, width: number, height: number, coordType: import('../Atk').CoordType): void;
getCellPosition(cell: import('../Gtk').CellAccessible, row: number, column: number): void;
getChildIndex(cell: import('../Gtk').CellAccessible): number;
getColumnHeaderCells(cell: import('../Gtk').CellAccessible): import('../[Atk').Object];
getRendererState(cell: import('../Gtk').CellAccessible): import('../Gtk').CellRendererState;
getRowHeaderCells(cell: import('../Gtk').CellAccessible): import('../[Atk').Object];
grabFocus(cell: import('../Gtk').CellAccessible): boolean;
updateRelationset(cell: import('../Gtk').CellAccessible, relationset: import('../Atk').RelationSet): void;
}

