interface ContactFormProps {
  onSubmitted?: () => void;
}

export default function ContactForm({ onSubmitted }: ContactFormProps) {
  return (
    <div className="w-full">
      <iframe 
        src="https://tally.so/embed/wk22Pr?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        className="w-full h-[500px] rounded-md"
        frameBorder="0"
        loading="lazy"
        title="Contact form"
      />
    </div>
  );
}
