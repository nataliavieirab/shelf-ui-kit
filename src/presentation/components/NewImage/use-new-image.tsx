import { useEffect, useRef, useState } from "react";

interface UseNewImageOptions {
  onFileSelect?: (file: File) => void;
  maxSizeMB?: number;
}

export default function UseNewImage({
  onFileSelect,
  maxSizeMB = 2,
}: UseNewImageOptions) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const MAX_BYTES = maxSizeMB * 1024 * 1024;
    if (file.size > MAX_BYTES) {
      alert(`Arquivo maior que ${maxSizeMB}MB`);
      e.currentTarget.value = "";
      return;
    }

    setPreviewUrl(URL.createObjectURL(file));
    onFileSelect?.(file);

    e.currentTarget.value = "";
  };

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  return {
    fileInputRef,
    previewUrl,
    handleClick,
    handleFileChange,
  };
}
