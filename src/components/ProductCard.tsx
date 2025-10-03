interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  productUrl: string;
  rating?: {
    score: number;
    count: number;
  };
}

export default function ProductCard({ title, price, image, productUrl, rating }: ProductCardProps) {
  const handleClick = () => {
    window.open(productUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className="group relative w-full border-2 border-foreground bg-background overflow-hidden hover:shadow-strong transition-all duration-300 text-left"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 border-t-2 border-foreground">
        <h3 className="font-dmsans font-bold text-base text-foreground mb-2">
          {title}
        </h3>
        {rating && (
          <div className="flex items-center gap-1 mb-2 text-sm text-foreground">
            <span>⭐</span>
            <span>{rating.score}</span>
            <span>({rating.count})</span>
          </div>
        )}
        {/* Price Flag */}
        <div className="inline-block bg-foreground text-background px-4 py-2 font-bold text-base relative">
          {price}
          <div className="absolute top-0 right-0 w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-l-[10px] border-l-foreground transform translate-x-full" />
        </div>
      </div>
    </button>
  );
}
