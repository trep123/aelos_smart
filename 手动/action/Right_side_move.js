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

