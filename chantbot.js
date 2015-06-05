module.exports = function (req, res, next) {
  var triggerWord = req.body.trigger_word,
      userName = 'chant-bot',
      teamId = req.body.team_id,
      teamDomain = req.body.team_domain,
      channelId= req.body.channel_id,
      channelName = req.body.channel;
  var botPayload = {
    trigger_word: triggerWord,
    username: userName,
    channel: channelName,
    text : "Andela makes you code, Angular, Javascript, Express and Node, no telling we're the best. We are, we are awesome"
  };
 

  // avoid infinite loop
  if (userName == 'chantbot') {
    console.log(req.body);
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}

// curl -X POST --data "user_name=foobar&&channel_id=T02R3LKBA&text=Andela makes you code, Angular, Javascript, Express and Node" http://localhost:3000/chant`

// curl -X POST --data "team_domain," http://localhost:3000/hello

// curl -X POST --data-urlencode 'payload={"channel": "#testingchantbot",
// "username": "chantbot", "icon_emoji": ":ghost:"}'http://localhost:3000/chant
