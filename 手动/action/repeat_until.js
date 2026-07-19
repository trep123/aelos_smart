Blockly.Blocks['repeat_until'] = {
  init: function () {
    this.jsonInit({
      type: 'repeat_until',
      message0: '%{BKY_REPEAT_UNTIL} %1 %{BKY_ACTION} %2',
      args0: [
        {
          type: 'input_value',
          name: 'condition',
          check: 'Boolean',
        },
        {
          type: 'input_statement',
          name: 'block',
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: '#86C113',
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['repeat_until'] = function (block) {
  const condition = Blockly.Lua.valueToCode(block, 'condition', Blockly.Lua.ORDER_NONE);
  const blockCode = Blockly.Lua.statementToCode(block, 'block', Blockly.Lua.ORDER_NONE);
  const temp_ = blockCode.split('\n');
  let template = [
    'while(true)',
    'do',
    '  if ${template} then',
    '    break',
    '  end',
    ...temp_,
    'end',
    '',
  ];
  let code = template.join('\n').replace('${template}', condition);
  if (!condition) {
    code = '';
  }
  return code;
}

Blockly.Python['repeat_until'] = function (block) {
  const blockCode =
    Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_NONE) || 'False';
  let do_code = Blockly.Python.statementToCode(block, 'block') || Blockly.Python.PASS;
  return `while not ${blockCode}:\n${do_code}`;
}

