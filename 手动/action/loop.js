Blockly.Blocks['loop'] = {
  init: function () {
    this.jsonInit({
      type: 'loop',
      message0: '%{BKY_EXIT_LOOP_TEXT}',
      previousStatement: null,
      nextStatement: null,
      colour: '#86C113',
      tooltip: '',
      helpUrl: '',
      extensions: ['controls_flow_in_loop_check'],
    });
  }
};

Blockly.Lua['loop'] = function(block) {
  let code = 'break\n';
  return code;
}

Blockly.Python['loop'] = function (block) {
  const code = 'break\n';
  return code;
}

