Blockly.Blocks['Press_right_leg'] = {
  init: function () {
    this.jsonInit({
      type: 'Press_right_leg',
      message0: '%{BKY_PRESS_RIGHT_LEG}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Press_right_leg'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(24)',
    'MOTOmove16(10, 85, 100, 78, 121, 129, 76, 87, 112, 150, 95, 133, 107, 143, 81, 140)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(10, 85, 99, 78, 121, 140, 52, 92, 109, 156, 93, 133, 107, 143, 82, 146)',
    'MOTOwait()',
    'MOTOsetspeed(24)',
    'MOTOmove16(10, 85, 100, 78, 121, 129, 76, 87, 112, 150, 95, 133, 107, 143, 81, 140)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(10, 85, 100, 78, 121, 129, 76, 87, 112, 152, 93, 133, 107, 143, 81, 140)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(10, 85, 99, 78, 121, 144, 52, 92, 109, 156, 93, 133, 107, 143, 82, 146)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(10, 85, 100, 78, 121, 129, 76, 87, 112, 152, 93, 133, 107, 143, 81, 140)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(10, 85, 99, 78, 121, 144, 52, 92, 109, 156, 93, 133, 107, 143, 82, 146)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(10, 85, 100, 78, 121, 129, 76, 87, 112, 152, 93, 133, 107, 143, 81, 140)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(10, 85, 99, 78, 121, 144, 52, 92, 109, 156, 93, 133, 107, 143, 82, 146)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(10, 85, 100, 78, 121, 129, 76, 87, 112, 152, 93, 133, 107, 143, 81, 140)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 108, 93, 55, 124, 100, 120, 170, 100, 92, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(250)',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Press_right_leg'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['PRESS_RIGHT_LEG'] + "')\n";
  return code;
}

