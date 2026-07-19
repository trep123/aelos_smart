Blockly.Blocks['1780465965070'] = {
  init: function() {
    this.jsonInit({
      "type": "1780465965070",
      "message0": "左蹲走1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780465965070'] = function(block) {
  let code = "MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,97,107,145,41,99,120,170,99,99,95,59,161,98,128,71,100)\nMOTOwait()\nMOTOsetspeed(21)\nMOTOmove19(80,30,100,95,123,145,63,86,120,170,100,100,80,59,145,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80,30,100,90,116,145,55,90,120,170,100,110,73,58,145,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(21)\nMOTOmove19(80,30,100,100,124,142,55,108,120,170,100,105,67,55,135,120,128,71,100)\nMOTOwait()\nMOTOsetspeed(21)\nMOTOmove19(80,30,100,95,123,147,63,86,120,170,100,100,80,58,145,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,97,107,145,41,99,120,170,99,99,95,59,161,98,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780465965070'] = function(block) {
  let code = "base_action.action('左蹲走1')\n";
  return code;
}

