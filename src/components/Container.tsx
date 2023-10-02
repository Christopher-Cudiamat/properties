interface IContainerProps {
  children: React.ReactNode; //👈 children prop typr
  className: string;
};

export default function Container({
  children,
  className
}: IContainerProps) {

  return (
    <div className={`${className} container mx-auto px-6`}>
      { children }
    </div>
  );
}