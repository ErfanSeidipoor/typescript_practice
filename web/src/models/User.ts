import { Eventing } from './Eventing'
import { Sync } from "./Sync";
import { Attributes } from "./Attributes";
import { Model } from './Model'
import { Collection } from "./Collection";


export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users'

export class User extends Model<UserProps> {
	
	// constructor(data: UserProps) {
	// 	super(new Eventing(), new Sync(rootUrl), new Attributes(data))
	// }

	static from(data: UserProps) {
		return new User(new Eventing(), new Sync(rootUrl), new Attributes(data))
	}

	static buildOther(data: UserProps) {
		return new User(new Eventing(), new Sync(rootUrl), new Attributes(data))
	}

	isAdmin():boolean {
		return this.get("id")===0
	}

	static buildUserCollection() {
		return new Collection<User, UserProps>(rootUrl, this.from)
	}

	setRandomEdge(): number {
		const age = Math.round( Math.random()*100 )
		this.set({age})
		return age
	}
}