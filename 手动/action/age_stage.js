Blockly.Blocks['age_stage'] = {
  init: function () {
    this.jsonInit({
      type: 'age_stage',
      message0: '%{BKY_VISUAL_AGE_STAGE_TITLE_1}',
      args0: [
        { type: 'field_dropdown', name: 'camera', options: cameraOptions() },
        faceTimeOptions,
        { type: 'field_dropdown', name: 'ages', options: faceAgeOptions() },
      ],
      output: 'Boolean',
      colour: Blockly.Msg.VisualHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['age_stage'] = function (block) {
  const code = 'false';
  return [code, Blockly.Lua.ORDER_NONE];
}

Blockly.Python['age_stage'] = function (block) {
  const camera = block.getFieldValue('camera');
  const ages = block.getFieldValue('ages');
  const time = block.getFieldValue('time');
  const code = `face_detect.face_age_detect(${time}, ${ages}, '${camera}')`;
  return [code, Blockly.Python.ORDER_NONE];
}

