import React from "react";
import RotatingGalleryDisplay from "./RotatingGalleryDisplay";
export default function Home() {

  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-5 bg-gradient-to-b from-neutral-100 to-neutral-50">
        <p className="max-w-xl text-lg text-neutral-600 mb-3">
          Handcrafted stone pieces inspired by the raw beauty of the Earth.
          Lapidary art. Custom cuts. Tumbled rock.
        </p>
        {/* Rotating Gallery Display */}
        <div className="w-full flex justify-center">
          <div style={{ width: '100%', maxWidth: 600 }}>
            <RotatingGalleryDisplay />
          </div>
        </div>
      </section>

        {/* Events Section */}
      <section className="px-6 py-20 text-center bg-white">
        <h2 className="text-2xl font-semibold mb-6">Upcoming Events</h2>
        <ul className="list-disc list-inside mt-2 text-neutral-600 mb-2">
          <li>Downtown Albuquerque Artwalk - Friday, June 5th 4:00 PM - 8:00 PM</li>
          <li>To Be Announced</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-20 text-center bg-white">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <a
          href="mailto:angusstonecraft@gmail.com"
          className="rounded-2xl px-6 py-3 text-base text-black hover:opacity-80 transition inline-block mb-6"
          style={{ backgroundColor: "#d6a461" }}
        >
          Contact for Custom Orders
        </a>
        <p className="text-neutral-600 mb-4">
          Email: angusstonecraft@gmail.com
        </p>
        <p className="text-neutral-600 mb-8">
          Based in Albuquerque, NM
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-neutral-500 border-t">
        © {new Date().getFullYear()} Angus Stonecraft. All rights reserved.
      </footer>

    </>
  );
}
