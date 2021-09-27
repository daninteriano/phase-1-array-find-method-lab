
function superbowlWin(record){
    const matchItem = record.find(function(list){
            return list.result === "W";
    })

    if (matchItem){
        return matchItem.year
    } else {
        return matchItem
    }

}

