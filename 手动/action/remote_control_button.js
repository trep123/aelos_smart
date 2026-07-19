Blockly.Blocks['remote_control_button'] = {
  init: function () {
    this.jsonInit({
      type: 'remote_control_button',
      message0: '%{BKY_REMOTE_CONTROL_BUTTON_REMOTE}， %1 ，%{BKY_REMOTE_CONTROL_BUTTON_KEY} %2',
      args0: [
        { type: 'field_dropdown', name: 'mode', options: remoteControlMode },
        { type: 'field_dropdown', name: 'key', options: remoteControlKey },
      ],
      output: 'Remote_type',
      colour: Blockly.Msg.ControlHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['remote_control_button'] = function(block) {
  const mode = block.getFieldValue("mode");
  const key = block.getFieldValue("key");
  const num = HKEYMap[mode][key];
  return [num, 0 > num ? Blockly.Lua.ORDER_UNARY : Blockly.Lua.ORDER_ATOMIC];
}

Blockly.Python['remote_control_button'] = function (block) {
  const mode = block.getFieldValue('mode');
  const key = block.getFieldValue('key');
  const num = HKEYMap[mode][key];
  return [num, 0 > num ? Blockly.Python.ORDER_UNARY_SIGN : Blockly.Python.ORDER_ATOMIC];
}

