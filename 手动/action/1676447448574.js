Blockly.Blocks['1676447448574'] = {
  init: function() {
    this.jsonInit({
      "type": "1676447448574",
      "message0": "后倒地",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676447448574'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(35, 130, 20, 101, 131, 126, 170, 100, 165, 70, 180, 99, 69, 74, 30, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(21, 105, 21, 101, 131, 126, 170, 100, 179, 95, 180, 99, 69, 74, 30, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92, 16, 46, 100, 80, 150, 60, 100, 108, 184, 154, 100, 120, 50, 140, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92, 18, 58, 100, 73, 150, 40, 100, 108, 182, 142, 100, 127, 50, 160, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92, 25, 135, 100, 124, 150, 50, 100, 108, 175, 65, 100, 76, 50, 150, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676447448574'] = function(block) {
  let code = "base_action.action('后倒地')\n";
  return code;
}

