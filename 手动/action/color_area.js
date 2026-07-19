Blockly.Blocks['color_area'] = {
  init: function () {
    this.jsonInit({
      type: 'color_area',
      message0: '%1 %{BKY_CAMERA} %{BKY_VISUAL_COLOR_AREA_READ} %2 %{BKY_VISUAL_COLOR_AREA_RATIO}',
      args0: [
        { type: 'field_dropdown', name: 'camera', options: cameraOptions() },
        { type: 'field_dropdown', name: 'color', options: colorOptions() },
      ],
      output: 'Number',
      colour: Blockly.Msg.VisualHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['color_area'] = function (block) {
  const code = ERROR_VALUE;
  return [code, Blockly.Lua.ORDER_NONE];
}

Blockly.Python['color_area'] = function (block) {
  const camera = block.getFieldValue('camera');
  const color = block.getFieldValue('color');
  const code = generateHsvCode(GET_COLOR_PERCENT, camera, hsvMap[color]);
  return [code, Blockly.Python.ORDER_NONE];
}

