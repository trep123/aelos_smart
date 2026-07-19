Blockly.Blocks['aelos_if_else'] = {
  init: function() {
    this.jsonInit({
      "type": "aelos_if_else",
      "message0": "%{BKY_AELOS_IF} %1 %{BKY_AELOS_DO} %2 %{BKY_AELOS_ELSE} %3",
      "args0": [
        {
          "type": "input_value",
          "name": "condition",
          "check": "Boolean"
        },
        {
          "type": "input_statement",
          "name": "if_do"
        },
        {
          "type": "input_statement",
          "name": "else_do"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#86C113',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['aelos_if_else'] = function (block) {
  const condition = Blockly.Lua.valueToCode(block, 'condition', Blockly.Lua.ORDER_NONE) || 'false';
  const if_do = Blockly.Lua.statementToCode(block, 'if_do');
  const else_do = Blockly.Lua.statementToCode(block, 'else_do');

  const code = `if ${condition} then \n${if_do} \nHKEY()\nelse \n${else_do}\nHKEY()\nend\n`;
  return code;
}

Blockly.Python['aelos_if_else'] = function (block) {
  const condition =
    Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_NONE) || 'False';
  const if_do = Blockly.Python.statementToCode(block, 'if_do') || Blockly.Python.PASS;
  const else_do = Blockly.Python.statementToCode(block, 'else_do') || Blockly.Python.PASS;

  const code = `if ${condition}:\n${if_do}else:\n${else_do}`;
  return code;
}

