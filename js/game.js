var myCharacter = {
    name: 'Bianca',
    hitPoints: 100,
    class: 'Warrior',
    abilities: {
        attack: function(obj) {
            obj.hitPoints = obj.hitPoints - myCharacter.weapon.damage;
            console.log(obj.hitPoints);
        },
    },
    magicPoints: 0,
    weapon: {
        name: 'Silver Sabre',
        damage: 16,
        type: 'sword'
    }
}

var enemy = {
    name: 'Savage Orc',
    hitPoints: 100,
    class: 'Warrior',
    magicPoints: 0,
}

myCharacter.abilities.attack(enemy);