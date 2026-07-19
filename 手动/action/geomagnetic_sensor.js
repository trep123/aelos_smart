Blockly.Blocks['geomagnetic_sensor'] = {
  init: function () {
    this.jsonInit({
      type: 'geomagnetic_sensor',
      message0: '%{BKY_GEOMAGNETIC_SENSOR} %1 %2 ',
      args0: [
        {
          type: 'field_dropdown',
          name: 'OP',
          options: [
            ['=', 'JNE'],
            ['\u2260', 'JE'],
            ['<', 'JAE'],
            ['\u200f\u2265\u200f', 'JA'],
            ['>', 'JBE'],
            ['\u200f\u2264\u200f', 'JB'],
          ],
        },
        {
          type: 'field_number',
          name: 'number',
          value: 0,
          min: 0,
          max: 360,
          precision: 1,
        },
      ],
      output: 'Boolean',
      outputShape: Blockly.OUTPUT_SHAPE_HEXAGONAL,
      colour: Blockly.Msg.ControlHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['geomagnetic_sensor'] = function (block) {
  const code = 'false';
  return [code, Blockly.Lua.ORDER_NONE];
}

Blockly.Python['geomagnetic_sensor'] = function (block) {
  const operation = pythonOpMap[block.getFieldValue('OP')];
  const number = Number.parseInt(block.getFieldValue('number'), 10);
  let code = `sensor_port.get_magnet() ${operation} ${number}`;
  return [code, Blockly.Python.ORDER_NONE];
}

