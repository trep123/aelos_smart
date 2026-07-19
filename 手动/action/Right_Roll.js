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

