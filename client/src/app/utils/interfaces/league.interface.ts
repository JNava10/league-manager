import { User } from "./user.interface";

export interface League {
  id?: number,
  name: string,
  description?: string
}

export interface LeagueMember {
  user: User
}

export interface LeagueRole {
  id: number,
  name: string
}

export interface NewMemberData {
  userId: number,
  leagueId: number
}

export interface IsMemberAdded {
  executed: boolean,
  message: string
}
