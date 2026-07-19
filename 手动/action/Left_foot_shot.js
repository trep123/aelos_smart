Blockly.Blocks['Left_foot_shot'] = {
  init: function () {
    this.jsonInit({
      type: 'Left_foot_shot',
      message0: '%{BKY_LEFT_FOOT_SHOT}',
      previousStatement: null,
      nextStatement: null,
      colour: '#7148F5',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Left_foot_shot'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)',
    'MOTOsetspeed(8)',
    'MOTOmove16(80, 40, 100, 86, 91, 48, 129, 85, 120, 160, 100, 92, 107, 145, 77, 86)',
    'MOTOwait()',
    'MOTOsetspeed(34)',
    'MOTOmove16(80, 40, 100, 86, 142, 112, 104, 83, 120, 160, 100, 95, 87, 145, 70, 85)',
    'MOTOwait()',
    'MOTOsetspeed(34)',
    'MOTOmove16(65, 35, 165, 77, 61, 116, 78, 96, 110, 163, 162, 93, 87, 132, 85, 85)',
    'MOTOwait()',
    'MOTOsetspeed(90)',
    'MOTOmove16(81, 45, 101, 77, 102, 95, 81, 88, 121, 161, 100, 95, 87, 140, 76, 85)',
    'MOTOwait()',
    'MOTOsetspeed(110)',
    'MOTOmove16(80, 40, 50, 77, 150, 47, 171, 96, 129, 177, 34, 95, 101, 139, 75, 85)',
    'MOTOwait()',
    'DelayMs(400)',
    'MOTOsetspeed(25)',
    'MOTOmove16(80, 40, 100, 77, 130, 78, 131, 83, 120, 160, 100, 95, 108, 144, 78, 87)',
    'MOTOwait()',
    'MOTOsetspeed(25)',
    'MOTOmove16(80, 40, 100, 77, 110, 81, 114, 80, 120, 160, 100, 95, 105, 145, 77, 87)',
    'MOTOwait()',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 40, 100, 87, 94, 76, 109, 82, 120, 160, 100, 93, 107, 145, 77, 90)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Left_foot_shot'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['LEFT_FOOT_SHOT'] + "')\n";
  return code;
}

