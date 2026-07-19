Blockly.Blocks['Bow'] = {
  init: function () {
    this.jsonInit({
      type: 'Bow',
      message0: '%{BKY_BOW}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Bow'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)',
    'MOTOsetspeed(18)',
    'MOTOmove16(80, 30, 100, 100, 150, 75, 130, 100, 120, 170, 100, 100, 50, 125, 70, 100)',
    'MOTOwait()',
    'DelayMs(1000)',
    'MOTOsetspeed(21)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Bow'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['BOW'] + "')\n";
  return code;
}

