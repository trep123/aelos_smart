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

