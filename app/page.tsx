export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-b from-neutral-100 to-neutral-50">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Angus Stonecraft
        </h1>
        <p className="max-w-xl text-lg text-neutral-600 mb-6">
          Handcrafted stone pieces inspired by the raw beauty of the Earth.
          Lapidary art. Custom cuts. Tumbled rock.
        </p>
        <a
          href="mailto:angusstonecraft@gmail.com"
          className="rounded-2xl px-6 py-3 text-base bg-black text-white hover:opacity-80 transition"
        >
          Contact for Custom Orders
        </a>
      </section>

      {/* About Section */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6">About</h2>
        <p className="text-neutral-700 leading-relaxed">
          Angus Stonecraft is a small, independent lapidary studio dedicated to
          transforming raw stone into polished, one-of-a-kind pieces. From
          statement bookends to custom-cut slabs and specialty projects, each
          piece highlights the natural patterns and character of the material.
        </p>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-20 text-center bg-white">
        <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
        <p className="text-neutral-600 mb-4">
          Email: angusstonecraft@email.com
        </p>
        <p className="text-neutral-600 mb-8">
          Based in Albuquerque, NM
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-neutral-500 border-t">
        © {new Date().getFullYear()} Angus Stonecraft. All rights reserved.
      </footer>

    </main>
  );
}
