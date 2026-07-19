Blockly.Blocks['Back_flip'] = {
  init: function () {
    this.jsonInit({
      type: 'Back_flip',
      message0: '%{BKY_BACK_FLIP}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Back_flip'] = function (block) {
  const code = [
    'MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)',
    'MOTOsetspeed(50)',
    'MOTOmove16(70, 50, 80, 100, 25, 133, 40, 98, 130, 150, 120, 100, 175, 65, 161, 102)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(45, 50, 45, 100, 23, 151, 68, 100, 155, 150, 155, 100, 177, 49, 130, 102)',
    'MOTOwait()',
    'MOTOsetspeed(45)',
    'MOTOmove16(70, 50, 35, 100, 160, 11, 121, 97, 130, 150, 165, 100, 40, 186, 81, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(70, 50, 10, 100, 160, 19, 92, 96, 130, 150, 190, 100, 40, 180, 108, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(30, 135, 187, 100, 162, 23, 100, 97, 170, 65, 10, 100, 40, 180, 95, 100)',
    'MOTOwait()',
    'MOTOsetspeed(53)',
    'MOTOmove16(30, 135, 190, 90, 80, 80, 70, 100, 170, 65, 10, 110, 120, 120, 130, 100)',
    'MOTOwait()',
    'DelayMs(50)',
    'MOTOsetspeed(53)',
    'MOTOmove16(90, 10, 160, 63, 162, 145, 33, 75, 110, 190, 40, 137, 38, 55, 167, 125)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(53)',
    'MOTOmove16(90, 15, 155, 100, 162, 145, 55, 100, 110, 185, 45, 100, 38, 55, 145, 100)',
    'MOTOwait()',
    'MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)',
    'MOTOsetspeed(53)',
    'MOTOmove16(90, 15, 155, 100, 162, 145, 55, 100, 110, 185, 45, 100, 38, 55, 145, 100)',
    'MOTOwait()',
    'DelayMs(50)',
    'MOTOsetspeed(42)',
    'MOTOmove16(90, 15, 140, 100, 162, 175, 50, 100, 110, 185, 60, 100, 38, 25, 150, 100)',
    'MOTOwait()',
    'MOTOsetspeed(28)',
    'MOTOmove16(80, 30, 113, 100, 155, 175, 62, 100, 120, 170, 87, 100, 45, 25, 138, 100)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(28)',
    'MOTOmove16(80, 30, 100, 100, 142, 145, 77, 100, 120, 170, 100, 100, 58, 55, 123, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Back_flip'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['BACK_FLIP'] + "')\n";
  return code;
}

