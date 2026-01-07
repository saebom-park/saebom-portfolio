"use client";

type ImageLightboxProps = {
  src: string;
  alt?: string;
  onClose: () => void;
};

export default function ImageLightbox({ src, alt, onClose }: ImageLightboxProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
      onClick={onClose}
    >
      {/* 고정 프레임 */}
      <div
        className="w-full max-w-5xl overflow-hidden rounded-2xl bg-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-[70vh] w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt ?? ""}
            className="h-full w-full object-contain bg-zinc-100"
          />
        </div>
      </div>
    </div>
  );
}
