import * as GObject from '../GObject';
export declare interface DevicePad extends GObject.GInterface { }

/**
  * Gdk.DevicePad is an interface implemented by devices of type
Gdk.InputSource.TABLET_PAD, it allows querying the features provided
by the pad device. 
  */
export declare interface DevicePad {
  /**
    * Returns the group the given feature and idx belong to, or -1 if feature/index do not exist in self.
    * @param feature the feature type to get the group from
    * @param featureIdx the index of the feature to get the group from
    * @returns The group number of the queried pad feature. 
    */
  getFeatureGroup(feature: import('../Gdk').DevicePadFeature, featureIdx: number): number;
  /**
    * Returns the number of modes that group may have.
    * @param groupIdx group to get the number of available modes from
    * @returns The number of modes available in group. 
    */
  getGroupNModes(groupIdx: number): number;
  /**
    * Returns the number of features a tablet pad has.
    * @param feature a pad feature
    * @returns The amount of elements of type feature that this pad has. 
    */
  getNFeatures(feature: import('../Gdk').DevicePadFeature): number;
  /**
    * Returns the number of groups this pad device has. Pads have at least one group. A pad group is a subcollection of buttons/strip/rings that is affected collectively by a same current mode.
    * @returns The number of button/ring/strip groups in the pad. 
    */
  getNGroups(): number;
}

