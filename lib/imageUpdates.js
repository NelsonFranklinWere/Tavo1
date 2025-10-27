// Image Implementation Helper for TAVO
// This script helps update image paths when you add new premium images

const imageUpdates = {
  // Hero Images
  hero: {
    homepage: "/hero/homepage-hero.jpg",
    menu: "/hero/menu-hero.jpg", 
    reservations: "/hero/reservations-hero.jpg"
  },
  
  // Food Images
  food: {
    starters: {
      truffleArancini: "/food/starters/truffle-arancini.jpg",
      wagyuCarpaccio: "/food/starters/wagyu-carpaccio.jpg",
      lobsterBisque: "/food/starters/lobster-bisque.jpg",
      burrataCaprese: "/food/starters/burrata-caprese.jpg"
    },
    mains: {
      wagyuTenderloin: "/food/mains/wagyu-tenderloin.jpg",
      duckBreast: "/food/mains/duck-breast.jpg",
      truffleRisotto: "/food/mains/truffle-risotto.jpg",
      salmonPapillote: "/food/mains/salmon-papillote.jpg",
      rackOfLamb: "/food/mains/rack-of-lamb.jpg"
    },
    desserts: {
      chocolateSouffle: "/food/desserts/chocolate-souffle.jpg",
      tiramisu: "/food/desserts/tiramisu.jpg",
      cremeBrulee: "/food/desserts/creme-brulee.jpg"
    }
  },
  
  // Drink Images
  drinks: {
    cocktails: "/drinks/cocktails/signature-cocktails.jpg",
    wine: "/drinks/wine/wine-selection.jpg",
    coffee: "/drinks/coffee/artisan-coffee.jpg",
    juices: "/drinks/juices/fresh-juices.jpg"
  },
  
  // Interior Images
  interior: {
    diningRoom: "/interior/dining-room/elegant-dining.jpg",
    ambiance: "/interior/ambiance/sophisticated-lighting.jpg",
    setup: "/interior/setup/premium-table-setting.jpg"
  }
};

// Usage: Replace old image paths with new premium images
// Example: Update menu items with new food photography

export default imageUpdates;
