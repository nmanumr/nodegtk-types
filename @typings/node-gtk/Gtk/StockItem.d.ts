export declare class StockItem {
/**
  * Frees a stock item allocated on the heap, such as one returned by gtk_stock_item_copy(). Also frees the fields inside the stock item, if they are not None. 
  */
free(): void;
/**
  * Keyboard accelerator 
  */
keyval: number;
/**
  * User visible label. 
  */
label: string;
/**
  * Modifier type for keyboard accelerator 
  */
modifier: import('../Gdk').ModifierType;
/**
  * Identifier. 
  */
stockId: string;
/**
  * Translation domain of the menu or toolbar item 
  */
translationDomain: string;
}

