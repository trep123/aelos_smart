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

