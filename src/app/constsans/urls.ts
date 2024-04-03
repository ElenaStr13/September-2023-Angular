import {environment} from "../../environments/environments.development";

const {API} = environment;

const cars = `${API}/cars`

const urls = {
  cars: {
    base: cars,
    byId: (id: number): string => `${cars}/${id}`
  }
}

export {
  urls
}
