import { APP_NAME } from "@/constants/layout";
import { Move3d, Video, Globe, Layers, Film, Crop } from "lucide-react";

const features = [
  {
    name: "Large-Scale Reasonable Motion",
    description:
      "Kling AI utilizes a 3D spatiotemporal joint attention mechanism, better modeling complex spatiotemporal motions to generate video content with significant motion while adhering to motion rules.",
    href: "/features/large-motion",
    icon: Move3d,
  },
  {
    name: "Up to 2 Minutes of Video Generation",
    description:
      "Thanks to efficient training infrastructure, extreme inference optimization, and scalable architecture, Kling AI can generate videos up to 2 minutes long with a frame rate of 30fps.",
    href: "/features/long-videos",
    icon: Video,
  },
  {
    name: "Simulate Physical World Characteristics",
    description:
      "Based on proprietary model architecture and the strong modeling capabilities inspired by Scaling Law, Kling AI can simulate real-world physical characteristics, generating videos that conform to physical laws.",
    href: "/features/physical-simulation",
    icon: Globe,
  },
  {
    name: "Powerful Concept Combination Ability",
    description:
      "With a deep understanding of text-to-video semantics and the powerful Diffusion Transformer architecture, Kling AI can transform users' rich imagination into concrete images, creating scenarios that do not exist in the real world.",
    href: "/features/concept-combination",
    icon: Layers,
  },
  {
    name: "Cinema-Grade Video Generation",
    description:
      "Based on proprietary 3D VAE, Kling AI can generate cinema-grade videos with 1080p resolution, vividly presenting everything from vast and magnificent scenes to detailed close-ups.",
    href: "/features/cinema-grade",
    icon: Film,
  },
  {
    name: "Support for Flexible Video Aspect Ratios",
    description:
      "Kling AI adopts a variable resolution training strategy, allowing for the output of the same content in various video aspect ratios during inference, meeting the needs of more diverse video material usage scenarios.",
    href: "/features/aspect-ratio",
    icon: Crop,
  },
];

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl  text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Kling AI Features
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            With {APP_NAME}, you can create sora-like styles of your videos at
            ease
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-12 lg:mt-16 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-4 gap-y-8 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h3>{feature.name}</h3>
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  {/* <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-indigo-600"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p> */}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
