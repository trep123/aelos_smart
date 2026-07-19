Blockly.Blocks['Bow'] = {
  init: function () {
    this.jsonInit({
      type: 'Bow',
      message0: '%{BKY_BOW}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Bow'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)',
    'MOTOsetspeed(18)',
    'MOTOmove16(80, 30, 100, 100, 150, 75, 130, 100, 120, 170, 100, 100, 50, 125, 70, 100)',
    'MOTOwait()',
    'DelayMs(1000)',
    'MOTOsetspeed(21)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Bow'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['BOW'] + "')\n";
  return code;
}

Blockly.Blocks['Left_foot_shot'] = {
  init: function () {
    this.jsonInit({
      type: 'Left_foot_shot',
      message0: '%{BKY_LEFT_FOOT_SHOT}',
      previousStatement: null,
      nextStatement: null,
      colour: '#7148F5',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Left_foot_shot'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)',
    'MOTOsetspeed(8)',
    'MOTOmove16(80, 40, 100, 86, 91, 48, 129, 85, 120, 160, 100, 92, 107, 145, 77, 86)',
    'MOTOwait()',
    'MOTOsetspeed(34)',
    'MOTOmove16(80, 40, 100, 86, 142, 112, 104, 83, 120, 160, 100, 95, 87, 145, 70, 85)',
    'MOTOwait()',
    'MOTOsetspeed(34)',
    'MOTOmove16(65, 35, 165, 77, 61, 116, 78, 96, 110, 163, 162, 93, 87, 132, 85, 85)',
    'MOTOwait()',
    'MOTOsetspeed(90)',
    'MOTOmove16(81, 45, 101, 77, 102, 95, 81, 88, 121, 161, 100, 95, 87, 140, 76, 85)',
    'MOTOwait()',
    'MOTOsetspeed(110)',
    'MOTOmove16(80, 40, 50, 77, 150, 47, 171, 96, 129, 177, 34, 95, 101, 139, 75, 85)',
    'MOTOwait()',
    'DelayMs(400)',
    'MOTOsetspeed(25)',
    'MOTOmove16(80, 40, 100, 77, 130, 78, 131, 83, 120, 160, 100, 95, 108, 144, 78, 87)',
    'MOTOwait()',
    'MOTOsetspeed(25)',
    'MOTOmove16(80, 40, 100, 77, 110, 81, 114, 80, 120, 160, 100, 95, 105, 145, 77, 87)',
    'MOTOwait()',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 40, 100, 87, 94, 76, 109, 82, 120, 160, 100, 93, 107, 145, 77, 90)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Left_foot_shot'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['LEFT_FOOT_SHOT'] + "')\n";
  return code;
}

Blockly.Blocks['Push-up'] = {
  init: function () {
    this.jsonInit({
      type: 'Push-up',
      message0: '%{BKY_PUSH-UP}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Push-up'] = function (block) {
  const code = [
    'MOTOrigid16(90,90,90,40,40,40,40,40,90,90,90,40,40,40,40,40)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 41, 154, 100, 110, 140, 55, 100, 120, 159, 46, 100, 90, 60, 145, 100)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 41, 157, 98, 156, 140, 44, 100, 120, 159, 43, 99, 43, 59, 156, 99)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(100, 10, 185, 100, 160, 130, 35, 100, 100, 190, 15, 100, 40, 70, 165, 100)',
    'MOTOwait()',
    'MOTOsetspeed(53)',
    'MOTOmove16(15, 80, 190, 99, 109, 50, 154, 100, 185, 120, 10, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOrigid16(65,65,65,60,60,60,60,60,65,65,65,60,60,60,60,60)',
    'MOTOsetspeed(50)',
    'MOTOmove16(77, 32, 168, 99, 109, 50, 154, 100, 120, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 93, 177, 99, 109, 50, 154, 100, 183, 104, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(77, 32, 168, 99, 109, 50, 154, 100, 120, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 93, 177, 99, 109, 50, 154, 100, 183, 104, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(77, 32, 168, 99, 109, 50, 154, 100, 120, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 93, 177, 99, 109, 50, 154, 100, 183, 104, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(77, 32, 168, 99, 109, 50, 154, 100, 120, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 93, 177, 99, 109, 50, 154, 100, 183, 104, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(77, 32, 168, 99, 109, 50, 154, 100, 120, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 93, 177, 99, 109, 50, 154, 100, 183, 104, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(77, 32, 168, 99, 109, 50, 154, 100, 120, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 93, 177, 99, 109, 50, 154, 100, 183, 104, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(77, 32, 168, 99, 109, 50, 154, 100, 120, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 93, 177, 99, 109, 50, 154, 100, 183, 104, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(77, 32, 168, 99, 109, 50, 154, 100, 120, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 93, 177, 99, 109, 50, 154, 100, 183, 104, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(77, 32, 168, 99, 109, 50, 154, 100, 120, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 93, 177, 99, 109, 50, 154, 100, 183, 104, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(77, 32, 168, 99, 109, 50, 154, 100, 120, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 93, 177, 99, 109, 50, 154, 100, 183, 104, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(77, 32, 168, 99, 109, 50, 154, 100, 120, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 93, 177, 99, 109, 50, 154, 100, 183, 104, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(77, 32, 168, 99, 109, 50, 154, 100, 120, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 93, 177, 99, 109, 50, 154, 100, 183, 104, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(53)',
    'MOTOmove16(15, 80, 190, 100, 120, 90, 45, 100, 185, 120, 10, 100, 80, 110, 155, 100)',
    'MOTOwait()',
    'MOTOsetspeed(53)',
    'MOTOmove16(90, 15, 155, 100, 162, 140, 55, 100, 110, 185, 45, 100, 38, 60, 145, 100)',
    'MOTOwait()',
    'MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)',
    'MOTOsetspeed(53)',
    'MOTOmove16(90, 15, 155, 100, 162, 140, 55, 100, 110, 185, 45, 100, 38, 60, 145, 100)',
    'MOTOwait()',
    'DelayMs(50)',
    'MOTOsetspeed(42)',
    'MOTOmove16(90, 15, 140, 100, 150, 165, 50, 100, 110, 185, 60, 100, 50, 35, 150, 100)',
    'MOTOwait()',
    'MOTOsetspeed(28)',
    'MOTOmove16(80, 30, 113, 100, 130, 165, 46, 100, 120, 170, 87, 100, 70, 35, 158, 100)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(28)',
    'MOTOmove16(80, 30, 100, 100, 120, 130, 77, 100, 120, 170, 100, 100, 80, 70, 123, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Push-up'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['PUSH-UP'] + "')\n";
  return code;
}

Blockly.Blocks['Spread_wings'] = {
  init: function () {
    this.jsonInit({
      type: 'Spread_wings',
      message0: '%{BKY_SPREAD_WINGS}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Spread_wings'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,70)',
    'MOTOsetspeed(30)',
    'MOTOmove16(78, 105, 99, 99, 92, 56, 124, 99, 121, 90, 100, 101, 106, 142, 75, 99)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(100, 100, 100, 89, 92, 58, 122, 82, 100, 100, 100, 93, 102, 133, 86, 91)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(100, 100, 100, 90, 98, 69, 114, 86, 100, 100, 100, 93, 102, 133, 86, 88)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(100, 100, 100, 85, 115, 95, 102, 90, 100, 100, 100, 88, 98, 145, 74, 87)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(30)',
    'MOTOmove16(100, 100, 130, 85, 105, 145, 79, 90, 100, 100, 70, 93, 71, 128, 77, 87)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(100, 100, 170, 85, 54, 55, 102, 90, 100, 100, 30, 93, 62, 165, 53, 87)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(140, 150, 170, 85, 54, 55, 102, 90, 60, 50, 30, 93, 50, 170, 48, 88)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(70, 50, 170, 85, 54, 55, 102, 90, 130, 150, 30, 93, 55, 170, 48, 86)',
    'MOTOwait()',
    'DelayMs(300)',
    'MOTOsetspeed(32)',
    'MOTOmove16(100, 100, 170, 85, 54, 55, 102, 90, 100, 100, 30, 93, 50, 170, 48, 86)',
    'MOTOwait()',
    'MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,60,60,60,60,70)',
    'MOTOsetspeed(32)',
    'MOTOmove16(100, 100, 170, 89, 61, 94, 101, 88, 100, 100, 30, 93, 77, 165, 57, 89)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(25)',
    'MOTOmove16(100, 100, 130, 85, 105, 145, 53, 90, 100, 100, 70, 93, 85, 131, 83, 87)',
    'MOTOwait()',
    'MOTOsetspeed(25)',
    'MOTOmove16(100, 100, 100, 85, 111, 86, 96, 85, 100, 100, 100, 93, 103, 142, 78, 87)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(100, 100, 100, 89, 92, 50, 121, 85, 100, 100, 100, 93, 102, 139, 83, 92)',
    'MOTOwait()',
    'MOTOrigid16(40,40,40,60,60,60,60,40,40,40,40,60,60,60,60,60)',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 35, 100, 100, 93, 55, 124, 100, 120, 165, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Spread_wings'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['SPREAD_WINGS'] + "')\n";
  return code;
}

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

Blockly.Blocks['aelos_if'] = {
  init: function () {
    this.jsonInit({
      type: 'aelos_if',
      message0: '%{BKY_AELOS_IF} %1 %{BKY_AELOS_DO} %2',
      args0: [
        {
          type: 'input_value',
          name: 'condition',
          check: 'Boolean',
        },
        {
          type: 'input_statement',
          name: 'do',
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: '#86C113',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['aelos_if'] = function(block) {
  var condition = Blockly.Lua.valueToCode(block, "condition", Blockly.Lua.ORDER_NONE) || "false";
  var do_code = Blockly.Lua.statementToCode(block, "do");

  var code = `if ${condition} then \n${do_code}\nHKEY()\nend\n`;
  return code;
}

Blockly.Python['aelos_if'] = function (block) {
  const condition =
    Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_NONE) || 'False';
  const do_code = Blockly.Python.statementToCode(block, 'do') || Blockly.Python.PASS;

  const code = `if ${condition}:\n${do_code}`;
  return code;
}

Blockly.Blocks['aelos_compare'] = {
  init: function () {
    this.jsonInit({
      type: 'aelos_compare',
      message0: '%1 %2 %3',
      args0: [
        {
          type: 'input_value',
          name: 'input_1',
          check: ['Number', 'Variable', 'Remote_type'],
        },
        {
          type: 'field_dropdown',
          name: 'OP',
          options: [
            ['=', 'JNE'],
            ['\u2260', 'JE'],
            ['<', 'JAE'],
            ['\u200f\u2265\u200f', 'JA'],
            ['>', 'JBE'],
            ['\u200f\u2264\u200f', 'JB'],
          ],
        },
        {
          type: 'input_value',
          name: 'input_2',
          check: ['Number', 'Variable', 'Remote_type'],
        },
      ],
      inputsInline: true,
      output: 'Boolean',
      outputShape: Blockly.OUTPUT_SHAPE_HEXAGONAL,
      colour: '#86C113',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['aelos_compare'] = function(block) {
  var op_map = {
    "JNE": "==",
    "JE": "~=",
    "JAE": "<",
    "JA": "<=",
    "JBE": ">",
    "JB": ">="
  };
  var input_1 = Blockly.Lua.valueToCode(block, "input_1", Blockly.Lua.ORDER_ATOMIC);
  var input_2 = Blockly.Lua.valueToCode(block, "input_2", Blockly.Lua.ORDER_ATOMIC);
  var operation = op_map[block.getFieldValue("OP")];
  var code = "";

  if (input_1 && input_2) {
    code = `${input_1} ${operation} ${input_2}`;
  } else {
    code = "FALSE";
  }

  return [code, Blockly.Lua.ORDER_NONE];
}

Blockly.Python['aelos_compare'] = function (block) {
  const op_map = {
    JNE: '==',
    JE: '!=',
    JAE: '<',
    JA: '<=',
    JBE: '>',
    JB: '>=',
  };
  const input_1 = Blockly.Python.valueToCode(block, 'input_1', Blockly.Python.ORDER_ATOMIC);
  const input_2 = Blockly.Python.valueToCode(block, 'input_2', Blockly.Python.ORDER_ATOMIC);
  const operation = op_map[block.getFieldValue('OP')];
  let code = '';

  if (input_1 && input_2) {
    code = `${input_1} ${operation} ${input_2}`;
  } else {
    code = 'False';
  }

  return [code, Blockly.Python.ORDER_NONE];
}

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

Blockly.Blocks['color_discrimination'] = {
  init: function () {
    this.jsonInit({
      type: 'color_discrimination',
      message0: '%1 %{BKY_CAMERA} %{BKY_VISUAL_COLOR_DETECTED} %2',
      args0: [
        { type: 'field_dropdown', name: 'camera', options: cameraOptions },
        { type: 'field_dropdown', name: 'color', options: colorOptions },
      ],
      output: 'Boolean',
      colour: Blockly.Msg.VisualHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['color_discrimination'] = function(block) {
  const color = block.getFieldValue('color');
  const code = `IsColourOfRGB(${color})`;

  return [code, Blockly.Lua.ORDER_NONE];
}

Blockly.Python['color_discrimination'] = function (block) {
  const color = block.getFieldValue('color');
  const camera = block.getFieldValue('camera');
  const code = generateHsvCode(HAVE_COLOR, camera, hsvMap[color]);
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Blocks['1676273100751'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273100751",
      "message0": "抱起方块1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273100751'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- 张\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 149, 100, 93, 55, 124, 100, 120, 170, 50, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 149, 100, 113, 90, 109, 100, 120, 170, 50, 100, 87, 111, 91, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 149, 100, 136, 150, 62, 100, 120, 170, 50, 100, 72, 50, 138, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 149, 100, 149, 150, 67, 100, 120, 170, 50, 100, 52, 50, 133, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65, 10, 149, 100, 149, 150, 67, 100, 140, 190, 50, 100, 52, 50, 133, 100, 128, 78, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 100, 104, 132, 70, 100, 140, 190, 50, 100, 93, 69, 130, 100, 128, 78, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 90, 55, 127, 100, 140, 190, 50, 100, 110, 145, 73, 100, 127, 78, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273100751'] = function(block) {
  let code = "base_action.action('抱起方块1')\n";
  return code;
}

Blockly.Blocks['1676273195308'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273195308",
      "message0": "放下方块1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273195308'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- RIGEND\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 93, 55, 127, 100, 140, 190, 50, 100, 107, 145, 73, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 蹲2\nMOTOsetspeed(15)\nMOTOmove19(65, 10, 149, 100, 111, 150, 54, 102, 140, 190, 50, 100, 88, 51, 142, 101, 128, 71, 100)\nMOTOwait()\n\n\n-- MOTORE,100,71,128\nMOTOsetspeed(15)\nMOTOmove19(65, 10, 149, 100, 101, 150, 42, 102, 140, 190, 50, 100, 99, 51, 158, 101, 128, 71, 100)\nMOTOwait()\nDelayMs(400)\n\n\n-- 放\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 101, 107, 149, 43, 100, 140, 190, 50, 101, 92, 51, 157, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(30)\nMOTOmove19(80, 33, 130, 101, 107, 149, 43, 100, 120, 165, 66, 101, 92, 51, 157, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 33, 130, 100, 111, 150, 54, 102, 120, 165, 66, 100, 88, 51, 142, 101, 128, 71, 100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273195308'] = function(block) {
  let code = "base_action.action('放下方块1')\n";
  return code;
}

Blockly.Blocks['1676273115472'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273115472",
      "message0": "抱箱前进1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273115472'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 90, 91, 48, 134, 88, 140, 190, 50, 94, 109, 146, 71, 89, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 86, 123, 95, 115, 90, 140, 190, 50, 94, 109, 146, 71, 87, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 86, 121, 37, 161, 88, 140, 190, 50, 94, 109, 146, 72, 89, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 107, 98, 56, 129, 111, 140, 190, 50, 112, 131, 155, 88, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 106, 93, 54, 128, 113, 140, 190, 50, 114, 77, 105, 85, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 106, 91, 54, 128, 111, 140, 190, 50, 114, 89, 163, 39, 112, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 88, 69, 45, 112, 90, 140, 190, 50, 93, 102, 144, 71, 89, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 86, 123, 95, 115, 90, 140, 190, 50, 94, 107, 146, 72, 87, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 91, 55, 129, 100, 140, 190, 50, 100, 109, 145, 71, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273115472'] = function(block) {
  let code = "base_action.action('抱箱前进1')\n";
  return code;
}

Blockly.Blocks['1676273110376'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273110376",
      "message0": "抱箱后退1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273110376'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 90, 91, 48, 138, 88, 140, 190, 50, 94, 107, 146, 67, 92, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 86, 90, 95, 94, 90, 140, 190, 50, 94, 107, 146, 67, 87, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 88, 71, 53, 114, 85, 140, 190, 50, 93, 100, 144, 70, 91, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 106, 93, 53, 134, 111, 140, 190, 50, 114, 87, 163, 33, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 106, 95, 53, 133, 113, 140, 190, 50, 114, 110, 105, 105, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 107, 100, 56, 130, 109, 140, 190, 50, 112, 129, 147, 86, 115, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 107, 100, 56, 130, 109, 140, 190, 50, 112, 129, 147, 86, 115, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 86, 113, 37, 167, 90, 140, 190, 50, 94, 107, 147, 67, 89, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 86, 90, 95, 95, 90, 140, 190, 50, 94, 105, 147, 69, 87, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 93, 55, 133, 100, 140, 190, 50, 100, 107, 145, 67, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273110376'] = function(block) {
  let code = "base_action.action('抱箱后退1')\n";
  return code;
}

Blockly.Blocks['1676273135796'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273135796",
      "message0": "抱箱左移1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273135796'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35,0,0,0)\nMOTOsetspeed(65)\nMOTOmove19(65, 10, 149, 85, 112, 90, 115, 90, 140, 190, 50, 110, 107, 146, 70, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(65, 10, 149, 95, 93, 53, 131, 105, 140, 190, 50, 120, 116, 160, 68, 130, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(65, 10, 149, 100, 93, 54, 134, 98, 140, 190, 50, 103, 107, 146, 76, 105, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 100, 93, 55, 134, 95, 140, 190, 50, 100, 107, 145, 76, 105, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 100, 93, 55, 134, 100, 140, 190, 50, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273135796'] = function(block) {
  let code = "base_action.action('抱箱左移1')\n";
  return code;
}

Blockly.Blocks['1676273121186'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273121186",
      "message0": "抱箱右移1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273121186'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35,0,0,0)\nMOTOsetspeed(65)\nMOTOmove19(65, 10, 149, 90, 93, 54, 130, 100, 140, 190, 50, 115, 88, 110, 85, 110, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(65, 10, 149, 80, 84, 40, 138, 70, 140, 190, 50, 105, 107, 147, 69, 95, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(65, 10, 149, 97, 93, 54, 130, 95, 140, 190, 50, 100, 107, 146, 66, 102, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 100, 93, 55, 130, 95, 140, 190, 50, 100, 107, 145, 66, 105, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 100, 93, 55, 130, 100, 140, 190, 50, 100, 107, 145, 66, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273121186'] = function(block) {
  let code = "base_action.action('抱箱右移1')\n";
  return code;
}

Blockly.Blocks['1676273139445'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273139445",
      "message0": "抱箱左转1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273139445'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65,0,0,0)\nMOTOsetspeed(14)\nMOTOmove19(65, 10, 149, 95, 71, 55, 109, 95, 140, 190, 50, 105, 89, 145, 51, 105, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 95, 80, 55, 109, 92, 140, 190, 50, 105, 81, 145, 51, 108, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(65, 10, 149, 100, 91, 55, 129, 100, 140, 190, 50, 100, 109, 145, 71, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 91, 55, 129, 100, 140, 190, 50, 100, 109, 145, 71, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273139445'] = function(block) {
  let code = "base_action.action('抱箱左转1')\n";
  return code;
}

Blockly.Blocks['1676273129812'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273129812",
      "message0": "抱箱右转1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273129812'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65,0,0,0)\nMOTOsetspeed(14)\nMOTOmove19(65, 10, 149, 95, 110, 55, 149, 95, 140, 190, 50, 105, 130, 145, 91, 105, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 95, 118, 55, 149, 92, 140, 190, 50, 105, 121, 145, 91, 108, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(65, 10, 149, 100, 90, 55, 129, 100, 140, 190, 50, 100, 110, 145, 71, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 90, 55, 129, 100, 140, 190, 50, 100, 110, 145, 71, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273129812'] = function(block) {
  let code = "base_action.action('抱箱右转1')\n";
  return code;
}

Blockly.Blocks['Front_Roll'] = {
  init: function () {
    this.jsonInit({
      type: 'Front_Roll',
      message0: '%{BKY_FRONT_ROLL}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Front_Roll'] = function (block) {
  const code = [
    'MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 98, 97, 145, 41, 99, 120, 170, 100, 100, 98, 53, 159, 99)',
    'MOTOwait()',
    'MOTOsetspeed(32)',
    'MOTOmove16(85, 30, 130, 100, 140, 152, 60, 100, 115, 170, 70, 100, 60, 48, 140, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(100, 10, 185, 100, 165, 145, 35, 100, 100, 190, 15, 100, 35, 55, 165, 100)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(75, 89, 190, 100, 140, 90, 40, 100, 129, 108, 10, 100, 60, 110, 160, 100)',
    'MOTOwait()',
    'MOTOsetspeed(40)',
    'MOTOmove16(57, 79, 131, 100, 140, 90, 40, 100, 138, 131, 66, 100, 60, 110, 160, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(44, 69, 190, 100, 26, 100, 146, 100, 162, 134, 10, 100, 174, 105, 52, 100)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(68)',
    'MOTOmove16(47, 56, 190, 100, 26, 100, 146, 100, 160, 131, 10, 100, 174, 105, 52, 100)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(37)',
    'MOTOmove16(115, 176, 127, 101, 51, 150, 33, 101, 85, 24, 78, 99, 153, 50, 165, 102)',
    'MOTOwait()',
    'MOTOsetspeed(37)',
    'MOTOmove16(116, 177, 160, 101, 51, 150, 33, 101, 84, 24, 43, 99, 153, 50, 165, 102)',
    'MOTOwait()',
    'MOTOsetspeed(37)',
    'MOTOmove16(116, 177, 160, 101, 51, 150, 33, 101, 84, 24, 43, 99, 153, 50, 165, 102)',
    'MOTOwait()',
    'MOTOsetspeed(40)',
    'MOTOmove16(116, 177, 160, 100, 69, 139, 43, 100, 86, 24, 43, 99, 134, 61, 162, 101)',
    'MOTOwait()',
    'MOTOsetspeed(40)',
    'MOTOmove16(97, 25, 170, 100, 102, 149, 61, 100, 122, 164, 29, 100, 104, 50, 148, 99)',
    'MOTOwait()',
    'MOTOsetspeed(37)',
    'MOTOmove16(69, 64, 100, 101, 100, 144, 33, 101, 121, 130, 99, 99, 100, 56, 165, 102)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(20)',
    'MOTOmove16(83, 28, 98, 100, 123, 152, 44, 103, 115, 169, 89, 103, 78, 46, 161, 100)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(15)',
    'MOTOmove16(85, 30, 102, 99, 107, 150, 44, 100, 115, 162, 96, 99, 94, 50, 159, 98)',
    'MOTOwait()',
    'MOTOsetspeed(15)',
    'MOTOmove16(85, 30, 102, 102, 110, 73, 116, 101, 115, 162, 96, 106, 91, 122, 84, 99)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Front_Roll'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['FRONT_ROLL'] + "')\n";
  return code;
}

Blockly.Blocks['Back_flip'] = {
  init: function () {
    this.jsonInit({
      type: 'Back_flip',
      message0: '%{BKY_BACK_FLIP}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Back_flip'] = function (block) {
  const code = [
    'MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)',
    'MOTOsetspeed(50)',
    'MOTOmove16(70, 50, 80, 100, 25, 133, 40, 98, 130, 150, 120, 100, 175, 65, 161, 102)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(45, 50, 45, 100, 23, 151, 68, 100, 155, 150, 155, 100, 177, 49, 130, 102)',
    'MOTOwait()',
    'MOTOsetspeed(45)',
    'MOTOmove16(70, 50, 35, 100, 160, 11, 121, 97, 130, 150, 165, 100, 40, 186, 81, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(70, 50, 10, 100, 160, 19, 92, 96, 130, 150, 190, 100, 40, 180, 108, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(30, 135, 187, 100, 162, 23, 100, 97, 170, 65, 10, 100, 40, 180, 95, 100)',
    'MOTOwait()',
    'MOTOsetspeed(53)',
    'MOTOmove16(30, 135, 190, 90, 80, 80, 70, 100, 170, 65, 10, 110, 120, 120, 130, 100)',
    'MOTOwait()',
    'DelayMs(50)',
    'MOTOsetspeed(53)',
    'MOTOmove16(90, 10, 160, 63, 162, 145, 33, 75, 110, 190, 40, 137, 38, 55, 167, 125)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(53)',
    'MOTOmove16(90, 15, 155, 100, 162, 145, 55, 100, 110, 185, 45, 100, 38, 55, 145, 100)',
    'MOTOwait()',
    'MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)',
    'MOTOsetspeed(53)',
    'MOTOmove16(90, 15, 155, 100, 162, 145, 55, 100, 110, 185, 45, 100, 38, 55, 145, 100)',
    'MOTOwait()',
    'DelayMs(50)',
    'MOTOsetspeed(42)',
    'MOTOmove16(90, 15, 140, 100, 162, 175, 50, 100, 110, 185, 60, 100, 38, 25, 150, 100)',
    'MOTOwait()',
    'MOTOsetspeed(28)',
    'MOTOmove16(80, 30, 113, 100, 155, 175, 62, 100, 120, 170, 87, 100, 45, 25, 138, 100)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(28)',
    'MOTOmove16(80, 30, 100, 100, 142, 145, 77, 100, 120, 170, 100, 100, 58, 55, 123, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Back_flip'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['BACK_FLIP'] + "')\n";
  return code;
}

Blockly.Blocks['1676273199273'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273199273",
      "message0": "上台阶",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273199273'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30,0,0,0)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90,0,0,0)\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(94, 79, 100, 85, 106, 79, 113, 80, 106, 100, 100, 94, 107, 145, 76, 88, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90,0,0,0)\n\n\n-- 左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97, 105, 100, 85, 132, 127, 85, 89, 103, 100, 100, 94, 107, 145, 76, 88, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90,0,0,0)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100, 150, 100, 85, 160, 50, 180, 95, 100, 100, 100, 95, 85, 100, 99, 90, 128, 71, 100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100, 150, 100, 100, 160, 78, 155, 100, 100, 100, 100, 100, 135, 150, 99, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 100, 160, 78, 155, 100, 100, 100, 100, 100, 145, 150, 99, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(100, 10, 180, 105, 160, 78, 135, 112, 100, 190, 20, 110, 130, 190, 40, 110, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 105, 115, 65, 125, 112, 100, 190, 20, 115, 155, 180, 105, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 105, 105, 65, 125, 112, 100, 190, 20, 115, 70, 110, 95, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 180, 105, 98, 55, 124, 112, 100, 100, 20, 115, 90, 110, 95, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60,0,0,0)\n\n\n-- 2右腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97, 100, 100, 106, 93, 55, 124, 112, 103, 95, 100, 115, 68, 73, 115, 111, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60,0,0,0)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100, 100, 100, 105, 115, 100, 101, 110, 100, 50, 100, 115, 40, 150, 20, 105, 128, 71, 100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 100, 65, 50, 101, 100, 100, 50, 100, 100, 40, 122, 45, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 100, 55, 50, 101, 100, 100, 100, 100, 100, 40, 122, 45, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(100, 10, 180, 90, 70, 10, 160, 90, 100, 190, 20, 95, 40, 122, 65, 88, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 85, 45, 20, 95, 100, 100, 190, 20, 95, 85, 135, 75, 88, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 85, 130, 90, 105, 100, 100, 190, 20, 95, 95, 135, 75, 88, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 180, 85, 110, 90, 105, 100, 100, 100, 20, 95, 102, 145, 76, 88, 128, 71, 100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90,0,0,0)\n\n\n-- 3左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97, 105, 100, 85, 132, 127, 85, 89, 103, 100, 100, 94, 107, 145, 76, 88, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90,0,0,0)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100, 150, 100, 85, 160, 50, 180, 95, 100, 100, 100, 95, 85, 100, 99, 90, 128, 71, 100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100, 150, 100, 100, 160, 78, 155, 100, 100, 100, 100, 100, 135, 150, 99, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 100, 160, 78, 155, 100, 100, 100, 100, 100, 145, 150, 99, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(100, 10, 180, 105, 160, 78, 135, 112, 100, 190, 20, 110, 130, 190, 40, 110, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 105, 115, 65, 125, 112, 100, 190, 20, 115, 155, 180, 105, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 105, 105, 65, 125, 112, 100, 190, 20, 115, 70, 110, 95, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 180, 105, 98, 55, 124, 112, 100, 100, 20, 115, 90, 110, 95, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(200)\n\n\n-- 15\nMOTOsetspeed(25)\nMOTOmove19(100, 100, 180, 102, 79, 32, 137, 108, 100, 100, 20, 108, 121, 165, 70, 108, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(100, 100, 100, 108, 70, 10, 148, 108, 100, 70, 100, 111, 101, 142, 72, 110, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,75,85,100,90,60,30,30,30,50,55,50,50,50,0,0,0)\n\n\n-- 4\nMOTOsetspeed(10)\nMOTOmove19(100, 100, 100, 105, 79, 32, 137, 108, 100, 70, 100, 107, 107, 160, 60, 112, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,50,60,60,60,60,30,30,30,50,60,60,60,60,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(100, 100, 100, 100, 79, 35, 130, 100, 100, 70, 100, 102, 107, 160, 65, 102, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100, 100, 100, 98, 79, 35, 130, 95, 100, 70, 100, 98, 107, 160, 65, 95, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100, 100, 100, 92, 79, 35, 130, 92, 100, 70, 100, 98, 121, 168, 63, 92, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30,0,0,0)\n\n\n-- 14\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 95, 55, 123, 100, 120, 170, 100, 100, 105, 145, 77, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273199273'] = function(block) {
  let code = "base_action.action('上台阶')\n";
  return code;
}

Blockly.Blocks['1676273176627'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273176627",
      "message0": "抱起10cm方块",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273176627'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 94, 55, 123, 100, 120, 170, 100, 100, 106, 145, 77, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,30,60,60,60,30,100,100,100,30,60,60,60,30,0,0,0)\n\n\n-- 3\nMOTOsetspeed(20)\nMOTOmove19(110, 155, 100, 100, 142, 145, 77, 100, 90, 45, 100, 100, 58, 55, 123, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 165, 10, 100, 142, 145, 77, 100, 100, 35, 190, 100, 58, 55, 123, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 165, 10, 100, 142, 145, 55, 100, 100, 35, 190, 100, 58, 55, 145, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 165, 10, 100, 142, 25, 125, 100, 100, 35, 190, 100, 58, 175, 75, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 185, 10, 100, 142, 25, 125, 100, 100, 15, 190, 100, 58, 175, 75, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 185, 10, 55, 158, 140, 55, 60, 100, 15, 190, 145, 42, 60, 145, 140, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(100, 185, 10, 50, 138, 150, 55, 60, 100, 15, 190, 150, 62, 50, 145, 140, 128, 71, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(55)\nMOTOmove19(100, 185, 10, 70, 128, 145, 75, 70, 100, 15, 190, 130, 72, 55, 125, 130, 128, 71, 100)\nMOTOwait()\nDelayMs(500)\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30,0,0,0)\nMOTOsetspeed(14)\nMOTOmove19(100, 185, 100, 98, 142, 145, 77, 98, 100, 15, 100, 102, 58, 55, 123, 102, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 185, 100, 98, 122, 40, 152, 98, 100, 15, 100, 102, 78, 160, 48, 102, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100, 185, 100, 100, 93, 55, 124, 100, 100, 15, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273176627'] = function(block) {
  let code = "base_action.action('抱起10cm方块')\n";
  return code;
}

Blockly.Blocks['1676273185034'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273185034",
      "message0": "放下10cm方块",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273185034'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(100, 185, 100, 98, 93, 55, 124, 98, 100, 15, 100, 102, 107, 145, 76, 102, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 100, 102, 142, 145, 77, 98, 100, 15, 100, 98, 58, 55, 123, 102, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30,0,0,0)\nMOTOsetspeed(14)\nMOTOmove19(100, 185, 10, 70, 128, 145, 75, 70, 100, 15, 190, 130, 72, 55, 125, 130, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(90, 185, 10, 55, 158, 140, 55, 60, 110, 15, 190, 145, 42, 60, 145, 140, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(110, 155, 10, 65, 138, 150, 55, 70, 90, 45, 190, 135, 62, 50, 145, 130, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(110, 155, 10, 70, 128, 145, 75, 70, 90, 45, 190, 130, 72, 55, 125, 130, 128, 71, 100)\nMOTOwait()\nDelayMs(500)\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 165, 100, 98, 142, 145, 77, 98, 120, 35, 100, 102, 58, 55, 123, 102, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 185, 100, 98, 122, 40, 152, 98, 100, 15, 100, 102, 78, 160, 48, 102, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273185034'] = function(block) {
  let code = "base_action.action('放下10cm方块')\n";
  return code;
}

Blockly.Blocks['1676273151408'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273151408",
      "message0": "抱10cm方块前进",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273151408'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 101, 100, 94, 55, 124, 100, 100, 15, 99, 100, 106, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85,0,0,0)\nMOTOrigid16(40,40,40,85,60,60,60,75,40,40,40,85,60,60,60,75,0,0,0)\n\n\n-- 右抬腿\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 101, 105, 93, 55, 124, 105, 100, 15, 99, 111, 102, 136, 78, 112, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 101, 105, 93, 55, 124, 107, 100, 15, 99, 105, 84, 141, 62, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 185, 101, 95, 80, 55, 111, 90, 100, 15, 99, 95, 101, 145, 73, 93, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 101, 95, 116, 59, 138, 90, 100, 15, 99, 95, 107, 145, 76, 93, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 185, 101, 105, 99, 55, 127, 107, 100, 15, 99, 105, 120, 145, 89, 105, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 101, 105, 94, 54, 123, 107, 100, 15, 99, 105, 102, 136, 78, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 101, 100, 94, 55, 123, 98, 100, 15, 99, 100, 106, 145, 77, 102, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273151408'] = function(block) {
  let code = "base_action.action('抱10cm方块前进')\n";
  return code;
}

Blockly.Blocks['1676273147745'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273147745",
      "message0": "抱10cm方块后退",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273147745'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(100, 185, 100, 100, 93, 55, 124, 100, 100, 15, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85,0,0,0)\nMOTOrigid16(100,100,100,85,60,60,60,75,100,100,100,85,60,60,60,75,0,0,0)\n\n\n-- 右抬腿\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 100, 105, 93, 55, 124, 108, 100, 15, 100, 111, 102, 136, 78, 112, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 100, 105, 93, 55, 124, 107, 100, 15, 100, 108, 125, 145, 94, 105, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 185, 100, 92, 116, 55, 144, 85, 100, 15, 100, 95, 107, 145, 76, 93, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 100, 92, 75, 55, 106, 95, 100, 15, 100, 95, 107, 145, 76, 93, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 185, 100, 105, 93, 55, 124, 107, 100, 15, 100, 108, 84, 141, 56, 115, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 185, 100, 105, 92, 55, 124, 107, 100, 15, 100, 111, 107, 136, 78, 112, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 100, 100, 93, 55, 124, 98, 100, 15, 100, 100, 107, 145, 76, 102, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273147745'] = function(block) {
  let code = "base_action.action('抱10cm方块后退')\n";
  return code;
}

Blockly.Blocks['1676273159353'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273159353",
      "message0": "抱10cm方块左移",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273159353'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 101, 89, 98, 64, 122, 90, 100, 15, 99, 95, 107, 145, 76, 93, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 101, 95, 93, 54, 124, 90, 100, 15, 99, 105, 107, 146, 76, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(12)\nMOTOmove19(100, 185, 101, 98, 93, 54, 123, 102, 100, 15, 99, 109, 107, 146, 76, 112, 128, 71, 100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 101, 98, 93, 54, 123, 102, 100, 15, 99, 103, 105, 139, 81, 109, 128, 71, 100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 101, 98, 93, 54, 123, 102, 100, 15, 99, 103, 105, 139, 81, 109, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 101, 100, 93, 55, 124, 100, 100, 15, 99, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273159353'] = function(block) {
  let code = "base_action.action('抱10cm方块左移')\n";
  return code;
}

Blockly.Blocks['1676273155676'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273155676",
      "message0": "抱10cm方块右移",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273155676'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 101, 105, 93, 55, 124, 108, 100, 15, 99, 111, 102, 136, 78, 112, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 185, 100, 94, 93, 54, 124, 100, 100, 15, 100, 106, 107, 146, 76, 110, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(12)\nMOTOmove19(100, 185, 100, 91, 93, 54, 124, 88, 100, 15, 100, 102, 107, 146, 77, 98, 128, 71, 100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 100, 97, 95, 61, 119, 91, 100, 15, 100, 102, 107, 146, 77, 98, 128, 71, 100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 100, 97, 95, 61, 119, 91, 100, 15, 100, 102, 107, 146, 77, 98, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 100, 100, 93, 55, 124, 100, 100, 15, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273155676'] = function(block) {
  let code = "base_action.action('抱10cm方块右移')\n";
  return code;
}

Blockly.Blocks['1676447440168'] = {
  init: function() {
    this.jsonInit({
      "type": "1676447440168",
      "message0": "前倒地",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676447440168'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- 起\nMOTOsetspeed(40)\nMOTOmove19(80, 90, 101, 101, 93, 57, 124, 101, 131, 100, 98, 102, 107, 143, 77, 99, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(37, 92, 182, 85, 64, 41, 98, 99, 153, 107, 19, 130, 142, 160, 92, 103, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54, 47, 190, 63, 160, 136, 46, 86, 150, 147, 19, 137, 44, 67, 152, 117, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(85, 12, 172, 62, 160, 146, 47, 75, 119, 189, 31, 139, 43, 54, 154, 123, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54, 47, 190, 66, 149, 146, 55, 63, 150, 147, 19, 158, 48, 60, 146, 140, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54, 47, 190, 70, 126, 145, 53, 68, 150, 147, 19, 138, 74, 60, 147, 135, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(54, 47, 190, 79, 113, 140, 50, 78, 150, 147, 19, 126, 72, 60, 135, 125, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 113, 100, 125, 140, 62, 100, 120, 170, 87, 100, 75, 60, 138, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 113, 104, 127, 133, 71, 100, 120, 170, 87, 103, 70, 67, 128, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 113, 102, 128, 104, 97, 100, 120, 170, 87, 102, 74, 91, 104, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(40)\nMOTOmove19(80, 37, 100, 108, 93, 55, 124, 100, 120, 170, 100, 92, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676447440168'] = function(block) {
  let code = "base_action.action('前倒地')\n";
  return code;
}

Blockly.Blocks['1676447448574'] = {
  init: function() {
    this.jsonInit({
      "type": "1676447448574",
      "message0": "后倒地",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676447448574'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(35, 130, 20, 101, 131, 126, 170, 100, 165, 70, 180, 99, 69, 74, 30, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(21, 105, 21, 101, 131, 126, 170, 100, 179, 95, 180, 99, 69, 74, 30, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92, 16, 46, 100, 80, 150, 60, 100, 108, 184, 154, 100, 120, 50, 140, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92, 18, 58, 100, 73, 150, 40, 100, 108, 182, 142, 100, 127, 50, 160, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92, 25, 135, 100, 124, 150, 50, 100, 108, 175, 65, 100, 76, 50, 150, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676447448574'] = function(block) {
  let code = "base_action.action('后倒地')\n";
  return code;
}

Blockly.Blocks['1677548683339'] = {
  init: function() {
    this.jsonInit({
      "type": "1677548683339",
      "message0": "下台阶",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1677548683339'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(86, 105, 100, 93, 93, 55, 123, 86, 105, 95, 100, 93, 106, 143, 75, 89, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(86, 105, 100, 85, 125, 100, 117, 91, 105, 95, 100, 95, 106, 143, 75, 88, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(86, 105, 100, 90, 145, 60, 117, 91, 105, 95, 100, 95, 106, 143, 75, 88, 128, 71, 99)\nMOTOwait()\nMOTOrigid16(25,25,25,50,50,50,50,50,25,25,25,90,90,90,90,90,0,0,0)\nMOTOsetspeed(25)\nMOTOmove19(86, 105, 100, 85, 103, 27, 165, 90, 105, 95, 100, 94, 134, 100, 124, 85, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(86, 105, 100, 85, 102, 10, 190, 90, 105, 95, 100, 94, 118, 80, 153, 85, 128, 71, 99)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,50,50,50,50,50,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(100, 167, 100, 105, 120, 10, 181, 110, 100, 100, 100, 120, 105, 91, 145, 125, 128, 71, 99)\nMOTOwait()\nDelayMs(150)\nMOTOsetspeed(15)\nMOTOmove19(100, 167, 100, 105, 120, 10, 175, 113, 100, 100, 100, 120, 100, 96, 145, 120, 128, 71, 99)\nMOTOwait()\nDelayMs(150)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,50,50,50,50,50,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(100, 100, 100, 105, 75, 10, 145, 113, 100, 60, 100, 120, 160, 175, 105, 129, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 100, 100, 105, 75, 10, 145, 113, 100, 60, 100, 130, 150, 190, 105, 129, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 100, 100, 105, 68, 10, 148, 112, 100, 60, 100, 135, 110, 91, 145, 129, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 100, 100, 105, 52, 10, 139, 112, 100, 60, 100, 125, 89, 69, 145, 116, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 100, 100, 105, 52, 10, 139, 112, 100, 60, 100, 113, 107, 145, 76, 110, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 30, 100, 107, 91, 48, 129, 107, 120, 150, 100, 113, 107, 145, 76, 110, 128, 71, 99)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,55,55,55,85,0,0,0)\nMOTOsetspeed(18)\nMOTOmove19(80, 30, 100, 107, 91, 48, 129, 107, 120, 150, 100, 113, 107, 145, 76, 110, 128, 71, 99)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1677548683339'] = function(block) {
  let code = "base_action.action('下台阶')\n";
  return code;
}

Blockly.Blocks['aelos_while'] = {
  init: function () {
    this.jsonInit({
      type: 'aelos_while',
      message0: '%{BKY_AELOS_WHILE} %1 %{BKY_AELOS_DO} %2',
      args0: [
        {
          type: 'input_value',
          name: 'condition',
          check: 'Boolean',
        },
        {
          type: 'input_statement',
          name: 'do',
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: '#86C113',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['aelos_while'] = function(block) {
    var condition = Blockly.Lua.valueToCode(block, "condition", Blockly.Lua.ORDER_NONE) || "FALSE";
    var do_code = Blockly.Lua.statementToCode(block, "do") || "  pass\n";

    var code = `while (${condition})\ndo\n${do_code}\nHKEY()\nend\n`;
    return code;
}

Blockly.Python['aelos_while'] = function (block) {
  var condition =
    Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_NONE) || 'False';
  var do_code = Blockly.Python.statementToCode(block, 'do') || Blockly.Python.PASS;

  var code = `while ${condition}:\n${do_code}`;
  return code;
}

Blockly.Blocks['1677554203595'] = {
  init: function() {
    this.jsonInit({
      "type": "1677554203595",
      "message0": "翻墙稳定1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1677554203595'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30,0,0,0)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(90, 105, 190, 100, 128, 10, 170, 100, 110, 95, 10, 100, 72, 190, 30, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(30)\nMOTOmove19(90, 10, 190, 100, 108, 10, 170, 100, 110, 190, 10, 100, 92, 190, 30, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 118, 10, 170, 100, 110, 190, 10, 100, 82, 190, 30, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 128, 10, 169, 100, 110, 190, 10, 100, 72, 190, 31, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 128, 10, 168, 100, 110, 190, 10, 100, 72, 190, 32, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 128, 10, 164, 100, 110, 190, 10, 100, 72, 190, 36, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 130, 10, 164, 100, 110, 190, 10, 100, 70, 190, 36, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 130, 10, 161, 100, 110, 190, 10, 100, 70, 190, 39, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 130, 10, 159, 100, 110, 190, 10, 100, 70, 190, 41, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 132, 10, 159, 100, 110, 190, 10, 100, 68, 190, 41, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 132, 10, 157, 100, 110, 190, 10, 100, 68, 190, 43, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 132, 10, 154, 100, 110, 190, 10, 100, 68, 190, 46, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(87, 14, 190, 100, 132, 10, 154, 100, 113, 186, 10, 100, 68, 190, 46, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(1000)\nMOTOrigid16(90,90,100,30,60,60,60,30,90,90,100,30,60,60,60,30,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(50, 50, 190, 100, 132, 10, 154, 100, 150, 150, 10, 100, 68, 190, 46, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(120)\nMOTOmove19(50, 50, 165, 100, 10, 95, 108, 100, 150, 150, 35, 100, 65, 190, 40, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(50, 50, 165, 100, 10, 95, 108, 100, 150, 150, 35, 100, 165, 190, 40, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(300)\n\n\n-- 修改\nMOTOsetspeed(135)\nMOTOmove19(43, 40, 190, 100, 10, 95, 108, 100, 166, 160, 10, 100, 190, 175, 10, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 8\nMOTOsetspeed(99)\nMOTOmove19(50, 50, 190, 100, 90, 95, 170, 100, 150, 150, 10, 100, 110, 105, 30, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 9\nMOTOsetspeed(40)\nMOTOmove19(89, 182, 110, 100, 10, 95, 93, 100, 111, 18, 90, 100, 190, 105, 107, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 10\nMOTOsetspeed(40)\nMOTOmove19(90, 160, 190, 100, 10, 95, 63, 100, 110, 40, 10, 100, 190, 105, 137, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70,0,0,0)\n\n\n-- 12\nMOTOsetspeed(24)\nMOTOmove19(90, 50, 190, 100, 142, 145, 77, 100, 110, 150, 10, 100, 58, 55, 123, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 13\nMOTOsetspeed(24)\nMOTOmove19(90, 50, 190, 100, 142, 145, 77, 100, 110, 150, 10, 100, 58, 55, 123, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(24)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1677554203595'] = function(block) {
  let code = "base_action.action('翻墙稳定1')\n";
  return code;
}

Blockly.Blocks['Take_a_quick_step_forward'] = {
  init: function () {
    this.jsonInit({
      type: 'Take_a_quick_step_forward',
      message0: '%{BKY_TAKE_A_QUICK_STEP_FORWARD}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Take_a_quick_step_forward'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,75,75,90,80,70,25,25,25,75,75,90,80,70)',
    'MOTOsetspeed(45)',
    'MOTOmove16(80, 30, 100, 99, 93, 54, 122, 90, 120, 170, 100, 98, 107, 146, 75, 95)',
    'MOTOwait()',
    'MOTOsetspeed(60)',
    'MOTOmove16(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 91, 94)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 91, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 91, 66, 109, 102, 120, 170, 120, 101, 85, 101, 97, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 86, 63, 110, 100, 120, 170, 120, 101, 90, 126, 79, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 94)',
    'MOTOwait()',
    'MOTOsetspeed(65)',
    'MOTOmove16(80, 30, 120, 96, 95, 70, 110, 100, 120, 170, 120, 102, 109, 146, 75, 96)',
    'MOTOwait()',
    'MOTOsetspeed(45)',
    'MOTOmove16(80, 30, 100, 99, 93, 54, 122, 90, 120, 170, 100, 98, 107, 146, 75, 95)',
    'MOTOwait()',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Take_a_quick_step_forward'] = function (block) {
  var code = "base_action.action('" + Blockly.Msg['TAKE_A_QUICK_STEP_FORWARD'] + "')\n";
  return code;
}

Blockly.Blocks['1780309080644'] = {
  init: function() {
    this.jsonInit({
      "type": "1780309080644",
      "message0": "Forwalk02LS_0427",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780309080644'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 75, 100, 108, 55, 137, 100, 120, 170, 75, 100, 132, 154, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,75,85,100,90,70,30,30,30,50,55,50,50,50)\nMOTOmove19(80, 35, 90, 107, 100, 56, 124, 111, 120, 165, 90, 112, 147, 155, 99, 110, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 35, 90, 107, 100, 56, 124, 111, 120, 165, 90, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\n\n\n-- 6\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 110, 106, 95, 54, 123, 112, 120, 165, 110, 114, 75, 105, 90, 110, 0, 0, 100)\nMOTOwait()\n\n\n-- 停止\nMOTOsetspeed(20)\nMOTOmove19(80, 35, 100, 106, 95, 54, 124, 111, 120, 165, 100, 120, 109, 152, 71, 120, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,55,55,55,85)\nMOTOmove19(80, 30, 100, 107, 93, 55, 124, 107, 120, 150, 100, 106, 107, 145, 76, 108, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(6)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780309080644'] = function(block) {
  let code = "base_action.action('Forwalk02LS_0427')\n";
  return code;
}

Blockly.Blocks['1780318294505'] = {
  init: function() {
    this.jsonInit({
      "type": "1780318294505",
      "message0": "Dance_0601",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780318294505'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(90,90,40,90,40,40,40,40,90,90,40,90,40,40,40,40)\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 30, 50, 100, 100, 76, 107, 100, 120, 170, 150, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(80, 60, 30, 100, 100, 76, 107, 100, 120, 140, 170, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 30, 60, 100, 100, 76, 107, 100, 120, 170, 140, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 60, 30, 100, 100, 76, 107, 100, 120, 140, 170, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 30, 60, 100, 100, 76, 107, 100, 120, 170, 140, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 60, 30, 100, 100, 76, 107, 100, 120, 140, 170, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 30, 60, 100, 100, 76, 107, 100, 120, 170, 140, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(70,70,60,70,60,60,60,60,70,70,60,70,60,60,60,60)\nMOTOsetspeed(25)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 50, 100, 100, 100, 76, 107, 100, 120, 150, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80)\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(90,90,30,90,30,30,30,30,90,90,30,90,30,30,30,30)\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(70,70,40,70,40,40,40,40,70,70,40,70,40,40,40,40)\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(80,80,30,80,30,30,30,30,80,80,30,80,30,30,30,30)\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(70,70,50,70,50,50,50,50,70,70,50,70,50,50,50,50)\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(80,80,60,80,60,60,60,60,80,80,60,80,60,60,60,60)\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(85,85,30,85,30,30,30,30,85,85,30,85,30,30,30,30)\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(60,60,40,60,40,40,40,40,60,60,40,60,40,40,40,40)\nMOTOsetspeed(25)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 50, 100, 100, 100, 76, 107, 100, 120, 150, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(80, 60, 100, 100, 100, 76, 107, 100, 120, 140, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 50, 100, 100, 100, 76, 107, 100, 120, 150, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 40, 100, 100, 100, 76, 107, 100, 120, 160, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(85,85,40,85,40,40,40,40,85,85,40,85,40,40,40,40)\nMOTOsetspeed(60)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(90,90,20,90,20,20,20,20,90,90,20,90,20,20,20,20)\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(70,70,50,70,50,50,50,50,70,70,50,70,50,50,50,50)\nMOTOsetspeed(25)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(80,80,50,80,50,50,50,50,80,80,50,80,50,50,50,50)\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 100, 76, 107, 100, 120, 170, 100, 100, 100, 124, 93, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780318294505'] = function(block) {
  let code = "base_action.action('Dance_0601')\n";
  return code;
}

Blockly.Blocks['1780318814378'] = {
  init: function() {
    this.jsonInit({
      "type": "1780318814378",
      "message0": "Dance_0601（2）",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780318814378'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,55,85,100,90,50,30,30,30,75,85,100,90,70)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(90,90,40,90,40,40,40,40,90,90,40,90,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(80, 30, 50, 100, 93, 55, 124, 100, 120, 170, 150, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(80, 60, 30, 100, 93, 55, 124, 100, 120, 140, 170, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(80, 30, 60, 100, 93, 55, 124, 100, 120, 170, 140, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(80, 60, 30, 100, 93, 55, 124, 100, 120, 140, 170, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(80, 30, 60, 100, 93, 55, 124, 100, 120, 170, 140, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(80, 60, 30, 100, 93, 55, 124, 100, 120, 140, 170, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(80, 30, 60, 100, 93, 55, 124, 100, 120, 170, 140, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,55,85,100,90,50,30,30,30,75,85,100,90,70)\nMOTOsetspeed(20)\nMOTOmove19(80, 50, 100, 100, 93, 55, 124, 100, 120, 150, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(90,90,30,90,30,30,30,30,90,90,30,90,30,30,30,30)\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(70, 30, 100, 100, 93, 55, 124, 100, 110, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(90, 30, 100, 100, 93, 55, 124, 100, 130, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(70, 30, 100, 100, 93, 55, 124, 100, 110, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(90,90,30,90,30,30,30,30,90,90,30,90,30,30,30,30)\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(70,70,40,70,40,40,40,40,70,70,40,70,40,40,40,40)\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 100, 102, 79, 32, 137, 108, 120, 170, 100, 108, 121, 165, 70, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 100, 102, 93, 40, 135, 105, 120, 170, 100, 102, 121, 165, 70, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 100, 102, 79, 32, 137, 108, 120, 170, 100, 108, 121, 165, 70, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(80,80,30,80,30,30,30,30,80,80,30,80,30,30,30,30)\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 50, 100, 93, 55, 124, 100, 120, 170, 150, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 50, 100, 93, 55, 124, 100, 120, 170, 150, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(70,70,50,70,50,50,50,50,70,70,50,70,50,50,50,50)\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,75,85,100,90,60,30,30,30,55,85,100,90,50)\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 100, 102, 79, 32, 137, 108, 120, 170, 100, 108, 121, 165, 70, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 100, 92, 79, 35, 130, 92, 120, 170, 100, 98, 121, 168, 63, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(85,85,30,85,30,30,30,30,85,85,30,85,30,30,30,30)\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 30, 100, 93, 55, 124, 100, 120, 170, 30, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(60,60,40,60,40,40,40,40,60,60,40,60,40,40,40,40)\nMOTOsetspeed(25)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 50, 100, 100, 93, 55, 124, 100, 120, 150, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(80, 60, 100, 100, 93, 55, 124, 100, 120, 140, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 50, 100, 100, 93, 55, 124, 100, 120, 150, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 40, 100, 100, 93, 55, 124, 100, 120, 160, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(85,85,40,85,40,40,40,40,85,85,40,85,40,40,40,40)\nMOTOsetspeed(60)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 30, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 170, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(90,90,20,90,20,20,20,20,90,90,20,90,20,20,20,20)\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(80, 30, 30, 100, 93, 55, 124, 100, 120, 170, 30, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(80, 30, 170, 100, 93, 55, 124, 100, 120, 170, 170, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(80, 30, 30, 100, 93, 55, 124, 100, 120, 170, 30, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(80, 30, 170, 100, 93, 55, 124, 100, 120, 170, 170, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(80, 30, 30, 100, 93, 55, 124, 100, 120, 170, 30, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(80, 30, 170, 100, 93, 55, 124, 100, 120, 170, 170, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(80, 30, 30, 100, 93, 55, 124, 100, 120, 170, 30, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(70,70,50,70,50,50,50,50,70,70,50,70,50,50,50,50)\nMOTOsetspeed(25)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(80,80,50,80,50,50,50,50,80,80,50,80,50,50,50,50)\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780318814378'] = function(block) {
  let code = "base_action.action('Dance_0601（2）')\n";
  return code;
}

Blockly.Blocks['1780319284011'] = {
  init: function() {
    this.jsonInit({
      "type": "1780319284011",
      "message0": "Dance_0601（3）",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780319284011'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,55,85,100,90,50,30,30,30,75,85,100,90,70)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 80, 100, 93, 55, 124, 100, 120, 170, 80, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 60, 100, 93, 55, 124, 100, 120, 170, 60, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 40, 100, 93, 55, 124, 100, 120, 170, 40, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 30, 100, 93, 55, 124, 100, 120, 170, 30, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 50, 100, 93, 55, 124, 100, 120, 170, 50, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 70, 100, 93, 55, 124, 100, 120, 170, 70, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 90, 100, 93, 55, 124, 100, 120, 170, 90, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 35, 80, 92, 79, 35, 130, 92, 120, 165, 80, 98, 121, 168, 63, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 35, 120, 102, 79, 32, 137, 108, 120, 165, 120, 108, 121, 165, 70, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 35, 80, 92, 79, 35, 130, 92, 120, 165, 80, 98, 121, 168, 63, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 50, 100, 100, 93, 55, 124, 100, 120, 150, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 70, 100, 100, 93, 55, 124, 100, 120, 130, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 90, 100, 100, 93, 55, 124, 100, 120, 110, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 100, 100, 100, 93, 55, 124, 100, 120, 100, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 70, 100, 100, 93, 55, 124, 100, 120, 130, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 50, 100, 100, 93, 55, 124, 100, 120, 150, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 35, 90, 98, 79, 35, 130, 95, 120, 165, 90, 98, 107, 160, 65, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 35, 110, 102, 93, 40, 135, 105, 120, 165, 110, 102, 121, 165, 70, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 35, 90, 98, 79, 35, 130, 95, 120, 165, 90, 98, 107, 160, 65, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 35, 110, 102, 93, 40, 135, 105, 120, 165, 110, 102, 121, 165, 70, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 30, 100, 93, 55, 124, 100, 120, 170, 170, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 50, 100, 93, 55, 124, 100, 120, 170, 150, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 80, 100, 93, 55, 124, 100, 120, 170, 120, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 170, 100, 93, 55, 124, 100, 120, 170, 30, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 150, 100, 93, 55, 124, 100, 120, 170, 50, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 120, 100, 93, 55, 124, 100, 120, 170, 80, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 50, 100, 107, 93, 55, 124, 107, 120, 170, 100, 106, 107, 145, 76, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780319284011'] = function(block) {
  let code = "base_action.action('Dance_0601（3）')\n";
  return code;
}

Blockly.Blocks['1780319437988'] = {
  init: function() {
    this.jsonInit({
      "type": "1780319437988",
      "message0": "Elegant_Dance_0601",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780319437988'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,55,85,100,90,50,30,30,30,75,85,100,90,70)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 35, 90, 100, 93, 55, 124, 100, 120, 165, 90, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 40, 80, 100, 93, 55, 124, 100, 120, 160, 80, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 45, 70, 100, 93, 55, 124, 100, 120, 155, 70, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 50, 60, 100, 93, 55, 124, 100, 120, 150, 60, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 55, 50, 100, 93, 55, 124, 100, 120, 145, 50, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 60, 40, 100, 93, 55, 124, 100, 120, 140, 40, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 55, 50, 100, 93, 55, 124, 100, 120, 145, 50, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 50, 60, 100, 93, 55, 124, 100, 120, 150, 60, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 45, 70, 100, 93, 55, 124, 100, 120, 155, 70, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 40, 80, 100, 93, 55, 124, 100, 120, 160, 80, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 35, 90, 100, 93, 55, 124, 100, 120, 165, 90, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 30, 100, 98, 90, 50, 127, 98, 120, 170, 100, 98, 110, 150, 73, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 30, 100, 96, 87, 45, 130, 96, 120, 170, 100, 96, 113, 155, 70, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 30, 100, 94, 84, 40, 133, 94, 120, 170, 100, 94, 116, 160, 67, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 30, 100, 96, 87, 45, 130, 96, 120, 170, 100, 96, 113, 155, 70, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 30, 100, 98, 90, 50, 127, 98, 120, 170, 100, 98, 110, 150, 73, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 40, 100, 100, 93, 55, 124, 100, 120, 160, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 50, 100, 100, 93, 55, 124, 100, 120, 150, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 60, 100, 100, 93, 55, 124, 100, 120, 140, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 70, 100, 100, 93, 55, 124, 100, 120, 130, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 80, 100, 100, 93, 55, 124, 100, 120, 120, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 90, 100, 100, 93, 55, 124, 100, 120, 110, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 80, 100, 100, 93, 55, 124, 100, 120, 120, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 70, 100, 100, 93, 55, 124, 100, 120, 130, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 60, 100, 100, 93, 55, 124, 100, 120, 140, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 50, 100, 100, 93, 55, 124, 100, 120, 150, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 40, 100, 100, 93, 55, 124, 100, 120, 160, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 103, 93, 55, 124, 102, 120, 170, 100, 103, 107, 145, 76, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 30, 100, 106, 93, 55, 124, 104, 120, 170, 100, 106, 107, 145, 76, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 103, 93, 55, 124, 102, 120, 170, 100, 103, 107, 145, 76, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 35, 90, 100, 93, 55, 124, 100, 120, 165, 110, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 40, 80, 100, 93, 55, 124, 100, 120, 160, 120, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 45, 70, 100, 93, 55, 124, 100, 120, 155, 130, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 40, 80, 100, 93, 55, 124, 100, 120, 160, 120, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 35, 90, 100, 93, 55, 124, 100, 120, 165, 110, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 35, 110, 100, 93, 55, 124, 100, 120, 165, 90, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 40, 120, 100, 93, 55, 124, 100, 120, 160, 80, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 45, 130, 100, 93, 55, 124, 100, 120, 155, 70, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 40, 120, 100, 93, 55, 124, 100, 120, 160, 80, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 35, 110, 100, 93, 55, 124, 100, 120, 165, 90, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 30, 100, 99, 92, 52, 125, 97, 120, 170, 100, 99, 108, 148, 75, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780319437988'] = function(block) {
  let code = "base_action.action('Elegant_Dance_0601')\n";
  return code;
}

Blockly.Blocks['1780319730251'] = {
  init: function() {
    this.jsonInit({
      "type": "1780319730251",
      "message0": "Long_Elegant_Dance",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780319730251'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,55,85,100,90,50,30,30,30,75,85,100,90,70)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 32, 95, 100, 93, 55, 124, 100, 120, 168, 95, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 35, 90, 100, 93, 55, 124, 100, 120, 165, 90, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 38, 85, 100, 93, 55, 124, 100, 120, 162, 85, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 40, 80, 100, 93, 55, 124, 100, 120, 160, 80, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 43, 75, 100, 93, 55, 124, 100, 120, 157, 75, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 45, 70, 100, 93, 55, 124, 100, 120, 155, 70, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 48, 65, 100, 93, 55, 124, 100, 120, 152, 65, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 50, 60, 100, 93, 55, 124, 100, 120, 150, 60, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 53, 55, 100, 93, 55, 124, 100, 120, 147, 55, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 55, 50, 100, 93, 55, 124, 100, 120, 145, 50, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 58, 45, 100, 93, 55, 124, 100, 120, 142, 45, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 60, 40, 100, 93, 55, 124, 100, 120, 140, 40, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 58, 45, 100, 93, 55, 124, 100, 120, 142, 45, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 55, 50, 100, 93, 55, 124, 100, 120, 145, 50, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 53, 55, 100, 93, 55, 124, 100, 120, 147, 55, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 50, 60, 100, 93, 55, 124, 100, 120, 150, 60, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 48, 65, 100, 93, 55, 124, 100, 120, 152, 65, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 45, 70, 100, 93, 55, 124, 100, 120, 155, 70, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 43, 75, 100, 93, 55, 124, 100, 120, 157, 75, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 40, 80, 100, 93, 55, 124, 100, 120, 160, 80, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 38, 85, 100, 93, 55, 124, 100, 120, 162, 85, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 35, 90, 100, 93, 55, 124, 100, 120, 165, 90, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 32, 95, 100, 93, 55, 124, 100, 120, 168, 95, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 99, 92, 53, 125, 99, 120, 170, 100, 99, 108, 147, 75, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 30, 100, 98, 91, 51, 126, 98, 120, 170, 100, 98, 109, 149, 74, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 30, 100, 97, 90, 49, 127, 97, 120, 170, 100, 97, 110, 151, 73, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 30, 100, 96, 89, 47, 128, 96, 120, 170, 100, 96, 111, 153, 72, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 30, 100, 95, 88, 45, 129, 95, 120, 170, 100, 95, 112, 155, 71, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 30, 100, 94, 87, 43, 130, 94, 120, 170, 100, 94, 113, 157, 70, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 93, 86, 41, 131, 93, 120, 170, 100, 93, 114, 159, 69, 93, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 30, 100, 94, 87, 43, 130, 94, 120, 170, 100, 94, 113, 157, 70, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 30, 100, 95, 88, 45, 129, 95, 120, 170, 100, 95, 112, 155, 71, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 30, 100, 96, 89, 47, 128, 96, 120, 170, 100, 96, 111, 153, 72, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 30, 100, 97, 90, 49, 127, 97, 120, 170, 100, 97, 110, 151, 73, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 30, 100, 98, 91, 51, 126, 98, 120, 170, 100, 98, 109, 149, 74, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 99, 92, 53, 125, 99, 120, 170, 100, 99, 108, 147, 75, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 35, 100, 100, 93, 55, 124, 100, 120, 165, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 40, 100, 100, 93, 55, 124, 100, 120, 160, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 45, 100, 100, 93, 55, 124, 100, 120, 155, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 50, 100, 100, 93, 55, 124, 100, 120, 150, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 55, 100, 100, 93, 55, 124, 100, 120, 145, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 60, 100, 100, 93, 55, 124, 100, 120, 140, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 65, 100, 100, 93, 55, 124, 100, 120, 135, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 70, 100, 100, 93, 55, 124, 100, 120, 130, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 75, 100, 100, 93, 55, 124, 100, 120, 125, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 80, 100, 100, 93, 55, 124, 100, 120, 120, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 85, 100, 100, 93, 55, 124, 100, 120, 115, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 90, 100, 100, 93, 55, 124, 100, 120, 110, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 95, 100, 100, 93, 55, 124, 100, 120, 105, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 100, 100, 100, 93, 55, 124, 100, 120, 100, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 95, 100, 100, 93, 55, 124, 100, 120, 105, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 90, 100, 100, 93, 55, 124, 100, 120, 110, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 85, 100, 100, 93, 55, 124, 100, 120, 115, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 80, 100, 100, 93, 55, 124, 100, 120, 120, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 75, 100, 100, 93, 55, 124, 100, 120, 125, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 70, 100, 100, 93, 55, 124, 100, 120, 130, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 65, 100, 100, 93, 55, 124, 100, 120, 135, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 60, 100, 100, 93, 55, 124, 100, 120, 140, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 55, 100, 100, 93, 55, 124, 100, 120, 145, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 50, 100, 100, 93, 55, 124, 100, 120, 150, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 45, 100, 100, 93, 55, 124, 100, 120, 155, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 40, 100, 100, 93, 55, 124, 100, 120, 160, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 35, 100, 100, 93, 55, 124, 100, 120, 165, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 101, 93, 55, 124, 101, 120, 170, 100, 101, 107, 145, 76, 101, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 30, 100, 102, 93, 55, 124, 102, 120, 170, 100, 102, 107, 145, 76, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 30, 100, 103, 93, 55, 124, 103, 120, 170, 100, 103, 107, 145, 76, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 30, 100, 104, 93, 55, 124, 104, 120, 170, 100, 104, 107, 145, 76, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 30, 100, 105, 93, 55, 124, 105, 120, 170, 100, 105, 107, 145, 76, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 30, 100, 104, 93, 55, 124, 104, 120, 170, 100, 104, 107, 145, 76, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 103, 93, 55, 124, 103, 120, 170, 100, 103, 107, 145, 76, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 30, 100, 102, 93, 55, 124, 102, 120, 170, 100, 102, 107, 145, 76, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 30, 100, 101, 93, 55, 124, 101, 120, 170, 100, 101, 107, 145, 76, 101, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 35, 85, 100, 93, 55, 124, 100, 120, 165, 115, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 40, 75, 100, 93, 55, 124, 100, 120, 160, 125, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 45, 65, 100, 93, 55, 124, 100, 120, 155, 135, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 50, 55, 100, 93, 55, 124, 100, 120, 150, 145, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 55, 45, 100, 93, 55, 124, 100, 120, 145, 155, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 60, 35, 100, 93, 55, 124, 100, 120, 140, 165, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 55, 45, 100, 93, 55, 124, 100, 120, 145, 155, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 50, 55, 100, 93, 55, 124, 100, 120, 150, 145, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 45, 65, 100, 93, 55, 124, 100, 120, 155, 135, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 40, 75, 100, 93, 55, 124, 100, 120, 160, 125, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 35, 85, 100, 93, 55, 124, 100, 120, 165, 115, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 32, 95, 100, 93, 55, 124, 100, 120, 168, 105, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 32, 105, 100, 93, 55, 124, 100, 120, 168, 95, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 35, 115, 100, 93, 55, 124, 100, 120, 165, 85, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 40, 125, 100, 93, 55, 124, 100, 120, 160, 75, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 45, 135, 100, 93, 55, 124, 100, 120, 155, 65, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 50, 145, 100, 93, 55, 124, 100, 120, 150, 55, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 55, 155, 100, 93, 55, 124, 100, 120, 145, 45, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 60, 165, 100, 93, 55, 124, 100, 120, 140, 35, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 55, 155, 100, 93, 55, 124, 100, 120, 145, 45, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 50, 145, 100, 93, 55, 124, 100, 120, 150, 55, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 45, 135, 100, 93, 55, 124, 100, 120, 155, 65, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 40, 125, 100, 93, 55, 124, 100, 120, 160, 75, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 35, 115, 100, 93, 55, 124, 100, 120, 165, 85, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 32, 105, 100, 93, 55, 124, 100, 120, 168, 95, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 30, 100, 98, 92, 52, 125, 98, 120, 170, 100, 98, 108, 148, 75, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 40, 85, 99, 91, 51, 126, 98, 120, 160, 85, 99, 109, 149, 74, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 45, 75, 97, 89, 47, 128, 96, 120, 155, 75, 97, 111, 153, 72, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 50, 65, 95, 87, 43, 130, 94, 120, 150, 65, 95, 113, 157, 70, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 55, 55, 97, 89, 47, 128, 96, 120, 145, 55, 97, 111, 153, 72, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 50, 65, 99, 91, 51, 126, 98, 120, 150, 65, 99, 109, 149, 74, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 45, 75, 100, 93, 55, 124, 100, 120, 155, 75, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 40, 85, 100, 93, 55, 124, 100, 120, 160, 85, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 30, 70, 100, 93, 55, 124, 100, 120, 140, 70, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 30, 60, 100, 93, 55, 124, 100, 120, 135, 60, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 30, 50, 100, 93, 55, 124, 100, 120, 130, 50, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 30, 40, 100, 93, 55, 124, 100, 120, 125, 40, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 30, 50, 100, 93, 55, 124, 100, 120, 130, 50, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 30, 60, 100, 93, 55, 124, 100, 120, 135, 60, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 30, 70, 100, 93, 55, 124, 100, 120, 140, 70, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 30, 80, 100, 93, 55, 124, 100, 120, 145, 80, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 30, 90, 100, 93, 55, 124, 100, 120, 150, 90, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 155, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 60, 130, 100, 93, 55, 124, 100, 120, 170, 130, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 65, 140, 100, 93, 55, 124, 100, 120, 170, 140, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 70, 150, 100, 93, 55, 124, 100, 120, 170, 150, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 75, 160, 100, 93, 55, 124, 100, 120, 170, 160, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 70, 150, 100, 93, 55, 124, 100, 120, 170, 150, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 65, 140, 100, 93, 55, 124, 100, 120, 170, 140, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 60, 130, 100, 93, 55, 124, 100, 120, 170, 130, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 55, 120, 100, 93, 55, 124, 100, 120, 170, 120, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 50, 110, 100, 93, 55, 124, 100, 120, 170, 110, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 45, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 40, 90, 98, 91, 50, 126, 97, 120, 160, 90, 98, 109, 150, 74, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 50, 80, 96, 88, 45, 128, 94, 120, 150, 80, 96, 112, 155, 72, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 60, 70, 98, 91, 50, 126, 97, 120, 140, 70, 98, 109, 150, 74, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 50, 80, 100, 93, 55, 124, 100, 120, 150, 80, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 40, 90, 100, 93, 55, 124, 100, 120, 160, 90, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 40, 100, 100, 93, 55, 124, 100, 120, 160, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 50, 95, 100, 93, 55, 124, 100, 120, 150, 95, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 60, 90, 100, 93, 55, 124, 100, 120, 140, 90, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 70, 85, 100, 93, 55, 124, 100, 120, 130, 85, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 80, 80, 100, 93, 55, 124, 100, 120, 120, 80, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 70, 85, 100, 93, 55, 124, 100, 120, 130, 85, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 60, 90, 100, 93, 55, 124, 100, 120, 140, 90, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 50, 95, 100, 93, 55, 124, 100, 120, 150, 95, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 40, 100, 100, 93, 55, 124, 100, 120, 160, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 30, 100, 99, 92, 53, 125, 99, 120, 170, 100, 99, 108, 147, 75, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 30, 100, 98, 91, 51, 126, 98, 120, 170, 100, 98, 109, 149, 74, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 30, 100, 97, 90, 49, 127, 97, 120, 170, 100, 97, 110, 151, 73, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 30, 100, 98, 91, 51, 126, 98, 120, 170, 100, 98, 109, 149, 74, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 99, 92, 53, 125, 99, 120, 170, 100, 99, 108, 147, 75, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 50, 100, 100, 93, 55, 124, 100, 120, 150, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 70, 100, 100, 93, 55, 124, 100, 120, 130, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 50, 100, 100, 93, 55, 124, 100, 120, 150, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(80, 35, 85, 100, 93, 55, 124, 100, 120, 165, 85, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(9)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780319730251'] = function(block) {
  let code = "base_action.action('Long_Elegant_Dance')\n";
  return code;
}

Blockly.Blocks['1780319935487'] = {
  init: function() {
    this.jsonInit({
      "type": "1780319935487",
      "message0": "DJ_Dance",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780319935487'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,55,85,100,90,50,30,30,30,75,85,100,90,70)\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 60, 100, 93, 55, 124, 100, 120, 170, 60, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 60, 100, 93, 55, 124, 100, 120, 170, 60, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 60, 100, 93, 55, 124, 100, 120, 170, 60, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 60, 100, 93, 55, 124, 100, 120, 170, 60, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 140, 100, 93, 55, 124, 100, 120, 170, 140, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 140, 100, 93, 55, 124, 100, 120, 170, 140, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 140, 100, 93, 55, 124, 100, 120, 170, 140, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 140, 100, 93, 55, 124, 100, 120, 170, 140, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 92, 79, 35, 130, 92, 120, 170, 100, 98, 121, 168, 63, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 100, 102, 79, 32, 137, 108, 120, 170, 100, 108, 121, 165, 70, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 92, 79, 35, 130, 92, 120, 170, 100, 98, 121, 168, 63, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 100, 102, 79, 32, 137, 108, 120, 170, 100, 108, 121, 165, 70, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 92, 79, 35, 130, 92, 120, 170, 100, 98, 121, 168, 63, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 100, 102, 79, 32, 137, 108, 120, 170, 100, 108, 121, 165, 70, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 30, 100, 93, 55, 124, 100, 120, 170, 30, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 170, 100, 93, 55, 124, 100, 120, 170, 170, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 30, 100, 93, 55, 124, 100, 120, 170, 30, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 170, 100, 93, 55, 124, 100, 120, 170, 170, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 30, 100, 93, 55, 124, 100, 120, 170, 30, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 170, 100, 93, 55, 124, 100, 120, 170, 170, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 30, 100, 93, 55, 124, 100, 120, 170, 30, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 170, 100, 93, 55, 124, 100, 120, 170, 170, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 98, 79, 35, 130, 95, 120, 170, 100, 98, 107, 160, 65, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 100, 102, 93, 40, 135, 105, 120, 170, 100, 102, 121, 165, 70, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 98, 79, 35, 130, 95, 120, 170, 100, 98, 107, 160, 65, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 100, 102, 93, 40, 135, 105, 120, 170, 100, 102, 121, 165, 70, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 98, 79, 35, 130, 95, 120, 170, 100, 98, 107, 160, 65, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 100, 102, 93, 40, 135, 105, 120, 170, 100, 102, 121, 165, 70, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 50, 60, 100, 93, 55, 124, 100, 120, 150, 140, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 50, 140, 100, 93, 55, 124, 100, 120, 150, 60, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 50, 60, 100, 93, 55, 124, 100, 120, 150, 140, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 50, 140, 100, 93, 55, 124, 100, 120, 150, 60, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 50, 60, 100, 93, 55, 124, 100, 120, 150, 140, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 50, 140, 100, 93, 55, 124, 100, 120, 150, 60, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 50, 60, 100, 93, 55, 124, 100, 120, 150, 140, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 50, 140, 100, 93, 55, 124, 100, 120, 150, 60, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 60, 92, 79, 35, 130, 92, 120, 150, 60, 98, 121, 168, 63, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 50, 140, 102, 79, 32, 137, 108, 120, 170, 140, 108, 121, 165, 70, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 60, 92, 79, 35, 130, 92, 120, 150, 60, 98, 121, 168, 63, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 50, 140, 102, 79, 32, 137, 108, 120, 170, 140, 108, 121, 165, 70, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 60, 92, 79, 35, 130, 92, 120, 150, 60, 98, 121, 168, 63, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 50, 140, 102, 79, 32, 137, 108, 120, 170, 140, 108, 121, 165, 70, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 30, 100, 93, 55, 124, 100, 120, 170, 170, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 170, 100, 93, 55, 124, 100, 120, 170, 30, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 30, 100, 93, 55, 124, 100, 120, 170, 170, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 170, 100, 93, 55, 124, 100, 120, 170, 30, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 30, 100, 93, 55, 124, 100, 120, 170, 170, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 170, 100, 93, 55, 124, 100, 120, 170, 30, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 30, 100, 93, 55, 124, 100, 120, 170, 170, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 170, 100, 93, 55, 124, 100, 120, 170, 30, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 97, 90, 49, 127, 97, 120, 170, 100, 97, 110, 151, 73, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 100, 103, 90, 49, 127, 103, 120, 170, 100, 103, 110, 151, 73, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 97, 90, 49, 127, 97, 120, 170, 100, 97, 110, 151, 73, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 100, 103, 90, 49, 127, 103, 120, 170, 100, 103, 110, 151, 73, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 97, 90, 49, 127, 97, 120, 170, 100, 97, 110, 151, 73, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 100, 103, 90, 49, 127, 103, 120, 170, 100, 103, 110, 151, 73, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 97, 90, 49, 127, 97, 120, 170, 100, 97, 110, 151, 73, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 100, 103, 90, 49, 127, 103, 120, 170, 100, 103, 110, 151, 73, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 60, 103, 90, 49, 127, 103, 120, 170, 140, 103, 110, 151, 73, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 140, 103, 90, 49, 127, 103, 120, 170, 60, 103, 110, 151, 73, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 60, 103, 90, 49, 127, 103, 120, 170, 140, 103, 110, 151, 73, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 140, 103, 90, 49, 127, 103, 120, 170, 60, 103, 110, 151, 73, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 60, 103, 90, 49, 127, 103, 120, 170, 140, 103, 110, 151, 73, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 140, 103, 90, 49, 127, 103, 120, 170, 60, 103, 110, 151, 73, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 60, 103, 90, 49, 127, 103, 120, 170, 140, 103, 110, 151, 73, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 140, 103, 90, 49, 127, 103, 120, 170, 60, 103, 110, 151, 73, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 60, 92, 79, 35, 130, 92, 120, 170, 60, 98, 121, 168, 63, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 140, 102, 79, 32, 137, 108, 120, 170, 140, 108, 121, 165, 70, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 60, 92, 79, 35, 130, 92, 120, 170, 60, 98, 121, 168, 63, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 140, 102, 79, 32, 137, 108, 120, 170, 140, 108, 121, 165, 70, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 60, 92, 79, 35, 130, 92, 120, 170, 60, 98, 121, 168, 63, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 140, 102, 79, 32, 137, 108, 120, 170, 140, 108, 121, 165, 70, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 60, 92, 79, 35, 130, 92, 120, 170, 60, 98, 121, 168, 63, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 140, 102, 79, 32, 137, 108, 120, 170, 140, 108, 121, 165, 70, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 50, 60, 100, 93, 55, 124, 100, 120, 150, 140, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 50, 140, 100, 93, 55, 124, 100, 120, 150, 60, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 50, 60, 100, 93, 55, 124, 100, 120, 150, 140, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 50, 140, 100, 93, 55, 124, 100, 120, 150, 60, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 50, 60, 100, 93, 55, 124, 100, 120, 150, 140, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 50, 140, 100, 93, 55, 124, 100, 120, 150, 60, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 50, 60, 100, 93, 55, 124, 100, 120, 150, 140, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 50, 140, 100, 93, 55, 124, 100, 120, 150, 60, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 98, 79, 35, 130, 95, 120, 170, 100, 98, 107, 160, 65, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 102, 93, 40, 135, 105, 120, 170, 100, 102, 121, 165, 70, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 98, 79, 35, 130, 95, 120, 170, 100, 98, 107, 160, 65, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 102, 93, 40, 135, 105, 120, 170, 100, 102, 121, 165, 70, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 98, 79, 35, 130, 95, 120, 170, 100, 98, 107, 160, 65, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 102, 93, 40, 135, 105, 120, 170, 100, 102, 121, 165, 70, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 98, 79, 35, 130, 95, 120, 170, 100, 98, 107, 160, 65, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 102, 93, 40, 135, 105, 120, 170, 100, 102, 121, 165, 70, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 30, 100, 93, 55, 124, 100, 120, 170, 170, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 170, 100, 93, 55, 124, 100, 120, 170, 30, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 30, 100, 93, 55, 124, 100, 120, 170, 170, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 170, 100, 93, 55, 124, 100, 120, 170, 30, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 30, 100, 93, 55, 124, 100, 120, 170, 170, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 170, 100, 93, 55, 124, 100, 120, 170, 30, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 30, 100, 93, 55, 124, 100, 120, 170, 170, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 170, 100, 93, 55, 124, 100, 120, 170, 30, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780319935487'] = function(block) {
  let code = "base_action.action('DJ_Dance')\n";
  return code;
}

Blockly.Blocks['1780320248349'] = {
  init: function() {
    this.jsonInit({
      "type": "1780320248349",
      "message0": "DJ_Dance_Pro",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780320248349'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,55,85,100,90,50,30,30,30,75,85,100,90,70)\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 60, 97, 90, 49, 127, 97, 120, 170, 60, 97, 110, 151, 73, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 140, 103, 90, 49, 127, 103, 120, 170, 140, 103, 110, 151, 73, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 60, 97, 90, 49, 127, 97, 120, 170, 60, 97, 110, 151, 73, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 140, 103, 90, 49, 127, 103, 120, 170, 140, 103, 110, 151, 73, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 50, 94, 87, 43, 130, 94, 120, 170, 150, 94, 113, 157, 70, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 150, 106, 87, 43, 130, 106, 120, 170, 50, 106, 113, 157, 70, 106, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 50, 94, 87, 43, 130, 94, 120, 170, 150, 94, 113, 157, 70, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 150, 106, 87, 43, 130, 106, 120, 170, 50, 106, 113, 157, 70, 106, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 50, 60, 92, 79, 35, 130, 92, 120, 150, 140, 98, 121, 168, 63, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 70, 60, 90, 76, 32, 135, 90, 120, 130, 140, 95, 124, 170, 60, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(80, 90, 60, 88, 73, 30, 132, 88, 120, 110, 140, 92, 127, 172, 57, 88, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 70, 60, 90, 76, 32, 135, 90, 120, 130, 140, 95, 124, 170, 60, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 50, 60, 92, 79, 35, 130, 92, 120, 150, 140, 98, 121, 168, 63, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 50, 140, 102, 79, 32, 137, 108, 120, 150, 60, 108, 121, 165, 70, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 70, 140, 105, 76, 30, 140, 110, 120, 130, 60, 110, 124, 168, 65, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(80, 90, 140, 108, 73, 28, 143, 112, 120, 110, 60, 112, 127, 170, 68, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 70, 140, 105, 76, 30, 140, 110, 120, 130, 60, 110, 124, 168, 65, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 50, 140, 102, 79, 32, 137, 108, 120, 150, 60, 108, 121, 165, 70, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 60, 98, 79, 35, 130, 95, 120, 150, 60, 98, 107, 160, 65, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 50, 140, 102, 93, 40, 135, 105, 120, 170, 140, 102, 121, 165, 70, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 50, 60, 92, 79, 35, 130, 92, 120, 170, 60, 98, 121, 168, 63, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 140, 102, 79, 32, 137, 108, 120, 150, 140, 108, 121, 165, 70, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 60, 98, 79, 35, 130, 95, 120, 150, 60, 98, 107, 160, 65, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 50, 140, 102, 93, 40, 135, 105, 120, 170, 140, 102, 121, 165, 70, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 50, 60, 92, 79, 35, 130, 92, 120, 170, 60, 98, 121, 168, 63, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 140, 102, 79, 32, 137, 108, 120, 150, 140, 108, 121, 165, 70, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 70, 97, 90, 49, 127, 97, 120, 140, 70, 97, 110, 151, 73, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 60, 130, 103, 90, 49, 127, 103, 120, 170, 130, 103, 110, 151, 73, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 60, 70, 97, 90, 49, 127, 97, 120, 170, 70, 97, 110, 151, 73, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 130, 103, 90, 49, 127, 103, 120, 140, 130, 103, 110, 151, 73, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 70, 97, 90, 49, 127, 97, 120, 140, 70, 97, 110, 151, 73, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 60, 130, 103, 90, 49, 127, 103, 120, 170, 130, 103, 110, 151, 73, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 60, 70, 97, 90, 49, 127, 97, 120, 170, 70, 97, 110, 151, 73, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 130, 103, 90, 49, 127, 103, 120, 140, 130, 103, 110, 151, 73, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 30, 94, 87, 43, 130, 94, 120, 170, 30, 94, 113, 157, 70, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 170, 106, 87, 43, 130, 106, 120, 170, 170, 106, 113, 157, 70, 106, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 30, 94, 87, 43, 130, 94, 120, 170, 30, 94, 113, 157, 70, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 170, 106, 87, 43, 130, 106, 120, 170, 170, 106, 113, 157, 70, 106, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 30, 94, 87, 43, 130, 94, 120, 170, 30, 94, 113, 157, 70, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 170, 106, 87, 43, 130, 106, 120, 170, 170, 106, 113, 157, 70, 106, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 30, 94, 87, 43, 130, 94, 120, 170, 30, 94, 113, 157, 70, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 170, 106, 87, 43, 130, 106, 120, 170, 170, 106, 113, 157, 70, 106, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 50, 100, 98, 79, 35, 130, 95, 120, 130, 100, 98, 107, 160, 65, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 70, 100, 102, 93, 40, 135, 105, 120, 150, 100, 102, 121, 165, 70, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 50, 100, 98, 79, 35, 130, 95, 120, 130, 100, 98, 107, 160, 65, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 70, 100, 102, 93, 40, 135, 105, 120, 150, 100, 102, 121, 165, 70, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 50, 100, 98, 79, 35, 130, 95, 120, 130, 100, 98, 107, 160, 65, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 70, 100, 102, 93, 40, 135, 105, 120, 150, 100, 102, 121, 165, 70, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 50, 100, 98, 79, 35, 130, 95, 120, 130, 100, 98, 107, 160, 65, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 70, 100, 102, 93, 40, 135, 105, 120, 150, 100, 102, 121, 165, 70, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 50, 70, 92, 79, 35, 130, 92, 120, 170, 130, 98, 121, 168, 63, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 50, 130, 102, 79, 32, 137, 108, 120, 170, 70, 108, 121, 165, 70, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 50, 70, 92, 79, 35, 130, 92, 120, 170, 130, 98, 121, 168, 63, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 50, 130, 102, 79, 32, 137, 108, 120, 170, 70, 108, 121, 165, 70, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 50, 70, 92, 79, 35, 130, 92, 120, 170, 130, 98, 121, 168, 63, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 50, 130, 102, 79, 32, 137, 108, 120, 170, 70, 108, 121, 165, 70, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 50, 70, 92, 79, 35, 130, 92, 120, 170, 130, 98, 121, 168, 63, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 50, 130, 102, 79, 32, 137, 108, 120, 170, 70, 108, 121, 165, 70, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 60, 98, 79, 35, 130, 95, 120, 150, 140, 98, 107, 160, 65, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 50, 60, 102, 93, 40, 135, 105, 120, 170, 140, 102, 121, 165, 70, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 140, 92, 79, 35, 130, 92, 120, 150, 60, 98, 121, 168, 63, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 50, 140, 102, 79, 32, 137, 108, 120, 170, 60, 108, 121, 165, 70, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 60, 98, 79, 35, 130, 95, 120, 150, 140, 98, 107, 160, 65, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 50, 60, 102, 93, 40, 135, 105, 120, 170, 140, 102, 121, 165, 70, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 140, 92, 79, 35, 130, 92, 120, 150, 60, 98, 121, 168, 63, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 50, 140, 102, 79, 32, 137, 108, 120, 170, 60, 108, 121, 165, 70, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 40, 80, 97, 90, 49, 127, 97, 120, 160, 80, 97, 110, 151, 73, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 40, 120, 103, 90, 49, 127, 103, 120, 160, 120, 103, 110, 151, 73, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 40, 80, 97, 90, 49, 127, 97, 120, 160, 80, 97, 110, 151, 73, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 40, 120, 103, 90, 49, 127, 103, 120, 160, 120, 103, 110, 151, 73, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 40, 80, 97, 90, 49, 127, 97, 120, 160, 80, 97, 110, 151, 73, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 40, 120, 103, 90, 49, 127, 103, 120, 160, 120, 103, 110, 151, 73, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 40, 80, 97, 90, 49, 127, 97, 120, 160, 80, 97, 110, 151, 73, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 40, 120, 103, 90, 49, 127, 103, 120, 160, 120, 103, 110, 151, 73, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 30, 92, 79, 35, 130, 92, 120, 170, 170, 98, 121, 168, 63, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 170, 102, 79, 32, 137, 108, 120, 170, 30, 108, 121, 165, 70, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 30, 92, 79, 35, 130, 92, 120, 170, 170, 98, 121, 168, 63, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 170, 102, 79, 32, 137, 108, 120, 170, 30, 108, 121, 165, 70, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 30, 92, 79, 35, 130, 92, 120, 170, 170, 98, 121, 168, 63, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 170, 102, 79, 32, 137, 108, 120, 170, 30, 108, 121, 165, 70, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 30, 92, 79, 35, 130, 92, 120, 170, 170, 98, 121, 168, 63, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 170, 102, 79, 32, 137, 108, 120, 170, 30, 108, 121, 165, 70, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 40, 90, 98, 79, 35, 130, 95, 120, 160, 90, 98, 107, 160, 65, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 40, 110, 102, 93, 40, 135, 105, 120, 160, 110, 102, 121, 165, 70, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 40, 90, 98, 79, 35, 130, 95, 120, 160, 90, 98, 107, 160, 65, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 40, 110, 102, 93, 40, 135, 105, 120, 160, 110, 102, 121, 165, 70, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 40, 90, 98, 79, 35, 130, 95, 120, 160, 90, 98, 107, 160, 65, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 40, 110, 102, 93, 40, 135, 105, 120, 160, 110, 102, 121, 165, 70, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 40, 90, 98, 79, 35, 130, 95, 120, 160, 90, 98, 107, 160, 65, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 40, 110, 102, 93, 40, 135, 105, 120, 160, 110, 102, 121, 165, 70, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 60, 94, 87, 43, 130, 94, 120, 170, 60, 94, 113, 157, 70, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 140, 106, 87, 43, 130, 106, 120, 170, 140, 106, 113, 157, 70, 106, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 60, 94, 87, 43, 130, 94, 120, 170, 60, 94, 113, 157, 70, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 140, 106, 87, 43, 130, 106, 120, 170, 140, 106, 113, 157, 70, 106, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 60, 94, 87, 43, 130, 94, 120, 170, 60, 94, 113, 157, 70, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 140, 106, 87, 43, 130, 106, 120, 170, 140, 106, 113, 157, 70, 106, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 60, 94, 87, 43, 130, 94, 120, 170, 60, 94, 113, 157, 70, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 140, 106, 87, 43, 130, 106, 120, 170, 140, 106, 113, 157, 70, 106, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 80, 97, 90, 49, 127, 97, 120, 150, 80, 97, 110, 151, 73, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 50, 80, 97, 90, 49, 127, 97, 120, 170, 80, 97, 110, 151, 73, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 120, 103, 90, 49, 127, 103, 120, 150, 120, 103, 110, 151, 73, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 50, 120, 103, 90, 49, 127, 103, 120, 170, 120, 103, 110, 151, 73, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 80, 97, 90, 49, 127, 97, 120, 150, 80, 97, 110, 151, 73, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 50, 80, 97, 90, 49, 127, 97, 120, 170, 80, 97, 110, 151, 73, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 120, 103, 90, 49, 127, 103, 120, 150, 120, 103, 110, 151, 73, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 50, 120, 103, 90, 49, 127, 103, 120, 170, 120, 103, 110, 151, 73, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 50, 30, 92, 79, 35, 130, 92, 120, 150, 30, 98, 121, 168, 63, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 50, 170, 102, 79, 32, 137, 108, 120, 150, 170, 108, 121, 165, 70, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 50, 30, 92, 79, 35, 130, 92, 120, 150, 30, 98, 121, 168, 63, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 50, 170, 102, 79, 32, 137, 108, 120, 150, 170, 108, 121, 165, 70, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 50, 30, 92, 79, 35, 130, 92, 120, 150, 30, 98, 121, 168, 63, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 50, 170, 102, 79, 32, 137, 108, 120, 150, 170, 108, 121, 165, 70, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 50, 30, 92, 79, 35, 130, 92, 120, 150, 30, 98, 121, 168, 63, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 50, 170, 102, 79, 32, 137, 108, 120, 150, 170, 108, 121, 165, 70, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780320248349'] = function(block) {
  let code = "base_action.action('DJ_Dance_Pro')\n";
  return code;
}

Blockly.Blocks['1780320737349'] = {
  init: function() {
    this.jsonInit({
      "type": "1780320737349",
      "message0": "Kangyuan_Dance",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780320737349'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,55,85,100,90,50,30,30,30,75,85,100,90,70)\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 35, 90, 98, 92, 52, 125, 98, 120, 165, 90, 98, 108, 148, 75, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 40, 80, 96, 91, 49, 126, 96, 120, 160, 80, 96, 109, 151, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 45, 70, 94, 90, 46, 127, 94, 120, 155, 70, 94, 110, 154, 73, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 40, 80, 96, 91, 49, 126, 96, 120, 160, 80, 96, 109, 151, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 35, 90, 98, 92, 52, 125, 98, 120, 165, 90, 98, 108, 148, 75, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 35, 110, 102, 92, 52, 125, 102, 120, 165, 110, 102, 108, 148, 75, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 40, 120, 104, 91, 49, 126, 104, 120, 160, 120, 104, 109, 151, 74, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 45, 130, 106, 90, 46, 127, 106, 120, 155, 130, 106, 110, 154, 73, 106, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 40, 120, 104, 91, 49, 126, 104, 120, 160, 120, 104, 109, 151, 74, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 35, 110, 102, 92, 52, 125, 102, 120, 165, 110, 102, 108, 148, 75, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 40, 100, 97, 90, 49, 127, 97, 120, 160, 100, 97, 110, 151, 73, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 50, 100, 94, 87, 43, 130, 94, 120, 150, 100, 94, 113, 157, 70, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 60, 100, 91, 84, 37, 133, 91, 120, 140, 100, 91, 116, 163, 67, 91, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 70, 100, 88, 81, 31, 136, 88, 120, 130, 100, 88, 119, 169, 64, 88, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 80, 100, 85, 78, 25, 139, 85, 120, 120, 100, 88, 122, 175, 61, 85, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 70, 100, 88, 81, 31, 136, 88, 120, 130, 100, 88, 119, 169, 64, 88, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 60, 100, 91, 84, 37, 133, 91, 120, 140, 100, 91, 116, 163, 67, 91, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 50, 100, 94, 87, 43, 130, 94, 120, 150, 100, 94, 113, 157, 70, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 40, 100, 97, 90, 49, 127, 97, 120, 160, 100, 97, 110, 151, 73, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 80, 96, 89, 47, 128, 96, 120, 170, 120, 96, 111, 153, 72, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 60, 92, 85, 39, 132, 92, 120, 170, 140, 92, 115, 161, 68, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 40, 88, 81, 31, 136, 88, 120, 170, 160, 88, 119, 169, 64, 88, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 60, 92, 85, 39, 132, 92, 120, 170, 140, 92, 115, 161, 68, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 80, 96, 89, 47, 128, 96, 120, 170, 120, 96, 111, 153, 72, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 120, 104, 89, 47, 128, 104, 120, 170, 80, 104, 111, 153, 72, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 140, 108, 85, 39, 132, 108, 120, 170, 60, 108, 115, 161, 68, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 160, 112, 81, 31, 136, 112, 120, 170, 40, 112, 119, 169, 64, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 140, 108, 85, 39, 132, 108, 120, 170, 60, 108, 115, 161, 68, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 120, 104, 89, 47, 128, 104, 120, 170, 80, 104, 111, 153, 72, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 40, 60, 97, 90, 49, 127, 97, 120, 160, 60, 97, 110, 151, 73, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 40, 140, 103, 90, 49, 127, 103, 120, 160, 140, 103, 110, 151, 73, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 40, 60, 97, 90, 49, 127, 97, 120, 160, 60, 97, 110, 151, 73, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 40, 140, 103, 90, 49, 127, 103, 120, 160, 140, 103, 110, 151, 73, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 40, 60, 97, 90, 49, 127, 97, 120, 160, 60, 97, 110, 151, 73, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 40, 140, 103, 90, 49, 127, 103, 120, 160, 140, 103, 110, 151, 73, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 45, 90, 95, 88, 45, 129, 95, 120, 155, 90, 95, 112, 155, 71, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 60, 80, 90, 83, 35, 134, 90, 120, 140, 80, 90, 117, 165, 66, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 75, 70, 85, 78, 25, 139, 85, 120, 125, 70, 88, 122, 175, 61, 85, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 60, 80, 90, 83, 35, 134, 90, 120, 140, 80, 90, 117, 165, 66, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 45, 90, 95, 88, 45, 129, 95, 120, 155, 90, 95, 112, 155, 71, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 45, 110, 105, 88, 45, 129, 105, 120, 155, 110, 105, 112, 155, 71, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 60, 120, 110, 83, 35, 134, 110, 120, 140, 120, 110, 117, 165, 66, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 75, 130, 112, 78, 25, 139, 115, 120, 125, 130, 115, 122, 175, 61, 115, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 60, 120, 110, 83, 35, 134, 110, 120, 140, 120, 110, 117, 165, 66, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 45, 110, 105, 88, 45, 129, 105, 120, 155, 110, 105, 112, 155, 71, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 35, 75, 98, 91, 51, 126, 98, 120, 165, 75, 98, 109, 149, 74, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 35, 125, 102, 91, 51, 126, 102, 120, 165, 125, 102, 109, 149, 74, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 35, 75, 98, 91, 51, 126, 98, 120, 165, 75, 98, 109, 149, 74, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 35, 125, 102, 91, 51, 126, 102, 120, 165, 125, 102, 109, 149, 74, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 35, 75, 98, 91, 51, 126, 98, 120, 165, 75, 98, 109, 149, 74, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 35, 125, 102, 91, 51, 126, 102, 120, 165, 125, 102, 109, 149, 74, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 45, 100, 96, 89, 47, 128, 96, 120, 155, 100, 96, 111, 153, 72, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 60, 100, 92, 85, 39, 132, 92, 120, 140, 100, 92, 115, 161, 68, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 75, 100, 88, 81, 31, 136, 88, 120, 125, 100, 88, 119, 169, 64, 88, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 60, 100, 92, 85, 39, 132, 92, 120, 140, 100, 92, 115, 161, 68, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 45, 100, 96, 89, 47, 128, 96, 120, 155, 100, 96, 111, 153, 72, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 35, 85, 104, 91, 51, 126, 104, 120, 165, 85, 104, 109, 149, 74, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 40, 70, 108, 89, 47, 128, 108, 120, 160, 70, 108, 111, 153, 72, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 45, 55, 112, 87, 43, 130, 112, 120, 155, 55, 112, 113, 157, 70, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 40, 70, 108, 89, 47, 128, 108, 120, 160, 70, 108, 111, 153, 72, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 35, 85, 104, 91, 51, 126, 104, 120, 165, 85, 104, 109, 149, 74, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 35, 115, 96, 91, 51, 126, 96, 120, 165, 115, 96, 109, 149, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 40, 130, 92, 89, 47, 128, 92, 120, 160, 130, 92, 111, 153, 72, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 45, 145, 88, 87, 43, 130, 88, 120, 155, 145, 88, 113, 157, 70, 88, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 40, 130, 92, 89, 47, 128, 92, 120, 160, 130, 92, 111, 153, 72, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 35, 115, 96, 91, 51, 126, 96, 120, 165, 115, 96, 109, 149, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 70, 97, 90, 49, 127, 97, 120, 170, 70, 97, 110, 151, 73, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 130, 103, 90, 49, 127, 103, 120, 170, 130, 103, 110, 151, 73, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 70, 97, 90, 49, 127, 97, 120, 170, 70, 97, 110, 151, 73, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 130, 103, 90, 49, 127, 103, 120, 170, 130, 103, 110, 151, 73, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 50, 100, 95, 88, 45, 129, 95, 120, 150, 100, 95, 112, 155, 71, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 70, 100, 90, 83, 35, 134, 90, 120, 130, 100, 90, 117, 165, 66, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 90, 100, 85, 78, 25, 139, 85, 120, 110, 100, 88, 122, 175, 61, 85, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 70, 100, 90, 83, 35, 134, 90, 120, 130, 100, 90, 117, 165, 66, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 50, 100, 95, 88, 45, 129, 95, 120, 150, 100, 95, 112, 155, 71, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780320737349'] = function(block) {
  let code = "base_action.action('Kangyuan_Dance')\n";
  return code;
}

Blockly.Blocks['1780321096282'] = {
  init: function() {
    this.jsonInit({
      "type": "1780321096282",
      "message0": "TaiChi_Dance",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780321096282'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,55,85,100,90,50,30,30,30,75,85,100,90,70)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 32, 95, 99, 92, 53, 125, 99, 120, 168, 95, 99, 108, 147, 75, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 34, 90, 98, 91, 51, 126, 98, 120, 166, 90, 98, 109, 149, 74, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(80, 36, 85, 97, 90, 49, 127, 97, 120, 164, 85, 97, 110, 151, 73, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(16)\nMOTOmove19(80, 38, 80, 96, 89, 47, 128, 96, 120, 162, 80, 96, 111, 153, 72, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 40, 75, 95, 88, 45, 129, 95, 120, 160, 75, 95, 112, 155, 71, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(16)\nMOTOmove19(80, 42, 70, 94, 87, 43, 130, 94, 120, 158, 70, 94, 113, 157, 70, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(80, 44, 65, 93, 86, 41, 131, 93, 120, 156, 65, 93, 114, 159, 69, 93, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 46, 60, 92, 85, 39, 132, 92, 120, 154, 60, 92, 115, 161, 68, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(19)\nMOTOmove19(80, 48, 55, 91, 84, 37, 133, 91, 120, 152, 55, 91, 116, 163, 67, 91, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 50, 50, 90, 83, 35, 134, 90, 120, 150, 50, 90, 117, 165, 66, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(80, 52, 45, 89, 82, 33, 135, 89, 120, 148, 45, 89, 118, 167, 65, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(16)\nMOTOmove19(80, 54, 40, 88, 81, 31, 136, 88, 120, 146, 40, 88, 119, 169, 64, 88, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 56, 35, 87, 80, 29, 137, 87, 120, 144, 35, 88, 120, 171, 63, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(16)\nMOTOmove19(80, 54, 40, 88, 81, 31, 136, 88, 120, 146, 40, 88, 119, 169, 64, 88, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(80, 52, 45, 89, 82, 33, 135, 89, 120, 148, 45, 89, 118, 167, 65, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 50, 50, 90, 83, 35, 134, 90, 120, 150, 50, 90, 117, 165, 66, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(19)\nMOTOmove19(80, 48, 55, 91, 84, 37, 133, 91, 120, 152, 55, 91, 116, 163, 67, 91, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 46, 60, 92, 85, 39, 132, 92, 120, 154, 60, 92, 115, 161, 68, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(80, 44, 65, 93, 86, 41, 131, 93, 120, 156, 65, 93, 114, 159, 69, 93, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(16)\nMOTOmove19(80, 42, 70, 94, 87, 43, 130, 94, 120, 158, 70, 94, 113, 157, 70, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 40, 75, 95, 88, 45, 129, 95, 120, 160, 75, 95, 112, 155, 71, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(16)\nMOTOmove19(80, 38, 80, 96, 89, 47, 128, 96, 120, 162, 80, 96, 111, 153, 72, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(80, 36, 85, 97, 90, 49, 127, 97, 120, 164, 85, 97, 110, 151, 73, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 34, 90, 98, 91, 51, 126, 98, 120, 166, 90, 98, 109, 149, 74, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(19)\nMOTOmove19(80, 32, 95, 99, 92, 53, 125, 99, 120, 168, 95, 99, 108, 147, 75, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 32, 105, 101, 92, 53, 125, 101, 120, 168, 105, 101, 108, 147, 75, 101, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 34, 110, 102, 91, 51, 126, 102, 120, 166, 110, 102, 109, 149, 74, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(80, 36, 115, 103, 90, 49, 127, 103, 120, 164, 115, 103, 110, 151, 73, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(16)\nMOTOmove19(80, 38, 120, 104, 89, 47, 128, 104, 120, 162, 120, 104, 111, 153, 72, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 40, 125, 105, 88, 45, 129, 105, 120, 160, 125, 105, 112, 155, 71, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(16)\nMOTOmove19(80, 42, 130, 106, 87, 43, 130, 106, 120, 158, 130, 106, 113, 157, 70, 106, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(80, 44, 135, 107, 86, 41, 131, 107, 120, 156, 135, 107, 114, 159, 69, 107, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 46, 140, 108, 85, 39, 132, 108, 120, 154, 140, 108, 115, 161, 68, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(19)\nMOTOmove19(80, 48, 145, 109, 84, 37, 133, 109, 120, 152, 145, 109, 116, 163, 67, 109, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 50, 150, 110, 83, 35, 134, 110, 120, 150, 150, 110, 117, 165, 66, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(80, 52, 155, 111, 82, 33, 135, 111, 120, 148, 155, 111, 118, 167, 65, 111, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(16)\nMOTOmove19(80, 54, 160, 112, 81, 31, 136, 112, 120, 146, 160, 112, 119, 169, 64, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 56, 165, 112, 80, 29, 137, 113, 120, 144, 165, 113, 120, 171, 63, 113, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(16)\nMOTOmove19(80, 54, 160, 112, 81, 31, 136, 112, 120, 146, 160, 112, 119, 169, 64, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(80, 52, 155, 111, 82, 33, 135, 111, 120, 148, 155, 111, 118, 167, 65, 111, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 50, 150, 110, 83, 35, 134, 110, 120, 150, 150, 110, 117, 165, 66, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(19)\nMOTOmove19(80, 48, 145, 109, 84, 37, 133, 109, 120, 152, 145, 109, 116, 163, 67, 109, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 46, 140, 108, 85, 39, 132, 108, 120, 154, 140, 108, 115, 161, 68, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(80, 44, 135, 107, 86, 41, 131, 107, 120, 156, 135, 107, 114, 159, 69, 107, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(16)\nMOTOmove19(80, 42, 130, 106, 87, 43, 130, 106, 120, 158, 130, 106, 113, 157, 70, 106, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 40, 125, 105, 88, 45, 129, 105, 120, 160, 125, 105, 112, 155, 71, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(16)\nMOTOmove19(80, 38, 120, 104, 89, 47, 128, 104, 120, 162, 120, 104, 111, 153, 72, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(80, 36, 115, 103, 90, 49, 127, 103, 120, 164, 115, 103, 110, 151, 73, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 34, 110, 102, 91, 51, 126, 102, 120, 166, 110, 102, 109, 149, 74, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(19)\nMOTOmove19(80, 32, 105, 101, 92, 53, 125, 101, 120, 168, 105, 101, 108, 147, 75, 101, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 35, 100, 99, 92, 54, 125, 99, 120, 165, 100, 99, 108, 146, 75, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(80, 40, 100, 98, 91, 53, 126, 98, 120, 160, 100, 98, 109, 147, 74, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(16)\nMOTOmove19(80, 45, 100, 97, 90, 52, 127, 97, 120, 155, 100, 97, 110, 148, 73, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 50, 100, 96, 89, 51, 128, 96, 120, 150, 100, 96, 111, 149, 72, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(16)\nMOTOmove19(80, 55, 100, 95, 88, 50, 129, 95, 120, 145, 100, 95, 112, 150, 71, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(80, 60, 100, 94, 87, 49, 130, 94, 120, 140, 100, 94, 113, 151, 70, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 65, 100, 93, 86, 48, 131, 93, 120, 135, 100, 93, 114, 152, 69, 93, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(19)\nMOTOmove19(80, 70, 100, 92, 85, 47, 132, 92, 120, 130, 100, 92, 115, 153, 68, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 75, 100, 93, 86, 48, 131, 93, 120, 125, 100, 93, 114, 152, 69, 93, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(80, 80, 100, 94, 87, 49, 130, 94, 120, 120, 100, 94, 113, 151, 70, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(16)\nMOTOmove19(80, 85, 100, 95, 88, 50, 129, 95, 120, 115, 100, 95, 112, 150, 71, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 90, 100, 96, 89, 51, 128, 96, 120, 110, 100, 96, 111, 149, 72, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(16)\nMOTOmove19(80, 85, 100, 97, 90, 52, 127, 97, 120, 115, 100, 97, 110, 148, 73, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(80, 80, 100, 98, 91, 53, 126, 98, 120, 120, 100, 98, 109, 147, 74, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 75, 100, 99, 92, 54, 125, 99, 120, 125, 100, 99, 108, 146, 75, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(19)\nMOTOmove19(80, 70, 100, 100, 93, 55, 124, 100, 120, 130, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 65, 100, 101, 94, 54, 123, 101, 120, 135, 100, 101, 106, 146, 77, 101, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(80, 60, 100, 102, 95, 53, 122, 102, 120, 140, 100, 102, 105, 147, 78, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(16)\nMOTOmove19(80, 55, 100, 103, 96, 52, 121, 103, 120, 145, 100, 103, 104, 148, 79, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 50, 100, 104, 97, 51, 120, 104, 120, 150, 100, 104, 103, 149, 80, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(16)\nMOTOmove19(80, 45, 100, 105, 98, 50, 119, 105, 120, 155, 100, 105, 102, 150, 81, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(80, 40, 100, 106, 99, 49, 118, 106, 120, 160, 100, 106, 101, 151, 82, 106, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 35, 100, 107, 100, 48, 117, 107, 120, 165, 100, 107, 100, 152, 83, 107, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(19)\nMOTOmove19(80, 30, 100, 106, 99, 49, 118, 106, 120, 170, 100, 106, 101, 151, 82, 106, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 35, 95, 105, 98, 50, 119, 105, 120, 165, 95, 105, 102, 150, 81, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(80, 40, 90, 104, 97, 51, 120, 104, 120, 160, 90, 104, 103, 149, 80, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(16)\nMOTOmove19(80, 45, 85, 103, 96, 52, 121, 103, 120, 155, 85, 103, 104, 148, 79, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 50, 80, 102, 95, 53, 122, 102, 120, 150, 80, 102, 105, 147, 78, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(16)\nMOTOmove19(80, 55, 75, 101, 94, 54, 123, 101, 120, 145, 75, 101, 106, 146, 77, 101, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(80, 60, 70, 100, 93, 55, 124, 100, 120, 140, 70, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 65, 65, 99, 94, 54, 123, 99, 120, 135, 65, 99, 106, 146, 77, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(19)\nMOTOmove19(80, 70, 60, 98, 95, 53, 122, 98, 120, 130, 60, 98, 105, 147, 78, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 75, 55, 97, 96, 52, 121, 97, 120, 125, 55, 97, 104, 148, 79, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(80, 80, 50, 96, 97, 51, 120, 96, 120, 120, 50, 96, 103, 149, 80, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(16)\nMOTOmove19(80, 85, 45, 95, 98, 50, 119, 95, 120, 115, 45, 95, 102, 150, 81, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 90, 40, 94, 99, 49, 118, 94, 120, 110, 40, 94, 101, 151, 82, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(16)\nMOTOmove19(80, 85, 45, 93, 100, 48, 117, 93, 120, 115, 45, 93, 100, 152, 83, 93, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(80, 80, 50, 94, 99, 49, 118, 94, 120, 120, 50, 94, 101, 151, 82, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 75, 55, 95, 98, 50, 119, 95, 120, 125, 55, 95, 102, 150, 81, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(19)\nMOTOmove19(80, 70, 60, 96, 97, 51, 120, 96, 120, 130, 60, 96, 103, 149, 80, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 65, 65, 97, 96, 52, 121, 97, 120, 135, 65, 97, 104, 148, 79, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(80, 60, 70, 98, 95, 53, 122, 98, 120, 140, 70, 98, 105, 147, 78, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(16)\nMOTOmove19(80, 55, 75, 99, 94, 54, 123, 99, 120, 145, 75, 99, 106, 146, 77, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 50, 80, 100, 93, 55, 124, 100, 120, 150, 80, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(16)\nMOTOmove19(80, 45, 85, 99, 94, 54, 123, 99, 120, 155, 85, 99, 106, 146, 77, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(80, 40, 90, 98, 95, 53, 122, 98, 120, 160, 90, 98, 105, 147, 78, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 35, 95, 97, 96, 52, 121, 97, 120, 165, 95, 97, 104, 148, 79, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(19)\nMOTOmove19(80, 30, 100, 96, 97, 51, 120, 96, 120, 170, 100, 96, 103, 149, 80, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 35, 105, 95, 98, 50, 119, 95, 120, 165, 105, 95, 102, 150, 81, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(19)\nMOTOmove19(80, 40, 110, 94, 99, 49, 118, 94, 120, 160, 110, 94, 101, 151, 82, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 45, 115, 93, 100, 48, 117, 93, 120, 155, 115, 93, 100, 152, 83, 93, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(80, 50, 120, 94, 99, 49, 118, 94, 120, 150, 120, 94, 101, 151, 82, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(16)\nMOTOmove19(80, 55, 125, 95, 98, 50, 119, 95, 120, 145, 125, 95, 102, 150, 81, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 60, 130, 96, 97, 51, 120, 96, 120, 140, 130, 96, 103, 149, 80, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(16)\nMOTOmove19(80, 65, 135, 97, 96, 52, 121, 97, 120, 135, 135, 97, 104, 148, 79, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(80, 70, 140, 98, 95, 53, 122, 98, 120, 130, 140, 98, 105, 147, 78, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 75, 145, 99, 94, 54, 123, 99, 120, 125, 145, 99, 106, 146, 77, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(19)\nMOTOmove19(80, 80, 150, 100, 93, 55, 124, 100, 120, 120, 150, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 85, 145, 99, 92, 53, 125, 99, 120, 115, 145, 99, 108, 147, 75, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(80, 90, 140, 98, 91, 51, 126, 98, 120, 110, 140, 98, 109, 149, 74, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(16)\nMOTOmove19(80, 85, 135, 97, 90, 49, 127, 97, 120, 115, 135, 97, 110, 151, 73, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 80, 130, 96, 89, 47, 128, 96, 120, 120, 130, 96, 111, 153, 72, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(16)\nMOTOmove19(80, 75, 125, 95, 88, 45, 129, 95, 120, 125, 125, 95, 112, 155, 71, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(80, 70, 120, 94, 87, 43, 130, 94, 120, 130, 120, 94, 113, 157, 70, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 65, 115, 93, 86, 41, 131, 93, 120, 135, 115, 93, 114, 159, 69, 93, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(19)\nMOTOmove19(80, 60, 110, 92, 85, 39, 132, 92, 120, 140, 110, 92, 115, 161, 68, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 55, 105, 93, 86, 41, 131, 93, 120, 145, 105, 93, 114, 159, 69, 93, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(80, 50, 100, 94, 87, 43, 130, 94, 120, 150, 100, 94, 113, 157, 70, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(16)\nMOTOmove19(80, 45, 100, 95, 88, 45, 129, 95, 120, 155, 100, 95, 112, 155, 71, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 40, 100, 96, 89, 47, 128, 96, 120, 160, 100, 96, 111, 153, 72, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(16)\nMOTOmove19(80, 35, 100, 97, 90, 49, 127, 97, 120, 165, 100, 97, 110, 151, 73, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(80, 30, 100, 98, 91, 51, 126, 98, 120, 170, 100, 98, 109, 149, 74, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 30, 100, 99, 92, 53, 125, 99, 120, 170, 100, 99, 108, 147, 75, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780321096282'] = function(block) {
  let code = "base_action.action('TaiChi_Dance')\n";
  return code;
}

Blockly.Blocks['1780321247378'] = {
  init: function() {
    this.jsonInit({
      "type": "1780321247378",
      "message0": "Squat_Pickup",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780321247378'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,55,85,100,90,50,30,30,30,75,85,100,90,70)\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(80, 35, 100, 101, 92, 54, 125, 101, 120, 165, 100, 101, 108, 146, 75, 101, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(23)\nMOTOmove19(80, 40, 100, 103, 90, 52, 127, 103, 120, 160, 100, 103, 110, 148, 73, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(21)\nMOTOmove19(80, 45, 100, 105, 88, 50, 129, 105, 120, 155, 100, 105, 112, 150, 71, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 50, 100, 107, 86, 48, 131, 107, 120, 150, 100, 107, 114, 152, 69, 107, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(19)\nMOTOmove19(80, 55, 100, 109, 84, 46, 133, 109, 120, 145, 100, 109, 116, 154, 67, 109, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 60, 100, 111, 82, 44, 135, 111, 120, 140, 100, 111, 118, 156, 65, 111, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(80, 65, 95, 112, 80, 42, 137, 113, 120, 135, 95, 113, 120, 158, 63, 113, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(16)\nMOTOmove19(80, 70, 90, 112, 78, 40, 139, 115, 120, 130, 90, 115, 122, 160, 61, 115, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 75, 85, 112, 76, 38, 141, 117, 120, 125, 85, 117, 124, 162, 59, 117, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(80, 80, 80, 112, 74, 36, 143, 119, 120, 120, 80, 119, 126, 164, 57, 119, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(13)\nMOTOmove19(80, 85, 75, 112, 72, 34, 145, 121, 120, 115, 75, 121, 128, 166, 55, 121, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(80, 88, 70, 112, 73, 35, 144, 120, 120, 112, 70, 120, 127, 165, 56, 120, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 90, 65, 112, 74, 36, 142, 118, 120, 110, 65, 118, 126, 164, 58, 118, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(16)\nMOTOmove19(80, 92, 60, 112, 75, 37, 140, 116, 120, 108, 60, 116, 125, 163, 60, 116, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(80, 93, 55, 112, 76, 38, 138, 114, 120, 107, 55, 114, 124, 162, 62, 114, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 94, 50, 112, 77, 39, 136, 112, 120, 106, 50, 112, 123, 161, 64, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(19)\nMOTOmove19(80, 95, 45, 110, 78, 40, 134, 110, 120, 105, 45, 110, 122, 160, 66, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 95, 40, 108, 79, 41, 132, 108, 120, 105, 40, 108, 121, 159, 68, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 94, 45, 106, 80, 42, 130, 106, 120, 106, 45, 106, 120, 158, 70, 106, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(80, 93, 50, 104, 81, 43, 128, 104, 120, 107, 50, 104, 119, 157, 72, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(16)\nMOTOmove19(80, 92, 55, 102, 82, 44, 126, 102, 120, 108, 55, 102, 118, 156, 74, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 90, 60, 100, 83, 45, 124, 100, 120, 110, 60, 100, 117, 155, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(16)\nMOTOmove19(80, 88, 65, 98, 84, 46, 122, 98, 120, 112, 65, 98, 116, 154, 78, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(80, 85, 70, 96, 85, 47, 120, 96, 120, 115, 70, 96, 115, 153, 80, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 82, 75, 94, 86, 48, 118, 94, 120, 118, 75, 94, 114, 152, 82, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(19)\nMOTOmove19(80, 78, 80, 92, 87, 49, 116, 92, 120, 122, 80, 92, 113, 151, 84, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 74, 85, 90, 88, 50, 114, 90, 120, 126, 85, 90, 112, 150, 86, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(21)\nMOTOmove19(80, 70, 90, 92, 87, 49, 116, 92, 120, 130, 90, 92, 113, 151, 84, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(22)\nMOTOmove19(80, 65, 95, 94, 86, 48, 118, 94, 120, 135, 95, 94, 114, 152, 82, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(23)\nMOTOmove19(80, 60, 100, 96, 85, 47, 120, 96, 120, 140, 100, 96, 115, 153, 80, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(24)\nMOTOmove19(80, 55, 100, 98, 84, 46, 122, 98, 120, 145, 100, 98, 116, 154, 78, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(80, 50, 100, 100, 93, 55, 124, 100, 120, 150, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(24)\nMOTOmove19(80, 45, 100, 100, 93, 55, 124, 100, 120, 155, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(23)\nMOTOmove19(80, 40, 100, 100, 93, 55, 124, 100, 120, 160, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(22)\nMOTOmove19(80, 35, 100, 100, 93, 55, 124, 100, 120, 165, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780321247378'] = function(block) {
  let code = "base_action.action('Squat_Pickup')\n";
  return code;
}

Blockly.Blocks['1780321809873'] = {
  init: function() {
    this.jsonInit({
      "type": "1780321809873",
      "message0": "TaiChi_Dance（2）",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780321809873'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,55,85,100,90,50,30,30,30,75,85,100,90,70)\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(82, 38, 100, 102, 91, 53, 126, 102, 118, 162, 100, 102, 109, 147, 74, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(19)\nMOTOmove19(84, 46, 100, 104, 89, 51, 128, 104, 116, 154, 100, 104, 111, 149, 72, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(86, 54, 100, 106, 87, 49, 130, 106, 114, 146, 100, 106, 113, 151, 70, 106, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(86, 60, 96, 108, 85, 47, 132, 108, 114, 140, 96, 108, 115, 153, 68, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(16)\nMOTOmove19(86, 64, 92, 110, 83, 45, 134, 110, 114, 136, 92, 110, 117, 155, 66, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(86, 54, 100, 106, 87, 49, 130, 106, 114, 146, 100, 106, 113, 151, 70, 106, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(86, 60, 104, 108, 85, 47, 132, 108, 114, 140, 104, 108, 115, 153, 68, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(16)\nMOTOmove19(86, 64, 108, 110, 83, 45, 134, 110, 114, 136, 108, 110, 117, 155, 66, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(86, 54, 100, 106, 87, 49, 130, 106, 114, 146, 100, 106, 113, 151, 70, 106, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(84, 58, 94, 109, 84, 46, 133, 109, 116, 142, 94, 109, 116, 154, 67, 109, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(84, 58, 106, 109, 84, 46, 133, 109, 116, 142, 106, 109, 116, 154, 67, 109, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(84, 58, 94, 109, 84, 46, 133, 109, 116, 142, 94, 109, 116, 154, 67, 109, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(84, 58, 106, 109, 84, 46, 133, 109, 116, 142, 106, 109, 116, 154, 67, 109, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(19)\nMOTOmove19(84, 46, 100, 104, 89, 51, 128, 104, 116, 154, 100, 104, 111, 149, 72, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(82, 38, 100, 102, 91, 53, 126, 102, 118, 162, 100, 102, 109, 147, 74, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780321809873'] = function(block) {
  let code = "base_action.action('TaiChi_Dance（2）')\n";
  return code;
}

Blockly.Blocks['1780327701460'] = {
  init: function() {
    this.jsonInit({
      "type": "1780327701460",
      "message0": "捡方块2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780327701460'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 张\nMOTOsetspeed(20)\nMOTOmove19(80,30,156,100,93,55,124,100,120,170,50,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80,30,156,100,113,90,109,100,120,170,50,100,87,111,91,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,156,100,136,150,62,100,120,170,50,100,72,50,138,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,156,100,149,150,67,100,120,170,50,100,52,50,133,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,10,156,100,149,150,67,100,140,190,50,100,52,50,133,100,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(65,10,156,100,104,132,70,100,140,190,50,100,93,69,130,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,100,90,55,127,100,140,190,50,100,110,145,73,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780327701460'] = function(block) {
  let code = "base_action.action('捡方块2')\n";
  return code;
}

Blockly.Blocks['1780327999624'] = {
  init: function() {
    this.jsonInit({
      "type": "1780327999624",
      "message0": "放方块2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780327999624'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- RIGEND\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,100,93,55,127,100,140,190,50,100,107,145,73,100,0,0,100)\nMOTOwait()\n\n\n-- 蹲2\nMOTOsetspeed(15)\nMOTOmove19(65,10,156,100,111,150,54,102,140,190,50,100,88,51,142,101,0,0,100)\nMOTOwait()\n\n\n-- MOTORE,100,71,128\nMOTOsetspeed(15)\nMOTOmove19(65,10,156,100,101,150,42,102,140,190,50,100,99,51,158,101,0,0,100)\nMOTOwait()\nDelayMs(400)\n\n\n-- 放\nMOTOsetspeed(20)\nMOTOmove19(65,10,156,101,107,149,43,100,140,190,50,101,92,51,157,100,0,0,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(30)\nMOTOmove19(65,33,156,101,107,149,43,100,140,165,50,101,92,51,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,33,130,100,111,150,54,102,120,165,66,100,88,51,142,101,128,71,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780327999624'] = function(block) {
  let code = "base_action.action('放方块2')\n";
  return code;
}

Blockly.Blocks['1780328669891'] = {
  init: function() {
    this.jsonInit({
      "type": "1780328669891",
      "message0": "抱块左移2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780328669891'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(65,10,156,85,112,90,115,90,140,190,50,110,107,146,70,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(65,10,156,95,93,53,131,105,140,190,50,120,116,160,68,130,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,156,100,93,55,124,95,140,190,50,100,107,145,76,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(65,10,156,100,93,55,124,100,140,190,50,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780328669891'] = function(block) {
  let code = "base_action.action('抱块左移2')\n";
  return code;
}

Blockly.Blocks['1780329913421'] = {
  init: function() {
    this.jsonInit({
      "type": "1780329913421",
      "message0": "抱方块向前快走一步",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780329913421'] = function(block) {
  let code = "MOTOrigid16(25,25,25,75,75,90,80,70,25,25,25,75,75,90,80,70)\nMOTOsetspeed(45)\nMOTOmove19(56,10,156,99,93,54,122,90,140,190,50,98,107,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(56,10,156,99,115,99,103,100,140,190,50,101,109,134,91,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(56,10,156,99,110,74,121,100,140,190,50,101,114,137,91,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(56,10,156,99,110,61,126,104,140,190,50,101,100,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(56,10,156,99,91,66,109,102,140,190,50,101,85,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(56,10,156,99,86,63,110,100,140,190,50,101,90,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(56,10,156,99,100,73,106,100,140,190,50,101,90,139,74,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(56,10,156,96,95,70,110,100,140,190,50,102,109,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(56,10,156,99,93,54,122,90,140,190,50,98,107,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(56,10,156,100,93,55,124,100,140,190,50,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780329913421'] = function(block) {
  let code = "base_action.action('抱方块向前快走一步')\n";
  return code;
}

Blockly.Blocks['music'] = {
  init: function () {
    this.jsonInit({
      type: 'music',
      message0: '%{BKY_AELOS_MUSIC} %1',
      args0: [
        {
          type: 'field_input',
          name: 'music_name',
          text: '%{BKY_DEFAULT_MUSIC_INPUT}',
          spellcheck: false,
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Msg.ControlHUE,
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['music'] = function(block) {
  const music_name = block.getFieldValue("music_name");
  let code = `Play_AI_music('')\n`;
    
  if (music_name) {
    code = `Play_AI_music('0:/music/${music_name}.mp3')\n`;
  }

  return code;
}

Blockly.Python['music'] = function (block) {
  const music_name = block.getFieldValue('music_name');
  let code = `music.music_play(None)\n`;

  if (music_name && music_name !== Blockly.Msg['DEFAULT_MUSIC_INPUT']) {
    code = `music.music_play('${music_name}')\n`;
  }

  return code;
}

Blockly.Blocks['music_stop_control'] = {
  init: function () {
    this.jsonInit({
      type: 'music_stop_control',
      message0: '%{BKY_AELOS_MUSIC_STOP_CONTROL}',
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Msg.ControlHUE,
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['music_stop_control'] = function(block) {
  const code = `stopWAV_mp3()\n`;
  return code;
}

Blockly.Python['music_stop_control'] = function (block) {
  const code = `music.music_stop()\n`;
  return code;
}

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

Blockly.Blocks['1780371312631'] = {
  init: function() {
    this.jsonInit({
      "type": "1780371312631",
      "message0": "举方块",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780371312631'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,100,90,55,127,100,140,190,50,100,110,145,73,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,100,90,55,127,100,140,190,28,100,110,145,73,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780371312631'] = function(block) {
  let code = "base_action.action('举方块')\n";
  return code;
}

Blockly.Blocks['io_out'] = {
  init: function () {
    this.jsonInit({
      type: 'io_out',
      message0: '%{BKY_IO_OUTPUT} %1 %{BKY_IO_OUTPUT_PORT} %2',
      args0: [
        {
          type: 'field_dropdown',
          name: 'output_value',
          options: [
            ['0', '0'],
            ['1', '1'],
          ],
        },
        {
          type: 'field_dropdown',
          name: 'port',
          options: portOptions,
        },
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Msg.ControlHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['io_out'] = function(block) {
  const output = block.getFieldValue("output_value");
  const port = block.getFieldValue("port");

  return `WriteGpio(${port}, ${output})\n`;
}

Blockly.Python['io_out'] = function (block) {
  var code = '';
  var port = block.getFieldValue('port');
  var output_value = block.getFieldValue('output_value');

  code = `sensor_port.set_output(${port}, ${output_value})\n`;
  return code;
}

Blockly.Blocks['geomagnetic_sensor'] = {
  init: function () {
    this.jsonInit({
      type: 'geomagnetic_sensor',
      message0: '%{BKY_GEOMAGNETIC_SENSOR} %1 %2 ',
      args0: [
        {
          type: 'field_dropdown',
          name: 'OP',
          options: [
            ['=', 'JNE'],
            ['\u2260', 'JE'],
            ['<', 'JAE'],
            ['\u200f\u2265\u200f', 'JA'],
            ['>', 'JBE'],
            ['\u200f\u2264\u200f', 'JB'],
          ],
        },
        {
          type: 'field_number',
          name: 'number',
          value: 0,
          min: 0,
          max: 360,
          precision: 1,
        },
      ],
      output: 'Boolean',
      outputShape: Blockly.OUTPUT_SHAPE_HEXAGONAL,
      colour: Blockly.Msg.ControlHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['geomagnetic_sensor'] = function (block) {
  const code = 'false';
  return [code, Blockly.Lua.ORDER_NONE];
}

Blockly.Python['geomagnetic_sensor'] = function (block) {
  const operation = pythonOpMap[block.getFieldValue('OP')];
  const number = Number.parseInt(block.getFieldValue('number'), 10);
  let code = `sensor_port.get_magnet() ${operation} ${number}`;
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Blocks['1780378166034'] = {
  init: function() {
    this.jsonInit({
      "type": "1780378166034",
      "message0": "抱方块右移2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780378166034'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(65,10,156,85,112,90,115,90,140,190,50,110,107,146,70,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(65,10,156,95,93,53,131,105,140,190,50,120,116,160,68,130,0,0,100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(65,10,156,100,93,54,134,98,140,190,50,103,107,146,76,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,156,100,93,55,134,95,140,190,50,100,107,145,76,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(65,10,156,100,93,55,134,100,140,190,50,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780378166034'] = function(block) {
  let code = "base_action.action('抱方块右移2')\n";
  return code;
}

Blockly.Blocks['1780378217586'] = {
  init: function() {
    this.jsonInit({
      "type": "1780378217586",
      "message0": "抱方块左移2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780378217586'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(65,10,156,85,112,90,115,90,140,190,50,110,107,146,70,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(65,10,156,95,93,53,131,105,140,190,50,120,116,160,68,130,0,0,100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(65,10,156,100,93,54,134,98,140,190,50,103,107,146,76,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,156,100,93,55,134,95,140,190,50,100,107,145,76,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(65,10,156,100,93,55,134,100,140,190,50,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780378217586'] = function(block) {
  let code = "base_action.action('抱方块左移2')\n";
  return code;
}

Blockly.Blocks['1780378267521'] = {
  init: function() {
    this.jsonInit({
      "type": "1780378267521",
      "message0": "抱方块右移2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780378267521'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(65,10,156,90,93,54,130,100,140,190,50,115,88,110,85,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(65,10,156,80,84,40,138,70,140,190,50,105,107,147,69,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(65,10,156,97,93,54,130,95,140,190,50,100,107,146,66,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,156,100,93,55,130,95,140,190,50,100,107,145,66,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(65,10,156,100,93,55,130,100,140,190,50,100,107,145,66,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780378267521'] = function(block) {
  let code = "base_action.action('抱方块右移2')\n";
  return code;
}

Blockly.Blocks['1780378339977'] = {
  init: function() {
    this.jsonInit({
      "type": "1780378339977",
      "message0": "抱方块向前慢速移动",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780378339977'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(65,10,156,90,91,48,134,88,140,190,50,94,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,86,123,95,115,90,140,190,50,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,86,121,37,161,88,140,190,50,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,156,107,98,56,129,111,140,190,50,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,106,93,54,128,113,140,190,50,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,106,91,54,128,111,140,190,50,114,89,163,39,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,156,88,69,45,112,90,140,190,50,93,102,144,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,86,123,95,115,90,140,190,50,94,107,146,72,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,100,91,55,129,100,140,190,50,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780378339977'] = function(block) {
  let code = "base_action.action('抱方块向前慢速移动')\n";
  return code;
}

Blockly.Blocks['1780378437753'] = {
  init: function() {
    this.jsonInit({
      "type": "1780378437753",
      "message0": "抱方块向后慢速移动",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780378437753'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(65,10,156,90,91,48,138,88,140,190,50,94,107,146,67,92,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,86,90,95,94,90,140,190,50,94,107,146,67,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,88,71,53,114,85,140,190,50,93,100,144,70,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,156,106,93,53,134,111,140,190,50,114,87,163,33,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,106,95,53,133,113,140,190,50,114,110,105,105,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,107,100,56,130,109,140,190,50,112,129,147,86,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,107,100,56,130,109,140,190,50,112,129,147,86,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,156,86,113,37,167,90,140,190,50,94,107,147,67,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,86,90,95,95,90,140,190,50,94,105,147,69,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,100,93,55,133,100,140,190,50,100,107,145,67,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780378437753'] = function(block) {
  let code = "base_action.action('抱方块向后慢速移动')\n";
  return code;
}

Blockly.Blocks['1780378477743'] = {
  init: function() {
    this.jsonInit({
      "type": "1780378477743",
      "message0": "抱方块左转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780378477743'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(14)\nMOTOmove19(65,10,156,95,71,55,109,95,140,190,50,105,89,145,51,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,156,95,80,55,109,92,140,190,50,105,81,145,51,108,0,0,100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(65,10,156,100,91,55,129,100,140,190,50,100,109,145,71,100,0,0,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,100,91,55,129,100,140,190,50,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780378477743'] = function(block) {
  let code = "base_action.action('抱方块左转')\n";
  return code;
}

Blockly.Blocks['1780378499512'] = {
  init: function() {
    this.jsonInit({
      "type": "1780378499512",
      "message0": "抱方块右转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780378499512'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(14)\nMOTOmove19(65,10,156,95,110,55,149,95,140,190,50,105,130,145,91,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,156,95,118,55,149,92,140,190,50,105,121,145,91,108,0,0,100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(65,10,156,100,90,55,129,100,140,190,50,100,110,145,71,100,0,0,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,100,90,55,129,100,140,190,50,100,110,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780378499512'] = function(block) {
  let code = "base_action.action('抱方块右转')\n";
  return code;
}

Blockly.Blocks['1780378545800'] = {
  init: function() {
    this.jsonInit({
      "type": "1780378545800",
      "message0": "向前撑地起来",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780378545800'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 起\nMOTOsetspeed(40)\nMOTOmove19(80,90,101,101,93,57,124,101,131,100,98,102,107,143,77,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(37,92,182,85,64,41,98,99,153,107,19,130,142,160,92,103,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,63,160,136,46,86,150,147,19,137,44,67,152,117,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(85,12,172,62,160,146,47,75,119,189,31,139,43,54,154,123,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,66,149,146,55,63,150,147,19,158,48,60,146,140,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,70,126,145,53,68,150,147,19,138,74,60,147,135,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(54,47,190,79,113,140,50,78,150,147,19,126,72,60,135,125,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,125,140,62,100,120,170,87,100,75,60,138,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,104,127,133,71,100,120,170,87,103,70,67,128,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,102,128,104,97,100,120,170,87,102,74,91,104,100,128,71,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(40)\nMOTOmove19(80,37,100,108,93,55,124,100,120,170,100,92,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780378545800'] = function(block) {
  let code = "base_action.action('向前撑地起来')\n";
  return code;
}

Blockly.Blocks['1780378580535'] = {
  init: function() {
    this.jsonInit({
      "type": "1780378580535",
      "message0": "向后倒地起来",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780378580535'] = function(block) {
  let code = "MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(35,130,20,101,131,126,170,100,165,70,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(21,105,21,101,131,126,170,100,179,95,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,16,46,100,80,150,60,100,108,184,154,100,120,50,140,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,18,58,100,73,150,40,100,108,182,142,100,127,50,160,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,25,135,100,124,150,50,100,108,175,65,100,76,50,150,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780378580535'] = function(block) {
  let code = "base_action.action('向后倒地起来')\n";
  return code;
}

Blockly.Blocks['1780378610982'] = {
  init: function() {
    this.jsonInit({
      "type": "1780378610982",
      "message0": "上台阶1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780378610982'] = function(block) {
  let code = "MOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(94,79,100,85,106,79,113,80,106,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,85,160,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,160,78,155,100,100,100,100,100,135,150,99,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,160,78,155,100,100,100,100,100,145,150,99,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,105,160,78,135,112,100,190,20,110,130,190,40,110,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,115,65,125,112,100,190,20,115,155,180,105,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,105,98,55,124,112,100,100,20,115,90,110,95,100,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\n\n\n-- 2右腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,100,100,106,93,55,124,112,103,95,100,115,68,73,115,111,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,100,100,105,115,100,101,110,100,50,100,115,40,150,20,105,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,65,50,101,100,100,50,100,100,40,122,45,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,55,50,101,100,100,100,100,100,40,122,45,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,90,70,10,160,90,100,190,20,95,40,122,65,88,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,45,20,95,100,100,190,20,95,85,135,75,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,130,90,105,100,100,190,20,95,95,135,75,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,85,110,90,105,100,100,100,20,95,102,145,76,88,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 3左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,85,160,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,160,78,155,100,100,100,100,100,135,150,99,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,160,78,155,100,100,100,100,100,145,150,99,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,105,160,78,135,112,100,190,20,110,130,190,40,110,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,115,65,125,112,100,190,20,115,155,180,105,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,105,98,55,124,112,100,100,20,115,90,110,95,100,128,71,100)\nMOTOwait()\nDelayMs(200)\n\n\n-- 15\nMOTOsetspeed(25)\nMOTOmove19(100,100,180,102,79,32,137,108,100,100,20,108,121,165,70,108,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,108,70,10,148,108,100,70,100,111,101,142,72,110,128,71,100)\nMOTOwait()\nMOTOrigid16(30,30,30,75,85,100,90,60,30,30,30,50,55,50,50,50)\n\n\n-- 4\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,105,79,32,137,108,100,70,100,107,107,160,60,112,128,71,100)\nMOTOwait()\nMOTOrigid16(30,30,30,50,60,60,60,60,30,30,30,50,60,60,60,60)\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,100,79,35,130,100,100,70,100,102,107,160,65,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,98,79,35,130,95,100,70,100,98,107,160,65,95,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,92,79,35,130,92,100,70,100,98,121,168,63,92,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\n\n\n-- 14\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,95,55,123,100,120,170,100,100,105,145,77,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780378610982'] = function(block) {
  let code = "base_action.action('上台阶1')\n";
  return code;
}

Blockly.Blocks['1780378636660'] = {
  init: function() {
    this.jsonInit({
      "type": "1780378636660",
      "message0": "向前翻滚",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780378636660'] = function(block) {
  let code = "MOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(90,105,190,100,128,10,170,100,110,95,10,100,72,190,30,100,128,71,100)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(30)\nMOTOmove19(90,10,190,100,108,10,170,100,110,190,10,100,92,190,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90,10,190,100,118,10,170,100,110,190,10,100,82,190,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90,10,190,100,128,10,169,100,110,190,10,100,72,190,31,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90,10,190,100,128,10,168,100,110,190,10,100,72,190,32,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90,10,190,100,128,10,164,100,110,190,10,100,72,190,36,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90,10,190,100,130,10,164,100,110,190,10,100,70,190,36,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90,10,190,100,130,10,161,100,110,190,10,100,70,190,39,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90,10,190,100,130,10,159,100,110,190,10,100,70,190,41,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90,10,190,100,132,10,159,100,110,190,10,100,68,190,41,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90,10,190,100,132,10,157,100,110,190,10,100,68,190,43,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90,10,190,100,132,10,154,100,110,190,10,100,68,190,46,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(87,14,190,100,132,10,154,100,113,186,10,100,68,190,46,100,128,71,100)\nMOTOwait()\nDelayMs(1000)\nMOTOrigid16(90,90,100,30,60,60,60,30,90,90,100,30,60,60,60,30)\nMOTOsetspeed(20)\nMOTOmove19(50,50,190,100,132,10,154,100,150,150,10,100,68,190,46,100,128,71,100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(120)\nMOTOmove19(50,50,165,100,10,95,108,100,150,150,35,100,65,190,40,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(50,50,165,100,10,95,108,100,150,150,35,100,165,190,40,100,128,71,100)\nMOTOwait()\nDelayMs(300)\n\n\n-- 修改\nMOTOsetspeed(135)\nMOTOmove19(43,40,190,100,10,95,108,100,166,160,10,100,190,175,10,100,128,71,100)\nMOTOwait()\n\n\n-- 8\nMOTOsetspeed(99)\nMOTOmove19(50,50,190,100,90,95,170,100,150,150,10,100,110,105,30,100,128,71,100)\nMOTOwait()\n\n\n-- 9\nMOTOsetspeed(40)\nMOTOmove19(89,182,110,100,10,95,93,100,111,18,90,100,190,105,107,100,128,71,100)\nMOTOwait()\n\n\n-- 10\nMOTOsetspeed(40)\nMOTOmove19(90,160,190,100,10,95,63,100,110,40,10,100,190,105,137,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)\n\n\n-- 12\nMOTOsetspeed(24)\nMOTOmove19(90,50,190,100,142,145,77,100,110,150,10,100,58,55,123,100,128,71,100)\nMOTOwait()\n\n\n-- 13\nMOTOsetspeed(24)\nMOTOmove19(90,50,190,100,142,145,77,100,110,150,10,100,58,55,123,100,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(24)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780378636660'] = function(block) {
  let code = "base_action.action('向前翻滚')\n";
  return code;
}

Blockly.Blocks['1780382430724'] = {
  init: function() {
    this.jsonInit({
      "type": "1780382430724",
      "message0": "抱方块3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780382430724'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 张\nMOTOsetspeed(20)\nMOTOmove19(80,30,156,100,93,55,124,100,120,170,50,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80,30,156,100,113,90,109,100,120,170,50,100,87,111,91,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,156,100,136,150,62,100,120,170,50,100,72,50,138,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,156,100,160,150,67,100,120,170,50,100,40,50,133,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,10,156,100,160,150,67,100,140,190,50,100,40,50,133,100,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(65,10,156,100,104,132,70,100,140,190,50,100,93,69,130,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,100,90,55,127,100,140,190,50,100,110,145,73,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780382430724'] = function(block) {
  let code = "base_action.action('抱方块3')\n";
  return code;
}

Blockly.Blocks['1780383199952'] = {
  init: function() {
    this.jsonInit({
      "type": "1780383199952",
      "message0": "test1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780383199952'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,100,90,55,127,100,140,190,50,100,110,145,73,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,100,90,55,127,100,140,190,28,100,110,145,73,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,100,102,150,40,100,140,190,28,100,98,50,162,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780383199952'] = function(block) {
  let code = "base_action.action('test1')\n";
  return code;
}

Blockly.Blocks['1780384801986'] = {
  init: function() {
    this.jsonInit({
      "type": "1780384801986",
      "message0": "放方块3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780384801986'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- RIGEND\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,100,93,55,127,100,140,190,50,100,107,145,73,100,0,0,100)\nMOTOwait()\n\n\n-- 蹲2\nMOTOsetspeed(15)\nMOTOmove19(65,10,156,100,111,150,54,102,140,190,50,100,88,51,142,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,100,111,150,54,102,140,190,56,100,88,51,142,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(77,10,149,100,111,150,54,102,122,190,56,100,88,51,142,101,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780384801986'] = function(block) {
  let code = "base_action.action('放方块3')\n";
  return code;
}

Blockly.Blocks['1780385894272'] = {
  init: function() {
    this.jsonInit({
      "type": "1780385894272",
      "message0": "抬方块前进",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780385894272'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(65,10,180,90,91,48,134,88,140,190,28,94,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,86,123,95,115,90,140,190,28,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,86,121,37,161,88,140,190,28,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,180,107,98,56,129,111,140,190,28,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,106,93,54,128,113,140,190,28,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,106,91,54,128,111,140,190,28,114,89,163,39,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,180,88,69,45,112,90,140,190,28,93,102,144,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,86,123,95,115,90,140,190,28,94,107,146,72,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,100,91,55,129,100,140,190,28,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780385894272'] = function(block) {
  let code = "base_action.action('抬方块前进')\n";
  return code;
}

Blockly.Blocks['Take_a_slow_step_backward'] = {
  init: function () {
    this.jsonInit({
      type: 'Take_a_slow_step_backward',
      message0: '%{BKY_TAKE_A_SLOW_STEP_BACKWARD}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Take_a_slow_step_backward'] = function (block) {
  const code = [
    'MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 90)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 90, 95, 84, 90, 120, 165, 90, 94, 107, 146, 78, 87)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 110, 88, 71, 53, 105, 85, 120, 165, 110, 93, 100, 144, 79, 91)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 110, 106, 93, 53, 124, 111, 120, 165, 110, 114, 87, 163, 42, 110)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 106, 95, 53, 122, 113, 120, 165, 90, 114, 110, 105, 114, 110)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 107, 100, 56, 121, 109, 120, 165, 90, 112, 129, 147, 95, 115)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 90, 86, 113, 37, 158, 90, 120, 165, 90, 94, 107, 147, 76, 89)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 110, 95, 100, 90, 120, 165, 90, 94, 107, 146, 77, 89)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 90)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Take_a_slow_step_backward'] = function (block) {
  var code = "base_action.action('" + Blockly.Msg['TAKE_A_SLOW_STEP_BACKWARD'] + "')\n";
  return code;
}

Blockly.Blocks['1780386300726'] = {
  init: function() {
    this.jsonInit({
      "type": "1780386300726",
      "message0": "test2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780386300726'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(15)\nMOTOmove19(80,30,156,100,93,55,124,100,120,170,50,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,35,156,90,91,48,129,88,120,165,50,94,107,146,76,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,35,156,86,90,95,84,90,120,165,50,94,107,146,78,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,35,156,88,71,53,105,85,120,165,50,93,100,144,79,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,35,156,106,93,53,124,111,120,165,50,114,87,163,42,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,35,156,106,95,53,122,113,120,165,50,114,110,105,114,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,35,156,107,100,56,121,109,120,165,50,112,129,147,95,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,35,156,86,113,37,158,90,120,165,50,94,107,147,76,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,35,156,86,110,95,100,90,120,165,50,94,107,146,77,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80,35,156,90,91,48,129,88,120,165,50,94,107,146,76,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,156,100,93,55,124,100,120,170,50,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780386300726'] = function(block) {
  let code = "base_action.action('test2')\n";
  return code;
}

Blockly.Blocks['1780386706834'] = {
  init: function() {
    this.jsonInit({
      "type": "1780386706834",
      "message0": "抬方块后退",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780386706834'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(15)\nMOTOmove19(65,10,180,100,93,55,124,100,140,190,28,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,180,90,91,48,129,88,140,190,28,94,107,146,76,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(65,10,180,86,90,95,84,90,140,190,28,94,107,146,78,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(65,10,180,88,71,53,105,85,140,190,28,93,100,144,79,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,180,106,93,53,124,111,140,190,28,114,87,163,42,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,106,95,53,122,113,140,190,28,114,110,105,114,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,107,100,56,121,109,140,190,28,112,129,147,95,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,180,86,113,37,158,90,140,190,28,94,107,147,76,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(65,10,180,86,110,95,100,90,140,190,28,94,107,146,77,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,180,90,91,48,129,88,140,190,28,94,107,146,76,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,180,100,93,55,124,100,140,190,28,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780386706834'] = function(block) {
  let code = "base_action.action('抬方块后退')\n";
  return code;
}

Blockly.Blocks['1780387019218'] = {
  init: function() {
    this.jsonInit({
      "type": "1780387019218",
      "message0": "抬方块左转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780387019218'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(14)\nMOTOmove19(65,10,180,95,71,55,109,95,140,190,28,105,89,145,51,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,180,95,80,55,109,92,140,190,28,105,81,145,51,108,0,0,100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(65,10,180,100,91,55,129,100,140,190,28,100,109,145,71,100,0,0,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,100,91,55,129,100,140,190,28,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780387019218'] = function(block) {
  let code = "base_action.action('抬方块左转')\n";
  return code;
}

Blockly.Blocks['1780387295541'] = {
  init: function() {
    this.jsonInit({
      "type": "1780387295541",
      "message0": "抬方块右转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780387295541'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(14)\nMOTOmove19(65,10,180,95,110,55,149,95,140,190,28,105,130,145,91,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,180,95,118,55,149,92,140,190,28,105,121,145,91,108,0,0,100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(65,10,180,100,90,55,129,100,140,190,28,100,110,145,71,100,0,0,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,100,90,55,129,100,140,190,28,100,110,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780387295541'] = function(block) {
  let code = "base_action.action('抬方块右转')\n";
  return code;
}

Blockly.Blocks['Lane_change'] = {
  init: function () {
    this.jsonInit({
      type: 'Lane_change',
      message0: '%{BKY_LANE_CHANGE}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Lane_change'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(48)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(48)',
    'MOTOmove16(81, 30, 99, 100, 93, 57, 125, 101, 107, 190, 21, 101, 107, 144, 77, 100)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(48)',
    'MOTOmove16(81, 30, 99, 100, 93, 57, 125, 101, 141, 190, 17, 101, 107, 144, 77, 100)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(48)',
    'MOTOmove16(81, 30, 99, 100, 93, 57, 125, 101, 107, 190, 21, 101, 107, 144, 77, 100)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(48)',
    'MOTOmove16(81, 30, 99, 100, 93, 57, 125, 101, 141, 190, 17, 101, 107, 144, 77, 100)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(48)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Lane_change'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['LANE_CHANGE'] + "')\n";
  return code;
}

Blockly.Blocks['Left_Roll'] = {
  init: function () {
    this.jsonInit({
      type: 'Left_Roll',
      message0: '%{BKY_LEFT_ROLL}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Left_Roll'] = function (block) {
  const code = [
    'MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)',
    'MOTOrigid16(60,60,60,60,70,70,70,60,60,60,60,60,70,70,70,60)',
    'MOTOsetspeed(52)',
    'MOTOmove16(80, 30, 100, 100, 97, 55, 124, 100, 120, 170, 100, 100, 103, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(52)',
    'MOTOmove16(140, 150, 105, 100, 137, 140, 83, 100, 60, 50, 95, 100, 63, 60, 117, 100)',
    'MOTOwait()',
    'MOTOsetspeed(52)',
    'MOTOmove16(145, 155, 105, 85, 137, 140, 83, 118, 55, 45, 95, 105, 75, 85, 117, 117)',
    'MOTOwait()',
    'MOTOsetspeed(52)',
    'MOTOmove16(190, 157, 103, 70, 145, 136, 83, 120, 10, 49, 97, 115, 60, 60, 117, 111)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(190, 157, 103, 50, 142, 140, 83, 116, 10, 49, 97, 150, 65, 60, 117, 111)',
    'MOTOwait()',
    'MOTOsetspeed(60)',
    'MOTOmove16(190, 157, 103, 30, 143, 140, 83, 114, 10, 49, 97, 170, 65, 60, 117, 80)',
    'MOTOwait()',
    'MOTOsetspeed(60)',
    'MOTOmove16(190, 157, 103, 15, 140, 140, 83, 120, 10, 49, 97, 183, 65, 60, 117, 80)',
    'MOTOwait()',
    'DelayMs(700)',
    'MOTOsetspeed(49)',
    'MOTOmove16(145, 120, 105, 15, 130, 140, 83, 130, 55, 80, 95, 168, 62, 60, 117, 80)',
    'MOTOwait()',
    'MOTOsetspeed(42)',
    'MOTOmove16(135, 120, 105, 100, 127, 127, 83, 86, 65, 80, 95, 183, 65, 60, 117, 95)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 50, 105, 100, 120, 110, 83, 82, 120, 150, 95, 113, 68, 62, 117, 93)',
    'MOTOwait()',
    'MOTOsetspeed(25)',
    'MOTOmove16(80, 50, 100, 98, 132, 140, 83, 97, 120, 150, 100, 102, 68, 60, 117, 103)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Left_Roll'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['LEFT_ROLL'] + "')\n";
  return code;
}

Blockly.Blocks['Left_Back'] = {
  init: function () {
    this.jsonInit({
      type: 'Left_Back',
      message0: '%{BKY_LEFT_BACK}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Left_Back'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(32)',
    'MOTOmove16(117, 168, 140, 101, 93, 57, 124, 102, 141, 154, 125, 101, 107, 146, 76, 101)',
    'MOTOwait()',
    'MOTOsetspeed(14)',
    'MOTOmove16(117, 149, 140, 101, 93, 57, 124, 102, 158, 155, 125, 101, 107, 146, 76, 101)',
    'MOTOwait()',
    'MOTOsetspeed(14)',
    'MOTOmove16(117, 168, 140, 101, 93, 57, 124, 102, 141, 154, 125, 101, 107, 146, 76, 101)',
    'MOTOwait()',
    'MOTOsetspeed(14)',
    'MOTOmove16(117, 149, 140, 101, 93, 57, 124, 102, 158, 155, 125, 101, 107, 146, 76, 101)',
    'MOTOwait()',
    'MOTOsetspeed(14)',
    'MOTOmove16(117, 168, 140, 101, 93, 57, 124, 102, 141, 154, 125, 101, 107, 146, 76, 101)',
    'MOTOwait()',
    'MOTOsetspeed(14)',
    'MOTOmove16(117, 149, 140, 101, 93, 57, 124, 102, 158, 155, 125, 101, 107, 146, 76, 101)',
    'MOTOwait()',
    'MOTOsetspeed(14)',
    'MOTOmove16(117, 168, 140, 101, 93, 57, 124, 102, 141, 154, 125, 101, 107, 146, 76, 101)',
    'MOTOwait()',
    'MOTOsetspeed(14)',
    'MOTOmove16(117, 149, 140, 101, 93, 57, 124, 102, 158, 155, 125, 101, 107, 146, 76, 101)',
    'MOTOwait()',
    'MOTOsetspeed(14)',
    'MOTOmove16(117, 168, 140, 101, 93, 57, 124, 102, 141, 154, 125, 101, 107, 146, 76, 101)',
    'MOTOwait()',
    'MOTOsetspeed(32)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Left_Back'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['LEFT_BACK'] + "')\n";
  return code;
}

Blockly.Blocks['Squat_walk'] = {
  init: function () {
    this.jsonInit({
      type: 'Squat_walk',
      message0: '%{BKY_SQUAT_WALK}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Squat_walk'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 97, 104, 145, 42, 101, 120, 170, 100, 103, 97, 54, 159, 103)',
    'MOTOwait()',
    'MOTOsetspeed(18)',
    'MOTOmove16(79, 49, 100, 104, 120, 135, 68, 111, 119, 148, 95, 107, 69, 54, 121, 119)',
    'MOTOwait()',
    'MOTOsetspeed(18)',
    'MOTOmove16(79, 49, 100, 104, 125, 135, 68, 108, 119, 148, 95, 116, 55, 70, 92, 118)',
    'MOTOwait()',
    'MOTOsetspeed(18)',
    'MOTOmove16(79, 49, 99, 107, 116, 132, 77, 88, 119, 148, 95, 107, 99, 64, 146, 96)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(76, 40, 101, 97, 105, 143, 55, 100, 119, 163, 95, 98, 99, 59, 158, 100)',
    'MOTOwait()',
    'MOTOsetspeed(18)',
    'MOTOmove16(79, 49, 100, 93, 131, 146, 79, 81, 119, 148, 95, 96, 80, 65, 132, 89)',
    'MOTOwait()',
    'MOTOsetspeed(18)',
    'MOTOmove16(79, 49, 100, 84, 145, 130, 108, 82, 119, 148, 95, 96, 75, 65, 132, 92)',
    'MOTOwait()',
    'MOTOsetspeed(18)',
    'MOTOmove16(79, 49, 99, 93, 101, 136, 54, 104, 119, 148, 95, 93, 84, 68, 123, 112)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(76, 40, 101, 97, 105, 143, 55, 100, 119, 163, 95, 98, 99, 59, 158, 100)',
    'MOTOwait()',
    'MOTOsetspeed(18)',
    'MOTOmove16(79, 49, 100, 104, 120, 135, 68, 111, 119, 148, 95, 107, 69, 54, 121, 119)',
    'MOTOwait()',
    'MOTOsetspeed(18)',
    'MOTOmove16(79, 49, 100, 104, 125, 135, 68, 108, 119, 148, 95, 116, 55, 70, 92, 118)',
    'MOTOwait()',
    'MOTOsetspeed(18)',
    'MOTOmove16(79, 49, 99, 107, 116, 132, 77, 88, 119, 148, 95, 107, 99, 64, 146, 96)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(76, 40, 101, 97, 105, 143, 55, 100, 119, 163, 95, 98, 99, 59, 158, 100)',
    'MOTOwait()',
    'MOTOsetspeed(18)',
    'MOTOmove16(79, 49, 100, 93, 131, 146, 79, 81, 119, 148, 95, 96, 80, 65, 132, 89)',
    'MOTOwait()',
    'MOTOsetspeed(18)',
    'MOTOmove16(79, 49, 100, 84, 145, 130, 108, 82, 119, 148, 95, 96, 75, 65, 132, 92)',
    'MOTOwait()',
    'MOTOsetspeed(18)',
    'MOTOmove16(79, 49, 99, 93, 101, 136, 54, 104, 119, 148, 95, 93, 84, 68, 123, 112)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(76, 40, 101, 97, 105, 143, 55, 100, 119, 163, 95, 98, 99, 59, 158, 100)',
    'MOTOwait()',
    'MOTOsetspeed(18)',
    'MOTOmove16(79, 49, 100, 104, 120, 135, 68, 111, 119, 148, 95, 107, 69, 54, 121, 119)',
    'MOTOwait()',
    'MOTOsetspeed(18)',
    'MOTOmove16(79, 49, 100, 104, 125, 135, 68, 108, 119, 148, 95, 116, 55, 70, 92, 118)',
    'MOTOwait()',
    'MOTOsetspeed(18)',
    'MOTOmove16(79, 49, 99, 107, 116, 132, 77, 88, 119, 148, 95, 107, 99, 64, 146, 96)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(76, 40, 101, 97, 105, 143, 55, 100, 119, 163, 95, 98, 99, 59, 158, 100)',
    'MOTOwait()',
    'MOTOsetspeed(18)',
    'MOTOmove16(79, 49, 100, 93, 131, 146, 79, 81, 119, 148, 95, 96, 80, 65, 132, 89)',
    'MOTOwait()',
    'MOTOsetspeed(18)',
    'MOTOmove16(79, 49, 100, 84, 145, 130, 108, 82, 119, 148, 95, 96, 75, 65, 132, 92)',
    'MOTOwait()',
    'MOTOsetspeed(18)',
    'MOTOmove16(79, 49, 99, 93, 101, 136, 54, 104, 119, 148, 95, 93, 84, 68, 123, 112)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(76, 40, 101, 97, 105, 143, 55, 100, 119, 163, 95, 98, 99, 59, 158, 100)',
    'MOTOwait()',
    'MOTOsetspeed(18)',
    'MOTOmove16(79, 49, 100, 104, 120, 135, 68, 111, 119, 148, 95, 107, 69, 54, 121, 119)',
    'MOTOwait()',
    'MOTOsetspeed(18)',
    'MOTOmove16(79, 49, 100, 104, 125, 135, 68, 108, 119, 148, 95, 116, 55, 70, 92, 118)',
    'MOTOwait()',
    'MOTOsetspeed(18)',
    'MOTOmove16(79, 49, 99, 107, 116, 132, 77, 88, 119, 148, 95, 107, 99, 64, 146, 96)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(76, 40, 101, 97, 105, 143, 55, 100, 119, 163, 95, 98, 99, 59, 158, 100)',
    'MOTOwait()',
    'MOTOsetspeed(18)',
    'MOTOmove16(79, 49, 100, 93, 131, 146, 79, 81, 119, 148, 95, 96, 80, 65, 132, 89)',
    'MOTOwait()',
    'MOTOsetspeed(18)',
    'MOTOmove16(79, 49, 100, 84, 145, 130, 108, 82, 119, 148, 95, 96, 75, 65, 132, 92)',
    'MOTOwait()',
    'MOTOsetspeed(18)',
    'MOTOmove16(79, 49, 99, 93, 101, 136, 54, 104, 119, 148, 95, 93, 84, 68, 123, 112)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(76, 40, 101, 97, 105, 143, 55, 100, 119, 163, 95, 98, 99, 59, 158, 100)',
    'MOTOwait()',
    'MOTOsetspeed(18)',
    'MOTOmove16(85, 38, 102, 99, 107, 150, 44, 100, 115, 162, 96, 99, 94, 50, 159, 98)',
    'MOTOwait()',
    'MOTOsetspeed(18)',
    'MOTOmove16(85, 38, 102, 102, 110, 73, 116, 101, 115, 162, 96, 106, 91, 122, 84, 99)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Squat_walk'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['SQUAT_WALK'] + "')\n";
  return code;
}

Blockly.Blocks['Right_Roll'] = {
  init: function () {
    this.jsonInit({
      type: 'Right_Roll',
      message0: '%{BKY_RIGHT_ROLL}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Right_Roll'] = function (block) {
  const code = [
    'MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)',
    'MOTOrigid16(60,60,60,60,70,70,70,60,60,60,60,60,70,70,70,60)',
    'MOTOsetspeed(52)',
    'MOTOmove16(80, 30, 100, 100, 97, 55, 124, 100, 120, 170, 100, 100, 103, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(52)',
    'MOTOmove16(140, 150, 105, 100, 137, 140, 83, 100, 60, 50, 95, 100, 63, 60, 117, 100)',
    'MOTOwait()',
    'MOTOsetspeed(52)',
    'MOTOmove16(145, 155, 105, 95, 125, 115, 83, 83, 55, 45, 95, 110, 63, 60, 117, 92)',
    'MOTOwait()',
    'MOTOsetspeed(52)',
    'MOTOmove16(170, 151, 103, 90, 140, 140, 83, 89, 30, 49, 97, 122, 55, 64, 117, 90)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(170, 151, 103, 50, 135, 140, 83, 89, 30, 49, 97, 150, 58, 60, 117, 94)',
    'MOTOwait()',
    'MOTOsetspeed(60)',
    'MOTOmove16(170, 151, 103, 30, 135, 140, 83, 120, 30, 49, 97, 170, 57, 60, 117, 96)',
    'MOTOwait()',
    'MOTOsetspeed(60)',
    'MOTOmove16(170, 151, 103, 17, 135, 140, 83, 120, 30, 49, 97, 185, 60, 60, 117, 90)',
    'MOTOwait()',
    'DelayMs(700)',
    'MOTOsetspeed(49)',
    'MOTOmove16(145, 120, 105, 32, 138, 140, 77, 120, 55, 80, 95, 185, 70, 60, 117, 80)',
    'MOTOwait()',
    'MOTOsetspeed(42)',
    'MOTOmove16(135, 120, 105, 17, 135, 140, 75, 105, 65, 80, 95, 100, 73, 73, 117, 114)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 50, 105, 87, 132, 138, 77, 107, 120, 150, 95, 100, 80, 90, 117, 118)',
    'MOTOwait()',
    'MOTOsetspeed(25)',
    'MOTOmove16(80, 50, 100, 98, 132, 140, 77, 97, 120, 150, 100, 102, 68, 60, 117, 103)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Right_Roll'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['RIGHT_ROLL'] + "')\n";
  return code;
}

Blockly.Blocks['Sit'] = {
  init: function () {
    this.jsonInit({
      type: 'Sit',
      message0: '%{BKY_SIT}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Sit'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(1500)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 31, 100, 100, 95, 130, 60, 100, 121, 171, 100, 100, 105, 70, 140, 100)',
    'MOTOwait()',
    'DelayMs(3500)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Sit'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['SIT'] + "')\n";
  return code;
}

Blockly.Blocks['Left_squat_walk'] = {
  init: function () {
    this.jsonInit({
      type: 'Left_squat_walk',
      message0: '%{BKY_LEFT_SQUAT_WALK}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Left_squat_walk'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 97, 107, 145, 41, 99, 120, 170, 99, 99, 95, 59, 161, 98)',
    'MOTOwait()',
    'MOTOsetspeed(21)',
    'MOTOmove16(80, 30, 100, 95, 123, 145, 63, 86, 120, 170, 100, 100, 80, 59, 145, 90)',
    'MOTOwait()',
    'MOTOsetspeed(18)',
    'MOTOmove16(80, 30, 100, 90, 116, 145, 55, 90, 120, 170, 100, 110, 73, 58, 145, 110)',
    'MOTOwait()',
    'MOTOsetspeed(21)',
    'MOTOmove16(80, 30, 100, 100, 124, 142, 55, 108, 120, 170, 100, 105, 67, 55, 135, 120)',
    'MOTOwait()',
    'MOTOsetspeed(21)',
    'MOTOmove16(80, 30, 100, 95, 123, 147, 63, 86, 120, 170, 100, 100, 80, 58, 145, 90)',
    'MOTOwait()',
    'MOTOsetspeed(18)',
    'MOTOmove16(80, 30, 100, 90, 116, 145, 55, 90, 120, 170, 100, 110, 73, 58, 145, 110)',
    'MOTOwait()',
    'MOTOsetspeed(21)',
    'MOTOmove16(80, 30, 100, 100, 124, 142, 55, 108, 120, 170, 100, 105, 67, 55, 135, 120)',
    'MOTOwait()',
    'MOTOsetspeed(21)',
    'MOTOmove16(80, 30, 100, 95, 123, 147, 63, 86, 120, 170, 100, 100, 80, 58, 145, 90)',
    'MOTOwait()',
    'MOTOsetspeed(18)',
    'MOTOmove16(80, 30, 100, 90, 116, 145, 55, 90, 120, 170, 100, 110, 73, 58, 145, 110)',
    'MOTOwait()',
    'MOTOsetspeed(21)',
    'MOTOmove16(80, 30, 100, 100, 124, 142, 55, 108, 120, 170, 100, 105, 67, 55, 135, 120)',
    'MOTOwait()',
    'MOTOsetspeed(21)',
    'MOTOmove16(80, 30, 100, 95, 123, 147, 63, 86, 120, 170, 100, 100, 80, 58, 145, 90)',
    'MOTOwait()',
    'MOTOsetspeed(18)',
    'MOTOmove16(80, 30, 100, 90, 116, 145, 55, 90, 120, 170, 100, 110, 73, 58, 145, 110)',
    'MOTOwait()',
    'MOTOsetspeed(21)',
    'MOTOmove16(80, 30, 100, 100, 124, 142, 55, 108, 120, 170, 100, 105, 67, 55, 135, 120)',
    'MOTOwait()',
    'MOTOsetspeed(34)',
    'MOTOmove16(80, 30, 100, 97, 107, 145, 41, 99, 120, 170, 99, 99, 95, 58, 161, 98)',
    'MOTOwait()',
    'MOTOsetspeed(34)',
    'MOTOmove16(81, 31, 101, 100, 93, 55, 124, 100, 120, 171, 101, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Left_squat_walk'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['LEFT_SQUAT_WALK'] + "')\n";
  return code;
}

Blockly.Blocks['Split_leg'] = {
  init: function () {
    this.jsonInit({
      type: 'Split_leg',
      message0: '%{BKY_SPLIT_LEG}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Split_leg'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)',
    'MOTOsetspeed(53)',
    'MOTOmove16(101, 101, 101, 95, 120, 119, 85, 95, 135, 104, 99, 105, 80, 81, 115, 105)',
    'MOTOwait()',
    'DelayMs(250)',
    'MOTOsetspeed(25)',
    'MOTOmove16(145, 155, 105, 90, 132, 138, 75, 108, 55, 45, 95, 105, 75, 85, 108, 117)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(145, 155, 105, 78, 130, 138, 75, 110, 55, 45, 95, 110, 70, 62, 125, 111)',
    'MOTOwait()',
    'MOTOsetspeed(28)',
    'MOTOmove16(100, 75, 100, 50, 130, 138, 75, 80, 45, 33, 95, 150, 70, 62, 125, 111)',
    'MOTOwait()',
    'MOTOsetspeed(21)',
    'MOTOmove16(100, 125, 100, 30, 130, 138, 75, 104, 45, 33, 95, 170, 70, 62, 125, 80)',
    'MOTOwait()',
    'MOTOsetspeed(42)',
    'MOTOmove16(100, 140, 100, 15, 130, 138, 75, 110, 45, 43, 95, 183, 70, 62, 125, 80)',
    'MOTOwait()',
    'DelayMs(900)',
    'MOTOsetspeed(14)',
    'MOTOmove16(100, 140, 100, 15, 130, 138, 75, 110, 99, 98, 101, 188, 116, 164, 66, 98)',
    'MOTOwait()',
    'DelayMs(1000)',
    'MOTOsetspeed(14)',
    'MOTOmove16(100, 140, 100, 15, 130, 138, 75, 110, 156, 15, 100, 186, 66, 69, 115, 97)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(100, 140, 100, 15, 130, 138, 75, 110, 99, 98, 101, 188, 116, 164, 66, 98)',
    'MOTOwait()',
    'DelayMs(1000)',
    'MOTOsetspeed(35)',
    'MOTOmove16(100, 140, 100, 15, 130, 138, 75, 110, 156, 15, 100, 186, 66, 69, 115, 97)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(100, 140, 100, 15, 130, 138, 75, 110, 99, 98, 101, 188, 116, 164, 66, 98)',
    'MOTOwait()',
    'DelayMs(1000)',
    'MOTOsetspeed(42)',
    'MOTOmove16(100, 125, 100, 30, 130, 138, 75, 57, 99, 98, 101, 170, 70, 62, 125, 143)',
    'MOTOwait()',
    'MOTOsetspeed(45)',
    'MOTOmove16(100, 100, 100, 14, 128, 143, 59, 55, 100, 100, 100, 186, 72, 67, 141, 145)',
    'MOTOwait()',
    'MOTOsetspeed(48)',
    'MOTOmove16(103, 39, 113, 74, 145, 139, 62, 74, 97, 161, 87, 126, 55, 61, 138, 126)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(52)',
    'MOTOmove16(85, 50, 130, 100, 140, 145, 67, 100, 115, 150, 70, 100, 60, 55, 134, 100)',
    'MOTOwait()',
    'MOTOsetspeed(52)',
    'MOTOmove16(85, 50, 130, 100, 132, 146, 67, 100, 115, 150, 70, 100, 68, 54, 134, 100)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(20)',
    'MOTOmove16(145, 155, 105, 84, 132, 138, 75, 100, 55, 45, 95, 105, 75, 85, 108, 117)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(81, 107, 101, 100, 125, 144, 57, 100, 119, 93, 99, 100, 75, 56, 143, 100)',
    'MOTOwait()',
    'MOTOsetspeed(28)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 108, 93, 55, 124, 100, 120, 170, 100, 92, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Split_leg'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['SPLIT_LEG'] + "')\n";
  return code;
}

Blockly.Blocks['1780396598540'] = {
  init: function() {
    this.jsonInit({
      "type": "1780396598540",
      "message0": "下批",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780396598540'] = function(block) {
  let code = "MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)\nMOTOsetspeed(10)\nMOTOmove19(103,39,180,74,145,139,62,74,97,161,28,126,55,61,138,126,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(80,30,180,108,93,55,124,100,120,170,28,92,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780396598540'] = function(block) {
  let code = "base_action.action('下批')\n";
  return code;
}

Blockly.Blocks['1780398091928'] = {
  init: function() {
    this.jsonInit({
      "type": "1780398091928",
      "message0": "蹲放",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780398091928'] = function(block) {
  let code = "MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)\nMOTOsetspeed(65)\nMOTOmove19(65,10,180,85,112,90,115,90,140,190,28,110,107,146,70,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(10)\nMOTOmove19(65,10,180,85,110,139,62,83,140,190,28,115,88,61,138,117,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,180,74,145,139,62,74,140,190,28,126,55,61,138,126,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(85,10,180,74,145,139,62,74,120,190,28,126,55,61,138,126,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(85,10,180,108,93,55,124,100,120,190,28,92,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780398091928'] = function(block) {
  let code = "base_action.action('蹲放')\n";
  return code;
}

Blockly.Blocks['1780398237174'] = {
  init: function() {
    this.jsonInit({
      "type": "1780398237174",
      "message0": "抱方块左移",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780398237174'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(65,10,180,85,112,90,115,90,140,190,28,110,107,146,70,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(65,10,180,95,93,53,131,105,140,190,28,120,116,160,68,130,0,0,100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(65,10,180,100,93,54,134,98,140,190,28,103,107,146,76,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,180,100,93,55,134,95,140,190,28,100,107,145,76,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(65,10,180,100,93,55,134,100,140,190,28,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780398237174'] = function(block) {
  let code = "base_action.action('抱方块左移')\n";
  return code;
}

Blockly.Blocks['1780398283865'] = {
  init: function() {
    this.jsonInit({
      "type": "1780398283865",
      "message0": "抱方块右移",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780398283865'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(65,10,180,90,93,54,130,100,140,190,28,115,88,110,85,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(65,10,180,80,84,40,138,70,140,190,28,105,107,147,69,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(65,10,180,97,93,54,130,95,140,190,28,100,107,146,66,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,180,100,93,55,130,95,140,190,28,100,107,145,66,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(65,10,180,100,93,55,130,100,140,190,28,100,107,145,66,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780398283865'] = function(block) {
  let code = "base_action.action('抱方块右移')\n";
  return code;
}

Blockly.Blocks['1780398362518'] = {
  init: function() {
    this.jsonInit({
      "type": "1780398362518",
      "message0": "举方块1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780398362518'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,100,90,55,127,100,140,190,28,100,110,145,73,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780398362518'] = function(block) {
  let code = "base_action.action('举方块1')\n";
  return code;
}

Blockly.Blocks['repeat_until'] = {
  init: function () {
    this.jsonInit({
      type: 'repeat_until',
      message0: '%{BKY_REPEAT_UNTIL} %1 %{BKY_ACTION} %2',
      args0: [
        {
          type: 'input_value',
          name: 'condition',
          check: 'Boolean',
        },
        {
          type: 'input_statement',
          name: 'block',
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: '#86C113',
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['repeat_until'] = function (block) {
  const condition = Blockly.Lua.valueToCode(block, 'condition', Blockly.Lua.ORDER_NONE);
  const blockCode = Blockly.Lua.statementToCode(block, 'block', Blockly.Lua.ORDER_NONE);
  const temp_ = blockCode.split('\n');
  let template = [
    'while(true)',
    'do',
    '  if ${template} then',
    '    break',
    '  end',
    ...temp_,
    'end',
    '',
  ];
  let code = template.join('\n').replace('${template}', condition);
  if (!condition) {
    code = '';
  }
  return code;
}

Blockly.Python['repeat_until'] = function (block) {
  const blockCode =
    Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_NONE) || 'False';
  let do_code = Blockly.Python.statementToCode(block, 'block') || Blockly.Python.PASS;
  return `while not ${blockCode}:\n${do_code}`;
}

Blockly.Blocks['loop'] = {
  init: function () {
    this.jsonInit({
      type: 'loop',
      message0: '%{BKY_EXIT_LOOP_TEXT}',
      previousStatement: null,
      nextStatement: null,
      colour: '#86C113',
      tooltip: '',
      helpUrl: '',
      extensions: ['controls_flow_in_loop_check'],
    });
  }
};

Blockly.Lua['loop'] = function(block) {
  let code = 'break\n';
  return code;
}

Blockly.Python['loop'] = function (block) {
  const code = 'break\n';
  return code;
}

Blockly.Blocks['aelos_if_else'] = {
  init: function() {
    this.jsonInit({
      "type": "aelos_if_else",
      "message0": "%{BKY_AELOS_IF} %1 %{BKY_AELOS_DO} %2 %{BKY_AELOS_ELSE} %3",
      "args0": [
        {
          "type": "input_value",
          "name": "condition",
          "check": "Boolean"
        },
        {
          "type": "input_statement",
          "name": "if_do"
        },
        {
          "type": "input_statement",
          "name": "else_do"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#86C113',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['aelos_if_else'] = function (block) {
  const condition = Blockly.Lua.valueToCode(block, 'condition', Blockly.Lua.ORDER_NONE) || 'false';
  const if_do = Blockly.Lua.statementToCode(block, 'if_do');
  const else_do = Blockly.Lua.statementToCode(block, 'else_do');

  const code = `if ${condition} then \n${if_do} \nHKEY()\nelse \n${else_do}\nHKEY()\nend\n`;
  return code;
}

Blockly.Python['aelos_if_else'] = function (block) {
  const condition =
    Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_NONE) || 'False';
  const if_do = Blockly.Python.statementToCode(block, 'if_do') || Blockly.Python.PASS;
  const else_do = Blockly.Python.statementToCode(block, 'else_do') || Blockly.Python.PASS;

  const code = `if ${condition}:\n${if_do}else:\n${else_do}`;
  return code;
}

Blockly.Blocks['1780403945983'] = {
  init: function() {
    this.jsonInit({
      "type": "1780403945983",
      "message0": "蹲放1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780403945983'] = function(block) {
  let code = "MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)\nMOTOsetspeed(10)\nMOTOmove19(65,10,180,85,110,139,62,83,140,190,28,115,88,61,138,117,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,180,74,145,139,62,74,140,190,28,126,55,61,138,126,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(85,10,180,74,145,139,62,74,120,190,28,126,55,61,138,126,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(85,10,180,108,93,55,124,100,120,190,28,92,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780403945983'] = function(block) {
  let code = "base_action.action('蹲放1')\n";
  return code;
}

Blockly.Blocks['1780404834649'] = {
  init: function() {
    this.jsonInit({
      "type": "1780404834649",
      "message0": "抱方块4",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780404834649'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 张\nMOTOsetspeed(20)\nMOTOmove19(80,30,156,100,93,55,124,100,120,170,50,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80,30,156,100,113,90,109,100,120,170,50,100,87,111,91,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,156,100,136,150,62,100,120,170,50,100,72,50,138,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100,30,146,100,160,150,67,100,100,170,60,100,40,50,133,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,10,156,100,160,150,67,100,140,190,50,100,40,50,133,100,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(65,10,156,100,104,132,70,100,140,190,50,100,93,69,130,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,100,90,55,127,100,140,190,50,100,110,145,73,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780404834649'] = function(block) {
  let code = "base_action.action('抱方块4')\n";
  return code;
}

Blockly.Blocks['1780405411628'] = {
  init: function() {
    this.jsonInit({
      "type": "1780405411628",
      "message0": "放下方块",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780405411628'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- RIGEND\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,100,93,55,127,100,140,190,28,100,107,145,73,100,0,0,100)\nMOTOwait()\n\n\n-- 蹲2\nMOTOsetspeed(15)\nMOTOmove19(65,10,180,100,111,150,54,102,140,190,28,100,88,51,142,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,100,111,150,54,102,140,190,28,100,88,51,142,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(77,10,180,100,111,150,54,102,122,190,28,100,88,51,142,101,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780405411628'] = function(block) {
  let code = "base_action.action('放下方块')\n";
  return code;
}

Blockly.Blocks['1780405860936'] = {
  init: function() {
    this.jsonInit({
      "type": "1780405860936",
      "message0": "放下方块2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780405860936'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- RIGEND\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,100,93,55,127,100,140,190,28,100,107,145,73,100,0,0,100)\nMOTOwait()\n\n\n-- 蹲2\nMOTOsetspeed(15)\nMOTOmove19(65,10,180,100,111,150,54,102,140,190,28,100,88,51,142,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,180,100,129,150,54,102,140,190,28,100,70,51,142,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(92,10,180,100,129,150,54,102,107,190,28,100,70,51,142,101,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780405860936'] = function(block) {
  let code = "base_action.action('放下方块2')\n";
  return code;
}

Blockly.Blocks['1780464183380'] = {
  init: function() {
    this.jsonInit({
      "type": "1780464183380",
      "message0": "前蹲走1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780464183380'] = function(block) {
  let code = "MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,97,104,145,42,101,120,170,100,103,97,54,159,103,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,49,100,104,120,135,68,111,119,148,95,107,56,54,121,111,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,49,100,104,120,135,68,111,119,148,95,108,56,62,120,111,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,49,100,104,120,135,68,111,119,148,95,108,56,78,91,111,128,71,100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(79,49,99,107,116,132,77,88,119,148,95,107,99,64,146,96,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,49,99,112,119,136,68,94,119,148,95,118,99,64,146,96,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,49,99,111,120,129,83,94,119,148,95,118,99,64,146,96,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,49,99,112,119,123,89,94,119,148,95,118,99,64,146,96,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(76,40,101,97,104,150,41,98,119,163,95,98,99,50,158,99,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780464183380'] = function(block) {
  let code = "base_action.action('前蹲走1')\n";
  return code;
}

Blockly.Blocks['1780464419182'] = {
  init: function() {
    this.jsonInit({
      "type": "1780464419182",
      "message0": "前蹲走2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780464419182'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 97, 104, 145, 42, 101, 120, 170, 100, 103, 96, 55, 158, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79, 49, 100, 104, 120, 135, 68, 111, 121, 151, 100, 96, 80, 65, 132, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79, 49, 100, 104, 120, 135, 68, 111, 121, 151, 100, 96, 80, 65, 132, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79, 49, 100, 104, 120, 135, 68, 111, 121, 151, 100, 96, 80, 65, 132, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(79, 49, 99, 107, 116, 132, 77, 88, 121, 151, 101, 93, 84, 68, 123, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79, 49, 99, 112, 119, 136, 68, 94, 121, 151, 101, 88, 81, 64, 132, 106, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79, 49, 99, 111, 120, 129, 83, 94, 121, 151, 101, 89, 80, 71, 117, 106, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79, 49, 99, 112, 119, 123, 89, 94, 121, 151, 101, 88, 81, 77, 111, 106, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(76, 40, 101, 97, 104, 150, 41, 98, 124, 160, 99, 103, 96, 50, 159, 102, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780464419182'] = function(block) {
  let code = "base_action.action('前蹲走2')\n";
  return code;
}

Blockly.Blocks['1780465061284'] = {
  init: function() {
    this.jsonInit({
      "type": "1780465061284",
      "message0": "前蹲走2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780465061284'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 97, 104, 145, 42, 101, 120, 170, 100, 103, 96, 55, 158, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79, 49, 100, 104, 120, 135, 68, 111, 121, 151, 100, 88, 81, 64, 132, 106, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79, 49, 100, 104, 120, 135, 68, 111, 121, 151, 100, 89, 80, 71, 117, 106, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79, 49, 100, 104, 120, 135, 68, 111, 121, 151, 100, 88, 81, 77, 111, 106, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(79, 49, 99, 107, 116, 132, 77, 88, 121, 151, 101, 93, 84, 68, 123, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79, 49, 99, 112, 119, 136, 68, 94, 121, 151, 101, 96, 80, 65, 132, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79, 49, 99, 111, 120, 129, 83, 94, 121, 151, 101, 96, 80, 65, 132, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79, 49, 99, 112, 119, 123, 89, 94, 121, 151, 101, 96, 80, 65, 132, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(76, 40, 101, 97, 104, 150, 41, 98, 124, 160, 99, 103, 96, 50, 159, 102, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780465061284'] = function(block) {
  let code = "base_action.action('前蹲走2')\n";
  return code;
}

Blockly.Blocks['1780465965070'] = {
  init: function() {
    this.jsonInit({
      "type": "1780465965070",
      "message0": "左蹲走1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780465965070'] = function(block) {
  let code = "MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,97,107,145,41,99,120,170,99,99,95,59,161,98,128,71,100)\nMOTOwait()\nMOTOsetspeed(21)\nMOTOmove19(80,30,100,95,123,145,63,86,120,170,100,100,80,59,145,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80,30,100,90,116,145,55,90,120,170,100,110,73,58,145,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(21)\nMOTOmove19(80,30,100,100,124,142,55,108,120,170,100,105,67,55,135,120,128,71,100)\nMOTOwait()\nMOTOsetspeed(21)\nMOTOmove19(80,30,100,95,123,147,63,86,120,170,100,100,80,58,145,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,97,107,145,41,99,120,170,99,99,95,59,161,98,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780465965070'] = function(block) {
  let code = "base_action.action('左蹲走1')\n";
  return code;
}

Blockly.Blocks['Stretch_arm'] = {
  init: function () {
    this.jsonInit({
      type: 'Stretch_arm',
      message0: '%{BKY_STRETCH_ARM}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Stretch_arm'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 94, 105, 63, 124, 93, 120, 170, 100, 106, 95, 137, 76, 107)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(81, 21, 188, 100, 93, 55, 124, 100, 119, 169, 99, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(82, 18, 187, 100, 93, 55, 124, 100, 119, 183, 13, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(82, 100, 187, 100, 93, 55, 124, 100, 119, 183, 13, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(82, 100, 187, 100, 93, 55, 124, 100, 118, 100, 13, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(22, 39, 187, 100, 93, 55, 124, 100, 178, 161, 13, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(100, 100, 100, 100, 93, 55, 124, 100, 100, 100, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(35)',
    'MOTOmove16(50, 190, 100, 100, 93, 55, 124, 100, 150, 10, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(35)',
    'MOTOmove16(100, 100, 100, 100, 93, 55, 124, 100, 100, 100, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(300)',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Stretch_arm'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['STRETCH_ARM'] + "')\n";
  return code;
}

Blockly.Blocks['Press_right_leg'] = {
  init: function () {
    this.jsonInit({
      type: 'Press_right_leg',
      message0: '%{BKY_PRESS_RIGHT_LEG}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Press_right_leg'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(24)',
    'MOTOmove16(10, 85, 100, 78, 121, 129, 76, 87, 112, 150, 95, 133, 107, 143, 81, 140)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(10, 85, 99, 78, 121, 140, 52, 92, 109, 156, 93, 133, 107, 143, 82, 146)',
    'MOTOwait()',
    'MOTOsetspeed(24)',
    'MOTOmove16(10, 85, 100, 78, 121, 129, 76, 87, 112, 150, 95, 133, 107, 143, 81, 140)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(10, 85, 100, 78, 121, 129, 76, 87, 112, 152, 93, 133, 107, 143, 81, 140)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(10, 85, 99, 78, 121, 144, 52, 92, 109, 156, 93, 133, 107, 143, 82, 146)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(10, 85, 100, 78, 121, 129, 76, 87, 112, 152, 93, 133, 107, 143, 81, 140)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(10, 85, 99, 78, 121, 144, 52, 92, 109, 156, 93, 133, 107, 143, 82, 146)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(10, 85, 100, 78, 121, 129, 76, 87, 112, 152, 93, 133, 107, 143, 81, 140)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(10, 85, 99, 78, 121, 144, 52, 92, 109, 156, 93, 133, 107, 143, 82, 146)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(10, 85, 100, 78, 121, 129, 76, 87, 112, 152, 93, 133, 107, 143, 81, 140)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 108, 93, 55, 124, 100, 120, 170, 100, 92, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(250)',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Press_right_leg'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['PRESS_RIGHT_LEG'] + "')\n";
  return code;
}

Blockly.Blocks['1780470809733'] = {
  init: function() {
    this.jsonInit({
      "type": "1780470809733",
      "message0": "前蹲走3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780470809733'] = function(block) {
  let code = "MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,104,150,40,99,120,170,100,102,97,50,161,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,49,100,104,120,135,68,111,119,148,95,107,56,54,121,111,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,49,100,104,120,135,68,111,119,148,95,108,56,78,91,111,128,71,100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(79,49,99,107,116,132,77,88,119,148,95,107,99,64,146,96,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,49,99,112,119,135,68,94,126,148,95,118,99,65,144,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,49,99,111,119,98,114,81,126,148,95,112,99,65,144,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,49,99,100,93,150,40,97,126,148,95,100,105,50,162,97,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,104,150,40,99,120,170,100,102,97,50,161,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780470809733'] = function(block) {
  let code = "base_action.action('前蹲走3')\n";
  return code;
}

Blockly.Blocks['Right_side_move'] = {
  init: function () {
    this.jsonInit({
      type: 'Right_side_move',
      message0: '%{BKY_RIGHT_SIDE_MOVE}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Right_side_move'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,30,30,60,30,60)',
    'MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 95, 120, 170, 100, 110, 107, 145, 76, 105)',
    'MOTOwait()',
    'MOTOsetspeed(40)',
    'MOTOmove16(95, 185, 100, 92, 93, 55, 124, 94, 190, 113, 100, 108, 107, 145, 76, 106)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(40)',
    'MOTOmove16(95, 185, 100, 107, 93, 55, 124, 83, 190, 113, 100, 123, 80, 95, 106, 106)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(45)',
    'MOTOmove16(95, 185, 100, 92, 93, 55, 124, 92, 190, 113, 100, 108, 107, 145, 76, 108)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(40)',
    'MOTOmove16(135, 165, 100, 107, 93, 55, 124, 84, 190, 113, 100, 123, 80, 95, 106, 106)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(47)',
    'MOTOmove16(95, 185, 100, 92, 93, 55, 124, 92, 190, 113, 100, 108, 107, 145, 76, 108)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 108, 93, 55, 124, 98, 120, 170, 100, 92, 107, 145, 76, 102)',
    'MOTOwait()',
    'DelayMs(250)',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Right_side_move'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['RIGHT_SIDE_MOVE'] + "')\n";
  return code;
}

