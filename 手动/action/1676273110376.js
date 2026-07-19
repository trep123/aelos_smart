Blockly.Blocks['1676273110376'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273110376",
      "message0": "抱箱后退1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273110376'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 90, 91, 48, 138, 88, 140, 190, 50, 94, 107, 146, 67, 92, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 86, 90, 95, 94, 90, 140, 190, 50, 94, 107, 146, 67, 87, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 88, 71, 53, 114, 85, 140, 190, 50, 93, 100, 144, 70, 91, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 106, 93, 53, 134, 111, 140, 190, 50, 114, 87, 163, 33, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 106, 95, 53, 133, 113, 140, 190, 50, 114, 110, 105, 105, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 107, 100, 56, 130, 109, 140, 190, 50, 112, 129, 147, 86, 115, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 107, 100, 56, 130, 109, 140, 190, 50, 112, 129, 147, 86, 115, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 86, 113, 37, 167, 90, 140, 190, 50, 94, 107, 147, 67, 89, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 86, 90, 95, 95, 90, 140, 190, 50, 94, 105, 147, 69, 87, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 93, 55, 133, 100, 140, 190, 50, 100, 107, 145, 67, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273110376'] = function(block) {
  let code = "base_action.action('抱箱后退1')\n";
  return code;
}

