const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the inventory below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/warehouse");

const items = [
    {
      "itemNumber": "1896-S",
      "itemName": "ATHENS Desk",
      "category": "DESK",
      "qty": 5
    },
    {
      "itemNumber": "1908-S",
      "itemName": "LONDON Swivel Chair blue",
      "category": "CHAIR",
      "qty": 0
    },
    {
      "itemNumber": "1920-S",
      "itemName": "ANTWERP Conference Table",
      "category": "TABLE",
      "qty": 10
    },
    {
      "itemNumber": "1928-S",
      "itemName": "AMSTERDAM Lamp",
      "category": "LAMP",
      "qty": 17
    },
    {
      "itemNumber": "1936-S",
      "itemName": "BERLIN Guest Chair yellow",
      "category": "CHAIR",
      "qty": 5
    },
    {
      "itemNumber": "1960-S",
      "itemName": "ROME Guest Chair green",
      "category": "CHAIR",
      "qty": 3
    },
    {
      "itemNumber": "1964-S",
      "itemName": "TOKYO Guest Chair blue",
      "category": "CHAIR",
      "qty": 4
    },
    {
      "itemNumber": "1968-S",
      "itemName": "MEXICO Swivel Chair black",
      "category": "CHAIR",
      "qty": 4
    },
    {
      "itemNumber": "1968-W",
      "itemName": "GRENOBLE Whiteboard red",
      "category": "WHITEBOARD",
      "qty": 0
    },
    {
      "itemNumber": "1972-S",
      "itemName": "MUNICH Swivel Chair yellow",
      "category": "CHAIR",
      "qty": 0
    },
    {
      "itemNumber": "1972-W",
      "itemName": "SAPPORO Whiteboard black",
      "category": "WHITEBOARD",
      "qty": 0
    },
    {
      "itemNumber": "1980-S",
      "itemName": "MOSCOW Swivel Chair red",
      "category": "CHAIR",
      "qty": 0
    },
    {
      "itemNumber": "1984-W",
      "itemName": "SARAJEVO Whiteboard blue",
      "category": "WHITEBOARD",
      "qty": 0
    },
    {
      "itemNumber": "1988-S",
      "itemName": "SEOUL Guest Chair red",
      "category": "CHAIR",
      "qty": 0
    },
    {
      "itemNumber": "1988-W",
      "itemName": "CALGARY Whiteboard yellow",
      "category": "WHITEBOARD",
      "qty": 0
    },
    {
      "itemNumber": "1992-W",
      "itemName": "ALBERTVILLE Whiteboard green",
      "category": "WHITEBOARD",
      "qty": 0
    },
    {
      "itemNumber": "1996-S",
      "itemName": "ATLANTA Whiteboard base",
      "category": "WHITEBOARD",
      "qty": 0
    },
    {
      "itemNumber": "2000-S",
      "itemName": "SYDNEY Swivel Chair green",
      "category": "CHAIR",
      "qty": 0
    },
    {
      "itemNumber": 80001,
      "itemName": "Computer III 533 MHz",
      "category": "COMPUTER",
      "qty": 3
    },
    {
      "itemNumber": 80002,
      "itemName": "Computer III 600 MHz",
      "category": "COMPUTER",
      "qty": 4
    },
    {
      "itemNumber": 80003,
      "itemName": "Computer III 733 MHz",
      "category": "COMPUTER",
      "qty": 0
    },
    {
      "itemNumber": 80004,
      "itemName": "Computer III 800 MHz",
      "category": "COMPUTER",
      "qty": 0
    },
    {
      "itemNumber": 80005,
      "itemName": "Computer III 866 MHz",
      "category": "COMPUTER",
      "qty": 0
    },
    {
      "itemNumber": 80006,
      "itemName": "Team Work Computer 533 MHz",
      "category": "COMPUTER",
      "qty": 0
    },
    {
      "itemNumber": 80007,
      "itemName": "Enterprise Computer 667 MHz",
      "category": "COMPUTER",
      "qty": 0
    },
    {
      "itemNumber": "8904-W",
      "itemName": "Computer - Basic Package",
      "category": "COMPUTER",
      "qty": 5
    },
    {
      "itemNumber": "8908-W",
      "itemName": "Computer - Highline Package",
      "category": "COMPUTER",
      "qty": 0
    },
    {
      "itemNumber": "8912-W",
      "itemName": "Computer - Trendy Package",
      "category": "COMPUTER",
      "qty": 0
    },
    {
      "itemNumber": "8916-W",
      "itemName": "Computer - TURBO Package",
      "category": "COMPUTER",
      "qty": 0
    },
    {
      "itemNumber": "LS-100",
      "itemName": "Loudspeaker 100W OakwoodDeluxe",
      "category": "SPEAKER",
      "qty": 2
    },
    {
      "itemNumber": "LS-10PC",
      "itemName": "Loudspeakers White for PC",
      "category": "SPEAKER",
      "qty": 8
    },
    {
      "itemNumber": "LS-120",
      "itemName": "Loudspeaker Black 120W",
      "category": "SPEAKER",
      "qty": 0
    },
    {
      "itemNumber": "LS-150",
      "itemName": "Loudspeaker Cherry 150W",
      "category": "SPEAKER",
      "qty": 0
    },
    {
      "itemNumber": "LS-2",
      "itemName": "Cables for Loudspeakers",
      "category": "SPEAKER",
      "qty": 0
    },
    {
      "itemNumber": "LS-75",
      "itemName": "Loudspeaker Cherry 75W",
      "category": "SPEAKER",
      "qty": 0
    },
    {
      "itemNumber": "LS-81",
      "itemName": "Loudspeaker Walnut 80W",
      "category": "SPEAKER",
      "qty": 0
    },
    {
      "itemNumber": "LS-MAN-10",
      "itemName": "Manual for Loudspeakers",
      "category": "SPEAKER",
      "qty": 0
    },
    {
      "itemNumber": "LS-S15",
      "itemName": "Stand for Loudspeakers LS-150",
      "category": "SPEAKER",
      "qty": 0
    },
    {
      "itemNumber": 1000,
      "itemName": "Bicycle",
      "category": "BICYCLE",
      "qty": 5
    },
    {
      "itemNumber": 1001,
      "itemName": "Touring Bicycle",
      "category": "BICYCLE",
      "qty": 8
    },
    {
      "itemNumber": 1100,
      "itemName": "Front Wheel",
      "category": "BICYCLE",
      "qty": 20
    },
    {
      "itemNumber": 1110,
      "itemName": "Rim",
      "category": "BICYCLE",
      "qty": 12
    },
    {
      "itemNumber": 1150,
      "itemName": "Front Hub",
      "category": "BICYCLE",
      "qty": 50
    },
    {
      "itemNumber": 1200,
      "itemName": "Back Wheel",
      "category": "BICYCLE",
      "qty": 60
    },
    {
      "itemNumber": 1250,
      "itemName": "Back Hub",
      "category": "BICYCLE",
      "qty": 45
    },
    {
      "itemNumber": 1300,
      "itemName": "Chain Assy",
      "category": "BICYCLE",
      "qty": 100
    },
    {
      "itemNumber": 1310,
      "itemName": "Chain",
      "category": "BICYCLE",
      "qty": 120
    },
    {
      "itemNumber": 1700,
      "itemName": "Brake",
      "category": "BICYCLE",
      "qty": 300
    },
    {
      "itemNumber": 1710,
      "itemName": "Hand rear wheel Brake",
      "category": "BICYCLE",
      "qty": 200
    }
];

