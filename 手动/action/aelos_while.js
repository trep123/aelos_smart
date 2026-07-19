Blockly.Blocks['aelos_while'] = {
  init: function () {
    this.jsonInit({
      type: 'aelos_while',
      message0: '%{BKY_AELOS_WHILE} %1 %{BKY_AELOS_DO} %2',
      args0: [
        {
          type: 'input_value',
          name: 'condition',
          check: 'Boolean',
        },
        {
          type: 'input_statement',
          name: 'do',
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: '#86C113',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['aelos_while'] = function(block) {
    var condition = Blockly.Lua.valueToCode(block, "condition", Blockly.Lua.ORDER_NONE) || "FALSE";
    var do_code = Blockly.Lua.statementToCode(block, "do") || "  pass\n";

    var code = `while (${condition})\ndo\n${do_code}\nHKEY()\nend\n`;
    return code;
}

Blockly.Python['aelos_while'] = function (block) {
  var condition =
    Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_NONE) || 'False';
  var do_code = Blockly.Python.statementToCode(block, 'do') || Blockly.Python.PASS;

  var code = `while ${condition}:\n${do_code}`;
  return code;
}

