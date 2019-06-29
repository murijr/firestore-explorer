import * as firebase from "@firebase/testing";
import { Link, Movie, Rating, Tag } from "./models";
export declare const localMovies: Map<number, Movie>;
export declare const localLinks: Map<number, Link>;
export declare const localTags: Map<number, Tag[]>;
export declare const localRatings: Map<number, Rating[]>;
export declare const localMoviesJSON: Array<Movie>;
export declare const localLinksJSON: Array<Link>;
export declare const localTagsJSON: Array<Tag>;
export declare const localRatingsJSON: Array<Rating>;
export declare const loadLocalMovies: () => void;
export declare const loadLocalLinks: () => void;
export declare const loadLocalTags: () => void;
export declare const loadLocalRatings: () => void;
export declare const seedToFirebase: (
  firebaseApp: firebase.firestore.Firestore
) => void;
