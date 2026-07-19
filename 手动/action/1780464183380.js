Blockly.Blocks['1780464183380'] = {
  init: function() {
    this.jsonInit({
      "type": "1780464183380",
      "message0": "前蹲走1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780464183380'] = function(block) {
  let code = "MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,97,104,145,42,101,120,170,100,103,97,54,159,103,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,49,100,104,120,135,68,111,119,148,95,107,56,54,121,111,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,49,100,104,120,135,68,111,119,148,95,108,56,62,120,111,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,49,100,104,120,135,68,111,119,148,95,108,56,78,91,111,128,71,100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(79,49,99,107,116,132,77,88,119,148,95,107,99,64,146,96,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,49,99,112,119,136,68,94,119,148,95,118,99,64,146,96,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,49,99,111,120,129,83,94,119,148,95,118,99,64,146,96,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,49,99,112,119,123,89,94,119,148,95,118,99,64,146,96,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(76,40,101,97,104,150,41,98,119,163,95,98,99,50,158,99,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780464183380'] = function(block) {
  let code = "base_action.action('前蹲走1')\n";
  return code;
}

