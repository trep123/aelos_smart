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

