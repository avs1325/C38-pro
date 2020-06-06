class Player{
    constructor(){
        this.index = null;
        this.distance1 = 0;
        this.distance2 = 0;
        this.distance3 = 0;
        this.distance4 = 0;

        this.height1 = 0
        this.height2 = 0
        this.height3 = 0
        this.height4 = 0

        this.name = null;
    }

    getCount(){
        var playerCountRef = database.ref('playerCount'); 
        playerCountRef.on("value", (data)=>{
            playerCount = data.val();
        })
    }

    updateCount(count){
        database.ref("/").update({
            playerCount : count
        })
    }

    update(){
        //var playerIndex = "players/player" + this.index;
        database.ref('players/player1').set({
            name : this.name,
            distance : plyrsDistance[0],
            height : plyrsHeight[0]
        })
        database.ref('players/player2').set({
            name : this.name,
            distance : plyrsDistance[1],
            height : plyrsHeight[1]
        })
        database.ref('players/player3').set({
            name : this.name,
            distance : plyrsDistance[2],
            height : plyrsHeight[2]
        })
        database.ref('players/player4').set({
            name : this.name,
            distance : plyrsDistance[3],
            height : plyrsHeight[3]
        })
    }

    get(){
        var player1CountRef = database.ref('players/player1/distance'); 
        player1CountRef.on("value", (data)=>{
            plyrsDistance[0] = data.val();
        })

        var player2CountRef = database.ref('players/player2/distance'); 
        player2CountRef.on("value", (data)=>{
            plyrsDistance[1] = data.val();
        })

        var player3CountRef = database.ref('players/player3/distance'); 
        player3CountRef.on("value", (data)=>{
            plyrsDistance[2] = data.val();
        })

        var player4CountRef = database.ref('players/player4/distance'); 
        player4CountRef.on("value", (data)=>{
            plyrsDistance[3] = data.val();
        })



        var player1heightRef = database.ref('players/player1/height'); 
        player1heightRef.on("value", (data)=>{
            plyrsHeight[0] = data.val();
        })

        var player2heightRef = database.ref('players/player2/height'); 
        player2heightRef.on("value", (data)=>{
            plyrsHeight[1] = data.val();
        })

        var player3heightRef = database.ref('players/player3/height'); 
        player3heightRef.on("value", (data)=>{
            plyrsHeight[2] = data.val();
        })

        var player4heightRef = database.ref('players/player4/height'); 
        player4heightRef.on("value", (data)=>{
            plyrsHeight[3] = data.val();
        })
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data)=>{
            allPlayers = data.val();
        })
    }
}