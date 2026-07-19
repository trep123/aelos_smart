Blockly.Blocks['1780386300726'] = {
  init: function() {
    this.jsonInit({
      "type": "1780386300726",
      "message0": "test2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780386300726'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(15)\nMOTOmove19(80,30,156,100,93,55,124,100,120,170,50,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,35,156,90,91,48,129,88,120,165,50,94,107,146,76,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,35,156,86,90,95,84,90,120,165,50,94,107,146,78,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,35,156,88,71,53,105,85,120,165,50,93,100,144,79,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,35,156,106,93,53,124,111,120,165,50,114,87,163,42,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,35,156,106,95,53,122,113,120,165,50,114,110,105,114,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,35,156,107,100,56,121,109,120,165,50,112,129,147,95,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,35,156,86,113,37,158,90,120,165,50,94,107,147,76,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,35,156,86,110,95,100,90,120,165,50,94,107,146,77,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80,35,156,90,91,48,129,88,120,165,50,94,107,146,76,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,156,100,93,55,124,100,120,170,50,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780386300726'] = function(block) {
  let code = "base_action.action('test2')\n";
  return code;
}

