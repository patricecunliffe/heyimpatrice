import { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface WebsiteScreenshotProps {
  url: string;
  title: string;
  className?: string;
  onClick?: () => void;
}

const WebsiteScreenshot = ({ url, title, className = "", onClick }: WebsiteScreenshotProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Using screenshot.rocks free service
  const screenshotUrl = `https://image.thum.io/get/width/800/crop/600/${url.startsWith('http') ? url : `https://${url}`}`;

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  if (error) {
    return (
      <div className={`w-full h-[400px] bg-muted rounded-2xl flex items-center justify-center ${className}`}>
        <div className="text-center">
          <p className="text-muted-foreground">Website Preview</p>
          <p className="text-sm text-muted-foreground">{url}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} onClick={onClick}>
      {loading && (
        <Skeleton className="w-full h-[400px] rounded-2xl" />
      )}
      <img
        src={screenshotUrl}
        alt={`Screenshot of ${title} website`}
        className={`w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110 ${loading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={handleLoad}
        onError={handleError}
        style={{ display: loading ? 'none' : 'block' }}
      />
    </div>
  );
};

export default WebsiteScreenshot;