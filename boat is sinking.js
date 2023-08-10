function sinking(participant, rounds) {
  let remainingParticipants = participant;
  for (const groupSize of rounds) {
    const qualifiedParticipants = remainingParticipants - (remainingParticipants % groupSize);
    remainingParticipants = qualifiedParticipants;
  }

  return remainingParticipants;
}
