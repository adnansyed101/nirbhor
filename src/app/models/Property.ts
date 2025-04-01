import mongoose, { Types, Schema } from "mongoose";

interface IPropertyDocument extends mongoose.Document {
  title: string;
  description: string;
  type: "apartment" | "house" | "cottage" | "cabin";
  homeowner: Types.ObjectId;
  location: {
    address: string;
    city: string;
    country: string;
    coordinates: [number, number];
  };
  pricePerNight: number;
  bedrooms: number;
  maxGuests: number;
  amenities: string[];
  images: string[];
  availability: {
    startDate: Date;
    endDate: Date;
  }[];
  bookings: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const PropertySchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    type: {
      type: String,
      enum: ["apartment", "house", "cottage", "cabin"],
      required: true,
    },
    host: { type: Schema.Types.ObjectId, ref: "User", required: true },
    location: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      country: { type: String, required: true },
      coordinates: { type: [Number], index: "2dsphere" },
    },
    pricePerNight: { type: Number, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    maxGuests: { type: Number, required: true },
    amenities: { type: [String], default: [] },
    images: { type: [String], required: true },
    availability: [
      {
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
      },
    ],
    bookings: [{ type: Types.ObjectId, ref: "Booking" }],
  },
  { timestamps: true }
);

export default mongoose.model<IPropertyDocument>("Property", PropertySchema);
