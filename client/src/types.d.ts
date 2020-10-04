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

interface logEntryFOrmData {
  title: string;
  comments: string;
  description: string;
  image: string;
  visitDate: string;
  latitude: number;
  longitude: number;
}
