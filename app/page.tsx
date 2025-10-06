import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Juan Peláez
      </h1>
      <p className="mb-4">
        {`Full Stack Developer and AI Specialist with expertise in Python, FastAPI, Next.js, and Google Cloud Platform. Specialized in automation, computer vision, and AI-powered solutions. Former Colombian Navy Captain with 15 years of operational leadership. Currently developing an anti-drone AI system using YOLOv5 and pursuing Google Cloud Machine Learning Engineering certification.`}
      </p>
      <div className="my-8 flex gap-4">
        <a 
          href="https://github.com/Juanespape" 
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a 
          href="https://github.com/Juanespape/seo-maps-analyzer" 
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Featured Project
        </a>
        <a 
          href="mailto:juan.pelaez.tech@gmail.com" 
          className="text-blue-600 hover:underline"
        >
          Contact
        </a>
      </div>
    </section>
  )
}
