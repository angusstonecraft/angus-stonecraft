import Image from "next/image";
import { blogPosts } from "./blogData";

export default function Blog() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="flex flex-col gap-12">
        {blogPosts.map((post, idx) => (
          <article key={idx} className="bg-white rounded-lg shadow p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <div className="text-gray-500 text-sm mb-4">{new Date(post.date).toLocaleDateString()}</div>
            <div className="mb-4 flex justify-center">
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={340}
                className="object-contain rounded"
              />
            </div>
            <div className="text-lg whitespace-pre-line">{post.content}</div>
          </article>
        ))}
      </div>
    </main>
  );
}
