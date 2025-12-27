interface CardProps {
  name: string;
  language: string;
  description: string;
}

export default function Card({language, name, description }: CardProps) {
  return (
      <div className="flex flex-row align-baseline items-cente p-1 w-100">
        <div className="flex flex-col justify-baseline p-4">
          <p>
            {name}
          </p>
          <p className="text-xs font-semibold">
            {language}
          </p>
          <p className="text-xs">
            {description}
          </p>
        </div>
      </div>
  );
}


/*
      <div className="rounded-2xl overflow-hidden object-fill">
        <Image src={image} alt={name} width={150} height={150} className="text-xs"/>
      </div>
      */