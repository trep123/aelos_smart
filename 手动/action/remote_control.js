Blockly.Blocks['remote_control'] = {
  init: function () {
    this.jsonInit({
      type: 'remote_control',
      message0: '%{BKY_GAMEPAD} %1 %{BKY_GAMEPAD_VAR} %2',
      args0: [
        {
          type: 'input_dummy',
        },
        {
          type: 'input_value',
          name: 'variable',
          check: 'Variable',
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Msg.ControlHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['remote_control'] = function(block) {
  var variable = Blockly.Lua.valueToCode(block, "variable", Blockly.Lua.ORDER_NONE);
  let code = "";
  if(variable) {
    code = `${variable} = HKEY()\n`;
  } else {
    code = `HKEY()\n`;
  }
  return code;
}

Blockly.Python['remote_control'] = function (block) {
  const variable = Blockly.Python.valueToCode(block, 'variable', Blockly.Python.ORDER_NONE);
  const code = variable ? `${variable} = get_key.key()\n` : `get_key.key()\n`;
  return code;
}

