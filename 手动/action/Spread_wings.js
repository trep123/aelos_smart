Blockly.Blocks['Spread_wings'] = {
  init: function () {
    this.jsonInit({
      type: 'Spread_wings',
      message0: '%{BKY_SPREAD_WINGS}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Spread_wings'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,70)',
    'MOTOsetspeed(30)',
    'MOTOmove16(78, 105, 99, 99, 92, 56, 124, 99, 121, 90, 100, 101, 106, 142, 75, 99)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(100, 100, 100, 89, 92, 58, 122, 82, 100, 100, 100, 93, 102, 133, 86, 91)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(100, 100, 100, 90, 98, 69, 114, 86, 100, 100, 100, 93, 102, 133, 86, 88)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(100, 100, 100, 85, 115, 95, 102, 90, 100, 100, 100, 88, 98, 145, 74, 87)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(30)',
    'MOTOmove16(100, 100, 130, 85, 105, 145, 79, 90, 100, 100, 70, 93, 71, 128, 77, 87)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(100, 100, 170, 85, 54, 55, 102, 90, 100, 100, 30, 93, 62, 165, 53, 87)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(140, 150, 170, 85, 54, 55, 102, 90, 60, 50, 30, 93, 50, 170, 48, 88)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(70, 50, 170, 85, 54, 55, 102, 90, 130, 150, 30, 93, 55, 170, 48, 86)',
    'MOTOwait()',
    'DelayMs(300)',
    'MOTOsetspeed(32)',
    'MOTOmove16(100, 100, 170, 85, 54, 55, 102, 90, 100, 100, 30, 93, 50, 170, 48, 86)',
    'MOTOwait()',
    'MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,60,60,60,60,70)',
    'MOTOsetspeed(32)',
    'MOTOmove16(100, 100, 170, 89, 61, 94, 101, 88, 100, 100, 30, 93, 77, 165, 57, 89)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(25)',
    'MOTOmove16(100, 100, 130, 85, 105, 145, 53, 90, 100, 100, 70, 93, 85, 131, 83, 87)',
    'MOTOwait()',
    'MOTOsetspeed(25)',
    'MOTOmove16(100, 100, 100, 85, 111, 86, 96, 85, 100, 100, 100, 93, 103, 142, 78, 87)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(100, 100, 100, 89, 92, 50, 121, 85, 100, 100, 100, 93, 102, 139, 83, 92)',
    'MOTOwait()',
    'MOTOrigid16(40,40,40,60,60,60,60,40,40,40,40,60,60,60,60,60)',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 35, 100, 100, 93, 55, 124, 100, 120, 165, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Spread_wings'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['SPREAD_WINGS'] + "')\n";
  return code;
}

