interface ContactProps {
  xl?: boolean;
}

export default function Contact({ xl }: ContactProps) {
  return (
    <div className={`flex items-center justify-center ${xl ? "h-screen" : "h-[50vh]"}`}>
      <div
        className={`flex flex-col items-center justify-center mt-[12.8rem] mb-[12.25rem] animate-[load_1s] ${
          xl
            ? "text-[4.5rem] leading-[5.375rem]"
            : "text-[2.375rem] leading-[2.9rem]"
        }`}
      >
        <div>Let&apos;s work together.</div>
        <div className="text-[#7F7F7F] hover:text-[#BFBFBF]">
          <a href="mailto:oli@oh.studio">Get in touch.</a>
        </div>
      </div>
    </div>
  );
}
