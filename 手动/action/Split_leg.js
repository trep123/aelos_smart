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

