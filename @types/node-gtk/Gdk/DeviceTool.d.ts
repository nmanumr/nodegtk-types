import * as GObject from '../GObject';
export declare interface DeviceTool extends GObject.Object { }

export declare class DeviceTool {
  /**
    * Gets the hardware ID of this tool, or 0 if it’s not known. When non-zero, the identificator is unique for the given tool model, meaning that two identical tools will share the same hardware_id, but will have different serial numbers (see Gdk.DeviceTool.get_serial()).
    * @returns The hardware identificator of this tool. 
    */
  getHardwareId(): number;
  /**
    * Gets the serial of this tool, this value can be used to identify a physical tool (eg. a tablet pen) across program executions.
    * @returns The serial ID for this tool 
    */
  getSerial(): number;
  /**
    * Gets the Gdk.DeviceToolType of the tool.
    * @returns The physical type for this tool. This can be used to figure out what sort of pen is being used, such as an airbrush or a pencil. 
    */
  getToolType(): import('../Gdk').DeviceToolType;
  /**
    * Tool axes 
    */
  axes: import('../Gdk').AxisFlags;
  /**
    * Hardware ID 
    */
  hardwareId: number;
  /**
    * Serial number 
    */
  serial: number;
  /**
    * Tool type 
    */
  toolType: import('../Gdk').DeviceToolType;
}