const warehouses = [
  {
    "warehouseCode": "CA"
  }
];

const layouts = [
  {
    "warehouseCode": "CA",
    "bin": "A1",
    "shelfNo": 1,
    "binLocation": "A1-1",
    "capacity": 100
  },
  {
    "warehouseCode": "CA",
    "bin": "A2",
    "shelfNo": 1,
    "binLocation": "A2-1",
    "capacity": 100
  },
  {
    "warehouseCode": "CA",
    "bin": "B1",
    "shelfNo": 1,
    "binLocation": "B1-1",
    "capacity": 100
  },
  {
    "warehouseCode": "CA",
    "bin": "B2",
    "shelfNo": 1,
    "binLocation": "B2-1",
    "capacity": 100
  },
  {
    "warehouseCode": "CA",
    "bin": "B3",
    "shelfNo": 1,
    "binLocation": "B3-1",
    "capacity": 100
  },
  {
    "warehouseCode": "CA",
    "bin": "B4",
    "shelfNo": 1,
    "binLocation": "B4-1",
    "capacity": 100
  },
  {
    "warehouseCode": "CA",
    "bin": "C1",
    "shelfNo": 1,
    "binLocation": "C1-1",
    "capacity": 50
  },
  {
    "warehouseCode": "CA",
    "bin": "C2",
    "shelfNo": 1,
    "binLocation": "C2-1",
    "capacity": 50
  },
  {
    "warehouseCode": "CA",
    "bin": "C3",
    "shelfNo": 1,
    "binLocation": "C3-1",
    "capacity": 50
  },
  {
    "warehouseCode": "CA",
    "bin": "C4",
    "shelfNo": 1,
    "binLocation": "C4-1",
    "capacity": 50
  },
  {
    "warehouseCode": "CA",
    "bin": "D1",
    "shelfNo": 1,
    "binLocation": "D1-1",
    "capacity": 300
  },
  {
    "warehouseCode": "CA",
    "bin": "D2",
    "shelfNo": 1,
    "binLocation": "D2-1",
    "capacity": 300
  },
  {
    "warehouseCode": "CA",
    "bin": "A1",
    "shelfNo": 2,
    "binLocation": "A1-2",
    "capacity": 100
  },
  {
    "warehouseCode": "CA",
    "bin": "A2",
    "shelfNo": 2,
    "binLocation": "A2-2",
    "capacity": 100
  },
  {
    "warehouseCode": "CA",
    "bin": "B1",
    "shelfNo": 2,
    "binLocation": "B1-2",
    "capacity": 100
  },
  {
    "warehouseCode": "CA",
    "bin": "B2",
    "shelfNo": 2,
    "binLocation": "B2-2",
    "capacity": 100
  },
  {
    "warehouseCode": "CA",
    "bin": "B3",
    "shelfNo": 2,
    "binLocation": "B3-2",
    "capacity": 100
  },
  {
    "warehouseCode": "CA",
    "bin": "B4",
    "shelfNo": 2,
    "binLocation": "B4-2",
    "capacity": 100
  },
  {
    "warehouseCode": "CA",
    "bin": "C1",
    "shelfNo": 2,
    "binLocation": "C1-2",
    "capacity": 50
  },
  {
    "warehouseCode": "CA",
    "bin": "C2",
    "shelfNo": 2,
    "binLocation": "C2-2",
    "capacity": 50
  },
  {
    "warehouseCode": "CA",
    "bin": "C3",
    "shelfNo": 2,
    "binLocation": "C3-2",
    "capacity": 50
  },
  {
    "warehouseCode": "CA",
    "bin": "C4",
    "shelfNo": 2,
    "binLocation": "C4-2",
    "capacity": 50
  },
  {
    "warehouseCode": "CA",
    "bin": "D1",
    "shelfNo": 2,
    "binLocation": "D1-2",
    "capacity": 300
  },
  {
    "warehouseCode": "CA",
    "bin": "D2",
    "shelfNo": 2,
    "binLocation": "D2-2",
    "capacity": 300
  },
  {
    "warehouseCode": "CA",
    "bin": "A1",
    "shelfNo": 3,
    "binLocation": "A1-3",
    "capacity": 20
  },
  {
    "warehouseCode": "CA",
    "bin": "A2",
    "shelfNo": 3,
    "binLocation": "A2-3",
    "capacity": 20
  },
  {
    "warehouseCode": "CA",
    "bin": "B1",
    "shelfNo": 3,
    "binLocation": "B1-3",
    "capacity": 20
  },
  {
    "warehouseCode": "CA",
    "bin": "B2",
    "shelfNo": 3,
    "binLocation": "B2-3",
    "capacity": 20
  }
];

