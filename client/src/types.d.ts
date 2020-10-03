interface logEntries {
  _id: string;
  title: string;
  comments: string;
  visitDate: date;
  latitude: number;
  longitude: number;
  rating: number;
  image: string;
  createdAt: date;
  updatedAt: date;
}

interface showPopup {
  _id?: string;
}

interface addEntryLocation {
  latitude: number;
  longitude: number;
}
