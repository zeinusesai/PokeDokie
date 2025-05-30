import { useState, useEffect } from 'react';
import { Search as SearchIcon } from 'lucide-react';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredGames, setFilteredGames] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState('home');
  const [sortOption, setSortOption] = useState('alpha');

  const gamesData = [
    {
      id: 1,
      title: "Pokémon Infinite Fusion",
      category: "fangame",
      description: "A fan-made game that allows you to fuse any two Pokémon, creating over 220,000 unique species, offering a fresh twist on classic gameplay.",
      releaseDate: "2022-08-15",
      image: "https://pokemoninfinitefusion.io/data/image/posts/pokemon-infinite-fusion-banner2.jpg ",
      link: "#game/pokemon-infinite-fusion",
      features: ["Create over 220,000 fused Pokémon", "Custom battle mechanics", "New regions and storylines"],
      platform: "Windows",
      downloads: [
        { name: "Download", url: "https://www.mediafire.com/file/fmfdzkpyf21rznt/InfiniteFusion.zip/file " }
      ]
    },
    {
      id: 2,
      title: "Pokémon Insurgence",
      category: "fangame",
      description: "Set in the Torren region, this game introduces Delta Pokémon, Armored Pokémon, and a dark storyline involving cults, providing a challenging and immersive experience.",
      releaseDate: "2022-06-10",
      image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/08/Featured-Pokemon-Insurgence.jpg ",
      link: "#game/pokemon-insurgence",
      features: ["Delta & Armored Pokémon", "Dark storyline", "Challenging difficulty"],
      platform: "Windows",
      downloads: [
        { name: "Download", url: "https://p-insurgence.com/releases/1.2.7/Pokemon%20Insurgence%201.2.7%20Core.zip " }
      ]
    },
    {
      id: 3,
      title: "Pokémon Reborn",
      category: "fangame",
      description: "A story-rich game featuring all Pokémon up to Generation 7, 18 Gym Leaders, and unique Field Effects that add strategic depth to battles.",
      releaseDate: "2021-09-01",
      image: "https://i.ytimg.com/vi/RxXayZFAW1g/maxresdefault.jpg ",
      link: "#game/pokemon-reborn",
      features: ["All Gen 1–7 Pokémon", "18 Gym Leaders", "Field Effects system"],
      platform: "Windows",
      downloads: [
        { name: "Download", url: "https://mega.nz/file/ewFXlDoR #QXAechPdn_4Gts-d1qU20yqrR-Ztz05PpyyznXATNjg" }
      ]
    },
    {
      id: 4,
      title: "Pokémon Rejuvenation",
      category: "fangame",
      description: "Inspired by Reborn, this game offers a Generation 3-styled adventure with content up to Generation 8, set in the Aevium region with a focus on story and challenging gameplay.",
      releaseDate: "2022-01-20",
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co5stf.jpg ",
      link: "#game/pokemon-rejuvenation",
      features: ["Gen 3 style with Gen 8 content", "New region: Aevium", "Expanded story and difficulty"],
      platform: "Windows",
      downloads: [
        { name: "Mirror 1", url: "https://mega.nz/file/EZgiTTAL #L3ha8Yng0rwtR-g3ehfh5-xFEftbbVbUs0m0LgAT3Yg" },
        { name: "Mirror 2", url: "https://www.mediafire.com/file/48kgy92ig4d3d1n/Rejuvenation-13.5.0-windows.zip/file " }
      ]
    },
    {
      id: 5,
      title: "Pokémon Fairies",
      category: "fangame",
      description: "A short, narrative-driven game without battles or Pokémon capturing, focusing on story and puzzles in an enchanting cloud-based world.",
      releaseDate: "2020-11-10",
      image: "https://i.imgur.com/7qdPiAA.png ",
      link: "#game/pokemon-fairies",
      features: ["Narrative-focused", "No battles or capturing", "Puzzle-based gameplay"],
      platform: "Windows",
      downloads: [
        { name: "Download", url: "https://mega.nz/file/ZtowyTzb #pYEZa_wjFGalKbz1dD7Dfa6W-EGk5BPabNMFQKsjXbA" }
      ]
    },
    {
      id: 6,
      title: "Pokémon Zeta & Omicron",
      category: "fangame",
      description: "Twin games offering around 70 hours of gameplay across two regions, featuring a vast array of Pokémon up to Generation 5 and a compelling storyline.",
      releaseDate: "2021-12-15",
      image: "https://howlongtobeat.com/games/89588_Pokemon_Zeta.jpg ",
      link: "#game/pokemon-zeta-omicron",
      features: ["Two interconnected games", "70+ hours of gameplay", "Rich story and exploration"],
      platform: "Windows",
      downloads: [
        { name: "Zeta", url: "https://zo.p-insurgence.com/releases/1.5.5/Pokemon%20Zeta%201.5.5.2%20PC.zip " },
        { name: "Omicron", url: "https://zo.p-insurgence.com/releases/1.5.5/Pokemon%20Omicron%201.5.5.2%20PC.zip " }
      ]
    },
    {
      id: 7,
      title: "Pokémon Radical Red",
      category: "romhack",
      description: "A challenging FireRed ROM hack that includes Pokémon up to Generation 8, Mega Evolution, and various quality-of-life improvements.",
      releaseDate: "2021-10-01",
      image: "https://cdn2.steamgriddb.com/grid/2fe0ac4f5a258e637671444f00d1835f.png ",
      link: "#game/pokemon-radical-red",
      features: ["Hardcore difficulty", "Mega Evolutions", "Generation 8 support"],
      platform: "GBA",
      downloads: [
        { name: "Mirror 1", url: "https://www.mediafire.com/file/98myh6iojyw6y2w/radicalred+4.1.zip/file " },
        { name: "Mirror 2", url: "https://mega.nz/file/I3k1HA5a #kJmzbHJ6TbTxhGN5yMdyvFgavP58ndsMboNbXk62hBc" },
        { name: "Mirror 3", url: "https://1drv.ms/u/s !Ak9jFBtCj_RliDdlkvvfh3rcwR5R?e=C9iH69" }
      ]
    },
    {
      id: 8,
      title: "Pokémon Emerald Emperium",
      category: "romhack",
      description: "A difficulty and quality-of-life hack of Emerald, fully complete with post-game content, offering a fresh take on the classic game.",
      releaseDate: "2022-04-05",
      image: "https://i.ytimg.com/vi/gJvcZ9EMSXs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDtkC9jw9QqFMwBLDH6rchZh45zXQ ",
      link: "#game/pokemon-emerald-emperium",
      features: ["Enhanced difficulty", "Quality-of-life fixes", "Complete post-game content"],
      platform: "GBA",
      downloads: [
        { name: "Mirror 1", url: "https://www.mediafire.com/file/48ayfii5xwu6nxj/imperium+v1.2.zip/file " },
        { name: "Mirror 2", url: "https://mega.nz/file/RP8C2SAL #l5bjmUVTMosYiKjisRB3TLHtjQ9DffevdluSHXE9ojQ" }
      ]
    },
    {
      id: 9,
      title: "Pokémon FireRed Rocket Edition",
      category: "romhack",
      description: "Play as a Team Rocket grunt in this unique hack, featuring a darker storyline where you can steal Pokémon and rise through the criminal ranks.",
      releaseDate: "2021-07-20",
      image: "https://images.launchbox-app.com/6f4b8380-72e6-47b6-a282-b2869fc36c23.png ",
      link: "#game/pokemon-firered-rocket-edition",
      features: ["Team Rocket protagonist", "Dark storyline", "Unique events and locations"],
      platform: "GBA",
      downloads: [
        { name: "Mirror 1", url: "https://www.mediafire.com/file/b8jmf6x96gg317o/Pokemon+Fire+Red+Rocket+Edition+ (v1.02).zip/file" },
        { name: "Mirror 2", url: "https://mega.nz/file/VEJHhDBa #yHeU8EOfUW6G-I0f4e9m05U-BprOv5PRgxpKmLv6pN0" },
        { name: "Mirror 3", url: "https://1drv.ms/u/s !Ak9jFBtCj_RlhHF79EqRHWG2e0J7?e=BKWNCO" }
      ]
    },
    {
      id: 10,
      title: "Pokémon Unbound",
      category: "romhack",
      description: "A comprehensive hack with a custom battle engine, including Pokémon up to Generation 7, offering a polished experience with a rich story and enhanced gameplay mechanics.",
      releaseDate: "2022-05-15",
      image: "https://static.unboundwiki.com/wp-content/assets/images/2024/10/unbound-start.jpg ",
      link: "#game/pokemon-unbound",
      features: ["Custom battle engine", "Gen 1–7 Pokémon", "Battle Frontier DLC"],
      platform: "Windows",
      downloads: [
        { name: "Main Game", url: "https://www.mediafire.com/file/mi0wsf0ectslxr2/Pokemon+Unbound+ (v2.1.1.1).zip/file" },
        { name: "Battle Frontier", url: "https://www.pokeharbor.com/2022/08/pokemon-unbound-battle-frontier/ " }
      ]
    },
    {
      id: 11,
      title: "Pokémon Glazed",
      category: "romhack",
      description: "An Emerald-based hack featuring three regions, a mix of Pokémon from various generations, and a storyline involving dimensional travel.",
      releaseDate: "2020-03-01",
      image: "https://therpgspotlight.wordpress.com/wp-content/uploads/2020/03/pokemon-glazed-ver-8.6.3_01.png ",
      link: "#game/pokemon-glazed",
      features: ["Three regions", "Dimensional storyline", "Mix of Pokémon from many generations"],
      platform: "GBA",
      downloads: [
        { name: "Unofficial v9.1.0", url: "https://www.mediafire.com/file/gjp0twn6voyy44a/Pokemon+Glazed+ (Unofficial+v9.1.0).zip/file" },
        { name: "Official v8.6.3", url: "https://www.mediafire.com/file/dyxr11wvrkie5ys/Glazed+v8.6.3.zip/file " }
      ]
    },
    {
      id: 12,
      title: "Pokémon Gaia",
      category: "romhack",
      description: "A FireRed hack set in the Orbtus region, incorporating Pokémon up to Generation 6, Mega Evolution, and modern mechanics like the Physical/Special split.",
      releaseDate: "2019-04-04",
      image: "https://sphericalice.com/romhacking/hacks/gaia/screenshots/titlescreen.png ",
      link: "#game/pokemon-gaia",
      features: ["Orbtus region", "Mega Evolutions", "Modern mechanics"],
      platform: "GBA",
      downloads: [
        { name: "Download", url: "https://www.mediafire.com/file/xao715cvrdjx6a3/pokemon_gaia_v3.2.gba.zip/file " }
      ]
    }
  ];


  const gameSlug = window.location.hash.replace('#game/', '').toLowerCase();
  const selectedGame = gamesData.find(game => game.link.includes(gameSlug));

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.startsWith('#game/')) {
        setCurrentPage('game');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    let results = gamesData;

    if (activeCategory !== 'all') {
      results = results.filter(game => game.category === activeCategory);
    }

    if (searchTerm) {
      results = results.filter(game =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    switch (sortOption) {
      case 'newest':
        results.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
        break;
      case 'oldest':
        results.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate));
        break;
      case 'alpha':
      default:
        results.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    setFilteredGames(results);
  }, [searchTerm, activeCategory, sortOption]);

  if (currentPage === 'game' && selectedGame) {
    return <GameDetailsPage game={selectedGame} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-indigo-900 text-white">
      <header className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 p-8 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4">PokéDokie</h1>
          <p className="text-xl mb-6">Discover the latest complete Pokémon fangames and ROM hacks!</p>

          <div className="flex justify-center mb-6">
            <input
              type="text"
              placeholder="Search by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md px-4 py-3 rounded-l-full focus:outline-none text-gray-800"
            />
            <button className="bg-blue-600 hover:bg-blue-700 transition duration-300 px-4 py-3 rounded-r-full">
              <SearchIcon />
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="bg-white text-gray-800 px-4 py-2 rounded-full"
            >
              <option value="alpha">Alphabetical</option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>

            {['all', 'romhack', 'fangame'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition ${
                  activeCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All' : category === 'romhack' ? 'ROM Hacks' : 'Fangames'}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Game List */}
      <main className="container mx-auto py-8 px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transform transition"
            >
              <img src={game.image.trim()} alt={game.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{game.title}</h2>
                <p className="text-sm mb-2">{game.description}</p>
                <div className="mb-2 text-xs text-gray-400">{game.releaseDate}</div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {game.features.map((feature, idx) => (
                    <span key={idx} className="bg-purple-700 text-xs px-2 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                <a
                  href={game.link}
                  className="inline-block mt-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition"
                >
                  View Game
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
