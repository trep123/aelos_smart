Blockly.Blocks['music'] = {
  init: function () {
    this.jsonInit({
      type: 'music',
      message0: '%{BKY_AELOS_MUSIC} %1',
      args0: [
        {
          type: 'field_input',
          name: 'music_name',
          text: '%{BKY_DEFAULT_MUSIC_INPUT}',
          spellcheck: false,
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Msg.ControlHUE,
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['music'] = function(block) {
  const music_name = block.getFieldValue("music_name");
  let code = `Play_AI_music('')\n`;
    
  if (music_name) {
    code = `Play_AI_music('0:/music/${music_name}.mp3')\n`;
  }

  return code;
}

Blockly.Python['music'] = function (block) {
  const music_name = block.getFieldValue('music_name');
  let code = `music.music_play(None)\n`;

  if (music_name && music_name !== Blockly.Msg['DEFAULT_MUSIC_INPUT']) {
    code = `music.music_play('${music_name}')\n`;
  }

  return code;
}

