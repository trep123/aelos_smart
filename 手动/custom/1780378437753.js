Blockly.Blocks['1780378437753'] = {
  init: function() {
    this.jsonInit({
      "type": "1780378437753",
      "message0": "抱方块向后慢速移动",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780378437753'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(65,10,156,90,91,48,138,88,140,190,50,94,107,146,67,92,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,86,90,95,94,90,140,190,50,94,107,146,67,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,88,71,53,114,85,140,190,50,93,100,144,70,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,156,106,93,53,134,111,140,190,50,114,87,163,33,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,106,95,53,133,113,140,190,50,114,110,105,105,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,107,100,56,130,109,140,190,50,112,129,147,86,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,107,100,56,130,109,140,190,50,112,129,147,86,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,156,86,113,37,167,90,140,190,50,94,107,147,67,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,86,90,95,95,90,140,190,50,94,105,147,69,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,100,93,55,133,100,140,190,50,100,107,145,67,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780378437753'] = function(block) {
  let code = "base_action.action('抱方块向后慢速移动')\n";
  return code;
}

