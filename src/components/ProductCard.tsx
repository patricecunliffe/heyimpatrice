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
      className="group relative w-full rounded-2xl border border-border bg-card overflow-hidden hover:shadow-strong transition-all duration-300 hover:scale-[1.02] text-left"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        {/* Price Tag */}
        <div className="absolute bottom-3 left-3 bg-foreground text-background px-3 py-1.5 rounded-lg font-bold text-sm shadow-medium">
          {price}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-dmsans font-bold text-base text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        {rating && (
          <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
            <span>⭐</span>
            <span>{rating.score}</span>
            <span>({rating.count})</span>
          </div>
        )}
      </div>
    </button>
  );
}
