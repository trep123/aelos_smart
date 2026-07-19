Blockly.Blocks['1780464419182'] = {
  init: function() {
    this.jsonInit({
      "type": "1780464419182",
      "message0": "前蹲走2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780464419182'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 97, 104, 145, 42, 101, 120, 170, 100, 103, 96, 55, 158, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79, 49, 100, 104, 120, 135, 68, 111, 121, 151, 100, 96, 80, 65, 132, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79, 49, 100, 104, 120, 135, 68, 111, 121, 151, 100, 96, 80, 65, 132, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79, 49, 100, 104, 120, 135, 68, 111, 121, 151, 100, 96, 80, 65, 132, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(79, 49, 99, 107, 116, 132, 77, 88, 121, 151, 101, 93, 84, 68, 123, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79, 49, 99, 112, 119, 136, 68, 94, 121, 151, 101, 88, 81, 64, 132, 106, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79, 49, 99, 111, 120, 129, 83, 94, 121, 151, 101, 89, 80, 71, 117, 106, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79, 49, 99, 112, 119, 123, 89, 94, 121, 151, 101, 88, 81, 77, 111, 106, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(76, 40, 101, 97, 104, 150, 41, 98, 124, 160, 99, 103, 96, 50, 159, 102, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780464419182'] = function(block) {
  let code = "base_action.action('前蹲走2')\n";
  return code;
}