const binQuantities = [
  {
    "warehouseCode": "CA",
    "binLocation": "A1-1",
    "itemNumber": "Chain Assy",
    "binQty": 50,
    "modifiedDate": "2021-01-12"
  },
  {
    "warehouseCode": "CA",
    "binLocation": "A1-1",
    "itemNumber": "Chain Assy",
    "binQty": 50,
    "modifiedDate": "2021-01-12"
  },
  {
    "warehouseCode": "CA",
    "binLocation": "A1-3",
    "itemNumber": "Brake",
    "binQty": 200,
    "modifiedDate": "2021-01-12"
  },
  {
    "warehouseCode": "CA",
    "binLocation": "A2-2",
    "itemNumber": "Chain",
    "binQty": 120,
    "modifiedDate": "2021-01-12"
  },
  {
    "warehouseCode": "CA",
    "binLocation": "A2-3",
    "itemNumber": "Brake",
    "binQty": 100,
    "modifiedDate": "2021-01-11"
  },
  {
    "warehouseCode": "CA",
    "binLocation": "B1-1",
    "itemNumber": "Hand rear wheel Brake",
    "binQty": 200,
    "modifiedDate": "2021-01-12"
  },
  {
    "warehouseCode": "CA",
    "binLocation": "C1-1",
    "itemNumber": "Front Wheel",
    "binQty": 20,
    "modifiedDate": "2021-01-12"
  },
  {
    "warehouseCode": "CA",
    "binLocation": "C1-1",
    "itemNumber": "Rim",
    "binQty": 12,
    "modifiedDate": "2021-01-12"
  },
  {
    "warehouseCode": "CA",
    "binLocation": "C2-1",
    "itemNumber": "Back Wheel",
    "binQty": 50,
    "modifiedDate": "2021-01-12"
  },
  {
    "warehouseCode": "CA",
    "binLocation": "C2-2",
    "itemNumber": "Back Wheel",
    "binQty": 10,
    "modifiedDate": "2021-01-12"
  },
  {
    "warehouseCode": "CA",
    "binLocation": "C3-1",
    "itemNumber": "Front Hub",
    "binQty": 50,
    "modifiedDate": "2021-01-12"
  },
  {
    "warehouseCode": "CA",
    "binLocation": "C3-2",
    "itemNumber": "Back Hub",
    "binQty": 45,
    "modifiedDate": "2021-01-12"
  },
  {
    "warehouseCode": "CA",
    "binLocation": "D1-1",
    "itemNumber": 1000,
    "binQty": 5,
    "modifiedDate": "2021-01-12"
  },
  {
    "warehouseCode": "CA",
    "binLocation": "D2-1",
    "itemNumber": 1001,
    "binQty": 8,
    "modifiedDate": "2021-01-12"
  }
];


db.Item.remove({})
  .then(() => db.Item.collection.insertMany(items))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Warehouse.remove({})
  .then(() => db.Warehouse.collection.insertMany(warehouses))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Layout.remove({})
  .then(() => db.Layout.collection.insertMany(layouts))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.BinQty.remove({})
  .then(() => db.BinQty.collection.insertMany(binQuantities))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });