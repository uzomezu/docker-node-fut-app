
const db = require('./database');

beforeAll(async ()=>{
    await db.sequelize.sync({force: true});
});

test('create Player', async ()=>{
    expect.assertions(1);
    const Player = await db.Player.create({
        id: 1,
        firstName: "Luka",
        lastName: "Modric",
        position: "CAM",
        squadNumber: "10",
    });
    expect(Player.id).toEqual(1);
});

test('get player', async ()=>{
    expect.assertions(4);
    const player = await db.Player.findByPk(1);
    expect(player.firstName).toEqual('Luka');
    expect(player.lastName).toEqual("Modric");
    expect(player.position).toEqual("CAM");
    expect(player.squadNumber).toEqual("10");
    
});

test('delate Player', async () =>{
    expect.assertions(1);
    await db.Player.destroy({
        where: {
            id: 1
        }
    });
    const Player = await db.Player.findByPk(1);
    expect(Player).toBeNull();
})

afterAll(async ()=>{
    await db.sequelize.close();
});
