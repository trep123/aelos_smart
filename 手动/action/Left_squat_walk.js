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

