Blockly.Blocks['io_out'] = {
  init: function () {
    this.jsonInit({
      type: 'io_out',
      message0: '%{BKY_IO_OUTPUT} %1 %{BKY_IO_OUTPUT_PORT} %2',
      args0: [
        {
          type: 'field_dropdown',
          name: 'output_value',
          options: [
            ['0', '0'],
            ['1', '1'],
          ],
        },
        {
          type: 'field_dropdown',
          name: 'port',
          options: portOptions,
        },
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Msg.ControlHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['io_out'] = function(block) {
  const output = block.getFieldValue("output_value");
  const port = block.getFieldValue("port");

  return `WriteGpio(${port}, ${output})\n`;
}

Blockly.Python['io_out'] = function (block) {
  var code = '';
  var port = block.getFieldValue('port');
  var output_value = block.getFieldValue('output_value');

  code = `sensor_port.set_output(${port}, ${output_value})\n`;
  return code;
}

