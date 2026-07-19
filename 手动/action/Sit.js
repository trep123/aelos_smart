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

