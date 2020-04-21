enum Action {
  // channel join
  Join = 'join',

  // channel join listen-only
  JoinMuted = 'join_muted',

  // kick user from a channel
  Kick = 'kick',

  // sign in
  Login = 'login',

  // mute or unmute one, all, or all but one users for all users in channel.
  Mute = 'mute',
}

export default Action;
