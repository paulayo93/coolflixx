import { InMemoryDbService } from "angular-in-memory-web-api";
import { IMovies } from "../app/movies/movies";

export class MovieData implements InMemoryDbService {
  createDb() {
    const movies: IMovies[] = [
      {
        Title: "Baahubali: The Beginning",
        id: 1,
        Year: "2015",
        Rated: "Not Rated",
        Released: "09 Jul 2015",
        Runtime: "159 min",
        Genre: "Action, Drama",
        Director: "S.S. Rajamouli",
        Writer:
          "Vijayendra Prasad (story by), S.S. Rajamouli (screenplay by), C.H. Vijay Kumar (telugu dialogue), Ajay Kumar (telugu dialogue), Madhan Karky (tamil dialogue), Manoj Muntashir (hindi dialogue)",
        Actors: "Prabhas, Rana Daggubati, Ramya Krishnan, Sathyaraj",
        Plot:
          "When Sanga and her husband, part of a tribe living around the province of Mahismathi, save a drowning infant, little do they know the background of the infant or what the future holds for him. The kid grows up to as Shivudu, a free-spirit wanting to explore the mountains and in the process learns of his roots and then realizes the whole purpose of his life and ends up confronting the mighty Bhallala Deva!",
        Language: "Telugu, Tamil, Hindi",
        Country: "India",
        Awards: "22 wins & 12 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYWVlMjVhZWYtNWViNC00ODFkLTk1MmItYjU1MDY5ZDdhMTU3XkEyXkFqcGdeQXVyODIwMDI1NjM@.jpg",
        imdbRating: "6.9"
      },
      {
        id: 2,
        Title: "Girls Trip",
        Year: "2017",
        Rated: "R",
        Released: "21 Jul 2017",
        Runtime: "122 min",
        Genre: "Adventure, Comedy, Drama",
        Director: "Malcolm D. Lee",
        Writer:
          "Erica Rivinoja (story by), Kenya Barris (story by), Tracy Oliver (story by), Kenya Barris (screenplay by), Tracy Oliver (screenplay by)",
        Actors:
          "Regina Hall, Queen Latifah, Jada Pinkett Smith, Tiffany Haddish",
        Plot:
          "When four lifelong friends travel to New Orleans for the annual Essence Festival, sisterhoods are rekindled, wild sides are rediscovered, and there's enough dancing, drinking, brawling, and romancing to make the Big Easy blush.",
        Language: "English",
        Country: "USA, Canada",
        Awards: "10 wins & 32 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjMwNTEzODUwMV5BMl5BanBnXkFtZTgwNjE5NjA5MjI@.jpg",
        imdbRating: "6.9"
      },
      {
        id: 3,
        Title: "The Boss Baby",
        Year: "2017",
        Rated: "PG",
        Released: "31 Mar 2017",
        Runtime: "97 min",
        Genre: "Animation, Adventure, Comedy, Family, Fantasy",
        Director: "Tom McGrath",
        Writer: "Michael McCullers, Marla Frazee (based on the book by)",
        Actors: "Alec Baldwin, Steve Buscemi, Jimmy Kimmel, Lisa Kudrow",
        Plot:
          "Seven-year-old Tim Templeton has always been a boy of an overactive imagination, and for the past seven years, life was all peaches for him, getting all the love and affection from his caring parents. However, life will never be the same and Tim won't be the centre of attention anymore as the arrival of an improbable new brother named Boss Baby, dressed in a black suit complete with a tie and a briefcase, will shortly rob him of all love, as he takes over the whole Templetons' house. Nevertheless, although this may be true, soon, Tim and the new Boss in a diaper will need to put differences aside and join forces, as a sneaky scheme involving the head of Puppy Co. threatens to tilt the balance of power towards their insidiously adorable furry antagonists, not to mention that the next Pet Convention is in only two days.. Brothers, hurry up.",
        Language: "English, Spanish",
        Country: "USA",
        Awards: "Nominated for 1 Oscar. Another 1 win & 19 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTg5MzUxNzgxNV5BMl5BanBnXkFtZTgwMTM2NzQ3MjI@.jpg",
        imdbRating: "6.9"
      },
      {
        id: 4,
        Title: "Game Night",
        Year: "2018",
        Rated: "R",
        Released: "23 Feb 2018",
        Runtime: "100 min",
        Genre: "Action, Comedy, Crime, Mystery",
        Director: "John Francis Daley, Jonathan Goldstein",
        Writer: "Mark Perez",
        Actors: "Jason Bateman, Rachel McAdams, Kyle Chandler, Sharon Horgan",
        Plot:
          "A group of friends who meet regularly for game nights find themselves entangled in a real-life mystery when the shady brother of one of them is seemingly kidnapped by dangerous gangsters.",
        Language: "English",
        Country: "USA",
        Awards: "N/A",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjI3ODkzNDk5MF5BMl5BanBnXkFtZTgwNTEyNjY2NDM@.jpg",
        imdbRating: "6.9"
      },
      {
        id: 5,
        Title: "Blockers",
        Year: "2018",
        Rated: "R",
        Released: "06 Apr 2018",
        Runtime: "102 min",
        Genre: "Comedy",
        Director: "Kay Cannon",
        Writer: "Brian Kehoe, Jim Kehoe",
        Actors: "Leslie Mann, John Cena, Ike Barinholtz, Kathryn Newton",
        Plot:
          "Three parents try to stop their daughters from losing their virginity on prom night.",
        Language: "English",
        Country: "USA",
        Awards: "1 nomination.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjE0ODIzNjkzMl5BMl5BanBnXkFtZTgwODQ3MzU4NDM@.jpg",
        imdbRating: "6.9"
      },
      {
        id: 6,
        Title: "Deadpool",
        Year: "2016",
        Rated: "R",
        Released: "12 Feb 2016",
        Runtime: "108 min",
        Genre: "Action, Adventure, Comedy, Sci-Fi",
        Director: "Tim Miller",
        Writer: "Rhett Reese, Paul Wernick",
        Actors: "Ryan Reynolds, Karan Soni, Ed Skrein, Michael Benyaer",
        Plot:
          "This is the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
        Language: "English",
        Country: "USA",
        Awards:
          "Nominated for 2 Golden Globes. Another 27 wins & 73 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@.jpg",
        imdbRating: "6.9"
      },
      {
        id: 7,
        Title: "Life of the Party",
        Year: "2018",
        Rated: "PG-13",
        Released: "11 May 2018",
        Runtime: "105 min",
        Genre: "Comedy",
        Director: "Ben Falcone",
        Writer: "Melissa McCarthy, Ben Falcone",
        Actors: "Melissa McCarthy, Matt Walsh, Molly Gordon, Ben Falcone",
        Plot:
          "After her husband abruptly asks for a divorce, a middle-aged mother returns to college in order to complete her degree.",
        Language: "English",
        Country: "USA",
        Awards: "N/A",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTkzOTk0MjYwM15BMl5BanBnXkFtZTgwNTE5ODQxNTM@.jpg",
        imdbRating: "6.9"
      },
      {
        id: 8,
        Title: "Crazy Rich Asians",
        Year: "2018",
        Rated: "PG-13",
        Released: "15 Aug 2018",
        Runtime: "120 min",
        Genre: "Comedy, Drama, Romance",
        Director: "Jon M. Chu",
        Writer:
          'Peter Chiarelli (screenplay by), Adele Lim (screenplay by), Kevin Kwan (based on the novel "Crazy Rich Asians" by)',
        Actors: "Constance Wu, Henry Golding, Michelle Yeoh, Gemma Chan",
        Plot:
          "This contemporary romantic comedy, based on a global bestseller, follows native New Yorker Rachel Chu to Singapore to meet her boyfriend's family.",
        Language: "English, Mandarin, Cantonese, Hokkien, French, Malay",
        Country: "USA",
        Awards: "N/A",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTYxNDMyOTAxN15BMl5BanBnXkFtZTgwMDg1ODYzNTM@.jpg",

        imdbRating: "6.9"
      },
      {
        id: 9,
        Title: "Dirty Grandpa",
        Year: "2016",
        Rated: "R",
        Released: "22 Jan 2016",
        Runtime: "102 min",
        Genre: "Comedy",
        Director: "Dan Mazer",
        Writer: "John Phillips",
        Actors: "Robert De Niro, Zac Efron, Zoey Deutch, Aubrey Plaza",
        Plot:
          "Jason Kelly, the grandson of Dick Kelly, loses his grandmother about two weeks before his wedding to Meredith. He tries to assist his grandfather and console him for his loss, but was rather tricked into a spring break road trip; chasing youth once again. with the help of Shadia and Lenore, the two men go on an adventure they'll never forget.",
        Language: "English",
        Country: "USA",
        Awards: "2 wins & 11 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMzk0NzkyNDk2M15BMl5BanBnXkFtZTgwNDczOTU3NzE@.jpg",

        imdbRating: "5.9"
      },
      {
        id: 10,
        Title: "Bad Moms",
        Year: "2016",
        Rated: "R",
        Released: "29 Jul 2016",
        Runtime: "100 min",
        Genre: "Comedy",
        Director: "Jon Lucas, Scott Moore",
        Writer: "Jon Lucas, Scott Moore",
        Actors: "Mila Kunis, Kathryn Hahn, Kristen Bell, Christina Applegate",
        Plot:
          "Amy has a seemingly perfect life - a great marriage, over-achieving kids, a beautiful home and a career. However, she's overworked, over-committed and exhausted to the point that she's about to snap. Fed up, she joins forces with two other over-stressed moms on a quest to liberate themselves from conventional responsibilities - going on a wild, un-mom-like binge of long overdue freedom, fun and self-indulgence - putting them on a collision course with PTA Queen Bee Gwendolyn and her clique of devoted perfect moms.",
        Language: "English",
        Country: "USA",
        Awards: "3 wins & 5 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjIwNzE5MTgwNl5BMl5BanBnXkFtZTgwNjM4OTA0OTE@.jpg",

        imdbRating: "6.2"
      },
      {
        id: 11,
        Title: "Central Intelligence",
        Year: "2016",
        Rated: "PG-13",
        Released: "17 Jun 2016",
        Runtime: "107 min",
        Genre: "Action, Comedy, Crime",
        Director: "Rawson Marshall Thurber",
        Writer:
          "Ike Barinholtz (screenplay), David Stassen (screenplay), Rawson Marshall Thurber (screenplay), Ike Barinholtz (story), David Stassen (story)",
        Actors: "Dwayne Johnson, Kevin Hart, Amy Ryan, Danielle Nicolet",
        Plot:
          "Calvin Joyner was voted in high school the guy most likely to succeed. 20 years later he's an accountant. As his high school reunion approaches, he tries to make contact with his old schoolmates. And someone named Bob Stone contacts him. He says that he was known as Robbie Weirdicht in school. Calvin remembers that he was picked on, as a matter of fact after an extremely nasty prank he left school. They agree to meet and Calvin is surprised by how much he has changed. Bob asks Calvin to help him out. He says yes and the next thing he knows some men burst into his home. They're CIA, the one in charge is looking for Stone, she says he's a rogue agent. When they can't find Bob they leave. Later he approaches Calvin telling him, he is not a rogue agent, he's trying to find a person known as the Black Badger who is planning to sell some information that in the wrong hands can be disastrous. so he needs Calvin's help to stop him. Calvin's not sure whom he should believe.",
        Language: "English",
        Country: "USA, China",
        Awards: "2 wins & 8 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjA2NzEzNjIwNl5BMl5BanBnXkFtZTgwNzgwMTEzNzE@.jpg",

        imdbRating: "6.3"
      },
      {
        id: 12,
        Title: "Dunkirk",
        Year: "2017",
        Rated: "PG-13",
        Released: "21 Jul 2017",
        Runtime: "106 min",
        Genre: "Action, Drama, History, Thriller, War",
        Director: "Christopher Nolan",
        Writer: "Christopher Nolan",
        Actors:
          "Fionn Whitehead, Damien Bonnard, Aneurin Barnard, Lee Armstrong",
        Plot:
          "Evacuation of Allied soldiers from Belgium, the British Empire, and France, who were cut off and surrounded by the German army from the beaches and harbor of Dunkirk, France, between May 26- June 04, 1940, during Battle of France in World War II.",
        Language: "English, French, German",
        Country: "UK, Netherlands, France, USA",
        Awards: "Won 3 Oscars. Another 51 wins & 197 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@.jpg",

        imdbRating: "7.9"
      },
      {
        id: 13,
        Title: "Gravity",
        Year: "2013",
        Rated: "PG-13",
        Released: "04 Oct 2013",
        Runtime: "91 min",
        Genre: "Drama, Sci-Fi, Thriller",
        Director: "Alfonso Cuarón",
        Writer: "Alfonso Cuarón, Jonás Cuarón",
        Actors: "Sandra Bullock, George Clooney, Ed Harris, Orto Ignatiussen",
        Plot:
          "Dr. Ryan Stone (Sandra Bullock) is a brilliant medical engineer on her first shuttle mission, with veteran astronaut Matt Kowalski (George Clooney) in command of his last flight before retiring. But on a seemingly routine spacewalk, disaster strikes. The shuttle is destroyed, leaving Stone and Kowalsky completely alone - tethered to nothing but each other and spiraling out into the blackness.",
        Language: "English, Greenlandic",
        Country: "UK, USA",
        Awards: "Won 7 Oscars. Another 232 wins & 175 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNjE5MzYwMzYxMF5BMl5BanBnXkFtZTcwOTk4MTk0OQ@@.jpg",

        imdbRating: "7.7"
      },
      {
        id: 14,
        Title: "A Star Is Born",
        Year: "2018",
        Rated: "R",
        Released: "05 Oct 2018",
        Runtime: "136 min",
        Genre: "Drama, Music, Romance",
        Director: "Bradley Cooper",
        Writer:
          "Eric Roth (screenplay by), Bradley Cooper (screenplay by), Will Fetters (screenplay by), Moss Hart (based on the 1954 screenplay by), John Gregory Dunne (based on the 1976 screenplay by), Joan Didion (based on the 1976 screenplay by), Frank Pierson (based on the 1976 screenplay by), William A. Wellman (based on a story by), Robert Carson (based on a story by)",
        Actors: "Lady Gaga, Bradley Cooper, Sam Elliott, Andrew Dice Clay",
        Plot:
          "Jackson Maine (Cooper), a country music star on the brink of decline, discovers a talented unknown named Ally (Germanotta). As the two begin a passionate love affair, Jackson coaxes Ally into the spotlight, catapulting her to stardom. But as Ally's career quickly eclipses his own, Jack finds it increasingly hard to handle his fading glory.",
        Language: "English",
        Country: "USA",
        Awards: "1 nomination.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNmE5ZmE3OGItNTdlNC00YmMxLWEzNjctYzAwOGQ5ODg0OTI0XkEyXkFqcGdeQXVyMTMxODk2OTU@.jpg",

        imdbRating: "7.7"
      },
      {
        id: 15,
        Title: "Roma",
        Year: "2018",
        Rated: "R",
        Released: "21 Nov 2018",
        Runtime: "135 min",
        Genre: "Drama",
        Director: "Alfonso Cuarón",
        Writer: "Alfonso Cuarón",
        Actors:
          "Yalitza Aparicio, Marina de Tavira, Diego Cortina Autrey, Carlos Peralta",
        Plot:
          "A year in the life of a middle-class family's maid in Mexico City in the early 1970s.",
        Language:
          "Spanish, Mixtec, English, Japanese, German, French, Norwegian",
        Country: "USA",
        Awards: "N/A",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTU0OTc3ODk4Ml5BMl5BanBnXkFtZTgwMzM4NzI5NjM@.jpg",

        imdbRating: "7.8"
      },
      {
        id: 16,
        Title: "The Hate U Give",
        Year: "2018",
        Rated: "PG-13",
        Released: "19 Oct 2018",
        Runtime: "133 min",
        Genre: "Crime, Drama",
        Director: "George Tillman Jr.",
        Writer:
          "Audrey Wells (screenplay by), Angie Thomas (based upon the novel by)",
        Actors:
          "Amandla Stenberg, Regina Hall, Russell Hornsby, Anthony Mackie",
        Plot:
          "Starr witnesses the fatal shooting of her childhood best friend Khalil at the hands of a police officer. Now, facing pressure from all sides of the community, Starr must find her voice and stand up for what's right.",
        Language: "English",
        Country: "USA",
        Awards: "N/A",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZDVkMWJiMzUtNjQyOS00MGVmLWJhYmMtN2IxYzU4MjY3MDRmXkEyXkFqcGdeQXVyNzA5NjIzODk@.jpg",

        imdbRating: "7.3"
      },
      {
        id: 17,
        Title: "The Gift",
        Year: "2015",
        Rated: "R",
        Released: "07 Aug 2015",
        Runtime: "108 min",
        Genre: "Drama, Mystery, Thriller",
        Director: "Joel Edgerton",
        Writer: "Joel Edgerton",
        Actors: "Jason Bateman, Rebecca Hall, Joel Edgerton, Allison Tolman",
        Plot:
          "Simon and Robyn are a young married couple whose life is going just as planned until a chance encounter with an acquaintance from Simon's high school sends their world into a harrowing tailspin. Simon doesn't recognize Gordo at first, but after a series of uninvited encounters and mysterious gifts prove troubling, a horrifying secret from the past is uncovered after more than 20 years. As Robyn learns the unsettling truth about what happened between Simon and Gordo, she starts to question: how well do we really know the people closest to us, and are past bygones ever really bygones?",
        Language: "English",
        Country: "USA, Australia, China",
        Awards: "2 wins & 12 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTQzMjM2NjM1Nl5BMl5BanBnXkFtZTgwMDM1MjQyNTE@.jpg",

        imdbRating: "7.0"
      },
      {
        id: 18,
        Title: "The Shape of Water",
        Year: "2017",
        Rated: "R",
        Released: "22 Dec 2017",
        Runtime: "123 min",
        Genre: "Adventure, Drama, Fantasy, Romance, Thriller",
        Director: "Guillermo del Toro",
        Writer:
          "Guillermo del Toro (screenplay by), Vanessa Taylor (screenplay by), Guillermo del Toro (story by)",
        Actors:
          "Sally Hawkins, Michael Shannon, Richard Jenkins, Octavia Spencer",
        Plot:
          "At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.",
        Language: "English, American Sign Language, Russian, French",
        Country: "USA",
        Awards: "Won 4 Oscars. Another 101 wins & 293 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNGNiNWQ5M2MtNGI0OC00MDA2LWI5NzEtMmZiYjVjMDEyOWYzXkEyXkFqcGdeQXVyMjM4NTM5NDY@.jpg",

        imdbRating: "7.3"
      },
      {
        id: 19,
        Title: "Me Before You",
        Year: "2016",
        Rated: "PG-13",
        Released: "03 Jun 2016",
        Runtime: "106 min",
        Genre: "Drama, Romance",
        Director: "Thea Sharrock",
        Writer:
          "Jojo Moyes (based on the novel by), Jojo Moyes (screenplay by)",
        Actors: "Sam Claflin, Vanessa Kirby, Emilia Clarke, Eileen Dunwoodie",
        Plot:
          "Lou Clark knows lots of things. She knows how many footsteps there are between the bus stop and home. She knows she likes working in The Buttered Bun tea shop and she knows she might not love her boyfriend Patrick. What Lou doesn't know is she's about to lose her job or that knowing what's coming is what keeps her sane. Will Traynor knows his motorcycle accident took away his desire to live. He knows everything feels very small and rather joyless now and he knows exactly how he's going to put a stop to that. What Will doesn't know is that Lou is about to burst into his world in a riot of color. And neither of them knows they're going to change each other for all time.",
        Language: "English, French",
        Country: "UK, USA",
        Awards: "6 wins & 6 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTQ2NjE4NDE2NV5BMl5BanBnXkFtZTgwOTcwNDE5NzE@.jpg",

        imdbRating: "7.4"
      },
      {
        id: 20,
        Title: "La La Land",
        Year: "2016",
        Rated: "PG-13",
        Released: "25 Dec 2016",
        Runtime: "128 min",
        Genre: "Comedy, Drama, Music, Musical, Romance",
        Director: "Damien Chazelle",
        Writer: "Damien Chazelle",
        Actors: "Ryan Gosling, Emma Stone, Amiée Conn, Terry Walters",
        Plot:
          "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
        Language: "English",
        Country: "USA, Hong Kong",
        Awards: "Won 6 Oscars. Another 215 wins & 254 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@.jpg",

        imdbRating: "8.0"
      },
      {
        id: 21,
        Title: "Moonlight",
        Year: "2016",
        Rated: "R",
        Released: "18 Nov 2016",
        Runtime: "111 min",
        Genre: "Drama",
        Director: "Barry Jenkins",
        Writer:
          "Barry Jenkins (screenplay by), Tarell Alvin McCraney (story by)",
        Actors: "Mahershala Ali, Shariff Earp, Duan Sanderson, Alex R. Hibbert",
        Plot:
          "Three time periods - young adolescence, mid-teen and young adult - in the life of black-American Chiron is presented. When a child, Chiron lives with his single, crack addict mother Paula in a crime ridden neighborhood in Miami. Chiron is a shy, withdrawn child largely due to his small size and being neglected by his mother, who is more concerned about getting her fixes and satisfying her carnal needs than taking care of him. Because of these issues, Chiron is bullied, the slurs hurled at him which he doesn't understand beyond knowing that they are meant to be hurtful. Besides his same aged Cuban-American friend Kevin, Chiron is given what little guidance he has in life from a neighborhood drug dealer named Juan, who can see that he is neglected, and Juan's caring girlfriend Teresa, whose home acts as a sanctuary away from the bullies and away from Paula's abuse. With this childhood as a foundation, Chiron may have a predetermined path in life, one that will only be magnified in terms of its problems when he reaches his difficult teen years when peer pressure affects what he and many of his peers do, unless he follows Juan's advice of truly making his own decisions for himself.",
        Language: "English",
        Country: "USA",
        Awards: "Won 3 Oscars. Another 220 wins & 270 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNzQxNTIyODAxMV5BMl5BanBnXkFtZTgwNzQyMDA3OTE@.jpg",

        imdbRating: "7.4"
      },
      {
        id: 22,
        Title: "Room",
        Year: "2015",
        Rated: "R",
        Released: "22 Jan 2016",
        Runtime: "118 min",
        Genre: "Drama, Thriller",
        Director: "Lenny Abrahamson",
        Writer:
          "Emma Donoghue (screenplay by), Emma Donoghue (based on the novel by)",
        Actors: "Brie Larson, Jacob Tremblay, Sean Bridgers, Wendy Crewson",
        Plot:
          "ROOM tells the extraordinary story of Jack, a spirited 5-year-old who is looked after by his loving and devoted mother. Like any good mother, Ma dedicates herself to keeping Jack happy and safe, nurturing him with warmth and love and doing typical things like playing games and telling stories. Their life, however, is anything but typical--they are trapped--confined to a 10-by-10-foot space that Ma has euphemistically named Room. Ma has created a whole universe for Jack within Room, and she will stop at nothing to ensure that, even in this treacherous environment, Jack is able to live a complete and fulfilling life. But as Jack's curiosity about their situation grows, and Ma's resilience reaches its breaking point, they enact a risky plan to escape, ultimately bringing them face-to-face with what may turn out to be the scariest thing yet: the real world.",
        Language: "English",
        Country: "Ireland, Canada, UK, USA",
        Awards: "Won 1 Oscar. Another 103 wins & 136 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjE4NzgzNzEwMl5BMl5BanBnXkFtZTgwMTMzMDE0NjE@.jpg",

        imdbRating: "8.2"
      },
      {
        id: 23,
        Title: "Creed",
        Year: "2015",
        Rated: "PG-13",
        Released: "25 Nov 2015",
        Runtime: "133 min",
        Genre: "Drama, Sport",
        Director: "Ryan Coogler",
        Writer:
          "Ryan Coogler (screenplay by), Aaron Covington (screenplay by), Ryan Coogler (story by), Sylvester Stallone (based on characters created by)",
        Actors:
          "Michael B. Jordan, Sylvester Stallone, Tessa Thompson, Phylicia Rashad",
        Plot:
          "Adonis Johnson is the son of the famous boxing champion Apollo Creed, who died in a boxing match in Rocky IV (1985). Adonis wasn't born until after his father's death and wants to follow his fathers footsteps in boxing. He seeks a mentor who is the former heavyweight boxing champion and former friend of Apollo Creed, the retired Rocky Balboa. Rocky eventually agrees to mentor Adonis. With Rocky's help they hope to get a title job to face even deadlier opponents than his father. But whether he is a true fighter remains to be seen....",
        Language: "English, Spanish",
        Country: "USA",
        Awards: "Nominated for 1 Oscar. Another 46 wins & 61 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BODg5NDM1MDI4NF5BMl5BanBnXkFtZTgwMzg0MzQxNzE@.jpg",

        imdbRating: "7.6"
      },
      {
        id: 24,
        Title: "The Revenant",
        Year: "2015",
        Rated: "R",
        Released: "08 Jan 2016",
        Runtime: "156 min",
        Genre: "Action, Adventure, Biography, Drama, Western",
        Director: "Alejandro G. Iñárritu",
        Writer:
          "Mark L. Smith (screenplay), Alejandro G. Iñárritu (screenplay), Michael Punke (based in part on the novel by)",
        Actors: "Leonardo DiCaprio, Tom Hardy, Domhnall Gleeson, Will Poulter",
        Plot:
          "While exploring the uncharted wilderness in 1823, legendary frontiersman Hugh Glass sustains injuries from a brutal bear attack. When his hunting team leaves him for dead, Glass must utilize his survival skills to find a way back home while avoiding natives on their own hunt. Grief-stricken and fueled by vengeance, Glass treks through the wintry terrain to track down John Fitzgerald, the former confidant who betrayed and abandoned him.",
        Language: "English, Pawnee, French",
        Country: "USA, Hong Kong, Taiwan",
        Awards: "Won 3 Oscars. Another 86 wins & 181 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@.jpg",

        imdbRating: "8.0"
      },
      {
        id: 25,
        Title: "The Martian",
        Year: "2015",
        Rated: "PG-13",
        Released: "02 Oct 2015",
        Runtime: "144 min",
        Genre: "Adventure, Drama, Sci-Fi",
        Director: "Ridley Scott",
        Writer:
          "Drew Goddard (screenplay by), Andy Weir (based on the novel by)",
        Actors: "Matt Damon, Jessica Chastain, Kristen Wiig, Jeff Daniels",
        Plot:
          'During a manned mission to Mars, Astronaut Mark Watney is presumed dead after a fierce storm and left behind by his crew. But Watney has survived and finds himself stranded and alone on the hostile planet. With only meager supplies, he must draw upon his ingenuity, wit and spirit to subsist and find a way to signal to Earth that he is alive. Millions of miles away, NASA and a team of international scientists work tirelessly to bring "the Martian" home, while his crewmates concurrently plot a daring, if not impossible, rescue mission. As these stories of incredible bravery unfold, the world comes together to root for Watney\'s safe return.',
        Language: "English, Mandarin",
        Country: "UK, USA, Hungary",
        Awards: "Nominated for 7 Oscars. Another 37 wins & 185 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@.jpg",

        imdbRating: "8.0"
      },
      {
        id: 26,
        Title: "Concussion",
        Year: "2015",
        Rated: "PG-13",
        Released: "25 Dec 2015",
        Runtime: "123 min",
        Genre: "Biography, Drama, Sport",
        Director: "Peter Landesman",
        Writer:
          'Peter Landesman, Jeanne Marie Laskas (based on the GQ article "Game Brain" by)',
        Actors: "Will Smith, Alec Baldwin, Albert Brooks, Gugu Mbatha-Raw",
        Plot:
          "Will Smith stars in Concussion, a dramatic thriller based on the incredible true David vs. Goliath story of American immigrant Dr. Bennet Omalu, the brilliant forensic neuropathologist who made the first discovery of CTE, a football-related brain trauma, in a pro player and fought for the truth to be known. Omalu's emotional quest puts him at dangerous odds with one of the most powerful institutions in the world.",
        Language: "English",
        Country: "UK, Australia, USA",
        Awards:
          "Nominated for 1 Golden Globe. Another 4 wins & 15 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTYwNjgwNDg0NV5BMl5BanBnXkFtZTgwMzY1MjAyNzE@.jpg",

        imdbRating: "7.1"
      },
      {
        id: 27,
        Title: "Halloween",
        Year: "2018",
        Rated: "R",
        Released: "19 Oct 2018",
        Runtime: "106 min",
        Genre: "Horror, Thriller",
        Director: "David Gordon Green",
        Writer:
          "John Carpenter (based on characters created by), Debra Hill (based on characters created by), Jeff Fradley, Danny McBride, David Gordon Green",
        Actors:
          "Jamie Lee Curtis, Judy Greer, Andi Matichak, James Jude Courtney",
        Plot:
          "The now 18-year-old child of one of Myers' victims plays a central role along with the child of a cop whose long been obsessed with Myers' case, even putting it before his own daughter. Myers is now on death row and the two kids with their own personal vendettas against the killer sneak in to watch his execution. But when things go awry and Myers escapes, the pair, along with their friends, find themselves in the firing line.",
        Language: "English",
        Country: "USA",
        Awards: "N/A",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMmMzNjJhYjUtNzFkZi00MWQ4LWJiMDEtYWM0NTAzNGZjMTI3XkEyXkFqcGdeQXVyOTE2OTMwNDk@.jpg",

        imdbRating: "6.6"
      },
      {
        id: 28,
        Title: "The Nun",
        Year: "2018",
        Rated: "R",
        Released: "07 Sep 2018",
        Runtime: "96 min",
        Genre: "Horror, Mystery, Thriller",
        Director: "Corin Hardy",
        Writer:
          "Gary Dauberman (screenplay by), James Wan (story by), Gary Dauberman (story by)",
        Actors: "Demián Bichir, Taissa Farmiga, Jonas Bloquet, Bonnie Aarons",
        Plot:
          "A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun.",
        Language: "English, French, Romanian, Latin",
        Country: "USA",
        Awards: "N/A",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjM3NzQ5NDcxOF5BMl5BanBnXkFtZTgwNzM4MTQ5NTM@.jpg",

        imdbRating: "5.4"
      },
      {
        id: 29,
        Title: "The Conjuring",
        Year: "2013",
        Rated: "R",
        Released: "19 Jul 2013",
        Runtime: "112 min",
        Genre: "Horror, Mystery, Thriller",
        Director: "James Wan",
        Writer: "Chad Hayes, Carey W. Hayes",
        Actors: "Vera Farmiga, Patrick Wilson, Lili Taylor, Ron Livingston",
        Plot:
          "In 1971, Carolyn and Roger Perron move their family into a dilapidated Rhode Island farm house and soon strange things start happening around it with escalating nightmarish terror. In desperation, Carolyn contacts the noted paranormal investigators, Ed and Lorraine Warren, to examine the house. What the Warrens discover is a whole area steeped in a satanic haunting that is now targeting the Perron family wherever they go. To stop this evil, the Warrens will have to call upon all their skills and spiritual strength to defeat this spectral menace at its source that threatens to destroy everyone involved.",
        Language: "English, Latin",
        Country: "USA",
        Awards: "15 wins & 22 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@.jpg",

        imdbRating: "7.5"
      },
      {
        id: 30,
        Title: "A Quiet Place",
        Year: "2018",
        Rated: "PG-13",
        Released: "06 Apr 2018",
        Runtime: "90 min",
        Genre: "Drama, Horror, Sci-Fi",
        Director: "John Krasinski",
        Writer:
          "Bryan Woods (screenplay by), Scott Beck (screenplay by), John Krasinski (screenplay by), Bryan Woods (story by), Scott Beck (story by)",
        Actors: "Emily Blunt, John Krasinski, Millicent Simmonds, Noah Jupe",
        Plot:
          "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.",
        Language: "English, American Sign Language",
        Country: "USA",
        Awards: "N/A",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@.jpg",

        imdbRating: "7.5"
      },
      {
        id: 31,
        Title: "Annabelle",
        Year: "2014",
        Rated: "R",
        Released: "03 Oct 2014",
        Runtime: "99 min",
        Genre: "Horror, Mystery, Thriller",
        Director: "John R. Leonetti",
        Writer: "Gary Dauberman",
        Actors: "Annabelle Wallis, Ward Horton, Tony Amendola, Alfre Woodard",
        Plot:
          "John Form has found the perfect gift for his expectant wife, Mia - a beautiful, rare vintage doll in a pure white wedding dress. But Mia's delight with Annabelle doesn't last long. On one horrific night, their home is invaded by members of a satanic cult, who violently attack the couple. Spilled blood and terror are not all they leave behind. The cultists have conjured an entity so malevolent that nothing they did will compare to the sinister conduit to the damned that is now... Annabelle.",
        Language: "English",
        Country: "USA",
        Awards: "3 wins & 7 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BOTQwZmQyYzEtODk5ZC00OTY3LWExMjAtYzRjNWFhNGM3MzBlXkEyXkFqcGdeQXVyNTIzOTk5ODM@.jpg",

        imdbRating: "5.4"
      },
      {
        id: 32,
        Title: "Truth or Dare",
        Year: "2018",
        Rated: "PG-13",
        Released: "13 Apr 2018",
        Runtime: "100 min",
        Genre: "Horror, Thriller",
        Director: "Jeff Wadlow",
        Writer:
          "Michael Reisz (screenplay by), Jillian Jacobs (screenplay by), Christopher Roach (screenplay by), Jeff Wadlow (screenplay by), Michael Reisz (story by)",
        Actors: "Lucy Hale, Tyler Posey, Violett Beane, Hayden Szeto",
        Plot:
          "A harmless game of Truth or Dare among friends turns deadly when someone -- or something -- begins to punish those who tell a lie or refuse the dare.",
        Language: "English, Spanish",
        Country: "USA",
        Awards: "N/A",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BOGU2YTZmMjYtZDUwYi00NTc1LTlkMjAtM2ViZDkzOTlhNGNhXkEyXkFqcGdeQXVyMTMxODk2OTU@.jpg",

        imdbRating: "5.1"
      },
      {
        id: 33,
        Title: "Don't Breathe",
        Year: "2016",
        Rated: "R",
        Released: "26 Aug 2016",
        Runtime: "88 min",
        Genre: "Crime, Horror, Thriller",
        Director: "Fede Alvarez",
        Writer: "Fede Alvarez, Rodo Sayagues",
        Actors: "Stephen Lang, Jane Levy, Dylan Minnette, Daniel Zovatto",
        Plot:
          "Rocky, a young woman wanting to start a better life for her and her sister, agrees to take part in the robbery of a house owned by a wealthy blind man with her boyfriend Money and their friend Alex. But when the blind man turns out to be a more ruthless adversary than he seems, the group must find a way to escape his home before they become his latest victims.",
        Language: "English",
        Country: "USA, Hungary",
        Awards: "7 wins & 21 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZGI5ZTU2M2YtZWY4MC00ZDFhLTliYTItZTk1NjdlN2NkMzg2XkEyXkFqcGdeQXVyMjY5ODI4NDk@.jpg",

        imdbRating: "7.1"
      },
      {
        id: 34,
        Title: "It",
        Year: "2017",
        Rated: "R",
        Released: "08 Sep 2017",
        Runtime: "135 min",
        Genre: "Horror",
        Director: "Andy Muschietti",
        Writer:
          "Chase Palmer (screenplay by), Cary Joji Fukunaga (screenplay by), Gary Dauberman (screenplay by), Stephen King (based on the novel by)",
        Actors:
          "Jaeden Martell, Jeremy Ray Taylor, Sophia Lillis, Finn Wolfhard",
        Plot:
          "In the Town of Derry, the local kids are disappearing one by one, leaving behind bloody remains. In a place known as 'The Barrens', a group of seven kids are united by their horrifying and strange encounters with an evil clown and their determination to kill It.",
        Language: "English",
        Country: "USA, Canada",
        Awards: "4 wins & 30 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@.jpg",

        imdbRating: "7.4"
      },
      {
        id: 35,
        Title: "The Purge",
        Year: "2013",
        Rated: "R",
        Released: "07 Jun 2013",
        Runtime: "85 min",
        Genre: "Horror, Thriller",
        Director: "James DeMonaco",
        Writer: "James DeMonaco",
        Actors: "Ethan Hawke, Lena Headey, Max Burkholder, Adelaide Kane",
        Plot:
          "In an America wracked by crime and overcrowded prisons, the government has sanctioned an annual 12-hour period in which any and all criminal activity-including murder-becomes legal. The police can't be called. Hospitals suspend help. It's one night when the citizenry regulates itself without thought of punishment. On this night plagued by violence and an epidemic of crime, one family wrestles with the decision of who they will become when a stranger comes knocking. When an intruder breaks into James Sandin's (Ethan Hawke) gated community during the yearly lockdown, he begins a sequence of events that threatens to tear a family apart. Now, it is up to James, his wife, Mary (Lena Headey), and their kids to make it through the night without turning into the monsters from whom they hide.",
        Language: "English",
        Country: "USA, France",
        Awards: "1 win & 6 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTQzNTcwODEyM15BMl5BanBnXkFtZTcwMjM1MDI0OQ@@.jpg",
        

        imdbRating: "5.7"
      },
      {
        id: 36,
        Title: "Resident Evil: The Final Chapter",
        Year: "2016",
        Rated: "R",
        Released: "27 Jan 2017",
        Runtime: "107 min",
        Genre: "Action, Horror, Sci-Fi, Thriller",
        Director: "Paul W.S. Anderson",
        Writer: "Paul W.S. Anderson",
        Actors: "Milla Jovovich, Iain Glen, Ali Larter, Shawn Roberts",
        Plot:
          "Picking up immediately after the events in Resident Evil: Retribution, Alice (Milla Jovovich) is the only survivor of what was meant to be humanity's final stand against the undead. Now, she must return to where the nightmare began - The Hive in Raccoon City, where the Umbrella Corporation is gathering its forces for a final strike against the only remaining survivors of the apocalypse.",
        Language: "English",
        Country:
          "USA, Germany, France, Canada, South Africa, Australia, UK, Japan",
        Awards: "1 win & 3 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTc0Mzc2OTQ0Ml5BMl5BanBnXkFtZTgwOTQ5MjE4MDI@.jpg",

        imdbRating: "5.5"
      },
      {
        id: 37,
        Title: "Zootopia",
        Year: "2016",
        Rated: "PG",
        Released: "04 Mar 2016",
        Runtime: "108 min",
        Genre: "Animation, Adventure, Comedy, Crime, Family, Mystery",
        Director: "Byron Howard, Rich Moore, Jared Bush(co-director)",
        Writer:
          "Byron Howard (story by), Rich Moore (story by), Jared Bush (story by), Jim Reardon (story by), Josie Trinidad (story by), Phil Johnston (story by), Jennifer Lee (story by), Jared Bush (screenplay by), Phil Johnston (screenplay by)",
        Actors: "Ginnifer Goodwin, Jason Bateman, Idris Elba, Jenny Slate",
        Plot:
          "From the largest elephant to the smallest shrew, the city of Zootopia is a mammal metropolis where various animals live and thrive. When Judy Hopps becomes the first rabbit to join the police force, she quickly learns how tough it is to enforce the law. Determined to prove herself, Judy jumps at the opportunity to solve a mysterious case. Unfortunately, that means working with Nick Wilde, a wily fox who makes her job even harder.",
        Language: "English",
        Country: "USA",
        Awards: "Won 1 Oscar. Another 45 wins & 65 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@.jpg",

        imdbRating: "8.0"
      },
      {
        id: 38,
        Title: "Moana",
        Year: "2016",
        Rated: "PG",
        Released: "23 Nov 2016",
        Runtime: "107 min",
        Genre: "Animation, Adventure, Comedy, Family, Fantasy, Musical",
        Director:
          "Ron Clements, John Musker, Don Hall(co-director), Chris Williams(co-director)",
        Writer:
          "Jared Bush (screenplay by), Ron Clements (story by), John Musker (story by), Chris Williams (story by), Don Hall (story by), Pamela Ribon (story by), Aaron Kandell (story by), Jordan Kandell (story by)",
        Actors:
          "Auli'i Cravalho, Dwayne Johnson, Rachel House, Temuera Morrison",
        Plot:
          "Moana Waialiki is a sea voyaging enthusiast and the only daughter of a chief in a long line of navigators. When her island's fishermen can't catch any fish and the crops fail, she learns that the demigod Maui caused the blight by stealing the heart of the goddess, Te Fiti. The only way to heal the island is to persuade Maui to return Te Fiti's heart, so Moana sets off on an epic journey across the Pacific. The film is based on stories from Polynesian mythology.",
        Language: "English",
        Country: "USA",
        Awards: "Nominated for 2 Oscars. Another 18 wins & 83 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@.jpg",

        imdbRating: "7.6"
      },
      {
        id: 39,
        Title: "Sausage Party",
        Year: "2016",
        Rated: "R",
        Released: "12 Aug 2016",
        Runtime: "89 min",
        Genre: "Animation, Adventure, Comedy, Fantasy",
        Director: "Greg Tiernan, Conrad Vernon",
        Writer:
          "Kyle Hunter (screenplay by), Ariel Shaffir (screenplay by), Seth Rogen (screenplay by), Evan Goldberg (screenplay by), Seth Rogen (story by), Evan Goldberg (story by), Jonah Hill (story by)",
        Actors: "Alistair Abell, Iris Apatow, Sugar Lyn Beard, Michael Cera",
        Plot:
          "The products at Shopwell's Grocery Store are made to believe a code that helps them live happy lives until it's time for them to leave the comfort of the supermarket and head for the great beyond. However, after a botched trip to the great beyond leaves one sausage named Frank and his companion Bun stranded, Frank goes to great lengths (pun intended) to return to his package and make another trip to the great beyond. But as Frank's journey takes him from one end of the supermarket to the other, Frank's quest to discover the truth about his existence as a sausage turns incredibly dark. Can he expose the truth to the rest of the supermarket and get his fellow products to rebel against their human masters?",
        Language: "English",
        Country: "USA",
        Awards: "1 win & 24 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjkxOTk1MzY4MF5BMl5BanBnXkFtZTgwODQzOTU5ODE@.jpg",

        imdbRating: "6.2"
      },
      {
        id: 40,
        Title: "The Incredibles",
        Year: "2004",
        Rated: "PG",
        Released: "05 Nov 2004",
        Runtime: "115 min",
        Genre: "Animation, Action, Adventure, Family",
        Director: "Brad Bird",
        Writer: "Brad Bird",
        Actors: "Craig T. Nelson, Holly Hunter, Samuel L. Jackson, Jason Lee",
        Plot:
          'Bob Parr (A.K.A. Mr. Incredible), and his wife Helen (A.K.A. Elastigirl), are the world\'s greatest famous crime-fighting superheroes in Metroville. Always saving lives and battling evil on a daily basis. But fifteen years later, they have been forced to adopt civilian identities and retreat to the suburbs where they have no choice but to retire as superheroes to live a "normal life" with their three children Violet, Dash and Jack-Jack (who were secretly born with superpowers). Itching to get back into action, Bob gets his chance when a mysterious communication summons him to a remote island for a top secret assignment. He soon discovers that it will take a super family effort to rescue the world from total destruction.',
        Language: "English, French",
        Country: "USA",
        Awards: "Won 2 Oscars. Another 65 wins & 55 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@.jpg",

        imdbRating: "8.0"
      },
      {
        id: 41,
        Title: "Incredibles 2",
        Year: "2018",
        Rated: "PG",
        Released: "15 Jun 2018",
        Runtime: "118 min",
        Genre: "Animation, Action, Adventure, Comedy, Family, Sci-Fi",
        Director: "Brad Bird",
        Writer: "Brad Bird",
        Actors: "Craig T. Nelson, Holly Hunter, Sarah Vowell, Huck Milner",
        Plot:
          "The Incredibles hero family takes on a new mission, which involves a change in family roles: Bob Parr (Mr Incredible) must manage the house while his wife Helen (Elastigirl) goes out to save the world.",
        Language: "English",
        Country: "USA",
        Awards: "N/A",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTEzNzY0OTg0NTdeQTJeQWpwZ15BbWU4MDU3OTg3MjUz.jpg",

        imdbRating: "7.7"
      },
      {
        id: 42,
        Title: "Toy Story 4",
        Year: "2019",
        Rated: "G",
        Released: "21 Jun 2019",
        Runtime: "100 min",
        Genre: "Animation, Adventure, Comedy, Family, Fantasy",
        Director: "Josh Cooley",
        Writer:
          "John Lasseter (original story by), Andrew Stanton (original story by), Josh Cooley (original story by), Valerie LaPointe (original story by), Rashida Jones (original story by), Will McCormack (original story by), Martin Hynes (original story by), Stephany Folsom (original story by), Andrew Stanton (screenplay by), Stephany Folsom (screenplay by)",
        Actors: "Tom Hanks, Tim Allen, Annie Potts, Tony Hale",
        Plot:
          'When a new toy called "Forky" joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy.',
        Language: "English",
        Country: "USA",
        Awards: "N/A",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@.jpg",

        imdbRating: "8.1"
      },
      {
        id: 43,
        Title: "How to Train Your Dragon: The Hidden World",
        Year: "2019",
        Rated: "PG",
        Released: "22 Feb 2019",
        Runtime: "104 min",
        Genre: "Animation, Action, Adventure, Family, Fantasy",
        Director: "Dean DeBlois",
        Writer:
          'Dean DeBlois, Cressida Cowell (based upon the "How to Train Your Dragon" book series by)',
        Actors:
          "Jay Baruchel, America Ferrera, F. Murray Abraham, Cate Blanchett",
        Plot:
          'When Hiccup discovers Toothless isn\'t the only Night Fury, he must seek "The Hidden World", a secret Dragon Utopia before a hired tyrant named Grimmel finds it first.',
        Language: "English",
        Country: "USA, Japan",
        Awards: "N/A",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjIwMDIwNjAyOF5BMl5BanBnXkFtZTgwNDE1MDc2NTM@.jpg",

        imdbRating: "7.5"
      }
    ];
    return { movies };
  }
}