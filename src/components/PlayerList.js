import Player from './Player'

export default function PlayerList({ data }) {
  // console.log('playerlist: ',props)
  console.log('data: ', data)
  
  // const players = data.map(player => {
  //   return <p>{player.firstName}</p>
  // });
    return(
      <div>
        {/* {players} */}
        {data.map((player)=> {
          return<Player athlete={player}/>
        })}
      </div>
    )

  /*
    House all of the player comonents

    Take the array of players 
    Iterate over them 
    return a Player component for each player object 
  */
}