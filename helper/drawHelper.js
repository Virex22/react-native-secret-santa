export function drawSecrets(members) {
  let membersCopy = [...members];
  let result = [];
  while (membersCopy.length > 0) {
    let index = Math.floor(Math.random() * membersCopy.length);
    result.push(membersCopy[index]);
    membersCopy.splice(index, 1);
  }

  result.forEach((member, index) => {
    let secretUser = result[index + 1] ? result[index + 1].id : result[0].id;
    member.secretUser = secretUser;
  });

  result.sort((a, b) => a.id - b.id);
  return result;
}
