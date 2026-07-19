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

