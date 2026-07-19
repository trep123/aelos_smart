Blockly.Blocks['1676273139445'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273139445",
      "message0": "抱箱左转1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273139445'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65,0,0,0)\nMOTOsetspeed(14)\nMOTOmove19(65, 10, 149, 95, 71, 55, 109, 95, 140, 190, 50, 105, 89, 145, 51, 105, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 95, 80, 55, 109, 92, 140, 190, 50, 105, 81, 145, 51, 108, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(65, 10, 149, 100, 91, 55, 129, 100, 140, 190, 50, 100, 109, 145, 71, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 91, 55, 129, 100, 140, 190, 50, 100, 109, 145, 71, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273139445'] = function(block) {
  let code = "base_action.action('抱箱左转1')\n";
  return code;
}

