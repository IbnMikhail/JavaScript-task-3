function calculateRemainingParticipants(initialParticipants, rounds) {
    let remainingParticipants = initialParticipants;

    for (let i = 0; i < rounds.length; i++) {
        const groupSize = rounds[i];
        const participantsLeftInGroup = Math.floor(remainingParticipants * (groupSize / (groupSize + 1)));
        remainingParticipants = participantsLeftInGroup;
    }

    return remainingParticipants;
}

const initialParticipants = 15;
const rounds = [4, 2, 5, 3, 2];
const result = calculateRemainingParticipants(initialParticipants, rounds);

console.log("Remaining participants:", result); 
