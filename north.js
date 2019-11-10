const pointedFingers = [
    {from:"Sarah", to:"Pat"},
    {from:"Johnny", to:"Tim"},
    {from:"Billy", to:"Tim"},
    {from:"Pat", to:"Tim"},
    {from:"Tim", to:"Johnny"},
    {from:"Wanda", to:"Johnny"},
    {from:"Johnny", to:"Pat"},
    {from:"Sarah", to:"Billy"},
    {from:"Johnny", to:"Wanda"}
    ]

    const whoIsBlamer = pointedFingers.reduce((Blamer, person) => {
        const {Sarah = 0, Pat = 0, Tim = 0, Johnny = 0, Billy=0, Wanda=0} = Blamer;
        if (person.from === 'Sarah') {
            return {...Blamer, Sarah: Sarah + 1};
        }else if (person.from === 'Pat') {
            return {...Blamer, Pat: Pat + 1};
        } else if (person.from === 'Tim') {
            return {...Blamer, Tim: Tim + 1};
        } else if(person.from ==='Johnny'){
            return {...Blamer, Johnny: Johnny + 1};
        } else if (person.from ==='Billy') {
            return {...Blamer, Billy: Billy + 1}
        }else{
            return {...Blamer, Wanda: Wanda + 1}
        }
    }, {});
    
    const whoIsToBlame = pointedFingers.reduce((Blamed, person) => {
        const {Pat = 0, Tim = 0, Johnny = 0, Billy=0, Wanda=0} = Blamed;
        if (person.to === 'Pat') {
            return {...Blamed, Pat: Pat + 2};
        } else if (person.to === 'Tim') {
            return {...Blamed, Tim: Tim + 2};
        } else if(person.to ==='Johnny'){
            return {...Blamed, Johnny: Johnny + 2};
        } else if (person.to ==='Billy') {
            return {...Blamed, Billy: Billy + 2}
        }else{
            return {...Blamed, Wanda: Wanda + 2}
        }
    }, {});
    
    console.log("Blamers count = " , whoIsBlamer);
    console.log("Blamed count = " , whoIsToBlame);
 