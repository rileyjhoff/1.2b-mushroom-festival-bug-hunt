export function addFriend(name,friendData) {
    const newFriend = {
        name: name || `Friend #${Math.floor(Math.random() * 1000)}`,
        satisfaction: 1
    };
    
    friendData.push(newFriend);
}

export function findFriendByName(name, friendData) {
    for (let friend of friendData) {
        if (friend.name === name) {
            return friend;
        }
    }
}