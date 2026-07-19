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

