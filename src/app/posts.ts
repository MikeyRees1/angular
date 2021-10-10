export interface Post {[post: string]: {
  id: number, club: string, address: string, players: {
          id: number, name: string, age: number, gender: string
      }[]
  }[]
}

interface Station {[station: string]: {
  measures: Measures
}[]
}


interface Measures {[measures : string]:  { 
  id : string,
  parameter : string,
  parameterName : string,
  period : number,
  qualifier : string,
  unitName : string
}[]
}
 